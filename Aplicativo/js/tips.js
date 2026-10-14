// Datos maestros de Tips y Estrategia Psicométrica para el examen CNSC / Areandina
// Diseñado para Inspector I (Nivel Profesional - Datos)
window.TIPS_DATA = {
    title: "Decodificador Psicométrico del Examen CNSC (Universidad Areandina)",
    subtitle: "Estrategias de examen, taxonomía de verbos por nivel de empleo, técnicas de descarte, gestión del tiempo y control de fatiga durante 4 horas continuas.",
    sections: [
        {
            id: "verbos",
            title: "🎯 1. El Secreto de los Verbos Rectores y su Relación con el Nivel del Cargo",
            icon: "award",
            content: `
                <p>Si has notado que en las preguntas de juicio situacional cada opción de respuesta comienza con un <strong>verbo rector diferente</strong> (por ejemplo: <em>Radicar vs. Analizar vs. Decretar</em>), no es casualidad ni estilo de redacción. Es la <strong>herramienta psicométrica principal</strong> con la que la Universidad Areandina y la CNSC calibran el nivel jerárquico del empleo.</p>

                <div class="callout tip">
                    <strong class="callout-title">💡 ¿Por qué cada respuesta tiene un verbo diferente?</strong>
                    <p>La CNSC diseña los ítems bajo la <strong>Taxonomía de Niveles de la Función Pública</strong> (Decreto 1083 de 2015 y Decreto Ley 071 de 2020 para la DIAN). Para un mismo problema o caso laboral, el evaluador construye 3 alternativas que representan 3 niveles jerárquicos distintos:</p>
                    <ul>
                        <li><strong>Una opción de nivel operativo o asistencial:</strong> Realiza una tarea puramente manual, rutinaria o de trámite físico.</li>
                        <li><strong>Una opción de nivel profesional (TU NIVEL - Inspector I):</strong> Aplica criterio técnico, diagnostica causas, diseña soluciones, analiza datos o fundamenta en la ley.</li>
                        <li><strong>Una opción de nivel directivo o asesor:</strong> Se extralimita en sus funciones, pretendiendo legislar, ordenar gastos o tomar decisiones que solo competen al Director General o al Ministro.</li>
                    </ul>
                </div>

                <h4>Matriz de Verbos por Nivel Jerárquico en la DIAN</h4>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Nivel Jerárquico</th>
                            <th>Verbos Típicos en las Opciones</th>
                            <th>¿Qué Mide el Evaluador?</th>
                            <th>Regla de Decisión para Inspector I</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Nivel Asistencial</strong><br><span class="badge badge-danger">NIVEL 1</span></td>
                            <td><em>Radicar, transcribir, archivar, foliar, digitar, repartir, fotocopiar, recibir, entregar, imprimir.</em></td>
                            <td>Mide si el aspirante confunde el rol profesional con tareas de secretaría o digitación mecánica.</td>
                            <td><strong>DESCARTAR INMEDIATAMENTE:</strong> Si la opción te pide limitarte a transcribir o llevar papeles de una ventanilla a otra, es un distractor de bajo nivel.</td>
                        </tr>
                        <tr>
                            <td><strong>Nivel Técnico</strong><br><span class="badge badge-warning">NIVEL 2</span></td>
                            <td><em>Cotejar contra listas de chequeo, diligenciar plantillas estándar, verificar requisitos formales, procesar según manual fijo.</em></td>
                            <td>Mide aplicación mecánica de procedimientos sin análisis de causa raíz ni diseño de mejoras.</td>
                            <td><strong>CUIDADO:</strong> Solo es correcta si el enunciado pide expresamente una verificación operativa directa previa al análisis.</td>
                        </tr>
                        <tr>
                            <td><strong>Nivel Profesional<br>(INSPECTOR I)</strong><br><span class="badge badge-success">🎯 TU NIVEL EXACTO</span></td>
                            <td><strong>Analizar, diagnosticar, modelar, diseñar, formular, sustanciar, dictaminar, auditar, evaluar, parametrizar, contrastar, implementar, estructurar, conciliar.</strong></td>
                            <td>Mide <strong>criterio técnico especializado, capacidad de abstracción analítica, resolución de problemas y fundamentación normativa autónoma</strong>.</td>
                            <td><strong>PRIORIDAD MÁXIMA:</strong> La clave oficial casi siempre comienza con uno de estos verbos. Refleja que como Inspector I produces valor técnico sustantivo para la DIAN.</td>
                        </tr>
                        <tr>
                            <td><strong>Nivel Asesor / Directivo</strong><br><span class="badge badge-danger">EXTRALIMITACIÓN</span></td>
                            <td><em>Adoptar políticas de Estado, sancionar decretos, ordenar presupuestos nacionales, derogar resoluciones, reestructurar la planta de personal.</em></td>
                            <td>Mide si el aspirante conoce los límites de su competencia o incurre en extralimitación de funciones.</td>
                            <td><strong>DESCARTAR:</strong> Un Inspector I no adopta políticas institucionales ni deroga resoluciones de la DIAN. Su rol es técnico-operativo superior.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="callout case">
                    <strong class="callout-title">🏛️ Ejemplo Real: El Caso del Pipeline Inconsistente en DataR</strong>
                    <p><em>Caso: Durante la carga nocturna de facturación electrónica se detecta que 15.000 registros presentan desfase en la tasa representativa del mercado (TRM). Ante esta situación, al Inspector I le corresponde:</em></p>
                    <ul>
                        <li><strong>Opción A:</strong> <em>Transcribir</em> el listado de facturas con inconsistencias y radicarlo en correspondencia para informar a las seccionales. <span class="badge badge-danger">Error: Verbo Asistencial</span></li>
                        <li><strong>Opción B:</strong> <strong>Analizar</strong> la causa raíz del error en el pipeline de transformación, calibrar la regla de validación de TRM en la capa Silver y reprocesar con trazabilidad de auditoría. <span class="badge badge-success">CORRECTA: Verbo Profesional Resolutivo</span></li>
                        <li><strong>Opción C:</strong> <em>Expedir</em> una circular nacional que ordene suspender la recepción de facturas electrónicas en todo el país. <span class="badge badge-danger">Error: Verbo Directivo / Extralimitación</span></li>
                    </ul>
                </div>
            `
        },
        {
            id: "tiempo_estrategia",
            title: "⏱️ 2. Estrategia Maestra para las 4 Horas de Examen (El Método de las 3 Vueltas)",
            icon: "zap",
            content: `
                <p>El examen de la CNSC no premia al que lee más despacio, sino al que gestiona con mayor frialdad su tiempo y energía cognitiva durante <strong>4 horas continuas (240 minutos)</strong>.</p>

                <div class="callout note">
                    <strong class="callout-title">📊 La Matemática del Examen</strong>
                    <p>Una prueba estándar para el Nivel Profesional de la DIAN contiene entre <strong>120 y 140 preguntas</strong>.</p>
                    <ul>
                        <li><strong>Tiempo promedio por pregunta:</strong> 1.7 minutos (apenas 100 segundos por caso).</li>
                        <li>Si dedicas 4 minutos a discutir mentalmente con una sola pregunta difícil, le estás robando el tiempo a 2 preguntas fáciles que están más adelante.</li>
                    </ul>
                </div>

                <h4>El Método de las 3 Vueltas de Resolución</h4>
                <div class="architecture-grid">
                    <div class="arch-card">
                        <h4>Vuelta 1: Las Certezas Inmediatas (Minuto 0 al 110)</h4>
                        <p><strong>Meta:</strong> Recorrer las 130 preguntas completas respondiendo ÚNICAMENTE aquellas cuya respuesta conoces con total certeza en menos de 60 segundos.</p>
                        <ul>
                            <li>Rellena el óvalo en la hoja de respuestas inmediatamente.</li>
                            <li>Si una pregunta te genera dudas o requiere cálculos extensos, <strong>márcala con un punto en el cuadernillo y sigue de largo</strong> sin frenarte.</li>
                            <li><em>Efecto psicológico:</em> En 110 minutos habrás asegurado entre el 55% y el 65% del puntaje total, eliminando la angustia de "no alcanzar a terminar".</li>
                        </ul>
                    </div>

                    <div class="arch-card">
                        <h4>Vuelta 2: El Análisis Situacional y Descarte (Minuto 110 al 195)</h4>
                        <p><strong>Meta:</strong> Enfocarte exclusivamente en las preguntas que marcaste con duda en la primera vuelta.</p>
                        <ul>
                            <li>Ahora tienes tiempo y tranquilidad. Lee el caso con la <em>Técnica de Lectura Inversa</em>.</li>
                            <li>Aplica los filtros de descarte (verbos de nivel, reserva tributaria, competencia funcional).</li>
                            <li>En la mayoría de los casos lograrás reducir las opciones a solo 2 alternativas y seleccionar la más ajustada a la legalidad.</li>
                        </ul>
                    </div>

                    <div class="arch-card">
                        <h4>Vuelta 3: Las Dudas Difíciles y Cierre (Minuto 195 al 230)</h4>
                        <p><strong>Meta:</strong> Tomar decisiones finales sobre el 10% de preguntas residuales más complejas.</p>
                        <ul>
                            <li><strong>¡REGLA FUNDAMENTAL DE LA CNSC!:</strong> Las respuestas incorrectas <strong>NO RESTAN PUNTOS</strong>. Dejar un óvalo en blanco es regalar probabilidad matemática.</li>
                            <li>Si tras analizar no estás 100% seguro, aplica el principio de la opción más protectora del interés público y marca.</li>
                        </ul>
                    </div>
                </div>

                <h4>Los Últimos 10 Minutos (Minuto 230 al 240): Auditoría de la Hoja de Respuestas</h4>
                <p>Dedica los últimos 10 minutos exclusivamente a verificar que la numeración del cuadernillo coincida con los óvalos de la hoja óptica de respuestas. El error más trágico en los concursos de méritos es saltarse un renglón en la pregunta 40 y desplazar todas las respuestas subsiguientes.</p>
            `
        },
        {
            id: "descarte",
            title: "🧠 3. Protocolo de Descarte Psicométrico: Qué Hacer Cuando No Sabes la Respuesta",
            icon: "alert-triangle",
            content: `
                <p>En preguntas de alta complejidad o cuando no recuerdes el artículo específico de la norma, recurre a las <strong>6 reglas psicométricas de descarte sistemático</strong>:</p>

                <div class="architecture-grid">
                    <div class="arch-card">
                        <h4>1. La Regla de los Extremos Absolutistas</h4>
                        <p>Desconfía y descarta opciones que utilicen términos taxativos y absolutistas como: <em>"siempre", "nunca", "en ningún caso", "totalmente", "únicamente", "sin excepción"</em>.<br>
                        En el derecho administrativo y en la gestión pública colombiana, prácticamente todas las normas contemplan excepciones legales reglamentadas, debido proceso o recursos de reposición.</p>
                    </div>

                    <div class="arch-card">
                        <h4>2. La Regla del Salto Procedimental (Anacronismo)</h4>
                        <p>Identifica en qué momento procesal se encuentra el caso:</p>
                        <ul>
                            <li>Si el caso describe que se está en fase de <strong>diagnóstico o verificación</strong>, la opción correcta NUNCA puede ser ejecutar sanciones o cancelar contratos.</li>
                            <li>Si se está en fase de <strong>planeación</strong>, no se puede saltar directamente a la liquidación sin antes notificar formalmente.</li>
                        </ul>
                    </div>

                    <div class="arch-card">
                        <h4>3. La Regla de la "Amabilidad Ilegal" (El Favor Tramposo)</h4>
                        <p>El caso te pondrá a un contribuyente de la tercera edad, un alcalde amigo o un directivo con prisa pidiendo información "urgente por correo".<br>
                        El distractor te ofrecerá "entregar una copia informal" o "agilizar de palabra".<br>
                        <strong>Regla de oro DIAN:</strong> Si existe <strong>Reserva Tributaria (Art. 583 del E.T.)</strong> o reserva aduanera, la opción correcta SIEMPRE exige la orden judicial, el convenio formal o la negativa motivada en la ley.</p>
                    </div>

                    <div class="arch-card">
                        <h4>4. La Regla de Competencia Central vs. Seccional</h4>
                        <p>Bajo el <strong>Decreto 1742 de 2020</strong>:</p>
                        <ul>
                            <li>El <strong>Nivel Central</strong> (Bogotá) define la arquitectura, las directrices de DataR, la doctrina jurídica y los modelos predictivos.</li>
                            <li>El <strong>Nivel Desconcentrado</strong> (Direcciones Seccionales) ejecuta el recaudo, la cobranza y la fiscalización local.</li>
                            <li>Si el distractor propone que un funcionario seccional cree su propio repositorio paralelo o cambie las reglas de arquitectura, es falso.</li>
                        </ul>
                    </div>

                    <div class="arch-card">
                        <h4>5. La Regla del "Arreglo en Caliente" en Datos</h4>
                        <p>En preguntas de tecnología y procesamiento de datos, cualquier opción que proponga:</p>
                        <ul>
                            <li><em>"Modificar directamente la tabla en producción vía SQL manual"</em></li>
                            <li><em>"Desactivar temporalmente los logs de auditoría para acelerar la carga"</em></li>
                            <li><em>"Omitir las pruebas de calidad de datos para cumplir el plazo"</em></li>
                        </ul>
                        <strong>Es un distractor fatal.</strong> La opción correcta siempre mantiene el linaje, la inmutabilidad de logs y la corrección gobernada en los pipelines de ETL/ELT.
                    </div>

                    <div class="arch-card">
                        <h4>6. La Regla de la Primacía del Interés General</h4>
                        <p>Si tras descartar quedas en duda entre 2 opciones éticamente viables, elige siempre aquella que:</p>
                        <ul>
                            <li>Proteja con mayor rigor el erario público y la legalidad del Estado.</li>
                            <li>Garantice la mayor transparencia institucional frente a la reserva de conveniencia.</li>
                            <li>Anteponga el cumplimiento normativo a la lealtad interpersonal hacia superiores o compañeros.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: "cansancio",
            title: "⚡ 4. Fisiología y Control del Cansancio Mental durante las 4 Horas",
            icon: "battery-charging",
            content: `
                <p>Estar sentado 4 horas consecutivas analizando casos densos genera una degradación cognitiva real y predecible. La fatiga reduce la capacidad de atención selectiva y nubla el discernimiento.</p>

                <h4>El Fenómeno del "Efecto Túnel" (Hora 2.5)</h4>
                <p>Alrededor del minuto 150 (a mitad de la prueba), el cerebro agota el glucógeno disponible. Ocurre el síntoma clásico: <strong>lees el mismo párrafo 4 veces seguidas y al llegar al final no recuerdas qué decía el inicio</strong>. Si esto te ocurre, no te fuerces a seguir leyendo; estás en Efecto Túnel.</p>

                <div class="callout tip">
                    <strong class="callout-title">🧘 Protocolo de Reinicio Cognitivo: Micro-pausas de 45 Segundos</strong>
                    <p>Aplica una micro-pausa cada 25 preguntas o cada vez que sientas el inicio del Efecto Túnel:</p>
                    <ol>
                        <li><strong>Suelta el lápiz</strong> sobre la mesa y recuéstate contra el espaldar de la silla.</li>
                        <li><strong>Cierra los ojos durante 15 segundos</strong> para cortar el estímulo visual intenso del papel.</li>
                        <li><strong>Aplica la respiración diafragmática 4-4-4:</strong> Inhala profundamente por la nariz inflando el abdomen durante 4 segundos, retén el aire 4 segundos, y exhala lentamente por la boca en 4 segundos. Haz dos ciclos completos. Esto oxigena el lóbulo frontal y reduce los niveles de cortisol y taquicardia.</li>
                        <li><strong>Descanso visual del músculo ciliar:</strong> Abre los ojos y mira fijamente al punto más lejano del salón (el reloj de la pared o una ventana) durante 15 segundos para relajar el enfoque corto.</li>
                        <li>Retoma la lectura con la mente reiniciada.</li>
                    </ol>
                </div>

                <h4>Combustible Cerebral: Qué Llevar y Qué Evitar en el Salón</h4>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Elemento</th>
                            <th>Recomendación Táctica</th>
                            <th>Impacto Fisiológico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Agua potable</strong></td>
                            <td>Lleva una botella de 500 ml sin gas. Toma <strong>pequeños sorbos cada 20-30 minutos</strong>, no tragos largos.</td>
                            <td>Mantiene la hidratación neuronal y la conductividad sin saturar la vejiga para no perder tiempo saliendo al baño.</td>
                        </tr>
                        <tr>
                            <td><strong>Alimento / Snack</strong></td>
                            <td>Frutos secos (nueces, almendras, maní sin sal) o <strong>chocolate negro (>70% cacao)</strong>.</td>
                            <td>Aportan grasas saludables y teobromina que entregan energía sostenida de absorción lenta sin provocar picos de insulina.</td>
                        </tr>
                        <tr>
                            <td><strong>Bebidas Energizantes / Gaseosas</strong></td>
                            <td><span class="badge badge-danger">PROHIBIDO</span> Evita Red Bull, Monster, café con exceso de azúcar y gaseosas.</td>
                            <td>Generan un pico rápido de glucosa seguido de un <strong>desplome hipoglucémico severo</strong> a los 60 minutos, provocando somnolencia, irritabilidad y temblor en las manos.</td>
                        </tr>
                        <tr>
                            <td><strong>Postura en el pupitre</strong></td>
                            <td>Espalda completamente apoyada en el respaldar, hombros relajados y ambos pies apoyados en el suelo.</td>
                            <td>Evita encorvarte sobre la mesa. La compresión torácica reduce la capacidad pulmonar hasta en un 20%, provocando hipoxia leve y fatiga prematura.</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            id: "lectura_inversa",
            title: "📖 5. Técnica de Lectura Inversa: Ganar 30 Segundos por Caso",
            icon: "book-open",
            content: `
                <p>En el examen tradicional, la mayoría de los aspirantes cometen el error de leer el caso de arriba hacia abajo sin rumbo fijo. Aplica este orden táctico:</p>

                <div class="callout tip">
                    <strong class="callout-title">Paso 1: Lee PRIMERO la Última Frase (El Enunciado)</strong>
                    <p>No empieces por los antecedentes de la empresa ni por las fechas. Ve directamente al final del párrafo donde está la pregunta concreta:<br>
                    <em>"Frente a la solicitud del contribuyente, la actuación que el Inspector I debe adoptar es:"</em><br>
                    <em>"Para garantizar la consistencia de los datos en el Repositorio Único DataR, la medida arquitectónica requerida es:"</em><br>
                    Al saber qué busca el evaluador, tu cerebro activará filtros de atención específicos.</p>
                </div>

                <div class="callout tip">
                    <strong class="callout-title">Paso 2: Escanea el Caso con Preguntas Guía en Mente</strong>
                    <p>Ahora lee el caso rápidamente buscando responderte solo 3 preguntas clave:</p>
                    <ul>
                        <li><strong>1. ¿Cuál es mi rol y competencia?</strong> (Inspector I, Dirección de Gestión de Innovación y Tecnología, Nivel Central o Seccional).</li>
                        <li><strong>2. ¿Cuál es la restricción legal o técnica en juego?</strong> (Reserva tributaria, degradación del servicio, plazo perentorio, conflicto de interés).</li>
                        <li><strong>3. ¿Qué datos o pruebas existen?</strong> (Registros en bitácora, inconsistencias en exógena, solicitudes verbales vs. escritas).</li>
                    </ul>
                </div>

                <div class="callout tip">
                    <strong class="callout-title">Paso 3: Aplica el Descarte Gramatical y Escoge</strong>
                    <p>Lee las 3 opciones de respuesta completando sintácticamente la frase del enunciado. Descarta la opción que use verbos de nivel inferior o superior, descarta la opción que vulnere la norma por complacencia, y marca con seguridad la opción profesional debida.</p>
                </div>
            `
        },
        {
            id: "comportamental_guia",
            title: "⚖️ 6. Decodificador de Pruebas Comportamentales (Likert) e Integridad",
            icon: "shield",
            content: `
                <p>Las pruebas comportamentales (15%) y de integridad (10%) son clasificatorias: <strong>no te eliminan, pero definen el puesto en la lista de elegibles</strong>. En la DIAN, a diferencia de otras entidades, estas pruebas no se evalúan con normas generales del DAFP sino bajo el <strong>Diccionario Oficial de Competencias de la DIAN (Resolución No. 065 de 2024)</strong> y el <strong>Código de Integridad CG-TAH-0002 Versión 3</strong> con su <strong>Filosofía Institucional</strong>.</p>

                <h4>A. El Enfoque de las Preguntas en Escala Likert y Juicio Situacional</h4>
                <p>Las pruebas comportamentales evalúan la concordancia del aspirante con los 4 niveles de desarrollo fijados en la <strong>Resolución 065 de 2024</strong>:</p>
                <ul>
                    <li><strong>Alineación con las competencias de tu empleo (Inspector I):</strong> Tu cargo exige <strong>Innovación Nivel 4</strong>, <strong>Comunicación Efectiva Nivel 4</strong>, <strong>Comportamiento Ético Nivel 4</strong> y <strong>Trabajo en Equipo Nivel 3</strong>. Si la afirmación o caso describe proactividad para liderar co-construcción, articular consensos entre dependencias, orientar al equipo o defender con rectitud la ley, la opción de mayor desarrollo es la correcta.</li>
                    <li><strong>El Abecé de Evidencias Conductuales:</strong> Las conductas correctas en la DIAN siempre se sustentan en hechos verificables, trazabilidad técnica y productos observables, no en buenas intenciones abstractas.</li>
                </ul>

                <h4>B. Los 5 Valores de Integridad de la DIAN y sus Pautas Textuales</h4>
                <p>El <strong>Código de Integridad CG-TAH-0002 v3</strong> de la DIAN tiene frases y principios rectores literales que debes tener grabados en la mente:</p>
                <ul>
                    <li><strong>Honestidad:</strong> <em>"Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión. <strong>Para ser impecable no necesito testigos</strong>."</em> Prohibido prestar el carné, simular registros de asistencia o aceptar favores de interesados.</li>
                    <li><strong>Diligencia:</strong> <em>"<strong>Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias.</strong>"</em> Hay situaciones que no se postergan para otro día.</li>
                    <li><strong>Compromiso:</strong> <em>"Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. <strong>Es, en cambio, un compromiso y un orgullo.</strong>"</em> Redoblar esfuerzos en contingencias tributarias.</li>
                    <li><strong>Justicia:</strong> <em>"<strong>Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.</strong> Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas."</em> Cero favoritismos o sesgos.</li>
                    <li><strong>Respeto:</strong> <em>"<strong>Soy amable todos los días, ¡esta es la clave!</strong> No hay nada que no se pueda solucionar hablando y escuchando al otro."</em> Trato digno sin ironías ni desdén.</li>
                </ul>

                <h4>C. La Filosofía Institucional y los 4 Valores Aspiracionales</h4>
                <p>La DIAN adoptó en su direccionamiento estratégico cuatro valores aspiracionales simbolizados en fauna colombiana que inspiran la toma de decisiones:</p>
                <div class="architecture-grid">
                    <div class="arch-card">
                        <h4>🐻 VALENTÍA (Oso de Anteojos)</h4>
                        <p>Lucha decidida contra economías criminales y contrabando para garantizar el imperio de la ley en todo el territorio.</p>
                    </div>
                    <div class="arch-card">
                        <h4>🦉 OBJETIVIDAD (Lechuza)</h4>
                        <p>Funciones basadas en <strong>evidencia rigurosa y datos verificables</strong>, sin sesgos, fortaleciendo la confianza ciudadana.</p>
                    </div>
                    <div class="arch-card">
                        <h4>🐆 TEMPLANZA (Jaguar)</h4>
                        <p>Sobriedad, serenidad y determinación en la lucha contra la evasión fiscal para sostener el Estado social de derecho.</p>
                    </div>
                    <div class="arch-card">
                        <h4>🐦 PROVIDENCIA (Colibrí)</h4>
                        <p>Anticipación a eventualidades y resiliencia para cerrar la brecha tributaria ante cualquier contingencia.</p>
                    </div>
                </div>

                <div class="callout exam">
                    <strong class="callout-title">🏆 Jerarquía de Decisión Ética en el Examen</strong>
                    <p style="font-size: 1.1rem; text-align: center; margin: 10px 0;">
                        <strong>1. Interés General, Legalidad y Reserva Tributaria (Art. 583 E.T.)</strong><br>
                        ↓<br>
                        <strong>2. Debido Proceso y Objetividad basada en Evidencias Rigurosas</strong><br>
                        ↓<br>
                        <strong>3. Lealtad interpersonal a Compañeros o Superiores (¡Jamás prima sobre la ley!)</strong>
                    </p>
                </div>
            `
        }
    ]
};
