# -*- coding: utf-8 -*-
"""
Banco de Preguntas PJS - Módulos Funcionales 6 a 11 (Gestor II - OPEC 236916)
10 preguntas por módulo = 60 preguntas de juicio situacional con sustento normativo.
"""

EXAMS_PART2 = {
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
                    { "id": "A", "text": "Una Unidad Administrativa Especial del orden nacional, con personería jurídica, autonomía administrativa y presupuestal, y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público." },
                    { "id": "B", "text": "Un departamento administrativo del nivel central que depende directamente de la Presidencia de la República." },
                    { "id": "C", "text": "Una empresa industrial y comercial del Estado regulada íntegramente por el derecho privado." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 1 del Decreto 1742 de 2020 define a la UAE DIAN como una entidad con personería jurídica, autonomía administrativa y presupuestal, adscrita al Ministerio de Hacienda y Crédito Público.",
                    "distractors": [
                        { "id": "B", "reason": "La DIAN no es un departamento administrativo; es una Unidad Administrativa Especial adscrita a un ministerio." },
                        { "id": "C", "reason": "La DIAN ejerce potestades de autoridad pública tributaria y aduanera, no actividades industriales o mercantiles de derecho privado." }
                    ]
                }
            },
            {
                "id": 602,
                "topic": "Dirección de Gestión Estratégica y Analítica",
                "caseText": "La Dirección General requiere diseñar un modelo analítico de analítica predictiva para anticipar esquemas de evasión de IVA a partir de millones de facturas electrónicas.",
                "statement": "Dentro de la estructura orgánica del Decreto 1742 de 2020, la dependencia competente para liderar el modelado de riesgos y la ciencia de datos es:",
                "options": [
                    { "id": "A", "text": "La Dirección de Gestión Estratégica y Analítica, responsable de la analítica avanzada, los modelos de riesgo institucional y la planeación estratégica." },
                    { "id": "B", "text": "La Dirección de Gestión Corporativa a través de la oficina de servicios generales." },
                    { "id": "C", "text": "La Defensoría del Contribuyente y del Usuario Aduanero." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1742 de 2020 creó la Dirección de Gestión Estratégica y Analítica para dotar a la DIAN de capacidades avanzadas de modelado analítico de riesgos, big data y direccionamiento estratégico institucional.",
                    "distractors": [
                        { "id": "B", "reason": "Gestión Corporativa administra el talento humano, compras y recursos físicos, no la ciencia de datos misional." },
                        { "id": "C", "reason": "La Defensoría vela por los derechos de los contribuyentes, no diseña los algoritmos de fiscalización." }
                    ]
                }
            },
            {
                "id": 603,
                "topic": "Dirección de Gestión Jurídica y Doctrina Vinculante",
                "caseText": "Dos Direcciones Seccionales aplican interpretaciones opuestas sobre la exención de IVA en la importación de maquinaria pesada, generando incertidumbre y quejas entre los contribuyentes.",
                "statement": "Para unificar de manera definitiva y vinculante la interpretación jurídica en toda la DIAN, el acto que procede es:",
                "options": [
                    { "id": "A", "text": "La expedición de un Concepto Jurídico Unificado por parte de la Dirección de Gestión Jurídica, el cual constituye doctrina oficial de obligatorio cumplimiento para todos los funcionarios de la entidad." },
                    { "id": "B", "text": "Una reunión informal por chat entre los dos directores seccionales para llegar a un acuerdo verbal transitorio." },
                    { "id": "C", "text": "Dejar que cada seccional continúe aplicando su propio criterio de acuerdo con el principio de desconcentración absoluta." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Dirección de Gestión Jurídica de la DIAN tiene la facultad exclusiva de fijar la doctrina oficial vinculante en materia tributaria, aduanera y cambiaria mediante Conceptos que obligan a toda la entidad (Art. 131 Ley 2010 de 2019).",
                    "distractors": [
                        { "id": "B", "reason": "La doctrina oficial exige rigor técnico y formalización jurídica mediante acto oficial publicado, no acuerdos informales." },
                        { "id": "C", "reason": "La desconcentración no autoriza la anarquía jurídica ni la vulneración del principio constitucional de igualdad en la aplicación de la ley tributaria." }
                    ]
                }
            },
            {
                "id": 604,
                "topic": "Nivel Desconcentrado: Seccionales de Grandes Contribuyentes e Impuestos",
                "caseText": "Un gran contribuyente con domicilio fiscal en Medellín formula una petición relacionada con su declaración de renta ante una Seccional Delegada de bajo rango.",
                "statement": "Al revisar la competencia territorial y funcional bajo el Decreto 1742 de 2020, al profesional le corresponde orientar que:",
                "options": [
                    { "id": "A", "text": "El expediente debe ser remitido a la Dirección Seccional competente para Grandes Contribuyentes, de acuerdo con la resolución de asignación y calificación periódica de la DIAN." },
                    { "id": "B", "text": "La seccional delegada debe resolver el trámite sin importar la calificación del contribuyente, en virtud del principio de gratuidad." },
                    { "id": "C", "text": "El contribuyente debe esperar a que el Congreso de la República apruebe una ley para determinar qué oficina lo atiende." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La DIAN cuenta con una Dirección Seccional especializada en Grandes Contribuyentes y reglas de competencia territorial y por tipo de contribuyente que delimitan la competencia legal de cada seccional.",
                    "distractors": [
                        { "id": "B", "reason": "Actuar sin competencia legal vicia de nulidad absoluta las actuaciones administrativas tributarias." },
                        { "id": "C", "reason": "La competencia interna se fija por resolución reglamentaria de la DIAN conforme a la ley, no por leyes individuales del Congreso." }
                    ]
                }
            },
            {
                "id": 605,
                "topic": "Dirección de Gestión Corporativa y Políticas de Talento Humano",
                "caseText": "Se requiere estructurar el Plan Institucional de Capacitación (PIC) y el Plan de Bienestar y Estímulos para los servidores de la DIAN alineados a la Resolución 065 de 2024.",
                "statement": "La Dirección de Gestión del Nivel Central encargada de liderar estas políticas de MIPG es:",
                "options": [
                    { "id": "A", "text": "La Dirección de Gestión Corporativa, a través de la Subdirección de Talento Humano y la Escuela de la DIAN." },
                    { "id": "B", "text": "La Dirección de Gestión de Aduanas mediante operativos de decomiso en puertos." },
                    { "id": "C", "text": "La Dirección de Gestión de Fiscalización a través de requerimientos especiales tributarios." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Dirección de Gestión Corporativa es la encargada de la administración del talento humano, bienestar, capacitación y recursos físicos de la entidad, coordinando la Política de Talento Humano de MIPG.",
                    "distractors": [
                        { "id": "B", "reason": "Aduanas es un área puramente misional operativa de control de comercio exterior." },
                        { "id": "C", "reason": "Fiscalización se encarga de la investigación y determinación tributaria, no de la gestión de talento humano interno." }
                    ]
                }
            },
            {
                "id": 606,
                "topic": "Oficina de Seguridad de la Información en la DIAN",
                "caseText": "Un área técnica propone interconectar una base de datos con información de declaraciones de renta a una aplicación de consulta pública no certificada en la nube.",
                "statement": "Para garantizar el cumplimiento de las políticas de seguridad digital de MIPG y la reserva legal, la dependencia interna que debe avalar previamente esta integración es:",
                "options": [
                    { "id": "A", "text": "La Oficina de Seguridad de la Información, encargada de vigilar las políticas de ciberseguridad, confidencialidad, integridad y protección de la reserva tributaria." },
                    { "id": "B", "text": "La Subdirección de Correspondencia y Mensajería Física." },
                    { "id": "C", "text": "El sindicato mayoritario de servidores públicos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1742 de 2020 asigna a la Oficina de Seguridad de la Información la gobernanza, supervisión de riesgos cibernéticos y aseguramiento de la reserva y confidencialidad de los activos de datos institucionales.",
                    "distractors": [
                        { "id": "B", "reason": "Correspondencia maneja radicación postal física, no ciberseguridad de bases de datos." },
                        { "id": "C", "reason": "Las organizaciones sindicales defienden derechos laborales de los trabajadores, no administran la arquitectura de seguridad tecnológica." }
                    ]
                }
            },
            {
                "id": 607,
                "topic": "Dirección de Gestión de Fiscalización",
                "caseText": "Se diseña una campaña nacional para detectar operaciones fraudulentas de IVA mediante facturación electrónica ficticia.",
                "statement": "La Dirección del Nivel Central competente para impartir las directrices operativas de auditoría a nivel nacional en esta materia es:",
                "options": [
                    { "id": "A", "text": "La Dirección de Gestión de Fiscalización, competente para planear, dirigir y controlar las acciones de control tributario, aduanero y cambiario preventivo y posterior." },
                    { "id": "B", "text": "La Dirección de Gestión de Innovación y Tecnología exclusivamente para labores de cableado estructurado." },
                    { "id": "C", "text": "La Oficina de Control Disciplinario Interno contra los contribuyentes morosos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Dirección de Gestión de Fiscalización tiene la función de diseñar, orientar y evaluar los programas de investigación tributaria, aduanera y cambiaria para combatir la elusión, la evasión y el contrabando.",
                    "distractors": [
                        { "id": "B", "reason": "Tecnología provee la plataforma informática, pero la estrategia de fiscalización la define la Dirección de Fiscalización." },
                        { "id": "C", "reason": "Control Disciplinario investiga a servidores públicos de la entidad, no a los contribuyentes particulares." }
                    ]
                }
            },
            {
                "id": 608,
                "topic": "Comité Institucional de Gestión y Desempeño en la DIAN",
                "caseText": "La DIAN debe aprobar formalmente su Plan Estratégico Institucional cuatrienal y las metas del Plan de Acción Anual que integran las 19 políticas de MIPG.",
                "statement": "De acuerdo con el Decreto 1499 de 2017 y la normativa interna, la máxima instancia institucional encargada de aprobar estos instrumentos es:",
                "options": [
                    { "id": "A", "text": "El Comité Institucional de Gestión y Desempeño, presidido por el Director General e integrado por los Directores de Gestión de la entidad." },
                    { "id": "B", "text": "Una asamblea general de todos los contribuyentes inscritos en el RUT." },
                    { "id": "C", "text": "La Junta Directiva del Banco de la República." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Comité Institucional de Gestión y Desempeño es el órgano colegiado de más alto nivel encargado de definir, coordinar y aprobar las directrices de planeación estratégica, planes de acción y políticas de MIPG en la entidad.",
                    "distractors": [
                        { "id": "B", "reason": "No existe la figura de asamblea general de contribuyentes para aprobar planes de gestión de la DIAN." },
                        { "id": "C", "reason": "El Banco de la República fija la política monetaria y cambiaria general del país, no aprueba los planes de gestión interna de la DIAN." }
                    ]
                }
            },
            {
                "id": 609,
                "topic": "Coordinación entre Nivel Central y Nivel Desconcentrado",
                "caseText": "Un Director Seccional decide ignorar una directriz nacional sobre priorización de auditorías tributarias aduciendo que su seccional tiene 'autonomía de política fiscal'.",
                "statement": "Frente a este argumento, a la luz del Decreto 1742 de 2020 y la Ley 489 de 1998, al Gestor II le corresponde señalar que:",
                "options": [
                    { "id": "A", "text": "El argumento es jurídicamente erróneo, puesto que las Direcciones Seccionales operan bajo el principio de desconcentración administrativa y jerarquía, estando subordinadas a las directrices de política del Nivel Central." },
                    { "id": "B", "text": "El argumento es válido, ya que cada municipio de Colombia tiene soberanía tributaria independiente sobre los impuestos nacionales." },
                    { "id": "C", "text": "El Nivel Central solo tiene funciones consultivas sin facultad vinculante sobre las seccionales." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la desconcentración administrativa no hay autonomía de política; la política pública tributaria se fija de manera centralizada y unitaria en el Nivel Central, y las seccionales son ejecutoras desconcentradas obligadas a cumplir las directrices nacionales.",
                    "distractors": [
                        { "id": "B", "reason": "Los impuestos administrados por la DIAN son nacionales, no locales, y su política es unitaria en todo el país." },
                        { "id": "C", "reason": "El Director General y las Direcciones de Gestión del Nivel Central tienen mando jerárquico vinculante sobre todo el territorio nacional." }
                    ]
                }
            },
            {
                "id": 610,
                "topic": "Defensoría del Contribuyente y del Usuario Aduanero",
                "caseText": "Un usuario denuncia que en una seccional se le están exigiendo requisitos no previstos en la ley para la entrega de una mercancía en trámite de importación y solicita la intervención de un órgano imparcial de protección de derechos dentro de la entidad.",
                "statement": "La dependencia especializada dentro de la estructura de la DIAN encargada de velar por el respeto de los derechos de los usuarios y garantizar la debida atención es:",
                "options": [
                    { "id": "A", "text": "La Defensoría del Contribuyente y del Usuario Aduanero, órgano especial que actúa con autonomía para garantizar los derechos y resolver controversias de los usuarios." },
                    { "id": "B", "text": "El área de seguridad y vigilancia física del edificio." },
                    { "id": "C", "text": "La Subdirección de Compras y Contratación Pública." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Defensoría del Contribuyente y del Usuario Aduanero es la instancia creada para tutelar y garantizar los derechos de los ciudadanos frente a la administración tributaria y aduanera, interviniendo ante arbitrariedades o trabas injustificadas.",
                    "distractors": [
                        { "id": "B", "reason": "Seguridad física custodia los accesos del inmueble, no tutela derechos constitucionales de los administrados." },
                        { "id": "C", "reason": "Compras y Contratación maneja licitaciones públicas internas, no la defensa de contribuyentes." }
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
                    { "id": "A", "text": "87.5%, calculado como (1.050 / 1.200) * 100, ubicándose en un rango de alerta o cumplimiento parcial." },
                    { "id": "B", "text": "114.2%, puesto que cualquier avance semestral se multiplica por el factor de corrección de UVT." },
                    { "id": "C", "text": "50.0%, dado que solo se cuentan los expedientes en los que se logró el remate físico de bienes." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La eficacia se calcula matemáticamente como (Resultado Real / Meta Programada) * 100. En este caso: (1.050 / 1.200) * 100 = 87.5%, lo que sitúa al indicador en rango amarillo (entre 70% y 89%).",
                    "distractors": [
                        { "id": "B", "reason": "El cálculo invierte la fórmula y confunde unidades de valor tributario con porcentaje de cumplimiento de metas." },
                        { "id": "C", "reason": "La gestión de cobro incluye acuerdos de pago y archivo por cobro efectivo, no únicamente el remate de bienes." }
                    ]
                }
            },
            {
                "id": 702,
                "topic": "Indicadores de Producto vs. Indicadores de Resultado",
                "caseText": "Se evalúan dos indicadores: (1) 'Número de visitas de auditoría a establecimientos comerciales realizadas' y (2) 'Tasa de reducción de la omisión en la declaración bimestral de IVA en el sector fiscalizado'.",
                "statement": "Técnicamente, en la cadena de valor de MIPG, estos dos indicadores corresponden respectivamente a:",
                "options": [
                    { "id": "A", "text": "Un indicador de Producto (el bien o servicio directo generado: las visitas ejecutadas) y un indicador de Resultado (el cambio o impacto deseado en la conducta de cumplimiento del contribuyente)." },
                    { "id": "B", "text": "Ambos son indicadores de insumo financiero." },
                    { "id": "C", "text": "El primero es de impacto social macroeconómico y el segundo es un indicador de proceso rutinario." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El número de visitas es un producto directo de la actividad administrativa; la reducción de la omisión fiscal refleja el resultado o cambio efectivo logrado en la conducta tributaria de la población auditada.",
                    "distractors": [
                        { "id": "B", "reason": "Ninguno mide recursos monetarios de entrada (insumo), sino bienes entregados y efectos logrados." },
                        { "id": "C", "reason": "El número de visitas no es impacto macroeconómico; es un producto intermedio directo." }
                    ]
                }
            },
            {
                "id": 703,
                "topic": "Cálculo e Interpretación de Eficiencia",
                "caseText": "Un equipo de digitalización de RUT invirtió 50 horas de trabajo y $2.000.000 para digitalizar 1.000 expedientes, logrando un costo unitario de $2.000 por expediente frente al estándar nacional de $3.500.",
                "statement": "Al interpretar esta métrica, al profesional le corresponde destacar que el equipo demostró:",
                "options": [
                    { "id": "A", "text": "Alta eficiencia, puesto que optimizó la relación entre los recursos económicos y de tiempo consumidos y el volumen de productos entregados." },
                    { "id": "B", "text": "Incompetencia administrativa, ya que en el sector público está prohibido gastar menos dinero del programado inicialmente." },
                    { "id": "C", "text": "Eficacia nula, ya que la eficiencia invalida el logro de metas de gestión." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La eficiencia mide el rendimiento de los recursos insumidos frente a los productos generados. Reducir el costo unitario por debajo del estándar manteniendo la calidad es el reflejo óptimo de eficiencia pública.",
                    "distractors": [
                        { "id": "B", "reason": "El ahorro y la austeridad del gasto público son deberes de ley, no faltas administrativas." },
                        { "id": "C", "reason": "La eficiencia complementa y potencia la eficacia; no la anula." }
                    ]
                }
            },
            {
                "id": 704,
                "topic": "Semaforización de Indicadores (Verde, Amarillo, Rojo)",
                "caseText": "En el tablero de seguimiento a metas institucionales de la DIAN, un indicador de oportunidad en devoluciones tributarias alcanza un 64% de cumplimiento al cierre del trimestre.",
                "statement": "Según la escala estándar de semaforización del DAFP y los manuales de planeación, el estado y acción procedente es:",
                "options": [
                    { "id": "A", "text": "🔴 Rojo (Crítico / Incumplido, por ser inferior al 70%), exigiendo la formulación inmediata de un plan de choque con acciones correctivas sobre las causas raíz." },
                    { "id": "B", "text": "🟢 Verde (Satisfactorio), puesto que se superó el 50% de la meta." },
                    { "id": "C", "text": "Eliminar el indicador del tablero para no afectar el promedio de la dirección seccional." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la semaforización oficial de gestión pública, cumplimientos inferiores al 70% se ubican en rango rojo crítico, lo cual activa alertas a la alta dirección y la formulación obligatoria de acciones de mejora inmediatas.",
                    "distractors": [
                        { "id": "B", "reason": "El 64% es deficiente; el rango verde exige habitualmente un cumplimiento igual o superior al 90%." },
                        { "id": "C", "reason": "Borrar indicadores con bajo desempeño es una práctica de ocultamiento contraria a la integridad y al MIPG." }
                    ]
                }
            },
            {
                "id": 705,
                "topic": "Elementos de la Ficha Técnica del Indicador",
                "caseText": "Un área propone medir la 'calidad de la atención al contribuyente' formulando el indicador: 'Percepción general positiva', pero no define fórmula matemática, ni fuente de datos, ni periodicidad de recolección.",
                "statement": "Para estructurar adecuadamente la Ficha Técnica conforme a la Guía DAFP/DNP, al Gestor II le corresponde exigir:",
                "options": [
                    { "id": "A", "text": "La definición unívoca de la fórmula de cálculo, las variables que la componen, la unidad de medida, la periodicidad, la fuente de verificación y la línea base histórica." },
                    { "id": "B", "text": "Únicamente una fotografía del jefe del área con el uniforme institucional." },
                    { "id": "C", "text": "Un compromiso verbal del contratista de aseo sobre la limpieza de la sala de espera." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ficha Técnica u Hoja de Vida del indicador exige rigor metodológico: fórmula matemática, variables cuantificables, fuentes de información comprobables, periodicidad y línea base para evitar subjetividades.",
                    "distractors": [
                        { "id": "B", "reason": "Elementos visuales o de imagen personal no aportan rigor a la medición de gestión." },
                        { "id": "C", "reason": "Compromisos verbales carecen de validez probatoria y no estructuran un indicador técnico de calidad." }
                    ]
                }
            },
            {
                "id": 706,
                "topic": "Concepto de Línea Base",
                "caseText": "Al diseñar un indicador para reducir el tiempo de respuesta a consultas jurídicas tributarias, el equipo debate qué valor utilizar como punto de partida para evaluar si hubo avance en la vigencia.",
                "statement": "En la metodología de indicadores del Estado colombiano, este punto de referencia cuantitativo inicial se denomina:",
                "options": [
                    { "id": "A", "text": "Línea Base, la cual registra el valor histórico del indicador antes del inicio de las acciones de mejora programadas." },
                    { "id": "B", "text": "Margen de error muestral con corrección por inflación." },
                    { "id": "C", "text": "Presupuesto máximo de contratación de consultoría." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Línea Base es el valor cuantitativo de partida que describe el estado inicial de un fenómeno o proceso, contra el cual se miden los avances reales derivados de la gestión posterior.",
                    "distractors": [
                        { "id": "B", "reason": "El margen de error es un concepto de inferencia estadística, no el valor de partida de un proceso de gestión." },
                        { "id": "C", "reason": "El presupuesto es un insumo financiero, no el punto de referencia de desempeño de un indicador." }
                    ]
                }
            },
            {
                "id": 707,
                "topic": "Indicadores de Economía en la Gestión Pública",
                "caseText": "La DIAN suscribe un acuerdo marco de precios para adquirir licencias de software logrando un descuento del 35% respecto a los precios de lista del mercado comercial para las mismas especificaciones técnicas.",
                "statement": "Este resultado refleja directamente la dimensión de desempeño de:",
                "options": [
                    { "id": "A", "text": "Economía, al maximizar el poder de compra del Estado adquiriendo insumos y recursos al menor costo posible con los estándares de calidad requeridos." },
                    { "id": "B", "text": "Efectividad macroeconómica sobre el índice de pobreza multidimensional." },
                    { "id": "C", "text": "Autocontrol disciplinario de los servidores sindicalizados." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La dimensión de Economía mide la capacidad de la administración para adquirir los recursos financieros, humanos y materiales en las condiciones más favorables de costo, oportunidad y calidad para el erario público.",
                    "distractors": [
                        { "id": "B", "reason": "La compra de software de TI no mide de forma directa la pobreza multidimensional del país." },
                        { "id": "C", "reason": "No guarda relación con procedimientos disciplinarios ni organizaciones sindicales." }
                    ]
                }
            },
            {
                "id": 708,
                "topic": "Indicador de Efectividad (Impacto Integrado)",
                "caseText": "Un programa de fiscalización masiva demostró 100% de eficacia en visitas realizadas y bajo costo operativo (alta eficiencia), pero no logró incrementar el recaudo tributario ni reducir la evasión en el sector intervenido.",
                "statement": "Al emitir la evaluación global del programa, al Gestor II le corresponde conceptuar que:",
                "options": [
                    { "id": "A", "text": "El programa fue eficaz y eficiente operativamente, pero careció de Efectividad, dado que no logró el impacto final esperado en el recaudo y en la reducción de la evasión." },
                    { "id": "B", "text": "El programa fue completamente efectivo, puesto que la eficacia operativa exime de evaluar el recaudo real." },
                    { "id": "C", "text": "Las metas tributarias no tienen relación con los programas de fiscalización de la DIAN." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La efectividad es el grado en que se logran los impactos y objetivos de fondo. Si un programa cumple todas las tareas a bajo costo pero no resuelve el problema misional (recaudo y evasión), carece de efectividad.",
                    "distractors": [
                        { "id": "B", "reason": "La efectividad requiere validar el impacto de fondo, no solo el cumplimiento de tareas formales." },
                        { "id": "C", "reason": "El fin primordial de la fiscalización tributaria es precisamente garantizar el recaudo y combatir la evasión fiscal." }
                    ]
                }
            },
            {
                "id": 709,
                "topic": "Errores Comunes en la Formulación de Indicadores",
                "caseText": "Una seccional propone el siguiente indicador: 'Porcentaje de cumplimiento de la norma aduanera vigente'. Al revisar la fórmula se encuentra: 'Número de leyes aduaneras leídas / Total de leyes publicadas * 100'.",
                "statement": "La falencia metodológica crítica de este indicador radica en que:",
                "options": [
                    { "id": "A", "text": "Mide una actividad interna irrelevante de lectura que no refleja en modo alguno la calidad ni el cumplimiento real de la operación aduanera en el territorio." },
                    { "id": "B", "text": "La fórmula debió expresarse en salarios mínimos y no en porcentaje numérico." },
                    { "id": "C", "text": "El indicador es perfecto pero solo debe ser medido por el Director General en persona." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Un indicador debe tener pertinencia y medir variables que agreguen valor a la gestión. El conteo de normas leídas es una actividad doméstica banal que no mide el grado real de cumplimiento aduanero.",
                    "distractors": [
                        { "id": "B", "reason": "Los porcentajes son unidades de medida válidas; la falla está en el objeto y la pertinencia de la variable medida." },
                        { "id": "C", "reason": "El indicador adolece de un error conceptual estructural en su formulación matemática y lógica." }
                    ]
                }
            },
            {
                "id": 710,
                "topic": "Periodicidad y Oportunidad en el Reporte de Indicadores",
                "caseText": "Un indicador de riesgos aduaneros de frontera se configuró con periodicidad de reporte bianual (cada dos años), lo que impide a los directores seccionales tomar decisiones ante picos estacionales de contrabando.",
                "statement": "Para mejorar la utilidad de este indicador en la toma de decisiones, la recomendación técnica procedente es:",
                "options": [
                    { "id": "A", "text": "Ajustar la periodicidad de medición a cortes mensuales o trimestrales que permitan emitir alertas tempranas y adoptar correctivos tácticos oportunos." },
                    { "id": "B", "text": "Aumentar la periodicidad a diez años para evitar fatiga en la recolección de datos." },
                    { "id": "C", "text": "Eliminar la medición de riesgos de frontera y basar las decisiones exclusivamente en la intuición de los guardias." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La periodicidad debe ser coherente con la dinámica del proceso y la velocidad requerida para la toma de decisiones. En riesgos operativos de contrabando, un reporte bianual es completamente extemporáneo e inútil.",
                    "distractors": [
                        { "id": "B", "reason": "Diez años es un horizonte de largo plazo prospectivo, no de control de gestión operativo." },
                        { "id": "C", "reason": "La intuición sin datos desconoce el principio de toma de decisiones basada en evidencia de MIPG." }
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
                    { "id": "A", "text": "Es el Formulario Único de Reporte y Avance de Gestión, una herramienta web obligatoria con carácter de declaración oficial respaldada en evidencias documentales verificables." },
                    { "id": "B", "text": "Es un cuestionario voluntario y confidencial que solo aplican los hospitales de tercer nivel." },
                    { "id": "C", "text": "Es un examen académico individual que deben presentar todos los servidores de carrera para no ser desvinculados." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El FURAG es la herramienta oficial del DAFP mediante la cual se captura la información periódica y verificable sobre la implementación del MIPG en el Estado, teniendo carácter de declaración oficial institucional.",
                    "distractors": [
                        { "id": "B", "reason": "El FURAG es de obligatorio diligenciamiento para todas las entidades públicas del orden nacional y territorial." },
                        { "id": "C", "reason": "Mide el desempeño de la entidad, no la permanencia laboral de servidores individuales." }
                    ]
                }
            },
            {
                "id": 802,
                "topic": "El Índice de Desempeño Institucional (IDI)",
                "caseText": "La DIAN obtiene un Índice de Desempeño Institucional (IDI) de 86.4 puntos en el reporte anual del DAFP. Un asesor sugiere celebrar el resultado y archivar los informes detallados sin mayor trámite.",
                "statement": "Desde la perspectiva gerencial del MIPG y el rol del Gestor II, la conducta procedente frente al IDI es:",
                "options": [
                    { "id": "A", "text": "Desagregar el puntaje por dimensiones y políticas, identificar las brechas específicas en las áreas que obtuvieron menor calificación y estructurar el Plan de Cierre de Brechas." },
                    { "id": "B", "text": "Publicar el puntaje en periódicos y ordenar un día cívico remunerado sin analizar las debilidades institucionales." },
                    { "id": "C", "text": "Impugnar la calificación ante un juzgado penal por considerar que cualquier nota inferior a 100 puntos es difamatoria." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El valor del IDI radica en su uso analítico para la mejora continua. Se deben desglosar las 7 dimensiones y 19 políticas para focalizar recursos y acciones correctivas en aquellas con rezagos o brechas críticas.",
                    "distractors": [
                        { "id": "B", "reason": "El propósito del IDI no es la autocomplacencia mediática, sino orientar la planeación y el cierre de brechas." },
                        { "id": "C", "reason": "El IDI es un índice estadístico técnico oficial; no constituye un delito penal susceptible de tutela o demanda." }
                    ]
                }
            },
            {
                "id": 803,
                "topic": "Validación de Evidencias en el FURAG",
                "caseText": "Al revisar las respuestas cargadas al FURAG en la política de Gestión Documental, el auditor detecta que el área respondió 'Sí' a la existencia de un Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA), pero el enlace adjunto está roto y no existe acto administrativo de adopción.",
                "statement": "Frente a esta situación, la acción que corresponde al equipo de planeación es:",
                "options": [
                    { "id": "A", "text": "Corregir el reporte conforme a la realidad fáctica y priorizar la implementación real del SGDEA, puesto que el DAFP y los líderes de política validan y castigan reportes sin sustento probatorio." },
                    { "id": "B", "text": "Mantener la respuesta afirmativa confiando en que los auditores del DAFP nunca hacen clic en los enlaces probatorios." },
                    { "id": "C", "text": "Crear un documento de Word falso en un computador personal para subirlo de afán a la plataforma." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La integridad y veracidad del FURAG son auditables por el DAFP y el Archivo General de la Nación. Reportar falsedades o afirmaciones sin soporte viola la Ley 1712 de 2014 y el Código de Integridad institucional.",
                    "distractors": [
                        { "id": "B", "reason": "El DAFP aplica muestreos y validaciones automáticas y manuales sobre las evidencias cargadas." },
                        { "id": "C", "reason": "Elaborar documentos ficticios constituye falsedad material e ideológica en documento público, sancionable penalmente." }
                    ]
                }
            },
            {
                "id": 804,
                "topic": "Estructura del Plan de Cierre de Brechas",
                "caseText": "En el informe del IDI, la política de Seguridad Digital de la entidad obtuvo una calificación crítica de 52.0 puntos debido a la falta de planes de contingencia (BCP/DRP) frente a ciberataques.",
                "statement": "Para estructurar un Plan de Cierre de Brechas efectivo, al Gestor II le corresponde asegurar que el plan contenga:",
                "options": [
                    { "id": "A", "text": "Acciones concretas orientadas a subsanar la causa raíz, con responsables definidos de nivel directivo, cronograma de hitos, asignación de presupuesto y metas verificables." },
                    { "id": "B", "text": "Una carta de disculpas firmada por todos los empleados de la Dirección de Gestión de Innovación y Tecnología." },
                    { "id": "C", "text": "La orden de apagar todos los computadores de la DIAN a nivel nacional durante seis meses." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Un Plan de Cierre de Brechas de MIPG debe cumplir el estándar de proyectos: metas SMART, responsables institucionales asignados, recursos presupuestales articulados al Plan de Acción y cronograma de seguimiento bimensual.",
                    "distractors": [
                        { "id": "B", "reason": "Las cartas de disculpas no resuelven las vulnerabilidades técnicas ni cierran las brechas de política pública." },
                        { "id": "C", "reason": "Paralizar la administración tributaria atenta contra el recaudo nacional y la seguridad fiscal del Estado." }
                    ]
                }
            },
            {
                "id": 805,
                "topic": "Periodicidad y Ciclo de Captura del FURAG",
                "caseText": "Un nuevo funcionario pregunta en qué fecha se diligencia el FURAG y qué período de gestión institucional evalúa.",
                "statement": "La respuesta correcta con base en el cronograma institucional del DAFP es:",
                "options": [
                    { "id": "A", "text": "Se diligencia anualmente durante el primer semestre de cada año (febrero a abril), evaluando la gestión y el desempeño ejecutado durante la vigencia inmediatamente anterior." },
                    { "id": "B", "text": "Se diligencia diariamente cada mañana al marcar el ingreso biométrico de la jornada laboral." },
                    { "id": "C", "text": "Se aplica una vez cada cuatro años únicamente cuando hay cambio de Presidente de la República." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El ciclo de medición de FURAG es anual; en los primeros meses de cada vigencia las entidades del Estado reportan las evidencias y avances del año inmediatamente anterior para la consolidación del IDI nacional.",
                    "distractors": [
                        { "id": "B", "reason": "El registro de asistencia biométrica no tiene ninguna relación con la captura del formulario FURAG." },
                        { "id": "C", "reason": "La evaluación del desempeño institucional es continua y anual, no cuatrienal ni coyuntural a elecciones." }
                    ]
                }
            },
            {
                "id": 806,
                "topic": "Entidades Líderes de Política en MIPG",
                "caseText": "Al revisar las políticas de MIPG evaluadas en FURAG, se identifica la necesidad de clasificar las entidades nacionales rectoras que emiten los lineamientos oficiales.",
                "statement": "La asociación correcta entre política y entidad líder del orden nacional es:",
                "options": [
                    { "id": "A", "text": "Gestión Estratégica del Talento Humano (DAFP), Gobierno Digital (MinTIC), Gestión Documental (Archivo General de la Nación) y Gestión Presupuestal (MinHacienda / DNP)." },
                    { "id": "B", "text": "Todas las 19 políticas son lideradas exclusivamente por la Fiscalía General de la Nación." },
                    { "id": "C", "text": "Las políticas no tienen líderes de orden nacional; cada municipio define sus propias reglas de manera autónoma." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1499 de 2017 asigna la rectoría de cada política a un organismo técnico del nivel central: DAFP (Talento Humano, MIPG, Control Interno), MinTIC (Gobierno Digital), AGN (Gestión Documental), MinHacienda (Presupuesto).",
                    "distractors": [
                        { "id": "B", "reason": "La Fiscalía es un órgano judicial de investigación penal, no el rector administrativo de las políticas de gestión pública." },
                        { "id": "C", "reason": "El MIPG es un modelo unitario del orden nacional con rectores sectoriales especializados para todo el Estado." }
                    ]
                }
            },
            {
                "id": 807,
                "topic": "Percentiles de Desempeño Sectorial y Territorial",
                "caseText": "En el reporte de resultados, la DIAN se ubica en el percentil 92 de las entidades del Sector Hacienda, pero en la política de Servicio al Ciudadano se encuentra en el percentil 45.",
                "statement": "La interpretación analítica correcta de estos percentiles indica que:",
                "options": [
                    { "id": "A", "text": "En el consolidado global la entidad supera al 92% de las entidades del sector, pero en Servicio al Ciudadano está por debajo del promedio sectorial, requiriendo atención prioritaria en esa política específica." },
                    { "id": "B", "text": "El percentil 45 significa que el 45% de los funcionarios deben ser sancionados disciplinariamente sin fórmula de juicio." },
                    { "id": "C", "text": "Los percentiles no tienen relación con el desempeño y fueron calculados por error en el software del DAFP." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En estadística de desempeño, el percentil 92 indica que la entidad supera al 92% de sus pares sectoriales; el percentil 45 en una política concreta evidencia que está por debajo de la mediana, constituyendo una brecha institucional que demanda intervención.",
                    "distractors": [
                        { "id": "B", "reason": "Los percentiles describen el comportamiento relativo institucional, no sanciones disciplinarias a personas." },
                        { "id": "C", "reason": "El uso de percentiles es la metodología estadística estándar del DAFP para comparar desempeños entre entidades del mismo grupo homogéneo." }
                    ]
                }
            },
            {
                "id": 808,
                "topic": "Rol de la OCI en la Verificación del FURAG",
                "caseText": "Antes de enviar definitivamente el reporte de FURAG al DAFP, el Director General solicita a la Oficina de Control Interno que efectúe una verificación previa de la consistencia de las respuestas.",
                "statement": "Esta solicitud se enmarca adecuadamente dentro del rol de la OCI de:",
                "options": [
                    { "id": "A", "text": "Enfoque hacia la prevención y aseguramiento independiente, validando que las evidencias aportadas por las dependencias sean fidedignas y sustenten la realidad institucional." },
                    { "id": "B", "text": "Coadministración activa obligatoria mediante la firma de cheques de pago a los auditores externos." },
                    { "id": "C", "text": "Reemplazo de los líderes de proceso en el diligenciamiento de las preguntas de cada política." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La OCI, dentro de su rol asesor preventivo y de aseguramiento (Decreto 648/2017), puede revisar la consistencia y veracidad de los soportes que respaldan las declaraciones institucionales en el FURAG antes de su cierre definitivo.",
                    "distractors": [
                        { "id": "B", "reason": "Firmar pagos u ordenar gastos de tesorería es coadministración abierta expresamente prohibida a la OCI." },
                        { "id": "C", "reason": "Los líderes de proceso son los dueños de sus políticas y los encargados de responder y aportar sus evidencias." }
                    ]
                }
            },
            {
                "id": 809,
                "topic": "Monitoreo del Plan de Cierre de Brechas",
                "caseText": "El Plan de Cierre de Brechas de MIPG fue formulado hace ocho meses, pero ningún comité ha revisado sus avances y los líderes de proceso afirman desconocer el estado de las tareas.",
                "statement": "Para subsanar esta debilidad de control y gobernanza, al profesional Gestor II le corresponde:",
                "options": [
                    { "id": "A", "text": "Programar la presentación periódica del estado de avance en el Comité Institucional de Gestión y Desempeño, consolidando alertas sobre hitos vencidos e instando a los responsables a ejecutar las acciones." },
                    { "id": "B", "text": "Eliminar el plan de cierre de brechas y asumir que la entidad no tiene problemas de gestión." },
                    { "id": "C", "text": "Radicar una denuncia penal ante la Fiscalía contra todos los líderes de proceso por traición a la patria." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El seguimiento sistemático a través del Comité Institucional de Gestión y Desempeño garantiza el principio de rendición de cuentas interna y permite tomar decisiones oportunas ante incumplimientos de metas del plan de cierre de brechas.",
                    "distractors": [
                        { "id": "B", "reason": "Ignorar las fallas perpetúa el bajo desempeño institucional y empeora los resultados de la siguiente vigencia." },
                        { "id": "C", "reason": "El retraso en metas de gestión interna es una contingencia administrativa sujeta a comités de seguimiento, no el delito penal de traición a la patria." }
                    ]
                }
            },
            {
                "id": 810,
                "topic": "Impacto del IDI en la Confianza Ciudadana",
                "caseText": "En la rendición de cuentas pública, un líder comunal pregunta por qué a los ciudadanos debe importarles el puntaje del IDI obtenido por la DIAN.",
                "statement": "La explicación técnica y fundamentada que debe brindarse es:",
                "options": [
                    { "id": "A", "text": "Porque el IDI mide de forma objetiva la capacidad institucional de la DIAN para usar con probidad los recursos públicos, atender con calidad los trámites y combatir con eficacia la corrupción y la evasión fiscal." },
                    { "id": "B", "text": "Porque entre mayor sea el puntaje del IDI, más altos serán los impuestos que se cobrarán a los estratos 1 y 2." },
                    { "id": "C", "text": "Porque el IDI es una calificación bancaria privada que solo le interesa a inversionistas de Wall Street." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Un IDI sobresaliente refleja una entidad sólida, transparente, con servidores íntegros, procesos eficientes y control riguroso, lo cual se traduce en mayor confianza ciudadana y legitimidad en el recaudo tributario del Estado.",
                    "distractors": [
                        { "id": "B", "reason": "El IDI no define tarifas de impuestos; las tarifas las define exclusivamente el Congreso mediante ley de la República." },
                        { "id": "C", "reason": "El IDI es un índice del sector público colombiano creado por el DAFP, no una calificación de bancos de inversión extranjeros." }
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
                    { "id": "A", "text": "La DIAN no fija el precio de divisas (competencia del Banco de la República), pero sí ejerce el control y vigilancia cambiaria sobre operaciones vinculadas al comercio exterior de bienes y servicios y endeudamiento." },
                    { "id": "B", "text": "La DIAN tiene la facultad discrecional de cerrar todas las casas de cambio que no vendan dólares a precio subsidiado." },
                    { "id": "C", "text": "La DIAN solo administra el impuesto predial y de vehículos de los municipios." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El frente cambiario de la DIAN se circunscribe al control del cumplimiento del régimen de cambios en operaciones de comercio exterior (importaciones, exportaciones) y endeudamiento, sin tener competencia sobre la tasa de cambio de mercado que regula la Junta Directiva del Banco de la República.",
                    "distractors": [
                        { "id": "B", "reason": "La DIAN no fija precios de divisas ni realiza cierres discrecionales sin debido proceso legal previo." },
                        { "id": "C", "reason": "El predial y los vehículos son tributos territoriales municipales y departamentales, no impuestos del orden nacional administrados por la DIAN." }
                    ]
                }
            },
            {
                "id": 902,
                "topic": "Evasión Fiscal vs. Elusión (Abuso Tributario)",
                "caseText": "Un contribuyente crea un entramado artificioso de cinco sociedades por acciones simplificadas (SAS) sin empleados, sin oficinas y sin activos reales, con el único fin de simular pérdidas cruzadas y reducir a cero su impuesto de renta.",
                "statement": "Frente al artículo 869 del Estatuto Tributario (Cláusula General Antiaubuso), a la DIAN le corresponde calificar esta operación como:",
                "options": [
                    { "id": "A", "text": "Abuso en materia tributaria (elusión fiscal artificiosa), facultando a la administración para recaracterizar el negocio y liquidar el tributo atendiendo a la verdadera sustancia económica." },
                    { "id": "B", "text": "Una legítima economía de opción plenamente protegida por el derecho comercial que no puede ser objetada por la DIAN." },
                    { "id": "C", "text": "Un error involuntario de digitación en el software que debe ser perdonado de oficio." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 869 del Estatuto Tributario faculta expresamente a la DIAN para desconocer o recaracterizar negocios jurídicos artificiosos o carentes de sustancia económica que busquen una ventaja tributaria abusiva, liquidando el impuesto real.",
                    "distractors": [
                        { "id": "B", "reason": "La economía de opción implica elegir vías legales lícitas con propósito real de negocio; crear empresas fantasma sin sustancia es abuso tributario." },
                        { "id": "C", "reason": "Crear un entramado de sociedades instrumentales no es un error de digitación; es una maniobra planificada de abuso del derecho." }
                    ]
                }
            },
            {
                "id": 903,
                "topic": "Potestad Aduanera y Regímenes Aduaneros (Decreto 1165 de 2019)",
                "caseText": "Un barco con contenedores de mercancía ingresa a puerto colombiano. El importador alega que la DIAN no puede inspeccionar la carga hasta que la mercancía se encuentre en su bodega privada de destino final.",
                "statement": "Con base en el Decreto 1165 de 2019 sobre el ejercicio de la potestad aduanera, la afirmación del importador es incorrecta porque:",
                "options": [
                    { "id": "A", "text": "La potestad aduanera de la DIAN se ejerce con plenas facultades de inspección, control y verificación en la Zona Primaria Aduanera (puertos y aeropuertos) desde el arribo mismo del medio de transporte." },
                    { "id": "B", "text": "Los puertos colombianos pertenecen a empresas extranjeras donde el Estado no tiene soberanía alguna." },
                    { "id": "C", "text": "La DIAN solo puede inspeccionar mercancías nacionales pero jamás bienes de procedencia extranjera." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1165 de 2019 define la potestad aduanera como el conjunto de derechos y facultades de la DIAN para controlar el ingreso, permanencia y salida de mercancías en el territorio aduanero nacional, con primacía en las zonas primarias de ingreso.",
                    "distractors": [
                        { "id": "B", "reason": "La soberanía aduanera del Estado colombiano rige en todo el territorio nacional y puertos habilitados." },
                        { "id": "C", "reason": "El objeto central del control aduanero son precisamente las mercancías foráneas que ingresan al país." }
                    ]
                }
            },
            {
                "id": 904,
                "topic": "Delito de Omisión del Agente Retenedor o Recaudador (Art. 402 Código Penal)",
                "caseText": "El representante legal de una empresa comercial recaudó $800 millones de IVA facturados a sus clientes, pero decide no consignarlos a la DIAN y utilizarlos para pagar pasivos financieros privados de la compañía.",
                "statement": "A la luz del artículo 402 del Código Penal colombiano, esta conducta configura:",
                "options": [
                    { "id": "A", "text": "El delito penal de Omisión del Agente Retenedor o Recaudador, sancionado con pena privativa de la libertad y multa pecuniaria sin perjuicio del cobro de los tributos adeudados." },
                    { "id": "B", "text": "Una simple falta de etiqueta mercantil que se resuelve con una disculpa por escrito a la DIAN." },
                    { "id": "C", "text": "Una operación contable regular exenta de cualquier sanción legal." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 402 del Código Penal tipifica como delito la omisión del agente retenedor o recaudador que no consigne las sumas retenidas o recaudadas por concepto de IVA dentro de los dos meses siguientes a su vencimiento, castigándolo con prisión.",
                    "distractors": [
                        { "id": "B", "reason": "Apropiarse de dineros públicos recaudados por IVA es un delito contra el orden económico y social, no una simple falta de etiqueta." },
                        { "id": "C", "reason": "No consignar el impuesto recaudado es una infracción penal gravísima; los dineros de IVA nunca pertenecen al comerciante." }
                    ]
                }
            },
            {
                "id": 905,
                "topic": "Contrabando Abierto vs. Contrabando Técnico",
                "caseText": "En un operativo aduanero se detecta una empresa que ingresó al país 10.000 computadores portátiles declarándolos formalmente en el formulario aduanero como 'repuestos plásticos genéricos sin valor', para liquidar arancel del 0% en vez del 15% real.",
                "statement": "Técnica y jurídicamente, esta modalidad de ilícito aduanero se clasifica como:",
                "options": [
                    { "id": "A", "text": "Contrabando Técnico por falsa clasificación arancelaria y fraude en el valor aduanero, al ingresar la mercancía por canal formal pero alterando dolosamente su naturaleza y valor real." },
                    { "id": "B", "text": "Contrabando Abierto, puesto que los computadores no tienen teclado en idioma español." },
                    { "id": "C", "text": "Infracción formal subsanable mediante el canje de los computadores por licencias de software." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El contrabando técnico se comete a través de trámites aduaneros formales pero falsificando el valor (subfacturación), el origen o la subpartida arancelaria para evadir el pago legítimo de los aranceles e impuestos correspondientes.",
                    "distractors": [
                        { "id": "B", "reason": "El contrabando abierto ocurre cuando se ingresa mercancía por lugares no habilitados sin presentar declaración aduanera alguna." },
                        { "id": "C", "reason": "Alterar dolosamente la clasificación arancelaria para evadir tributos configura delito de contrabando y fraude aduanero." }
                    ]
                }
            },
            {
                "id": 906,
                "topic": "Reserva Tributaria (Artículo 583 del Estatuto Tributario)",
                "caseText": "Un funcionario de la DIAN recibe una solicitud de un banco privado que pide conocer los ingresos brutos declarados por un cliente para evaluar la aprobación de un crédito hipotecario personal.",
                "statement": "Frente a esta petición y en atención al artículo 583 del Estatuto Tributario, al servidor le corresponde:",
                "options": [
                    { "id": "A", "text": "Negar la solicitud por existir Reserva Tributaria legal expresa, informando que las declaraciones tributarias son confidenciales y solo pueden ser suministradas al propio contribuyente o por orden judicial competente." },
                    { "id": "B", "text": "Entregar la declaración de renta completa en formato PDF vía WhatsApp al gerente del banco." },
                    { "id": "C", "text": "Publicar la declaración en la cartelera del banco para agilizar el crédito del solicitante." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 583 del Estatuto Tributario consagra la Reserva Tributaria, la cual prohíbe revelar los datos contenidos en las declaraciones a terceros no autorizados. Solo se levanta ante requerimientos de autoridades judiciales o entes de control autorizados expresamente por la ley.",
                    "distractors": [
                        { "id": "B", "reason": "Enviar datos fiscales por mensajería a particulares viola la reserva tributaria y acarrea destitución del cargo." },
                        { "id": "C", "reason": "Publicar declaraciones tributarias de ciudadanos viola el derecho fundamental al Habeas Data y la intimidad económica." }
                    ]
                }
            },
            {
                "id": 907,
                "topic": "Obligaciones Tributarias Formales vs. Sustanciales",
                "caseText": "Un ciudadano no tuvo que pagar impuesto sobre la renta porque sus retenciones en la fuente cubrieron la totalidad de la deuda fiscal calculada; no obstante, omitió presentar el formulario de declaración dentro de las fechas fijadas en el calendario oficial.",
                "statement": "Desde la dogmática tributaria, el ciudadano:",
                "options": [
                    { "id": "A", "text": "Cumplió con la obligación sustancial (el pago del tributo), pero incumplió la obligación formal (la presentación oportuna de la declaración), haciéndose acreedor a la sanción por extemporaneidad." },
                    { "id": "B", "text": "Queda exonerado de toda sanción, puesto que las obligaciones formales no tienen valor jurídico si el saldo a pagar es cero." },
                    { "id": "C", "text": "Debe ser encarcelado de inmediato por el delito de peculado por apropiación." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La obligación sustancial es el pago efectivo del impuesto; las obligaciones formales son los trámites necesarios para el control y fiscalización (declarar, reportar exógena, expedir factura). Su incumplimiento genera sanciones administrativas de extemporaneidad.",
                    "distractors": [
                        { "id": "B", "reason": "El Estatuto Tributario sanciona la extemporaneidad formal aun cuando el saldo a pagar sea cero o arroje saldo a favor." },
                        { "id": "C", "reason": "El ciudadano que declara tarde no comete el delito de peculado; este es un tipo penal aplicable a servidores públicos que desvían fondos estatales." }
                    ]
                }
            },
            {
                "id": 908,
                "topic": "Facilitación del Comercio Exterior y Cumplimiento Voluntario",
                "caseText": "La DIAN implementa el Sistema de Declaración Sugerida de Renta para personas naturales y habilita canales de pago por PSE desde teléfonos móviles.",
                "statement": "Esta iniciativa estratégica se enmarca en el modelo institucional de:",
                "options": [
                    { "id": "A", "text": "Facilitación y fomento del cumplimiento voluntario de las obligaciones tributarias, reduciendo los costos de transacción para los contribuyentes honestos." },
                    { "id": "B", "text": "Fiscalización coactiva represiva con decomiso inmediato de bienes." },
                    { "id": "C", "text": "Privatización del recaudo tributario a favor de entidades bancarias transnacionales." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La facilitación del cumplimiento voluntario busca simplificar trámites, ofrecer borradores de declaraciones prediligenciados y brindar servicios digitales intuitivos para que el ciudadano cumpla sin trabas burocráticas.",
                    "distractors": [
                        { "id": "B", "reason": "La declaración sugerida no es una medida coactiva de embargo; es un servicio de orientación preventiva." },
                        { "id": "C", "reason": "El uso de pasarelas digitales no privatiza la titularidad del recaudo, el cual ingresa íntegramente a las cuentas de la Nación." }
                    ]
                }
            },
            {
                "id": 909,
                "topic": "Delito de Omisión de Activos o Inclusión de Pasivos Inexistentes (Art. 434A C.P.)",
                "caseText": "En una auditoría tributaria se descubre que un contribuyente ocultó en paraísos fiscales cuentas bancarias y bienes inmuebles por valor de $5.000 millones de pesos, no declarándolos en su impuesto de renta.",
                "statement": "Al superar los montos umbrales fijados en la ley, esta conducta:",
                "options": [
                    { "id": "A", "text": "Configura el delito penal tipificado en el artículo 434A del Código Penal, obligando a los funcionarios de la DIAN a compulsar copias inmediatamente a la Fiscalía General de la Nación." },
                    { "id": "B", "text": "Se considera una falta administrativa leve que se subsana con un curso de cuatro horas en la Escuela de la DIAN." },
                    { "id": "C", "text": "Autoriza al funcionario auditor a quedarse con el 10% del dinero oculto como bonificación personal." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 434A del Código Penal sanciona con pena privativa de la libertad a quien omita activos o declare pasivos inexistentes por encima de los topes en UVT. Al evidenciarse indicios penales, es deber legal compulsar copias a la Fiscalía.",
                    "distractors": [
                        { "id": "B", "reason": "Ocultar activos multimillonarios no es una falta leve; es un delito grave contra el orden económico y social." },
                        { "id": "C", "reason": "Apropiarse de bienes auditados o cobrar comisiones ilegales constituye el delito penal de concusión y cohecho." }
                    ]
                }
            },
            {
                "id": 910,
                "topic": "Aprehensión vs. Decomiso de Mercancías",
                "caseText": "La Policía Fiscal y Aduanera (POLFA) retiene preventivamente en carretera un camión con calzado extranjero porque el conductor no portaba la declaración de importación ni factura de compra.",
                "statement": "En el procedimiento aduanero regulado por el Decreto 1165 de 2019, esta medida inicial se denomina:",
                "options": [
                    { "id": "A", "text": "Aprehensión aduanera (medida cautelar previa de retención física mientras se define la situación jurídica), la cual se convertirá en Decomiso definitivo si el titular no acredita la legal introducción al país." },
                    { "id": "B", "text": "Decomiso definitivo irrevocable que faculta a rematar la mercancía en el mismo minuto del operativo." },
                    { "id": "C", "text": "Venta forzosa al conductor del camión a precio de costo." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Aprehensión es la medida cautelar que toma la autoridad aduanera para retener preventivamente la mercancía ante sospecha fundada de irregularidad; el Decomiso es el acto administrativo definitivo que transfiere la propiedad a la Nación tras vencerse los términos probatorios sin acreditar legalidad.",
                    "distractors": [
                        { "id": "B", "reason": "El decomiso requiere debido proceso, formulación de pliego de cargos y oportunidad de defensa al importador; no es instantáneo." },
                        { "id": "C", "reason": "La autoridad aduanera no vende mercancías retenidas a particulares en la vía pública de forma informal." }
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
                    { "id": "A", "text": "La Resolución Sancionatoria No. 402 no fue debidamente notificada y, por ende, carece de eficacia legal frente al contribuyente, viciando el cobro posterior." },
                    { "id": "B", "text": "El contribuyente queda obligado a pagar la sanción de inmediato por el principio de celeridad administrativa." },
                    { "id": "C", "text": "El acto administrativo adquiere firmeza automática y no admite ningún tipo de recurso legal." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El silogismo deductivo es estricto: Si la validez de la notificación depende de enviarla a la dirección formalmente inscrita en el RUT y se envió a otra distinta, la consecuencia lógica y legal necesaria es la indebida notificación y la ineficacia del acto.",
                    "distractors": [
                        { "id": "B", "reason": "No se puede exigir el pago coactivo de una sanción que adolece de vicio de notificación violatorio del debido proceso." },
                        { "id": "C", "reason": "La falta de notificación debida impide que el acto cobre firmeza jurídica." }
                    ]
                }
            },
            {
                "id": 1002,
                "topic": "Análisis Causa-Raíz: Diagrama de Ishikawa (Espina de Pescado)",
                "caseText": "Una seccional presenta una tasa de quejas del 45% por demoras en la expedición del RUT presencial. El equipo de mejora aplica un Diagrama de Ishikawa clasificando las causas.",
                "statement": "Al clasificar las causas: (1) 'Caídas continuas del servidor web', (2) 'Falta de capacitación del personal nuevo', y (3) 'Manual de atención desactualizado con 12 pasos redundantes', corresponden respectivamente a las categorías:",
                "options": [
                    { "id": "A", "text": "Tecnología / Sistemas, Personas (Talento Humano), y Métodos / Procedimientos." },
                    { "id": "B", "text": "Mobiliario físico, Sanciones disciplinarias y Clima meteorológico." },
                    { "id": "C", "text": "Presupuesto de viáticos, Régimen cambiario y Reserva tributaria." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En el Diagrama de Ishikawa aplicado a la gestión pública, las fallas de software se agrupan en Tecnología, la falta de adiestramiento en Personas/Talento Humano, y los manuales con pasos engorrosos en Métodos/Procedimientos.",
                    "distractors": [
                        { "id": "B", "reason": "La clasificación es absurda y no sigue ninguna de las 6M del modelo de Ishikawa." },
                        { "id": "C", "reason": "No guardan relación con las causas identificadas en el caso." }
                    ]
                }
            },
            {
                "id": 1003,
                "topic": "Técnica de los Cinco (5) Porqués",
                "caseText": "Un informe de fiscalización aduanera fue anulado por el Consejo de Estado porque se practicó una inspección tributaria fuera de los términos perentorios de caducidad.",
                "statement": "Al aplicar la técnica de los Cinco Porqués para desenterrar la Causa Raíz, el equipo debe buscar:",
                "options": [
                    { "id": "A", "text": "El motivo originario estructural en los controles de alerta temprana del proceso que permitió que los expedientes duraran meses archivados sin seguimiento de términos." },
                    { "id": "B", "text": "Identificar al funcionario más nuevo del equipo para culparlo individualmente en un comunicado de prensa." },
                    { "id": "C", "text": "Modificar la fecha de radicación en los expedientes físicos para engañar a los jueces." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El objetivo de los Cinco Porqués es profundizar hasta la falla del sistema o del proceso de control que permitió que el error se produjera, en lugar de atribuir la culpa de forma superficial a personas individuales.",
                    "distractors": [
                        { "id": "B", "reason": "Buscar chivos expiatorios no resuelve las fallas estructurales de los procesos de control institucional." },
                        { "id": "C", "reason": "Adulterar expedientes es un delito penal de falsedad que agrava la falta y destruye la integridad pública." }
                    ]
                }
            },
            {
                "id": 1004,
                "topic": "Tasa de Variación Porcentual",
                "caseText": "El recaudo por Impuesto al Consumo en una seccional fue de $4.000 millones en 2024 y aumentó a $5.200 millones en 2025.",
                "statement": "La tasa de variación porcentual del recaudo en dicho período fue de:",
                "options": [
                    { "id": "A", "text": "+30.0%, calculada como ((5.200 - 4.000) / 4.000) * 100." },
                    { "id": "B", "text": "+12.0%, calculada restando los dos valores directamente sin ponderar." },
                    { "id": "C", "text": "+130.0%, puesto que el recaudo siempre se duplica con la inflación." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La fórmula matemática de variación porcentual es ((Valor Final - Valor Inicial) / Valor Inicial) * 100. En este caso: (1.200 / 4.000) * 100 = 30.0% de incremento real.",
                    "distractors": [
                        { "id": "B", "reason": "Resta directamente las cifras en miles de millones sin aplicar la relación sobre la base inicial." },
                        { "id": "C", "reason": "130% sería el valor relativo total (1.3), pero la variación o incremento neto es exactamente el 30%." }
                    ]
                }
            },
            {
                "id": 1005,
                "topic": "Confusión entre Correlación y Causalidad",
                "caseText": "Un analista observa que en los meses de diciembre aumenta la venta de helados en una ciudad costera y que simultáneamente se incrementan las solicitudes de devolución de saldos a favor en la DIAN. Concluye que 'el consumo de helados causa devoluciones tributarias'.",
                "statement": "El error de razonamiento analítico cometido en este informe corresponde a:",
                "options": [
                    { "id": "A", "text": "Una falacia de causa falsa (confundir correlación estadística temporal con causalidad directa), ignorando que ambos fenómenos coinciden por una variable estacional de cierre de año." },
                    { "id": "B", "text": "Una conclusión plenamente científica y comprobable mediante el Estatuto Tributario." },
                    { "id": "C", "text": "Una infracción cambiaria de contrabando técnico de lácteos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Que dos variables se muevan simultáneamente (correlación) no demuestra que una sea causa de la otra. En el análisis público se debe demostrar el vínculo causal directo para evitar falacias lógicas.",
                    "distractors": [
                        { "id": "B", "reason": "La conclusión es manifiestamente ilógica y carece de todo rigor metodológico y sustantivo." },
                        { "id": "C", "reason": "No guarda ninguna relación con figuras aduaneras de contrabando." }
                    ]
                }
            },
            {
                "id": 1006,
                "topic": "Sesgo de Confirmación en Auditoría",
                "caseText": "Un auditor parte de la creencia personal de que una seccional específica comete fraude en el manejo de viáticos. Durante la auditoría ignora 40 soportes de gasto legítimos y resalta únicamente un comprobante con un error tipográfico en la fecha para sustentar su informe acusatorio.",
                "statement": "Esta distorsión del juicio profesional se denomina:",
                "options": [
                    { "id": "A", "text": "Sesgo de Confirmación, al seleccionar y valorar únicamente las evidencias que corroboran el prejuicio previo del auditor, desestimando las pruebas objetivas contrarias." },
                    { "id": "B", "text": "Principio de la duda razonable en materia fiscal." },
                    { "id": "C", "text": "Aplicación estricta del marco COSO 2013 de auditoría pública." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El sesgo de confirmación destruye la objetividad del auditor, llevándolo a buscar e interpretar evidencias selectivas para encajar en su hipótesis previa, en lugar de evaluar de forma imparcial la totalidad del acervo documental.",
                    "distractors": [
                        { "id": "B", "reason": "La duda razonable protege al administrado ante la falta de certeza probatoria; no justifica la parcialidad acusatoria." },
                        { "id": "C", "reason": "COSO 2013 exige objetividad, independencia e imparcialidad estricta, lo opuesto a sesgos cognitivos." }
                    ]
                }
            },
            {
                "id": 1007,
                "topic": "Pruebas de Indicios en la Fiscalización",
                "caseText": "Un contribuyente declara que sus ingresos anuales fueron de $20 millones de pesos, pero se constata que en el mismo año adquirió tres vehículos de lujo en efectivo, viajó cinco veces a Europa en primera clase y tiene depósitos bancarios no justificados por $800 millones.",
                "statement": "Frente al análisis de indicios y la carga de la prueba en la DIAN, al profesional le corresponde inferir que:",
                "options": [
                    { "id": "A", "text": "Existe una pluralidad de indicios graves, concordantes y convergentes que demuestran una ostensible omisión de ingresos gravables, justificando una investigación por inexactitud fiscal." },
                    { "id": "B", "text": "La declaración debe ser aceptada como cierta sin verificación porque el contribuyente juró decir la verdad." },
                    { "id": "C", "text": "Los vehículos y viajes deben ser confiscados de inmediato por el auditor sin iniciar proceso de fiscalización." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La prueba indiciaria (Art. 752 Estatuto Tributario y CGP) permite inferir lógicamente el hecho desconocido (ingresos ocultos) a partir de hechos indicadores plenamente acreditados (gastos e incrementos patrimoniales no justificados).",
                    "distractors": [
                        { "id": "B", "reason": "La presunción de veracidad de las declaraciones tributarias es desvirtuable mediante pruebas e indicios de inexactitud." },
                        { "id": "C", "reason": "La DIAN debe iniciar el proceso formal de fiscalización y determinación tributaria garantizando el debido proceso; no confisca de hecho bienes particulares." }
                    ]
                }
            },
            {
                "id": 1008,
                "topic": "Promedio Ponderado en Indicadores Agregados",
                "caseText": "La meta de recaudo nacional se compone de dos Seccionales: Seccional A (aporta el 80% del recaudo y cumplió al 90%) y Seccional B (aporta el 20% del recaudo y cumplió al 70%).",
                "statement": "El cumplimiento ponderado consolidado a nivel nacional fue de:",
                "options": [
                    { "id": "A", "text": "86.0%, calculado como (0.80 * 90) + (0.20 * 70) = 72 + 14 = 86%." },
                    { "id": "B", "text": "80.0%, haciendo un promedio aritmético simple ((90 + 70) / 2)." },
                    { "id": "C", "text": "160.0%, sumando los dos porcentajes directamente." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la evaluación de metas con pesos diferentes, el cálculo correcto es el promedio ponderado: (0.80 * 90) + (0.20 * 70) = 72 + 14 = 86%. Usar promedio simple distorsionaría el resultado al no considerar que la Seccional A tiene un peso cuatro veces mayor.",
                    "distractors": [
                        { "id": "B", "reason": "El promedio aritmético simple solo es válido si ambas seccionales tuvieran el mismo peso específico (50%-50%)." },
                        { "id": "C", "reason": "Sumar porcentajes directamente viola los principios elementales del cálculo matemático de gestión." }
                    ]
                }
            },
            {
                "id": 1009,
                "topic": "Lógica Proposicional: Falacia de Negación del Antecedente",
                "caseText": "Un analista formula el argumento: 'Si un contribuyente comete contrabando aduanero, entonces se le impone una sanción de decomiso. Como a este contribuyente NO se le imputó contrabando aduanero, por lo tanto es imposible que se le aplique ninguna sanción de decomiso'.",
                "statement": "Analizando la validez lógica del argumento, el razonamiento es incorrecto porque:",
                "options": [
                    { "id": "A", "text": "Incurre en la falacia formal de negación del antecedente, ya que el decomiso puede proceder legítimamente por otras causales legales (ej. vencimiento de términos de permanencia en depósito)." },
                    { "id": "B", "text": "Es un silogismo perfecto y matemáticamente irrefutable bajo cualquier ordenamiento jurídico." },
                    { "id": "C", "text": "La palabra decomiso está prohibida en la lógica formal." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la lógica formal ($P \to Q$), negar el antecedente ($\neg P$) no permite concluir válidamente la negación del consecuente ($\neg Q$), ya que el efecto ($Q$) puede derivarse de otras causas independientes previstas en la legislación aduanera.",
                    "distractors": [
                        { "id": "B", "reason": "Es una conocida falacia lógica formal; no es un silogismo válido." },
                        { "id": "C", "reason": "Los términos jurídicos son perfectamente aplicables al razonamiento y a la lógica proposicional." }
                    ]
                }
            },
            {
                "id": 1010,
                "topic": "Análisis de Datos e Identificación de Valores Atípicos (Outliers)",
                "caseText": "En una tabla con 1.000 declaraciones de un mismo sector económico, el promedio de deducciones por compras es del 15% de los ingresos brutos, pero un contribuyente específico reporta deducciones del 98% con el mismo volumen de ventas.",
                "statement": "Al realizar la auditoría analítica de datos, al Gestor II le corresponde tratar este caso como:",
                "options": [
                    { "id": "A", "text": "Un valor atípico (outlier) o anomalía estadística de alta significancia que amerita priorizar al contribuyente para fiscalización profunda e inspección contable." },
                    { "id": "B", "text": "Una señal inequívoca de que la empresa es la más eficiente del país y debe ser premiada por la DIAN." },
                    { "id": "C", "text": "Un dato normal que debe ser promediado con las demás declaraciones sin investigar." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En razonamiento analítico y ciencia de datos fiscales, un valor atípico que se desvía drásticamente del comportamiento promedio del sector constituye una bandera roja de riesgo de evasión o simulación de costos que exige auditoría focalizada.",
                    "distractors": [
                        { "id": "B", "reason": "Declarar un 98% de deducciones en sectores con margen histórico normal no es eficiencia; es indicio manifiesto de evasión o inexactitud." },
                        { "id": "C", "reason": "Diluir una anomalía estadística grave en el promedio oculta riesgos críticos de pérdida de recaudo para el Estado." }
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
                    { "id": "A", "text": "La GETH debe abarcar integralmente las cinco etapas del ciclo del empleo: diagnóstico de madurez, planeación, ingreso y vinculación, desarrollo y bienestar, y retiro del servidor público." },
                    { "id": "B", "text": "La GETH solo se aplica para los trabajadores vinculados mediante contratos de prestación de servicios." },
                    { "id": "C", "text": "El pago de la nómina es la única obligación contemplada en la Constitución Política en materia de talento humano." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Guía de GETH del DAFP establece que la gestión del talento humano es estratégica y no meramente operativa o pagadora de nómina; involucra desde la selección meritocrática y el desarrollo de competencias hasta la preparación para el retiro.",
                    "distractors": [
                        { "id": "B", "reason": "La GETH está diseñada prioritariamente para los servidores públicos de carrera, de libre nombramiento y provisionales." },
                        { "id": "C", "reason": "La Constitución Política (Art. 122 a 125) consagra un régimen integral de función pública, carrera administrativa y mérito." }
                    ]
                }
            },
            {
                "id": 1102,
                "topic": "Política de Racionalización de Trámites",
                "caseText": "Un trámite de devolución tributaria exige al contribuyente aportar certificados de existencia y representación legal de la Cámara de Comercio y copia física de declaraciones presentadas ante la misma DIAN en años anteriores.",
                "statement": "A la luz del Decreto Ley 019 de 2012 (Ley Antitrámites) y la política de racionalización de MIPG, este requisito es ilegal porque:",
                "options": [
                    { "id": "A", "text": "Las entidades públicas tienen prohibido exigir documentos o información que reposen en sus propios archivos o a los que puedan acceder mediante interoperabilidad con otras entidades públicas." },
                    { "id": "B", "text": "Todos los trámites ante el Estado deben ser eliminados de manera absoluta." },
                    { "id": "C", "text": "Solo se pueden exigir documentos si el contribuyente los entrega en papel sellado con estampillas notariales." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto Ley 019 de 2012 prohíbe expresamente exigir copias de actos o datos que reposen en la misma entidad o que puedan consultarse en bases interoperables del Estado (principio de simplificación y facilitación).",
                    "distractors": [
                        { "id": "B", "reason": "La racionalización no implica eliminar todos los trámites, sino simplificarlos y optimizarlos para el ciudadano." },
                        { "id": "C", "reason": "El papel sellado y estampillas notariales para trámites públicos fueron abolidos por el estatuto antitrámites." }
                    ]
                }
            },
            {
                "id": 1103,
                "topic": "Política de Gobierno Digital",
                "caseText": "La DIAN avanza en la digitalización de sus servicios y se debate la implementación de la Cédula de Ciudadanía Digital y la firma electrónica para la presentación de declaraciones.",
                "statement": "Dentro de los lineamientos del MinTIC y la política de Gobierno Digital, esta acción se enmarca en el componente de:",
                "options": [
                    { "id": "A", "text": "Servicios Ciudadanos Digitales, que promueve la autenticación digital segura, la interoperabilidad del Estado y la carpeta ciudadana digital." },
                    { "id": "B", "text": "Privatización del Registro Civil de Nacimiento." },
                    { "id": "C", "text": "Exención tributaria en compras por comercio electrónico internacional." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La política de Gobierno Digital (MinTIC y Decreto 1078 de 2015) impulsa los Servicios Ciudadanos Digitales (Autenticación Digital, Carpeta Ciudadana e Interoperabilidad) para garantizar trámites confiables y 100% digitales.",
                    "distractors": [
                        { "id": "B", "reason": "El registro civil es función constitucional de la Registraduría Nacional, no se privatiza mediante Gobierno Digital." },
                        { "id": "C", "reason": "La digitalización de trámites no altera las obligaciones arancelarias ni crea exenciones tributarias automáticas." }
                    ]
                }
            },
            {
                "id": 1104,
                "topic": "Política de Gestión Documental",
                "caseText": "En una dependencia de fiscalización, los expedientes tributarios físicos se encuentran acumulados en cajas sin foliar, sin tablas de retención documental (TRD) aplicadas y con expedientes mezclados entre vigencias distintas.",
                "statement": "Al intervenir esta situación conforme a las directrices del Archivo General de la Nación (AGN) y MIPG, al Gestor II le corresponde:",
                "options": [
                    { "id": "A", "text": "Aplicar de inmediato las Tablas de Retención Documental (TRD), ordenar la foliación cronológica y estandarizar la conformación de expedientes conforme a la Política de Gestión Documental." },
                    { "id": "B", "text": "Incinera las cajas acumuladas en el patio de la entidad para ganar espacio físico rápidamente." },
                    { "id": "C", "text": "Vender los expedientes tributarios a empresas de reciclaje de papel para generar fondos propios." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ley 594 de 2000 (Ley General de Archivos) y el MIPG exigen organizar, clasificar y conservar los archivos mediante TRD y foliación técnica, garantizando la preservación de la memoria probatoria institucional.",
                    "distractors": [
                        { "id": "B", "reason": "Destruir expedientes públicos sin autorización legal es un delito penal de destrucción de documento público." },
                        { "id": "C", "reason": "Vender expedientes que contienen declaraciones tributarias protegidas por reserva acarrea destitución y sanciones penales gravísimas." }
                    ]
                }
            },
            {
                "id": 1105,
                "topic": "Política de Defensa Jurídica del Estado",
                "caseText": "Un contribuyente demanda a la DIAN solicitando la nulidad de una liquidación oficial de revisión por $20.000 millones de pesos. El apoderado judicial de la DIAN no contesta la demanda dentro del término legal fijado por el juzgado.",
                "statement": "A la luz de los lineamientos de la Agencia Nacional de Defensa Jurídica del Estado (ANDJE) y la Dimensión 3 de MIPG, esta omisión genera:",
                "options": [
                    { "id": "A", "text": "Una falla gravísima en la política de defensa jurídica del Estado que expone a la entidad a una condena contingente por indefensión y acarrea investigación disciplinaria al apoderado." },
                    { "id": "B", "text": "Una victoria procesal automática para la DIAN por el principio de celeridad judicial." },
                    { "id": "C", "text": "La prescripción de la Constitución Política en materia de impuestos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Política de Defensa Jurídica exige a las entidades ejercer una defensa oportuna, rigurosa y técnica para proteger el patrimonio público. Dejar vencer términos de contestación de demanda constituye una falta profesional gravísima.",
                    "distractors": [
                        { "id": "B", "reason": "No contestar la demanda genera la pérdida de la oportunidad procesal de defensa y presunción de veracidad de los hechos alegados por el demandante." },
                        { "id": "C", "reason": "La Constitución no prescribe por fallas procesales de apoderados jurídicos." }
                    ]
                }
            },
            {
                "id": 1106,
                "topic": "Política de Participación Ciudadana en la Gestión",
                "caseText": "Al formular el proyecto de resolución sobre plazos del calendario tributario para el año entrante, la DIAN publica el borrador del acto administrativo en su portal web durante 15 días para recibir comentarios ciudadanos.",
                "statement": "Esta práctica institucional da cumplimiento directo a la política de:",
                "options": [
                    { "id": "A", "text": "Participación Ciudadana en la Gestión Pública y Mejora Normativa (Decreto 1081 de 2015), promoviendo la consulta pública previa y la co-construcción de regulaciones." },
                    { "id": "B", "text": "Secreto de Estado y reserva de sumario judicial." },
                    { "id": "C", "text": "Transferencia de la potestad legislativa del Congreso hacia los gremios privados." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1081 de 2015 (modificado por el Decreto 270 de 2017) y el MIPG ordenan publicar los proyectos específicos de regulación para recibir opiniones, sugerencias o propuestas alternativas de los administrados antes de su expedición.",
                    "distractors": [
                        { "id": "B", "reason": "La consulta pública es un ejercicio de máxima transparencia, exactamente lo opuesto al secreto de Estado." },
                        { "id": "C", "reason": "Recibir comentarios ciudadanos no transfiere facultades legislativas; la potestad reglamentaria sigue radicada en la entidad." }
                    ]
                }
            },
            {
                "id": 1107,
                "topic": "Política de Gestión Presupuestal y Eficiencia del Gasto",
                "caseText": "Al llegar el mes de noviembre, una dependencia constata que solo ha ejecutado el 30% de su presupuesto de inversión y el líder del área ordena comprar 200 impresoras innecesarias para 'no perder el presupuesto asignado'.",
                "statement": "A la luz de los principios presupuestales y la Política de Eficiencia del Gasto de MIPG, esta decisión es incorrecta porque:",
                "options": [
                    { "id": "A", "text": "Vulnera los principios de planeación, economía y necesidad del gasto, adquiriendo bienes suntuarios e innecesarios que no responden a las prioridades misionales de la entidad." },
                    { "id": "B", "text": "Es plenamente correcta, puesto que el único indicador presupuestal que vigila la ley es agotar los recursos al 100% como sea." },
                    { "id": "C", "text": "Las impresoras deben ser donadas inmediatamente a los funcionarios para su uso personal en el hogar." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El gasto público debe obedecer al principio de necesidad y planeación (Estatuto Orgánico del Presupuesto). Ejecutar compras improvisadas sin justificación para 'agotar saldos' es antieconómico y sancionable disciplinariamente.",
                    "distractors": [
                        { "id": "B", "reason": "El fin de la gestión presupuestal es generar valor público y cumplir objetivos, no el despilfarro acelerado a final de año." },
                        { "id": "C", "reason": "Donar bienes públicos a funcionarios para uso privado configura el delito penal de peculado por apropiación." }
                    ]
                }
            },
            {
                "id": 1108,
                "topic": "Política de Mejora Normativa",
                "caseText": "Un estudio institucional encuentra que en la DIAN existen 140 circulares y resoluciones vigentes que regulan el mismo trámite aduanero con normas contradictorias entre sí.",
                "statement": "Para aplicar la Política de Mejora Normativa del DAFP/DNP en esta problemática, a la entidad le corresponde:",
                "options": [
                    { "id": "A", "text": "Adelantar un proceso de depuración y simplificación normativa mediante una Resolución Única que compile, unifique y derogue expresamente las normas obsoletas o contradictorias." },
                    { "id": "B", "text": "Expedir una circular adicional número 141 que obligue a los funcionarios a interpretar todas las anteriores al azar." },
                    { "id": "C", "text": "Cerrar todas las aduanas del país hasta que el Congreso derogue el Estatuto Aduanero." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Política de Mejora Normativa busca la depuración y simplificación del ordenamiento jurídico, eliminando disposiciones duplicadas o anacrónicas y compilando la regulación en actos únicos para dar seguridad jurídica al usuario.",
                    "distractors": [
                        { "id": "B", "reason": "Añadir más normas confusas empeora la dispersión regulatoria y la inseguridad jurídica." },
                        { "id": "C", "reason": "Cerrar puertos y aduanas paralizaría el comercio exterior y la economía de la Nación." }
                    ]
                }
            },
            {
                "id": 1109,
                "topic": "Política de Servicio al Ciudadano",
                "caseText": "Un ciudadano de la tercera edad acude a un Punto de Contacto de la DIAN solicitando ayuda para presentar su declaración sugerida, ya que no cuenta con computador ni sabe utilizar internet.",
                "statement": "Bajo los lineamientos de la Política de Servicio al Ciudadano y el principio de inclusión social de MIPG, al funcionario le corresponde:",
                "options": [
                    { "id": "A", "text": "Brindar atención asistida personalizada en los quioscos digitales de la entidad, orientando al ciudadano con paciencia, empatía y respeto en el cumplimiento de su deber fiscal." },
                    { "id": "B", "text": "Expulsarlo de la oficina manifestando que la DIAN es 100% digital y que los ancianos no pueden ser atendidos en ventanilla." },
                    { "id": "C", "text": "Cobrarle una tarifa en efectivo de $50.000 por concepto de 'ayuda técnica de secretaría'." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Política de Servicio al Ciudadano exige accesibilidad e inclusión, garantizando canales de atención asistida para cerrar la brecha digital en poblaciones vulnerables o adultos mayores, sin costo alguno.",
                    "distractors": [
                        { "id": "B", "reason": "Negar la atención a un ciudadano por brecha tecnológica vulnera el principio de igualdad y el derecho al servicio público." },
                        { "id": "C", "reason": "Exigir pagos particulares por la orientación tributaria oficial es un acto de concusión prohibido tajantemente por la ley." }
                    ]
                }
            },
            {
                "id": 1110,
                "topic": "Interconexión Operativa de las 19 Políticas",
                "caseText": "Al evaluar la modernización del sistema de recaudo, el Comité de Gestión y Desempeño analiza cómo deben articularse los equipos de trabajo.",
                "statement": "El enfoque de MIPG que garantiza el éxito en la implementación de las políticas públicas consiste en:",
                "options": [
                    { "id": "A", "text": "Trabajar de manera transversal e interoperable, conectando talento humano capacitado, procesos simplificados, herramientas de gobierno digital y estricto control interno en una sola visión." },
                    { "id": "B", "text": "Establecer que cada política opere como un silo cerrado e incomunicado que compita agresivamente contra las demás áreas." },
                    { "id": "C", "text": "Eliminar la rendición de cuentas y la gestión del riesgo para no sobrecargar el sistema." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El postulado fundamental del Modelo Integrado de Planeación y Gestión es superar la fragmentación en islas aisladas, articulando transversalmente las dimensiones y políticas para generar verdadero valor público con eficiencia y transparencia.",
                    "distractors": [
                        { "id": "B", "reason": "Los silos aislados y la competencia interna destructiva son precisamente los vicios que el MIPG busca erradicar." },
                        { "id": "C", "reason": "La rendición de cuentas y la gestión del riesgo son componentes medulares e irrenunciables del modelo." }
                    ]
                }
            }
        ]
    }
}

print(f"Cargadas preguntas funcionales Parte 2 (Módulos 6 a 11). Total exámenes: {len(EXAMS_PART2)}")
