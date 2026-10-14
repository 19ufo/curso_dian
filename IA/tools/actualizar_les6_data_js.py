# -*- coding: utf-8 -*-
"""
actualizar_les6_data_js.py
Actualiza la leccion les-6 en data.js usando json.dumps para garantizar sintaxis perfecta de JavaScript/JSON.
"""

import json
import re

DATA_PATH = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\3_Aplicativo_Interactivo\js\data.js"
EXTRA_PATH = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\3_Aplicativo_Interactivo\js\data_extra.js"

les6_html = """<h2>Guía Maestra de Estudio: Estructura Organizacional de la DIAN (Decreto 1742 de 2020)</h2>
<p class="lead">Esta guía consolida la arquitectura orgánica integral de la DIAN, delimitando con precisión técnica las competencias del Nivel Central, las 8 Direcciones de Gestión con la totalidad de sus Subdirecciones, las Oficinas Asesoras, el Nivel Desconcentrado (Seccionales y Divisiones), los Comités de Dirección y el Sistema Específico de Carrera (Decretos Ley 071/2020 y 927/2023).</p>

<h3>Módulo 1: Marco Legal, Naturaleza Jurídica y Principios del Estado</h3>
<p>La <strong>Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN)</strong> es una entidad técnica del sector descentralizado por servicios de la Rama Ejecutiva (Art. 113 C.P.), adscrita al Ministerio de Hacienda y Crédito Público. Cuenta con <strong>personería jurídica, autonomía administrativa, financiera y presupuestal y patrimonio propio</strong> (Decretos 1071 de 1999 y 1742 de 2020).</p>

<p>Su función se ejerce bajo los principios constitucionales de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad (Art. 209 C.P.), mediante tres figuras administrativas esenciales:</p>
<ul>
    <li><strong>Descentralización:</strong> Traslado de competencias y personería jurídica propia del Estado hacia la entidad (la DIAN como persona jurídica autónoma).</li>
    <li><strong>Desconcentración:</strong> Radicación territorial de funciones dentro de la misma persona jurídica (Direcciones Seccionales que ejecutan la fiscalización y recaudo).</li>
    <li><strong>Delegación:</strong> Traslado transitorio y motivado de una función específica de una autoridad a otra de igual o menor nivel (actos delegados revocables).</li>
</ul>

<h3>Módulo 2: Oficinas Asesoras y de Control del Despacho del Director General</h3>
<table class="data-table">
    <thead>
        <tr><th>Oficina Asesora / de Control</th><th>Competencias Institucionales Clave</th><th>Interacción con TI y Datos</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Oficina de Seguridad de la Información (OSI)</strong></td><td>Define y supervisa el Sistema de Gestión de Seguridad de la Información (SGSI - ISO 27001), ciberseguridad, gestión de incidentes y custodia de activos informáticos.</td><td>Establece controles criptográficos, audita accesos al DataR y coordina la respuesta a incidentes de brechas en datos reservados.</td></tr>
        <tr><td><strong>Oficina de Comunicaciones Institucionales</strong></td><td>Dirige la estrategia de comunicación interna y externa, relaciones con medios, cultura tributaria y política de Lenguaje Claro.</td><td>Difunde campañas de sensibilización ciudadana sobre facturación electrónica y servicios digitales.</td></tr>
        <tr><td><strong>Oficina de Control Interno</strong></td><td>Evalúa de forma independiente el Sistema de Control Interno bajo MIPG (Tercera Línea de Defensa) y realiza auditorías de procesos y riesgos.</td><td>Audita periódicamente la trazabilidad de accesos a bases de datos y la gestión de cambios en sistemas.</td></tr>
        <tr><td><strong>Oficina de Control Disciplinario Interno</strong></td><td>Instruye y falla en primera instancia los procesos disciplinarios contra servidores de la entidad (Ley 1952 de 2019 / Ley 2094 de 2021).</td><td>Investiga faltas disciplinarias gravísimas como la violación de reserva tributaria (Art. 583 E.T.) o alteración indebida de sistemas.</td></tr>
        <tr><td><strong>Defensoría del Contribuyente y del Usuario Aduanero</strong></td><td>Garantiza los derechos de los usuarios y contribuyentes ante la DIAN, formula recomendaciones y atiende quejas de vulneración del debido proceso.</td><td>Monitorea incidentes tecnológicos que impidan el cumplimiento oportuno de obligaciones ciudadanas.</td></tr>
    </tbody>
</table>

<h3>Módulo 3: Las Ocho (8) Direcciones de Gestión del Nivel Central y sus Subdirecciones</h3>
<table class="data-table">
    <thead>
        <tr><th>Dirección de Gestión</th><th>Subdirecciones que la Integran</th><th>Competencias Misionales y Operativas</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>1. Dirección de Gestión Corporativa</strong></td>
            <td>• Subdirección de Administración del Talento Humano<br>• Subdirección Financiera<br>• Subdirección Administrativa<br>• Subdirección de Gestión Documental<br>• Escuela de Impuestos y Aduanas Nacionales</td>
            <td>Administra los recursos institucionales: talento humano, carrera administrativa (DL 071/2020), presupuesto, tesorería, contratación estatal, archivo y programas de capacitación y especialización técnica de los servidores.</td>
        </tr>
        <tr>
            <td><strong>2. Dirección de Gestión Estratégica y de Analítica</strong></td>
            <td>• Subdirección de Estudios Económicos<br>• Subdirección de Información y Analítica<br>• Subdirección de Planeación y Cumplimiento</td>
            <td>Formula el plan estratégico de la DIAN, estima metas de recaudo macrofiscal, mide brechas de evasión y elusión, y diseña modelos analíticos de scoring predictivo y perfiles de riesgo fiscal y aduanero.</td>
        </tr>
        <tr>
            <td><strong>3. Dirección de Gestión Jurídica</strong></td>
            <td>• Subdirección de Normativa y Doctrina<br>• Subdirección de Representación Externa</td>
            <td>Unifica la doctrina jurídica institucional mediante <strong>Conceptos Jurídicos obligatorios y vinculantes</strong> para todos los funcionarios de la entidad, interpreta el Estatuto Tributario, Aduanero y Cambiario, y ejerce la defensa judicial ante cortes y tribunales.</td>
        </tr>
        <tr>
            <td><strong>4. Dirección de Gestión de Impuestos</strong></td>
            <td>• Subdirección de Recaudo<br>• Subdirección de Cobranzas y Control Extensivo<br>• Subdirección de Devoluciones y Compensaciones<br>• Subdirección de Operación de Servicio</td>
            <td>Dirige la administración del recaudo voluntario y forzoso, control de omisos e inexactos, cobranzas coactivas, devolución de saldos a favor (manuales y automáticas), y canales de servicio y atención al contribuyente.</td>
        </tr>
        <tr>
            <td><strong>5. Dirección de Gestión de Aduanas</strong></td>
            <td>• Subdirección de Registro Aduanero<br>• Subdirección de Operación Aduanera<br>• Subdirección de Técnica Aduanera<br>• Subdirección de Control de Carga<br>• Subdirección de Fiscalización Aduanera</td>
            <td>Controla la operación aduanera nacional, calificación de usuarios y OEA, regímenes de importación/exportación/tránsito, arancel de aduanas, reglas de origen, valoración y trazabilidad de carga en puertos y aeropuertos.</td>
        </tr>
        <tr>
            <td><strong>6. Dirección de Gestión de Fiscalización</strong></td>
            <td>• Subdirección de Fiscalización Tributaria<br>• Subdirección de Fiscalización Cambiaria<br>• Subdirección de Determinación</td>
            <td>Diseña los programas nacionales de auditoría e investigación tributaria y cambiaria, emite requerimientos especiales y profiere liquidaciones oficiales de revisión, aforo y resoluciones sancionatorias.</td>
        </tr>
        <tr>
            <td><strong>7. Dirección de Gestión de Policía Fiscal y Aduanera (POLFA)</strong></td>
            <td>Articulación con Dirección de Gestión de Aduanas y Policía Nacional</td>
            <td>Ejecuta labores operativas de inteligencia, patrullaje, allanamientos, interdicción y aprehensión de mercancías de contrabando en vías nacionales, pasos fronterizos y centros comerciales clandestinos.</td>
        </tr>
        <tr>
            <td><strong>8. Dirección de Gestión de Innovación y Tecnología (DGIT)</strong><br><em>(Hogar del Inspector I)</em></td>
            <td><strong>• Subdirección de Procesamiento de Datos (OPEC 236670)</strong><br>• Subdirección de Soluciones y Desarrollo<br>• Subdirección de Infraestructura Tecnológica y de Operaciones<br>• Subdirección de Innovación y Proyectos</td>
            <td>Define la arquitectura de TI, telecomunicaciones y ciberseguridad. <strong>La Subdirección de Procesamiento de Datos administra el Repositorio Único (DataR)</strong>, clústeres de Big Data (Spark, Kafka), modelado de datos, gobierno técnico, linaje y servicios de interoperabilidad estatal.</td>
        </tr>
    </tbody>
</table>

<h3>Módulo 4: El Nivel Desconcentrado y Estructura de las Direcciones Seccionales</h3>
<p>El Nivel Desconcentrado ejecuta materialmente los procesos en el territorio bajo subordinación técnica y normativa del Nivel Central:</p>
<ul>
    <li><strong>Direcciones Seccionales de Impuestos:</strong> Jurisdicción sobre tributos internos en grandes ciudades (Bogotá, Medellín, Cali).</li>
    <li><strong>Direcciones Seccionales de Aduanas:</strong> Control aduanero y despacho en puertos, pasos fronterizos y aeropuertos (Buenaventura, Cartagena, Bogotá Aduanas, Cúcuta).</li>
    <li><strong>Direcciones Seccionales de Impuestos y Aduanas (Mixtas):</strong> Doble competencia tributaria y aduanera en ciudades intermedias y de frontera (Bucaramanga, Barranquilla, Pereira, Ipiales, Leticia, Arauca).</li>
    <li><strong>Dirección Seccional de Grandes Contribuyentes:</strong> Competencia exclusiva sobre los sujetos calificados como Grandes Contribuyentes con <strong>cobertura en todo el territorio nacional</strong>.</li>
</ul>

<h4>Divisiones Operativas Internas de una Dirección Seccional:</h4>
<p>Cada Dirección Seccional se estructura internamente en Divisiones: <em>División de Servicio al Ciudadano, División de Fiscalización y Liquidación, División de Recaudo y Cobranzas, División de Devoluciones y Compensaciones, División de Operación Aduanera, División Jurídica y División Administrativa y Financiera</em>.</p>

<div class="callout warning">
    <p><strong>⚠️ Regla de Oro Institucional:</strong> Ninguna Dirección Seccional tiene competencia para crear bases de datos independientes, alterar tablas maestras en DataR ni implementar software propio que fracture la visión única del dato estatal.</p>
</div>

<h3>Módulo 5: Instancias Colegiadas y Sistema Específico de Carrera DIAN</h3>
<ul>
    <li><strong>Comité de Dirección:</strong> Máxima instancia de decisión directiva presidida por el Director General.</li>
    <li><strong>Comité Institucional de Gestión y Desempeño:</strong> Responsable de la articulación y seguimiento del MIPG y las políticas de integridad.</li>
    <li><strong>Comisión de Personal de la DIAN:</strong> Órgano bipartito y paritario que vigila la carrera administrativa y protege los derechos laborales.</li>
    <li><strong>Sistema Específico de Carrera (Decretos Ley 071 de 2020 y 927 de 2023):</strong> Régimen especial fundamentado en el mérito y la igualdad de oportunidades administrado por la CNSC. Incluye período de prueba improrrogable de exactamente seis (6) meses y Evaluación del Desempeño Laboral (EDL) articulada con la Resolución 065 de 2024.</li>
</ul>

<h3>Módulo 6: El Empleo de Inspector I (Ficha IT-PD-3004)</h3>
<div class="architecture-grid">
    <div class="arch-card">
        <h4>Propósito Principal del Empleo</h4>
        <p>Analizar las necesidades de interoperabilidad de la DIAN y la plataforma de acceso y disponibilidad de datos, teniendo en cuenta las políticas de seguridad establecidas por la DIAN en el Repositorio Único (DataR).</p>
    </div>
    <div class="arch-card">
        <h4>Funciones Esenciales del Inspector I</h4>
        <ul>
            <li>Analizar y aplicar la arquitectura y modelado de datos en el DataR.</li>
            <li>Implementar lineamientos de gobierno de datos y catálogo corporativo de metadatos.</li>
            <li>Administrar la plataforma de procesamiento masivo y pipelines de ingesta (ETL/ELT).</li>
            <li>Asegurar la reserva tributaria (Art. 583 E.T.), controles de seguridad y disponibilidad.</li>
        </ul>
    </div>
</div>"""

with open(DATA_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Buscar les-6 exactamente
pat = r'("id":\s*"les-6".*?"readTime":\s*"25 min",\s*\n\s*"content":\s*).*?(\n\s*"links":\s*\[)'
json_content = json.dumps(les6_html, ensure_ascii=False)
replacement = r'\g<1>' + json_content + r',\g<2>'

text_updated = re.sub(pat, replacement, text, flags=re.DOTALL)

with open(DATA_PATH, "w", encoding="utf-8") as f:
    f.write(text_updated)

print("[OK] data.js actualizado limpiamente con json.dumps.")
