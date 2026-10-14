#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
consolidar_documentacion.py
Unifica y estructura la documentacion oficial del concurso DIAN 2676 (OPEC 236670)
en una sola carpeta 'Documentacion' organizada en 3 subcarpetas por componente oficial,
con contenido exhaustivo y bibliografia rigurosa con fuentes confiables.
"""

import os
import re
import shutil

BASE_DIR = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA"
DIR_P2 = os.path.join(BASE_DIR, "2_Documentos_Estudio")
DIR_P4 = os.path.join(BASE_DIR, "4_Ampliacion_Contenido")
DIR_DOC = os.path.join(BASE_DIR, "Documentacion")
DIR_HIST = os.path.join(BASE_DIR, "_archivo_historico")

# Mapeo de carpetas por componente
FOLDERS = {
    "funcionales": os.path.join(DIR_DOC, "01_Funcionales_60%"),
    "comportamentales": os.path.join(DIR_DOC, "02_Comportamentales_15%"),
    "integridad": os.path.join(DIR_DOC, "03_Integridad_10%")
}

for folder in FOLDERS.values():
    os.makedirs(folder, exist_ok=True)

# Bibliografía rigurosa y fuentes oficiales por tema
BIBLIOGRAFIAS = {
    1: """### Libros y Publicaciones Técnicas de Referencia Internacional
* **Kleppmann, Martin.** (2017). *Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems*. Sebastopol, CA: O'Reilly Media. ISBN: 978-1449373320. (Referencia fundamental para sistemas distribuidos, Teorema CAP, semánticas de mensajería, replicación y particionamiento).
* **Armbrust, Michael; Ghodsi, Ali; Zaharia, Matei; et al.** (2021). *Lakehouse: A New Generation of Open Data Platforms that Unify Data Warehousing and Advanced Analytics*. Proceedings of the Conference on Innovative Data Systems Research (CIDR).
* **White, Tom.** (2015). *Hadoop: The Definitive Guide - Storage and Analysis at Internet Scale* (4th ed.). Sebastopol, CA: O'Reilly Media.
* **Chambers, Bill & Zaharia, Matei.** (2018). *Spark: The Definitive Guide - Big Data Processing Made Even Simple*. O'Reilly Media.
* **Kreps, Jay; Narkhede, Neha & Rao, Jun.** (2011). *Kafka: A Distributed Messaging System for Log Processing*. NetDB Workshop.

### Normativa Nacional y Documentos Oficiales de Política Pública (Colombia)
* **Departamento Nacional de Planeación (DNP).** (2018). *Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)*. Consejo Nacional de Política Económica y Social, República de Colombia.
* **Departamento Nacional de Planeación (DNP).** (2019). *Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial*. Bogotá D.C.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2020). *Marco de Referencia de Arquitectura Empresarial (MRAE) para la Gestión de TI en el Estado Colombiano*.

### Estándares y Documentación Técnica Oficial
* **Apache Software Foundation.** (2024). *Apache Spark Documentation: Cluster Mode, Catalyst Optimizer, Tungsten Execution Engine & Structured Streaming*. Disponible en: [spark.apache.org](https://spark.apache.org/docs/latest/).
* **Apache Software Foundation.** (2024). *Apache Kafka Documentation: Streams, Storage Architecture & Exactly-Once Semantics*. Disponible en: [kafka.apache.org](https://kafka.apache.org/).
* **Delta Lake / Linux Foundation.** (2023). *Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores*. Disponible en: [delta.io](https://delta.io/).""",

    2: """### Libros y Estándares de Arquitectura de Datos
* **DAMA International.** (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Basking Ridge, NJ: Technics Publications. ISBN: 978-1634622349. (Capítulo 4: Arquitectura de Datos; Capítulo 8: Integración de Datos; Capítulo 10: Data Warehousing y Business Intelligence).
* **Dehghani, Zhamak.** (2022). *Data Mesh: Delivering Data-Driven Value at Scale*. Sebastopol, CA: O'Reilly Media. ISBN: 978-1492092391.
* **Inmon, William H.** (2005). *Building the Data Warehouse* (4th ed.). Hoboken, NJ: John Wiley & Sons. ISBN: 978-0764599446.
* **Kimball, Ralph & Ross, Margy.** (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd ed.). Indianapolis, IN: John Wiley & Sons.
* **The Open Group.** (2022). *The TOGAF® Standard, 10th Edition - Architecture Development Method (ADM)*. Van Haren Publishing.

### Normativa Nacional y Marcos Estatales (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2020). *Marco de Referencia de Arquitectura Empresarial (MRAE) - Dominio de Información y Datos*. Bogotá D.C.
* **Presidencia de la República de Colombia.** (2020). *Decreto 1742 de 2020: Por el cual se modifica la estructura de la UAE Dirección de Impuestos y Aduanas Nacionales (DIAN)*. (Competencias de la Dirección de Gestión de Innovación y Tecnología y Subdirección de Análisis y Gestión del Riesgo).
* **Congreso de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales (Habeas Data)*.

### Estándares de la Industria
* **ISO/IEC/IEEE 42010:2022.** *Systems and software engineering — Architecture description*. International Organization for Standardization.""",

    3: """### Libros y Patrones de Integración Empresarial
* **Hohpe, Gregor & Woolf, Bobby.** (2003). *Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions*. Boston, MA: Addison-Wesley Professional. ISBN: 978-0321200686. (Patrones de mensajes, Canales, Transformadores, Enrutadores, Pipes and Filters).
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 8: Integración e Interoperabilidad de Datos.
* **Fielding, Roy Thomas.** (2000). *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral dissertation, University of California, Irvine. (Fundamento canónico del protocolo REST y arquitectura de APIs).
* **Newman, Sam.** (2021). *Building Microservices: Designing Fine-Grained Systems* (2nd ed.). O'Reilly Media. (Comunicación síncrona vs. asíncrona, orquestación vs. coreografía).

### Normativa y Estándares Oficiales DIAN y MinTIC (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2022). *Marco de Interoperabilidad para el Gobierno Digital de Colombia (Resolución 460 de 2022)*. Servicios de Intercambio de Información entre Entidades Públicas.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2020). *Resolución 000042 de 2020 y Resoluciones Modificatorias: Anexo Técnico de la Factura Electrónica de Venta (Versión 1.8 / UBL 2.1)*. Estándar XML OASIS Universal Business Language.
* **DIAN.** (2022). *Resolución 001092 de 2022: Implementación del Sistema de Facturación Electrónica para Documentos Equivalentes y RADIAN (Registro de Facturas Electrónicas como Título Valor)*.
* **OASIS Open.** (2013). *Universal Business Language (UBL) Version 2.1 Standard Specification*. OASIS Standard.""",

    4: """### Libros de Ciencia de Datos y Analítica Estratégica
* **Provost, Foster & Fawcett, Tom.** (2013). *Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking*. Sebastopol, CA: O'Reilly Media. ISBN: 978-1449361327.
* **Davenport, Thomas H. & Harris, Jeanne G.** (2017). *Competing on Analytics: The New Science of Winning* (Updated ed.). Boston, MA: Harvard Business Review Press.
* **Shmueli, Galit; Bruce, Peter C.; Gedeck, Peter & Patel, Nitin R.** (2020). *Data Mining for Business Analytics: Concepts, Techniques, and Applications in Python*. Hoboken, NJ: John Wiley & Sons.
* **James, Gareth; Witten, Daniela; Hastie, Trevor & Tibshirani, Robert.** (2021). *An Introduction to Statistical Learning: with Applications in Python*. Springer.

### Políticas Públicas y Estrategia DIAN (Colombia)
* **Departamento Nacional de Planeación (DNP).** (2019). *Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial*. Bogotá D.C.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2022). *Plan Estratégico Institucional (PEI) 2022-2026: Por una Colombia más honesta, equitativa y con justicia tributaria*. (Eje Estratégico de Lucha contra la Evasión y el Contrabando mediante Analítica de Datos).
* **Fondo Monetario Internacional (FMI) / CIAT.** (2020). *Innovaciones en la Administración Tributaria: El uso de Big Data y Analítica Predictiva para la Gestión del Riesgo de Cumplimiento*. Centro Interamericano de Administraciones Tributarias.""",

    5: """### Estándares y Libros de Gobierno de Datos
* **DAMA International.** (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Basking Ridge, NJ: Technics Publications. (Capítulo 3: Data Governance Framework; Principios, Roles, Comité de Gobierno de Datos, Data Stewards).
* **Ladley, John.** (2019). *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program* (2nd ed.). London: Academic Press. ISBN: 978-0128158319.
* **Seiner, Robert S.** (2014). *Non-Invasive Data Governance: The Path of Least Resistance and Greatest Success*. Technics Publications.

### Normativa Nacional y Lineamientos MinTIC (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2022). *Guía de Estándares de Datos Abiertos, Metadatos y Calidad de la Información para Entidades Públicas*.
* **Congreso de la República de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Por la cual se dictan disposiciones generales para la protección de datos personales*.
* **Presidencia de la República de Colombia.** (2013). *Decreto 1377 de 2013: Reglamentario de la Ley 1581 de 2012*.
* **Congreso de la República de Colombia.** (2014). *Ley 1712 de 2014: Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional*.
* **Superintendencia de Industria y Comercio (SIC).** (2023). *Guía para la Implementación del Principio de Responsabilidad Demostrada (Accountability) en el Tratamiento de Datos Personales*.""",

    6: """### Normativa de Creación y Estructura Organizacional de la DIAN
* **Presidencia de la República de Colombia.** (2020). *Decreto 1742 de 2020: Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN)*. Diario Oficial No. 51.536 de 22 de diciembre de 2020.
* **Presidencia de la República de Colombia.** (2008). *Decreto 4048 de 2008: Por el cual se modifica la estructura de la UAE DIAN y se dictan otras disposiciones*.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Resolución 000069 de 2021: Por la cual se distribuyen las funciones de las dependencias de la DIAN y se crean grupos internos de trabajo*.
* **DIAN.** (2023). *Resolución 000088 de 2023: Por la cual se adopta y actualiza el Manual Específico de Funciones y de Competencias Laborales para los empleos de la planta de personal de la DIAN*.
* **Departamento Administrativo de la Función Pública (DAFP).** (2015). *Decreto 1083 de 2015: Decreto Único Reglamentario del Sector de Función Pública (Estructura y Empleo Público)*.""",

    7: """### Libros y Marcos de Gestión de Servicios de TI y Calidad de Datos
* **AXELOS.** (2019). *ITIL® 4 Foundation: ITIL 4 Edition*. London: TSO (The Stationery Office). ISBN: 978-0113316076. (Gestión de Servicios, Acuerdos de Nivel de Servicio - SLA, Acuerdos de Nivel Operativo - OLA, Catálogo de Servicios).
* **ISACA.** (2018). *COBIT® 2019 Framework: Governance and Management Objectives*. Schaumburg, IL: ISACA.
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 13: Data Quality Management (Dimensiones de Calidad: Exactitud, Completitud, Consistencia, Oportunidad, Validez, Unicidad).
* **English, Larry P.** (2009). *Information Quality Applied: Best Practices for Improving Business Information, Processes and Systems*. Wiley.

### Lineamientos Oficiales MinTIC y Función Pública (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2021). *Modelo de Madurez de Gestión de Datos para el Sector Público*. Bogotá D.C.
* **MinTIC.** (2020). *Guía de Gestión del Catálogo de Servicios de Información e Interoperabilidad*.
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Manual Operativo del Modelo Integrado de Planeación y Gestión (MIPG) - Dimensión de Gestión con Valores para Resultados (Políticas de Gobierno Digital y Servicio al Ciudadano)*.""",

    8: """### Normativa Misional Tributaria, Aduanera y Cambiaria (Colombia)
* **Presidencia de la República de Colombia.** (1989). *Estatuto Tributario Nacional (Decreto 624 de 1989)*. Artículos 583 (Reserva de la declaración tributaria), 584, 585 y 586 (Sanciones a funcionarios por violación de reserva).
* **Presidencia de la República de Colombia.** (2019). *Decreto 1165 de 2019: Régimen de Aduanas de Colombia* (modificado por el Decreto 360 de 2021 y Decreto 659 de 2024). Regulación de operaciones aduaneras, fiscalización y control de comercio exterior.
* **Congreso de la República de Colombia.** (2011). *Ley 1437 de 2011: Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA)*. Principios de la función administrativa: debido proceso, igualdad, imparcialidad, celeridad y publicidad.
* **Congreso de la República de Colombia.** (2022). *Ley 2277 de 2022: Reforma Tributaria para la Igualdad y la Justicia Social*.
* **UAE DIAN.** (2022). *Plan Estratégico Institucional (PEI) 2022-2026: Facilitación del cumplimiento tributario, combate contra la evasión fiscal y contrabando, y transformación digital integral*.""",

    9: """### Libros Clásicos y Estándares de Modelado de Datos
* **Kimball, Ralph & Ross, Margy.** (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd ed.). Indianapolis, IN: John Wiley & Sons. ISBN: 978-1118530801. (Tablas de Hechos transaccionales, acumuladas y de instantánea periódica; Dimensiones conformadas, tipos de SCD 1, 2, 3; Esquemas Estrella y Copo de Nieve).
* **Inmon, William H.** (2005). *Building the Data Warehouse* (4th ed.). Hoboken, NJ: John Wiley & Sons. (Modelo Relacional Normalizado en Tercera Forma Normal - 3FN para Corporate Information Factory).
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 5: Data Modeling and Design (Modelos Conceptuales, Lógicos y Físicos).
* **Celko, Joe.** (2014). *Joe Celko's Complete Guide to NoSQL: What Every SQL Professional Needs to Know about Non-Relational Databases*. Waltham, MA: Morgan Kaufmann.
* **Elmasri, Ramez & Navathe, Shamkant B.** (2016). *Fundamentals of Database Systems* (7th ed.). Boston, MA: Pearson.
* **Linstedt, Dan & Olschimke, Michael.** (2015). *Building a Scalable Data Warehouse with Data Vault 2.0*. Morgan Kaufmann. (Hubs, Links, Satélites).""",

    10: """### Libros y Fuentes de Razonamiento Crítico, Lógica y Toma de Decisiones
* **Kahneman, Daniel.** (2011). *Thinking, Fast and Slow*. New York: Farrar, Straus and Giroux. ISBN: 978-0374275631. (Sistema 1 vs. Sistema 2, Sesgos cognitivos: anclaje, disponibilidad, confirmación y aversión a la pérdida).
* **Paul, Richard & Elder, Linda.** (2014). *Critical Thinking: Tools for Taking Charge of Your Professional and Personal Life* (2nd ed.). Upper Saddle River, NJ: Pearson Education.
* **Toulmin, Stephen E.** (2003). *The Uses of Argument* (Updated ed.). Cambridge: Cambridge University Press. (Modelo de argumentación: Aserción, Evidencia, Garantía, Respaldo, Reserva y Calificador modal).
* **Govier, Trudy.** (2013). *A Practical Study of Argument* (7th ed.). Wadsworth: Cengage Learning. (Falacias formales y no formales: causa falsa, ad hominem, generalización apresurada).

### Guías Oficiales CNSC y Evaluación en el Sector Público
* **Comisión Nacional del Servicio Civil (CNSC).** (2023). *Guía de Orientación al Aspirante para la Presentación de Pruebas Escritas de Competencias Funcionales y Juicio Situacional*. Bogotá D.C.
* **Universidad de Ciencias Aplicadas y Ambientales (U.D.C.A) / Universidad Areandina.** (2024). *Criterios de Evaluación y Razonamiento Lógico-Analítico en Pruebas de Selección de Mérito*.""",

    11: """### Estándares Internacionales de Seguridad y Protección de la Información
* **International Organization for Standardization.** (2022). *ISO/IEC 27001:2022 - Information security, cybersecurity and privacy protection — Information security management systems — Requirements*. Ginebra, Suiza.
* **International Organization for Standardization.** (2022). *ISO/IEC 27002:2022 - Information security controls*. (Controles de acceso, cifrado, integridad, respaldos, gestión de incidentes y redundancia).
* **National Institute of Standards and Technology (NIST).** (2020). *NIST Special Publication 800-53, Revision 5: Security and Privacy Controls for Information Systems and Organizations*. U.S. Department of Commerce.
* **International Organization for Standardization.** (2019). *ISO/IEC 27701:2019 - Security techniques — Extension to ISO/IEC 27001 and ISO/IEC 27002 for privacy information management*.

### Normativa Nacional Colombiana en Seguridad Digital
* **Congreso de la República de Colombia.** (2009). *Ley 1273 de 2009: Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - de la protección de la información y de los datos, y se preservan integralmente los sistemas*.
* **Congreso de la República de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales (Habeas Data)*.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2021). *Modelo de Seguridad y Privacidad de la Información (MSPI) del Estado Colombiano*.
* **Departamento Nacional de Planeación (DNP).** (2016). *Documento CONPES 3854: Política Nacional de Seguridad Digital*. Bogotá D.C.""",

    12: """### Normativa de Función Pública y Competencias Comportamentales (Colombia)
* **Presidencia de la República de Colombia.** (2015). *Decreto 1083 de 2015: Decreto Único Reglamentario del Sector de Función Pública*. (Título 4: Competencias Laborales Generales y Específicas por Nivel Jerárquico).
* **Presidencia de la República de Colombia.** (2018). *Decreto 815 de 2018: Por el cual se modifica el Decreto 1083 de 2015 en lo relativo a las competencias laborales generales para los empleos públicos de los distintos niveles jerárquicos*.
* **Departamento Administrativo de la Función Pública (DAFP).** (2020). *Guía de Gestión del Talento Humano Basada en Competencias para Entidades Públicas*. Bogotá D.C.
* **Comisión Nacional del Servicio Civil (CNSC).** (2024). *Manual Metodológico para la Construcción y Evaluación de Pruebas de Juicio Situacional (PJS) en Competencias Comportamentales*.

### Libros de Referencia en Gestión de Competencias y Ética Pública
* **Spencer, Lyle M. & Spencer, Signe M.** (1993). *Competence at Work: Models for Superior Performance*. New York: John Wiley & Sons.
* **Villoria Mendieta, Manuel & Izquierdo Sánchez, Agustín.** (2016). *Ética pública y buen gobierno: Regenerando la democracia y luchando contra la corrupción desde el servicio público*. Madrid: Tecnos.
* **Organización para la Cooperación y el Desarrollo Económicos (OCDE).** (2017). *Recomendación del Consejo de la OCDE sobre Integridad Pública*. París: OECD Publishing.""",

    13: """### Normativa y Guías de Función Pública (Colombia)
* **Presidencia de la República de Colombia.** (2015). *Decreto 1083 de 2015 (modificado por el Decreto 815 de 2018)*: Competencia de Comunicación Efectiva para el Nivel Profesional (Nivel 4).
* **Departamento Administrativo de la Función Pública (DAFP).** (2019). *Guía de Lenguaje Claro para Servidores Públicos de Colombia*. Bogotá D.C.
* **Comisión Nacional del Servicio Civil (CNSC).** (2023). *Ejes de Evaluación y Criterios de Desempeño en Comunicación Asertiva e Institucional*.

### Libros de Referencia en Comunicación Organizacional y Asertividad
* **Goleman, Daniel.** (1998). *Working with Emotional Intelligence*. New York: Bantam Books. (Competencias de escucha activa, empatía y persuasión interpersonal).
* **Robbins, Stephen P. & Judge, Timothy A.** (2019). *Organizational Behavior* (18th ed.). Boston, MA: Pearson. (Canales de comunicación, barreras comunicativas y comunicación descendente, ascendente y horizontal).
* **Stone, Douglas; Patton, Bruce & Heen, Sheila.** (2010). *Difficult Conversations: How to Discuss What Matters Most* (10th anniversary ed.). New York: Penguin Books.""",

    14: """### Normativa de Función Pública y Transformación Pública (Colombia)
* **Presidencia de la República de Colombia.** (2015). *Decreto 1083 de 2015 (modificado por el Decreto 815 de 2018)*: Competencia de Innovación para el Nivel Profesional (Nivel 4).
* **Departamento Administrativo de la Función Pública (DAFP).** (2021). *Guía para la Gestión de la Innovación en las Entidades Públicas Colombianas*. Bogotá D.C.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2020). *Estrategia de Transformación Digital e Innovación Pública del Estado Colombiano*.

### Libros de Referencia en Innovación y Gestión del Cambio
* **Christensen, Clayton M.** (2016). *The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail*. Boston, MA: Harvard Business Review Press.
* **Bason, Christian.** (2018). *Leading Public Sector Innovation: Co-creating for a Better Society* (2nd ed.). Bristol: Policy Press. (Diseño centrado en el usuario, prototipado rápido y experimentación pública).
* **Brown, Tim.** (2009). *Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation*. New York: HarperBusiness.
* **Ries, Eric.** (2011). *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses*. Crown Business.""",

    15: """### Normativa y Criterios de Función Pública (Colombia)
* **Presidencia de la República de Colombia.** (2015). *Decreto 1083 de 2015 (modificado por el Decreto 815 de 2018)*: Competencia de Trabajo en Equipo para el Nivel Profesional (Nivel 3).
* **Departamento Administrativo de la Función Pública (DAFP).** (2020). *Guía de Liderazgo Colectivo y Trabajo Colaborativo en Equipos Multidisciplinarios del Estado*. Bogotá D.C.
* **Comisión Nacional del Servicio Civil (CNSC).** (2024). *Manual de Conductas Asociadas a la Cooperación Interinstitucional y Cohesión de Equipos*.

### Libros de Dinámica de Equipos y Liderazgo Colaborativo
* **Lencioni, Patrick.** (2002). *The Five Dysfunctions of a Team: A Leadership Fable*. San Francisco, CA: Jossey-Bass. (Ausencia de confianza, miedo al conflicto, falta de compromiso, evasión de responsabilidades, falta de atención a los resultados).
* **Katzenbach, Jon R. & Smith, Douglas K.** (2015). *The Wisdom of Teams: Creating the High-Performance Organization*. Harvard Business Review Press.
* **Tuckman, Bruce W.** (1965). *Developmental Sequence in Small Groups*. Psychological Bulletin, 63(6), 384-399. (Etapas de Forming, Storming, Norming, Performing).
* **Edmondson, Amy C.** (2018). *The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth*. John Wiley & Sons.""",

    16: """### Normativa Oficial y Códigos Institucionales (Colombia)
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Código de Integridad del Servicio Público Colombiano: Valor del Compromiso*. Bogotá D.C.
* **DAFP.** (2019). *Caja de Herramientas para la Apropiación Social de los Valores del Código de Integridad*.
* **Congreso de la República de Colombia.** (2019). *Ley 1952 de 2019: Código General Disciplinario* (modificada por la Ley 2094 de 2021). (Deberes funcionales de los servidores públicos).
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Código de Ética y Buen Gobierno Institucional de la UAE DIAN*.

### Referencias Doctrinales y Ética del Deber Público
* **Constitución Política de Colombia.** (1991). *Artículo 123*: Los servidores públicos están al servicio del Estado y de la comunidad. *Artículo 209*: Principios de la función administrativa.
* **Organización para la Cooperación y el Desarrollo Económicos (OCDE).** (2017). *Integridad pública: Recomendación del Consejo de la OCDE para fortalecer la confianza de la ciudadanía*. París.""",

    17: """### Normativa Oficial y Códigos Disciplinarios (Colombia)
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Código de Integridad del Servicio Público Colombiano: Valor de la Diligencia*. Bogotá D.C.
* **Congreso de la República de Colombia.** (2019). *Ley 1952 de 2019: Código General Disciplinario*. Artículo 38 (Deberes del servidor público: cumplir con celeridad, eficacia y eficiencia las funciones).
* **Congreso de la República de Colombia.** (2011). *Ley 1437 de 2011: Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA)*. Artículo 3: Principios de eficacia, economía y celeridad.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Código de Ética y Buen Gobierno Institucional de la UAE DIAN*.

### Referencias Doctrinales en Gestión Pública Orientada a Resultados
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Manual Operativo del Modelo Integrado de Planeación y Gestión (MIPG)*. Política de Gestión y Desempeño Institucional.
* **Bozeman, Barry.** (2007). *Public Values and Public Interest: Counterbalancing Economic Individualism*. Georgetown University Press.""",

    18: """### Normativa Anticorrupción y Régimen Disciplinario (Colombia)
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Código de Integridad del Servicio Público Colombiano: Valor de la Honestidad*. Bogotá D.C.
* **Congreso de la República de Colombia.** (2011). *Ley 1474 de 2011: Estatuto Anticorrupción*. Por la cual se dictan normas orientadas a fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción.
* **Congreso de la República de Colombia.** (2022). *Ley 2195 de 2022: Por medio de la cual se adoptan medidas en materia de transparencia, prevención y lucha contra la corrupción*.
* **Congreso de la República de Colombia.** (2019). *Ley 1952 de 2019: Código General Disciplinario*. (Inhabilidades, incompatibilidades y conflicto de interés).
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Política de Cero Tolerancia con la Corrupción y Código de Ética Institucional*.

### Estándares Internacionales contra la Corrupción
* **Naciones Unidas (ONU).** (2004). *Convención de las Naciones Unidas contra la Corrupción (UNCAC)*.
* **Organización de los Estados Americanos (OEA).** (1996). *Convención Interamericana contra la Corrupción*.
* **Transparencia por Colombia.** (2023). *Índice de Transparencia de las Entidades Públicas (ITEP)*.""",

    19: """### Normativa Constitucional y Administrativa (Colombia)
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Código de Integridad del Servicio Público Colombiano: Valor de la Justicia*. Bogotá D.C.
* **Constitución Política de Colombia.** (1991). *Artículo 13* (Derecho a la igualdad y prohibición de discriminación); *Artículo 29* (Debido proceso administrativo); *Artículo 209* (Imparcialidad de la función administrativa).
* **Congreso de la República de Colombia.** (2011). *Ley 1437 de 2011 (CPACA)*. Artículo 3: Principio del debido proceso e imparcialidad (asegurar el trato idéntico a todos los administrados).
* **Presidencia de la República de Colombia.** (1989). *Estatuto Tributario Nacional (Decreto 624 de 1989)*. Principios de equidad, progresividad y justicia tributaria.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Código de Ética y Buen Gobierno Institucional de la UAE DIAN*.

### Libros de Filosofía del Derecho y Justicia Administrativa
* **Rawls, John.** (1971). *A Theory of Justice*. Cambridge, MA: Harvard University Press. (Justicia como equidad, principio de diferencia e imparcialidad).
* **Dworkin, Ronald.** (1977). *Taking Rights Seriously*. Harvard University Press.""",

    20: """### Normativa y Enfoque de Derechos Humanos (Colombia)
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Código de Integridad del Servicio Público Colombiano: Valor del Respeto*. Bogotá D.C.
* **Constitución Política de Colombia.** (1991). *Artículo 1* (Dignidad humana como fundamento del Estado); *Artículo 2* (Garantía de los derechos y libertades fundamentales).
* **Congreso de la República de Colombia.** (2011). *Ley 1437 de 2011 (CPACA)*. Derechos de las personas ante las autoridades: ser tratados con respeto y consideración.
* **Presidencia de la República de Colombia.** (2015). *Decreto 1083 de 2015: Trato digno, respetuoso e incluyente en la atención al ciudadano y en el clima laboral institucional*.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2021). *Manual de Servicio al Ciudadano y Código de Ética Institucional*.

### Libros de Clima Organizacional y Dignidad en el Trabajo
* **Nussbaum, Martha C.** (2011). *Creating Capabilities: The Human Development Approach*. Harvard University Press. (Enfoque de capacidades y dignidad humana).
* **Cortina, Adela.** (2013). *¿Para qué sirve realmente la ética?* Barcelona: Paidós. (La dignidad de las personas frente al instrumentalismo)."""
}

# Títulos limpios de los 20 temas
TEMAS_INFO = [
    (1, "funcionales", "01_Arquitectura_Big_Data.md", "Arquitectura Big Data", "Funcional - Big Data & Cómputo Distribuido (60%)"),
    (2, "funcionales", "02_Arquitectura_de_Datos.md", "Arquitectura de Datos", "Funcional - Arquitectura Empresarial & Datos (60%)"),
    (3, "funcionales", "03_Integracion_de_Datos.md", "Arquitectura de Integración de Datos", "Funcional - Integración & Interoperabilidad (60%)"),
    (4, "funcionales", "04_Capacidades_Analiticas_Uso_Estrategico.md", "Capacidades Analíticas y Uso Estratégico de la Información", "Funcional - Analítica & Inteligencia de Negocios (60%)"),
    (5, "funcionales", "05_Gobierno_de_Datos_Estandares_Politicas.md", "Estándares y Políticas Establecidos en el Gobierno de Datos", "Funcional - Gobernanza de Datos & Cumplimiento (60%)"),
    (6, "funcionales", "06_Estructura_Organizacional_DIAN.md", "Estructura Organizacional de la DIAN", "Funcional - Estructura del Estado & DIAN (60%)"),
    (7, "funcionales", "07_Gobierno_Gestion_Servicios_Datos.md", "Gobierno y Gestión de los Servicios de Datos", "Funcional - Servicios de Datos & Gestión de TI (60%)"),
    (8, "funcionales", "08_Misionalidad_DIAN.md", "Misionalidad de la DIAN", "Funcional - Misionalidad Tributaria, Aduanera y Cambiaria (60%)"),
    (9, "funcionales", "09_Modelado_y_Repositorios_de_Datos.md", "Modelado y Repositorios de Datos", "Funcional - Modelado Relacional, Dimensional & NoSQL (60%)"),
    (10, "funcionales", "10_Razonamiento_Analitico.md", "Razonamiento Analítico", "Funcional - Lógica, Argumentación & Pensamiento Crítico (60%)"),
    (11, "funcionales", "11_Seguridad_Integridad_Disponibilidad.md", "Seguridad, Integridad y Disponibilidad de los Datos", "Funcional - Seguridad de la Información & Ciberseguridad (60%)"),
    (12, "comportamentales", "12_Comportamiento_Etico_Nivel_4.md", "Comportamiento Ético (Nivel 4)", "Comportamental - Nivel Profesional (15%)"),
    (13, "comportamentales", "13_Comunicacion_Efectiva_Nivel_4.md", "Comunicación Efectiva (Nivel 4)", "Comportamental - Nivel Profesional (15%)"),
    (14, "comportamentales", "14_Innovacion_Nivel_4.md", "Innovación (Nivel 4)", "Comportamental - Nivel Profesional (15%)"),
    (15, "comportamentales", "15_Trabajo_en_Equipo_Nivel_3.md", "Trabajo en Equipo (Nivel 3)", "Comportamental - Nivel Profesional (15%)"),
    (16, "integridad", "16_Compromiso.md", "Compromiso", "Integridad - Código de Integridad de la Función Pública (10%)"),
    (17, "integridad", "17_Diligencia.md", "Diligencia", "Integridad - Código de Integridad de la Función Pública (10%)"),
    (18, "integridad", "18_Honestidad.md", "Honestidad", "Integridad - Código de Integridad de la Función Pública (10%)"),
    (19, "integridad", "19_Justicia.md", "Justicia", "Integridad - Código de Integridad de la Función Pública (10%)"),
    (20, "integridad", "20_Respeto.md", "Respeto", "Integridad - Código de Integridad de la Función Pública (10%)"),
]

def limpiar_frontmatter(texto):
    """Elimina el frontmatter de metadatos --- ... --- inicial."""
    texto = re.sub(r"^---\s*\n.*?\n---\s*\n", "", texto, flags=re.DOTALL)
    return texto

def formatear_autoevaluaciones(texto):
    """Convierte ::: q Pregunta --- Respuesta ::: en bloques HTML legibles."""
    patron = r":::\s*q\s*(.*?)\s*---\s*(.*?)\s*:::"
    def reemplazo(m):
        q = m.group(1).strip()
        a = m.group(2).strip()
        return f"\n> [!NOTE] Pregunta de Autoevaluación Rápida\n> **¿{q.lstrip('¿')}?**\n>\n> *Respuesta razonada:* {a}\n"
    return re.sub(patron, reemplazo, texto, flags=re.DOTALL)

def procesar_tema(idx, componente, fname, titulo, subtitulo):
    # Obtener archivos fuente
    f2_candidates = [f for f in os.listdir(DIR_P2) if f.startswith(f"Indicador_{idx:02d}_")]
    f4_candidates = [f for f in os.listdir(DIR_P4) if f.startswith(f"Tema_{idx:02d}_")]

    if not f2_candidates or not f4_candidates:
        print(f"Error: No se encontraron candidatos para tema {idx}")
        return

    file_p2 = os.path.join(DIR_P2, f2_candidates[0])
    file_p4 = os.path.join(DIR_P4, f4_candidates[0])

    with open(file_p2, "r", encoding="utf-8") as f:
        c2 = f.read()

    with open(file_p4, "r", encoding="utf-8") as f:
        c4 = f.read()

    # Extraer las preguntas PJS de P2 (Banco de Preguntas de Examen)
    # Por lo general arrancan en '## 2. Banco de Preguntas' o '### Pregunta 1'
    pjs_match = re.search(r"(## 2\.\s*Banco de Preguntas.*)", c2, flags=re.DOTALL | re.IGNORECASE)
    if not pjs_match:
        pjs_match = re.search(r"(## Banco de Preguntas.*)", c2, flags=re.DOTALL | re.IGNORECASE)
    
    if pjs_match:
        seccion_pjs = pjs_match.group(1)
        # La parte teórica de P2 es lo anterior a la sección PJS
        teoria_p2 = c2[:pjs_match.start()]
    else:
        seccion_pjs = ""
        teoria_p2 = c2

    # Limpiar encabezados redundantes de P2
    teoria_p2 = re.sub(r"^#\s*Guía Maestra de Estudio:.*?\n", "", teoria_p2)
    teoria_p2 = re.sub(r"\*\*Concurso:\*\*.*?\n", "", teoria_p2)
    teoria_p2 = re.sub(r"\*\*Cargo:\*\*.*?\n", "", teoria_p2)
    teoria_p2 = re.sub(r"\*\*Componente:\*\*.*?\n", "", teoria_p2)
    teoria_p2 = re.sub(r"\*\*Tiempo estimado.*?\n", "", teoria_p2)
    teoria_p2 = re.sub(r"^##\s*1\.\s*Fundamentos Teóricos.*?\n", "", teoria_p2, flags=re.MULTILINE)
    teoria_p2 = re.sub(r"^##\s*Guía Maestra de Estudio:.*?\n", "", teoria_p2, flags=re.MULTILINE)

    # Limpiar y procesar P4 (lecciones ampliadas)
    lecciones_p4 = limpiar_frontmatter(c4)
    lecciones_p4 = formatear_autoevaluaciones(lecciones_p4)

    # Flashcards de P4 si existen
    fc_match = re.search(r"(#\s*Flashcards.*)", lecciones_p4, flags=re.DOTALL)
    if fc_match:
        seccion_fc = fc_match.group(1)
        lecciones_p4 = lecciones_p4[:fc_match.start()]
    else:
        seccion_fc = ""

    biblio = BIBLIOGRAFIAS.get(idx, "Referencias institucionales en proceso de actualización.")

    # Construir documento maestro unificado
    doc = f"""# Guía Maestra Oficial: {idx:02d}. {titulo}

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología (Nivel Central)  
**Componente:** {subtitulo}  
**Eje Temático Oficial:** {titulo}  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **{idx:02d}. {titulo}**, evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

{teoria_p2.strip()}

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

{lecciones_p4.strip()}

---
"""

    if seccion_fc:
        doc += f"""## 4. Flashcards y Puntos Clave de Memorización

{seccion_fc.strip()}

---
"""

    if seccion_pjs:
        doc += f"""## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

{seccion_pjs.strip()}

---
"""

    doc += f"""## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

{biblio}
"""

    # Guardar en la subcarpeta correspondiente
    dest_path = os.path.join(FOLDERS[componente], fname)
    with open(dest_path, "w", encoding="utf-8") as out:
        out.write(doc)

    size_kb = os.path.getsize(dest_path) // 1024
    print(f"[OK] Creado: {componente}/{fname} ({size_kb} KB)")

# Procesar los 20 temas
print("Iniciando consolidación de los 20 temas...")
for item in TEMAS_INFO:
    procesar_tema(*item)

# Crear README.md Maestro del Directorio de Documentación
readme_doc = """# Documentación Oficial de Estudio: DIAN 2676 (OPEC 236670)

Bienvenido a la biblioteca centralizada y unificada de estudio para el concurso de méritos **CNSC - DIAN 2676** para el empleo de **Inspector I (OPEC 236670 - Dirección de Gestión de Innovación y Tecnología)**.

Esta carpeta organiza los **20 ejes temáticos oficiales** exigidos en las pruebas escritas, clasificados según la estructura oficial de ponderación de la CNSC y la Universidad Areandina. Cada documento ha sido consolidado de manera exhaustiva integrando fundamentos teóricos, marcos internacionales (DAMA, TOGAF, ISO/IEC, ITIL, Kimball), normativa colombiana vigente, casos reales aplicados a la DIAN, banco de preguntas tipo Juicio Situacional (PJS) con clave justificada y análisis de distractores, y bibliografía rigurosa.

---

## Estructura por Componentes de Evaluación

### 📘 1. Pruebas de Competencias Funcionales (Ponderación: 60% - Eliminatoria)
Ubicación: [`01_Funcionales_60%/`](./01_Funcionales_60%/)

| No. | Tema Oficial | Archivo de Estudio | Peso Estimado |
|:---:|:---|:---|:---:|
| 01 | Arquitectura Big Data | [`01_Arquitectura_Big_Data.md`](./01_Funcionales_60%/01_Arquitectura_Big_Data.md) | Alto |
| 02 | Arquitectura de Datos | [`02_Arquitectura_de_Datos.md`](./01_Funcionales_60%/02_Arquitectura_de_Datos.md) | Alto |
| 03 | Arquitectura de Integración de Datos | [`03_Integracion_de_Datos.md`](./01_Funcionales_60%/03_Integracion_de_Datos.md) | Alto |
| 04 | Capacidades Analíticas y Uso Estratégico | [`04_Capacidades_Analiticas_Uso_Estrategico.md`](./01_Funcionales_60%/04_Capacidades_Analiticas_Uso_Estrategico.md) | Alto |
| 05 | Estándares y Políticas en Gobierno de Datos | [`05_Gobierno_de_Datos_Estandares_Politicas.md`](./01_Funcionales_60%/05_Gobierno_de_Datos_Estandares_Politicas.md) | Alto |
| 06 | Estructura Organizacional de la DIAN | [`06_Estructura_Organizacional_DIAN.md`](./01_Funcionales_60%/06_Estructura_Organizacional_DIAN.md) | Medio |
| 07 | Gobierno y Gestión de los Servicios de Datos | [`07_Gobierno_Gestion_Servicios_Datos.md`](./01_Funcionales_60%/07_Gobierno_Gestion_Servicios_Datos.md) | Medio |
| 08 | Misionalidad de la DIAN | [`08_Misionalidad_DIAN.md`](./01_Funcionales_60%/08_Misionalidad_DIAN.md) | Medio |
| 09 | Modelado y Repositorios de Datos | [`09_Modelado_y_Repositorios_de_Datos.md`](./01_Funcionales_60%/09_Modelado_y_Repositorios_de_Datos.md) | Alto |
| 10 | Razonamiento Analítico | [`10_Razonamiento_Analitico.md`](./01_Funcionales_60%/10_Razonamiento_Analitico.md) | Alto |
| 11 | Seguridad, Integridad y Disponibilidad | [`11_Seguridad_Integridad_Disponibilidad.md`](./01_Funcionales_60%/11_Seguridad_Integridad_Disponibilidad.md) | Alto |

---

### 🤝 2. Pruebas de Competencias Comportamentales (Ponderación: 15% - Clasificatoria)
Ubicación: [`02_Comportamentales_15%/`](./02_Comportamentales_15%/)

| No. | Competencia (Nivel Profesional) | Archivo de Estudio | Decreto 815 de 2018 |
|:---:|:---|:---|:---:|
| 12 | Comportamiento Ético (Nivel 4) | [`12_Comportamiento_Etico_Nivel_4.md`](./02_Comportamentales_15%/12_Comportamiento_Etico_Nivel_4.md) | Nivel 4 |
| 13 | Comunicación Efectiva (Nivel 4) | [`13_Comunicacion_Efectiva_Nivel_4.md`](./02_Comportamentales_15%/13_Comunicacion_Efectiva_Nivel_4.md) | Nivel 4 |
| 14 | Innovación (Nivel 4) | [`14_Innovacion_Nivel_4.md`](./02_Comportamentales_15%/14_Innovacion_Nivel_4.md) | Nivel 4 |
| 15 | Trabajo en Equipo (Nivel 3) | [`15_Trabajo_en_Equipo_Nivel_3.md`](./02_Comportamentales_15%/15_Trabajo_en_Equipo_Nivel_3.md) | Nivel 3 |

---

### ⚖️ 3. Valores y Código de Integridad (Ponderación: 10% - Clasificatoria)
Ubicación: [`03_Integridad_10%/`](./03_Integridad_10%/)

| No. | Valor del Servidor Público | Archivo de Estudio | Marco DAFP |
|:---:|:---|:---|:---:|
| 16 | Compromiso | [`16_Compromiso.md`](./03_Integridad_10%/16_Compromiso.md) | Código de Integridad |
| 17 | Diligencia | [`17_Diligencia.md`](./03_Integridad_10%/17_Diligencia.md) | Código de Integridad |
| 18 | Honestidad | [`18_Honestidad.md`](./03_Integridad_10%/18_Honestidad.md) | Código de Integridad |
| 19 | Justicia | [`19_Justicia.md`](./03_Integridad_10%/19_Justicia.md) | Código de Integridad |
| 20 | Respeto | [`20_Respeto.md`](./03_Integridad_10%/20_Respeto.md) | Código de Integridad |

---

## Metodología de Estudio Recomendada

1. **Lectura Teórica Profunda:** Comprender los fundamentos de arquitectura, diseño y leyes colombianas de cada indicador.
2. **Revisión de Casos Prácticos:** Visualizar cómo la DIAN aplica estos conceptos en el MUISCA, Facturación Electrónica UBL 2.1, Registro Único Tributario (RUT) y control aduanero.
3. **Resolución de Preguntas PJS:** Cada tema cuenta con 10 preguntas de juicio situacional con opciones A, B y C. Intenta responder antes de ver la clave y lee detalladamente el análisis de distractores.
4. **Consulta Bibliográfica:** Utiliza la sección bibliográfica final de cada tema para contrastar con las fuentes maestras oficiales (libros de O'Reilly, DAMA-DMBOK, decretos de la Presidencia de la República y guías del DAFP/MinTIC).
"""

with open(os.path.join(DIR_DOC, "README.md"), "w", encoding="utf-8") as f:
    f.write(readme_doc)

print("[OK] Creado: Documentacion/README.md")
