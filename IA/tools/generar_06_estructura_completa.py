# -*- coding: utf-8 -*-
"""
generar_06_estructura_completa.py
Genera la Guía Maestra Oficial 06. Estructura Organizacional de la DIAN
con el 100% de la estructura orgánica bajo el Decreto 1742 de 2020,
todas las direcciones de gestión, subdirecciones, seccionales, divisiones,
comités y el Sistema Específico de Carrera (Decretos Ley 071/2020 y 927/2023).
"""

import os

OUTPUT_PATH = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\Documentacion\01_Funcionales_60%\06_Estructura_Organizacional_DIAN.md"

content = """# Guía Maestra Oficial: 06. Estructura Organizacional de la DIAN

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)  
**Componente:** Funcional - Estructura del Estado & DIAN (60%)  
**Eje Temático Oficial:** Estructura Organizacional de la DIAN  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva, integral y exhaustiva de estudio para el indicador **06. Estructura Organizacional de la DIAN**, evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC) en alianza con la Universidad Areandina. Su contenido consolida:
1. La ubicación institucional y naturaleza jurídica de la DIAN en la estructura del Estado colombiano (Constitución Política, Arts. 113 y 209; Ley 489 de 1998; Decreto 1071 de 1999).
2. El desglose orgánico total y detallado del **Decreto 1742 de 2020**, detallando la Dirección General, todas las Oficinas Asesoras y de Control, las ocho (8) Direcciones de Gestión del Nivel Central con la totalidad de sus Subdirecciones y funciones misionales.
3. El Nivel Desconcentrado: tipología de Direcciones Seccionales (Impuestos, Aduanas, Mixtas, Grandes Contribuyentes y Delegadas) y la estructura interna de sus Divisiones operativas.
4. Las instancias colegiadas de dirección, coordinación y asesoría institucional (Comités y Comisiones).
5. El **Sistema Específico de Carrera de la DIAN** regulado por los **Decretos Ley 071 de 2020 y 927 de 2023**, principios rectores, provisión, comisiones de personal y evaluación del desempeño.
6. El análisis pormenorizado del empleo **Inspector I (Ficha IT-PD-3004)** en la Subdirección de Procesamiento de Datos de la DGIT.
7. Un banco de 10 situaciones problema tipo Juicio Situacional (PJS) construidas según la psicometría de la CNSC y Areandina, con justificación jurídica y análisis de distractores.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

> **Resumen Ejecutivo:** La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN) es una entidad técnica del sector descentralizado por servicios de la Rama Ejecutiva, adscrita al Ministerio de Hacienda y Crédito Público. Cuenta con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio. Su arquitectura institucional fue refundada integralmente mediante el **Decreto 1742 de 2020** para responder a la transformación digital, la analítica predictiva masiva y la modernización del control tributario, aduanero y cambiario.

```
                                          ESTRUCTURA GENERAL DIAN (Decreto 1742 de 2020)
                                                    ┌──────────────────────────┐
                                                    │    DIRECCIÓN GENERAL     │
                                                    └─────────────┬────────────┘
                         ┌────────────────────────────────────────┼──────────────────────────────────────┐
                         ▼                                        ▼                                      ▼
             ┌───────────────────────┐               ┌────────────────────────┐              ┌───────────────────────┐
             │  OFICINAS ASESORAS Y  │               │ 8 DIRECCIONES GESTIÓN  │              │  NIVEL DESCONCENTRADO │
             │      DE CONTROL       │               │    (Nivel Central)     │              │ (Seccionales y Divs.) │
             └───────────────────────┘               └────────────────────────┘              └───────────────────────┘
             • Seguridad Información (OSI)           1. Corporativa (5 Subdirs + Escuela)    • Seccionales Impuestos
             • Comunicaciones Institucionales        2. Estratégica y Analítica (3 Subdirs)  • Seccionales Aduanas
             • Control Interno                       3. Jurídica (2 Subdirs)                 • Seccionales Impuestos y Aduanas
             • Disciplinarios                        4. Impuestos (4 Subdirs)                • Grandes Contribuyentes (Nacional)
             • Defensoría Contribuyente              5. Aduanas (5 Subdirs)                  • Seccionales Delegadas
                                                     6. Fiscalización (3 Subdirs)            • Divisiones Operativas
                                                     7. Policía Fiscal y Aduanera (POLFA)
                                                     8. Innovación y Tecnología (4 Subdirs)
```

---

### Módulo 1: Marco Legal, Naturaleza Jurídica y Principios de la Función Administrativa

#### 1. Ubicación de la DIAN en la Rama Ejecutiva
- **Régimen Constitucional:** La DIAN pertenece a la Rama Ejecutiva del Poder Público del orden nacional (Art. 113 CP), dentro del sector administrativo de Hacienda y Crédito Público.
- **Naturaleza Jurídica (Decreto 1071 de 1999 y Decreto 1742 de 2020):** Es una **Unidad Administrativa Especial (UAE)** con personería jurídica, autonomía administrativa, financiera y presupuestal y patrimonio propio, **adscrita** al Ministerio de Hacienda y Crédito Público.
- **Control de Tutela:** El Ministerio de Hacienda ejerce coordinación y control de tutela sobre las políticas macroeconómicas y metas globales de recaudo; no obstante, la DIAN goza de independencia funcional y técnica en la administración de los tributos, la doctrina jurídica tributaria y la operación aduanera.

#### 2. Principios de la Función Administrativa (Art. 209 Constitución Política)
El actuar institucional se rige por: **igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad**. Estos principios se operativizan mediante:
- **Descentralización:** Traslado de competencias y personería jurídica propia desde el nivel central del Estado hacia entidades especializadas (la DIAN como persona jurídica propia).
- **Desconcentración:** Radicación de competencias en dependencias de la **misma persona jurídica** en distintas zonas geográficas (las Direcciones Seccionales ejecutan territorialmente la fiscalización y recaudo).
- **Delegación:** Traslado temporal, motivado y revocable de una atribución específica de una autoridad a otra de igual o menor jerarquía para agilizar la gestión (el Director General delega la firma de liquidaciones o contrataciones específicas).

---

### Módulo 2: Desglose Integral del Nivel Central (Decreto 1742 de 2020)

El Nivel Central de la DIAN formula las políticas institucionales, directrices doctrinarias, modelos de riesgo, normas técnicas y arquitectura digital de cobertura nacional.

#### 1. Despacho del Director General
Máxima autoridad técnica y administrativa. Ejerce la representación legal de la entidad, dirige las políticas de recaudo, control aduanero y cambiario, y expide las resoluciones de carácter general y reglamentario. Es el nominador de los servidores públicos de la entidad conforme al régimen específico de carrera.

#### 2. Oficinas Asesoras y de Control del Despacho de la Dirección General
| Oficina Asesora / de Control | Misión Institucional y Competencias Clave | Interacción con el Área de Tecnología y Datos |
|---|---|---|
| **Oficina de Seguridad de la Información (OSI)** | Define, supervisa e implementa el Sistema de Gestión de Seguridad de la Información (SGSI - ISO/IEC 27001), políticas de ciberseguridad, gestión de incidentes y protección de la infraestructura crítica informática. | Establece los controles criptográficos, políticas de contraseñas, auditoría de accesos a DataR y define los protocolos ante brechas de datos reservados. |
| **Oficina de Comunicaciones Institucionales** | Diseña e implementa la estrategia de comunicación interna y externa, relacionamiento con medios, difusión de cultura tributaria y aplicación de la política de Lenguaje Claro. | Difunde campañas pedagógicas ciudadanas sobre facturación electrónica, uso de plataformas digitales y trámites en línea. |
| **Oficina de Control Interno** | Ejerce la evaluación independiente y objetiva del Sistema de Control Interno bajo el MIPG (Línea de Defensa 3), auditoría de procesos y evaluación de riesgos de gestión y corrupción. | Audita periódicamente los logs de acceso a bases de datos, los controles de cambios en software y los pipelines de recaudo. |
| **Oficina de Control Disciplinario Interno** | Conoce, instruye y falla en primera instancia los procesos disciplinarios contra los servidores públicos de la DIAN conforme a la Ley 1952 de 2019 / Ley 2094 de 2021. | Investiga faltas disciplinarias gravísimas como la violación de reserva tributaria (Art. 583 E.T.), cobros ilícitos o alteración indebida de sistemas. |
| **Defensoría del Contribuyente y del Usuario Aduanero** | Órgano especial de garantía que vela por el respeto de los derechos de los contribuyentes, usuarios aduaneros y cambiarios, formula recomendaciones a la Dirección General e interviene ante quejas por abusos. | Monitorea fallas operativas en los sistemas informáticos que afecten el cumplimiento oportuno de obligaciones ciudadanas. |

---

#### 3. Las Ocho (8) Direcciones de Gestión y el Desglose Completo de sus Subdirecciones

##### 1. DIRECCIÓN DE GESTIÓN CORPORATIVA
Responsable de dirigir y administrar los recursos humanos, físicos, financieros y documentales requeridos para el funcionamiento institucional.
* **Subdirección de Administración del Talento Humano:** Administra la planta de personal, el Sistema Específico de Carrera (Decretos Ley 071/2020 y 927/2023), procesos de selección, evaluación del desempeño laboral (EDL), bienestar social, salud en el trabajo y nómina.
* **Subdirección Financiera:** Dirige la programación, ejecución presupuestal, contabilidad institucional y tesorería de la entidad.
* **Subdirección Administrativa:** Gestiona la contratación pública estatal, adquisición de bienes y servicios, mantenimiento de infraestructura física y almacenes.
* **Subdirección de Gestión Documental:** Administra los archivos físicos y electrónicos institucionales, tablas de retención documental y correspondencia oficial.
* **Escuela de Impuestos y Aduanas Nacionales:** Desarrolla los programas de formación, capacitación técnica especializada, entrenamiento e investigación misional de los servidores de la DIAN.

##### 2. DIRECCIÓN DE GESTIÓN ESTRATÉGICA Y DE ANALÍTICA
Lidera la formulación del plan estratégico institucional, la analítica predictiva avanzada y los estudios económicos del sistema tributario y aduanero.
* **Subdirección de Estudios Económicos:** Realiza investigaciones y estimaciones macroeconómicas, calcula las metas de recaudo tributario y aduanero, y mide la brecha fiscal de evasión y elusión.
* **Subdirección de Información y Analítica:** Diseña e implementa los modelos analíticos de riesgo fiscal, scoring predictivo de fraude, algoritmos de minería de datos y explotación analítica sobre los repositorios institucionales.
* **Subdirección de Planeación y Cumplimiento:** Formula el Plan Estratégico Institucional, gestiona los indicadores de gestión y coordina el Modelo Integrado de Planeación y Gestión (MIPG).

##### 3. DIRECCIÓN DE GESTIÓN JURÍDICA
Máxima rectora de la doctrina jurídica tributaria, aduanera y de control cambiario; ejerce la defensa judicial de la DIAN.
* **Subdirección de Normativa y Doctrina:** Expide los **Conceptos Jurídicos** que fijan la interpretación oficial obligatoria y vinculante de las normas tributarias, aduaneras y cambiarias para todos los funcionarios de la DIAN; redacta proyectos de decretos y resoluciones generales; conceptúa sobre los alcances de la Reserva Tributaria (Art. 583 E.T.).
* **Subdirección de Representación Externa:** Ejerce la defensa jurídica y judicial de la DIAN ante el Consejo de Estado, la Corte Constitucional, Tribunales Administrativos y demás despachos judiciales en demandas de nulidad y restablecimiento del derecho.

##### 4. DIRECCIÓN DE GESTIÓN DE IMPUESTOS
Dirige los procesos de administración, recaudo, cobranzas, devoluciones y servicio de los tributos del orden nacional.
* **Subdirección de Recaudo:** Administra los ingresos tributarios nacionales, la cuenta corriente tributaria, las relaciones con el sector bancario recaudador y la factura electrónica como título valor (RADIAN).
* **Subdirección de Cobranzas y Control Extensivo:** Diseña los programas nacionales de cobro persuasivo y coactivo, remates, embargos y el control masivo de contribuyentes omisos e inexactos.
* **Subdirección de Devoluciones y Compensaciones:** Fija lineamientos para la devolución y compensación de saldos a favor en renta e IVA, auditando solicitudes manuales y automáticas.
* **Subdirección de Operación de Servicio:** Diseña los canales de atención y servicio al ciudadano (presenciales, quioscos, contact center, asistentes virtuales) y la facilitación del cumplimiento voluntario.

##### 5. DIRECCIÓN DE GESTIÓN DE ADUANAS
Dirige la operación aduanera nacional, la facilitación del comercio exterior y el control de la cadena logística internacional.
* **Subdirección de Registro Aduanero:** Habilita e inscribe a los operadores de comercio exterior (agencias de aduanas, depósitos habilitados, zonas francas) y administra el programa de Operador Económico Autorizado (OEA).
* **Subdirección de Operación Aduanera:** Ejerce el control sobre los regímenes de importación, exportación y tránsito aduanero, y los esquemas de desaduanamiento e inspección simultánea.
* **Subdirección de Técnica Aduanera:** Administra el arancel de aduanas, criterios de valoración aduanera, origen de las mercancías y emite resoluciones anticipadas.
* **Subdirección de Control de Carga:** Dirige el control y trazabilidad de las cargas internacionales en puertos, aeropuertos y pasos fronterizos, monitoreando manifiestos de carga.
* **Subdirección de Fiscalización Aduanera:** Diseña los programas de control posterior aduanero para verificar la legal introducción y permanencia de mercancías en el territorio aduanero nacional.

##### 6. DIRECCIÓN DE GESTIÓN DE FISCALIZACIÓN
Dirige la investigación, auditoría y control de los tributos internos y del régimen cambiario para combatir la evasión y la elusión fiscal.
* **Subdirección de Fiscalización Tributaria:** Diseña y coordina los programas de auditoría integral a contribuyentes, emite requerimientos especiales y pliegos de cargos contra evasores.
* **Subdirección de Fiscalización Cambiaria:** Ejerce vigilancia y control sobre las operaciones cambiarias vinculadas a importaciones, exportaciones y endeudamiento externo.
* **Subdirección de Determinación:** Revisa, aprueba y proyecta las Liquidaciones Oficiales de Revisión, Liquidaciones de Aforo y Resoluciones Sancionatorias que determinan formalmente la deuda fiscal.

##### 7. DIRECCIÓN DE GESTIÓN DE POLICÍA FISCAL Y ADUANERA (POLFA)
Articula el cuerpo especializado de la Policía Nacional con la DIAN para ejecutar labores de inteligencia, patrullaje, allanamientos, interdicción y aprehensión de mercancías de contrabando en vías nacionales, pasos fronterizos y centros de comercio clandestino.

##### 8. DIRECCIÓN DE GESTIÓN DE INNOVACIÓN Y TECNOLOGÍA (DGIT) — HOGAR FUNCIONAL DEL INSPECTOR I
Define y ejecuta la estrategia digital, la arquitectura de TI, la infraestructura de cómputo y la gobernanza corporativa de datos.
* **Subdirección de Procesamiento de Datos (Ubicación del Cargo OPEC 236670):**
  - Administra la plataforma tecnológica del Repositorio Único de Datos (**DataR**).
  - Diseña y mantiene los modelos de datos relacionales, dimensionales y lagos de datos institucionales.
  - Diseña, orquesta y monitorea los pipelines de procesamiento masivo y distribución de datos (ETL/ELT con Apache Spark, Kafka y Airflow).
  - Implementa las políticas de gobierno técnico de datos (linaje, calidad, diccionarios y catálogo corporativo de metadatos).
  - Asegura la interoperabilidad de datos con entidades públicas y privadas bajo estándares del Ministerio TIC.
* **Subdirección de Soluciones y Desarrollo:** Diseña, desarrolla, adquiere e integra los aplicativos de software misionales (MUISCA, SYGA, Factura Electrónica, RADIAN, Ventanilla Única).
* **Subdirección de Infraestructura Tecnológica y de Operaciones:** Administra los centros de datos (Datacenters), las nubes públicas e híbridas, servidores, redes WAN/LAN, telecomunicaciones, almacenamiento masivo y soporte de mesa de ayuda.
* **Subdirección de Innovación y Proyectos:** Gestiona la Oficina de Gestión de Proyectos (PMO), adopta metodologías ágiles (Scrum, Kanban, DevOps) y lidera el laboratorio de innovación tecnológica.

---

### Módulo 3: El Nivel Desconcentrado (Direcciones Seccionales)

El territorio colombiano se organiza en Direcciones Seccionales encargadas de la **ejecución operativa directa** de los procesos misionales bajo las directrices y estándares del Nivel Central:

```
                            TIPOLOGÍA DE DIRECCIONES SECCIONALES
  ┌───────────────────────┬───────────────────────┬───────────────────────┬───────────────────────┐
  │ SECCIONALES IMPUESTOS │  SECCIONALES ADUANAS  │   SECCIONALES MIXTAS  │ GRANDES CONTRIBUYENTES│
  │  (Ciudades Mayores)   │ (Puertos y Fronteras) │(Intermedias/Regiones) │ (Cobertura Nacional)  │
  └───────────────────────┴───────────────────────┴───────────────────────┴───────────────────────┘
```

#### 1. Tipología de Seccionales
1. **Direcciones Seccionales de Impuestos:** Tienen jurisdicción sobre tributos internos en grandes aglomeraciones urbanas (ej. Dirección Seccional de Impuestos de Bogotá, Medellín, Cali).
2. **Direcciones Seccionales de Aduanas:** Especializadas en el control aduanero y despacho de mercancías en nodos de comercio exterior (ej. Dirección Seccional de Aduanas de Bogotá, Buenaventura, Cartagena, Barranquilla, Cúcuta).
3. **Direcciones Seccionales de Impuestos y Aduanas (Mixtas):** Ejercen doble competencia (tributaria y aduanera) en ciudades intermedias y zonas de frontera (ej. Bucaramanga, Pereira, Ibagué, Pasto, Ipiales, Riohacha, Santa Marta, Leticia, Arauca).
4. **Dirección Seccional de Grandes Contribuyentes:** Dirección Seccional especializada con **competencia en todo el territorio nacional** sobre personas jurídicas y naturales calificadas como Grandes Contribuyentes por resolución de la Dirección General.
5. **Direcciones Seccionales Delegadas:** Oficinas adscritas para la atención de trámites específicos en municipios donde no existe seccional principal.

#### 2. Estructura Interna Típica de una Dirección Seccional
Cada Dirección Seccional se compone de **Divisiones y Grupos Internos de Trabajo (GIT)** operativos:
- **División de Servicio al Ciudadano:** Atención presencial de RUT, trámites y orientación al contribuyente.
- **División de Fiscalización y Liquidación:** Ejecución material de auditorías, inspecciones tributarias y emisión de requerimientos y liquidaciones oficiales locales.
- **División de Recaudo y Cobranzas:** Gestión de cobranza coactiva y persuasiva local, medidas cautelares y control de omisos de su jurisdicción.
- **División de Devoluciones y Compensaciones:** Sustanciación y pago de devoluciones de saldos a favor radicadas en la seccional.
- **División de Operación Aduanera (en aduanas y mixtas):** Aforo físico y documental, inspección previa y desaduanamiento de mercancías.
- **División Jurídica:** Sustanciación de recursos de reconsideración y defensa jurídica de los actos administrativos seccionales.
- **División Administrativa y Financiera:** Apoyo logístico, presupuestal y de talento humano local.

> [!IMPORTANT]
> **Subordinación Técnica Estricta:** Ninguna Dirección Seccional tiene competencia para crear bases de datos independientes, alterar estructuras de tablas en DataR ni contratar nubes por fuera de los estándares de la Dirección de Gestión de Innovación y Tecnología (DGIT).

---

### Módulo 4: Instancias Colegiadas de Dirección, Coordinación y Asesoría

La gobernanza institucional de la DIAN descansa sobre comités estratégicos reglamentados por norma:
1. **Comité de Dirección:** Presidido por el Director General e integrado por los Directores de Gestión; define las decisiones estratégicas de la entidad.
2. **Comité Institucional de Gestión y Desempeño:** Responsable de la articulación, implementación y seguimiento del Modelo Integrado de Planeación y Gestión (MIPG), las políticas de integridad y el Código de Buen Gobierno.
3. **Comité Institucional de Coordinación de Control Interno:** Instancia asesora de la Dirección General para la evaluación independiente del sistema de control y auditoría interna.
4. **Comité de Seguridad de la Información y Transformación Digital:** Aprueba las directrices de ciberseguridad, arquitectura empresarial y prioriza las inversiones tecnológicas institucionales.
5. **Comisión de Personal de la DIAN:** Órgano bipartito paritario (representantes de la administración y elegidos por los empleados) que vela por la carrera administrativa, resuelve reclamaciones de servidores y vigila la equidad laboral.
6. **Comité de Conciliación y Defensa Judicial:** Evalúa la procedencia de conciliar judicial o extrajudicialmente conflictos de la entidad para proteger el patrimonio público.

---

### Módulo 5: Sistema Específico de Carrera de la DIAN (Decretos Ley 071 de 2020 y 927 de 2023)

La DIAN no se rige por el régimen general de carrera de la Ley 909 de 2004, sino por un **Sistema Específico de Carrera Administrativa**:
* **Fundamento Constitucional:** Art. 125 CP y Decretos Ley 071 de 2020 y 927 de 2023.
* **Administración y Vigilancia:** La **Comisión Nacional del Servicio Civil (CNSC)** administra y vigila los procesos de selección por mérito (ingreso y ascenso), garantizando la igualdad de oportunidades.
* **Provisión de Empleos:**
  - **Concurso de Ascenso:** Reservado para servidores con derechos de carrera administrativa en la DIAN que cumplan requisitos para subir de nivel o grado.
  - **Concurso de Ingreso (Abierto):** Convocatoria pública para cualquier ciudadano que cumpla los requisitos de la OPEC.
* **Período de Prueba:** Seis (6) meses tras el nombramiento en período de prueba; culmina con la calificación de servicios. Si es sobresaliente o satisfactoria, el servidor adquiere los derechos de carrera e inscripción en el Registro Público de Carrera de la DIAN.
* **Evaluación del Desempeño Laboral (EDL):** Proceso anual y permanente que evalúa:
  1. Compromisos Funcionales (metas de gestión asignadas al cargo).
  2. Compromisos Comportamentales (medidos según el Diccionario de Competencias de la **Resolución 065 de 2024**).
* **Movilidad Laboral y Situaciones Administrativas:** Comisión para desempeñar empleos de libre nombramiento o periodo, encargo, traslados funcionales y comisiones de estudio.

---

### Módulo 6: El Empleo de Inspector I (Ficha IT-PD-3004)

| Campo | Valor Oficial de la Ficha Técnica |
|---|---|
| **Denominación del Empleo** | **Inspector I** |
| **Nivel Jerárquico** | **Profesional** (Grado 05 - Código 305) |
| **Ubicación Orgánica** | **Nivel Central** — Dirección de Gestión de Innovación y Tecnología / **Subdirección de Procesamiento de Datos** |
| **Código de Ficha Oficial** | **IT-PD-3004** (Resolución DIAN 0067 de 2024 / Manual de Funciones) |
| **Propósito Principal** | *Analizar las necesidades de interoperabilidad de la DIAN y la plataforma de acceso y disponibilidad de datos, teniendo en cuenta las políticas de seguridad establecidas por la DIAN.* |
| **Competencias Comportamentales** | • Comportamiento Ético (Nivel 4)<br>• Innovación (Nivel 4)<br>• Comunicación Efectiva (Nivel 4)<br>• Trabajo en Equipo (Nivel 3) |

#### Funciones Esenciales del Cargo y su Correspondencia con el Examen:
1. **Analizar y aplicar la arquitectura de datos y modelado:** Base técnica para aplicaciones y el Repositorio Único DataR (Evaluado en Temas 01, 02 y 09).
2. **Implementar los lineamientos de servicios de datos:** Conforme al marco DAMA-DMBOK y el Gobierno de Datos (Evaluado en Temas 05 y 07).
3. **Aplicar estrategias técnicas para gestión de servicios:** Integración masiva y pipelines elásticos (Evaluado en Temas 01 y 03).
4. **Administrar la plataforma de acceso y disponibilidad de datos en DataR:** Seguridad, integridad y disponibilidad bajo la Reserva Tributaria (Evaluado en Tema 11).
5. **Implementar servicios de interoperabilidad:** Intercambio seguro con ministerios y entidades del Estado (Evaluado en Temas 03 y 07).
6. **Apoyar analítica avanzada:** Habilitar vistas curadas y datos listos para modelos predictivos (Evaluado en Temas 04 y 10).

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

### Lección 6.1: Naturaleza Jurídica y Principios de Competencia Administrativa
Para resolver casos del examen, ten presente esta regla de oro:
- **Nivel Central (Direcciones de Gestión y Subdirecciones):** Define **qué**, **cómo** y **con qué estándares** se hace el trabajo en todo el país (formulan normas, políticas de datos, conceptos jurídicos vinculantes y arquitectura de software).
- **Nivel Desconcentrado (Seccionales y Divisiones):** Aplica y **ejecuta materialmente** las visitas, requerimientos, liquidaciones y cobros a los contribuyentes de su jurisdicción, sometido a los lineamientos centrales.
- **La Competencia es Taxativa:** Ningún servidor puede asumir funciones que la ley no le haya atribuido expresamente. Si un funcionario de fiscalización intenta cambiar la configuración de un clúster de datos, incurre en extralimitación de funciones.

### Lección 6.2: Jerarquía Normativa y Actos Administrativos
1. **Constitución Política (Art. 4 CP):** Norma de normas.
2. **Leyes del Congreso y Decretos-Ley:** (Estatuto Tributario, Ley 1437 de 2011 - CPACA, Decretos Ley 071/2020 y 927/2023).
3. **Decretos Reglamentarios del Presidente:** (Decreto 1742 de 2020 - Estructura DIAN).
4. **Resoluciones del Director General:** Actos generales obligatorios (reglamentan factura electrónica, calendarios tributarios o manuales de funciones).
5. **Conceptos Jurídicos de la Subdirección de Normativa y Doctrina:** Unifican la doctrina legal de la DIAN. Son obligatorios para todos los empleados de la DIAN; protegen al contribuyente que actúe amparado en ellos.
6. **Circulares Internas:** Instrucciones operativas; **jamás pueden crear obligaciones a los ciudadanos**.

---

## 4. Flashcards y Puntos Clave de Memorización

- ¿Qué tipo de entidad es la DIAN? :: Unidad Administrativa Especial (UAE) con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público.
- ¿Qué norma modificó la estructura integral de la DIAN en 2020? :: El Decreto 1742 de 2020 (que derogó y reordenó el Decreto 4048 de 2008).
- ¿En qué dependencia y subdirección se ubica el Inspector I (IT-PD-3004)? :: Dirección de Gestión de Innovación y Tecnología (DGIT), Subdirección de Procesamiento de Datos (Nivel Central).
- ¿Qué dependencia unifica la doctrina jurídica y fija la interpretación oficial de la DIAN? :: La Dirección de Gestión Jurídica a través de la Subdirección de Normativa y Doctrina, mediante Conceptos Jurídicos vinculantes.
- ¿Qué dependencia formula los modelos de scoring predictivo y perfiles de riesgo tributario? :: La Dirección de Gestión Estratégica y de Analítica, mediante la Subdirección de Información y Analítica.
- ¿Qué seccional tiene competencia en todo el territorio nacional? :: La Dirección Seccional de Grandes Contribuyentes.
- ¿Cuáles son las 8 Direcciones de Gestión del Nivel Central? :: 1. Corporativa, 2. Estratégica y de Analítica, 3. Jurídica, 4. Impuestos, 5. Aduanas, 6. Fiscalización, 7. Policía Fiscal y Aduanera (POLFA), 8. Innovación y Tecnología (DGIT).
- ¿Qué oficina supervisa el Sistema de Gestión de Seguridad de la Información (ISO 27001) y la ciberseguridad? :: La Oficina de Seguridad de la Información (OSI) del Despacho de la Dirección General.
- ¿Qué régimen de carrera rige para los servidores de la DIAN? :: El Sistema Específico de Carrera Administrativa regulado por los Decretos Ley 071 de 2020 y 927 de 2023.
- ¿Cuál es la diferencia entre descentralización y desconcentración? :: Descentralización transfiere funciones y personería jurídica propia; desconcentración traslada funciones dentro de la misma persona jurídica hacia el territorio (Direcciones Seccionales).
- ¿Puede una Dirección Seccional contratar una base de datos propia para su ciudad? :: No, vulnera el principio de centralización de la arquitectura de TI y gobierno de datos asignado exclusivamente a la DGIT.
- ¿Qué oficina conoce y falla en primera instancia las faltas disciplinarias de funcionarios de la DIAN? :: La Oficina de Control Disciplinario Interno (bajo la Ley 1952 de 2019 / Ley 2094 de 2021).
- ¿Cuáles son las 4 subdirecciones de la Dirección de Gestión de Innovación y Tecnología (DGIT)? :: 1. Procesamiento de Datos, 2. Soluciones y Desarrollo, 3. Infraestructura Tecnológica y de Operaciones, 4. Innovación y Proyectos.
- ¿Qué órgano colegiado vigila la equidad laboral y resuelve reclamaciones de carrera en la DIAN? :: La Comisión de Personal de la DIAN (órgano bipartito paritario).
- ¿Qué subdirección administra los expedientes de saldos a favor y devoluciones automáticas? :: La Subdirección de Devoluciones y Compensaciones (Dirección de Gestión de Impuestos).

---

## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

### Pregunta 1
**Tema Específico:** Competencias Nivel Central vs. Seccionales  
**Escenario / Contexto:**  
El Director de la Seccional de Impuestos de una ciudad capital emite una circular ordenando a su equipo local implementar un servidor propio en sus instalaciones para almacenar copias de seguridad de las declaraciones tributarias de su departamento, argumentando fallas ocasionales en la red nacional.  
**Pregunta / Enunciado:**  
¿Qué principio de la estructura del Decreto 1742 de 2020 vulnera esta decisión?  
**Opciones de Respuesta:**  
- **A.** El principio de centralización técnica y rectoría exclusiva de la arquitectura de TI y almacenamiento corporativo en la Dirección de Gestión de Innovación y Tecnología, impidiendo silos de datos locales que fracturen la seguridad y la verdad única del dato estatal.
- **B.** Ninguno, puesto que los directores seccionales tienen autonomía técnica para adquirir hardware y custodiar datos de sus contribuyentes.
- **C.** El principio de libre competencia informática territorial establecido en la Ley 489 de 1998.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
El Decreto 1742 de 2020 radica privativamente en la Dirección de Gestión de Innovación y Tecnología (Subdirección de Infraestructura y Subdirección de Procesamiento de Datos) el diseño, gobernanza y administración del almacenamiento institucional. Las seccionales son órganos desconcentrados de ejecución operativa carentes de potestad para fragmentar la infraestructura nacional.  
**Análisis de Distractores:**  
- *Opción B:* La desconcentración no concede autonomía tecnológica ni presupuestal para silos locales de información.  
- *Opción C:* La DIAN es una persona jurídica unitaria; el concepto de "libre competencia" no aplica a la organización interna del Estado.

---

### Pregunta 2
**Tema Específico:** Unificación de Doctrina Jurídica  
**Escenario / Contexto:**  
En un comité técnico interdisciplinario, un profesional del área de fiscalización sostiene que las normas sobre facturación electrónica en transacciones de economía colaborativa deben interpretarse según el concepto que emitió verbalmente un asesor externo.  
**Pregunta / Enunciado:**  
Conforme a la estructura orgánica institucional, ¿cuál es el único instrumento formal que unifica la doctrina jurídica y resulta vinculante para la administración tributaria?  
**Opciones de Respuesta:**  
- **A.** Los Conceptos Jurídicos formales expedidos por la Subdirección de Normativa y Doctrina de la Dirección de Gestión Jurídica del Nivel Central.
- **B.** Las opiniones verbales emitidas por consultores o auditores en reuniones de trabajo.
- **C.** Las minutas de acuerdos suscritas entre contribuyentes y directores seccionales.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
El Decreto 1742 de 2020 asigna con exclusividad a la Subdirección de Normativa y Doctrina (Dirección de Gestión Jurídica) la facultad de interpretar oficialmente las normas tributarias, aduaneras y cambiarias. Sus conceptos son obligatorios para todos los servidores de la DIAN.  
**Análisis de Distractores:**  
- *Opción B:* Las opiniones verbales carecen de validez jurídica administrativa.  
- *Opción C:* La ley tributaria es indisponible; los directores no pueden pactar doctrinas a la medida con contribuyentes.

---

### Pregunta 3
**Tema Específico:** Competencias de la Dirección de Gestión Estratégica y de Analítica  
**Escenario / Contexto:**  
La Dirección de Gestión de Fiscalización requiere priorizar a 10.000 contribuyentes del sector hotelero mediante modelos predictivos de subdeclaración de IVA.  
**Pregunta / Enunciado:**  
¿Qué dependencia del Nivel Central tiene la competencia orgánica para diseñar, calibrar y generar las listas de riesgo de estos modelos analíticos?  
**Opciones de Respuesta:**  
- **A.** La Subdirección de Información y Analítica, adscrita a la Dirección de Gestión Estratégica y de Analítica.
- **B.** La Subdirección de Administración del Talento Humano.
- **C.** La División de Servicio al Ciudadano de la Seccional Bogotá.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
La Subdirección de Información y Analítica tiene asignada por el Decreto 1742 de 2020 la función de modelar perfiles de riesgo fiscal, scoring predictivo y explotación analítica de datos para toda la entidad.  
**Análisis de Distractores:**  
- *Opción B:* Talento Humano gestiona la planta de personal, no modelos tributarios.  
- *Opción C:* Servicio al Ciudadano atiende trámites presenciales locales.

---

### Pregunta 4
**Tema Específico:** Ficha del Cargo Inspector I (IT-PD-3004)  
**Escenario / Contexto:**  
Un superior jerárquico de otra área le solicita verbalmente a un Inspector I adscrito a Procesamiento de Datos que redacte una resolución de sanción por omisión de activos en el exterior contra una persona natural.  
**Pregunta / Enunciado:**  
La conducta institucionalmente correcta del Inspector I conforme a su marco de competencias laborales es:  
**Opciones de Respuesta:**  
- **A.** Explicar que las funciones de su empleo (Ficha IT-PD-3004) corresponden a la gestión, modelado, disponibilidad y seguridad de servicios de datos en DataR, debiendo remitir el trámite sancionatorio a las áreas de Fiscalización o Liquidación competentes.
- **B.** Redactar la resolución sancionatoria a pesar de no conocer el procedimiento tributario.
- **C.** Archivar el requerimiento de forma clandestina sin dar explicación alguna.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
El principio de legalidad exige que cada empleo actúe estrictamente dentro del marco funcional de su ficha (IT-PD-3004 para tecnología y datos). Las sanciones tributarias corresponden privativamente a las dependencias de fiscalización y liquidación.  
**Análisis de Distractores:**  
- *Opción B:* Actuar por fuera de la competencia funcional vicia de nulidad el acto administrativo e incurre en falta disciplinaria.  
- *Opción C:* Omitir la orientación vulnera el deber de celeridad y servicio administrativo.

---

### Pregunta 5
**Tema Específico:** Rol de la Oficina de Seguridad de la Información (OSI)  
**Escenario / Contexto:**  
Durante la sincronización de un nuevo lago de datos analítico, se detecta que los números de cédula y los ingresos brutos de millones de colombianos quedaron expuestos a través de un puerto de red sin autenticación.  
**Pregunta / Enunciado:**  
¿Qué dependencia del Nivel Central debe ser notificada de forma inmediata para activar el protocolo de incidente de seguridad y contener la brecha?  
**Opciones de Respuesta:**  
- **A.** La Oficina de Seguridad de la Información (OSI) del Despacho de la Dirección General.
- **B.** La Escuela de Impuestos y Aduanas Nacionales.
- **C.** La Subdirección Financiera de Gestión Corporativa.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
La OSI es la responsable institucional de gestionar la ciberseguridad, activar el plan de respuesta a incidentes de seguridad y coordinar la protección de datos protegidos y reservados.  
**Análisis de Distractores:**  
- *Opción B:* La Escuela DIAN es una dependencia académica de capacitación.  
- *Opción C:* La Subdirección Financiera administra el presupuesto y la contabilidad interna.

---

### Pregunta 6
**Tema Específico:** Competencia Especial de Grandes Contribuyentes  
**Escenario / Contexto:**  
Una corporación bancaria con presencia en 30 ciudades del país solicita que su declaración de renta sea auditada por la Seccional de Pasto alegando que allí tiene una de sus sucursales más pequeñas.  
**Pregunta / Enunciado:**  
¿Qué despacho ostenta la competencia exclusiva para administrar y fiscalizar tributariamente a esta entidad?  
**Opciones de Respuesta:**  
- **A.** La Dirección Seccional de Grandes Contribuyentes, que centraliza la administración integral y fiscalización de los sujetos pasivos de mayor impacto fiscal en todo el territorio colombiano.
- **B.** La Seccional que elija libremente la corporación bancaria según su conveniencia.
- **C.** La Cámara de Comercio de la ciudad principal.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
Los Grandes Contribuyentes calificados por la DIAN quedan sometidos a la competencia funcional y territorial nacional exclusiva de la Dirección Seccional de Grandes Contribuyentes.  
**Análisis de Distractores:**  
- *Opción B:* La jurisdicción tributaria es de orden público y no puede ser acordada por las partes.  
- *Opción C:* Las Cámaras de Comercio son entidades privadas con funciones registrales mercantiles.

---

### Pregunta 7
**Tema Específico:** El Sistema Específico de Carrera de la DIAN  
**Escenario / Contexto:**  
Un servidor público de carrera administrativa de la DIAN es convocado a Evaluación del Desempeño Laboral (EDL). El evaluador pretende asignarle una calificación deficiente aduciendo que "no participó en actividades políticas del sindicato mayoritario".  
**Pregunta / Enunciado:**  
Conforme a los Decretos Ley 071 de 2020 y 927 de 2023, ¿cuál es el régimen jurídico aplicable a la EDL en la DIAN?  
**Opciones de Respuesta:**  
- **A.** La EDL se fundamenta estrictamente en el cumplimiento objetivo de compromisos laborales funcionales y compromisos comportamentales (Resolución 065 de 2024), prohibiéndose criterios de filiación política, religiosa o gremial.
- **B.** El evaluador puede calificar con total discrecionalidad basada en sus simpatías personales.
- **C.** La DIAN no realiza evaluación del desempeño laboral a sus servidores de carrera.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
El mérito y la objetividad son los pilares del Sistema Específico de Carrera de la DIAN. La EDL evalúa compromisos funcionales y comportamentales tasados en la norma, garantizando la imparcialidad y el debido proceso.  
**Análisis de Distractores:**  
- *Opción B:* La arbitrariedad vulnera los derechos de carrera y genera nulidad de la evaluación.  
- *Opción C:* La EDL es obligatoria y permanente para todos los servidores de carrera de la entidad.

---

### Pregunta 8
**Tema Específico:** Control Posterior Aduanero  
**Escenario / Contexto:**  
Una mercancía importada superó el proceso de desaduanamiento formal en el Puerto de Buenaventura hace tres años con levante automático. Posteriormente, surgen indicios de subfacturación internacional en la operación.  
**Pregunta / Enunciado:**  
¿Qué dependencia tiene la facultad para iniciar la investigación de control posterior aduanero?  
**Opciones de Respuesta:**  
- **A.** La Subdirección de Fiscalización Aduanera (Dirección de Gestión de Fiscalización) dentro de los cinco (5) años siguientes al levante de la mercancía.
- **B.** Ninguna, porque el levante automático extingue definitivamente toda posibilidad de control fiscal.
- **C.** La Subdirección de Gestión Documental.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
La legislación aduanera colombiana faculta a la DIAN para ejercer control aduanero posterior a través de la Subdirección de Fiscalización Aduanera durante un término de caducidad de hasta cinco (5) años posteriores al levante.  
**Análisis de Distractores:**  
- *Opción B:* El desaduanamiento simultáneo no convalida irregularidades que puedan ser fiscalizadas con posterioridad.  
- *Opción C:* Gestión Documental maneja el archivo, no investigaciones aduaneras.

---

### Pregunta 9
**Tema Específico:** Operación y Articulación con la POLFA  
**Escenario / Contexto:**  
En una carretera nacional que comunica la frontera con el interior del país, se intercepta una caravana de camiones cargados con mercancía textil extranjera sin documentos de nacionalización.  
**Pregunta / Enunciado:**  
¿Qué dependencia especializada de la DIAN lidera la aprehensión material de las mercancías y el control operativo en vía pública?  
**Opciones de Respuesta:**  
- **A.** La Dirección de Gestión de Policía Fiscal y Aduanera (POLFA), en articulación operativa con la Dirección de Gestión de Aduanas.
- **B.** La Subdirección de Cobranzas y Control Extensivo.
- **C.** La Oficina de Comunicaciones Institucionales.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
La POLFA es la dependencia especializada encargada del control operativo, interdicción y aprehensión material de mercancías que ingresan o circulan de contrabando en el territorio nacional.  
**Análisis de Distractores:**  
- *Opción B:* Cobranzas se encarga de la cartera tributaria líquida y exigible, no de decomisos en carreteras.  
- *Opción C:* Comunicaciones se encarga de divulgación institucional y prensa.

---

### Pregunta 10
**Tema Específico:** Rol de la Comisión de Personal  
**Escenario / Contexto:**  
Un servidor de carrera de la DIAN considera que la administración vulneró su derecho de preferencia al proveer un empleo vacante definitivo mediante encargo a un funcionario provisional que no ostenta carrera administrativa.  
**Pregunta / Enunciado:**  
¿Ante qué órgano colegiado institucional debe interponer su reclamación en primera instancia conforme al régimen específico de la entidad?  
**Opciones de Respuesta:**  
- **A.** Ante la Comisión de Personal de la DIAN, como instancia paritaria de garantía del mérito y de los derechos de carrera administrativa de los empleados.
- **B.** Ante el Comité de Dirección de la entidad.
- **C.** Ante el Fondo Monetario Internacional.  
**Clave Oficial:** **A**  
**Fundamentación Técnica y Jurídica:**  
La Comisión de Personal de la DIAN (Decretos Ley 071/2020 y 927/2023) es el órgano competente para conocer y resolver en primera instancia las reclamaciones de los empleados de carrera sobre desmejora de condiciones o vulneración del derecho preferente a encargo.  
**Análisis de Distractores:**  
- *Opción B:* El Comité de Dirección fija directrices estratégicas de la alta gerencia, no dirime controversias de carrera.  
- *Opción C:* Organismo multilateral sin injerencia en reclamaciones de empleo público local.

---

## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Normativa de Creación, Estructura Orgánica y Régimen Laboral de la DIAN
* **Presidencia de la República de Colombia.** (2020). *Decreto 1742 de 2020: Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN)*. Diario Oficial No. 51.536 de 22 de diciembre de 2020.
* **Presidencia de la República de Colombia.** (2020). *Decreto Ley 071 de 2020: Por el cual se establece y regula el Sistema Específico de Carrera de los empleados públicos de la UAE DIAN*.
* **Presidencia de la República de Colombia.** (2023). *Decreto Ley 927 de 2023: Por el cual se modifica el Decreto Ley 071 de 2020 y se dictan normas sobre el Sistema Específico de Carrera Administrativa de la DIAN*.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2024). *Resolución 0067 del 11 de abril de 2024: Por la cual se adopta el Manual Específico de Requisitos y Funciones para los empleos de la planta de personal de la DIAN*.
* **UAE DIAN.** (2024). *Resolución No. 065 del 11 de abril de 2024: Por la cual se adopta el Diccionario Oficial de Competencias Comportamentales de la DIAN*.
* **UAE DIAN.** (2021). *Resolución 000069 de 2021: Por la cual se distribuyen las funciones de las dependencias de la DIAN y se crean grupos internos de trabajo*.
* **Congreso de la República de Colombia.** (1998). *Ley 489 de 1998: Estatuto Básico de Organización y Funcionamiento de la Administración Pública*.
* **Congreso de la República de Colombia.** (2019/2021). *Ley 1952 de 2019 modificada por la Ley 2094 de 2021: Código General Disciplinario*.
"""

with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"[OK] Generado 06_Estructura_Organizacional_DIAN.md exitosamente. Caracteres: {len(content)}")
