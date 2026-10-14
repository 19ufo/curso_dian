# -*- coding: utf-8 -*-
"""
Banco de Preguntas PJS - Módulos Funcionales 1 a 5 (Gestor II - OPEC 236916)
10 preguntas por módulo = 50 preguntas de juicio situacional con sustento normativo.
"""

EXAMS_PART1 = {
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
                    { "id": "A", "text": "Vulnera los principios de igualdad e imparcialidad, los cuales obligan a tramitar las solicitudes en estricto orden y sin otorgar privilegios o preferencias no previstas en la ley." },
                    { "id": "B", "text": "Incurre en una falla exclusivamente técnica que debe ser subsanada mediante la reasignación de computadores en la seccional." },
                    { "id": "C", "text": "Afecta el principio de celeridad únicamente si la empresa no adjuntó los certificados de retención en la fuente exigidos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Artículo 209 de la Constitución Política consagra que la función administrativa se desarrolla con fundamento en los principios de igualdad, moralidad e imparcialidad. Otorgar prioridad injustificada a conocidos viola el derecho al trato igualitario de los demás contribuyentes.",
                    "distractors": [
                        { "id": "B", "reason": "No es una falla de hardware o computacional, sino una grave vulneración de los deberes éticos y principios constitucionales de la función pública." },
                        { "id": "C", "reason": "La vulneración ocurre por el trato preferencial injustificado, independientemente de los anexos documentales que haya presentado el contribuyente." }
                    ]
                }
            },
            {
                "id": 102,
                "topic": "Diferencia entre Desconcentración y Delegación",
                "caseText": "La Dirección General de la DIAN expide una resolución mediante la cual traslada de manera permanente la competencia para liquidar tributos aduaneros a las Direcciones Seccionales del país, dentro de la misma persona jurídica de la entidad.",
                "statement": "De acuerdo con la Ley 489 de 1998, esta forma de organización de la administración pública corresponde a:",
                "options": [
                    { "id": "A", "text": "Desconcentración administrativa, puesto que se radica una competencia de forma permanente en dependencias territoriales dentro de la misma persona jurídica estatal." },
                    { "id": "B", "text": "Descentralización por servicios, ya que crea nuevas entidades autónomas con personería jurídica y presupuesto independiente en cada seccional." },
                    { "id": "C", "text": "Delegación de funciones, dado que cualquier traslado de tareas dentro del Estado se presume delegación revocable verbalmente." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Según el artículo 8 de la Ley 489 de 1998, la desconcentración es la radicación de competencias y funciones en dependencias ubicadas fuera de la sede principal del organismo, sin conferirles personería jurídica independiente (ej. Direcciones Seccionales DIAN).",
                    "distractors": [
                        { "id": "B", "reason": "Las Direcciones Seccionales de la DIAN no son personas jurídicas independientes ni entidades descentralizadas; forman parte de la misma UAE DIAN." },
                        { "id": "C", "reason": "La delegación no es verbal; exige un acto formal escrito y no constituye una redistribución orgánica estructural permanente de la competencia." }
                    ]
                }
            },
            {
                "id": 103,
                "topic": "Prohibiciones Legales de la Delegación",
                "caseText": "Un Director de Gestión del Nivel Central de la DIAN proyecta una resolución en la que pretende delegar en un Gestor II la expedición de reglamentos de carácter general y abstracto que definen el calendario de recaudo para todo el país.",
                "statement": "Al revisar la legalidad de esta delegación con base en el artículo 11 de la Ley 489 de 1998, al profesional le corresponde indicar que:",
                "options": [
                    { "id": "A", "text": "La delegación es improcedente por prohibición legal expresa, ya que no se puede delegar la expedición de reglamentos de carácter general." },
                    { "id": "B", "text": "La delegación es válida siempre que el Gestor II cuente con tarjeta profesional y más de dos años de experiencia en la entidad." },
                    { "id": "C", "text": "La delegación es viable únicamente si se publica previamente en la página web institucional durante cinco días hábiles." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El numeral 1 del artículo 11 de la Ley 489 de 1998 prohíbe de manera taxativa la delegación de la expedición de reglamentos de carácter general, salvo disposición legal expresa en contrario.",
                    "distractors": [
                        { "id": "B", "reason": "Los requisitos de idoneidad personal o experiencia no suplen ni eliminan las prohibiciones legales taxativas de la ley." },
                        { "id": "C", "reason": "La publicación web es un mecanismo de publicidad ciudadana, pero no convalida un acto expresamente prohibido por el estatuto de administración pública." }
                    ]
                }
            },
            {
                "id": 104,
                "topic": "Conflicto de Interés y Trámite de Impedimento",
                "caseText": "Un profesional Gestor II es designado para auditar el proceso de fiscalización que se adelanta contra una sociedad comercial en la cual su cónyuge es socio mayoritario y representante legal.",
                "statement": "Ante esta situación, conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (Ley 1437 de 2011), la conducta que debe seguir el servidor es:",
                "options": [
                    { "id": "A", "text": "Declararse impedido de inmediato y por escrito ante su superior jerárquico, explicando la causal de conflicto de interés para que se designe un funcionario ad hoc." },
                    { "id": "B", "text": "Continuar con la auditoría aplicando el principio de imparcialidad y guardando silencio para no alarmar a sus compañeros." },
                    { "id": "C", "text": "Solicitar a su cónyuge que renuncie a la representación legal de la empresa para poder emitir el informe sin contratiempos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Los artículos 11 y 12 del CPACA establecen que el servidor público que tenga interés particular o cuyo cónyuge lo tenga en una actuación administrativa debe manifestar su impedimento por escrito a su superior de forma inmediata.",
                    "distractors": [
                        { "id": "B", "reason": "Ocultar la causal y continuar actuando genera nulidad de lo actuado y configura falta gravísima disciplinaria por conflicto de interés." },
                        { "id": "C", "reason": "La renuncia sobreviniente no subsana el interés económico existente y constituye una maniobra artificiosa prohibida por el Código General Disciplinario." }
                    ]
                }
            },
            {
                "id": 105,
                "topic": "Naturaleza del Empleo Público y Régimen Específico",
                "caseText": "Un servidor de carrera administrativa de la DIAN solicita una aclaración sobre su régimen laboral frente a las reformas del Código Sustantivo del Trabajo.",
                "statement": "Para orientarlo técnicamente, al profesional le corresponde explicar que los servidores de carrera de la DIAN:",
                "options": [
                    { "id": "A", "text": "Son empleados públicos regidos por una relación legal y reglamentaria, amparados por un Sistema Específico de Carrera (Decretos Ley 071 de 2020 y 927 de 2023)." },
                    { "id": "B", "text": "Son trabajadores oficiales vinculados por contrato individual de trabajo a término indefinido bajo las reglas del Código Sustantivo del Trabajo." },
                    { "id": "C", "text": "Son contratistas de prestación de servicios con autonomía técnica y sin subordinación jurídica frente a la entidad." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El régimen de los servidores de la DIAN corresponde a la categoría de empleados públicos con relación legal y reglamentaria, regidos específicamente por los Decretos Ley 071 de 2020 y 927 de 2023 en virtud de su carrera especial.",
                    "distractors": [
                        { "id": "B", "reason": "Los trabajadores oficiales se vinculan por contrato de trabajo en empresas industriales del Estado para obras públicas, no en unidades de administración tributaria." },
                        { "id": "C", "reason": "Los contratistas no son servidores públicos de carrera ni tienen nombramiento ni posesión legal." }
                    ]
                }
            },
            {
                "id": 106,
                "topic": "Principio de Celeridad y Debido Proceso",
                "caseText": "Un contribuyente radica una solicitud de información para un recurso de reconsideración. El área responsable demora la entrega durante dos meses argumentando sobrecarga de trabajo y la proximidad del cierre fiscal.",
                "statement": "Al evaluar este caso, la actuación de la dependencia desconoce el principio de celeridad porque:",
                "options": [
                    { "id": "A", "text": "Incurre en dilaciones injustificadas desconociendo los términos legales del CPACA, los cuales buscan que la administración resuelva con agilidad y dentro de los plazos de ley." },
                    { "id": "B", "text": "El principio de celeridad solo aplica para contrataciones de licitación pública y no en trámites administrativos con contribuyentes." },
                    { "id": "C", "text": "La sobrecarga laboral suspende de pleno derecho los términos legales de respuesta en todas las entidades del Estado." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El principio de celeridad (Art. 3 CPACA y Art. 209 C.P.) exige tramitar los procesos sin demoras innecesarias. La sobrecarga laboral no es causal legal para suspender plazos perentorios de petición o información.",
                    "distractors": [
                        { "id": "B", "reason": "El principio de celeridad es un principio transversal de toda la función administrativa, no exclusivo de la contratación." },
                        { "id": "C", "reason": "Los términos de ley solo pueden ser suspendidos por declaratoria expresa de fuerza mayor o caso fortuito autorizada por acto administrativo general." }
                    ]
                }
            },
            {
                "id": 107,
                "topic": "Principio de Moralidad y Rechazo a Dádivas",
                "caseText": "Durante una visita de control de obligaciones formales, un comerciante ofrece a los funcionarios un obsequio costoso de mercancía importada como 'muestra de agradecimiento por su asesoría'.",
                "statement": "Frente a esta situación, al funcionario le corresponde:",
                "options": [
                    { "id": "A", "text": "Rechazar de forma inmediata y categórica el obsequio, dejando constancia documentada en el acta de visita y reportando el suceso ante la instancia competente." },
                    { "id": "B", "text": "Aceptar el obsequio a nombre de la entidad y llevarlo a la Dirección Seccional para rifarlo entre los compañeros." },
                    { "id": "C", "text": "Recibir el obsequio siempre y cuando su valor comercial no supere un salario mínimo legal vigente." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Código de Integridad de la DIAN y la Ley 1952 de 2019 prohíben taxativamente recibir dádivas, incentivos, obsequios o favores bajo cualquier circunstancia o cuantía. La única conducta legal es el rechazo y reporte formal.",
                    "distractors": [
                        { "id": "B", "reason": "Aceptar bienes de administrados para beneficio interno constituye una infracción disciplinaria y un compromiso ilegítimo de la imparcialidad pública." },
                        { "id": "C", "reason": "No existe ningún monto mínimo o exento que autorice a un servidor público a aceptar regalos de ciudadanos fiscalizados." }
                    ]
                }
            },
            {
                "id": 108,
                "topic": "Descentralización Territorial vs. Descentralización por Servicios",
                "caseText": "Un equipo de estudio analiza la creación de una entidad pública encargada de administrar el fondo de modernización tecnológica del recaudo tributario con personería jurídica, autonomía presupuestal y patrimonio propio.",
                "statement": "Desde la teoría del derecho administrativo, esta figura corresponde a una descentralización:",
                "options": [
                    { "id": "A", "text": "Por servicios (o funcional), puesto que se confiere autonomía y personería a un organismo especializado para cumplir un objetivo técnico y específico del Estado." },
                    { "id": "B", "text": "Territorial, puesto que su sede física se encontrará ubicada en el Distrito Capital de Bogotá." },
                    { "id": "C", "text": "Por colaboración, ya que las entidades públicas siempre actúan mediante gremios y personas privadas." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La descentralización por servicios o especializada (Art. 30 Ley 489/1998) se presenta cuando el Estado crea una persona jurídica pública con autonomía funcional y patrimonial para ejercer cometidos técnicos determinados.",
                    "distractors": [
                        { "id": "B", "reason": "La descentralización territorial corresponde a las entidades territoriales constitucionales: Departamentos, Municipios y Distritos." },
                        { "id": "C", "reason": "La descentralización por colaboración es el ejercicio de funciones públicas por particulares autorizados por la ley (ej. Cámaras de Comercio, Notarios)." }
                    ]
                }
            },
            {
                "id": 109,
                "topic": "Eficacia vs. Economía en la Gestión",
                "caseText": "En la evaluación anual de una dependencia de recaudo se constata que se alcanzó el 100% de la meta de cobranza, pero los costos administrativos y de contratación superaron en un 300% el presupuesto aprobado debido a contrataciones imprevistas sin planeación.",
                "statement": "Al estructurar el análisis de gestión, al Gestor II le corresponde concluir que la dependencia fue:",
                "options": [
                    { "id": "A", "text": "Eficaz porque alcanzó el objetivo trazado, pero ineficiente y antieconómica porque desbordó de manera injustificada los recursos y costos asignados." },
                    { "id": "B", "text": "Completamente exitosa en todas las dimensiones, puesto que el recaudo tributario justifica cualquier exceso presupuestal incurrido." },
                    { "id": "C", "text": "Ineficaz, ya que el desborde presupuestal invalida legalmente las metas de recaudo alcanzadas." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La eficacia mide exclusivamente el logro de la meta (100% cumplido); sin embargo, la economía y la eficiencia exigen maximizar los recursos y no exceder los costos previstos. El logro no exime del control del gasto.",
                    "distractors": [
                        { "id": "B", "reason": "El fin no justifica los medios en el derecho público; los principios de economía y austeridad del gasto son de obligatorio cumplimiento." },
                        { "id": "C", "reason": "Las metas de recaudo se alcanzaron efectivamente (hubo eficacia), lo que falló fue la eficiencia y economía en el uso de los recursos." }
                    ]
                }
            },
            {
                "id": 110,
                "topic": "Inhabilidad Sobreviniente",
                "caseText": "Un funcionario en ejercicio es condenado penalmente mediante sentencia ejecutoriada por el delito de concusión en un juzgado del circuito.",
                "statement": "De acuerdo con el régimen de la función pública colombiana, esta situación genera:",
                "options": [
                    { "id": "A", "text": "Una inhabilidad sobreviniente que obliga al retiro inmediato del servicio público mediante la declaratoria de vacancia del empleo." },
                    { "id": "B", "text": "Una suspensión preventiva con goce de sueldo hasta que el funcionario decida apelar ante cortes internacionales." },
                    { "id": "C", "text": "Un traslado temporal a otra seccional donde no tenga contacto con el manejo de dinero." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 122 de la Constitución Política y la Ley 734/2002 / Ley 1952/2019 disponen que la condena penal ejecutoriada por delitos contra la administración genera inhabilidad definitiva sobreviniente y la consecuente desvinculación inmediata del cargo.",
                    "distractors": [
                        { "id": "B", "reason": "La sentencia ejecutoriada agota la vía judicial nacional; no procede suspensión con goce de sueldo." },
                        { "id": "C", "reason": "Una persona condenada por delitos contra el erario público queda inhabilitada de por vida para ejercer cargos públicos; no es susceptible de traslado." }
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
                    { "id": "A", "text": "El artículo 133 de la Ley 1753 de 2015 y el Decreto 1499 de 2017 unificaron el Sistema de Gestión de Calidad y el Sistema de Desarrollo Administrativo en un solo Sistema de Gestión integrado." },
                    { "id": "B", "text": "La ley exige mantener tres sistemas independientes con tres comités directivos paralelos para garantizar la pluralidad de enfoques." },
                    { "id": "C", "text": "El Sistema de Calidad solo rige para empresas privadas que exportan bienes y no tiene relación con el Estado colombiano." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El artículo 133 de la Ley 1753 de 2015 unificó el Sistema de Gestión de la Calidad (Ley 872 de 2003) con el Sistema de Desarrollo Administrativo (Ley 489 de 1998) en el nuevo Sistema de Gestión reglamentado por el Decreto 1499 de 2017.",
                    "distractors": [
                        { "id": "B", "reason": "MIPG se creó precisamente para acabar con la proliferación desarticulada de comités y sistemas paralelos." },
                        { "id": "C", "reason": "La Ley 872 de 2003 rigió la calidad en el sector público colombiano hasta su integración legal en MIPG." }
                    ]
                }
            },
            {
                "id": 202,
                "topic": "La Dimensión de Talento Humano como Corazón de MIPG",
                "caseText": "Una entidad pública inicia la implementación de MIPG enfocando todos sus esfuerzos en la adquisición de software de última generación, pero desatiende por completo la capacitación de los funcionarios y el clima laboral.",
                "statement": "De acuerdo con el Manual Operativo del MIPG, este enfoque es erróneo porque:",
                "options": [
                    { "id": "A", "text": "La Dimensión 1 (Talento Humano) es el corazón del modelo y la base indispensable para que todas las demás dimensiones operativas puedan funcionar con éxito." },
                    { "id": "B", "text": "MIPG prohíbe la inversión en software y tecnología hasta que la entidad obtenga 100 puntos en FURAG." },
                    { "id": "C", "text": "El talento humano solo debe intervenir en la fase de evaluación final y no en la planeación de la entidad." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Manual Operativo del MIPG define a la Dimensión de Talento Humano como el eje central y corazón del modelo, dado que son los servidores públicos quienes operan las políticas, gestionan los procesos y generan valor público.",
                    "distractors": [
                        { "id": "B", "reason": "El modelo no prohíbe la inversión tecnológica; promueve la transformación digital, pero articulada al desarrollo del talento humano." },
                        { "id": "C", "reason": "El talento humano participa a lo largo de todo el ciclo de gestión y no únicamente al cierre de la vigencia." }
                    ]
                }
            },
            {
                "id": 203,
                "topic": "Concepto de Valor Público en MIPG",
                "caseText": "Una dependencia de la DIAN presenta un informe de gestión destacando que imprimió 50.000 folletos informativos, pero los indicadores de satisfacción ciudadana y de facilidad en el cumplimiento tributario no mostraron ninguna mejoría.",
                "statement": "A la luz del principio de orientación a resultados de MIPG, este resultado evidencia que:",
                "options": [
                    { "id": "A", "text": "Se ejecutaron productos y actividades operativas, pero no se generó valor público tangible que mejorara la calidad de vida o la experiencia del ciudadano." },
                    { "id": "B", "text": "La impresión masiva de folletos constituye por sí sola la máxima expresión del valor público en la administración moderna." },
                    { "id": "C", "text": "El valor público se mide únicamente por el presupuesto ejecutado sin importar la opinión de los usuarios." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El valor público en MIPG se materializa cuando las acciones del Estado resuelven necesidades reales de los ciudadanos con calidad y eficacia, y no por el simple conteo de productos físicos o folletos entregados.",
                    "distractors": [
                        { "id": "B", "reason": "El activismo administrativo o la impresión de piezas sin impacto en el servicio no genera valor público." },
                        { "id": "C", "reason": "El valor público se valida en la percepción y satisfacción del destinatario final de la gestión pública." }
                    ]
                }
            },
            {
                "id": 204,
                "topic": "Articulación del Ciclo PHVA en las 7 Dimensiones",
                "caseText": "En una mesa técnica se debate cómo se ordenan las dimensiones del MIPG dentro del ciclo clásico de mejoramiento continuo.",
                "statement": "La correspondencia técnica correcta entre las dimensiones del modelo y el ciclo PHVA es:",
                "options": [
                    { "id": "A", "text": "Planear (Direccionamiento Estratégico), Hacer (Gestión con Valores), Verificar (Evaluación de Resultados) y Actuar (Control Interno y Mejoramiento Continuo)." },
                    { "id": "B", "text": "Planear (Control Interno), Hacer (Talento Humano), Verificar (Direccionamiento) y Actuar (Información)." },
                    { "id": "C", "text": "El MIPG no sigue el ciclo PHVA porque este fue derogado expresamente por el Decreto 1083 de 2015." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Manual Operativo de MIPG estructura sus dimensiones operativas sobre la lógica de la mejora continua: Direccionamiento (Planear), Gestión para Resultados (Hacer), Evaluación (Verificar) y Control Interno (Actuar/Asegurar).",
                    "distractors": [
                        { "id": "B", "reason": "El orden propuesto es incoherente; Control Interno no es la etapa de planeación inicial." },
                        { "id": "C", "reason": "El ciclo PHVA es la base conceptual y metodológica de la operación de MIPG en el Estado colombiano." }
                    ]
                }
            },
            {
                "id": 205,
                "topic": "Toma de Decisiones Basada en Evidencia",
                "caseText": "La dirección de un área propone modificar drásticamente el procedimiento de aforo de mercancías sin consultar estadísticas históricas de aprehensiones, quejas de usuarios ni mapas de riesgo.",
                "statement": "Frente a este planteamiento, el principio de MIPG que se está vulnerando es:",
                "options": [
                    { "id": "A", "text": "Toma de decisiones basada en evidencia, el cual exige fundamentar las modificaciones de políticas y procesos en datos confiables, diagnósticos y análisis estadísticos objetivos." },
                    { "id": "B", "text": "Principio de autonomía judicial, el cual obliga a no recopilar datos antes de formular proyectos de inversión." },
                    { "id": "C", "text": "Principio de gratuidad de la prueba, que impide utilizar estadísticas en trámites aduaneros." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Uno de los cinco principios rectores del MIPG es la toma de decisiones basada en evidencia, que erradica la intuición y la improvisación en el diseño de planes institucionales mediante el uso riguroso de datos y diagnósticos.",
                    "distractors": [
                        { "id": "B", "reason": "La autonomía judicial rige para los jueces de la República, no para la toma de decisiones administrativas en la DIAN." },
                        { "id": "C", "reason": "La gratuidad de la prueba no guarda relación alguna con los principios de planeación y gestión de MIPG." }
                    ]
                }
            },
            {
                "id": 206,
                "topic": "Gestión con Valores para Resultados: Ventanilla Hacia Adentro vs. Hacia Afuera",
                "caseText": "Al revisar la Dimensión 3 de MIPG (Gestión con Valores para Resultados), se identifica la necesidad de clasificar las políticas según su enfoque de entrega de servicio.",
                "statement": "La clasificación correcta entre la ventanilla hacia adentro y hacia afuera corresponde a:",
                "options": [
                    { "id": "A", "text": "Hacia adentro: Gestión Presupuestal, Gobierno Digital y Fortalecimiento Organizacional. Hacia afuera: Servicio al Ciudadano, Racionalización de Trámites y Participación Ciudadana." },
                    { "id": "B", "text": "Hacia adentro comprende exclusivamente la atención en ventanillas físicas de servicio y hacia afuera las auditorías internas de la OCI." },
                    { "id": "C", "text": "Todas las políticas son únicamente de ventanilla hacia adentro, ya que el ciudadano no tiene relación con el MIPG." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Manual Operativo divide la Dimensión 3 en dos frentes: ventanilla hacia adentro (adecuación de procesos, tecnologías y presupuesto) y ventanilla hacia afuera (relacionamiento directo, trámites ágiles y servicio al ciudadano).",
                    "distractors": [
                        { "id": "B", "reason": "La atención física al ciudadano es una política de ventanilla hacia afuera, no hacia adentro." },
                        { "id": "C", "reason": "El ciudadano es el beneficiario central y fin primordial del MIPG (valor público)." }
                    ]
                }
            },
            {
                "id": 207,
                "topic": "Transparencia y Acceso a la Información (Ley 1712 de 2014)",
                "caseText": "Un ciudadano solicita el organigrama actualizado, las escalas salariales y el plan de adquisiciones de la entidad. El funcionario encargado rechaza la solicitud aduciendo 'reserva estratégica interna'.",
                "statement": "A la luz de la Ley 1712 de 2014 y la Dimensión de Información y Comunicación de MIPG, la respuesta es incorrecta porque:",
                "options": [
                    { "id": "A", "text": "Esa información corresponde a transparencia activa obligatoria que debe estar publicada y permanentemente accesible en la página web institucional." },
                    { "id": "B", "text": "La información de gastos públicos solo se entrega a quienes demuestren un interés jurídico directo mediante abogado titulado." },
                    { "id": "C", "text": "La ley de transparencia solo aplica a los municipios de sexta categoría y no a entidades del orden nacional." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ley 1712 de 2014 define la transparencia activa como el deber de publicar de oficio y sin necesidad de solicitud ciudadana la estructura orgánica, funciones, salarios, presupuestos y planes de contratación de la entidad.",
                    "distractors": [
                        { "id": "B", "reason": "El acceso a la información pública es un derecho universal; no exige interés particular ni apoderado judicial." },
                        { "id": "C", "reason": "La Ley 1712 de 2014 rige obligatoriamente para todas las entidades del Estado en todos los órdenes." }
                    ]
                }
            },
            {
                "id": 208,
                "topic": "Gestión del Conocimiento y la Innovación en MIPG",
                "caseText": "Varios funcionarios expertos en fiscalización tributaria están próximos a su edad de retiro forzoso y se detecta el riesgo inminente de perder sus metodologías de auditoría y saberes prácticos no documentados.",
                "statement": "Para mitigar este riesgo conforme a la Dimensión 6 de MIPG, a la entidad le corresponde:",
                "options": [
                    { "id": "A", "text": "Implementar un plan de captura, transferencia y memoria institucional del conocimiento tácito a explícito, mediante lecciones aprendidas y mentorías con servidores jóvenes." },
                    { "id": "B", "text": "Prohibir la jubilación de los funcionarios hasta que memoricen el nuevo estatuto aduanero." },
                    { "id": "C", "text": "Contratar una auditoría forense externa para incautar los cuadernos personales de los funcionarios." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Dimensión de Gestión del Conocimiento e Innovación busca preservar el capital intelectual del Estado, transfiriendo el conocimiento tácito de los servidores con experiencia hacia repositorios institucionales y equipos de relevo.",
                    "distractors": [
                        { "id": "B", "reason": "El retiro por edad legal forzosa (70 años) es un mandato legal improrrogable que no puede ser condicionado administrativamente." },
                        { "id": "C", "reason": "La gestión del conocimiento es un proceso pedagógico y colaborativo, no una incautación judicial hostil." }
                    ]
                }
            },
            {
                "id": 209,
                "topic": "Comités Institucionales en el Decreto 1499 de 2017",
                "caseText": "Un jefe de oficina propone crear un comité independiente para revisar exclusivamente el protocolo de archivo y correspondencia, con funciones desarticuladas del Comité Institucional de Gestión y Desempeño.",
                "statement": "Al analizar esta propuesta con base en el Decreto 1499 de 2017, al profesional le corresponde señalar que:",
                "options": [
                    { "id": "A", "text": "Es inviable, ya que el Comité Institucional de Gestión y Desempeño absorbió las funciones de los antiguos comités sectoriales y temáticos de la entidad para garantizar la unicidad de mando." },
                    { "id": "B", "text": "Es obligatoria la creación de comités aislados para cada uno de los 50 procesos del mapa institucional." },
                    { "id": "C", "text": "La propuesta debe remitirse al Congreso de la República para que autorice la creación del nuevo comité mediante ley estatutaria." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 1499 de 2017 unificó los comités temáticos preexistentes en un único Comité Institucional de Gestión y Desempeño en cada entidad, evitando la dispersión de esfuerzos decisorios.",
                    "distractors": [
                        { "id": "B", "reason": "La creación de comités fragmentados contradice frontalmente la simplificación y agilidad que promueve MIPG." },
                        { "id": "C", "reason": "Las instancias internas de coordinación administrativa se reglamentan por decreto del ejecutivo, no por leyes estatutarias del Congreso." }
                    ]
                }
            },
            {
                "id": 210,
                "topic": "Autodiagnósticos de Madurez en MIPG",
                "caseText": "Antes de iniciar la planeación estratégica de la vigencia, la dependencia de planeación requiere conocer el nivel de cumplimiento y las fortalezas institucionales en la política de servicio al ciudadano.",
                "statement": "De acuerdo con el Manual Operativo del MIPG, el instrumento oficial para realizar esta valoración diagnóstica es:",
                "options": [
                    { "id": "A", "text": "La herramienta de Autodiagnóstico oficial dispuesta por el DAFP para evaluar el nivel de madurez y cumplimiento de la respectiva política pública." },
                    { "id": "B", "text": "Una encuesta informal de satisfacción realizada en redes sociales sin rigor metodológico." },
                    { "id": "C", "text": "El libro de quejas físicas de la recepción sin ningún análisis de causas." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El DAFP diseñó instrumentos estandarizados de Autodiagnóstico para cada una de las políticas de MIPG, los cuales permiten a las entidades evaluar sus brechas antes de formular planes de acción o reportar en FURAG.",
                    "distractors": [
                        { "id": "B", "reason": "Las redes sociales no reemplazan las matrices técnicas de diagnóstico basadas en variables normativas oficiales del DAFP." },
                        { "id": "C", "reason": "El libro de quejas es un insumo complementario, pero no constituye la metodología formal de autodiagnóstico del modelo." }
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
                    { "id": "A", "text": "Autocontrol, el cual exige a cada funcionario evaluar y controlar de forma permanente su trabajo y corregir desvíos oportunamente." },
                    { "id": "B", "text": "Inmunidad jurisdiccional, que faculta a los servidores a omitir reportes si no existe orden judicial previa." },
                    { "id": "C", "text": "Cosa juzgada material, ya que los cálculos de computadores no pueden ser objetados por seres humanos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El principio de autocontrol (Ley 87 de 1993 y MECI) responsabiliza a cada servidor del aseguramiento y verificación continua de la calidad y exactitud de su labor, sin delegar pasivamente el control en terceros.",
                    "distractors": [
                        { "id": "B", "reason": "La inmunidad jurisdiccional es una figura del derecho internacional diplomático sin relación con el control interno." },
                        { "id": "C", "reason": "El principio de cosa juzgada aplica a sentencias judiciales definitivas, no a rutinas operativas de software." }
                    ]
                }
            },
            {
                "id": 302,
                "topic": "Los 5 Componentes de COSO 2013 / MECI",
                "caseText": "En la evaluación del sistema de control interno se constata que la alta dirección de la DIAN promueve activamente el Código de Integridad, define líneas claras de autoridad y capacita permanentemente a sus colaboradores en ética pública.",
                "statement": "A la luz del marco COSO 2013 y la Dimensión 7 de MIPG, estas acciones fortalecen prioritariamente el componente de:",
                "options": [
                    { "id": "A", "text": "Ambiente de Control, dado que establece el tono ético de la organización, la estructura de gobierno y la cultura de integridad institucional." },
                    { "id": "B", "text": "Actividades de Monitoreo exclusivamente, ya que la ética solo se evalúa en auditorías posteriores." },
                    { "id": "C", "text": "Evaluación del Riesgo Tecnológico de redes de cómputo." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Ambiente de Control es la base y cimiento de los cinco componentes de COSO 2013; comprende el compromiso ético, la filosofía de la dirección, la integridad y la estructura de responsabilidad de la entidad.",
                    "distractors": [
                        { "id": "B", "reason": "El monitoreo evalúa el funcionamiento continuo del sistema, pero el ambiente de control es quien instaura los valores y la cultura." },
                        { "id": "C", "reason": "La evaluación de riesgos tecnológicos es un proceso analítico específico, no el marco de conducta ética institucional." }
                    ]
                }
            },
            {
                "id": 303,
                "topic": "Primera Línea de Defensa (Línea Operativa)",
                "caseText": "Un profesional de fiscalización sostiene que la identificación de riesgos en las auditorías tributarias debe ser realizada por la Oficina de Planeación y no por los funcionarios que ejecutan los operativos en campo.",
                "statement": "De acuerdo con el modelo de Líneas de Defensa del Decreto 648 de 2017, la postura del profesional es incorrecta porque:",
                "options": [
                    { "id": "A", "text": "Los líderes de proceso y los servidores en su operación diaria conforman la Primera Línea de Defensa, siendo los dueños directos de la gestión y mitigación del riesgo en tiempo real." },
                    { "id": "B", "text": "La primera línea de defensa está integrada exclusivamente por el Director General de la DIAN y el Ministro de Hacienda." },
                    { "id": "C", "text": "Los funcionarios operativos no tienen facultades para conocer los mapas de riesgo institucionales por orden legal." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Bajo el esquema de líneas de defensa (Decreto 648/2017 y DAFP), la Primera Línea está constituida por los líderes y ejecutores directos de los procesos, quienes son los dueños de los riesgos y de los controles preventivos diarios.",
                    "distractors": [
                        { "id": "B", "reason": "El Director General conforma la Línea Estratégica, no la Primera Línea operativa." },
                        { "id": "C", "reason": "Todos los servidores deben conocer y aplicar activamente los controles de los riesgos de sus procesos." }
                    ]
                }
            },
            {
                "id": 304,
                "topic": "Segunda Línea de Defensa (Monitoreo y Supervisión)",
                "caseText": "La Oficina de Planeación y el equipo de Gestión del Riesgo de la DIAN diseñan metodologías para mapas de riesgo, emiten alertas tempranas y consolidan tableros de control de indicadores institucionales.",
                "statement": "Dentro del esquema de control interno del Estado colombiano, estas dependencias operan como:",
                "options": [
                    { "id": "A", "text": "Segunda Línea de Defensa, encargada de facilitar metodologías, monitorear y supervisar de forma continua la gestión del riesgo y el control en la entidad." },
                    { "id": "B", "text": "Tercera Línea de Defensa, con funciones de aseguramiento independiente y sanción disciplinaria de funcionarios." },
                    { "id": "C", "text": "Órganos externos de control fiscal adscritos a la Contraloría General de la República." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Segunda Línea de Defensa está integrada por dependencias como Planeación, Riesgos, Calidad y Seguridad de la Información, cuya función es dar soporte metodológico y monitorear la aplicación de controles de la primera línea.",
                    "distractors": [
                        { "id": "B", "reason": "La Tercera Línea corresponde privativamente a la Oficina de Control Interno / Auditoría Interna." },
                        { "id": "C", "reason": "Planeación es una dependencia interna de la DIAN, no un organismo de control externo fiscal." }
                    ]
                }
            },
            {
                "id": 305,
                "topic": "Tercera Línea de Defensa (Independencia y No Coadministración)",
                "caseText": "Un jefe de área operativa solicita a la Oficina de Control Interno que redacte y apruebe las resoluciones de liquidación oficial de tributos para 'estar seguros de que no tienen errores'.",
                "statement": "Frente a este requerimiento, a la Oficina de Control Interno le corresponde:",
                "options": [
                    { "id": "A", "text": "Rechazar la solicitud, explicando que su rol es de evaluación independiente y aseguramiento posterior; coadministrar o redactar actos de proceso destruiría su independencia objetiva de auditoría." },
                    { "id": "B", "text": "Aceptar la redacción de los actos administrativos siempre que se le reconozca una bonificación especial de auditoría." },
                    { "id": "C", "text": "Asumir la dirección del área operativa y relevar al jefe titular de sus funciones de forma indefinida." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ley 87 de 1993 y las normas de auditoría pública prohíben a la OCI coadministrar o ejecutar actos propios de la administración activa. Si la OCI redactara las liquidaciones, se convertiría en juez y parte perdiendo la independencia para auditarlas.",
                    "distractors": [
                        { "id": "B", "reason": "No procede reconocimiento económico ni legal para una actuación abiertamente violatoria de la ley de control interno." },
                        { "id": "C", "reason": "La OCI no tiene facultades jerárquicas para remover o relevar a los jefes de las áreas operativas de la entidad." }
                    ]
                }
            },
            {
                "id": 306,
                "topic": "Componente de Evaluación del Riesgo: Apetito y Tolerancia al Riesgo",
                "caseText": "En la actualización de la matriz de riesgos del proceso de recaudo tributario se discute la posibilidad de aceptar un riesgo de fraude sin implementar ningún control preventivo.",
                "statement": "A la luz de la Guía de Gestión del Riesgo del DAFP, esta decisión es inviable porque:",
                "options": [
                    { "id": "A", "text": "Los riesgos asociados a fraude y corrupción tienen tolerancia cero en el sector público y exigen obligatoriamente la implementación de controles rigurosos de mitigación." },
                    { "id": "B", "text": "Las entidades públicas pueden asumir riesgos de corrupción siempre que el monto sea inferior a 50 salarios mínimos." },
                    { "id": "C", "text": "Los riesgos solo se controlan si están contemplados en el Plan Nacional de Desarrollo." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la política de gestión del riesgo y lucha contra la corrupción del Estado colombiano, el apetito de riesgo frente a actos de corrupción o fraude es CERO. No es admisible aceptar o tolerar pasivamente el riesgo de corrupción.",
                    "distractors": [
                        { "id": "B", "reason": "En ninguna circunstancia o cuantía se admite tolerancia a la corrupción en la función pública." },
                        { "id": "C", "reason": "La gestión del riesgo abarca todos los procesos del mapa de la entidad, independientemente de menciones directas en el PND." }
                    ]
                }
            },
            {
                "id": 307,
                "topic": "Actividades de Control: Controles Preventivos vs. Detectivos",
                "caseText": "Una seccional implementa dos medidas para la seguridad de mercancías en depósito aduanero: (1) Validación biométrica previa al ingreso a la bodega, y (2) Conteo físico de inventario al final de cada mes.",
                "statement": "Técnicamente, estas actividades de control se clasifican respectivamente como:",
                "options": [
                    { "id": "A", "text": "Control preventivo (la validación biométrica que evita el acceso no autorizado) y control detectivo (el conteo que identifica descuadres ya ocurridos)." },
                    { "id": "B", "text": "Ambos son controles correctivos orientados a sancionar penalmente al infractor." },
                    { "id": "C", "text": "Ambos son controles indemnizatorios regidos por pólizas de seguros privadas." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Los controles preventivos actúan antes de la ocurrencia del evento de riesgo para impedir su materialización (biometría previa); los controles detectivos identifican la materialización del riesgo después de ocurrida para activar acciones de contingencia (conteo mensual).",
                    "distractors": [
                        { "id": "B", "reason": "El control preventivo no sanciona a posteriori; previene activamente el hecho." },
                        { "id": "C", "reason": "La clasificación del control en auditoría no se basa en pólizas mercantiles, sino en su momento de actuación (preventivo, detectivo, correctivo)." }
                    ]
                }
            },
            {
                "id": 308,
                "topic": "Información y Comunicación en el Control Interno",
                "caseText": "Un área de fiscalización detecta un nuevo esquema masivo de facturación fraudulenta operado por empresas de papel, pero decide no compartir la alerta con las áreas de aduanas ni de analítica de datos de la DIAN.",
                "statement": "Esta decisión vulnera el componente de Información y Comunicación de COSO / MECI porque:",
                "options": [
                    { "id": "A", "text": "Impide el flujo oportuno y transversal de la información crítica necesaria para que toda la entidad active alertas tempranas y controles coordinados." },
                    { "id": "B", "text": "La información de fraudes solo debe comunicarse a medios de comunicación antes que a las dependencias internas." },
                    { "id": "C", "text": "El componente de información prohíbe el uso de bases de datos compartidas en el Estado." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El componente de Información y Comunicación exige que la información operativa relevante se transmita transversalmente a lo largo de toda la organización para blindar los controles y tomar decisiones oportunas.",
                    "distractors": [
                        { "id": "B", "reason": "Filtrar investigaciones en curso a medios antes que coordinar internamente vulnera la reserva legal y frustra los operativos de fiscalización." },
                        { "id": "C", "reason": "El modelo promueve la interoperabilidad y el cruce de datos institucionales, no los silos aislados." }
                    ]
                }
            },
            {
                "id": 309,
                "topic": "Supervisión y Monitoreo Continuo",
                "caseText": "Al revisar el funcionamiento de los controles de un trámite web, se observa que hace tres años no se verifica si el algoritmo de validación de cédulas sigue funcionando correctamente.",
                "statement": "Esta omisión afecta directamente el componente de:",
                "options": [
                    { "id": "A", "text": "Actividades de Monitoreo, puesto que los controles deben ser evaluados periódicamente para verificar que conservan su vigencia, idoneidad y eficacia ante nuevos riesgos." },
                    { "id": "B", "text": "Principio de publicidad pasiva en medios masivos de prensa." },
                    { "id": "C", "text": "Régimen disciplinario de los notarios públicos de Bogotá." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El componente de Actividades de Monitoreo / Supervisión asegura que los controles del sistema no se vuelvan obsoletos o inoperantes con el paso del tiempo, exigiendo evaluaciones continuas o periódicas de su eficacia.",
                    "distractors": [
                        { "id": "B", "reason": "El monitoreo de controles internos es técnico y operativo, sin relación con publicaciones en prensa." },
                        { "id": "C", "reason": "No guarda ninguna pertinencia con el régimen de notarios." }
                    ]
                }
            },
            {
                "id": 310,
                "topic": "Comité Institucional de Coordinación de Control Interno",
                "caseText": "Se convoca a sesión del Comité Institucional de Coordinación de Control Interno de la DIAN para definir las prioridades del Plan Anual de Auditoría de la vigencia.",
                "statement": "De acuerdo con el Decreto 648 de 2017, la secretaría técnica de este comité corresponde a:",
                "options": [
                    { "id": "A", "text": "El Jefe de la Oficina de Control Interno (o quien haga sus veces), actuando con voz pero sin voto para salvaguardar su independencia evaluadora." },
                    { "id": "B", "text": "El personero municipal con voto dirimente y veto presidencial." },
                    { "id": "C", "text": "El representante de los contratistas de servicios generales." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El Decreto 648 de 2017 establece expresamente que el Jefe de la Oficina de Control Interno ejerce la secretaría técnica del Comité Institucional de Coordinación de Control Interno, participando con voz pero sin voto.",
                    "distractors": [
                        { "id": "B", "reason": "Los personeros municipales no integran comités de entidades del orden nacional como la DIAN." },
                        { "id": "C", "reason": "La secretaría técnica es privativa del Jefe de Control Interno de la entidad." }
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
                    { "id": "A", "text": "La Condición (la ausencia de actas firmadas observada en los expedientes) y el Criterio (el artículo 185 del Decreto 1165 de 2019 que exige la firma obligatoria)." },
                    { "id": "B", "text": "La Causa (la falta de actas) y el Efecto (el decreto aduanero citado)." },
                    { "id": "C", "text": "La Recomendación (el expediente revisado) y la Sanción penal directa." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "En la metodología oficial de auditoría pública, la Condición es la situación de hecho evidenciada (lo que es), mientras que el Criterio es la norma o parámetro legal con el cual se contrasta la realidad (lo que debe ser).",
                    "distractors": [
                        { "id": "B", "reason": "Una norma no es un efecto; la norma es el criterio legal de comparación." },
                        { "id": "C", "reason": "Un expediente no es una recomendación; es una evidencia probatoria de la condición." }
                    ]
                }
            },
            {
                "id": 402,
                "topic": "Estructura del Hallazgo: Causa Raíz vs. Efecto",
                "caseText": "Siguiendo con el caso anterior, se determina que las actas no se firmaron porque el aplicativo digital no tiene habilitada la firma electrónica en dispositivos móviles de puerto, lo que generó un riesgo inminente de nulidad de los decomisos aduaneros.",
                "statement": "En la estructura técnica del hallazgo, estos dos elementos corresponden a:",
                "options": [
                    { "id": "A", "text": "La Causa (la falla del aplicativo que no permite firmar en dispositivos móviles) y el Efecto (el riesgo de nulidad jurídica de los decomisos)." },
                    { "id": "B", "text": "La Condición (la nulidad de los decomisos) y el Criterio (la falla técnica de software)." },
                    { "id": "C", "text": "El Plan de mejoramiento inmediato sin necesidad de emitir informe de auditoría." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Causa es la razón originaria de la desviación (falla del sistema que impide firmar), y el Efecto es el impacto o perjuicio potencial generado para la entidad (nulidad de decomisos e inseguridad jurídica).",
                    "distractors": [
                        { "id": "B", "reason": "La nulidad es la consecuencia futura (efecto) y la falla de software es el origen (causa)." },
                        { "id": "C", "reason": "El plan de mejoramiento es posterior a la formalización del hallazgo en el informe de auditoría." }
                    ]
                }
            },
            {
                "id": 403,
                "topic": "Formulación Correcta de Acciones en Planes de Mejoramiento",
                "caseText": "Un líder de proceso auditado propone como 'acción correctiva' ante la falta de actas de inspección aduanera: 'Imprimir todas las actas pendientes y firmarlas con fecha de hoy'.",
                "statement": "Al evaluar la viabilidad técnica de esta acción correctiva, al Gestor II le corresponde conceptuar que:",
                "options": [
                    { "id": "A", "text": "Es inadecuada, puesto que se limita a remediar superficialmente la condición pero no elimina la causa raíz (la falta de firma electrónica móvil), arriesgando la recurrencia futura del hallazgo." },
                    { "id": "B", "text": "Es la mejor solución posible porque maquilla el informe y evita investigaciones de la Contraloría." },
                    { "id": "C", "text": "Es plenamente válida siempre que se use tinta indeleble de color azul oscuro." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Las acciones de un Plan de Mejoramiento deben eliminar la CAUSA RAÍZ para garantizar que la falla no se repita. Poner firmas extemporáneas no soluciona la falencia tecnológica del proceso y puede constituir falsedad ideológica.",
                    "distractors": [
                        { "id": "B", "reason": "Maquillar informes o alterar fechas es una conducta corrupta sancionable penal y disciplinariamente." },
                        { "id": "C", "reason": "El color de la tinta no subsana la ineficacia de la acción frente a la causa estructural del problema." }
                    ]
                }
            },
            {
                "id": 404,
                "topic": "Papeles de Trabajo de Auditoría",
                "caseText": "Un auditor interno emite un informe definitivo con un hallazgo de presunto daño fiscal por $500 millones, pero no adjuntó copias de los contratos, ni comprobantes de egreso, ni cédulas analíticas que sustenten el cálculo.",
                "statement": "A la luz de las normas internacionales de auditoría (IIA) y la Guía DAFP v4, el informe adolece de una falla grave porque:",
                "options": [
                    { "id": "A", "text": "Carece de evidencia suficiente, competente, relevante y documentada en los Papeles de Trabajo que respalde las conclusiones del auditor." },
                    { "id": "B", "text": "El auditor debió publicar primero el hallazgo en sus redes sociales personales para verificar la opinión pública." },
                    { "id": "C", "text": "Los informes de auditoría no requieren pruebas documentales si el auditor tiene nombramiento en carrera." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Los Papeles de Trabajo son el sustento probatorio irrefutable de la labor del auditor. Ningún hallazgo ni conclusión puede consignarse en un informe sin contar con evidencia documental suficiente, competente y verificable.",
                    "distractors": [
                        { "id": "B", "reason": "Divulgar datos de auditorías en redes sociales viola el deber de reserva y confidencialidad." },
                        { "id": "C", "reason": "La condición de funcionario de carrera no exonera de la carga probatoria rigurosa en el ejercicio de auditoría." }
                    ]
                }
            },
            {
                "id": 405,
                "topic": "Mesa de Trabajo y Contradicción del Informe Preliminar",
                "caseText": "Tras culminar la fase de ejecución de la auditoría, la Oficina de Control Interno remite el informe preliminar al área evaluada para que presente sus aclaraciones y soportes en un término de 5 días hábiles.",
                "statement": "Esta etapa del ciclo de auditoría tiene por objeto:",
                "options": [
                    { "id": "A", "text": "Garantizar el debido proceso, la contradicción y validar conjuntamente la veracidad de los hechos observados antes de emitir el informe definitivo." },
                    { "id": "B", "text": "Permitir que el área evaluada negocie con los auditores la eliminación de hallazgos a cambio de favores personales." },
                    { "id": "C", "text": "Declarar la nulidad de la auditoría por vencimiento de términos de la ley civil." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El traslado del informe preliminar y la mesa de trabajo aseguran el principio de contradicción y objetividad, permitiendo que el área auditada aclare malentendidos o aporte soportes documentales omitidos antes de fijar los hallazgos definitivos.",
                    "distractors": [
                        { "id": "B", "reason": "Los hallazgos no son objeto de negociación ni transacciones indebidas; se sustentan exclusivamente en pruebas técnicas." },
                        { "id": "C", "reason": "El traslado reglamentario no anula la auditoría; es una fase formal obligatoria de la misma." }
                    ]
                }
            },
            {
                "id": 406,
                "topic": "Plan Anual de Auditoría Basado en Riesgos",
                "caseText": "Al estructurar el Plan Anual de Auditoría de la vigencia, la OCI decide auditar únicamente procesos rutinarios de bajo impacto y excluir de la muestra a los macroprocesos de Fiscalización Aduanera y Cobro Coactivo que tienen la mayor concentración de riesgos de corrupción.",
                "statement": "De acuerdo con el enfoque moderno de auditoría del DAFP, este plan es deficiente porque:",
                "options": [
                    { "id": "A", "text": "Desconoce el enfoque de Auditoría Basada en Riesgos, el cual exige priorizar los procesos institucionales con mayor exposición y probabilidad de materialización de riesgos críticos." },
                    { "id": "B", "text": "Es óptimo, puesto que las auditorías deben realizarse donde sea más fácil encontrar aprobaciones rápidas de metas." },
                    { "id": "C", "text": "La ley prohíbe que la Oficina de Control Interno evalúe procesos misionales de fiscalización tributaria." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Guía de Auditoría del DAFP v4 establece que el universo auditable se prioriza con base en el Mapa de Aseguramiento y la matriz de riesgos institucional, focalizando los recursos en las áreas de mayor criticidad y valor público.",
                    "distractors": [
                        { "id": "B", "reason": "Auditar lo trivial para mostrar resultados fáciles desconoce el rol de aseguramiento estratégico de la OCI." },
                        { "id": "C", "reason": "La OCI tiene competencia para auditar todos los procesos de la entidad, incluidos los misionales y de fiscalización." }
                    ]
                }
            },
            {
                "id": 407,
                "topic": "Seguimiento a Hallazgos de Entes Externos (CGR)",
                "caseText": "La Contraloría General de la República (CGR) notificó a la DIAN un informe final con 12 hallazgos administrativos con presunto alcance disciplinario y fiscal en un contrato de tecnología.",
                "statement": "Dentro del marco del Decreto 648 de 2017, la responsabilidad de la Oficina de Control Interno frente a este informe consiste en:",
                "options": [
                    { "id": "A", "text": "Coordinar la consolidación y hacer seguimiento riguroso al cumplimiento del Plan de Mejoramiento Institucional suscrito ante la Contraloría General." },
                    { "id": "B", "text": "Archivar el informe en un casillero cerrado para que la ciudadanía no conozca las observaciones de la Contraloría." },
                    { "id": "C", "text": "Sancionar penalmente al Director General de la DIAN mediante sentencia privativa de la libertad." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Uno de los 5 roles clave de la OCI (Decreto 648/2017) es la relación con entes externos de control, facilitando la interlocución y realizando el seguimiento trimestral a la efectividad de los planes de mejora suscritos ante la CGR.",
                    "distractors": [
                        { "id": "B", "reason": "Los informes de la Contraloría son públicos y el plan de mejoramiento tiene seguimiento formal ante el ente fiscal." },
                        { "id": "C", "reason": "La OCI no tiene facultades penales ni judiciales; las sanciones privativas de la libertad son privativas de los jueces de la República." }
                    ]
                }
            },
            {
                "id": 408,
                "topic": "Criterios para el Cierre Efectivo de Hallazgos",
                "caseText": "El líder de un proceso solicita el cierre de un hallazgo de auditoría aportando como única evidencia una circular informativa remitida por correo electrónico a sus subalternos.",
                "statement": "Para proceder con rigor metodológico, al Gestor II le corresponde verificar que:",
                "options": [
                    { "id": "A", "text": "Existan evidencias tangibles y comprobables de que la causa raíz fue efectivamente subsanada y que las conductas u operaciones se ajustan de manera sostenida al estándar legal." },
                    { "id": "B", "text": "El correo se haya enviado con copia a todos los ministros del despacho presidencial." },
                    { "id": "C", "text": "Los hallazgos se cierren automáticamente al cumplirse tres meses de su emisión sin necesidad de revisar soportes." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El cierre formal de un hallazgo exige verificar la eficacia de la acción de mejora mediante pruebas de cumplimiento que demuestren que la irregularidad cesó y no volverá a ocurrir.",
                    "distractors": [
                        { "id": "B", "reason": "Copiar a ministros no demuestra la corrección real ni la efectividad del proceso evaluado." },
                        { "id": "C", "reason": "El cierre de un hallazgo no opera por vencimiento de plazos, sino por verificación objetiva de cumplimiento." }
                    ]
                }
            },
            {
                "id": 409,
                "topic": "Técnicas de Auditoría: Muestreo Representativo",
                "caseText": "En un universo de 200.000 declaraciones aduaneras presentadas durante el año, el auditor decide revisar únicamente tres declaraciones de un mismo importador y generaliza sus conclusiones afirmando que el 100% de la seccional opera con fallas graves.",
                "statement": "Esta conclusión técnica es científicamente inválida porque:",
                "options": [
                    { "id": "A", "text": "Vulnera las técnicas de muestreo de auditoría, ya que una muestra no probabilística ni representativa no permite extrapolar conclusiones válidas sobre la totalidad del universo." },
                    { "id": "B", "text": "El auditor debió revisar físicamente los 200.000 expedientes uno por uno sin excepción en un solo día laboral." },
                    { "id": "C", "text": "Las normas de auditoría pública exigen que las muestras sean elegidas por los administrados objeto de control." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "Las normas de auditoría pública (Guía DAFP) exigen que las muestras seleccionadas tengan representatividad estadística o sigan criterios objetivos de estratificación por riesgo para formular conclusiones válidas sobre el proceso.",
                    "distractors": [
                        { "id": "B", "reason": "El muestreo existe precisamente para evitar la revisión exhaustiva ineficiente del 100% de universos masivos." },
                        { "id": "C", "reason": "El auditor debe mantener total independencia en la selección de la muestra; no la eligen los auditados." }
                    ]
                }
            },
            {
                "id": 410,
                "topic": "Código de Ética del Auditor Interno",
                "caseText": "Un auditor interno recibe información confidencial sobre presuntas irregularidades tributarias de una empresa reconocida durante una auditoría a los servidores de datos de la DIAN, y decide comentar los detalles en una cena familiar.",
                "statement": "Frente al Código de Ética de Auditoría Interna y el artículo 583 del Estatuto Tributario, la conducta del auditor es:",
                "options": [
                    { "id": "A", "text": "Gravísima, puesto que vulneró el principio de Confidencialidad y el deber legal inquebrantable de Reserva Tributaria de los datos fiscales a los que accedió por su cargo." },
                    { "id": "B", "text": "Aceptable, siempre que en la cena familiar no estuvieran presentes periodistas reconocidos." },
                    { "id": "C", "text": "Irrelevante, dado que los auditores internos no están sujetos a la reserva legal de los expedientes oficiales." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El auditor interno está sujeto al principio de Confidencialidad del IIA y a la Reserva Tributaria (Art. 583 E.T.). Revelar datos tributarios de contribuyentes fuera del ámbito funcional constituye delito penal y falta disciplinaria gravísima.",
                    "distractors": [
                        { "id": "B", "reason": "La reserva legal rige frente a cualquier tercero ajeno a la administración, incluidos amigos y familiares." },
                        { "id": "C", "reason": "Los auditores tienen acceso privilegiado y están sometidos con mayor rigor al deber de reserva legal de la información." }
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
                    { "id": "A", "text": "Faltó el elemento del Diálogo y la Responsabilidad, limitándose a una exposición unilateral de información sin espacio para la deliberación ni la concertación de compromisos." },
                    { "id": "B", "text": "La rendición de cuentas solo es válida si se contrata una empresa de espectáculos artísticos en un estadio de fútbol." },
                    { "id": "C", "text": "La ley prohíbe que los directores de entidades públicas hablen por más de 15 minutos en eventos públicos." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El MURC consagra tres elementos inseparables: Información, Diálogo y Responsabilidad/Incentivos. La rendición de cuentas no es un monólogo expositivo; exige debate bidireccional y asunción de compromisos de mejora ante la comunidad.",
                    "distractors": [
                        { "id": "B", "reason": "La rendición de cuentas es un proceso técnico-democrático, no un evento de entretenimiento masivo." },
                        { "id": "C", "reason": "No existe límite de tiempo formal para la intervención, pero sí la obligación ineludible de garantizar tiempo suficiente para el diálogo ciudadano." }
                    ]
                }
            },
            {
                "id": 502,
                "topic": "Uso del Lenguaje Claro en la Rendición de Cuentas",
                "caseText": "El informe de gestión preparado para la ciudadanía utiliza términos jurídicos tributarios en latín, siglas internas de aplicativos informáticos de la DIAN y tablas matriciales sin leyendas explicativas.",
                "statement": "Para adecuar el documento a la Política de Lenguaje Claro y al MURC, al Gestor II le corresponde:",
                "options": [
                    { "id": "A", "text": "Traducir los contenidos a un lenguaje accesible, comprensible y directo, apoyándose en resúmenes ejecutivos, infografías y glosarios de términos para los ciudadanos." },
                    { "id": "B", "text": "Mantener la jerga hermética para demostrar la superioridad técnica de la administración pública frente a los contribuyentes." },
                    { "id": "C", "text": "Eliminar todos los datos numéricos y presentar únicamente fotografías de las fachadas de las oficinas de la entidad." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La política de Lenguaje Claro del DAFP y la Ley 1712 de 2014 exigen comunicar en forma clara, sencilla y comprensible para que cualquier ciudadano, sin importar su nivel de formación, pueda entender el uso de los recursos públicos.",
                    "distractors": [
                        { "id": "B", "reason": "La jerga excluyente contradice el propósito democratizador y transparente de la rendición de cuentas." },
                        { "id": "C", "reason": "Omitir los datos numéricos impide evaluar el cumplimiento de metas y la ejecución del presupuesto." }
                    ]
                }
            },
            {
                "id": 503,
                "topic": "Publicación Previa del Informe de Gestión",
                "caseText": "La fecha fijada para la audiencia pública de rendición de cuentas es el 30 de noviembre. El equipo de comunicaciones solicita publicar el informe de gestión en la página web institucional en la noche del 29 de noviembre.",
                "statement": "Con base en los lineamientos de la Ley 1757 de 2015 y la Guía del DAFP, al profesional le corresponde objetar esta fecha porque:",
                "options": [
                    { "id": "A", "text": "El informe debe publicarse con al menos quince (15) días hábiles de anticipación para que la ciudadanía pueda leerlo, analizarlo y formular preguntas de fondo con antelación." },
                    { "id": "B", "text": "El informe no debe publicarse nunca en la web antes de la audiencia para que sea una sorpresa para el público." },
                    { "id": "C", "text": "Los informes de rendición de cuentas solo se pueden publicar después de que la vigencia fiscal ha cerrado el 31 de diciembre." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ley 1757 de 2015 y el MURC establecen que los informes de rendición de cuentas deben ponerse a disposición del público con suficiente antelación (mínimo 15 días hábiles antes de la audiencia) para garantizar una participación informada y cualificada.",
                    "distractors": [
                        { "id": "B", "reason": "La rendición de cuentas es un ejercicio de transparencia pública planificada, no un espectáculo con factor sorpresa." },
                        { "id": "C", "reason": "Las audiencias periódicas se nutren de cortes trimestrales o semestrales de la gestión en curso." }
                    ]
                }
            },
            {
                "id": 504,
                "topic": "Rendición de Cuentas y Reserva Tributaria en la DIAN",
                "caseText": "Durante la audiencia pública de rendición de cuentas, un veedor ciudadano exige públicamente que se proyecte en pantalla la lista detallada de los 100 contribuyentes que tienen mayores deudas en cobro coactivo con sus nombres y montos individuales.",
                "statement": "Frente a esta solicitud, al funcionario moderador de la DIAN le corresponde responder que:",
                "options": [
                    { "id": "A", "text": "La entidad suministra las cifras globales y sectoriales agregadas del recaudo y la cartera, pero no puede individualizar datos específicos amparados por la Reserva Tributaria (Art. 583 E.T.)." },
                    { "id": "B", "text": "Proyectar de inmediato la lista con nombres completos y números de cédula para complacer al veedor ciudadano." },
                    { "id": "C", "text": "Suspender la audiencia pública y llamar a la policía para expulsar al veedor del auditorio." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El principio de publicidad y transparencia tiene límites constitucionales en los datos sujetos a reserva legal expresa. El artículo 583 del Estatuto Tributario ampara con reserva las declaraciones y datos de los contribuyentes; solo se pueden informar cifras consolidadas y agregadas.",
                    "distractors": [
                        { "id": "B", "reason": "Revelar nombres y deudas individuales en público constituye delito de violación de reserva tributaria y falta disciplinaria gravísima." },
                        { "id": "C", "reason": "El ciudadano tiene derecho a preguntar en forma pacífica; la respuesta debe ser fundamentada en derecho, no mediante agresiones o expulsiones policiales injustificadas." }
                    ]
                }
            },
            {
                "id": 505,
                "topic": "Caracterización de Grupos de Interés y de Valor",
                "caseText": "La DIAN planifica su estrategia de diálogo ciudadano para la vigencia y un analista propone realizar exactamente el mismo evento presencial en Bogotá para todos los públicos del país.",
                "statement": "A la luz del MURC, al Gestor II le corresponde proponer que:",
                "options": [
                    { "id": "A", "text": "Se realice previamente una caracterización de usuarios y grupos de valor (grandes contribuyentes, pequeños comerciantes, importadores, academia), adaptando los canales y metodologías a sus necesidades específicas." },
                    { "id": "B", "text": "Se invite únicamente a funcionarios públicos de la misma DIAN para evitar preguntas críticas de contribuyentes." },
                    { "id": "C", "text": "Se reemplace todo evento público por el envío de mensajes de texto masivos con publicidad institucional." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La caracterización de grupos de interés y valor permite diseñar estrategias diferenciadas: mesas técnicas con gremios aduaneros, ferias ciudadanas para pequeños comerciantes y foros virtuales para usuarios de regiones apartadas.",
                    "distractors": [
                        { "id": "B", "reason": "Invitar solo a funcionarios de la misma entidad desnaturaliza la rendición de cuentas, la cual se debe a la ciudadanía externa." },
                        { "id": "C", "reason": "Los SMS unidireccionales no garantizan el elemento esencial de diálogo y deliberación que exige la Ley 1757 de 2015." }
                    ]
                }
            },
            {
                "id": 506,
                "topic": "Fase de Seguimiento: Plan de Compromisos Institucional",
                "caseText": "Al finalizar la audiencia pública de rendición de cuentas se recogieron 45 observaciones y peticiones ciudadanas sobre demoras en la expedición virtual del RUT.",
                "statement": "Para dar cumplimiento a la fase 4 (Seguimiento y Evaluación) del MURC, a la entidad le corresponde:",
                "options": [
                    { "id": "A", "text": "Elaborar y publicar el Plan de Compromisos institucional dentro de los 30 días posteriores, asignando dependencias responsables, plazos e indicadores de avance para responder a las solicitudes." },
                    { "id": "B", "text": "Archivar las preguntas en la bodega de archivo muerto y no responderlas porque la audiencia ya concluyó." },
                    { "id": "C", "text": "Publicar un comunicado de prensa afirmando que todos los ciudadanos quedaron 100% satisfechos sin necesidad de plan de mejora." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El elemento de Responsabilidad del MURC exige que las inquietudes recogidas durante la rendición se conviertan en compromisos formales de gestión, con cronogramas y responsables asignados, sujetos a seguimiento periódico.",
                    "distractors": [
                        { "id": "B", "reason": "Ignorar las preguntas ciudadanas vulnera el derecho fundamental de petición y el deber legal de rendir cuentas." },
                        { "id": "C", "reason": "Negar las observaciones u ocultar las falencias evidenciadas atenta contra la ética e integridad pública." }
                    ]
                }
            },
            {
                "id": 507,
                "topic": "Rendición de Cuentas Permanente vs. Audiencia Anual",
                "caseText": "Un funcionario sostiene que la rendición de cuentas consiste única y exclusivamente en el acto protocolario de la audiencia pública que se hace una vez al año ante el auditorio.",
                "statement": "Para corregir este concepto con base en el CONPES 3654 de 2010 y el MIPG, al profesional le corresponde explicar que:",
                "options": [
                    { "id": "A", "text": "La rendición de cuentas es un proceso permanente y transversal a toda la gestión anual, que utiliza múltiples canales virtuales, datos abiertos y espacios continuos de diálogo durante todo el año." },
                    { "id": "B", "text": "La audiencia pública es el único mecanismo legal autorizado por el Estado para interactuar con los ciudadanos." },
                    { "id": "C", "text": "La rendición de cuentas solo se realiza cuando la Contraloría General ordena una auditoría financiera." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El CONPES 3654 y el MURC superaron el enfoque centrado exclusivamente en la 'audiencia evento'. La rendición de cuentas es una práctica cotidiana y permanente soportada en portales web, datos abiertos, boletines periódicos y foros continuos.",
                    "distractors": [
                        { "id": "B", "reason": "La audiencia es solo uno de los múltiples espacios de diálogo posibles y no el único mecanismo legal." },
                        { "id": "C", "reason": "La rendición de cuentas es un deber institucional autónomo y preventivo, no depende de órdenes de la Contraloría." }
                    ]
                }
            },
            {
                "id": 508,
                "topic": "Evaluación del Ejercicio de Rendición de Cuentas",
                "caseText": "Con el propósito de evaluar la efectividad de la rendición de cuentas de la vigencia, la dependencia de planeación aplica una encuesta de satisfacción y percepción a los asistentes al cierre del evento.",
                "statement": "El objetivo principal de esta evaluación dentro del ciclo de MIPG es:",
                "options": [
                    { "id": "A", "text": "Identificar oportunidades de mejora en la claridad de los datos, la metodología y los canales de diálogo para perfeccionar la estrategia de la siguiente vigencia." },
                    { "id": "B", "text": "Identificar a los ciudadanos que hicieron preguntas difíciles para excluirlos de futuros eventos." },
                    { "id": "C", "text": "Imponer multas administrativas a los asistentes que no calificaron con nota máxima la gestión de la entidad." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La evaluación del ejercicio de rendición de cuentas retroalimenta el ciclo PHVA institucional, permitiendo detectar si la información fue comprensible, si el diálogo fue productivo y cómo mejorar los canales participativos.",
                    "distractors": [
                        { "id": "B", "reason": "Excluir voces críticas atenta contra el pluralismo y el principio de contradicción democrática." },
                        { "id": "C", "reason": "Los ciudadanos participan voluntariamente; no procede ninguna sanción por sus opiniones o calificaciones." }
                    ]
                }
            },
            {
                "id": 509,
                "topic": "Incentivos en la Rendición de Cuentas Pública",
                "caseText": "Al revisar el elemento de 'Responsabilidad e Incentivos' del MURC, se analiza qué tipo de incentivos deben promoverse en el proceso de rendición de cuentas de una entidad como la DIAN.",
                "statement": "Los incentivos en el marco del MURC se definen como:",
                "options": [
                    { "id": "A", "text": "Mecanismos para motivar la participación activa de los ciudadanos (reconocimiento de aportes en veedurías) y para premiar a los servidores y áreas que demuestren transparencia y apertura informativa ejemplar." },
                    { "id": "B", "text": "Entrega de bonos económicos en efectivo a los ciudadanos que aplaudan las intervenciones de los directores." },
                    { "id": "C", "text": "Exención del pago del impuesto sobre la renta a los contribuyentes que asistan a las audiencias." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "El MURC define los incentivos como estímulos no monetarios, reconocimientos públicos de buenas prácticas de transparencia para las dependencias y facilitación de condiciones para que los ciudadanos ejerzan el control social.",
                    "distractors": [
                        { "id": "B", "reason": "Pagar dinero en efectivo a los asistentes constituye corrupción y cooptación ilícita de la participación ciudadana." },
                        { "id": "C", "reason": "Las exenciones tributarias son de reserva exclusiva de ley aprobada por el Congreso; ninguna entidad puede otorgarlas administrativamente." }
                    ]
                }
            },
            {
                "id": 510,
                "topic": "Veedurías Ciudadanas y Control Social",
                "caseText": "Una Red de Veedurías Ciudadanas formalmente constituida solicita a la DIAN los reportes de cumplimiento de las metas de atención en los Puntos de Contacto de las Seccionales del país.",
                "statement": "Frente a esta solicitud, de conformidad con la Ley 850 de 2003 (Ley de Veedurías) y la Ley 1757 de 2015, a la entidad le corresponde:",
                "options": [
                    { "id": "A", "text": "Suministrar oportunamente la información requerida y prestar la debida colaboración para facilitar el ejercicio del control social a la gestión pública." },
                    { "id": "B", "text": "Negar la solicitud alegando que el control de la gestión de la DIAN es privativo de los órganos judiciales del Estado." },
                    { "id": "C", "text": "Exigir a los veedores el pago previo de una tarifa de $10 millones por concepto de 'derechos de fiscalización ciudadana'." }
                ],
                "correctAnswer": "A",
                "justification": {
                    "correct": "La Ley 850 de 2003 y la Ley 1757 de 2015 amparan el derecho de las veedurías a ejercer vigilancia sobre la gestión pública y ordenan a las autoridades brindar toda la información y facilidades para su labor sin cobros indebidos.",
                    "distractors": [
                        { "id": "B", "reason": "El control social ciudadano es un derecho constitucional independiente y complementario al control fiscal o judicial del Estado." },
                        { "id": "C", "reason": "El acceso a la información pública para el control social es gratuito, salvo los costos estrictos de reproducción de copias físicas." }
                    ]
                }
            }
        ]
    }
}

print(f"Cargadas preguntas funcionales Parte 1 (Módulos 1 a 5). Total exámenes: {len(EXAMS_PART1)}")
