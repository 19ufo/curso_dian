// ARCHIVO COMPILADO AUTOMÁTICAMENTE por IA/tools/compiler.js
// Fuente de verdad: IA\documentacion_gestor2
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
      "name": "📘 Pruebas Funcionales - 11 Indicadores (60% Eliminatoria)",
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
      "title": "CONCEPTOS DE GESTION PUBLICA",
      "badge": "Funcional - Principios, Ley 489 & Estructura del Estado",
      "examId": "exam-1",
      "lessons": [
        {
          "id": "les-1",
          "moduleId": "mod-1",
          "title": "CONCEPTOS DE GESTION PUBLICA",
          "badge": "Funcional - Principios, Ley 489 & Estructura del Estado",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Conceptos de Gestión Pública y Función Administrativa</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Constitución Política de 1991 (Arts. 1, 2, 6, 122, 123, 209), Ley 489 de 1998, Ley 909 de 2004, Decreto 1083 de 2015.</p>\n<hr />\n<h2>🎯 1. Principios Constitucionales de la Función Pública</h2>\n<p>En el Estado Social de Derecho colombiano, la gestión pública no es un fin en sí misma, sino el instrumento articulador para hacer efectivos los fines esenciales del Estado (servir a la comunidad, promover la prosperidad general y garantizar los derechos constitucionales, Art. 2 C.P.).</p>\n<h3>Los Principios Rectores del Artículo 209 de la Constitución Política:</h3>\n<ol>\n<li><strong>Igualdad:</strong> La administración pública debe dispensar idéntico trato a todos los ciudadanos y destinatarios de sus actos, sin favoritismos ni privilegios indebidos.</li>\n<li><strong>Moralidad:</strong> Los servidores públicos deben actuar con rectitud, lealtad y pulcritud, anteponiendo siempre el interés general al particular.</li>\n<li><strong>Eficacia:</strong> La gestión debe orientarse a la materialización concreta y oportuna de los objetivos y metas públicas trazadas, no al mero cumplimiento formal de trámites.</li>\n<li><strong>Economía:</strong> Maximización del rendimiento de los recursos públicos mediante la simplificación de procedimientos y la eliminación de trámites innecesarios.</li>\n<li><strong>Celeridad:</strong> Obligación de impulsar los trámites con diligencia y prontitud, erradicando dilaciones injustificadas en la atención de las solicitudes.</li>\n<li><strong>Imparcialidad:</strong> Decisión objetiva fundada en el ordenamiento jurídico y los hechos probados, libre de sesgos, afectos o animadversiones.</li>\n<li><strong>Publicidad:</strong> Deber de dar a conocer las decisiones y actos administrativos a la ciudadanía y a los interesados, salvo reserva legal expresa (como la reserva tributaria).</li>\n</ol>\n<div class=\"callout warning\"><p><strong>¡IMPORTANTE!</strong>\n<strong>El Principio de Legalidad (Art. 6 C.P.):</strong> Mientras que los particulares pueden hacer todo aquello que la ley no les prohíba expresamente, los servidores públicos <strong>únicamente pueden hacer lo que la Constitución y la ley les faculte de manera taxativa</strong>. Toda extralimitación u omisión en el ejercicio de las funciones acarrea responsabilidad disciplinaria, fiscal y penal.</p>\n</div>\n<hr />\n<h2>🏢 2. Estructura del Estado y Formas de Organización Administrativa (Ley 489 de 1998)</h2>\n<p>La Ley 489 de 1998 define el estatuto básico de organización y funcionamiento de la Administración Pública. En las pruebas de juicio situacional de Areandina, es vital diferenciar con precisión matemática los tres mecanismos de distribución del poder administrativo:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│               FORMAS DE ORGANIZACIÓN Y DISTRIBUCIÓN ADMINISTRATIVA                     │\n├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤\n│ DESCONCENTRACIÓN   │ DELEGACIÓN                  │ DESCENTRALIZACIÓN                   │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ Traslado de compe- │ Transferencia de ejercicio  │ Transferencia de competencias a una │\n│ tencias de un órga-│ de funciones de un superior │ persona jurídica pública autónoma   │\n│ no central a sus   │ a un colaborador mediante   │ (patrimonio propio, personería y    │\n│ dependencias terri-│ acto administrativo formal  │ autonomía administrativa).          │\n│ toriales DENTRO de │ escrito y motivado.         │                                     │\n│ la misma entidad.  │                             │                                     │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ No crea una nueva  │ El delegante conserva el    │ Tipos:                              │\n│ persona jurídica.  │ deber de vigilancia y puede │ 1. Territorial (Departamentos,      │\n│ Ej: Direcciones    │ reasumir la función en      │    Municipios, Distritos).          │\n│ Seccionales DIAN.  │ cualquier momento.          │ 2. Por servicios (Empresas públicas,│\n│                    │                             │    establecimientos públicos).      │\n└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘\n</code></pre>\n<h3>Reglas Críticas de la Delegación (Artículos 9 a 12 de la Ley 489 de 1998):</h3>\n<ul>\n<li><strong>Requisitos:</strong> Debe constar en <strong>acto administrativo escrito</strong>, determinar la autoridad delegataria y fijar las funciones o asuntos específicos delegados.</li>\n<li><strong>Prohibiciones expresas (Art. 11 Ley 489):</strong> NO se pueden delegar:</li>\n<li>La expedición de reglamentos de carácter general (salvo disposición legal en contrario).</li>\n<li>Las funciones, atribuciones y potestades recibidas a su vez en virtud de una delegación (prohibición de la <em>subdelegación</em> no autorizada).</li>\n<li>Las materias cuya delegación esté expresamente prohibida por la ley.</li>\n<li><strong>Responsabilidad:</strong> La delegación exime de responsabilidad al delegante, la cual recae exclusivamente en el delegatario, sin perjuicio de que el delegante responda por dolo o culpa grave en la vigilancia o elección del delegatario.</li>\n</ul>\n<hr />\n<h2>👥 3. Régimen del Servidor Público y Empleo Público</h2>\n<p>El Artículo 123 de la Constitución Política define que son servidores públicos los miembros de las corporaciones públicas, los <strong>empleados públicos</strong> y los <strong>trabajadores oficiales</strong>.</p>\n<ul>\n<li><strong>Empleados Públicos:</strong> Vinculación legal y reglamentaria (mediante nombramiento y posesión). Su relación con la administración está regida por normas de derecho público y manuales específicos de funciones. Los funcionarios de carrera de la DIAN son empleados públicos regidos por un sistema específico de carrera (Decretos Ley 071 de 2020 y 927 de 2023).</li>\n<li><strong>Trabajadores Oficiales:</strong> Vinculación mediante contrato de trabajo. Rigen principalmente en empresas industriales y comerciales del Estado para actividades de construcción y sostenimiento de obras públicas.</li>\n</ul>\n<h3>El Mérito como Regla General:</h3>\n<ul>\n<li>La carrera administrativa es el mecanismo constitucional preferente para garantizar la estabilidad, la profesionalización y el acceso igualitario al servicio público (Art. 125 C.P.).</li>\n<li>Principio de la estabilidad condicionada: El empleado de carrera permanece en su empleo en tanto mantenga un desempeño sobresaliente evaluado periódicamente y observe una conducta intachable.</li>\n</ul>\n<hr />\n<h2>⚖️ 4. Inhabilidades, Incompatibilidades y Conflicto de Interés</h2>\n<p>Para el cargo de <strong>Gestor II</strong>, el análisis de situaciones donde el interés general choca con el interés particular es un eje recurrente en las preguntas de juicio situacional:</p>\n<ul>\n<li><strong>Inhabilidad:</strong> Circunstancia fáctica o jurídica previa a la posesión que impide a una persona acceder a un cargo público (ej. haber sido condenado penalmente, tener parentesco en cuarto grado de consanguinidad con quien efectúa el nombramiento).</li>\n<li><strong>Incompatibilidad:</strong> Prohibición legal que sobreviene durante el ejercicio del cargo e impide realizar actividades paralelas que comprometan la dedicación o imparcialidad del servidor (ej. litigar contra la entidad, gestionar intereses privados ante dependencias oficiales).</li>\n<li><strong>Conflicto de Interés:</strong> Situación en la cual el servidor público debe tomar una decisión o participar en una actuación administrativa frente a la cual tiene un interés particular, económico, directo o indirecto, o lo tienen sus familiares cercanos.</li>\n<li><strong>Trámite obligado:</strong> El funcionario debe <strong>declararse impedido de inmediato y por escrito</strong>, remitiendo el expediente a su superior jerárquico para que designe un funcionario ad hoc (Art. 11 y 12 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA, Ley 1437 de 2011).</li>\n</ul>\n<hr />\n<h2>🎯 5. Aplicación Estratégica en la DIAN para el Gestor II</h2>\n<p>Como Gestor II en el Nivel Central o Seccional:\n1. <strong>Enfoque de Aseguramiento:</strong> Debe verificar que todos los actos, directrices y planes institucionales cumplan estrictamente el principio de legalidad y no desborden las facultades reglamentarias del cargo.\n2. <strong>Atención al Ciudadano-Contribuyente:</strong> La celeridad y la igualdad obligan a tramitar peticiones en estricto orden cronológico de radicación, sin otorgar tratamientos preferenciales no previstos en la ley.\n3. <strong>Gestión Documental y Reserva:</strong> Las actuaciones son públicas, pero con estricto límite en la <strong>Reserva Tributaria (Art. 583 del Estatuto Tributario)</strong>, de la cual el Gestor II es custodio en los procesos institucionales que apoya.</p>\n<hr />\n<h2>📋 6. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Conozco los 7 principios del Artículo 209 de la Constitución Política?</li>\n<li>[ ] ¿Sé diferenciar con precisión entre Desconcentración, Delegación y Descentralización?</li>\n<li>[ ] ¿Conozco las tres materias que no se pueden delegar según el Art. 11 de la Ley 489 de 1998?</li>\n<li>[ ] ¿Distingo la naturaleza jurídica de un empleado público frente a un trabajador oficial?</li>\n<li>[ ] ¿Tengo claro el procedimiento legal ante un conflicto de interés (declaración de impedimento por escrito)?</li>\n</ul>",
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
      "id": "mod-2",
      "track": "funcionales",
      "title": "FUNDAMENTOS DEL MODELO INTEGRADO DE PLANEACION Y GESTION MIPG",
      "badge": "Funcional - Arquitectura MIPG & 7 Dimensiones",
      "examId": "exam-2",
      "lessons": [
        {
          "id": "les-2",
          "moduleId": "mod-2",
          "title": "FUNDAMENTOS DEL MODELO INTEGRADO DE PLANEACION Y GESTION MIPG",
          "badge": "Funcional - Arquitectura MIPG & 7 Dimensiones",
          "readTime": "35 min",
          "content": "<h1>🏛️ Guía Maestra: Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Ley 1753 de 2015 (Art. 133), Decreto 1083 de 2015, Decreto 1499 de 2017, Manual Operativo MIPG Versión 5 (DAFP).</p>\n<hr />\n<h2>🎯 1. Origen, Evolución y Propósito del MIPG</h2>\n<p>El <strong>Modelo Integrado de Planeación y Gestión (MIPG)</strong> es el marco de referencia que orienta la gestión y el desempeño institucional de las entidades públicas del orden nacional y territorial en Colombia.</p>\n<h3>Antecedentes y Fusión de Sistemas:</h3>\n<p>Antes de 2015 coexistían en la administración pública dos sistemas paralelos que generaban duplicidad documental y desgaste operativo:\n1. El <strong>Sistema de Desarrollo Administrativo (SISTEDA)</strong>, regulado por la Ley 489 de 1998.\n2. El <strong>Sistema de Gestión de la Calidad (SGC)</strong>, creado por la Ley 872 de 2003.</p>\n<p>El <strong>Artículo 133 de la Ley 1753 de 2015 (Plan Nacional de Desarrollo 2014-2018)</strong> ordenó la integración de ambos sistemas en un único <strong>Sistema de Gestión</strong>, el cual a su vez se articula con el <strong>Sistema de Control Interno (Ley 87 de 1993)</strong>. Esta unificación fue reglamentada por el <strong>Decreto 1499 de 2017</strong>, dando origen a la versión actualizada del MIPG.</p>\n<pre><code>                      EVOLUCIÓN NORMATIVA DE MIPG\n   ┌─────────────────────────────────────────────────────────────┐\n   │ Sistema de Desarrollo Administrativo (Ley 489/1998)        │\n   │                              +                              │ ──► SISTEMA DE GESTIÓN (MIPG)\n   │ Sistema de Gestión de la Calidad (Ley 872/2003)             │     (Decreto 1499 de 2017)\n   └─────────────────────────────────────────────────────────────┘               ▲\n                                                                                 │ Articulación\n   ┌─────────────────────────────────────────────────────────────┐               │ Orgánica\n   │ Sistema de Control Interno - MECI (Ley 87/1993)             │ ──────────────┘\n   └─────────────────────────────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>💡 2. Principios Fundamentales del MIPG</h2>\n<p>El Manual Operativo del MIPG consagra cinco principios rectores que deben permear las decisiones del Gestor II:\n1. <strong>Orientación a Resultados:</strong> La gestión se enfoca en la generación de <strong>valor público</strong>, es decir, en resolver problemas reales de los ciudadanos con bienes y servicios de calidad.\n2. <strong>Articulación Interinstitucional:</strong> Trabajo coordinado entre entidades públicas del nivel central, descentralizado y territorial para lograr metas de Estado.\n3. <strong>Excelencia y Calidad:</strong> Búsqueda constante de la mejora continua en los procesos y servicios públicos.\n4. <strong>Aprendizaje e Innovación:</strong> Fomento de la gestión del conocimiento, aprovechamiento de lecciones aprendidas e incorporación de nuevas tecnologías.\n5. <strong>Toma de Decisiones Basada en Evidencia:</strong> Uso riguroso de datos, diagnósticos cuantitativos, tableros de control y evaluaciones objetivas para orientar los planes institucionales.</p>\n<hr />\n<h2>🧩 3. Las Siete (7) Dimensiones Operativas de MIPG</h2>\n<p>El corazón del MIPG opera a través de 7 dimensiones interconectadas bajo el ciclo continuo de mejora <strong>PHVA (Planear, Hacer, Verificar, Actuar)</strong>:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LAS 7 DIMENSIONES OPERATIVAS DE MIPG                            │\n├────┬─────────────────────────────┬─────────────────────────────────────────────────────┤\n│ #  │ DIMENSIÓN OPERATIVA         │ PROPÓSITO CENTRAL EN LA ENTIDAD                     │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 1  │ Talento Humano              │ El corazón del modelo. Reconoce al servidor público  │\n│    │ (Corazón de MIPG)           │ como el activo más valioso. Integra la gestión del  │\n│    │                             │ ciclo de empleo y la política de integridad.        │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 2  │ Direccionamiento Estratégico│ Define la ruta institucional: Misión, Visión,       │\n│    │ y Planeación                │ Objetivos Estratégicos, Plan de Acción Anual y      │\n│    │ (Planear)                   │ articulación con el Plan Nacional de Desarrollo.    │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 3  │ Gestión con Valores para    │ Ejecuta la estrategia orientada al usuario.         │\n│    │ Resultados                  │ Comprende la ventanilla hacia adentro (procesos) y  │\n│    │ (Hacer)                     │ la ventanilla hacia afuera (trámites al ciudadano). │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 4  │ Evaluación de Resultados    │ Verifica el nivel de cumplimiento de metas a través │\n│    │ (Verificar)                 │ de indicadores de gestión, auditorías y rendición   │\n│    │                             │ de cuentas institucional.                           │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 5  │ Información y Comunicación  │ Garantiza el flujo transparente de datos al interior│\n│    │ (Transversal)               │ de la entidad y hacia la ciudadanía (Ley 1712/2014).│\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 6  │ Gestión del Conocimiento e  │ Captura, preserva, transfiere y aprovecha el saber  │\n│    │ Innovación (Transversal)    │ de los servidores y promueve la co-creación.        │\n├────┼─────────────────────────────┼─────────────────────────────────────────────────────┤\n│ 7  │ Control Interno             │ Asegura y evalúa de forma preventiva el cumplimiento│\n│    │ (MECI - Verificar/Actuar)  │ de metas mediante el esquema de Líneas de Defensa.  │\n└────┴─────────────────────────────┴─────────────────────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>🎯 4. Cómo Resolver Casos PJS de Fundamentos de MIPG para Gestor II</h2>\n<p>En las preguntas de Areandina:\n* <strong>Secuencia Metodológica Obligatoria:</strong> Toda intervención en MIPG parte de la <strong>Dimensión 1 (Talento Humano)</strong> y de la fase de <strong>Diagnóstico (Autodiagnósticos DAFP)</strong>. Cualquier opción de respuesta que proponga ejecutar planes o cambios normativos sin un diagnóstico previo con evidencia es un distractor incorrecto.\n* <strong>El Valor Público como Criterio:</strong> Si una opción propone simplemente archivar un informe frente a otra que propone divulgar los hallazgos para ajustar los procesos y mejorar el servicio al ciudadano, la opción orientada a generar valor público e impacto en la comunidad es la correcta.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Sé qué normas dieron origen a la versión actual de MIPG (Ley 1753/2015 Art. 133 y Dec. 1499/2017)?</li>\n<li>[ ] ¿Recuerdo las 7 dimensiones operativas de MIPG y su orden lógico en el ciclo PHVA?</li>\n<li>[ ] ¿Por qué la Dimensión de Talento Humano se considera el corazón de MIPG?</li>\n<li>[ ] ¿Cómo se articula el Sistema de Control Interno (MECI) dentro de la Dimensión 7?</li>\n<li>[ ] ¿Cuáles son los cinco principios rectores del modelo?</li>\n</ul>",
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
      "id": "mod-3",
      "track": "funcionales",
      "title": "CONTEXTO DEL SISTEMA DE CONTROL INTERNO",
      "badge": "Funcional - Ley 87, MECI, COSO 2013 & Líneas de Defensa",
      "examId": "exam-3",
      "lessons": [
        {
          "id": "les-3",
          "moduleId": "mod-3",
          "title": "CONTEXTO DEL SISTEMA DE CONTROL INTERNO",
          "badge": "Funcional - Ley 87, MECI, COSO 2013 & Líneas de Defensa",
          "readTime": "35 min",
          "content": "<h1>🏛️ Guía Maestra: Contexto del Sistema de Control Interno (MECI y COSO)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Constitución Política (Art. 209 y 269), Ley 87 de 1993, Decreto 1083 de 2015, Decreto 648 de 2017, Decreto 1499 de 2017 (Dimensión 7 MIPG).</p>\n<hr />\n<h2>🎯 1. Naturaleza Jurídica y Principios del Control Interno</h2>\n<p>El Artículo 269 de la Constitución Política ordena a todas las entidades públicas diseñar y aplicar métodos y procedimientos de control interno conforme a la ley. La <strong>Ley 87 de 1993</strong> define el Control Interno como:</p>\n<div class=\"callout note\">\n<p><em>\"El sistema integrado por el esquema de organización y el conjunto de los planes, métodos, principios, normas, procedimientos y mecanismos de verificación y evaluación adoptados por una entidad, con el fin de procurar que todas las actividades, operaciones y actuaciones, así como la administración de la información y los recursos, se realicen de acuerdo con las normas constitucionales y legales vigentes dentro de las políticas trazadas por la dirección y en atención a las metas u objetivos previstos.\"</em></p>\n</div>\n<h3>Los Tres Principios Constitucionales del Control Interno:</h3>\n<ol>\n<li><strong>Autocontrol:</strong> Capacidad de cada servidor público, independientemente de su nivel jerárquico, para evaluar y controlar su trabajo, detectar desviaciones y efectuar correctivos oportunamente.</li>\n<li><strong>Autorregulación:</strong> Capacidad institucional de la entidad para aplicar de manera participativa los métodos y procedimientos establecidos en la ley, desarrollando las políticas internas que aseguren la eficacia y moralidad administrativa.</li>\n<li><strong>Autogestión:</strong> Capacidad institucional para coordinar, aplicar y evaluar de manera efectiva, eficiente y eficaz la función administrativa asignada por la Constitución y la ley.</li>\n</ol>\n<hr />\n<h2>🏢 2. Estructura COSO 2013 y su Adaptación en Colombia</h2>\n<p>El Modelo Estándar de Control Interno (MECI), actualizado bajo el Decreto 1499 de 2017 como la <strong>Dimensión 7 de MIPG</strong>, adoptó plenamente la estructura del marco internacional <strong>COSO 2013</strong>, conformado por <strong>cinco (5) componentes interrelacionados</strong> y diecisiete (17) principios:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LOS 5 COMPONENTES DEL MARCO COSO / MECI                         │\n├─────────────────────────┬──────────────────────────────────────────────────────────────┤\n│ 1. Ambiente de Control  │ Marca las pautas de integridad y ética de la entidad.         │\n│                         │ Compromiso de la alta dirección, estructura organizacional y │\n│                         │ código de integridad.                                        │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 2. Evaluación del Riesgo│ Identificación, valoración y tratamiento sistemático de los  │\n│                         │ riesgos de gestión, corrupción y seguridad digital que puedan│\n│                         │ obstaculizar el logro de los objetivos institucionales.      │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 3. Actividades de       │ Políticas y procedimientos establecidos para asegurar que se │\n│    Control              │ ejecuten las acciones de mitigación del riesgo (controles    │\n│                         │ preventivos, detectivos y correctivos, manuales de proceso). │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 4. Información y        │ Sistemas y canales que aseguran que la información relevante │\n│    Comunicación         │ se capture y transmita oportunamente en todas las direcciones│\n│                         │ para permitir la toma de decisiones fundamentadas.           │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 5. Actividades de       │ Evaluaciones continuas e independientes (auditorías internas)│\n│    Monitoreo            │ para verificar que los cinco componentes están funcionando   │\n│                         │ adecuadamente y formular planes de mejoramiento continuo.    │\n└─────────────────────────┴──────────────────────────────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>🛡️ 3. El Esquema de las Líneas de Defensa (Decreto 648 de 2017)</h2>\n<p>Una de las áreas donde más enfatiza la Universidad Areandina en las pruebas para profesionales de gestión y control es el <strong>Modelo de las Líneas de Defensa</strong>, adaptado del Instituto de Auditores Internos (IIA) por el DAFP:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   MODELO DE LÍNEAS DE DEFENSA EN EL ESTADO COLOMBIANO                  │\n├─────────────────────┬─────────────────────────────────┬────────────────────────────────┤\n│ LÍNEA               │ RESPONSABLES                    │ ROL Y RESPONSABILIDAD          │\n├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤\n│ Línea Estratégica   │ • Director General              │ Establece el tono ético, define│\n│                     │ • Comité Institucional de       │ el marco de apetito de riesgo, │\n│                     │   Coordinación de Control       │ prioriza políticas y asigna    │\n│                     │   Interno                       │ recursos para el control.      │\n├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤\n│ Primera Línea       │ • Gerentes y líderes de proceso │ Dueños directos de la operación│\n│ de Defensa          │ • Todos los servidores públicos │ y de los controles cotidianos. │\n│ (Operativa)         │   en su gestión diaria          │ Identifican riesgos y ejecutan │\n│                     │                                 │ controles preventivos en vivo. │\n├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤\n│ Segunda Línea       │ • Oficina de Planeación         │ Monitorea y supervisa el diseño│\n│ de Defensa          │ • Áreas de Gestión de Riesgos   │ de controles y riesgos; provee │\n│ (Monitoreo)         │ • Seguridad de la Información   │ metodologías, alertas tempranas│\n│                     │ • Gestores de Control Interno   │ y seguimiento a indicadores.   │\n├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤\n│ Tercera Línea       │ • Oficina de Control Interno /  │ Aseguramiento independiente,   │\n│ de Defensa          │   Auditoría Interna             │ objetivo y sistemático; evalúa │\n│ (Aseguramiento)     │                                 │ la efectividad de la 1ª y 2ª   │\n│                     │                                 │ línea. Emite informes y asesora│\n└─────────────────────┴─────────────────────────────────┴────────────────────────────────┘\n</code></pre>\n<div class=\"callout danger\"><p><strong>⚠️ CUIDADO:</strong>\n<strong>Error Típico en Exámenes CNSC:</strong> Pensar que la Oficina de Control Interno (Tercera Línea) es la encargada de diseñar los controles de los procesos o de ejecutar la administración del riesgo. <strong>Falso:</strong> Los dueños de los controles son los líderes de proceso (Primera Línea), apoyados metodológicamente por Planeación (Segunda Línea). La OCI <strong>únicamente evalúa de manera independiente y retroalimenta</strong>. Si la OCI diseñara o ejecutara controles, perdería su independencia para auditarlos.</p>\n</div>\n<hr />\n<h2>🎯 4. Rol del Gestor II en el Contexto del Control Interno</h2>\n<p>Para un funcionario en el empleo de <strong>Gestor II</strong>:\n* Si se encuentra en una <strong>dependencia misional o de apoyo (1ª Línea):</strong> Su responsabilidad es aplicar rigurosamente los controles preventivos descritos en el mapa de procesos de la DIAN, documentar evidencias de control y reportar de inmediato nuevos riesgos o materializaciones de fallas a su superior.\n* Si apoya a <strong>Planeación o Gestión del Riesgo (2ª Línea):</strong> Facilita metodológicamente la actualización de las matrices de riesgo institucionales, calcula indicadores de exposición y asesora a los líderes de proceso en el fortalecimiento del ambiente de control.\n* Si apoya a la <strong>Oficina de Control Interno (3ª Línea):</strong> Aplica pruebas de auditoría objetivas, recopila evidencias documentales probatorias y redacta hallazgos estructurados bajo la metodología de Condición, Criterio, Causa y Efecto.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Conozco la definición legal de Control Interno según el Art. 1 de la Ley 87 de 1993?</li>\n<li>[ ] ¿Identifico los tres principios rectores: Autocontrol, Autorregulación y Autogestión?</li>\n<li>[ ] ¿Cuáles son los 5 componentes interconectados de COSO 2013 / MECI?</li>\n<li>[ ] ¿Sé exactamente quién conforma y qué rol cumple cada una de las Líneas de Defensa?</li>\n<li>[ ] ¿Por qué la Oficina de Control Interno no puede coadministrar ni diseñar controles de proceso?</li>\n</ul>",
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
      "id": "mod-4",
      "track": "funcionales",
      "title": "EVALUACION DEL SISTEMA DE CONTROL INTERNO",
      "badge": "Funcional - Auditoría Pública, Hallazgos & Planes de Mejora",
      "examId": "exam-4",
      "lessons": [
        {
          "id": "les-4",
          "moduleId": "mod-4",
          "title": "EVALUACION DEL SISTEMA DE CONTROL INTERNO",
          "badge": "Funcional - Auditoría Pública, Hallazgos & Planes de Mejora",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Evaluación del Sistema de Control Interno y Auditoría Pública</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Ley 87 de 1993 (Art. 9 y 12), Decreto 648 de 2017, Guía de Auditoría para Entidades Públicas Versión 4 (DAFP), Normas Internacionales para el Ejercicio Profesional de la Auditoría Interna (IIA).</p>\n<hr />\n<h2>🎯 1. La Función Evaluadora de la Oficina de Control Interno (OCI)</h2>\n<p>El Artículo 9 de la Ley 87 de 1993 establece que la Oficina de Control Interno (o quien haga sus veces) es uno de los componentes del Sistema de Control Interno, encargado de <strong>medir y evaluar la eficiencia, eficacia y economía de los demás controles</strong>, asesorando a la dirección en la continuidad del proceso administrativo y la reevaluación de los planes institucionales.</p>\n<h3>Los Cinco (5) Roles de las Oficinas de Control Interno (Decreto 648 de 2017):</h3>\n<ol>\n<li><strong>Liderazgo Estratégico:</strong> Acompañamiento a la alta dirección en la visión integral de control y gobernanza.</li>\n<li><strong>Enfoque hacia la Prevención:</strong> Asesoría preventiva a los procesos para evitar desviaciones normativas o pérdidas de recursos, sin coadministrar.</li>\n<li><strong>Evaluación de la Gestión del Riesgo:</strong> Medición independiente de la solidez y efectividad de las matrices y tratamientos de riesgo institucionales.</li>\n<li><strong>Relación con Entes Externos de Control:</strong> Interlocución y facilitación ante la Contraloría General de la República (CGR), Procuraduría y Fiscalía, coordinando la atención oportuna de requerimientos y planes de mejoramiento externos.</li>\n<li><strong>Evaluación y Seguimiento:</strong> Ejecución de auditorías internas planificadas y seguimiento riguroso al estado de los controles y metas.</li>\n</ol>\n<hr />\n<h2>🔍 2. El Ciclo de Auditoría Interna Basada en Riesgos (Guía DAFP v4)</h2>\n<p>La auditoría interna en las entidades públicas colombianas se desarrolla obligatoriamente a través de cuatro (4) fases secuenciales:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        CICLO METODOLÓGICO DE LA AUDITORÍA INTERNA                      │\n├────────────────┬─────────────────┬───────────────────────┬─────────────────────────────┤\n│ 1. PLANEACIÓN  │ 2. EJECUCIÓN    │ 3. COMUNICACIÓN       │ 4. SEGUIMIENTO              │\n├────────────────┼─────────────────┼───────────────────────┼─────────────────────────────┤\n│ • Plan Anual de│ • Aplicación de │ • Informe preliminar  │ • Verificación periódica    │\n│   Auditoría    │   técnicas de   │   (traslado para con- │   del avance y eficacia de  │\n│   (basado en   │   auditoría y   │   tradicción/mesas de │   las acciones correctivas  │\n│   riesgos).    │   muestreo.     │   trabajo).           │   del Plan de Mejoramiento. │\n│ • Memorando de │ • Papeles de    │ • Informe definitivo  │ • Cierre formal de hallazgos│\n│   encargo y    │   trabajo y     │   con hallazgos       │   cuando la causa raíz ha   │\n│   cronograma.  │   evidencias.   │   estructurados.      │   sido eliminada con éxito. │\n└────────────────┴─────────────────┴───────────────────────┴─────────────────────────────┘\n</code></pre>\n<hr />\n<h2>📝 3. Estructura Oficial del Hallazgo de Auditoría</h2>\n<p>Un hallazgo de auditoría es la discrepancia objetiva entre <strong>lo que es</strong> y <strong>lo que debe ser</strong>, respaldada en evidencia competente y suficiente. Todo hallazgo estructurado debe contener sin excepción cuatro (4) elementos:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                       LOS 4 ELEMENTOS DE UN HALLAZGO DE AUDITORÍA                      │\n├──────────────┬─────────────────────────────────────────────────────────────────────────┤\n│ ELEMENTO     │ DEFINICIÓN Y CONTENIDO METODOLÓGICO                                     │\n├──────────────┼─────────────────────────────────────────────────────────────────────────┤\n│ 1. Condición │ La situación actual encontrada y observada por el auditor (¿QUÉ PASÓ?). │\n│              │ Hechos objetivos constatados con datos, fechas, muestras y expedientes. │\n├──────────────┼─────────────────────────────────────────────────────────────────────────┤\n│ 2. Criterio  │ La norma, estándar, política, manual o directriz vulnerada o incumplida│\n│              │ (¿CÓMO DEBIÓ SER?). Ley, decreto, resolución o procedimiento oficial.   │\n├──────────────┼─────────────────────────────────────────────────────────────────────────┤\n│ 3. Causa     │ El motivo fundamental u origen que dio lugar a la desviación (¿POR QUÉ  │\n│              │ OCURRIÓ?). Falta de capacitación, ausencia de controles, fallas de software.│\n├──────────────┼─────────────────────────────────────────────────────────────────────────┤\n│ 4. Efecto    │ El impacto, consecuencia real o potencial del hecho (¿QUÉ IMPACTO TUVO?).│\n│              │ Daño fiscal, riesgo de sanción, retraso en metas, afectación ciudadana.│\n└──────────────┴─────────────────────────────────────────────────────────────────────────┘\n</code></pre>\n<div class=\"callout tip\"><p><strong>💡 TIP DE EXAMEN:</strong>\n<strong>Enfoque de Examen Areandina:</strong> Cuando una pregunta te pida redactar o seleccionar la acción correctiva ante un hallazgo, recuerda: <strong>La acción correctiva SIEMPRE debe atacar la CAUSA RAÍZ, nunca la condición.</strong> Atacar la condición es colocar un parche superficial; eliminar la causa raíz garantiza que el hecho no vuelva a repetirse.</p>\n</div>\n<hr />\n<h2>📈 4. Planes de Mejoramiento Institucional</h2>\n<p>Tras la emisión del informe definitivo de auditoría:\n* El líder del proceso auditado (no el auditor) es el responsable de formular el <strong>Plan de Mejoramiento</strong>.\n* Las acciones deben ser <strong>SMART</strong> (Específicas, Medibles, Alcanzables, Relevantes y con Tiempo definido).\n* <strong>Tipología de Acciones:</strong>\n  * <em>Acción Correctiva:</em> Corrige la causa de una no conformidad ya ocurrida.\n  * <em>Acción Preventiva:</em> Elimina la causa de una no conformidad potencial para evitar que ocurra.\n* El rol del <strong>Gestor II</strong> es apoyar el seguimiento trimestral, calculando el porcentaje de eficacia del plan y contrastando las evidencias documentales aportadas por el área frente a la meta fijada.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Cuáles son los 5 roles oficiales de la OCI según el Decreto 648 de 2017?</li>\n<li>[ ] ¿Cuáles son las 4 fases de una auditoría pública según la Guía DAFP v4?</li>\n<li>[ ] ¿Sé identificar los 4 elementos de un hallazgo (Condición, Criterio, Causa y Efecto)?</li>\n<li>[ ] ¿Por qué las acciones de mejora deben dirigirse a extinguir la causa raíz y no la condición?</li>\n<li>[ ] ¿Quién formula el Plan de Mejoramiento: el líder de proceso auditado o el auditor?</li>\n</ul>",
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
      "id": "mod-5",
      "track": "funcionales",
      "title": "ESTRATEGIA DE RENDICION DE CUENTAS",
      "badge": "Funcional - CONPES 3654, Ley 1757 & Manual MURC v2",
      "examId": "exam-5",
      "lessons": [
        {
          "id": "les-5",
          "moduleId": "mod-5",
          "title": "ESTRATEGIA DE RENDICION DE CUENTAS",
          "badge": "Funcional - CONPES 3654, Ley 1757 & Manual MURC v2",
          "readTime": "25 min",
          "content": "<h1>🏛️ Guía Maestra: Estrategia de Rendición de Cuentas a la Ciudadanía</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> CONPES 3654 de 2010, Ley 1474 de 2011 (Estatuto Anticorrupción), Ley 1757 de 2015 (Estatutaria de Participación Ciudadana), Manual Único de Rendición de Cuentas (MURC v2 DAFP).</p>\n<hr />\n<h2>🎯 1. Concepto y Fundamento de la Rendición de Cuentas Pública</h2>\n<p>La <strong>Rendición de Cuentas</strong> es un deber constitucional y legal de las autoridades públicas, y un derecho correlativo de la ciudadanía. Se define como el proceso sistemático, continuo y deliberativo mediante el cual las entidades del Estado <strong>informan, explican y justifican la gestión pública, la administración de los recursos encomendados y los resultados obtenidos</strong>, sometiéndose a la retroalimentación y evaluación de los ciudadanos y grupos de interés.</p>\n<h3>Diferencia Clave en el Examen:</h3>\n<ul>\n<li><strong>NO es un evento aislado:</strong> La rendición de cuentas no se reduce a una \"audiencia pública anual con diapositivas\". Es un <strong>proceso permanente y multicanal</strong> durante todo el ciclo de gestión institucional.</li>\n<li><strong>Carácter Bidireccional:</strong> No es una exposición unilateral de cifras; exige diálogo, debate, escucha activa de inquietudes ciudadanas y concertación de compromisos de mejora.</li>\n</ul>\n<hr />\n<h2>🏛️ 2. Los Tres (3) Elementos Fundamentales (Pilares del MURC)</h2>\n<p>El Manual Único de Rendición de Cuentas (MURC v2) estructura el proceso sobre tres elementos esenciales e inseparables:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                    LOS TRES ELEMENTOS DE LA RENDICIÓN DE CUENTAS                       │\n├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤\n│ 1. INFORMACIÓN     │ 2. DIÁLOGO                  │ 3. RESPONSABILIDAD E INCENTIVOS     │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ Generación y       │ Espacios de interacción y   │ Reconocimiento de los resultados,   │\n│ divulgación de da- │ deliberación directa entre  │ asunción de compromisos correctivos │\n│ tos comprensibles, │ las autoridades y la ciuda- │ ante metas incumplidas y adopción   │\n│ oportunos, veraces │ danía, presenciales y vir-  │ de correctivos institucionales      │\n│ y en Lenguaje      │ tuales, para debatir sobre  │ frente a las alertas ciudadanas.    │\n│ Claro (Ley 1712).  │ las prioridades públicas.   │                                     │\n└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>🔄 3. Las Cuatro (4) Fases de la Estrategia Institucional de Rendición de Cuentas</h2>\n<p>Toda entidad como la DIAN debe estructurar anualmente su Estrategia de Rendición de Cuentas en cuatro fases:</p>\n<ol>\n<li><strong>Fase 1: Alistamiento Institucional:</strong></li>\n<li>Conformación del equipo líder de rendición de cuentas (articulado por Planeación y Comunicaciones).</li>\n<li>Identificación de audiencias y caracterización de grupos de interés y valor (contribuyentes, gremios, academia, importadores).</li>\n<li>Consolidación y procesamiento de la información de gestión, metas del Plan Estratégico y ejecución presupuestal.</li>\n<li><strong>Fase 2: Diseño de la Estrategia:</strong></li>\n<li>Elaboración del cronograma anual de espacios de rendición (permanentes y periódicos).</li>\n<li>Selección de metodologías de diálogo según el grupo de interés (foros zonales, mesas técnicas aduaneras, transmisiones en vivo).</li>\n<li>Transformación de datos técnicos complejos a <strong>Lenguaje Claro</strong> (infografías, resúmenes ejecutivos sin jerga incomprensible).</li>\n<li><strong>Fase 3: Ejecución de las Acciones de Rendición:</strong></li>\n<li>Publicación previa de los informes de gestión (mínimo con 15 días hábiles de anticipación a los espacios de diálogo, permitiendo preguntas ciudadanas previas).</li>\n<li>Desarrollo de los espacios deliberativos (audiencias, ferias de la transparencia, cabildos informativos).</li>\n<li>Registro transparente de inquietudes, observaciones y propuestas ciudadanas.</li>\n<li><strong>Fase 4: Seguimiento y Evaluación:</strong></li>\n<li>Publicación del informe de memoria de la rendición de cuentas dentro de los 30 días posteriores.</li>\n<li>Formulación del <strong>Plan de Compromisos</strong> institucional con fechas y áreas responsables para responder a las solicitudes ciudadanas.</li>\n<li>Evaluación de impacto y percepción ciudadana para mejorar la estrategia de la siguiente vigencia.</li>\n</ol>\n<hr />\n<h2>🎯 4. Rendición de Cuentas en la DIAN para el Gestor II</h2>\n<p>En la administración tributaria y aduanera:\n* La rendición de cuentas tiene una sensibilidad particular: <strong>Debe conciliar la máxima transparencia informativa con la estricta custodia de la Reserva Tributaria y Aduanera (Art. 583 E.T.)</strong>.\n* El Gestor II apoya la consolidación de datos agregados (por ejemplo, recaudo total por tipo de impuesto, porcentaje de metas de fiscalización alcanzadas, tiempos promedio de despacho aduanero, estado de peticiones y quejas), asegurando que <strong>nunca se revelen datos personales o secretos comerciales amparados por reserva legal</strong>.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Conozco la definición integral de Rendición de Cuentas según el CONPES 3654 y la Ley 1757?</li>\n<li>[ ] ¿Cuáles son los tres elementos estructurales del MURC (Información, Diálogo, Responsabilidad)?</li>\n<li>[ ] ¿Cuáles son las cuatro fases de la estrategia anual de rendición de cuentas?</li>\n<li>[ ] ¿Con cuánta anticipación debe publicarse el informe previo para que la ciudadanía participe informada?</li>\n<li>[ ] ¿Cómo se articula la transparencia pública con la reserva tributaria en la DIAN?</li>\n</ul>",
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
      "id": "mod-6",
      "track": "funcionales",
      "title": "ESTRUCTURA ORGANIZACIONAL DE LA DIAN",
      "badge": "Funcional - Decreto 1742/2020 & Resoluciones DIAN",
      "examId": "exam-6",
      "lessons": [
        {
          "id": "les-6",
          "moduleId": "mod-6",
          "title": "ESTRUCTURA ORGANIZACIONAL DE LA DIAN",
          "badge": "Funcional - Decreto 1742/2020 & Resoluciones DIAN",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Estructura Organizacional de la DIAN</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Decreto Ley 1742 de 2020 (Estructura interna de la DIAN), Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023 (Carrera Administrativa Específica), Resolución DIAN 0067 de 2024.</p>\n<hr />\n<h2>🎯 1. Naturaleza Jurídica y Misión Orgánica de la DIAN</h2>\n<p>El <strong>Decreto Ley 1742 de 2020</strong> modernizó la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN).\n* <strong>Naturaleza Jurídica:</strong> Es una Unidad Administrativa Especial del orden nacional de carácter eminentemente técnico y especializado.\n* <strong>Autonomía:</strong> Cuenta con personería jurídica, autonomía administrativa, presupuestal y patrimonial.\n* <strong>Adscripción:</strong> Está adscrita al <strong>Ministerio de Hacienda y Crédito Público (MinHacienda)</strong>.\n* <strong>Jurisdicción:</strong> Ejerce su competencia en todo el territorio nacional, en las aguas territoriales y en el espacio aéreo soberano.</p>\n<hr />\n<h2>🏢 2. Niveles de Organización Territorial y Funcional</h2>\n<p>La DIAN opera bajo dos niveles estructurales nítidos:</p>\n<pre><code>                                  ESTRUCTURA GENERAL DIAN (Dec. 1742/2020)\n                                                    │\n                 ┌──────────────────────────────────┴──────────────────────────────────┐\n                 ▼                                                                     ▼\n          NIVEL CENTRAL                                                       NIVEL DESCONCENTRADO\n   (Sede Bogotá - Políticas y Dirección)                               (Territorio Nacional - Ejecución Directa)\n                 │                                                                     │\n  • Dirección General                                                   • 8 Direcciones Seccionales de Grandes\n  • Direcciones de Gestión:                                               Contribuyentes e Impuestos/Aduanas\n    - Impuestos                                                         • Direcciones Seccionales de Impuestos\n    - Aduanas                                                           • Direcciones Seccionales de Aduanas\n    - Fiscalización                                                     • Direcciones Seccionales Delegadas\n    - Jurídica                                                          • Puestos de Control Aduanero\n    - Innovación y Tecnología\n    - Corporativa\n    - Estratégica y Analítica\n  • Oficinas Asesoras: Control Interno,\n    Seguridad de la Información, Comunicaciones\n</code></pre>\n<hr />\n<h2>🧭 3. Dependencias Clave y su Rol en la Gestión Institucional</h2>\n<p>Para un <strong>Gestor II</strong>, el conocimiento de la interacción entre las áreas es determinante para resolver preguntas situacionales:</p>\n<ol>\n<li><strong>Dirección de Gestión Estratégica y Analítica:</strong></li>\n<li>Es el cerebro planificador y analítico de la entidad.</li>\n<li>Modela el riesgo tributario, aduanero y cambiario mediante analítica avanzada y ciencia de datos.</li>\n<li>Diseña el Plan Estratégico Institucional y formula las directrices de recaudo y control.</li>\n<li><strong>Dirección de Gestión Jurídica:</strong></li>\n<li>Unifica la doctrina jurídica en materia tributaria, aduanera y cambiaria a través de Conceptos Jurídicos Vinculantes.</li>\n<li>Representa judicialmente a la DIAN ante el Consejo de Estado y tribunales administrativos.</li>\n<li><strong>Dirección de Gestión Corporativa:</strong></li>\n<li>Administra el Talento Humano (selección, evaluación, capacitación), los recursos físicos, contractuales y financieros de la entidad.</li>\n<li>Lidera la implementación de las políticas de MIPG correspondientes a Talento Humano y Gestión Financiera.</li>\n<li><strong>Dirección de Gestión de Fiscalización:</strong></li>\n<li>Diseña y coordina los programas de fiscalización tributaria, aduanera y cambiaria para combatir la elusión, la evasión y el contrabando.</li>\n<li><strong>Oficina de Control Interno (OCI):</strong></li>\n<li>Asesora a la Dirección General y evalúa de forma independiente la solidez del Sistema de Control Interno (Tercera Línea de Defensa).</li>\n</ol>\n<hr />\n<h2>⚖️ 4. Instancias de Gobierno y Coordinación Institucional</h2>\n<ul>\n<li><strong>Comité Institucional de Gestión y Desempeño:</strong> Instancia encargada de coordinar, evaluar y orientar la implementación de las políticas de gestión y desempeño de MIPG en la DIAN.</li>\n<li><strong>Comité Institucional de Coordinación de Control Interno:</strong> Órgano asesor de la Dirección General que revisa el estado del control interno, aprueba el Plan Anual de Auditoría y evalúa la efectividad del mapa de riesgos institucional.</li>\n</ul>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Cuál es la naturaleza jurídica exacta de la DIAN y a qué ministerio está adscrita?</li>\n<li>[ ] ¿Qué norma vigente rige la estructura orgánica de la DIAN (Decreto 1742 de 2020)?</li>\n<li>[ ] ¿Cuáles son las Direcciones de Gestión que integran el Nivel Central?</li>\n<li>[ ] ¿Cómo se distribuye el Nivel Desconcentrado (Seccionales de Impuestos, Aduanas y Delegadas)?</li>\n<li>[ ] ¿Qué papel cumple la Dirección de Gestión Estratégica y Analítica en los planes de la entidad?</li>\n</ul>",
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
      "id": "mod-7",
      "track": "funcionales",
      "title": "INDICADORES DE GESTION",
      "badge": "Funcional - Eficacia, Eficiencia, Efectividad & Fórmulas DAFP",
      "examId": "exam-7",
      "lessons": [
        {
          "id": "les-7",
          "moduleId": "mod-7",
          "title": "INDICADORES DE GESTION",
          "badge": "Funcional - Eficacia, Eficiencia, Efectividad & Fórmulas DAFP",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Indicadores de Gestión y Desempeño Público</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Guía para la Construcción e Interpretación de Indicadores de Gestión (DAFP / DNP Versión 2), Manual Operativo MIPG (Dimensión 4: Evaluación de Resultados).</p>\n<hr />\n<h2>🎯 1. Concepto y Utilidad del Indicador de Gestión</h2>\n<p>Un <strong>indicador de gestión</strong> es una expresión cualitativa o cuantitativa observable que permite describir características, comportamientos o fenómenos de la realidad a través de la evolución de una variable o el establecimiento de una relación entre variables. Su propósito es <strong>comparar el resultado real frente a una meta programada o línea base</strong>, facilitando la toma de decisiones informada y la corrección de desvíos.</p>\n<hr />\n<h2>📊 2. Tipología de Indicadores según la Cadena de Valor Público</h2>\n<p>El DAFP y el DNP estructuran los indicadores siguiendo la cadena lógica de entrega de valor al ciudadano:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   TIPOLOGÍA SEGÚN LA CADENA DE VALOR (DAFP / DNP)                      │\n├─────────────┬─────────────────────────────────────┬────────────────────────────────────┤\n│ TIPO        │ DEFINICIÓN TÉCNICA                  │ EJEMPLO DIAN                       │\n├─────────────┼─────────────────────────────────────┼────────────────────────────────────┤\n│ 1. Insumo   │ Mide los recursos humanos, financie-│ Presupuesto asignado para la       │\n│             │ ros y materiales empleados.         │ modernización tecnológica.         │\n├─────────────┼─────────────────────────────────────┼────────────────────────────────────┤\n│ 2. Proceso /│ Mide la ejecución de las actividades│ Número de inspecciones aduaneras   │\n│    Actividad│ intermedias y tiempos de trámite.   │ físicas ejecutadas en puertos.     │\n├─────────────┼─────────────────────────────────────┼────────────────────────────────────┤\n│ 3. Producto │ Mide los bienes y servicios genera- │ Número de contribuyentes inscritos │\n│             │ dos directamente por el proceso.    │ en el Registro Único Tributario.   │\n├─────────────┼─────────────────────────────────────┼────────────────────────────────────┤\n│ 4. Resultado│ Mide el cambio inmediato en la con- │ Porcentaje de reducción de tiempos │\n│             │ ducta o condición de los usuarios.  │ de despacho de carga de comercio.  │\n├─────────────┼─────────────────────────────────────┼────────────────────────────────────┤\n│ 5. Impacto  │ Mide la transformación de largo     │ Incremento en el índice de recaudo │\n│             │ plazo en el bienestar del país.     │ tributario como % del PIB nacional.│\n└─────────────┴─────────────────────────────────────┴────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>📐 3. Tipología por Dimensión del Desempeño Institucional</h2>\n<p>En las pruebas de la CNSC y Areandina es fundamental distinguir las cuatro (4) dimensiones clásicas de desempeño:</p>\n<h3>1. Eficacia</h3>\n<ul>\n<li><strong>Definición:</strong> Grado de cumplimiento de los objetivos y metas programadas, sin considerar los recursos consumidos.</li>\n<li><strong>Fórmula:</strong>\n$$  ext{Eficacia} = \\left( \frac{    ext{Resultado Real Alcanzado}}{ ext{Meta Programada}} \night)   imes 100$$</li>\n</ul>\n<h3>2. Eficiencia</h3>\n<ul>\n<li><strong>Definición:</strong> Relación entre los productos obtenidos y los recursos consumidos (tiempo, costo, talento humano).</li>\n<li><strong>Fórmulas habituales:</strong>\n$$  ext{Eficiencia (Costo-Producto)} = \frac{    ext{Costo Total Ejecutado}}{    ext{Total de Productos Entregados}}$$\n$$  ext{Eficiencia (Tiempo)} = \frac{    ext{Tiempo Real Invertido}}{    ext{Tiempo Estándar Programado}}$$</li>\n</ul>\n<h3>3. Efectividad</h3>\n<ul>\n<li><strong>Definición:</strong> Mide el impacto o beneficio real derivado del cumplimiento eficaz y eficiente. Es la síntesis de eficacia y eficiencia.\n$$  ext{Efectividad} = f(   ext{Eficacia},  ext{Eficiencia})$$</li>\n</ul>\n<h3>4. Economía</h3>\n<ul>\n<li><strong>Definición:</strong> Capacidad de la entidad para movilizar y utilizar los recursos financieros y materiales al menor costo posible, manteniendo los estándares de calidad requeridos.</li>\n</ul>\n<hr />\n<h2>📋 4. La Hoja de Vida o Ficha Técnica del Indicador</h2>\n<p>Todo indicador formal debe estar documentado con los siguientes atributos:\n1. <strong>Nombre del Indicador:</strong> Claro, conciso y autoexplicativo (ej. \"Tasa de Cumplimiento Oportuno de Declaraciones\").\n2. <strong>Objetivo Institucional Asociado:</strong> El objetivo estratégico o de proceso al que aporta directamente.\n3. <strong>Fórmula de Cálculo:</strong> Expresión matemática unívoca sin ambigüedades.\n4. <strong>Variables que lo componen:</strong> Fuente exacta y método de recolección de cada variable.\n5. <strong>Unidad de Medida:</strong> Porcentaje (%), número absoluto, días, pesos, etc.\n6. <strong>Periodicidad:</strong> Mensual, trimestral, semestral o anual.\n7. <strong>Línea Base:</strong> El valor de partida histórico con el cual se comparan los avances futuros.\n8. <strong>Meta:</strong> El valor numérico comprometido para la vigencia.\n9. <strong>Semaforización (Rangos de Desempeño):</strong>\n   * 🟢 <strong>Verde (Satisfactorio):</strong> $\\ge 90\\%$ de cumplimiento.\n   * 🟡 <strong>Amarillo (En Alerta):</strong> Entre $70\\%$ y $89\\%$. Requiere seguimiento cercano.\n   * 🔴 <strong>Rojo (Crítico / Incumplido):</strong> $&lt; 70\\%$. Exige formulación inmediata de acciones de mejora.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Sé diferenciar un indicador de producto de uno de resultado y de uno de impacto?</li>\n<li>[ ] ¿Tengo claras las fórmulas y conceptos de Eficacia, Eficiencia, Efectividad y Economía?</li>\n<li>[ ] ¿Cuáles son los elementos obligatorios de la Hoja de Vida de un indicador?</li>\n<li>[ ] ¿Cómo funciona la semaforización verde/amarillo/rojo en el control de gestión?</li>\n<li>[ ] ¿Por qué un indicador de eficacia alto no garantiza por sí solo eficiencia operativa?</li>\n</ul>",
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
      "id": "mod-8",
      "track": "funcionales",
      "title": "MEDICION DEL DESEMPEÑO INSTITUCIONAL",
      "badge": "Funcional - Metodología FURAG & Índice de Desempeño IDI",
      "examId": "exam-8",
      "lessons": [
        {
          "id": "les-8",
          "moduleId": "mod-8",
          "title": "MEDICION DEL DESEMPEÑO INSTITUCIONAL",
          "badge": "Funcional - Metodología FURAG & Índice de Desempeño IDI",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Medición del Desempeño Institucional y Metodología FURAG</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Decreto 1083 de 2015, Decreto 1499 de 2017, Metodología FURAG (DAFP), Manual Operativo MIPG.</p>\n<hr />\n<h2>🎯 1. El Formulario Único de Reporte y Avance de Gestión (FURAG)</h2>\n<p>El <strong>FURAG</strong> es la herramienta web oficial del Departamento Administrativo de la Función Pública (DAFP) mediante la cual se recolecta periódicamente la información sobre el avance en la implementación de las <strong>19 políticas de gestión y desempeño institucional</strong> y las <strong>7 dimensiones del MIPG</strong> en todas las entidades del Estado colombiano.</p>\n<h3>Características del FURAG:</h3>\n<ul>\n<li><strong>Periodicidad:</strong> Anual (generalmente se diligencia entre febrero y abril de cada vigencia respecto al año inmediatamente anterior).</li>\n<li><strong>Fuentes de Evidencia:</strong> No basta con contestar afirmativamente; las entidades deben asociar actos administrativos, enlaces públicos, planes y reportes de evidencias verificables.</li>\n<li><strong>Carácter Declarativo y Verificable:</strong> La información reportada tiene carácter de declaración oficial y es objeto de validaciones por parte de las entidades líderes de política (DAFP, MinTIC, MinJusticia, Archivo General de la Nación, DNP, Contaduría General de la Nación).</li>\n</ul>\n<hr />\n<h2>📈 2. El Índice de Desempeño Institucional (IDI)</h2>\n<p>El resultado del procesamiento estadístico del FURAG arroja el <strong>Índice de Desempeño Institucional (IDI)</strong>:\n* <strong>Escala de Calificación:</strong> De <strong>0 a 100 puntos</strong>.\n* <strong>Estructura Jerárquica del Puntaje:</strong>\n  1. <em>Puntaje Global de la Entidad</em> (calificación consolidada).\n  2. <em>Puntaje por cada una de las 7 Dimensiones de MIPG</em>.\n  3. <em>Puntaje individual por cada una de las 19 Políticas de Gestión y Desempeño</em>.\n* <strong>Comparabilidad:</strong> El IDI permite ubicar a la entidad en un percentil de desempeño frente al promedio de su sector administrativo (ej. Sector Hacienda) y frente al promedio nacional o territorial.</p>\n<pre><code>                            ESTRUCTURA DE EVALUACIÓN DEL FURAG\n   ┌─────────────────────────────────────────────────────────────────────────────┐\n   │                   ÍNDICE DE DESEMPEÑO INSTITUCIONAL (IDI)                   │\n   ├──────────────────────────────┬──────────────────────────────┬───────────────┤\n   │ Calificación Global (0-100)  │ Calificación por 7 Dimens.   │ 19 Políticas  │\n   └──────────────────────────────┴──────────────────────────────┴───────────────┘\n                                                 │\n                     ┌───────────────────────────┴───────────────────────────┐\n                     ▼                                                       ▼\n           Identificación de Brechas                              Plan de Cierre de Brechas\n           (Políticas rezagadas &lt; 70)                            (Acciones de mejora priorizadas)\n</code></pre>\n<hr />\n<h2>🔍 3. Uso Estratégico de los Resultados: El Plan de Cierre de Brechas</h2>\n<p>Para el cargo de <strong>Gestor II</strong>, el valor del IDI no radica en exhibir una nota, sino en su aprovechamiento gerencial:\n1. <strong>Identificación de Brechas Institucionales:</strong> Se analizan las políticas donde la entidad obtuvo puntajes por debajo del promedio sectorial o donde hubo retroceso respecto al año anterior.\n2. <strong>Formulación del Plan de Cierre de Brechas:</strong>\n   * Priorización de causas raíz con los líderes de proceso.\n   * Asignación de recursos técnicos y presupuestales en el Plan de Acción Anual.\n   * Monitoreo bimensual en el Comité Institucional de Gestión y Desempeño.\n3. <strong>Autodiagnósticos DAFP:</strong> Antes del reporte formal de FURAG, las entidades deben aplicar las matrices de autodiagnóstico del DAFP para evaluar internamente su estado de avance y corregir desviaciones a tiempo.</p>\n<hr />\n<h2>📋 4. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Qué significan las siglas FURAG y cuál es su periodicidad oficial?</li>\n<li>[ ] ¿Qué es el Índice de Desempeño Institucional (IDI) y en qué escala se mide?</li>\n<li>[ ] ¿Cómo se descomponen los puntajes del IDI (Global, por Dimensiones y por Políticas)?</li>\n<li>[ ] ¿Cuál es la finalidad de formular un Plan de Cierre de Brechas a partir del IDI?</li>\n<li>[ ] ¿Qué papel cumplen los instrumentos de autodiagnóstico previo del DAFP?</li>\n</ul>",
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
      "id": "mod-9",
      "track": "funcionales",
      "title": "MISIONALIDAD DE LA DIAN",
      "badge": "Funcional - Tributario, Aduanero, Cambiario & Régimen Penal",
      "examId": "exam-9",
      "lessons": [
        {
          "id": "les-9",
          "moduleId": "mod-9",
          "title": "MISIONALIDAD DE LA DIAN",
          "badge": "Funcional - Tributario, Aduanero, Cambiario & Régimen Penal",
          "readTime": "35 min",
          "content": "<h1>🏛️ Guía Maestra: Misionalidad de la DIAN: Tributaria, Aduanera y Cambiaria</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes), Decreto 1165 de 2019 (Régimen de Aduanas), Régimen Cambiario (Resolución Externa 1 de 2018 Banco de la República), Código Penal (Delitos contra el orden fiscal).</p>\n<hr />\n<h2>🎯 1. La Misión Institucional de la DIAN</h2>\n<p>La <strong>Misión de la DIAN</strong> consiste en garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante:\n1. La <strong>administración y el control debido de las obligaciones tributarias, aduaneras y cambiarias</strong>.\n2. La <strong>facilitación de las operaciones de comercio exterior</strong> y del cumplimiento voluntario de los deberes fiscales.\n3. El <strong>desarrollo de un talento humano íntegro y profesional</strong>, soportado en tecnología de vanguardia y analítica de datos.</p>\n<hr />\n<h2>⚖️ 2. Los Tres Grandes Frentes de Competencia Misional</h2>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LOS TRES EJES MISIONALES DE LA DIAN                             │\n├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤\n│ 1. TRIBUTARIO      │ 2. ADUANERO                 │ 3. CAMBIARIO                        │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ Administración de  │ Ejercicio de la potestad    │ Control de operaciones cambiarias   │\n│ impuestos del orden│ aduanera: entrada, perma-   │ sobre importaciones, exportaciones, │\n│ nacional: Renta,   │ nencia y salida de mercan-  │ endeudamiento y servicios, no com-  │\n│ IVA, Consumo,      │ cías del territorio aduane- │ petentes de la Superintendencia     │\n│ Retención y GMF.   │ ro nacional (TAN).          │ Financiera ni de Sociedades.        │\n└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>🔍 3. Conceptos Jurídicos Fundamentales para el Examen</h2>\n<p>En las pruebas de la Universidad Areandina es habitual encontrar casos situacionales que ponen a prueba las diferencias entre las siguientes figuras:</p>\n<h3>A. Evasión vs. Elusión Fiscal</h3>\n<ul>\n<li><strong>Evasión Fiscal (Ilegal):</strong> Conducta ilícita y deliberada mediante la cual un contribuyente oculta ingresos, simula costos inexistentes, utiliza facturas falsas o no declara hechos gravados para pagar menos impuestos o no pagar. Es un delito y acarrea sanciones administrativas y penales.</li>\n<li><strong>Elusión Fiscal (Uso abusivo de la ley):</strong> Utilización artificiosa de vacíos o lagunas normativas para reducir la carga tributaria sin violar explícitamente la letra de la ley, pero contrariando su espíritu. En Colombia, el <strong>Artículo 869 del Estatuto Tributario (Cláusula General Antiaubuso)</strong> faculta a la DIAN a reclasificar o reconfigurar estas operaciones artificiosas para liquidar el impuesto real.</li>\n</ul>\n<h3>B. Infracción Administrativa vs. Delito Aduanero / Fiscal</h3>\n<ul>\n<li><strong>Infracción Administrativa:</strong> Violación de normas procedimentales o formales (ej. declarar fuera de plazo, errores de clasificación arancelaria sin dolo). Da lugar a sanciones monetarias y decomiso de mercancías.</li>\n<li><strong>Delito Fiscal / Penal:</strong> Conductas de mayor lesividad social tipificadas en el Código Penal:</li>\n<li><em>Contrabando (Art. 319 C.P.):</em> Introducción o salida de mercancías evadiendo el control aduanero por cuantías significativas.</li>\n<li><em>Defraudación o Evasión Tributaria (Art. 434A C.P.):</em> Omisión intencional de ingresos o inclusión de costos falsos que afecten el recaudo.</li>\n<li><em>Omisión de Agente Retenedor o Recaudador (Art. 402 C.P.):</em> No consignar a la DIAN las sumas retenidas por concepto de IVA o Retención en la Fuente en los plazos legales.</li>\n</ul>\n<hr />\n<h2>🎯 4. Facilitación vs. Fiscalización: El Rol del Gestor II</h2>\n<p>La DIAN moderna balancea dos modelos operativos:\n* <strong>Facilitación:</strong> Servicios digitales, declaraciones sugeridas, facturación electrónica y lenguaje claro para que el contribuyente honesto cumpla de forma rápida y sencilla.\n* <strong>Fiscalización y Control:</strong> Uso de cruces masivos de información exógena, analítica de riesgos y auditorías focalizadas para identificar y sancionar con rigor al evasor y al contrabandista.\n* El <strong>Gestor II</strong> apoya este equilibrio formulando planes de gestión orientados a mejorar la calidad del servicio al ciudadano y robusteciendo los controles de trazabilidad interna.</p>\n<hr />\n<h2>📋 5. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Cuáles son los tres frentes misionales exclusivos de la DIAN?</li>\n<li>[ ] ¿Sé distinguir técnica y jurídicamente entre evasión, elusión y economía de opción?</li>\n<li>[ ] ¿Qué establece la Cláusula General Antiaubuso del Art. 869 del Estatuto Tributario?</li>\n<li>[ ] ¿Cuáles son los delitos fiscales más relevantes en el Código Penal colombiano?</li>\n<li>[ ] ¿Cómo articula la DIAN la facilitación del cumplimiento voluntario con la fiscalización?</li>\n</ul>",
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
      "id": "mod-10",
      "track": "funcionales",
      "title": "RAZONAMIENTO ANALITICO",
      "badge": "Funcional - Lógica Deductiva, Ishikawa, 5 Porqués & Datos",
      "examId": "exam-10",
      "lessons": [
        {
          "id": "les-10",
          "moduleId": "mod-10",
          "title": "RAZONAMIENTO ANALITICO",
          "badge": "Funcional - Lógica Deductiva, Ishikawa, 5 Porqués & Datos",
          "readTime": "30 min",
          "content": "<h1>🏛️ Guía Maestra: Razonamiento Analítico en la Gestión Pública y Auditoría</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Metodológico Principal:</strong> Lógica proposicional, análisis de causa-raíz (Ishikawa y 5 Porqués), pruebas de indicios, interpretación de datos cuantitativos y tablas estadísticas.</p>\n<hr />\n<h2>🎯 1. Pensamiento Analítico y Deducción Lógica</h2>\n<p>El <strong>Razonamiento Analítico</strong> evalúa la habilidad del profesional para descomponer situaciones complejas en sus partes fundamentales, identificar relaciones de causalidad lógica, detectar contradicciones o sesgos y seleccionar conclusiones válidas basadas rigurosamente en premisas objetivas.</p>\n<h3>Tipos de Razonamiento en la Función Pública:</h3>\n<ol>\n<li><strong>Razonamiento Deductivo (De lo General a lo Particular):</strong> Si las premisas normativas son verdaderas, la conclusión es necesariamente verdadera. Es la base de la subsunción jurídica (aplicación de la norma al caso concreto).</li>\n<li><strong>Razonamiento Inductivo (De lo Particular a lo General):</strong> A partir de observaciones empíricas repetidas, se formulan hipótesis o patrones probabilísticos (base de la analítica de riesgos tributarios).</li>\n<li><strong>Razonamiento por Indicios:</strong> Encadenamiento de hechos conocidos y probados que, analizados en conjunto mediante las reglas de la sana crítica, permiten inferir la existencia de un hecho desconocido (fundamental en investigaciones de evasión y fraude).</li>\n</ol>\n<hr />\n<h2>🔍 2. Metodologías de Análisis Causa-Raíz</h2>\n<p>En la resolución de problemas institucionales y formulación de planes de mejoramiento, el Gestor II debe dominar dos metodologías universales:</p>\n<h3>A. El Diagrama de Causa y Efecto de Ishikawa (Diagrama de Espina de Pescado)</h3>\n<p>Agrupa las posibles fuentes de una desviación institucional en seis categorías operativas (adaptadas al sector público):\n* <strong>Métodos / Procedimientos:</strong> ¿Existen fallas en el diseño de los manuales de proceso o guías de trámite?\n* <strong>Personas (Talento Humano):</strong> ¿Hay vacíos de capacitación, sobrecarga laboral o falta de competencias?\n* <strong>Tecnología y Sistemas:</strong> ¿Presenta el software caídas, lentitud o interfaces confusas?\n* <strong>Medio Ambiente / Entorno:</strong> ¿Inciden factores externos normativos o presiones ciudadanas?\n* <strong>Mediciones / Datos:</strong> ¿Los indicadores están mal formulados o capturan información incompleta?\n* <strong>Materiales / Recursos:</strong> ¿Faltan insumos presupuestales o infraestructura para la labor?</p>\n<h3>B. La Técnica de los Cinco (5) Porqués</h3>\n<p>Mecanismo iterativo de cuestionamiento que profundiza verticalmente hasta desenterrar la causa originaria de un problema:\n* <em>Problema:</em> El informe de rendición de cuentas se publicó con retraso.\n* <em>1er Porqué:</em> El área financiera entregó los datos 10 días después de la fecha límite.\n* <em>2do Porqué:</em> No contaban con los saldos consolidados de las Seccionales.\n* <em>3er Porqué:</em> La plataforma de reporte se saturó al cierre del trimestre.\n* <em>4to Porqué:</em> No se habían programado fechas escalonadas de carga de archivos.\n* <em>5to Porqué (Causa Raíz):</em> <strong>Ausencia de un protocolo de alistamiento y cronograma escalonado de información institucional.</strong></p>\n<hr />\n<h2>📊 3. Interpretación de Datos Estadísticos y Tablas de Gestión</h2>\n<p>En los enunciados de Areandina es frecuente encontrar tablas con metas programadas, porcentajes de avance y tasas de variación:\n* <strong>Tasa de Variación Porcentual:</strong>\n$$\\Delta\\% = \\left( \frac{   ext{Valor Actual} -     ext{Valor Base}}{   ext{Valor Base}} \night)   imes 100$$\n* <strong>Ponderaciones Agregadas:</strong> Capacidad para calcular promedios ponderados considerando el peso específico de cada proyecto o dependencia.\n* <strong>Identificación de Falacias y Sesgos Cognitivos:</strong>\n  * <em>Sesgo de Confirmación:</em> Buscar únicamente datos que confirmen la hipótesis previa del auditor, ignorando evidencias contrarias.\n  * <em>Confusión entre Correlación y Causalidad:</em> Concluir erróneamente que porque dos variables aumentan simultáneamente, una es la causa directa de la otra.</p>\n<hr />\n<h2>📋 4. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Sé aplicar la lógica deductiva frente a la inferencia inductiva en casos de gestión?</li>\n<li>[ ] ¿Cómo se estructura un Diagrama de Ishikawa adaptado a la administración pública?</li>\n<li>[ ] ¿Cómo funciona la técnica de los 5 Porqués para aislar la causa raíz?</li>\n<li>[ ] ¿Sé calcular tasas de variación porcentual y promedios ponderados en tablas de metas?</li>\n<li>[ ] ¿Cómo evito sesgos cognitivos en el análisis de evidencias documentales?</li>\n</ul>",
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
      "id": "mod-11",
      "track": "funcionales",
      "title": "CONOCIMIENTOS DEL MODELO DE PLANEACION Y GESTION MIPG",
      "badge": "Funcional - Operación de las 19 Políticas & Comités Directivos",
      "examId": "exam-11",
      "lessons": [
        {
          "id": "les-11",
          "moduleId": "mod-11",
          "title": "CONOCIMIENTOS DEL MODELO DE PLANEACION Y GESTION MIPG",
          "badge": "Funcional - Operación de las 19 Políticas & Comités Directivos",
          "readTime": "35 min",
          "content": "<h1>🏛️ Guía Maestra: Conocimientos Operativos de las 19 Políticas de Gestión MIPG</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Funcionales (60% Eliminatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Decreto 1499 de 2017, Manual Operativo MIPG Versión 5, Resoluciones sectoriales y guías del DAFP.</p>\n<hr />\n<h2>🎯 1. Desglose Operativo de las 19 Políticas de Gestión y Desempeño</h2>\n<p>El MIPG se hace tangible a través de sus <strong>19 Políticas de Gestión y Desempeño Institucional</strong>, distribuidas en las 7 dimensiones operativas. Cada política cuenta con una entidad líder del orden nacional y un conjunto de lineamientos e instrumentos obligatorios:</p>\n<pre><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│               DISTRIBUCIÓN DE LAS 19 POLÍTICAS POR DIMENSIÓN DE MIPG                   │\n├───────────────────────────────┬────────────────────────────────────────────────────────┤\n│ DIMENSIÓN OPERATIVA           │ POLÍTICAS DE GESTIÓN Y DESEMPEÑO ARTICULADAS           │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 1. Talento Humano             │ 1. Gestión Estratégica del Talento Humano (GETH).      │\n│                               │ 2. Integridad.                                         │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 2. Direccionamiento           │ 3. Planeación Institucional.                           │\n│    Estratégico                │ 4. Gestión Presupuestal y Eficiencia del Gasto.        │\n│                               │ 5. Compras y Contratación Pública.                     │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 3. Gestión con Valores para   │ 6. Fortalecimiento Organizacional y Simplificación.    │\n│    Resultados                 │ 7. Gobierno Digital (TIC).                             │\n│                               │ 8. Seguridad Digital.                                  │\n│                               │ 9. Servicio al Ciudadano.                              │\n│                               │ 10. Racionalización de Trámites.                       │\n│                               │ 11. Participación Ciudadana en la Gestión Pública.    │\n│                               │ 12. Defensa Jurídica.                                  │\n│                               │ 13. Mejora Normativa.                                  │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 4. Evaluación de Resultados   │ 14. Seguimiento y Evaluación del Desempeño Institucional│\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 5. Información y Comunicación │ 15. Gestión Documental.                                │\n│                               │ 16. Transparencia, Acceso a la Información y Lucha     │\n│                               │     contra la Corrupción (Ley 1712/2014).              │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 6. Gestión del Conocimiento   │ 17. Gestión del Conocimiento y la Innovación.          │\n├───────────────────────────────┼────────────────────────────────────────────────────────┤\n│ 7. Control Interno            │ 18. Control Interno (MECI articulado).                 │\n│                               │ 19. Gestión de la Información Estadística.             │\n└───────────────────────────────┴────────────────────────────────────────────────────────┘\n</code></pre>\n<hr />\n<h2>🏛️ 2. Instancias de Gobernanza y Operación del Modelo en la DIAN</h2>\n<p>El <strong>Decreto 1499 de 2017</strong> formalizó la gobernanza para la toma de decisiones en MIPG:\n1. <strong>Comité Institucional de Gestión y Desempeño:</strong>\n   * Es la máxima instancia directiva en la entidad para la aprobación, seguimiento y evaluación del MIPG.\n   * Presidido por el Director General y compuesto por los Directores de Gestión de la entidad.\n   * Funciones: Aprobar el Plan de Acción Anual, revisar los resultados del FURAG, orientar el Plan de Cierre de Brechas y aprobar las políticas institucionales de gestión.\n2. <strong>Comité Institucional de Coordinación de Control Interno:</strong>\n   * Instancia asesora de alto nivel encargada de velar por la efectividad del sistema de control interno y evaluar la suficiencia de los controles de los procesos.</p>\n<hr />\n<h2>🎯 3. Interoperabilidad de Políticas para el Gestor II</h2>\n<p>En la cotidianidad de un <strong>Gestor II</strong>:\n* Ninguna política opera aislada: Por ejemplo, la <strong>Racionalización de Trámites</strong> se apoya en <strong>Gobierno Digital</strong> (digitalización del trámite), en <strong>Servicio al Ciudadano</strong> (experiencia del usuario) y en <strong>Gestión Documental</strong> (expediente electrónico).\n* Cuando una pregunta de juicio situacional presenta un problema en la atención de usuarios en la DIAN, la solución correcta articula la simplificación del trámite, la capacitación de los funcionarios en lenguaje claro y el monitoreo mediante indicadores de oportunidad.</p>\n<hr />\n<h2>📋 4. Checklist de Repaso Rápido</h2>\n<ul>\n<li>[ ] ¿Conozco las 19 políticas oficiales de gestión y desempeño y a qué dimensión pertenecen?</li>\n<li>[ ] ¿Qué entidad líder del orden nacional orienta cada una de las políticas principales?</li>\n<li>[ ] ¿Cuáles son las funciones del Comité Institucional de Gestión y Desempeño según el Dec. 1499?</li>\n<li>[ ] ¿Cómo interactúan las políticas de Gobierno Digital, Racionalización de Trámites y Servicio al Ciudadano?</li>\n<li>[ ] ¿Por qué el MIPG exige la interoperabilidad de procesos en lugar de islas de trabajo?</li>\n</ul>",
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
      "title": "Examen Módulo 1: Conceptos de Gestión Pública (10 Preguntas PJS)",
      "indicatorNum": 1,
      "questions": [
        {
          "id": 101,
          "topic": "Principios Constitucionales de la Función Pública",
          "caseText": "En una Dirección Seccional de la DIAN, un funcionario asignado a la tramitación de devoluciones tributarias decide priorizar las solicitudes de una empresa perteneciente a un conocido personal, argumentando que de esa manera agiliza su carga de trabajo.",
          "statement": "Frente a esta actuación, a la luz del artículo 209 de la Constitución Política y los principios de la función pública, la conducta del funcionario es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "Vulnera los principios de igualdad e imparcialidad, los cuales obligan a tramitar las solicitudes en estricto orden y sin otorgar privilegios o preferencias no previstas en la ley."
            },
            {
              "id": "B",
              "text": "Incurre en una falla exclusivamente técnica que debe ser subsanada mediante la reasignación de computadores en la seccional."
            },
            {
              "id": "C",
              "text": "Afecta el principio de celeridad únicamente si la empresa no adjuntó los certificados de retención en la fuente exigidos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 209 de la Constitución Política consagra que la función administrativa se desarrolla con fundamento en los principios de igualdad, moralidad e imparcialidad. Otorgar prioridad injustificada a conocidos viola el derecho al trato igualitario de los demás contribuyentes.",
            "distractors": [
              {
                "id": "B",
                "reason": "No es una falla de hardware o computacional, sino una grave vulneración de los deberes éticos y principios constitucionales de la función pública."
              },
              {
                "id": "C",
                "reason": "La vulneración ocurre por el trato preferencial injustificado, independientemente de los anexos documentales que haya presentado el contribuyente."
              }
            ]
          }
        },
        {
          "id": 102,
          "topic": "Diferencia entre Desconcentración y Delegación",
          "caseText": "La Dirección General de la DIAN expide una resolución mediante la cual traslada de manera permanente la competencia para liquidar tributos aduaneros a las Direcciones Seccionales del país, dentro de la misma persona jurídica de la entidad.",
          "statement": "De acuerdo con la Ley 489 de 1998, esta forma de organización de la administración pública corresponde a:",
          "options": [
            {
              "id": "A",
              "text": "Desconcentración administrativa, puesto que se radica una competencia de forma permanente en dependencias territoriales dentro de la misma persona jurídica estatal."
            },
            {
              "id": "B",
              "text": "Descentralización por servicios, ya que crea nuevas entidades autónomas con personería jurídica y presupuesto independiente en cada seccional."
            },
            {
              "id": "C",
              "text": "Delegación de funciones, dado que cualquier traslado de tareas dentro del Estado se presume delegación revocable verbalmente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Según el artículo 8 de la Ley 489 de 1998, la desconcentración es la radicación de competencias y funciones en dependencias ubicadas fuera de la sede principal del organismo, sin conferirles personería jurídica independiente (ej. Direcciones Seccionales DIAN).",
            "distractors": [
              {
                "id": "B",
                "reason": "Las Direcciones Seccionales de la DIAN no son personas jurídicas independientes ni entidades descentralizadas; forman parte de la misma UAE DIAN."
              },
              {
                "id": "C",
                "reason": "La delegación no es verbal; exige un acto formal escrito y no constituye una redistribución orgánica estructural permanente de la competencia."
              }
            ]
          }
        },
        {
          "id": 103,
          "topic": "Prohibiciones Legales de la Delegación",
          "caseText": "Un Director de Gestión del Nivel Central de la DIAN proyecta una resolución en la que pretende delegar en un Gestor II la expedición de reglamentos de carácter general y abstracto que definen el calendario de recaudo para todo el país.",
          "statement": "Al revisar la legalidad de esta delegación con base en el artículo 11 de la Ley 489 de 1998, al profesional le corresponde indicar que:",
          "options": [
            {
              "id": "A",
              "text": "La delegación es improcedente por prohibición legal expresa, ya que no se puede delegar la expedición de reglamentos de carácter general."
            },
            {
              "id": "B",
              "text": "La delegación es válida siempre que el Gestor II cuente con tarjeta profesional y más de dos años de experiencia en la entidad."
            },
            {
              "id": "C",
              "text": "La delegación es viable únicamente si se publica previamente en la página web institucional durante cinco días hábiles."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El numeral 1 del artículo 11 de la Ley 489 de 1998 prohíbe de manera taxativa la delegación de la expedición de reglamentos de carácter general, salvo disposición legal expresa en contrario.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los requisitos de idoneidad personal o experiencia no suplen ni eliminan las prohibiciones legales taxativas de la ley."
              },
              {
                "id": "C",
                "reason": "La publicación web es un mecanismo de publicidad ciudadana, pero no convalida un acto expresamente prohibido por el estatuto de administración pública."
              }
            ]
          }
        },
        {
          "id": 104,
          "topic": "Conflicto de Interés y Trámite de Impedimento",
          "caseText": "Un profesional Gestor II es designado para auditar el proceso de fiscalización que se adelanta contra una sociedad comercial en la cual su cónyuge es socio mayoritario y representante legal.",
          "statement": "Ante esta situación, conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011), la conducta que debe seguir el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Declararse impedido de inmediato y por escrito ante su superior jerárquico, explicando la causal de conflicto de interés para que se designe un funcionario ad hoc."
            },
            {
              "id": "B",
              "text": "Continuar con la auditoría aplicando el principio de imparcialidad y guardando silencio para no alarmar a sus compañeros."
            },
            {
              "id": "C",
              "text": "Solicitar a su cónyuge que renuncie a la representación legal de la empresa para poder emitir el informe sin contratiempos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Los artículos 11 y 12 del CPACA establecen que el servidor público que tenga interés particular o cuyo cónyuge lo tenga en una actuación administrativa debe manifestar su impedimento por escrito a su superior de forma inmediata.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ocultar la causal y continuar actuando genera nulidad de lo actuado y configura falta gravísima disciplinaria por conflicto de interés."
              },
              {
                "id": "C",
                "reason": "La renuncia sobreviniente no subsana el interés económico existente y constituye una maniobra artificiosa prohibida por el Código General Disciplinario."
              }
            ]
          }
        },
        {
          "id": 105,
          "topic": "Naturaleza del Empleo Público y Régimen Específico",
          "caseText": "Un servidor de carrera administrativa de la DIAN solicita una aclaración sobre su régimen laboral frente a las reformas del Código Sustantivo del Trabajo.",
          "statement": "Para orientarlo técnicamente, al profesional le corresponde explicar que los servidores de carrera de la DIAN:",
          "options": [
            {
              "id": "A",
              "text": "Son empleados públicos regidos por una relación legal y reglamentaria, amparados por un Sistema Específico de Carrera (Decretos Ley 071 de 2020 y 927 de 2023)."
            },
            {
              "id": "B",
              "text": "Son trabajadores oficiales vinculados por contrato individual de trabajo a término indefinido bajo las reglas del Código Sustantivo del Trabajo."
            },
            {
              "id": "C",
              "text": "Son contratistas de prestación de servicios con autonomía técnica y sin subordinación jurídica frente a la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El régimen de los servidores de la DIAN corresponde a la categoría de empleados públicos con relación legal y reglamentaria, regidos específicamente por los Decretos Ley 071 de 2020 y 927 de 2023 en virtud de su carrera especial.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los trabajadores oficiales se vinculan por contrato de trabajo en empresas industriales del Estado para obras públicas, no en unidades de administración tributaria."
              },
              {
                "id": "C",
                "reason": "Los contratistas no son servidores públicos de carrera ni tienen nombramiento ni posesión legal."
              }
            ]
          }
        },
        {
          "id": 106,
          "topic": "Principio de Celeridad y Debido Proceso",
          "caseText": "Un contribuyente radica una solicitud de información para un recurso de reconsideración. El área responsable demora la entrega durante dos meses argumentando sobrecarga de trabajo y la proximidad del cierre fiscal.",
          "statement": "Al evaluar este caso, la actuación de la dependencia desconoce el principio de celeridad porque:",
          "options": [
            {
              "id": "A",
              "text": "Incurre en dilaciones injustificadas desconociendo los términos legales del CPACA, los cuales buscan que la administración resuelva con agilidad y dentro de los plazos de ley."
            },
            {
              "id": "B",
              "text": "El principio de celeridad solo aplica para contrataciones de licitación pública y no en trámites administrativos con contribuyentes."
            },
            {
              "id": "C",
              "text": "La sobrecarga laboral suspende de pleno derecho los términos legales de respuesta en todas las entidades del Estado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de celeridad (Art. 3 CPACA y Art. 209 C.P.) exige tramitar los procesos sin demoras innecesarias. La sobrecarga laboral no es causal legal para suspender plazos perentorios de petición o información.",
            "distractors": [
              {
                "id": "B",
                "reason": "El principio de celeridad es un principio transversal de toda la función administrativa, no exclusivo de la contratación."
              },
              {
                "id": "C",
                "reason": "Los términos de ley solo pueden ser suspendidos por declaratoria expresa de fuerza mayor o caso fortuito autorizada por acto administrativo general."
              }
            ]
          }
        },
        {
          "id": 107,
          "topic": "Principio de Moralidad y Rechazo a Dádivas",
          "caseText": "Durante una visita de control de obligaciones formales, un comerciante ofrece a los funcionarios un obsequio costoso de mercancía importada como 'muestra de agradecimiento por su asesoría'.",
          "statement": "Frente a esta situación, al funcionario le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar de forma inmediata y categórica el obsequio, dejando constancia documentada en el acta de visita y reportando el suceso ante la instancia competente."
            },
            {
              "id": "B",
              "text": "Aceptar el obsequio a nombre de la entidad y llevarlo a la Dirección Seccional para rifarlo entre los compañeros."
            },
            {
              "id": "C",
              "text": "Recibir el obsequio siempre y cuando su valor comercial no supere un salario mínimo legal vigente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad de la DIAN y la Ley 1952 de 2019 prohíben taxativamente recibir dádivas, incentivos, obsequios o favores bajo cualquier circunstancia o cuantía. La única conducta legal es el rechazo y reporte formal.",
            "distractors": [
              {
                "id": "B",
                "reason": "Aceptar bienes de administrados para beneficio interno constituye una infracción disciplinaria y un compromiso ilegítimo de la imparcialidad pública."
              },
              {
                "id": "C",
                "reason": "No existe ningún monto mínimo o exento que autorice a un servidor público a aceptar regalos de ciudadanos fiscalizados."
              }
            ]
          }
        },
        {
          "id": 108,
          "topic": "Descentralización Territorial vs. Descentralización por Servicios",
          "caseText": "Un equipo de estudio analiza la creación de una entidad pública encargada de administrar el fondo de modernización tecnológica del recaudo tributario con personería jurídica, autonomía presupuestal y patrimonio propio.",
          "statement": "Desde la teoría del derecho administrativo, esta figura corresponde a una descentralización:",
          "options": [
            {
              "id": "A",
              "text": "Por servicios (o funcional), puesto que se confiere autonomía y personería a un organismo especializado para cumplir un objetivo técnico y específico del Estado."
            },
            {
              "id": "B",
              "text": "Territorial, puesto que su sede física se encontrará ubicada en el Distrito Capital de Bogotá."
            },
            {
              "id": "C",
              "text": "Por colaboración, ya que las entidades públicas siempre actúan mediante gremios y personas privadas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La descentralización por servicios o especializada (Art. 30 Ley 489/1998) se presenta cuando el Estado crea una persona jurídica pública con autonomía funcional y patrimonial para ejercer cometidos técnicos determinados.",
            "distractors": [
              {
                "id": "B",
                "reason": "La descentralización territorial corresponde a las entidades territoriales constitucionales: Departamentos, Municipios y Distritos."
              },
              {
                "id": "C",
                "reason": "La descentralización por colaboración es el ejercicio de funciones públicas por particulares autorizados por la ley (ej. Cámaras de Comercio, Notarios)."
              }
            ]
          }
        },
        {
          "id": 109,
          "topic": "Eficacia vs. Economía en la Gestión",
          "caseText": "En la evaluación anual de una dependencia de recaudo se constata que se alcanzó el 100% de la meta de cobranza, pero los costos administrativos y de contratación superaron en un 300% el presupuesto aprobado debido a contrataciones imprevistas sin planeación.",
          "statement": "Al estructurar el análisis de gestión, al Gestor II le corresponde concluir que la dependencia fue:",
          "options": [
            {
              "id": "A",
              "text": "Eficaz porque alcanzó el objetivo trazado, pero ineficiente y antieconómica porque desbordó de manera injustificada los recursos y costos asignados."
            },
            {
              "id": "B",
              "text": "Completamente exitosa en todas las dimensiones, puesto que el recaudo tributario justifica cualquier exceso presupuestal incurrido."
            },
            {
              "id": "C",
              "text": "Ineficaz, ya que el desborde presupuestal invalida legalmente las metas de recaudo alcanzadas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La eficacia mide exclusivamente el logro de la meta (100% cumplido); sin embargo, la economía y la eficiencia exigen maximizar los recursos y no exceder los costos previstos. El logro no exime del control del gasto.",
            "distractors": [
              {
                "id": "B",
                "reason": "El fin no justifica los medios en el derecho público; los principios de economía y austeridad del gasto son de obligatorio cumplimiento."
              },
              {
                "id": "C",
                "reason": "Las metas de recaudo se alcanzaron efectivamente (hubo eficacia), lo que falló fue la eficiencia y economía en el uso de los recursos."
              }
            ]
          }
        },
        {
          "id": 110,
          "topic": "Inhabilidad Sobreviniente",
          "caseText": "Un funcionario en ejercicio es condenado penalmente mediante sentencia ejecutoriada por el delito de concusión en un juzgado del circuito.",
          "statement": "De acuerdo con el régimen de la función pública colombiana, esta situación genera:",
          "options": [
            {
              "id": "A",
              "text": "Una inhabilidad sobreviniente que obliga al retiro inmediato del servicio público mediante la declaratoria de vacancia del empleo."
            },
            {
              "id": "B",
              "text": "Una suspensión preventiva con goce de sueldo hasta que el funcionario decida apelar ante cortes internacionales."
            },
            {
              "id": "C",
              "text": "Un traslado temporal a otra seccional donde no tenga contacto con el manejo de dinero."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 122 de la Constitución Política y la Ley 734/2002 / Ley 1952/2019 disponen que la condena penal ejecutoriada por delitos contra la administración genera inhabilidad definitiva sobreviniente y la consecuente desvinculación inmediata del cargo.",
            "distractors": [
              {
                "id": "B",
                "reason": "La sentencia ejecutoriada agota la vía judicial nacional; no procede suspensión con goce de sueldo."
              },
              {
                "id": "C",
                "reason": "Una persona condenada por delitos contra el erario público queda inhabilitada de por vida para ejercer cargos públicos; no es susceptible de traslado."
              }
            ]
          }
        }
      ]
    },
    "exam-2": {
      "title": "Examen Módulo 2: Fundamentos del Modelo Integrado de Planeación y Gestión MIPG (10 Preguntas PJS)",
      "indicatorNum": 2,
      "questions": [
        {
          "id": 201,
          "topic": "Fusión del Sistema de Gestión y Marco Legal de MIPG",
          "caseText": "Al diseñar el plan de trabajo anual de planeación, un integrante del equipo propone mantener manuales de procesos separados para el 'Sistema de Calidad' y otros para el 'Sistema de Gestión Institucional'.",
          "statement": "Para corregir esta propuesta con base en el marco normativo de MIPG, al Gestor II le corresponde precisar que:",
          "options": [
            {
              "id": "A",
              "text": "El artículo 133 de la Ley 1753 de 2015 y el Decreto 1499 de 2017 unificaron el Sistema de Gestión de Calidad y el Sistema de Desarrollo Administrativo en un solo Sistema de Gestión integrado."
            },
            {
              "id": "B",
              "text": "La ley exige mantener tres sistemas independientes con tres comités directivos paralelos para garantizar la pluralidad de enfoques."
            },
            {
              "id": "C",
              "text": "El Sistema de Calidad solo rige para empresas privadas que exportan bienes y no tiene relación con el Estado colombiano."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 133 de la Ley 1753 de 2015 unificó el Sistema de Gestión de la Calidad (Ley 872 de 2003) con el Sistema de Desarrollo Administrativo (Ley 489 de 1998) en el nuevo Sistema de Gestión reglamentado por el Decreto 1499 de 2017.",
            "distractors": [
              {
                "id": "B",
                "reason": "MIPG se creó precisamente para acabar con la proliferación desarticulada de comités y sistemas paralelos."
              },
              {
                "id": "C",
                "reason": "La Ley 872 de 2003 rigió la calidad en el sector público colombiano hasta su integración legal en MIPG."
              }
            ]
          }
        },
        {
          "id": 202,
          "topic": "La Dimensión de Talento Humano como Corazón de MIPG",
          "caseText": "Una entidad pública inicia la implementación de MIPG enfocando todos sus esfuerzos en la adquisición de software de última generación, pero desatiende por completo la capacitación de los funcionarios y el clima laboral.",
          "statement": "De acuerdo con el Manual Operativo del MIPG, este enfoque es erróneo porque:",
          "options": [
            {
              "id": "A",
              "text": "La Dimensión 1 (Talento Humano) es el corazón del modelo y la base indispensable para que todas las demás dimensiones operativas puedan funcionar con éxito."
            },
            {
              "id": "B",
              "text": "MIPG prohíbe la inversión en software y tecnología hasta que la entidad obtenga 100 puntos en FURAG."
            },
            {
              "id": "C",
              "text": "El talento humano solo debe intervenir en la fase de evaluación final y no en la planeación de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Manual Operativo del MIPG define a la Dimensión de Talento Humano como el eje central y corazón del modelo, dado que son los servidores públicos quienes operan las políticas, gestionan los procesos y generan valor público.",
            "distractors": [
              {
                "id": "B",
                "reason": "El modelo no prohíbe la inversión tecnológica; promueve la transformación digital, pero articulada al desarrollo del talento humano."
              },
              {
                "id": "C",
                "reason": "El talento humano participa a lo largo de todo el ciclo de gestión y no únicamente al cierre de la vigencia."
              }
            ]
          }
        },
        {
          "id": 203,
          "topic": "Concepto de Valor Público en MIPG",
          "caseText": "Una dependencia de la DIAN presenta un informe de gestión destacando que imprimió 50.000 folletos informativos, pero los indicadores de satisfacción ciudadana y de facilidad en el cumplimiento tributario no mostraron ninguna mejoría.",
          "statement": "A la luz del principio de orientación a resultados de MIPG, este resultado evidencia que:",
          "options": [
            {
              "id": "A",
              "text": "Se ejecutaron productos y actividades operativas, pero no se generó valor público tangible que mejorara la calidad de vida o la experiencia del ciudadano."
            },
            {
              "id": "B",
              "text": "La impresión masiva de folletos constituye por sí sola la máxima expresión del valor público en la administración moderna."
            },
            {
              "id": "C",
              "text": "El valor público se mide únicamente por el presupuesto ejecutado sin importar la opinión de los usuarios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor público en MIPG se materializa cuando las acciones del Estado resuelven necesidades reales de los ciudadanos con calidad y eficacia, y no por el simple conteo de productos físicos o folletos entregados.",
            "distractors": [
              {
                "id": "B",
                "reason": "El activismo administrativo o la impresión de piezas sin impacto en el servicio no genera valor público."
              },
              {
                "id": "C",
                "reason": "El valor público se valida en la percepción y satisfacción del destinatario final de la gestión pública."
              }
            ]
          }
        },
        {
          "id": 204,
          "topic": "Articulación del Ciclo PHVA en las 7 Dimensiones",
          "caseText": "En una mesa técnica se debate cómo se ordenan las dimensiones del MIPG dentro del ciclo clásico de mejoramiento continuo.",
          "statement": "La correspondencia técnica correcta entre las dimensiones del modelo y el ciclo PHVA es:",
          "options": [
            {
              "id": "A",
              "text": "Planear (Direccionamiento Estratégico), Hacer (Gestión con Valores), Verificar (Evaluación de Resultados) y Actuar (Control Interno y Mejoramiento Continuo)."
            },
            {
              "id": "B",
              "text": "Planear (Control Interno), Hacer (Talento Humano), Verificar (Direccionamiento) y Actuar (Información)."
            },
            {
              "id": "C",
              "text": "El MIPG no sigue el ciclo PHVA porque este fue derogado expresamente por el Decreto 1083 de 2015."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Manual Operativo de MIPG estructura sus dimensiones operativas sobre la lógica de la mejora continua: Direccionamiento (Planear), Gestión para Resultados (Hacer), Evaluación (Verificar) y Control Interno (Actuar/Asegurar).",
            "distractors": [
              {
                "id": "B",
                "reason": "El orden propuesto es incoherente; Control Interno no es la etapa de planeación inicial."
              },
              {
                "id": "C",
                "reason": "El ciclo PHVA es la base conceptual y metodológica de la operación de MIPG en el Estado colombiano."
              }
            ]
          }
        },
        {
          "id": 205,
          "topic": "Toma de Decisiones Basada en Evidencia",
          "caseText": "La dirección de un área propone modificar drásticamente el procedimiento de aforo de mercancías sin consultar estadísticas históricas de aprehensiones, quejas de usuarios ni mapas de riesgo.",
          "statement": "Frente a este planteamiento, el principio de MIPG que se está vulnerando es:",
          "options": [
            {
              "id": "A",
              "text": "Toma de decisiones basada en evidencia, el cual exige fundamentar las modificaciones de políticas y procesos en datos confiables, diagnósticos y análisis estadísticos objetivos."
            },
            {
              "id": "B",
              "text": "Principio de autonomía judicial, el cual obliga a no recopilar datos antes de formular proyectos de inversión."
            },
            {
              "id": "C",
              "text": "Principio de gratuidad de la prueba, que impide utilizar estadísticas en trámites aduaneros."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Uno de los cinco principios rectores del MIPG es la toma de decisiones basada en evidencia, que erradica la intuición y la improvisación en el diseño de planes institucionales mediante el uso riguroso de datos y diagnósticos.",
            "distractors": [
              {
                "id": "B",
                "reason": "La autonomía judicial rige para los jueces de la República, no para la toma de decisiones administrativas en la DIAN."
              },
              {
                "id": "C",
                "reason": "La gratuidad de la prueba no guarda relación alguna con los principios de planeación y gestión de MIPG."
              }
            ]
          }
        },
        {
          "id": 206,
          "topic": "Gestión con Valores para Resultados: Ventanilla Hacia Adentro vs. Hacia Afuera",
          "caseText": "Al revisar la Dimensión 3 de MIPG (Gestión con Valores para Resultados), se identifica la necesidad de clasificar las políticas según su enfoque de entrega de servicio.",
          "statement": "La clasificación correcta entre la ventanilla hacia adentro y hacia afuera corresponde a:",
          "options": [
            {
              "id": "A",
              "text": "Hacia adentro: Gestión Presupuestal, Gobierno Digital y Fortalecimiento Organizacional. Hacia afuera: Servicio al Ciudadano, Racionalización de Trámites y Participación Ciudadana."
            },
            {
              "id": "B",
              "text": "Hacia adentro comprende exclusivamente la atención en ventanillas físicas de servicio y hacia afuera las auditorías internas de la OCI."
            },
            {
              "id": "C",
              "text": "Todas las políticas son únicamente de ventanilla hacia adentro, ya que el ciudadano no tiene relación con el MIPG."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Manual Operativo divide la Dimensión 3 en dos frentes: ventanilla hacia adentro (adecuación de procesos, tecnologías y presupuesto) y ventanilla hacia afuera (relacionamiento directo, trámites ágiles y servicio al ciudadano).",
            "distractors": [
              {
                "id": "B",
                "reason": "La atención física al ciudadano es una política de ventanilla hacia afuera, no hacia adentro."
              },
              {
                "id": "C",
                "reason": "El ciudadano es el beneficiario central y fin primordial del MIPG (valor público)."
              }
            ]
          }
        },
        {
          "id": 207,
          "topic": "Transparencia y Acceso a la Información (Ley 1712 de 2014)",
          "caseText": "Un ciudadano solicita el organigrama actualizado, las escalas salariales y el plan de adquisiciones de la entidad. El funcionario encargado rechaza la solicitud aduciendo 'reserva estratégica interna'.",
          "statement": "A la luz de la Ley 1712 de 2014 y la Dimensión de Información y Comunicación de MIPG, la respuesta es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "Esa información corresponde a transparencia activa obligatoria que debe estar publicada y permanentemente accesible en la página web institucional."
            },
            {
              "id": "B",
              "text": "La información de gastos públicos solo se entrega a quienes demuestren un interés jurídico directo mediante abogado titulado."
            },
            {
              "id": "C",
              "text": "La ley de transparencia solo aplica a los municipios de sexta categoría y no a entidades del orden nacional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 1712 de 2014 define la transparencia activa como el deber de publicar de oficio y sin necesidad de solicitud ciudadana la estructura orgánica, funciones, salarios, presupuestos y planes de contratación de la entidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "El acceso a la información pública es un derecho universal; no exige interés particular ni apoderado judicial."
              },
              {
                "id": "C",
                "reason": "La Ley 1712 de 2014 rige obligatoriamente para todas las entidades del Estado en todos los órdenes."
              }
            ]
          }
        },
        {
          "id": 208,
          "topic": "Gestión del Conocimiento y la Innovación en MIPG",
          "caseText": "Varios funcionarios expertos en fiscalización tributaria están próximos a su edad de retiro forzoso y se detecta el riesgo inminente de perder sus metodologías de auditoría y saberes prácticos no documentados.",
          "statement": "Para mitigar este riesgo conforme a la Dimensión 6 de MIPG, a la entidad le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Implementar un plan de captura, transferencia y memoria institucional del conocimiento tácito a explícito, mediante lecciones aprendidas y mentorías con servidores jóvenes."
            },
            {
              "id": "B",
              "text": "Prohibir la jubilación de los funcionarios hasta que memoricen el nuevo estatuto aduanero."
            },
            {
              "id": "C",
              "text": "Contratar una auditoría forense externa para incautar los cuadernos personales de los funcionarios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Dimensión de Gestión del Conocimiento e Innovación busca preservar el capital intelectual del Estado, transfiriendo el conocimiento tácito de los servidores con experiencia hacia repositorios institucionales y equipos de relevo.",
            "distractors": [
              {
                "id": "B",
                "reason": "El retiro por edad legal forzosa (70 años) es un mandato legal improrrogable que no puede ser condicionado administrativamente."
              },
              {
                "id": "C",
                "reason": "La gestión del conocimiento es un proceso pedagógico y colaborativo, no una incautación judicial hostil."
              }
            ]
          }
        },
        {
          "id": 209,
          "topic": "Comités Institucionales en el Decreto 1499 de 2017",
          "caseText": "Un jefe de oficina propone crear un comité independiente para revisar exclusivamente el protocolo de archivo y correspondencia, con funciones desarticuladas del Comité Institucional de Gestión y Desempeño.",
          "statement": "Al analizar esta propuesta con base en el Decreto 1499 de 2017, al profesional le corresponde señalar que:",
          "options": [
            {
              "id": "A",
              "text": "Es inviable, ya que el Comité Institucional de Gestión y Desempeño absorbió las funciones de los antiguos comités sectoriales y temáticos de la entidad para garantizar la unicidad de mando."
            },
            {
              "id": "B",
              "text": "Es obligatoria la creación de comités aislados para cada uno de los 50 procesos del mapa institucional."
            },
            {
              "id": "C",
              "text": "La propuesta debe remitirse al Congreso de la República para que autorice la creación del nuevo comité mediante ley estatutaria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1499 de 2017 unificó los comités temáticos preexistentes en un único Comité Institucional de Gestión y Desempeño en cada entidad, evitando la dispersión de esfuerzos decisorios.",
            "distractors": [
              {
                "id": "B",
                "reason": "La creación de comités fragmentados contradice frontalmente la simplificación y agilidad que promueve MIPG."
              },
              {
                "id": "C",
                "reason": "Las instancias internas de coordinación administrativa se reglamentan por decreto del ejecutivo, no por leyes estatutarias del Congreso."
              }
            ]
          }
        },
        {
          "id": 210,
          "topic": "Autodiagnósticos de Madurez en MIPG",
          "caseText": "Antes de iniciar la planeación estratégica de la vigencia, la dependencia de planeación requiere conocer el nivel de cumplimiento y las fortalezas institucionales en la política de servicio al ciudadano.",
          "statement": "De acuerdo con el Manual Operativo del MIPG, el instrumento oficial para realizar esta valoración diagnóstica es:",
          "options": [
            {
              "id": "A",
              "text": "La herramienta de Autodiagnóstico oficial dispuesta por el DAFP para evaluar el nivel de madurez y cumplimiento de la respectiva política pública."
            },
            {
              "id": "B",
              "text": "Una encuesta informal de satisfacción realizada en redes sociales sin rigor metodológico."
            },
            {
              "id": "C",
              "text": "El libro de quejas físicas de la recepción sin ningún análisis de causas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El DAFP diseñó instrumentos estandarizados de Autodiagnóstico para cada una de las políticas de MIPG, los cuales permiten a las entidades evaluar sus brechas antes de formular planes de acción o reportar en FURAG.",
            "distractors": [
              {
                "id": "B",
                "reason": "Las redes sociales no reemplazan las matrices técnicas de diagnóstico basadas en variables normativas oficiales del DAFP."
              },
              {
                "id": "C",
                "reason": "El libro de quejas es un insumo complementario, pero no constituye la metodología formal de autodiagnóstico del modelo."
              }
            ]
          }
        }
      ]
    },
    "exam-3": {
      "title": "Examen Módulo 3: Contexto del Sistema de Control Interno (10 Preguntas PJS)",
      "indicatorNum": 3,
      "questions": [
        {
          "id": 301,
          "topic": "Los Tres Principios Constitucionales de Control Interno",
          "caseText": "Un servidor público de la DIAN detecta que un aplicativo de liquidación aduanera comete errores intermitentes al calcular los tributos, pero no reporta la falla ni revisa sus cálculos manuales argumentando que 'el control del sistema le corresponde solo a los auditores'.",
          "statement": "Esta actitud vulnera directamente el principio constitucional de:",
          "options": [
            {
              "id": "A",
              "text": "Autocontrol, el cual exige a cada funcionario evaluar y controlar de forma permanente su trabajo y corregir desvíos oportunamente."
            },
            {
              "id": "B",
              "text": "Inmunidad jurisdiccional, que faculta a los servidores a omitir reportes si no existe orden judicial previa."
            },
            {
              "id": "C",
              "text": "Cosa juzgada material, ya que los cálculos de computadores no pueden ser objetados por seres humanos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de autocontrol (Ley 87 de 1993 y MECI) responsabiliza a cada servidor del aseguramiento y verificación continua de la calidad y exactitud de su labor, sin delegar pasivamente el control en terceros.",
            "distractors": [
              {
                "id": "B",
                "reason": "La inmunidad jurisdiccional es una figura del derecho internacional diplomático sin relación con el control interno."
              },
              {
                "id": "C",
                "reason": "El principio de cosa juzgada aplica a sentencias judiciales definitivas, no a rutinas operativas de software."
              }
            ]
          }
        },
        {
          "id": 302,
          "topic": "Los 5 Componentes de COSO 2013 / MECI",
          "caseText": "En la evaluación del sistema de control interno se constata que la alta dirección de la DIAN promueve activamente el Código de Integridad, define líneas claras de autoridad y capacita permanentemente a sus colaboradores en ética pública.",
          "statement": "A la luz del marco COSO 2013 y la Dimensión 7 de MIPG, estas acciones fortalecen prioritariamente el componente de:",
          "options": [
            {
              "id": "A",
              "text": "Ambiente de Control, dado que establece el tono ético de la organización, la estructura de gobierno y la cultura de integridad institucional."
            },
            {
              "id": "B",
              "text": "Actividades de Monitoreo exclusivamente, ya que la ética solo se evalúa en auditorías posteriores."
            },
            {
              "id": "C",
              "text": "Evaluación del Riesgo Tecnológico de redes de cómputo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Ambiente de Control es la base y cimiento de los cinco componentes de COSO 2013; comprende el compromiso ético, la filosofía de la dirección, la integridad y la estructura de responsabilidad de la entidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "El monitoreo evalúa el funcionamiento continuo del sistema, pero el ambiente de control es quien instaura los valores y la cultura."
              },
              {
                "id": "C",
                "reason": "La evaluación de riesgos tecnológicos es un proceso analítico específico, no el marco de conducta ética institucional."
              }
            ]
          }
        },
        {
          "id": 303,
          "topic": "Primera Línea de Defensa (Línea Operativa)",
          "caseText": "Un profesional de fiscalización sostiene que la identificación de riesgos en las auditorías tributarias debe ser realizada por la Oficina de Planeación y no por los funcionarios que ejecutan los operativos en campo.",
          "statement": "De acuerdo con el modelo de Líneas de Defensa del Decreto 648 de 2017, la postura del profesional es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "Los líderes de proceso y los servidores en su operación diaria conforman la Primera Línea de Defensa, siendo los dueños directos de la gestión y mitigación del riesgo en tiempo real."
            },
            {
              "id": "B",
              "text": "La primera línea de defensa está integrada exclusivamente por el Director General de la DIAN y el Ministro de Hacienda."
            },
            {
              "id": "C",
              "text": "Los funcionarios operativos no tienen facultades para conocer los mapas de riesgo institucionales por orden legal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Bajo el esquema de líneas de defensa (Decreto 648/2017 y DAFP), la Primera Línea está constituida por los líderes y ejecutores directos de los procesos, quienes son los dueños de los riesgos y de los controles preventivos diarios.",
            "distractors": [
              {
                "id": "B",
                "reason": "El Director General conforma la Línea Estratégica, no la Primera Línea operativa."
              },
              {
                "id": "C",
                "reason": "Todos los servidores deben conocer y aplicar activamente los controles de los riesgos de sus procesos."
              }
            ]
          }
        },
        {
          "id": 304,
          "topic": "Segunda Línea de Defensa (Monitoreo y Supervisión)",
          "caseText": "La Oficina de Planeación y el equipo de Gestión del Riesgo de la DIAN diseñan metodologías para mapas de riesgo, emiten alertas tempranas y consolidan tableros de control de indicadores institucionales.",
          "statement": "Dentro del esquema de control interno del Estado colombiano, estas dependencias operan como:",
          "options": [
            {
              "id": "A",
              "text": "Segunda Línea de Defensa, encargada de facilitar metodologías, monitorear y supervisar de forma continua la gestión del riesgo y el control en la entidad."
            },
            {
              "id": "B",
              "text": "Tercera Línea de Defensa, con funciones de aseguramiento independiente y sanción disciplinaria de funcionarios."
            },
            {
              "id": "C",
              "text": "Órganos externos de control fiscal adscritos a la Contraloría General de la República."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Segunda Línea de Defensa está integrada por dependencias como Planeación, Riesgos, Calidad y Seguridad de la Información, cuya función es dar soporte metodológico y monitorear la aplicación de controles de la primera línea.",
            "distractors": [
              {
                "id": "B",
                "reason": "La Tercera Línea corresponde privativamente a la Oficina de Control Interno / Auditoría Interna."
              },
              {
                "id": "C",
                "reason": "Planeación es una dependencia interna de la DIAN, no un organismo de control externo fiscal."
              }
            ]
          }
        },
        {
          "id": 305,
          "topic": "Tercera Línea de Defensa (Independencia y No Coadministración)",
          "caseText": "Un jefe de área operativa solicita a la Oficina de Control Interno que redacte y apruebe las resoluciones de liquidación oficial de tributos para 'estar seguros de que no tienen errores'.",
          "statement": "Frente a este requerimiento, a la Oficina de Control Interno le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar la solicitud, explicando que su rol es de evaluación independiente y aseguramiento posterior; coadministrar o redactar actos de proceso destruiría su independencia objetiva de auditoría."
            },
            {
              "id": "B",
              "text": "Aceptar la redacción de los actos administrativos siempre que se le reconozca una bonificación especial de auditoría."
            },
            {
              "id": "C",
              "text": "Asumir la dirección del área operativa y relevar al jefe titular de sus funciones de forma indefinida."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 87 de 1993 y las normas de auditoría pública prohíben a la OCI coadministrar o ejecutar actos propios de la administración activa. Si la OCI redactara las liquidaciones, se convertiría en juez y parte perdiendo la independencia para auditarlas.",
            "distractors": [
              {
                "id": "B",
                "reason": "No procede reconocimiento económico ni legal para una actuación abiertamente violatoria de la ley de control interno."
              },
              {
                "id": "C",
                "reason": "La OCI no tiene facultades jerárquicas para remover o relevar a los jefes de las áreas operativas de la entidad."
              }
            ]
          }
        },
        {
          "id": 306,
          "topic": "Componente de Evaluación del Riesgo: Apetito y Tolerancia al Riesgo",
          "caseText": "En la actualización de la matriz de riesgos del proceso de recaudo tributario se discute la posibilidad de aceptar un riesgo de fraude sin implementar ningún control preventivo.",
          "statement": "A la luz de la Guía de Gestión del Riesgo del DAFP, esta decisión es inviable porque:",
          "options": [
            {
              "id": "A",
              "text": "Los riesgos asociados a fraude y corrupción tienen tolerancia cero en el sector público y exigen obligatoriamente la implementación de controles rigurosos de mitigación."
            },
            {
              "id": "B",
              "text": "Las entidades públicas pueden asumir riesgos de corrupción siempre que el monto sea inferior a 50 salarios mínimos."
            },
            {
              "id": "C",
              "text": "Los riesgos solo se controlan si están contemplados en el Plan Nacional de Desarrollo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la política de gestión del riesgo y lucha contra la corrupción del Estado colombiano, el apetito de riesgo frente a actos de corrupción o fraude es CERO. No es admisible aceptar o tolerar pasivamente el riesgo de corrupción.",
            "distractors": [
              {
                "id": "B",
                "reason": "En ninguna circunstancia o cuantía se admite tolerancia a la corrupción en la función pública."
              },
              {
                "id": "C",
                "reason": "La gestión del riesgo abarca todos los procesos del mapa de la entidad, independientemente de menciones directas en el PND."
              }
            ]
          }
        },
        {
          "id": 307,
          "topic": "Actividades de Control: Controles Preventivos vs. Detectivos",
          "caseText": "Una seccional implementa dos medidas para la seguridad de mercancías en depósito aduanero: (1) Validación biométrica previa al ingreso a la bodega, y (2) Conteo físico de inventario al final de cada mes.",
          "statement": "Técnicamente, estas actividades de control se clasifican respectivamente como:",
          "options": [
            {
              "id": "A",
              "text": "Control preventivo (la validación biométrica que evita el acceso no autorizado) y control detectivo (el conteo que identifica descuadres ya ocurridos)."
            },
            {
              "id": "B",
              "text": "Ambos son controles correctivos orientados a sancionar penalmente al infractor."
            },
            {
              "id": "C",
              "text": "Ambos son controles indemnizatorios regidos por pólizas de seguros privadas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Los controles preventivos actúan antes de la ocurrencia del evento de riesgo para impedir su materialización (biometría previa); los controles detectivos identifican la materialización del riesgo después de ocurrida para activar acciones de contingencia (conteo mensual).",
            "distractors": [
              {
                "id": "B",
                "reason": "El control preventivo no sanciona a posteriori; previene activamente el hecho."
              },
              {
                "id": "C",
                "reason": "La clasificación del control en auditoría no se basa en pólizas mercantiles, sino en su momento de actuación (preventivo, detectivo, correctivo)."
              }
            ]
          }
        },
        {
          "id": 308,
          "topic": "Información y Comunicación en el Control Interno",
          "caseText": "Un área de fiscalización detecta un nuevo esquema masivo de facturación fraudulenta operado por empresas de papel, pero decide no compartir la alerta con las áreas de aduanas ni de analítica de datos de la DIAN.",
          "statement": "Esta decisión vulnera el componente de Información y Comunicación de COSO / MECI porque:",
          "options": [
            {
              "id": "A",
              "text": "Impide el flujo oportuno y transversal de la información crítica necesaria para que toda la entidad active alertas tempranas y controles coordinados."
            },
            {
              "id": "B",
              "text": "La información de fraudes solo debe comunicarse a medios de comunicación antes que a las dependencias internas."
            },
            {
              "id": "C",
              "text": "El componente de información prohíbe el uso de bases de datos compartidas en el Estado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El componente de Información y Comunicación exige que la información operativa relevante se transmita transversalmente a lo largo de toda la organización para blindar los controles y tomar decisiones oportunas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Filtrar investigaciones en curso a medios antes que coordinar internamente vulnera la reserva legal y frustra los operativos de fiscalización."
              },
              {
                "id": "C",
                "reason": "El modelo promueve la interoperabilidad y el cruce de datos institucionales, no los silos aislados."
              }
            ]
          }
        },
        {
          "id": 309,
          "topic": "Supervisión y Monitoreo Continuo",
          "caseText": "Al revisar el funcionamiento de los controles de un trámite web, se observa que hace tres años no se verifica si el algoritmo de validación de cédulas sigue funcionando correctamente.",
          "statement": "Esta omisión afecta directamente el componente de:",
          "options": [
            {
              "id": "A",
              "text": "Actividades de Monitoreo, puesto que los controles deben ser evaluados periódicamente para verificar que conservan su vigencia, idoneidad y eficacia ante nuevos riesgos."
            },
            {
              "id": "B",
              "text": "Principio de publicidad pasiva en medios masivos de prensa."
            },
            {
              "id": "C",
              "text": "Régimen disciplinario de los notarios públicos de Bogotá."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El componente de Actividades de Monitoreo / Supervisión asegura que los controles del sistema no se vuelvan obsoletos o inoperantes con el paso del tiempo, exigiendo evaluaciones continuas o periódicas de su eficacia.",
            "distractors": [
              {
                "id": "B",
                "reason": "El monitoreo de controles internos es técnico y operativo, sin relación con publicaciones en prensa."
              },
              {
                "id": "C",
                "reason": "No guarda ninguna pertinencia con el régimen de notarios."
              }
            ]
          }
        },
        {
          "id": 310,
          "topic": "Comité Institucional de Coordinación de Control Interno",
          "caseText": "Se convoca a sesión del Comité Institucional de Coordinación de Control Interno de la DIAN para definir las prioridades del Plan Anual de Auditoría de la vigencia.",
          "statement": "De acuerdo con el Decreto 648 de 2017, la secretaría técnica de este comité corresponde a:",
          "options": [
            {
              "id": "A",
              "text": "El Jefe de la Oficina de Control Interno (o quien haga sus veces), actuando con voz pero sin voto para salvaguardar su independencia evaluadora."
            },
            {
              "id": "B",
              "text": "El personero municipal con voto dirimente y veto presidencial."
            },
            {
              "id": "C",
              "text": "El representante de los contratistas de servicios generales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 648 de 2017 establece expresamente que el Jefe de la Oficina de Control Interno ejerce la secretaría técnica del Comité Institucional de Coordinación de Control Interno, participando con voz pero sin voto.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los personeros municipales no integran comités de entidades del orden nacional como la DIAN."
              },
              {
                "id": "C",
                "reason": "La secretaría técnica es privativa del Jefe de Control Interno de la entidad."
              }
            ]
          }
        }
      ]
    },
    "exam-4": {
      "title": "Examen Módulo 4: Evaluación del Sistema de Control Interno y Auditoría Pública (10 Preguntas PJS)",
      "indicatorNum": 4,
      "questions": [
        {
          "id": 401,
          "topic": "Estructura del Hallazgo de Auditoría: Condición vs. Criterio",
          "caseText": "En una auditoría a la Dirección Seccional de Aduanas, el equipo auditor constata que el 40% de los despachos físicos de importación no cuentan con el acta de inspección firmada por el funcionario competente, contraviniendo el artículo 185 del Decreto 1165 de 2019.",
          "statement": "Al redactar el hallazgo según la Guía DAFP v4, los hechos constatados y la norma invocada corresponden respectivamente a:",
          "options": [
            {
              "id": "A",
              "text": "La Condición (la ausencia de actas firmadas observada en los expedientes) y el Criterio (el artículo 185 del Decreto 1165 de 2019 que exige la firma obligatoria)."
            },
            {
              "id": "B",
              "text": "La Causa (la falta de actas) y el Efecto (el decreto aduanero citado)."
            },
            {
              "id": "C",
              "text": "La Recomendación (el expediente revisado) y la Sanción penal directa."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la metodología oficial de auditoría pública, la Condición es la situación de hecho evidenciada (lo que es), mientras que el Criterio es la norma o parámetro legal con el cual se contrasta la realidad (lo que debe ser).",
            "distractors": [
              {
                "id": "B",
                "reason": "Una norma no es un efecto; la norma es el criterio legal de comparación."
              },
              {
                "id": "C",
                "reason": "Un expediente no es una recomendación; es una evidencia probatoria de la condición."
              }
            ]
          }
        },
        {
          "id": 402,
          "topic": "Estructura del Hallazgo: Causa Raíz vs. Efecto",
          "caseText": "Siguiendo con el caso anterior, se determina que las actas no se firmaron porque el aplicativo digital no tiene habilitada la firma electrónica en dispositivos móviles de puerto, lo que generó un riesgo inminente de nulidad de los decomisos aduaneros.",
          "statement": "En la estructura técnica del hallazgo, estos dos elementos corresponden a:",
          "options": [
            {
              "id": "A",
              "text": "La Causa (la falla del aplicativo que no permite firmar en dispositivos móviles) y el Efecto (el riesgo de nulidad jurídica de los decomisos)."
            },
            {
              "id": "B",
              "text": "La Condición (la nulidad de los decomisos) y el Criterio (la falla técnica de software)."
            },
            {
              "id": "C",
              "text": "El Plan de mejoramiento inmediato sin necesidad de emitir informe de auditoría."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Causa es la razón originaria de la desviación (falla del sistema que impide firmar), y el Efecto es el impacto o perjuicio potencial generado para la entidad (nulidad de decomisos e inseguridad jurídica).",
            "distractors": [
              {
                "id": "B",
                "reason": "La nulidad es la consecuencia futura (efecto) y la falla de software es el origen (causa)."
              },
              {
                "id": "C",
                "reason": "El plan de mejoramiento es posterior a la formalización del hallazgo en el informe de auditoría."
              }
            ]
          }
        },
        {
          "id": 403,
          "topic": "Formulación Correcta de Acciones en Planes de Mejoramiento",
          "caseText": "Un líder de proceso auditado propone como 'acción correctiva' ante la falta de actas de inspección aduanera: 'Imprimir todas las actas pendientes y firmarlas con fecha de hoy'.",
          "statement": "Al evaluar la viabilidad técnica de esta acción correctiva, al Gestor II le corresponde conceptuar que:",
          "options": [
            {
              "id": "A",
              "text": "Es inadecuada, puesto que se limita a remediar superficialmente la condición pero no elimina la causa raíz (la falta de firma electrónica móvil), arriesgando la recurrencia futura del hallazgo."
            },
            {
              "id": "B",
              "text": "Es la mejor solución posible porque maquilla el informe y evita investigaciones de la Contraloría."
            },
            {
              "id": "C",
              "text": "Es plenamente válida siempre que se use tinta indeleble de color azul oscuro."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Las acciones de un Plan de Mejoramiento deben eliminar la CAUSA RAÍZ para garantizar que la falla no se repita. Poner firmas extemporáneas no soluciona la falencia tecnológica del proceso y puede constituir falsedad ideológica.",
            "distractors": [
              {
                "id": "B",
                "reason": "Maquillar informes o alterar fechas es una conducta corrupta sancionable penal y disciplinariamente."
              },
              {
                "id": "C",
                "reason": "El color de la tinta no subsana la ineficacia de la acción frente a la causa estructural del problema."
              }
            ]
          }
        },
        {
          "id": 404,
          "topic": "Papeles de Trabajo de Auditoría",
          "caseText": "Un auditor interno emite un informe definitivo con un hallazgo de presunto daño fiscal por $500 millones, pero no adjuntó copias de los contratos, ni comprobantes de egreso, ni cédulas analíticas que sustenten el cálculo.",
          "statement": "A la luz de las normas internacionales de auditoría (IIA) y la Guía DAFP v4, el informe adolece de una falla grave porque:",
          "options": [
            {
              "id": "A",
              "text": "Carece de evidencia suficiente, competente, relevante y documentada en los Papeles de Trabajo que respalde las conclusiones del auditor."
            },
            {
              "id": "B",
              "text": "El auditor debió publicar primero el hallazgo en sus redes sociales personales para verificar la opinión pública."
            },
            {
              "id": "C",
              "text": "Los informes de auditoría no requieren pruebas documentales si el auditor tiene nombramiento en carrera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Los Papeles de Trabajo son el sustento probatorio irrefutable de la labor del auditor. Ningún hallazgo ni conclusión puede consignarse en un informe sin contar con evidencia documental suficiente, competente y verificable.",
            "distractors": [
              {
                "id": "B",
                "reason": "Divulgar datos de auditorías en redes sociales viola el deber de reserva y confidencialidad."
              },
              {
                "id": "C",
                "reason": "La condición de funcionario de carrera no exonera de la carga probatoria rigurosa en el ejercicio de auditoría."
              }
            ]
          }
        },
        {
          "id": 405,
          "topic": "Mesa de Trabajo y Contradicción del Informe Preliminar",
          "caseText": "Tras culminar la fase de ejecución de la auditoría, la Oficina de Control Interno remite el informe preliminar al área evaluada para que presente sus aclaraciones y soportes en un término de 5 días hábiles.",
          "statement": "Esta etapa del ciclo de auditoría tiene por objeto:",
          "options": [
            {
              "id": "A",
              "text": "Garantizar el debido proceso, la contradicción y validar conjuntamente la veracidad de los hechos observados antes de emitir el informe definitivo."
            },
            {
              "id": "B",
              "text": "Permitir que el área evaluada negocie con los auditores la eliminación de hallazgos a cambio de favores personales."
            },
            {
              "id": "C",
              "text": "Declarar la nulidad de la auditoría por vencimiento de términos de la ley civil."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El traslado del informe preliminar y la mesa de trabajo aseguran el principio de contradicción y objetividad, permitiendo que el área auditada aclare malentendidos o aporte soportes documentales omitidos antes de fijar los hallazgos definitivos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los hallazgos no son objeto de negociación ni transacciones indebidas; se sustentan exclusivamente en pruebas técnicas."
              },
              {
                "id": "C",
                "reason": "El traslado reglamentario no anula la auditoría; es una fase formal obligatoria de la misma."
              }
            ]
          }
        },
        {
          "id": 406,
          "topic": "Plan Anual de Auditoría Basado en Riesgos",
          "caseText": "Al estructurar el Plan Anual de Auditoría de la vigencia, la OCI decide auditar únicamente procesos rutinarios de bajo impacto y excluir de la muestra a los macroprocesos de Fiscalización Aduanera y Cobro Coactivo que tienen la mayor concentración de riesgos de corrupción.",
          "statement": "De acuerdo con el enfoque moderno de auditoría del DAFP, este plan es deficiente porque:",
          "options": [
            {
              "id": "A",
              "text": "Desconoce el enfoque de Auditoría Basada en Riesgos, el cual exige priorizar los procesos institucionales con mayor exposición y probabilidad de materialización de riesgos críticos."
            },
            {
              "id": "B",
              "text": "Es óptimo, puesto que las auditorías deben realizarse donde sea más fácil encontrar aprobaciones rápidas de metas."
            },
            {
              "id": "C",
              "text": "La ley prohíbe que la Oficina de Control Interno evalúe procesos misionales de fiscalización tributaria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Guía de Auditoría del DAFP v4 establece que el universo auditable se prioriza con base en el Mapa de Aseguramiento y la matriz de riesgos institucional, focalizando los recursos en las áreas de mayor criticidad y valor público.",
            "distractors": [
              {
                "id": "B",
                "reason": "Auditar lo trivial para mostrar resultados fáciles desconoce el rol de aseguramiento estratégico de la OCI."
              },
              {
                "id": "C",
                "reason": "La OCI tiene competencia para auditar todos los procesos de la entidad, incluidos los misionales y de fiscalización."
              }
            ]
          }
        },
        {
          "id": 407,
          "topic": "Seguimiento a Hallazgos de Entes Externos (CGR)",
          "caseText": "La Contraloría General de la República (CGR) notificó a la DIAN un informe final con 12 hallazgos administrativos con presunto alcance disciplinario y fiscal en un contrato de tecnología.",
          "statement": "Dentro del marco del Decreto 648 de 2017, la responsabilidad de la Oficina de Control Interno frente a este informe consiste en:",
          "options": [
            {
              "id": "A",
              "text": "Coordinar la consolidación y hacer seguimiento riguroso al cumplimiento del Plan de Mejoramiento Institucional suscrito ante la Contraloría General."
            },
            {
              "id": "B",
              "text": "Archivar el informe en un casillero cerrado para que la ciudadanía no conozca las observaciones de la Contraloría."
            },
            {
              "id": "C",
              "text": "Sancionar penalmente al Director General de la DIAN mediante sentencia privativa de la libertad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Uno de los 5 roles clave de la OCI (Decreto 648/2017) es la relación con entes externos de control, facilitando la interlocución y realizando el seguimiento trimestral a la efectividad de los planes de mejora suscritos ante la CGR.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los informes de la Contraloría son públicos y el plan de mejoramiento tiene seguimiento formal ante el ente fiscal."
              },
              {
                "id": "C",
                "reason": "La OCI no tiene facultades penales ni judiciales; las sanciones privativas de la libertad son privativas de los jueces de la República."
              }
            ]
          }
        },
        {
          "id": 408,
          "topic": "Criterios para el Cierre Efectivo de Hallazgos",
          "caseText": "El líder de un proceso solicita el cierre de un hallazgo de auditoría aportando como única evidencia una circular informativa remitida por correo electrónico a sus subalternos.",
          "statement": "Para proceder con rigor metodológico, al Gestor II le corresponde verificar que:",
          "options": [
            {
              "id": "A",
              "text": "Existan evidencias tangibles y comprobables de que la causa raíz fue efectivamente subsanada y que las conductas u operaciones se ajustan de manera sostenida al estándar legal."
            },
            {
              "id": "B",
              "text": "El correo se haya enviado con copia a todos los ministros del despacho presidencial."
            },
            {
              "id": "C",
              "text": "Los hallazgos se cierren automáticamente al cumplirse tres meses de su emisión sin necesidad de revisar soportes."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El cierre formal de un hallazgo exige verificar la eficacia de la acción de mejora mediante pruebas de cumplimiento que demuestren que la irregularidad cesó y no volverá a ocurrir.",
            "distractors": [
              {
                "id": "B",
                "reason": "Copiar a ministros no demuestra la corrección real ni la efectividad del proceso evaluado."
              },
              {
                "id": "C",
                "reason": "El cierre de un hallazgo no opera por vencimiento de plazos, sino por verificación objetiva de cumplimiento."
              }
            ]
          }
        },
        {
          "id": 409,
          "topic": "Técnicas de Auditoría: Muestreo Representativo",
          "caseText": "En un universo de 200.000 declaraciones aduaneras presentadas durante el año, el auditor decide revisar únicamente tres declaraciones de un mismo importador y generaliza sus conclusiones afirmando que el 100% de la seccional opera con fallas graves.",
          "statement": "Esta conclusión técnica es científicamente inválida porque:",
          "options": [
            {
              "id": "A",
              "text": "Vulnera las técnicas de muestreo de auditoría, ya que una muestra no probabilística ni representativa no permite extrapolar conclusiones válidas sobre la totalidad del universo."
            },
            {
              "id": "B",
              "text": "El auditor debió revisar físicamente los 200.000 expedientes uno por uno sin excepción en un solo día laboral."
            },
            {
              "id": "C",
              "text": "Las normas de auditoría pública exigen que las muestras sean elegidas por los administrados objeto de control."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Las normas de auditoría pública (Guía DAFP) exigen que las muestras seleccionadas tengan representatividad estadística o sigan criterios objetivos de estratificación por riesgo para formular conclusiones válidas sobre el proceso.",
            "distractors": [
              {
                "id": "B",
                "reason": "El muestreo existe precisamente para evitar la revisión exhaustiva ineficiente del 100% de universos masivos."
              },
              {
                "id": "C",
                "reason": "El auditor debe mantener total independencia en la selección de la muestra; no la eligen los auditados."
              }
            ]
          }
        },
        {
          "id": 410,
          "topic": "Código de Ética del Auditor Interno",
          "caseText": "Un auditor interno recibe información confidencial sobre presuntas irregularidades tributarias de una empresa reconocida durante una auditoría a los servidores de datos de la DIAN, y decide comentar los detalles en una cena familiar.",
          "statement": "Frente al Código de Ética de Auditoría Interna y el artículo 583 del Estatuto Tributario, la conducta del auditor es:",
          "options": [
            {
              "id": "A",
              "text": "Gravísima, puesto que vulneró el principio de Confidencialidad y el deber legal inquebrantable de Reserva Tributaria de los datos fiscales a los que accedió por su cargo."
            },
            {
              "id": "B",
              "text": "Aceptable, siempre que en la cena familiar no estuvieran presentes periodistas reconocidos."
            },
            {
              "id": "C",
              "text": "Irrelevante, dado que los auditores internos no están sujetos a la reserva legal de los expedientes oficiales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El auditor interno está sujeto al principio de Confidencialidad del IIA y a la Reserva Tributaria (Art. 583 E.T.). Revelar datos tributarios de contribuyentes fuera del ámbito funcional constituye delito penal y falta disciplinaria gravísima.",
            "distractors": [
              {
                "id": "B",
                "reason": "La reserva legal rige frente a cualquier tercero ajeno a la administración, incluidos amigos y familiares."
              },
              {
                "id": "C",
                "reason": "Los auditores tienen acceso privilegiado y están sometidos con mayor rigor al deber de reserva legal de la información."
              }
            ]
          }
        }
      ]
    },
    "exam-5": {
      "title": "Examen Módulo 5: Estrategia de Rendición de Cuentas a la Ciudadanía (10 Preguntas PJS)",
      "indicatorNum": 5,
      "questions": [
        {
          "id": 501,
          "topic": "Los Tres Pilares Estructurales del MURC",
          "caseText": "Una entidad pública convoca a una audiencia pública de rendición de cuentas en la que el Director expone durante tres horas diapositivas con cifras contables, sin permitir preguntas ciudadanas ni habilitar canales de retroalimentación.",
          "statement": "A la luz del Manual Único de Rendición de Cuentas (MURC v2 DAFP), este ejercicio fue incompleto porque:",
          "options": [
            {
              "id": "A",
              "text": "Faltó el elemento del Diálogo y la Responsabilidad, limitándose a una exposición unilateral de información sin espacio para la deliberación ni la concertación de compromisos."
            },
            {
              "id": "B",
              "text": "La rendición de cuentas solo es válida si se contrata una empresa de espectáculos artísticos en un estadio de fútbol."
            },
            {
              "id": "C",
              "text": "La ley prohíbe que los directores de entidades públicas hablen por más de 15 minutos en eventos públicos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El MURC consagra tres elementos inseparables: Información, Diálogo y Responsabilidad/Incentivos. La rendición de cuentas no es un monólogo expositivo; exige debate bidireccional y asunción de compromisos de mejora ante la comunidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "La rendición de cuentas es un proceso técnico-democrático, no un evento de entretenimiento masivo."
              },
              {
                "id": "C",
                "reason": "No existe límite de tiempo formal para la intervención, pero sí la obligación ineludible de garantizar tiempo suficiente para el diálogo ciudadano."
              }
            ]
          }
        },
        {
          "id": 502,
          "topic": "Uso del Lenguaje Claro en la Rendición de Cuentas",
          "caseText": "El informe de gestión preparado para la ciudadanía utiliza términos jurídicos tributarios en latín, siglas internas de aplicativos informáticos de la DIAN y tablas matriciales sin leyendas explicativas.",
          "statement": "Para adecuar el documento a la Política de Lenguaje Claro y al MURC, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Traducir los contenidos a un lenguaje accesible, comprensible y directo, apoyándose en resúmenes ejecutivos, infografías y glosarios de términos para los ciudadanos."
            },
            {
              "id": "B",
              "text": "Mantener la jerga hermética para demostrar la superioridad técnica de la administración pública frente a los contribuyentes."
            },
            {
              "id": "C",
              "text": "Eliminar todos los datos numéricos y presentar únicamente fotografías de las fachadas de las oficinas de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La política de Lenguaje Claro del DAFP y la Ley 1712 de 2014 exigen comunicar en forma clara, sencilla y comprensible para que cualquier ciudadano, sin importar su nivel de formación, pueda entender el uso de los recursos públicos.",
            "distractors": [
              {
                "id": "B",
                "reason": "La jerga excluyente contradice el propósito democratizador y transparente de la rendición de cuentas."
              },
              {
                "id": "C",
                "reason": "Omitir los datos numéricos impide evaluar el cumplimiento de metas y la ejecución del presupuesto."
              }
            ]
          }
        },
        {
          "id": 503,
          "topic": "Publicación Previa del Informe de Gestión",
          "caseText": "La fecha fijada para la audiencia pública de rendición de cuentas es el 30 de noviembre. El equipo de comunicaciones solicita publicar el informe de gestión en la página web institucional en la noche del 29 de noviembre.",
          "statement": "Con base en los lineamientos de la Ley 1757 de 2015 y la Guía del DAFP, al profesional le corresponde objetar esta fecha porque:",
          "options": [
            {
              "id": "A",
              "text": "El informe debe publicarse con al menos quince (15) días hábiles de anticipación para que la ciudadanía pueda leerlo, analizarlo y formular preguntas de fondo con antelación."
            },
            {
              "id": "B",
              "text": "El informe no debe publicarse nunca en la web antes de la audiencia para que sea una sorpresa para el público."
            },
            {
              "id": "C",
              "text": "Los informes de rendición de cuentas solo se pueden publicar después de que la vigencia fiscal ha cerrado el 31 de diciembre."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 1757 de 2015 y el MURC establecen que los informes de rendición de cuentas deben ponerse a disposición del público con suficiente antelación (mínimo 15 días hábiles antes de la audiencia) para garantizar una participación informada y cualificada.",
            "distractors": [
              {
                "id": "B",
                "reason": "La rendición de cuentas es un ejercicio de transparencia pública planificada, no un espectáculo con factor sorpresa."
              },
              {
                "id": "C",
                "reason": "Las audiencias periódicas se nutren de cortes trimestrales o semestrales de la gestión en curso."
              }
            ]
          }
        },
        {
          "id": 504,
          "topic": "Rendición de Cuentas y Reserva Tributaria en la DIAN",
          "caseText": "Durante la audiencia pública de rendición de cuentas, un veedor ciudadano exige públicamente que se proyecte en pantalla la lista detallada de los 100 contribuyentes que tienen mayores deudas en cobro coactivo con sus nombres y montos individuales.",
          "statement": "Frente a esta solicitud, al funcionario moderador de la DIAN le corresponde responder que:",
          "options": [
            {
              "id": "A",
              "text": "La entidad suministra las cifras globales y sectoriales agregadas del recaudo y la cartera, pero no puede individualizar datos específicos amparados por la Reserva Tributaria (Art. 583 E.T.)."
            },
            {
              "id": "B",
              "text": "Proyectar de inmediato la lista con nombres completos y números de cédula para complacer al veedor ciudadano."
            },
            {
              "id": "C",
              "text": "Suspender la audiencia pública y llamar a la policía para expulsar al veedor del auditorio."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de publicidad y transparencia tiene límites constitucionales en los datos sujetos a reserva legal expresa. El artículo 583 del Estatuto Tributario ampara con reserva las declaraciones y datos de los contribuyentes; solo se pueden informar cifras consolidadas y agregadas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Revelar nombres y deudas individuales en público constituye delito de violación de reserva tributaria y falta disciplinaria gravísima."
              },
              {
                "id": "C",
                "reason": "El ciudadano tiene derecho a preguntar en forma pacífica; la respuesta debe ser fundamentada en derecho, no mediante agresiones o expulsiones policiales injustificadas."
              }
            ]
          }
        },
        {
          "id": 505,
          "topic": "Caracterización de Grupos de Interés y de Valor",
          "caseText": "La DIAN planifica su estrategia de diálogo ciudadano para la vigencia y un analista propone realizar exactamente el mismo evento presencial en Bogotá para todos los públicos del país.",
          "statement": "A la luz del MURC, al Gestor II le corresponde proponer que:",
          "options": [
            {
              "id": "A",
              "text": "Se realice previamente una caracterización de usuarios y grupos de valor (grandes contribuyentes, pequeños comerciantes, importadores, academia), adaptando los canales y metodologías a sus necesidades específicas."
            },
            {
              "id": "B",
              "text": "Se invite únicamente a funcionarios públicos de la misma DIAN para evitar preguntas críticas de contribuyentes."
            },
            {
              "id": "C",
              "text": "Se reemplace todo evento público por el envío de mensajes de texto masivos con publicidad institucional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La caracterización de grupos de interés y valor permite diseñar estrategias diferenciadas: mesas técnicas con gremios aduaneros, ferias ciudadanas para pequeños comerciantes y foros virtuales para usuarios de regiones apartadas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Invitar solo a funcionarios de la misma entidad desnaturaliza la rendición de cuentas, la cual se debe a la ciudadanía externa."
              },
              {
                "id": "C",
                "reason": "Los SMS unidireccionales no garantizan el elemento esencial de diálogo y deliberación que exige la Ley 1757 de 2015."
              }
            ]
          }
        },
        {
          "id": 506,
          "topic": "Fase de Seguimiento: Plan de Compromisos Institucional",
          "caseText": "Al finalizar la audiencia pública de rendición de cuentas se recogieron 45 observaciones y peticiones ciudadanas sobre demoras en la expedición virtual del RUT.",
          "statement": "Para dar cumplimiento a la fase 4 (Seguimiento y Evaluación) del MURC, a la entidad le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Elaborar y publicar el Plan de Compromisos institucional dentro de los 30 días posteriores, asignando dependencias responsables, plazos e indicadores de avance para responder a las solicitudes."
            },
            {
              "id": "B",
              "text": "Archivar las preguntas en la bodega de archivo muerto y no responderlas porque la audiencia ya concluyó."
            },
            {
              "id": "C",
              "text": "Publicar un comunicado de prensa afirmando que todos los ciudadanos quedaron 100% satisfechos sin necesidad de plan de mejora."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El elemento de Responsabilidad del MURC exige que las inquietudes recogidas durante la rendición se conviertan en compromisos formales de gestión, con cronogramas y responsables asignados, sujetos a seguimiento periódico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ignorar las preguntas ciudadanas vulnera el derecho fundamental de petición y el deber legal de rendir cuentas."
              },
              {
                "id": "C",
                "reason": "Negar las observaciones u ocultar las falencias evidenciadas atenta contra la ética e integridad pública."
              }
            ]
          }
        },
        {
          "id": 507,
          "topic": "Rendición de Cuentas Permanente vs. Audiencia Anual",
          "caseText": "Un funcionario sostiene que la rendición de cuentas consiste única y exclusivamente en el acto protocolario de la audiencia pública que se hace una vez al año ante el auditorio.",
          "statement": "Para corregir este concepto con base en el CONPES 3654 de 2010 y el MIPG, al profesional le corresponde explicar que:",
          "options": [
            {
              "id": "A",
              "text": "La rendición de cuentas es un proceso permanente y transversal a toda la gestión anual, que utiliza múltiples canales virtuales, datos abiertos y espacios continuos de diálogo durante todo el año."
            },
            {
              "id": "B",
              "text": "La audiencia pública es el único mecanismo legal autorizado por el Estado para interactuar con los ciudadanos."
            },
            {
              "id": "C",
              "text": "La rendición de cuentas solo se realiza cuando la Contraloría General ordena una auditoría financiera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El CONPES 3654 y el MURC superaron el enfoque centrado exclusivamente en la 'audiencia evento'. La rendición de cuentas es una práctica cotidiana y permanente soportada en portales web, datos abiertos, boletines periódicos y foros continuos.",
            "distractors": [
              {
                "id": "B",
                "reason": "La audiencia es solo uno de los múltiples espacios de diálogo posibles y no el único mecanismo legal."
              },
              {
                "id": "C",
                "reason": "La rendición de cuentas es un deber institucional autónomo y preventivo, no depende de órdenes de la Contraloría."
              }
            ]
          }
        },
        {
          "id": 508,
          "topic": "Evaluación del Ejercicio de Rendición de Cuentas",
          "caseText": "Con el propósito de evaluar la efectividad de la rendición de cuentas de la vigencia, la dependencia de planeación aplica una encuesta de satisfacción y percepción a los asistentes al cierre del evento.",
          "statement": "El objetivo principal de esta evaluación dentro del ciclo de MIPG es:",
          "options": [
            {
              "id": "A",
              "text": "Identificar oportunidades de mejora en la claridad de los datos, la metodología y los canales de diálogo para perfeccionar la estrategia de la siguiente vigencia."
            },
            {
              "id": "B",
              "text": "Identificar a los ciudadanos que hicieron preguntas difíciles para excluirlos de futuros eventos."
            },
            {
              "id": "C",
              "text": "Imponer multas administrativas a los asistentes que no calificaron con nota máxima la gestión de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La evaluación del ejercicio de rendición de cuentas retroalimenta el ciclo PHVA institucional, permitiendo detectar si la información fue comprensible, si el diálogo fue productivo y cómo mejorar los canales participativos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Excluir voces críticas atenta contra el pluralismo y el principio de contradicción democrática."
              },
              {
                "id": "C",
                "reason": "Los ciudadanos participan voluntariamente; no procede ninguna sanción por sus opiniones o calificaciones."
              }
            ]
          }
        },
        {
          "id": 509,
          "topic": "Incentivos en la Rendición de Cuentas Pública",
          "caseText": "Al revisar el elemento de 'Responsabilidad e Incentivos' del MURC, se analiza qué tipo de incentivos deben promoverse en el proceso de rendición de cuentas de una entidad como la DIAN.",
          "statement": "Los incentivos en el marco del MURC se definen como:",
          "options": [
            {
              "id": "A",
              "text": "Mecanismos para motivar la participación activa de los ciudadanos (reconocimiento de aportes en veedurías) y para premiar a los servidores y áreas que demuestren transparencia y apertura informativa ejemplar."
            },
            {
              "id": "B",
              "text": "Entrega de bonos económicos en efectivo a los ciudadanos que aplaudan las intervenciones de los directores."
            },
            {
              "id": "C",
              "text": "Exención del pago del impuesto sobre la renta a los contribuyentes que asistan a las audiencias."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El MURC define los incentivos como estímulos no monetarios, reconocimientos públicos de buenas prácticas de transparencia para las dependencias y facilitación de condiciones para que los ciudadanos ejerzan el control social.",
            "distractors": [
              {
                "id": "B",
                "reason": "Pagar dinero en efectivo a los asistentes constituye corrupción y cooptación ilícita de la participación ciudadana."
              },
              {
                "id": "C",
                "reason": "Las exenciones tributarias son de reserva exclusiva de ley aprobada por el Congreso; ninguna entidad puede otorgarlas administrativamente."
              }
            ]
          }
        },
        {
          "id": 510,
          "topic": "Veedurías Ciudadanas y Control Social",
          "caseText": "Una Red de Veedurías Ciudadanas formalmente constituida solicita a la DIAN los reportes de cumplimiento de las metas de atención en los Puntos de Contacto de las Seccionales del país.",
          "statement": "Frente a esta solicitud, de conformidad con la Ley 850 de 2003 (Ley de Veedurías) y la Ley 1757 de 2015, a la entidad le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Suministrar oportunamente la información requerida y prestar la debida colaboración para facilitar el ejercicio del control social a la gestión pública."
            },
            {
              "id": "B",
              "text": "Negar la solicitud alegando que el control de la gestión de la DIAN es privativo de los órganos judiciales del Estado."
            },
            {
              "id": "C",
              "text": "Exigir a los veedores el pago previo de una tarifa de $10 millones por concepto de 'derechos de fiscalización ciudadana'."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 850 de 2003 y la Ley 1757 de 2015 amparan el derecho de las veedurías a ejercer vigilancia sobre la gestión pública y ordenan a las autoridades brindar toda la información y facilidades para su labor sin cobros indebidos.",
            "distractors": [
              {
                "id": "B",
                "reason": "El control social ciudadano es un derecho constitucional independiente y complementario al control fiscal o judicial del Estado."
              },
              {
                "id": "C",
                "reason": "El acceso a la información pública para el control social es gratuito, salvo los costos estrictos de reproducción de copias físicas."
              }
            ]
          }
        }
      ]
    },
    "exam-6": {
      "title": "Examen Módulo 6: Estructura Organizacional de la DIAN (10 Preguntas PJS)",
      "indicatorNum": 6,
      "questions": [
        {
          "id": 601,
          "topic": "Naturaleza Jurídica de la DIAN",
          "caseText": "En un análisis institucional sobre la autonomía contractual y presupuestal de la DIAN, un analista afirma que la entidad carece de personería jurídica por ser un viceministerio del MinHacienda.",
          "statement": "Para precisar la naturaleza jurídica correcta conforme al Decreto 1742 de 2020, al Gestor II le corresponde aclarar que la DIAN es:",
          "options": [
            {
              "id": "A",
              "text": "Una Unidad Administrativa Especial del orden nacional, con personería jurídica, autonomía administrativa y presupuestal, y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público."
            },
            {
              "id": "B",
              "text": "Un departamento administrativo del nivel central que depende directamente de la Presidencia de la República."
            },
            {
              "id": "C",
              "text": "Una empresa industrial y comercial del Estado regulada íntegramente por el derecho privado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 1 del Decreto 1742 de 2020 define a la UAE DIAN como una entidad con personería jurídica, autonomía administrativa y presupuestal, adscrita al Ministerio de Hacienda y Crédito Público.",
            "distractors": [
              {
                "id": "B",
                "reason": "La DIAN no es un departamento administrativo; es una Unidad Administrativa Especial adscrita a un ministerio."
              },
              {
                "id": "C",
                "reason": "La DIAN ejerce potestades de autoridad pública tributaria y aduanera, no actividades industriales o mercantiles de derecho privado."
              }
            ]
          }
        },
        {
          "id": 602,
          "topic": "Dirección de Gestión Estratégica y Analítica",
          "caseText": "La Dirección General requiere diseñar un modelo analítico de analítica predictiva para anticipar esquemas de evasión de IVA a partir de millones de facturas electrónicas.",
          "statement": "Dentro de la estructura orgánica del Decreto 1742 de 2020, la dependencia competente para liderar el modelado de riesgos y la ciencia de datos es:",
          "options": [
            {
              "id": "A",
              "text": "La Dirección de Gestión Estratégica y Analítica, responsable de la analítica avanzada, los modelos de riesgo institucional y la planeación estratégica."
            },
            {
              "id": "B",
              "text": "La Dirección de Gestión Corporativa a través de la oficina de servicios generales."
            },
            {
              "id": "C",
              "text": "La Defensoría del Contribuyente y del Usuario Aduanero."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1742 de 2020 creó la Dirección de Gestión Estratégica y Analítica para dotar a la DIAN de capacidades avanzadas de modelado analítico de riesgos, big data y direccionamiento estratégico institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Gestión Corporativa administra el talento humano, compras y recursos físicos, no la ciencia de datos misional."
              },
              {
                "id": "C",
                "reason": "La Defensoría vela por los derechos de los contribuyentes, no diseña los algoritmos de fiscalización."
              }
            ]
          }
        },
        {
          "id": 603,
          "topic": "Dirección de Gestión Jurídica y Doctrina Vinculante",
          "caseText": "Dos Direcciones Seccionales aplican interpretaciones opuestas sobre la exención de IVA en la importación de maquinaria pesada, generando incertidumbre y quejas entre los contribuyentes.",
          "statement": "Para unificar de manera definitiva y vinculante la interpretación jurídica en toda la DIAN, el acto que procede es:",
          "options": [
            {
              "id": "A",
              "text": "La expedición de un Concepto Jurídico Unificado por parte de la Dirección de Gestión Jurídica, el cual constituye doctrina oficial de obligatorio cumplimiento para todos los funcionarios de la entidad."
            },
            {
              "id": "B",
              "text": "Una reunión informal por chat entre los dos directores seccionales para llegar a un acuerdo verbal transitorio."
            },
            {
              "id": "C",
              "text": "Dejar que cada seccional continúe aplicando su propio criterio de acuerdo con el principio de desconcentración absoluta."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Dirección de Gestión Jurídica de la DIAN tiene la facultad exclusiva de fijar la doctrina oficial vinculante en materia tributaria, aduanera y cambiaria mediante Conceptos que obligan a toda la entidad (Art. 131 Ley 2010 de 2019).",
            "distractors": [
              {
                "id": "B",
                "reason": "La doctrina oficial exige rigor técnico y formalización jurídica mediante acto oficial publicado, no acuerdos informales."
              },
              {
                "id": "C",
                "reason": "La desconcentración no autoriza la anarquía jurídica ni la vulneración del principio constitucional de igualdad en la aplicación de la ley tributaria."
              }
            ]
          }
        },
        {
          "id": 604,
          "topic": "Nivel Desconcentrado: Seccionales de Grandes Contribuyentes e Impuestos",
          "caseText": "Un gran contribuyente con domicilio fiscal en Medellín formula una petición relacionada con su declaración de renta ante una Seccional Delegada de bajo rango.",
          "statement": "Al revisar la competencia territorial y funcional bajo el Decreto 1742 de 2020, al profesional le corresponde orientar que:",
          "options": [
            {
              "id": "A",
              "text": "El expediente debe ser remitido a la Dirección Seccional competente para Grandes Contribuyentes, de acuerdo con la resolución de asignación y calificación periódica de la DIAN."
            },
            {
              "id": "B",
              "text": "La seccional delegada debe resolver el trámite sin importar la calificación del contribuyente, en virtud del principio de gratuidad."
            },
            {
              "id": "C",
              "text": "El contribuyente debe esperar a que el Congreso de la República apruebe una ley para determinar qué oficina lo atiende."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La DIAN cuenta con una Dirección Seccional especializada en Grandes Contribuyentes y reglas de competencia territorial y por tipo de contribuyente que delimitan la competencia legal de cada seccional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Actuar sin competencia legal vicia de nulidad absoluta las actuaciones administrativas tributarias."
              },
              {
                "id": "C",
                "reason": "La competencia interna se fija por resolución reglamentaria de la DIAN conforme a la ley, no por leyes individuales del Congreso."
              }
            ]
          }
        },
        {
          "id": 605,
          "topic": "Dirección de Gestión Corporativa y Políticas de Talento Humano",
          "caseText": "Se requiere estructurar el Plan Institucional de Capacitación (PIC) y el Plan de Bienestar y Estímulos para los servidores de la DIAN alineados a la Resolución 065 de 2024.",
          "statement": "La Dirección de Gestión del Nivel Central encargada de liderar estas políticas de MIPG es:",
          "options": [
            {
              "id": "A",
              "text": "La Dirección de Gestión Corporativa, a través de la Subdirección de Talento Humano y la Escuela de la DIAN."
            },
            {
              "id": "B",
              "text": "La Dirección de Gestión de Aduanas mediante operativos de decomiso en puertos."
            },
            {
              "id": "C",
              "text": "La Dirección de Gestión de Fiscalización a través de requerimientos especiales tributarios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Dirección de Gestión Corporativa es la encargada de la administración del talento humano, bienestar, capacitación y recursos físicos de la entidad, coordinando la Política de Talento Humano de MIPG.",
            "distractors": [
              {
                "id": "B",
                "reason": "Aduanas es un área puramente misional operativa de control de comercio exterior."
              },
              {
                "id": "C",
                "reason": "Fiscalización se encarga de la investigación y determinación tributaria, no de la gestión de talento humano interno."
              }
            ]
          }
        },
        {
          "id": 606,
          "topic": "Oficina de Seguridad de la Información en la DIAN",
          "caseText": "Un área técnica propone interconectar una base de datos con información de declaraciones de renta a una aplicación de consulta pública no certificada en la nube.",
          "statement": "Para garantizar el cumplimiento de las políticas de seguridad digital de MIPG y la reserva legal, la dependencia interna que debe avalar previamente esta integración es:",
          "options": [
            {
              "id": "A",
              "text": "La Oficina de Seguridad de la Información, encargada de vigilar las políticas de ciberseguridad, confidencialidad, integridad y protección de la reserva tributaria."
            },
            {
              "id": "B",
              "text": "La Subdirección de Correspondencia y Mensajería Física."
            },
            {
              "id": "C",
              "text": "El sindicato mayoritario de servidores públicos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1742 de 2020 asigna a la Oficina de Seguridad de la Información la gobernanza, supervisión de riesgos cibernéticos y aseguramiento de la reserva y confidencialidad de los activos de datos institucionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Correspondencia maneja radicación postal física, no ciberseguridad de bases de datos."
              },
              {
                "id": "C",
                "reason": "Las organizaciones sindicales defienden derechos laborales de los trabajadores, no administran la arquitectura de seguridad tecnológica."
              }
            ]
          }
        },
        {
          "id": 607,
          "topic": "Dirección de Gestión de Fiscalización",
          "caseText": "Se diseña una campaña nacional para detectar operaciones fraudulentas de IVA mediante facturación electrónica ficticia.",
          "statement": "La Dirección del Nivel Central competente para impartir las directrices operativas de auditoría a nivel nacional en esta materia es:",
          "options": [
            {
              "id": "A",
              "text": "La Dirección de Gestión de Fiscalización, competente para planear, dirigir y controlar las acciones de control tributario, aduanero y cambiario preventivo y posterior."
            },
            {
              "id": "B",
              "text": "La Dirección de Gestión de Innovación y Tecnología exclusivamente para labores de cableado estructurado."
            },
            {
              "id": "C",
              "text": "La Oficina de Control Disciplinario Interno contra los contribuyentes morosos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Dirección de Gestión de Fiscalización tiene la función de diseñar, orientar y evaluar los programas de investigación tributaria, aduanera y cambiaria para combatir la elusión, la evasión y el contrabando.",
            "distractors": [
              {
                "id": "B",
                "reason": "Tecnología provee la plataforma informática, pero la estrategia de fiscalización la define la Dirección de Fiscalización."
              },
              {
                "id": "C",
                "reason": "Control Disciplinario investiga a servidores públicos de la entidad, no a los contribuyentes particulares."
              }
            ]
          }
        },
        {
          "id": 608,
          "topic": "Comité Institucional de Gestión y Desempeño en la DIAN",
          "caseText": "La DIAN debe aprobar formalmente su Plan Estratégico Institucional cuatrienal y las metas del Plan de Acción Anual que integran las 19 políticas de MIPG.",
          "statement": "De acuerdo con el Decreto 1499 de 2017 y la normativa interna, la máxima instancia institucional encargada de aprobar estos instrumentos es:",
          "options": [
            {
              "id": "A",
              "text": "El Comité Institucional de Gestión y Desempeño, presidido por el Director General e integrado por los Directores de Gestión de la entidad."
            },
            {
              "id": "B",
              "text": "Una asamblea general de todos los contribuyentes inscritos en el RUT."
            },
            {
              "id": "C",
              "text": "La Junta Directiva del Banco de la República."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Comité Institucional de Gestión y Desempeño es el órgano colegiado de más alto nivel encargado de definir, coordinar y aprobar las directrices de planeación estratégica, planes de acción y políticas de MIPG en la entidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "No existe la figura de asamblea general de contribuyentes para aprobar planes de gestión de la DIAN."
              },
              {
                "id": "C",
                "reason": "El Banco de la República fija la política monetaria y cambiaria general del país, no aprueba los planes de gestión interna de la DIAN."
              }
            ]
          }
        },
        {
          "id": 609,
          "topic": "Coordinación entre Nivel Central y Nivel Desconcentrado",
          "caseText": "Un Director Seccional decide ignorar una directriz nacional sobre priorización de auditorías tributarias aduciendo que su seccional tiene 'autonomía de política fiscal'.",
          "statement": "Frente a este argumento, a la luz del Decreto 1742 de 2020 y la Ley 489 de 1998, al Gestor II le corresponde señalar que:",
          "options": [
            {
              "id": "A",
              "text": "El argumento es jurídicamente erróneo, puesto que las Direcciones Seccionales operan bajo el principio de desconcentración administrativa y jerarquía, estando subordinadas a las directrices de política del Nivel Central."
            },
            {
              "id": "B",
              "text": "El argumento es válido, ya que cada municipio de Colombia tiene soberanía tributaria independiente sobre los impuestos nacionales."
            },
            {
              "id": "C",
              "text": "El Nivel Central solo tiene funciones consultivas sin facultad vinculante sobre las seccionales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la desconcentración administrativa no hay autonomía de política; la política pública tributaria se fija de manera centralizada y unitaria en el Nivel Central, y las seccionales son ejecutoras desconcentradas obligadas a cumplir las directrices nacionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los impuestos administrados por la DIAN son nacionales, no locales, y su política es unitaria en todo el país."
              },
              {
                "id": "C",
                "reason": "El Director General y las Direcciones de Gestión del Nivel Central tienen mando jerárquico vinculante sobre todo el territorio nacional."
              }
            ]
          }
        },
        {
          "id": 610,
          "topic": "Defensoría del Contribuyente y del Usuario Aduanero",
          "caseText": "Un usuario denuncia que en una seccional se le están exigiendo requisitos no previstos en la ley para la entrega de una mercancía en trámite de importación y solicita la intervención de un órgano imparcial de protección de derechos dentro de la entidad.",
          "statement": "La dependencia especializada dentro de la estructura de la DIAN encargada de velar por el respeto de los derechos de los usuarios y garantizar la debida atención es:",
          "options": [
            {
              "id": "A",
              "text": "La Defensoría del Contribuyente y del Usuario Aduanero, órgano especial que actúa con autonomía para garantizar los derechos y resolver controversias de los usuarios."
            },
            {
              "id": "B",
              "text": "El área de seguridad y vigilancia física del edificio."
            },
            {
              "id": "C",
              "text": "La Subdirección de Compras y Contratación Pública."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Defensoría del Contribuyente y del Usuario Aduanero es la instancia creada para tutelar y garantizar los derechos de los ciudadanos frente a la administración tributaria y aduanera, interviniendo ante arbitrariedades o trabas injustificadas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Seguridad física custodia los accesos del inmueble, no tutela derechos constitucionales de los administrados."
              },
              {
                "id": "C",
                "reason": "Compras y Contratación maneja licitaciones públicas internas, no la defensa de contribuyentes."
              }
            ]
          }
        }
      ]
    },
    "exam-7": {
      "title": "Examen Módulo 7: Indicadores de Gestión y Desempeño Público (10 Preguntas PJS)",
      "indicatorNum": 7,
      "questions": [
        {
          "id": 701,
          "topic": "Cálculo e Interpretación de Eficacia",
          "caseText": "Una dependencia de cobro coactivo programó gestionar 1.200 expedientes de cobro durante el primer semestre del año. Al hacer el corte del 30 de junio, se constata que gestionó de fondo 1.050 expedientes.",
          "statement": "De acuerdo con la Guía de Indicadores del DAFP/DNP, el porcentaje de eficacia alcanzado por la dependencia fue de:",
          "options": [
            {
              "id": "A",
              "text": "87.5%, calculado como (1.050 / 1.200) * 100, ubicándose en un rango de alerta o cumplimiento parcial."
            },
            {
              "id": "B",
              "text": "114.2%, puesto que cualquier avance semestral se multiplica por el factor de corrección de UVT."
            },
            {
              "id": "C",
              "text": "50.0%, dado que solo se cuentan los expedientes en los que se logró el remate físico de bienes."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La eficacia se calcula matemáticamente como (Resultado Real / Meta Programada) * 100. En este caso: (1.050 / 1.200) * 100 = 87.5%, lo que sitúa al indicador en rango amarillo (entre 70% y 89%).",
            "distractors": [
              {
                "id": "B",
                "reason": "El cálculo invierte la fórmula y confunde unidades de valor tributario con porcentaje de cumplimiento de metas."
              },
              {
                "id": "C",
                "reason": "La gestión de cobro incluye acuerdos de pago y archivo por cobro efectivo, no únicamente el remate de bienes."
              }
            ]
          }
        },
        {
          "id": 702,
          "topic": "Indicadores de Producto vs. Indicadores de Resultado",
          "caseText": "Se evalúan dos indicadores: (1) 'Número de visitas de auditoría a establecimientos comerciales realizadas' y (2) 'Tasa de reducción de la omisión en la declaración bimestral de IVA en el sector fiscalizado'.",
          "statement": "Técnicamente, en la cadena de valor de MIPG, estos dos indicadores corresponden respectivamente a:",
          "options": [
            {
              "id": "A",
              "text": "Un indicador de Producto (el bien o servicio directo generado: las visitas ejecutadas) y un indicador de Resultado (el cambio o impacto deseado en la conducta de cumplimiento del contribuyente)."
            },
            {
              "id": "B",
              "text": "Ambos son indicadores de insumo financiero."
            },
            {
              "id": "C",
              "text": "El primero es de impacto social macroeconómico y el segundo es un indicador de proceso rutinario."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El número de visitas es un producto directo de la actividad administrativa; la reducción de la omisión fiscal refleja el resultado o cambio efectivo logrado en la conducta tributaria de la población auditada.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ninguno mide recursos monetarios de entrada (insumo), sino bienes entregados y efectos logrados."
              },
              {
                "id": "C",
                "reason": "El número de visitas no es impacto macroeconómico; es un producto intermedio directo."
              }
            ]
          }
        },
        {
          "id": 703,
          "topic": "Cálculo e Interpretación de Eficiencia",
          "caseText": "Un equipo de digitalización de RUT invirtió 50 horas de trabajo y $2.000.000 para digitalizar 1.000 expedientes, logrando un costo unitario de $2.000 por expediente frente al estándar nacional de $3.500.",
          "statement": "Al interpretar esta métrica, al profesional le corresponde destacar que el equipo demostró:",
          "options": [
            {
              "id": "A",
              "text": "Alta eficiencia, puesto que optimizó la relación entre los recursos económicos y de tiempo consumidos y el volumen de productos entregados."
            },
            {
              "id": "B",
              "text": "Incompetencia administrativa, ya que en el sector público está prohibido gastar menos dinero del programado inicialmente."
            },
            {
              "id": "C",
              "text": "Eficacia nula, ya que la eficiencia invalida el logro de metas de gestión."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La eficiencia mide el rendimiento de los recursos insumidos frente a los productos generados. Reducir el costo unitario por debajo del estándar manteniendo la calidad es el reflejo óptimo de eficiencia pública.",
            "distractors": [
              {
                "id": "B",
                "reason": "El ahorro y la austeridad del gasto público son deberes de ley, no faltas administrativas."
              },
              {
                "id": "C",
                "reason": "La eficiencia complementa y potencia la eficacia; no la anula."
              }
            ]
          }
        },
        {
          "id": 704,
          "topic": "Semaforización de Indicadores (Verde, Amarillo, Rojo)",
          "caseText": "En el tablero de seguimiento a metas institucionales de la DIAN, un indicador de oportunidad en devoluciones tributarias alcanza un 64% de cumplimiento al cierre del trimestre.",
          "statement": "Según la escala estándar de semaforización del DAFP y los manuales de planeación, el estado y acción procedente es:",
          "options": [
            {
              "id": "A",
              "text": "🔴 Rojo (Crítico / Incumplido, por ser inferior al 70%), exigiendo la formulación inmediata de un plan de choque con acciones correctivas sobre las causas raíz."
            },
            {
              "id": "B",
              "text": "🟢 Verde (Satisfactorio), puesto que se superó el 50% de la meta."
            },
            {
              "id": "C",
              "text": "Eliminar el indicador del tablero para no afectar el promedio de la dirección seccional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la semaforización oficial de gestión pública, cumplimientos inferiores al 70% se ubican en rango rojo crítico, lo cual activa alertas a la alta dirección y la formulación obligatoria de acciones de mejora inmediatas.",
            "distractors": [
              {
                "id": "B",
                "reason": "El 64% es deficiente; el rango verde exige habitualmente un cumplimiento igual o superior al 90%."
              },
              {
                "id": "C",
                "reason": "Borrar indicadores con bajo desempeño es una práctica de ocultamiento contraria a la integridad y al MIPG."
              }
            ]
          }
        },
        {
          "id": 705,
          "topic": "Elementos de la Ficha Técnica del Indicador",
          "caseText": "Un área propone medir la 'calidad de la atención al contribuyente' formulando el indicador: 'Percepción general positiva', pero no define fórmula matemática, ni fuente de datos, ni periodicidad de recolección.",
          "statement": "Para estructurar adecuadamente la Ficha Técnica conforme a la Guía DAFP/DNP, al Gestor II le corresponde exigir:",
          "options": [
            {
              "id": "A",
              "text": "La definición unívoca de la fórmula de cálculo, las variables que la componen, la unidad de medida, la periodicidad, la fuente de verificación y la línea base histórica."
            },
            {
              "id": "B",
              "text": "Únicamente una fotografía del jefe del área con el uniforme institucional."
            },
            {
              "id": "C",
              "text": "Un compromiso verbal del contratista de aseo sobre la limpieza de la sala de espera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ficha Técnica u Hoja de Vida del indicador exige rigor metodológico: fórmula matemática, variables cuantificables, fuentes de información comprobables, periodicidad y línea base para evitar subjetividades.",
            "distractors": [
              {
                "id": "B",
                "reason": "Elementos visuales o de imagen personal no aportan rigor a la medición de gestión."
              },
              {
                "id": "C",
                "reason": "Compromisos verbales carecen de validez probatoria y no estructuran un indicador técnico de calidad."
              }
            ]
          }
        },
        {
          "id": 706,
          "topic": "Concepto de Línea Base",
          "caseText": "Al diseñar un indicador para reducir el tiempo de respuesta a consultas jurídicas tributarias, el equipo debate qué valor utilizar como punto de partida para evaluar si hubo avance en la vigencia.",
          "statement": "En la metodología de indicadores del Estado colombiano, este punto de referencia cuantitativo inicial se denomina:",
          "options": [
            {
              "id": "A",
              "text": "Línea Base, la cual registra el valor histórico del indicador antes del inicio de las acciones de mejora programadas."
            },
            {
              "id": "B",
              "text": "Margen de error muestral con corrección por inflación."
            },
            {
              "id": "C",
              "text": "Presupuesto máximo de contratación de consultoría."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Línea Base es el valor cuantitativo de partida que describe el estado inicial de un fenómeno o proceso, contra el cual se miden los avances reales derivados de la gestión posterior.",
            "distractors": [
              {
                "id": "B",
                "reason": "El margen de error es un concepto de inferencia estadística, no el valor de partida de un proceso de gestión."
              },
              {
                "id": "C",
                "reason": "El presupuesto es un insumo financiero, no el punto de referencia de desempeño de un indicador."
              }
            ]
          }
        },
        {
          "id": 707,
          "topic": "Indicadores de Economía en la Gestión Pública",
          "caseText": "La DIAN suscribe un acuerdo marco de precios para adquirir licencias de software logrando un descuento del 35% respecto a los precios de lista del mercado comercial para las mismas especificaciones técnicas.",
          "statement": "Este resultado refleja directamente la dimensión de desempeño de:",
          "options": [
            {
              "id": "A",
              "text": "Economía, al maximizar el poder de compra del Estado adquiriendo insumos y recursos al menor costo posible con los estándares de calidad requeridos."
            },
            {
              "id": "B",
              "text": "Efectividad macroeconómica sobre el índice de pobreza multidimensional."
            },
            {
              "id": "C",
              "text": "Autocontrol disciplinario de los servidores sindicalizados."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La dimensión de Economía mide la capacidad de la administración para adquirir los recursos financieros, humanos y materiales en las condiciones más favorables de costo, oportunidad y calidad para el erario público.",
            "distractors": [
              {
                "id": "B",
                "reason": "La compra de software de TI no mide de forma directa la pobreza multidimensional del país."
              },
              {
                "id": "C",
                "reason": "No guarda relación con procedimientos disciplinarios ni organizaciones sindicales."
              }
            ]
          }
        },
        {
          "id": 708,
          "topic": "Indicador de Efectividad (Impacto Integrado)",
          "caseText": "Un programa de fiscalización masiva demostró 100% de eficacia en visitas realizadas y bajo costo operativo (alta eficiencia), pero no logró incrementar el recaudo tributario ni reducir la evasión en el sector intervenido.",
          "statement": "Al emitir la evaluación global del programa, al Gestor II le corresponde conceptuar que:",
          "options": [
            {
              "id": "A",
              "text": "El programa fue eficaz y eficiente operativamente, pero careció de Efectividad, dado que no logró el impacto final esperado en el recaudo y en la reducción de la evasión."
            },
            {
              "id": "B",
              "text": "El programa fue completamente efectivo, puesto que la eficacia operativa exime de evaluar el recaudo real."
            },
            {
              "id": "C",
              "text": "Las metas tributarias no tienen relación con los programas de fiscalización de la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La efectividad es el grado en que se logran los impactos y objetivos de fondo. Si un programa cumple todas las tareas a bajo costo pero no resuelve el problema misional (recaudo y evasión), carece de efectividad.",
            "distractors": [
              {
                "id": "B",
                "reason": "La efectividad requiere validar el impacto de fondo, no solo el cumplimiento de tareas formales."
              },
              {
                "id": "C",
                "reason": "El fin primordial de la fiscalización tributaria es precisamente garantizar el recaudo y combatir la evasión fiscal."
              }
            ]
          }
        },
        {
          "id": 709,
          "topic": "Errores Comunes en la Formulación de Indicadores",
          "caseText": "Una seccional propone el siguiente indicador: 'Porcentaje de cumplimiento de la norma aduanera vigente'. Al revisar la fórmula se encuentra: 'Número de leyes aduaneras leídas / Total de leyes publicadas * 100'.",
          "statement": "La falencia metodológica crítica de este indicador radica en que:",
          "options": [
            {
              "id": "A",
              "text": "Mide una actividad interna irrelevante de lectura que no refleja en modo alguno la calidad ni el cumplimiento real de la operación aduanera en el territorio."
            },
            {
              "id": "B",
              "text": "La fórmula debió expresarse en salarios mínimos y no en porcentaje numérico."
            },
            {
              "id": "C",
              "text": "El indicador es perfecto pero solo debe ser medido por el Director General en persona."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un indicador debe tener pertinencia y medir variables que agreguen valor a la gestión. El conteo de normas leídas es una actividad doméstica banal que no mide el grado real de cumplimiento aduanero.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los porcentajes son unidades de medida válidas; la falla está en el objeto y la pertinencia de la variable medida."
              },
              {
                "id": "C",
                "reason": "El indicador adolece de un error conceptual estructural en su formulación matemática y lógica."
              }
            ]
          }
        },
        {
          "id": 710,
          "topic": "Periodicidad y Oportunidad en el Reporte de Indicadores",
          "caseText": "Un indicador de riesgos aduaneros de frontera se configuró con periodicidad de reporte bianual (cada dos años), lo que impide a los directores seccionales tomar decisiones ante picos estacionales de contrabando.",
          "statement": "Para mejorar la utilidad de este indicador en la toma de decisiones, la recomendación técnica procedente es:",
          "options": [
            {
              "id": "A",
              "text": "Ajustar la periodicidad de medición a cortes mensuales o trimestrales que permitan emitir alertas tempranas y adoptar correctivos tácticos oportunos."
            },
            {
              "id": "B",
              "text": "Aumentar la periodicidad a diez años para evitar fatiga en la recolección de datos."
            },
            {
              "id": "C",
              "text": "Eliminar la medición de riesgos de frontera y basar las decisiones exclusivamente en la intuición de los guardias."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La periodicidad debe ser coherente con la dinámica del proceso y la velocidad requerida para la toma de decisiones. En riesgos operativos de contrabando, un reporte bianual es completamente extemporáneo e inútil.",
            "distractors": [
              {
                "id": "B",
                "reason": "Diez años es un horizonte de largo plazo prospectivo, no de control de gestión operativo."
              },
              {
                "id": "C",
                "reason": "La intuición sin datos desconoce el principio de toma de decisiones basada en evidencia de MIPG."
              }
            ]
          }
        }
      ]
    },
    "exam-8": {
      "title": "Examen Módulo 8: Medición del Desempeño Institucional y FURAG (10 Preguntas PJS)",
      "indicatorNum": 8,
      "questions": [
        {
          "id": 801,
          "topic": "Naturaleza y Características del FURAG",
          "caseText": "Durante la preparación del reporte anual de gestión ante el DAFP, un funcionario afirma que el FURAG es una encuesta de opinión que se puede diligenciar con estimaciones subjetivas del equipo.",
          "statement": "Para corregir esta afirmación conforme a la metodología oficial del DAFP, al profesional le corresponde precisar que el FURAG:",
          "options": [
            {
              "id": "A",
              "text": "Es el Formulario Único de Reporte y Avance de Gestión, una herramienta web obligatoria con carácter de declaración oficial respaldada en evidencias documentales verificables."
            },
            {
              "id": "B",
              "text": "Es un cuestionario voluntario y confidencial que solo aplican los hospitales de tercer nivel."
            },
            {
              "id": "C",
              "text": "Es un examen académico individual que deben presentar todos los servidores de carrera para no ser desvinculados."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El FURAG es la herramienta oficial del DAFP mediante la cual se captura la información periódica y verificable sobre la implementación del MIPG en el Estado, teniendo carácter de declaración oficial institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "El FURAG es de obligatorio diligenciamiento para todas las entidades públicas del orden nacional y territorial."
              },
              {
                "id": "C",
                "reason": "Mide el desempeño de la entidad, no la permanencia laboral de servidores individuales."
              }
            ]
          }
        },
        {
          "id": 802,
          "topic": "El Índice de Desempeño Institucional (IDI)",
          "caseText": "La DIAN obtiene un Índice de Desempeño Institucional (IDI) de 86.4 puntos en el reporte anual del DAFP. Un asesor sugiere celebrar el resultado y archivar los informes detallados sin mayor trámite.",
          "statement": "Desde la perspectiva gerencial del MIPG y el rol del Gestor II, la conducta procedente frente al IDI es:",
          "options": [
            {
              "id": "A",
              "text": "Desagregar el puntaje por dimensiones y políticas, identificar las brechas específicas en las áreas que obtuvieron menor calificación y estructurar el Plan de Cierre de Brechas."
            },
            {
              "id": "B",
              "text": "Publicar el puntaje en periódicos y ordenar un día cívico remunerado sin analizar las debilidades institucionales."
            },
            {
              "id": "C",
              "text": "Impugnar la calificación ante un juzgado penal por considerar que cualquier nota inferior a 100 puntos es difamatoria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor del IDI radica en su uso analítico para la mejora continua. Se deben desglosar las 7 dimensiones y 19 políticas para focalizar recursos y acciones correctivas en aquellas con rezagos o brechas críticas.",
            "distractors": [
              {
                "id": "B",
                "reason": "El propósito del IDI no es la autocomplacencia mediática, sino orientar la planeación y el cierre de brechas."
              },
              {
                "id": "C",
                "reason": "El IDI es un índice estadístico técnico oficial; no constituye un delito penal susceptible de tutela o demanda."
              }
            ]
          }
        },
        {
          "id": 803,
          "topic": "Validación de Evidencias en el FURAG",
          "caseText": "Al revisar las respuestas cargadas al FURAG en la política de Gestión Documental, el auditor detecta que el área respondió 'Sí' a la existencia de un Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA), pero el enlace adjunto está roto y no existe acto administrativo de adopción.",
          "statement": "Frente a esta situación, la acción que corresponde al equipo de planeación es:",
          "options": [
            {
              "id": "A",
              "text": "Corregir el reporte conforme a la realidad fáctica y priorizar la implementación real del SGDEA, puesto que el DAFP y los líderes de política validan y castigan reportes sin sustento probatorio."
            },
            {
              "id": "B",
              "text": "Mantener la respuesta afirmativa confiando en que los auditores del DAFP nunca hacen clic en los enlaces probatorios."
            },
            {
              "id": "C",
              "text": "Crear un documento de Word falso en un computador personal para subirlo de afán a la plataforma."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La integridad y veracidad del FURAG son auditables por el DAFP y el Archivo General de la Nación. Reportar falsedades o afirmaciones sin soporte viola la Ley 1712 de 2014 y el Código de Integridad institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "El DAFP aplica muestreos y validaciones automáticas y manuales sobre las evidencias cargadas."
              },
              {
                "id": "C",
                "reason": "Elaborar documentos ficticios constituye falsedad material e ideológica en documento público, sancionable penalmente."
              }
            ]
          }
        },
        {
          "id": 804,
          "topic": "Estructura del Plan de Cierre de Brechas",
          "caseText": "En el informe del IDI, la política de Seguridad Digital de la entidad obtuvo una calificación crítica de 52.0 puntos debido a la falta de planes de contingencia (BCP/DRP) frente a ciberataques.",
          "statement": "Para estructurar un Plan de Cierre de Brechas efectivo, al Gestor II le corresponde asegurar que el plan contenga:",
          "options": [
            {
              "id": "A",
              "text": "Acciones concretas orientadas a subsanar la causa raíz, con responsables definidos de nivel directivo, cronograma de hitos, asignación de presupuesto y metas verificables."
            },
            {
              "id": "B",
              "text": "Una carta de disculpas firmada por todos los empleados de la Dirección de Gestión de Innovación y Tecnología."
            },
            {
              "id": "C",
              "text": "La orden de apagar todos los computadores de la DIAN a nivel nacional durante seis meses."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un Plan de Cierre de Brechas de MIPG debe cumplir el estándar de proyectos: metas SMART, responsables institucionales asignados, recursos presupuestales articulados al Plan de Acción y cronograma de seguimiento bimensual.",
            "distractors": [
              {
                "id": "B",
                "reason": "Las cartas de disculpas no resuelven las vulnerabilidades técnicas ni cierran las brechas de política pública."
              },
              {
                "id": "C",
                "reason": "Paralizar la administración tributaria atenta contra el recaudo nacional y la seguridad fiscal del Estado."
              }
            ]
          }
        },
        {
          "id": 805,
          "topic": "Periodicidad y Ciclo de Captura del FURAG",
          "caseText": "Un nuevo funcionario pregunta en qué fecha se diligencia el FURAG y qué período de gestión institucional evalúa.",
          "statement": "La respuesta correcta con base en el cronograma institucional del DAFP es:",
          "options": [
            {
              "id": "A",
              "text": "Se diligencia anualmente durante el primer semestre de cada año (febrero a abril), evaluando la gestión y el desempeño ejecutado durante la vigencia inmediatamente anterior."
            },
            {
              "id": "B",
              "text": "Se diligencia diariamente cada mañana al marcar el ingreso biométrico de la jornada laboral."
            },
            {
              "id": "C",
              "text": "Se aplica una vez cada cuatro años únicamente cuando hay cambio de Presidente de la República."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El ciclo de medición de FURAG es anual; en los primeros meses de cada vigencia las entidades del Estado reportan las evidencias y avances del año inmediatamente anterior para la consolidación del IDI nacional.",
            "distractors": [
              {
                "id": "B",
                "reason": "El registro de asistencia biométrica no tiene ninguna relación con la captura del formulario FURAG."
              },
              {
                "id": "C",
                "reason": "La evaluación del desempeño institucional es continua y anual, no cuatrienal ni coyuntural a elecciones."
              }
            ]
          }
        },
        {
          "id": 806,
          "topic": "Entidades Líderes de Política en MIPG",
          "caseText": "Al revisar las políticas de MIPG evaluadas en FURAG, se identifica la necesidad de clasificar las entidades nacionales rectoras que emiten los lineamientos oficiales.",
          "statement": "La asociación correcta entre política y entidad líder del orden nacional es:",
          "options": [
            {
              "id": "A",
              "text": "Gestión Estratégica del Talento Humano (DAFP), Gobierno Digital (MinTIC), Gestión Documental (Archivo General de la Nación) y Gestión Presupuestal (MinHacienda / DNP)."
            },
            {
              "id": "B",
              "text": "Todas las 19 políticas son lideradas exclusivamente por la Fiscalía General de la Nación."
            },
            {
              "id": "C",
              "text": "Las políticas no tienen líderes de orden nacional; cada municipio define sus propias reglas de manera autónoma."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1499 de 2017 asigna la rectoría de cada política a un organismo técnico del nivel central: DAFP (Talento Humano, MIPG, Control Interno), MinTIC (Gobierno Digital), AGN (Gestión Documental), MinHacienda (Presupuesto).",
            "distractors": [
              {
                "id": "B",
                "reason": "La Fiscalía es un órgano judicial de investigación penal, no el rector administrativo de las políticas de gestión pública."
              },
              {
                "id": "C",
                "reason": "El MIPG es un modelo unitario del orden nacional con rectores sectoriales especializados para todo el Estado."
              }
            ]
          }
        },
        {
          "id": 807,
          "topic": "Percentiles de Desempeño Sectorial y Territorial",
          "caseText": "En el reporte de resultados, la DIAN se ubica en el percentil 92 de las entidades del Sector Hacienda, pero en la política de Servicio al Ciudadano se encuentra en el percentil 45.",
          "statement": "La interpretación analítica correcta de estos percentiles indica que:",
          "options": [
            {
              "id": "A",
              "text": "En el consolidado global la entidad supera al 92% de las entidades del sector, pero en Servicio al Ciudadano está por debajo del promedio sectorial, requiriendo atención prioritaria en esa política específica."
            },
            {
              "id": "B",
              "text": "El percentil 45 significa que el 45% de los funcionarios deben ser sancionados disciplinariamente sin fórmula de juicio."
            },
            {
              "id": "C",
              "text": "Los percentiles no tienen relación con el desempeño y fueron calculados por error en el software del DAFP."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En estadística de desempeño, el percentil 92 indica que la entidad supera al 92% de sus pares sectoriales; el percentil 45 en una política concreta evidencia que está por debajo de la mediana, constituyendo una brecha institucional que demanda intervención.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los percentiles describen el comportamiento relativo institucional, no sanciones disciplinarias a personas."
              },
              {
                "id": "C",
                "reason": "El uso de percentiles es la metodología estadística estándar del DAFP para comparar desempeños entre entidades del mismo grupo homogéneo."
              }
            ]
          }
        },
        {
          "id": 808,
          "topic": "Rol de la OCI en la Verificación del FURAG",
          "caseText": "Antes de enviar definitivamente el reporte de FURAG al DAFP, el Director General solicita a la Oficina de Control Interno que efectúe una verificación previa de la consistencia de las respuestas.",
          "statement": "Esta solicitud se enmarca adecuadamente dentro del rol de la OCI de:",
          "options": [
            {
              "id": "A",
              "text": "Enfoque hacia la prevención y aseguramiento independiente, validando que las evidencias aportadas por las dependencias sean fidedignas y sustenten la realidad institucional."
            },
            {
              "id": "B",
              "text": "Coadministración activa obligatoria mediante la firma de cheques de pago a los auditores externos."
            },
            {
              "id": "C",
              "text": "Reemplazo de los líderes de proceso en el diligenciamiento de las preguntas de cada política."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La OCI, dentro de su rol asesor preventivo y de aseguramiento (Decreto 648/2017), puede revisar la consistencia y veracidad de los soportes que respaldan las declaraciones institucionales en el FURAG antes de su cierre definitivo.",
            "distractors": [
              {
                "id": "B",
                "reason": "Firmar pagos u ordenar gastos de tesorería es coadministración abierta expresamente prohibida a la OCI."
              },
              {
                "id": "C",
                "reason": "Los líderes de proceso son los dueños de sus políticas y los encargados de responder y aportar sus evidencias."
              }
            ]
          }
        },
        {
          "id": 809,
          "topic": "Monitoreo del Plan de Cierre de Brechas",
          "caseText": "El Plan de Cierre de Brechas de MIPG fue formulado hace ocho meses, pero ningún comité ha revisado sus avances y los líderes de proceso afirman desconocer el estado de las tareas.",
          "statement": "Para subsanar esta debilidad de control y gobernanza, al profesional Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Programar la presentación periódica del estado de avance en el Comité Institucional de Gestión y Desempeño, consolidando alertas sobre hitos vencidos e instando a los responsables a ejecutar las acciones."
            },
            {
              "id": "B",
              "text": "Eliminar el plan de cierre de brechas y asumir que la entidad no tiene problemas de gestión."
            },
            {
              "id": "C",
              "text": "Radicar una denuncia penal ante la Fiscalía contra todos los líderes de proceso por traición a la patria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El seguimiento sistemático a través del Comité Institucional de Gestión y Desempeño garantiza el principio de rendición de cuentas interna y permite tomar decisiones oportunas ante incumplimientos de metas del plan de cierre de brechas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ignorar las fallas perpetúa el bajo desempeño institucional y empeora los resultados de la siguiente vigencia."
              },
              {
                "id": "C",
                "reason": "El retraso en metas de gestión interna es una contingencia administrativa sujeta a comités de seguimiento, no el delito penal de traición a la patria."
              }
            ]
          }
        },
        {
          "id": 810,
          "topic": "Impacto del IDI en la Confianza Ciudadana",
          "caseText": "En la rendición de cuentas pública, un líder comunal pregunta por qué a los ciudadanos debe importarles el puntaje del IDI obtenido por la DIAN.",
          "statement": "La explicación técnica y fundamentada que debe brindarse es:",
          "options": [
            {
              "id": "A",
              "text": "Porque el IDI mide de forma objetiva la capacidad institucional de la DIAN para usar con probidad los recursos públicos, atender con calidad los trámites y combatir con eficacia la corrupción y la evasión fiscal."
            },
            {
              "id": "B",
              "text": "Porque entre mayor sea el puntaje del IDI, más altos serán los impuestos que se cobrarán a los estratos 1 y 2."
            },
            {
              "id": "C",
              "text": "Porque el IDI es una calificación bancaria privada que solo le interesa a inversionistas de Wall Street."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un IDI sobresaliente refleja una entidad sólida, transparente, con servidores íntegros, procesos eficientes y control riguroso, lo cual se traduce en mayor confianza ciudadana y legitimidad en el recaudo tributario del Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "El IDI no define tarifas de impuestos; las tarifas las define exclusivamente el Congreso mediante ley de la República."
              },
              {
                "id": "C",
                "reason": "El IDI es un índice del sector público colombiano creado por el DAFP, no una calificación de bancos de inversión extranjeros."
              }
            ]
          }
        }
      ]
    },
    "exam-9": {
      "title": "Examen Módulo 9: Misionalidad de la DIAN (Tributario, Aduanero y Cambiario) (10 Preguntas PJS)",
      "indicatorNum": 9,
      "questions": [
        {
          "id": 901,
          "topic": "Los Tres Frentes de Acción Misional de la DIAN",
          "caseText": "Un ciudadano consulta ante un Punto de Contacto de la DIAN si la entidad tiene competencia para fijar los precios del dólar en las casas de cambio de la ciudad.",
          "statement": "Al responder con fundamento en las facultades legales y la misionalidad de la entidad, al funcionario le corresponde aclarar que:",
          "options": [
            {
              "id": "A",
              "text": "La DIAN no fija el precio de divisas (competencia del Banco de la República), pero sí ejerce el control y vigilancia cambiaria sobre operaciones vinculadas al comercio exterior de bienes y servicios y endeudamiento."
            },
            {
              "id": "B",
              "text": "La DIAN tiene la facultad discrecional de cerrar todas las casas de cambio que no vendan dólares a precio subsidiado."
            },
            {
              "id": "C",
              "text": "La DIAN solo administra el impuesto predial y de vehículos de los municipios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El frente cambiario de la DIAN se circunscribe al control del cumplimiento del régimen de cambios en operaciones de comercio exterior (importaciones, exportaciones) y endeudamiento, sin tener competencia sobre la tasa de cambio de mercado que regula la Junta Directiva del Banco de la República.",
            "distractors": [
              {
                "id": "B",
                "reason": "La DIAN no fija precios de divisas ni realiza cierres discrecionales sin debido proceso legal previo."
              },
              {
                "id": "C",
                "reason": "El predial y los vehículos son tributos territoriales municipales y departamentales, no impuestos del orden nacional administrados por la DIAN."
              }
            ]
          }
        },
        {
          "id": 902,
          "topic": "Evasión Fiscal vs. Elusión (Abuso Tributario)",
          "caseText": "Un contribuyente crea un entramado artificioso de cinco sociedades por acciones simplificadas (SAS) sin empleados, sin oficinas y sin activos reales, con el único fin de simular pérdidas cruzadas y reducir a cero su impuesto de renta.",
          "statement": "Frente al artículo 869 del Estatuto Tributario (Cláusula General Antiaubuso), a la DIAN le corresponde calificar esta operación como:",
          "options": [
            {
              "id": "A",
              "text": "Abuso en materia tributaria (elusión fiscal artificiosa), facultando a la administración para recaracterizar el negocio y liquidar el tributo atendiendo a la verdadera sustancia económica."
            },
            {
              "id": "B",
              "text": "Una legítima economía de opción plenamente protegida por el derecho comercial que no puede ser objetada por la DIAN."
            },
            {
              "id": "C",
              "text": "Un error involuntario de digitación en el software que debe ser perdonado de oficio."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 869 del Estatuto Tributario faculta expresamente a la DIAN para desconocer o recaracterizar negocios jurídicos artificiosos o carentes de sustancia económica que busquen una ventaja tributaria abusiva, liquidando el impuesto real.",
            "distractors": [
              {
                "id": "B",
                "reason": "La economía de opción implica elegir vías legales lícitas con propósito real de negocio; crear empresas fantasma sin sustancia es abuso tributario."
              },
              {
                "id": "C",
                "reason": "Crear un entramado de sociedades instrumentales no es un error de digitación; es una maniobra planificada de abuso del derecho."
              }
            ]
          }
        },
        {
          "id": 903,
          "topic": "Potestad Aduanera y Regímenes Aduaneros (Decreto 1165 de 2019)",
          "caseText": "Un barco con contenedores de mercancía ingresa a puerto colombiano. El importador alega que la DIAN no puede inspeccionar la carga hasta que la mercancía se encuentre en su bodega privada de destino final.",
          "statement": "Con base en el Decreto 1165 de 2019 sobre el ejercicio de la potestad aduanera, la afirmación del importador es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "La potestad aduanera de la DIAN se ejerce con plenas facultades de inspección, control y verificación en la Zona Primaria Aduanera (puertos y aeropuertos) desde el arribo mismo del medio de transporte."
            },
            {
              "id": "B",
              "text": "Los puertos colombianos pertenecen a empresas extranjeras donde el Estado no tiene soberanía alguna."
            },
            {
              "id": "C",
              "text": "La DIAN solo puede inspeccionar mercancías nacionales pero jamás bienes de procedencia extranjera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1165 de 2019 define la potestad aduanera como el conjunto de derechos y facultades de la DIAN para controlar el ingreso, permanencia y salida de mercancías en el territorio aduanero nacional, con primacía en las zonas primarias de ingreso.",
            "distractors": [
              {
                "id": "B",
                "reason": "La soberanía aduanera del Estado colombiano rige en todo el territorio nacional y puertos habilitados."
              },
              {
                "id": "C",
                "reason": "El objeto central del control aduanero son precisamente las mercancías foráneas que ingresan al país."
              }
            ]
          }
        },
        {
          "id": 904,
          "topic": "Delito de Omisión del Agente Retenedor o Recaudador (Art. 402 Código Penal)",
          "caseText": "El representante legal de una empresa comercial recaudó $800 millones de IVA facturados a sus clientes, pero decide no consignarlos a la DIAN y utilizarlos para pagar pasivos financieros privados de la compañía.",
          "statement": "A la luz del artículo 402 del Código Penal colombiano, esta conducta configura:",
          "options": [
            {
              "id": "A",
              "text": "El delito penal de Omisión del Agente Retenedor o Recaudador, sancionado con pena privativa de la libertad y multa pecuniaria sin perjuicio del cobro de los tributos adeudados."
            },
            {
              "id": "B",
              "text": "Una simple falta de etiqueta mercantil que se resuelve con una disculpa por escrito a la DIAN."
            },
            {
              "id": "C",
              "text": "Una operación contable regular exenta de cualquier sanción legal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 402 del Código Penal tipifica como delito la omisión del agente retenedor o recaudador que no consigne las sumas retenidas o recaudadas por concepto de IVA dentro de los dos meses siguientes a su vencimiento, castigándolo con prisión.",
            "distractors": [
              {
                "id": "B",
                "reason": "Apropiarse de dineros públicos recaudados por IVA es un delito contra el orden económico y social, no una simple falta de etiqueta."
              },
              {
                "id": "C",
                "reason": "No consignar el impuesto recaudado es una infracción penal gravísima; los dineros de IVA nunca pertenecen al comerciante."
              }
            ]
          }
        },
        {
          "id": 905,
          "topic": "Contrabando Abierto vs. Contrabando Técnico",
          "caseText": "En un operativo aduanero se detecta una empresa que ingresó al país 10.000 computadores portátiles declarándolos formalmente en el formulario aduanero como 'repuestos plásticos genéricos sin valor', para liquidar arancel del 0% en vez del 15% real.",
          "statement": "Técnica y jurídicamente, esta modalidad de ilícito aduanero se clasifica como:",
          "options": [
            {
              "id": "A",
              "text": "Contrabando Técnico por falsa clasificación arancelaria y fraude en el valor aduanero, al ingresar la mercancía por canal formal pero alterando dolosamente su naturaleza y valor real."
            },
            {
              "id": "B",
              "text": "Contrabando Abierto, puesto que los computadores no tienen teclado en idioma español."
            },
            {
              "id": "C",
              "text": "Infracción formal subsanable mediante el canje de los computadores por licencias de software."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El contrabando técnico se comete a través de trámites aduaneros formales pero falsificando el valor (subfacturación), el origen o la subpartida arancelaria para evadir el pago legítimo de los aranceles e impuestos correspondientes.",
            "distractors": [
              {
                "id": "B",
                "reason": "El contrabando abierto ocurre cuando se ingresa mercancía por lugares no habilitados sin presentar declaración aduanera alguna."
              },
              {
                "id": "C",
                "reason": "Alterar dolosamente la clasificación arancelaria para evadir tributos configura delito de contrabando y fraude aduanero."
              }
            ]
          }
        },
        {
          "id": 906,
          "topic": "Reserva Tributaria (Artículo 583 del Estatuto Tributario)",
          "caseText": "Un funcionario de la DIAN recibe una solicitud de un banco privado que pide conocer los ingresos brutos declarados por un cliente para evaluar la aprobación de un crédito hipotecario personal.",
          "statement": "Frente a esta petición y en atención al artículo 583 del Estatuto Tributario, al servidor le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Negar la solicitud por existir Reserva Tributaria legal expresa, informando que las declaraciones tributarias son confidenciales y solo pueden ser suministradas al propio contribuyente o por orden judicial competente."
            },
            {
              "id": "B",
              "text": "Entregar la declaración de renta completa en formato PDF vía WhatsApp al gerente del banco."
            },
            {
              "id": "C",
              "text": "Publicar la declaración en la cartelera del banco para agilizar el crédito del solicitante."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 583 del Estatuto Tributario consagra la Reserva Tributaria, la cual prohíbe revelar los datos contenidos en las declaraciones a terceros no autorizados. Solo se levanta ante requerimientos de autoridades judiciales o entes de control autorizados expresamente por la ley.",
            "distractors": [
              {
                "id": "B",
                "reason": "Enviar datos fiscales por mensajería a particulares viola la reserva tributaria y acarrea destitución del cargo."
              },
              {
                "id": "C",
                "reason": "Publicar declaraciones tributarias de ciudadanos viola el derecho fundamental al Habeas Data y la intimidad económica."
              }
            ]
          }
        },
        {
          "id": 907,
          "topic": "Obligaciones Tributarias Formales vs. Sustanciales",
          "caseText": "Un ciudadano no tuvo que pagar impuesto sobre la renta porque sus retenciones en la fuente cubrieron la totalidad de la deuda fiscal calculada; no obstante, omitió presentar el formulario de declaración dentro de las fechas fijadas en el calendario oficial.",
          "statement": "Desde la dogmática tributaria, el ciudadano:",
          "options": [
            {
              "id": "A",
              "text": "Cumplió con la obligación sustancial (el pago del tributo), pero incumplió la obligación formal (la presentación oportuna de la declaración), haciéndose acreedor a la sanción por extemporaneidad."
            },
            {
              "id": "B",
              "text": "Queda exonerado de toda sanción, puesto que las obligaciones formales no tienen valor jurídico si el saldo a pagar es cero."
            },
            {
              "id": "C",
              "text": "Debe ser encarcelado de inmediato por el delito de peculado por apropiación."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La obligación sustancial es el pago efectivo del impuesto; las obligaciones formales son los trámites necesarios para el control y fiscalización (declarar, reportar exógena, expedir factura). Su incumplimiento genera sanciones administrativas de extemporaneidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "El Estatuto Tributario sanciona la extemporaneidad formal aun cuando el saldo a pagar sea cero o arroje saldo a favor."
              },
              {
                "id": "C",
                "reason": "El ciudadano que declara tarde no comete el delito de peculado; este es un tipo penal aplicable a servidores públicos que desvían fondos estatales."
              }
            ]
          }
        },
        {
          "id": 908,
          "topic": "Facilitación del Comercio Exterior y Cumplimiento Voluntario",
          "caseText": "La DIAN implementa el Sistema de Declaración Sugerida de Renta para personas naturales y habilita canales de pago por PSE desde teléfonos móviles.",
          "statement": "Esta iniciativa estratégica se enmarca en el modelo institucional de:",
          "options": [
            {
              "id": "A",
              "text": "Facilitación y fomento del cumplimiento voluntario de las obligaciones tributarias, reduciendo los costos de transacción para los contribuyentes honestos."
            },
            {
              "id": "B",
              "text": "Fiscalización coactiva represiva con decomiso inmediato de bienes."
            },
            {
              "id": "C",
              "text": "Privatización del recaudo tributario a favor de entidades bancarias transnacionales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La facilitación del cumplimiento voluntario busca simplificar trámites, ofrecer borradores de declaraciones prediligenciados y brindar servicios digitales intuitivos para que el ciudadano cumpla sin trabas burocráticas.",
            "distractors": [
              {
                "id": "B",
                "reason": "La declaración sugerida no es una medida coactiva de embargo; es un servicio de orientación preventiva."
              },
              {
                "id": "C",
                "reason": "El uso de pasarelas digitales no privatiza la titularidad del recaudo, el cual ingresa íntegramente a las cuentas de la Nación."
              }
            ]
          }
        },
        {
          "id": 909,
          "topic": "Delito de Omisión de Activos o Inclusión de Pasivos Inexistentes (Art. 434A C.P.)",
          "caseText": "En una auditoría tributaria se descubre que un contribuyente ocultó en paraísos fiscales cuentas bancarias y bienes inmuebles por valor de $5.000 millones de pesos, no declarándolos en su impuesto de renta.",
          "statement": "Al superar los montos umbrales fijados en la ley, esta conducta:",
          "options": [
            {
              "id": "A",
              "text": "Configura el delito penal tipificado en el artículo 434A del Código Penal, obligando a los funcionarios de la DIAN a compulsar copias inmediatamente a la Fiscalía General de la Nación."
            },
            {
              "id": "B",
              "text": "Se considera una falta administrativa leve que se subsana con un curso de cuatro horas en la Escuela de la DIAN."
            },
            {
              "id": "C",
              "text": "Autoriza al funcionario auditor a quedarse con el 10% del dinero oculto como bonificación personal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 434A del Código Penal sanciona con pena privativa de la libertad a quien omita activos o declare pasivos inexistentes por encima de los topes en UVT. Al evidenciarse indicios penales, es deber legal compulsar copias a la Fiscalía.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ocultar activos multimillonarios no es una falta leve; es un delito grave contra el orden económico y social."
              },
              {
                "id": "C",
                "reason": "Apropiarse de bienes auditados o cobrar comisiones ilegales constituye el delito penal de concusión y cohecho."
              }
            ]
          }
        },
        {
          "id": 910,
          "topic": "Aprehensión vs. Decomiso de Mercancías",
          "caseText": "La Policía Fiscal y Aduanera (POLFA) retiene preventivamente en carretera un camión con calzado extranjero porque el conductor no portaba la declaración de importación ni factura de compra.",
          "statement": "En el procedimiento aduanero regulado por el Decreto 1165 de 2019, esta medida inicial se denomina:",
          "options": [
            {
              "id": "A",
              "text": "Aprehensión aduanera (medida cautelar previa de retención física mientras se define la situación jurídica), la cual se convertirá en Decomiso definitivo si el titular no acredita la legal introducción al país."
            },
            {
              "id": "B",
              "text": "Decomiso definitivo irrevocable que faculta a rematar la mercancía en el mismo minuto del operativo."
            },
            {
              "id": "C",
              "text": "Venta forzosa al conductor del camión a precio de costo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Aprehensión es la medida cautelar que toma la autoridad aduanera para retener preventivamente la mercancía ante sospecha fundada de irregularidad; el Decomiso es el acto administrativo definitivo que transfiere la propiedad a la Nación tras vencerse los términos probatorios sin acreditar legalidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "El decomiso requiere debido proceso, formulación de pliego de cargos y oportunidad de defensa al importador; no es instantáneo."
              },
              {
                "id": "C",
                "reason": "La autoridad aduanera no vende mercancías retenidas a particulares en la vía pública de forma informal."
              }
            ]
          }
        }
      ]
    },
    "exam-10": {
      "title": "Examen Módulo 10: Razonamiento Analítico en la Gestión Pública (10 Preguntas PJS)",
      "indicatorNum": 10,
      "questions": [
        {
          "id": 1001,
          "topic": "Lógica Deductiva y Subsunción Normativa",
          "caseText": "Premisa Mayor: 'Todo acto administrativo que imponga sanciones tributarias debe ser notificado conforme a las reglas del artículo 565 del Estatuto Tributario para gozar de eficacia jurídica'. Premisa Menor: 'La Resolución Sancionatoria No. 402 se envió por correo electrónico a una dirección que el contribuyente nunca registró en su RUT'.",
          "statement": "Aplicando las reglas del razonamiento deductivo formal, la conclusión jurídica ineludible es:",
          "options": [
            {
              "id": "A",
              "text": "La Resolución Sancionatoria No. 402 no fue debidamente notificada y, por ende, carece de eficacia legal frente al contribuyente, viciando el cobro posterior."
            },
            {
              "id": "B",
              "text": "El contribuyente queda obligado a pagar la sanción de inmediato por el principio de celeridad administrativa."
            },
            {
              "id": "C",
              "text": "El acto administrativo adquiere firmeza automática y no admite ningún tipo de recurso legal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El silogismo deductivo es estricto: Si la validez de la notificación depende de enviarla a la dirección formalmente inscrita en el RUT y se envió a otra distinta, la consecuencia lógica y legal necesaria es la indebida notificación y la ineficacia del acto.",
            "distractors": [
              {
                "id": "B",
                "reason": "No se puede exigir el pago coactivo de una sanción que adolece de vicio de notificación violatorio del debido proceso."
              },
              {
                "id": "C",
                "reason": "La falta de notificación debida impide que el acto cobre firmeza jurídica."
              }
            ]
          }
        },
        {
          "id": 1002,
          "topic": "Análisis Causa-Raíz: Diagrama de Ishikawa (Espina de Pescado)",
          "caseText": "Una seccional presenta una tasa de quejas del 45% por demoras en la expedición del RUT presencial. El equipo de mejora aplica un Diagrama de Ishikawa clasificando las causas.",
          "statement": "Al clasificar las causas: (1) 'Caídas continuas del servidor web', (2) 'Falta de capacitación del personal nuevo', y (3) 'Manual de atención desactualizado con 12 pasos redundantes', corresponden respectivamente a las categorías:",
          "options": [
            {
              "id": "A",
              "text": "Tecnología / Sistemas, Personas (Talento Humano), y Métodos / Procedimientos."
            },
            {
              "id": "B",
              "text": "Mobiliario físico, Sanciones disciplinarias y Clima meteorológico."
            },
            {
              "id": "C",
              "text": "Presupuesto de viáticos, Régimen cambiario y Reserva tributaria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el Diagrama de Ishikawa aplicado a la gestión pública, las fallas de software se agrupan en Tecnología, la falta de adiestramiento en Personas/Talento Humano, y los manuales con pasos engorrosos en Métodos/Procedimientos.",
            "distractors": [
              {
                "id": "B",
                "reason": "La clasificación es absurda y no sigue ninguna de las 6M del modelo de Ishikawa."
              },
              {
                "id": "C",
                "reason": "No guardan relación con las causas identificadas en el caso."
              }
            ]
          }
        },
        {
          "id": 1003,
          "topic": "Técnica de los Cinco (5) Porqués",
          "caseText": "Un informe de fiscalización aduanera fue anulado por el Consejo de Estado porque se practicó una inspección tributaria fuera de los términos perentorios de caducidad.",
          "statement": "Al aplicar la técnica de los Cinco Porqués para desenterrar la Causa Raíz, el equipo debe buscar:",
          "options": [
            {
              "id": "A",
              "text": "El motivo originario estructural en los controles de alerta temprana del proceso que permitió que los expedientes duraran meses archivados sin seguimiento de términos."
            },
            {
              "id": "B",
              "text": "Identificar al funcionario más nuevo del equipo para culparlo individualmente en un comunicado de prensa."
            },
            {
              "id": "C",
              "text": "Modificar la fecha de radicación en los expedientes físicos para engañar a los jueces."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El objetivo de los Cinco Porqués es profundizar hasta la falla del sistema o del proceso de control que permitió que el error se produjera, en lugar de atribuir la culpa de forma superficial a personas individuales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Buscar chivos expiatorios no resuelve las fallas estructurales de los procesos de control institucional."
              },
              {
                "id": "C",
                "reason": "Adulterar expedientes es un delito penal de falsedad que agrava la falta y destruye la integridad pública."
              }
            ]
          }
        },
        {
          "id": 1004,
          "topic": "Tasa de Variación Porcentual",
          "caseText": "El recaudo por Impuesto al Consumo en una seccional fue de $4.000 millones en 2024 y aumentó a $5.200 millones en 2025.",
          "statement": "La tasa de variación porcentual del recaudo en dicho período fue de:",
          "options": [
            {
              "id": "A",
              "text": "+30.0%, calculada como ((5.200 - 4.000) / 4.000) * 100."
            },
            {
              "id": "B",
              "text": "+12.0%, calculada restando los dos valores directamente sin ponderar."
            },
            {
              "id": "C",
              "text": "+130.0%, puesto que el recaudo siempre se duplica con la inflación."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La fórmula matemática de variación porcentual es ((Valor Final - Valor Inicial) / Valor Inicial) * 100. En este caso: (1.200 / 4.000) * 100 = 30.0% de incremento real.",
            "distractors": [
              {
                "id": "B",
                "reason": "Resta directamente las cifras en miles de millones sin aplicar la relación sobre la base inicial."
              },
              {
                "id": "C",
                "reason": "130% sería el valor relativo total (1.3), pero la variación o incremento neto es exactamente el 30%."
              }
            ]
          }
        },
        {
          "id": 1005,
          "topic": "Confusión entre Correlación y Causalidad",
          "caseText": "Un analista observa que en los meses de diciembre aumenta la venta de helados en una ciudad costera y que simultáneamente se incrementan las solicitudes de devolución de saldos a favor en la DIAN. Concluye que 'el consumo de helados causa devoluciones tributarias'.",
          "statement": "El error de razonamiento analítico cometido en este informe corresponde a:",
          "options": [
            {
              "id": "A",
              "text": "Una falacia de causa falsa (confundir correlación estadística temporal con causalidad directa), ignorando que ambos fenómenos coinciden por una variable estacional de cierre de año."
            },
            {
              "id": "B",
              "text": "Una conclusión plenamente científica y comprobable mediante el Estatuto Tributario."
            },
            {
              "id": "C",
              "text": "Una infracción cambiaria de contrabando técnico de lácteos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Que dos variables se muevan simultáneamente (correlación) no demuestra que una sea causa de la otra. En el análisis público se debe demostrar el vínculo causal directo para evitar falacias lógicas.",
            "distractors": [
              {
                "id": "B",
                "reason": "La conclusión es manifiestamente ilógica y carece de todo rigor metodológico y sustantivo."
              },
              {
                "id": "C",
                "reason": "No guarda ninguna relación con figuras aduaneras de contrabando."
              }
            ]
          }
        },
        {
          "id": 1006,
          "topic": "Sesgo de Confirmación en Auditoría",
          "caseText": "Un auditor parte de la creencia personal de que una seccional específica comete fraude en el manejo de viáticos. Durante la auditoría ignora 40 soportes de gasto legítimos y resalta únicamente un comprobante con un error tipográfico en la fecha para sustentar su informe acusatorio.",
          "statement": "Esta distorsión del juicio profesional se denomina:",
          "options": [
            {
              "id": "A",
              "text": "Sesgo de Confirmación, al seleccionar y valorar únicamente las evidencias que corroboran el prejuicio previo del auditor, desestimando las pruebas objetivas contrarias."
            },
            {
              "id": "B",
              "text": "Principio de la duda razonable en materia fiscal."
            },
            {
              "id": "C",
              "text": "Aplicación estricta del marco COSO 2013 de auditoría pública."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El sesgo de confirmación destruye la objetividad del auditor, llevándolo a buscar e interpretar evidencias selectivas para encajar en su hipótesis previa, en lugar de evaluar de forma imparcial la totalidad del acervo documental.",
            "distractors": [
              {
                "id": "B",
                "reason": "La duda razonable protege al administrado ante la falta de certeza probatoria; no justifica la parcialidad acusatoria."
              },
              {
                "id": "C",
                "reason": "COSO 2013 exige objetividad, independencia e imparcialidad estricta, lo opuesto a sesgos cognitivos."
              }
            ]
          }
        },
        {
          "id": 1007,
          "topic": "Pruebas de Indicios en la Fiscalización",
          "caseText": "Un contribuyente declara que sus ingresos anuales fueron de $20 millones de pesos, pero se constata que en el mismo año adquirió tres vehículos de lujo en efectivo, viajó cinco veces a Europa en primera clase y tiene depósitos bancarios no justificados por $800 millones.",
          "statement": "Frente al análisis de indicios y la carga de la prueba en la DIAN, al profesional le corresponde inferir que:",
          "options": [
            {
              "id": "A",
              "text": "Existe una pluralidad de indicios graves, concordantes y convergentes que demuestran una ostensible omisión de ingresos gravables, justificando una investigación por inexactitud fiscal."
            },
            {
              "id": "B",
              "text": "La declaración debe ser aceptada como cierta sin verificación porque el contribuyente juró decir la verdad."
            },
            {
              "id": "C",
              "text": "Los vehículos y viajes deben ser confiscados de inmediato por el auditor sin iniciar proceso de fiscalización."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La prueba indiciaria (Art. 752 Estatuto Tributario y CGP) permite inferir lógicamente el hecho desconocido (ingresos ocultos) a partir de hechos indicadores plenamente acreditados (gastos e incrementos patrimoniales no justificados).",
            "distractors": [
              {
                "id": "B",
                "reason": "La presunción de veracidad de las declaraciones tributarias es desvirtuable mediante pruebas e indicios de inexactitud."
              },
              {
                "id": "C",
                "reason": "La DIAN debe iniciar el proceso formal de fiscalización y determinación tributaria garantizando el debido proceso; no confisca de hecho bienes particulares."
              }
            ]
          }
        },
        {
          "id": 1008,
          "topic": "Promedio Ponderado en Indicadores Agregados",
          "caseText": "La meta de recaudo nacional se compone de dos Seccionales: Seccional A (aporta el 80% del recaudo y cumplió al 90%) y Seccional B (aporta el 20% del recaudo y cumplió al 70%).",
          "statement": "El cumplimiento ponderado consolidado a nivel nacional fue de:",
          "options": [
            {
              "id": "A",
              "text": "86.0%, calculado como (0.80 * 90) + (0.20 * 70) = 72 + 14 = 86%."
            },
            {
              "id": "B",
              "text": "80.0%, haciendo un promedio aritmético simple ((90 + 70) / 2)."
            },
            {
              "id": "C",
              "text": "160.0%, sumando los dos porcentajes directamente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la evaluación de metas con pesos diferentes, el cálculo correcto es el promedio ponderado: (0.80 * 90) + (0.20 * 70) = 72 + 14 = 86%. Usar promedio simple distorsionaría el resultado al no considerar que la Seccional A tiene un peso cuatro veces mayor.",
            "distractors": [
              {
                "id": "B",
                "reason": "El promedio aritmético simple solo es válido si ambas seccionales tuvieran el mismo peso específico (50%-50%)."
              },
              {
                "id": "C",
                "reason": "Sumar porcentajes directamente viola los principios elementales del cálculo matemático de gestión."
              }
            ]
          }
        },
        {
          "id": 1009,
          "topic": "Lógica Proposicional: Falacia de Negación del Antecedente",
          "caseText": "Un analista formula el argumento: 'Si un contribuyente comete contrabando aduanero, entonces se le impone una sanción de decomiso. Como a este contribuyente NO se le imputó contrabando aduanero, por lo tanto es imposible que se le aplique ninguna sanción de decomiso'.",
          "statement": "Analizando la validez lógica del argumento, el razonamiento es incorrecto porque:",
          "options": [
            {
              "id": "A",
              "text": "Incurre en la falacia formal de negación del antecedente, ya que el decomiso puede proceder legítimamente por otras causales legales (ej. vencimiento de términos de permanencia en depósito)."
            },
            {
              "id": "B",
              "text": "Es un silogismo perfecto y matemáticamente irrefutable bajo cualquier ordenamiento jurídico."
            },
            {
              "id": "C",
              "text": "La palabra decomiso está prohibida en la lógica formal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la lógica formal ($P \to Q$), negar el antecedente ($\neg P$) no permite concluir válidamente la negación del consecuente ($\neg Q$), ya que el efecto ($Q$) puede derivarse de otras causas independientes previstas en la legislación aduanera.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es una conocida falacia lógica formal; no es un silogismo válido."
              },
              {
                "id": "C",
                "reason": "Los términos jurídicos son perfectamente aplicables al razonamiento y a la lógica proposicional."
              }
            ]
          }
        },
        {
          "id": 1010,
          "topic": "Análisis de Datos e Identificación de Valores Atípicos (Outliers)",
          "caseText": "En una tabla con 1.000 declaraciones de un mismo sector económico, el promedio de deducciones por compras es del 15% de los ingresos brutos, pero un contribuyente específico reporta deducciones del 98% con el mismo volumen de ventas.",
          "statement": "Al realizar la auditoría analítica de datos, al Gestor II le corresponde tratar este caso como:",
          "options": [
            {
              "id": "A",
              "text": "Un valor atípico (outlier) o anomalía estadística de alta significancia que amerita priorizar al contribuyente para fiscalización profunda e inspección contable."
            },
            {
              "id": "B",
              "text": "Una señal inequívoca de que la empresa es la más eficiente del país y debe ser premiada por la DIAN."
            },
            {
              "id": "C",
              "text": "Un dato normal que debe ser promediado con las demás declaraciones sin investigar."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En razonamiento analítico y ciencia de datos fiscales, un valor atípico que se desvía drásticamente del comportamiento promedio del sector constituye una bandera roja de riesgo de evasión o simulación de costos que exige auditoría focalizada.",
            "distractors": [
              {
                "id": "B",
                "reason": "Declarar un 98% de deducciones en sectores con margen histórico normal no es eficiencia; es indicio manifiesto de evasión o inexactitud."
              },
              {
                "id": "C",
                "reason": "Diluir una anomalía estadística grave en el promedio oculta riesgos críticos de pérdida de recaudo para el Estado."
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
    }
  ]
};
