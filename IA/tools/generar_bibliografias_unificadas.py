# -*- coding: utf-8 -*-
"""
Script para consolidar la bibliografía y documentos complementarios en window.MODULE_BIBLIOGRAPHIES
de IA/3_Aplicativo_Interactivo/js/track_intros.js y limpiar las secciones redundantes de texto plano
en los archivos markdown de IA/4_Ampliacion_Contenido/
"""
import glob, re, json

MOD_DATA = {
    1: {
        "fuentes": [
            {"tipo": "Paper", "autor": "Zaharia, M., Chowdhury, M., et al. (2012)", "titulo": "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing", "editorial": "USENIX NSDI 2012", "url": "https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf"},
            {"tipo": "Paper", "autor": "Armbrust, M., Xin, R. S., et al. (2015)", "titulo": "Spark SQL: Relational Data Processing in Spark (Catalyst Optimizer)", "editorial": "ACM SIGMOD 2015", "url": "https://dl.acm.org/doi/10.1145/2723372.2742797"},
            {"tipo": "Paper", "autor": "Kreps, J., Narkhede, N. & Rao, J. (2011)", "titulo": "Kafka: A Distributed Messaging System for Log Processing", "editorial": "LinkedIn / NetDB", "url": "https://data-artisans.com/wp-content/uploads/2015/09/kafka.pdf"},
            {"tipo": "Libro", "autor": "Kleppmann, Martin (2017)", "titulo": "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems", "editorial": "O'Reilly Media", "url": "https://dataintensive.net/"},
            {"tipo": "Libro", "autor": "Chambers, B. & Zaharia, M. (2018)", "titulo": "Spark: The Definitive Guide: Big Data Processing Made Simple", "editorial": "O'Reilly Media", "url": "https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/"},
            {"tipo": "Oficial", "autor": "DNP (2018)", "titulo": "Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)", "editorial": "Gobierno de Colombia", "url": "https://colaboracion.dnp.gov.co/CDI/Conpes/Econ%C3%B3micos/3920.pdf"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía de Optimización de Memoria y Rendimiento en Apache Spark (Spark Tuning Guide)", "entidad": "Apache Spark Foundation", "porque": "Explica configuración de memoria en executors, recolección de basura y diagnóstico en Spark UI.", "url": "https://spark.apache.org/docs/latest/tuning.html"},
            {"tipo": "Guía Técnica", "titulo": "Adaptive Query Execution (AQE) en Apache Spark 3.x", "entidad": "Databricks Guide", "porque": "Analiza optimización dinámica en tiempo de ejecución: conversión a broadcast join y manejo de skew join.", "url": "https://www.databricks.com/blog/2020/05/29/adaptive-query-execution-speeding-up-spark-sql-at-runtime.html"},
            {"tipo": "Manual", "titulo": "Structured Streaming & Fault-Tolerance Protocol", "entidad": "Apache Spark", "porque": "Detalla checkpointing, operaciones stateful y watermarks para flujos de datos en tiempo real.", "url": "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html"},
            {"tipo": "Guía Cloud", "titulo": "Arquitectura de Almacenamiento Masivo en la Nube (AWS S3 & Google Cloud Storage)", "entidad": "Cloud Architect Guides", "porque": "Fundamentos de consistencia fuerte, multipart uploads y lifecycle policies para almacenamiento distribuido.", "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html"}
        ]
    },
    2: {
        "fuentes": [
            {"tipo": "Libro", "autor": "DAMA International (2017)", "titulo": "DAMA-DMBOK: Data Management Body of Knowledge (2nd ed.)", "editorial": "Technics Publications", "url": "https://www.dama.org/cpages/dmbok"},
            {"tipo": "Libro", "autor": "Kimball, Ralph & Ross, Margy (2013)", "titulo": "The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3rd ed.)", "editorial": "Wiley", "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/"},
            {"tipo": "Libro", "autor": "Inmon, William H. (2005)", "titulo": "Building the Data Warehouse (4th ed.)", "editorial": "Wiley", "url": "https://www.wiley.com/en-us/Building+the+Data+Warehouse%2C+4th+Edition-p-9780764599446"},
            {"tipo": "Libro", "autor": "Dehghani, Zhamak (2022)", "titulo": "Data Mesh: Delivering Data-Driven Value at Scale", "editorial": "O'Reilly Media", "url": "https://www.oreilly.com/library/view/data-mesh/9781492092384/"},
            {"tipo": "Paper", "autor": "Armbrust, M., Ghodsi, A., Zaharia, M., et al. (2021)", "titulo": "Lakehouse: A New Generation of Open Data Platforms that Unify Data Warehousing and Advanced Analytics", "editorial": "Proceedings of CIDR", "url": "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"},
            {"tipo": "Estándar", "autor": "The Open Group (2022)", "titulo": "TOGAF Standard Version 9.2 & 10: Phase C - Information Systems Architectures (Data Architecture)", "editorial": "The Open Group", "url": "https://www.opengroup.org/togaf"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Marco de Referencia de Arquitectura Empresarial (MRAE) - Dominio de Información", "entidad": "MinTIC Colombia", "porque": "Directrices técnicas obligatorias para el diseño de servicios de intercambio y arquitecturas de datos estatales.", "url": "https://arquitecturaempresarial.mintic.gov.co/"},
            {"tipo": "Estándar Abierto", "titulo": "Especificación Oficial Apache Iceberg: Formatos de Metadatos y ACID Table Spec", "entidad": "Apache Software Foundation", "porque": "Estructura interna de manifest files, manifest lists, snapshots y time travel en Lakehouses modernos.", "url": "https://iceberg.apache.org/spec/"},
            {"tipo": "Metodología", "titulo": "Guía Práctica de Data Mesh: Implementación de Data Products y Gobernanza Federada", "entidad": "ThoughtWorks Research", "porque": "Patrones de diseño de productos de datos con contratos de datos y catálogos distribuidos.", "url": "https://www.thoughtworks.com/insights/articles/data-mesh-principles-practices"}
        ]
    },
    3: {
        "fuentes": [
            {"tipo": "Libro", "autor": "Hohpe, Gregor & Woolf, Bobby (2003)", "titulo": "Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions", "editorial": "Addison-Wesley", "url": "https://www.enterpriseintegrationpatterns.com/"},
            {"tipo": "Oficial", "autor": "MinTIC Colombia (2022)", "titulo": "Resolución 460 de 2022: Marco de Interoperabilidad para el Gobierno Digital (X-Road / Servicios Web)", "editorial": "MinTIC", "url": "https://gobiernodigital.mintic.gov.co/"},
            {"tipo": "Resolución", "autor": "UAE DIAN (2020)", "titulo": "Resolución 000042 de 2020: Anexo Técnico de Factura Electrónica UBL 2.1", "editorial": "DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Estándar", "autor": "OASIS (2018)", "titulo": "Universal Business Language (UBL) v2.1: Estructuras XML para Factura, Nota Débito y Crédito", "editorial": "OASIS Open Standard", "url": "https://docs.oasis-open.org/ubl/UBL-2.1.html"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía de Integración e Interoperabilidad en los Servicios Ciudadanos Digitales (X-Road Colombia)", "entidad": "Agencia Nacional Digital", "porque": "Arquitectura de servidores de seguridad (Security Servers) e intercambio de datos seguro entre entidades estatales.", "url": "https://and.gov.co/"},
            {"tipo": "Manual", "titulo": "Patrones de Resiliencia en APIs REST y Event-Driven (Circuit Breaker, Retry, Dead Letter Queue)", "entidad": "Microsoft Azure Architecture Center", "porque": "Mitigación de cascadas de fallas y manejo de contingencias tecnológicas en servicios de alta demanda.", "url": "https://learn.microsoft.com/azure/architecture/patterns/"},
            {"tipo": "Guía Técnica", "titulo": "Validación Criptográfica y Firma Digital XML-DSig / XAdES-EPES en Documentos Electrónicos DIAN", "entidad": "UAE DIAN / ONAC", "porque": "Requisitos de no repudio, sellado de tiempo y certificados digitales en factura electrónica.", "url": "https://www.dian.gov.co/"}
        ]
    },
    4: {
        "fuentes": [
            {"tipo": "Libro", "autor": "Provost, Foster & Fawcett, Tom (2013)", "titulo": "Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking", "editorial": "O'Reilly Media", "url": "https://www.oreilly.com/library/view/data-science-for/9781449374273/"},
            {"tipo": "Libro", "autor": "Hastie, T., Tibshirani, R. & Friedman, J. (2009)", "titulo": "The Elements of Statistical Learning: Data Mining, Inference, and Prediction (2nd ed.)", "editorial": "Springer", "url": "https://hastie.su.domains/ElemStatLearn/"},
            {"tipo": "Oficial", "autor": "DNP (2019)", "titulo": "Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial", "editorial": "DNP Colombia", "url": "https://colaboracion.dnp.gov.co/CDI/Conpes/Econ%C3%B3micos/3975.pdf"},
            {"tipo": "Libro", "autor": "Needham, Mark & Hodler, Amy E. (2019)", "titulo": "Graph Algorithms: Practical Examples in Apache Spark and Neo4j", "editorial": "O'Reilly Media", "url": "https://www.oreilly.com/library/view/graph-algorithms/9781492047674/"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Marco Ético para la Inteligencia Artificial en Colombia", "entidad": "Gobierno de Colombia / MinTIC", "porque": "Principios de transparencia, explicabilidad, no discriminación y supervisión humana en algoritmos públicos.", "url": "https://www.mintic.gov.co/"},
            {"tipo": "Auditoría", "titulo": "Guía de Auditoría de Algoritmos y Modelos de Aprendizaje Automático en el Sector Público", "entidad": "DNP / Contraloría General", "porque": "Controles técnicos para verificar reproducibilidad, auditoría de sesgos y prevención de fuga de datos en modelos estatales.", "url": "https://www.dnp.gov.co/"},
            {"tipo": "Guía Técnica", "titulo": "Detección de Data Drift y Concept Drift (PSI & Evidently AI Metrics Guide)", "entidad": "Evidently AI Documentation", "porque": "Manual técnico para monitoreo continuo de métricas de estabilidad poblacional en MLOps.", "url": "https://docs.evidentlyai.com/"},
            {"tipo": "Manual", "titulo": "Guía Práctica sobre Facturación Electrónica y Modelos de Detección de Fraude en el IVA", "entidad": "CIAT (Centro Interamericano de Administraciones Tributarias)", "porque": "Casos de estudio de administraciones tributarias aplicando analítica de grafos y Machine Learning.", "url": "https://www.ciat.org/"}
        ]
    },
    5: {
        "fuentes": [
            {"tipo": "Libro", "autor": "DAMA International (2017)", "titulo": "DAMA-DMBOK: Data Management Body of Knowledge (2nd ed.) - Capítulo 3: Data Governance Framework", "editorial": "Technics Publications", "url": "https://www.dama.org/cpages/dmbok"},
            {"tipo": "Estándar", "autor": "ISO/IEC (2008)", "titulo": "ISO/IEC 25012: Software engineering — Software product Quality Requirements and Evaluation (SQuaRE) — Data quality model", "editorial": "ISO Geneva", "url": "https://www.iso.org/standard/35736.html"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2012)", "titulo": "Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2014)", "titulo": "Ley 1712 de 2014: Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/ley_1712_2014.html"},
            {"tipo": "Decreto", "autor": "Presidencia de Colombia (1989)", "titulo": "Estatuto Tributario Nacional - Artículo 583: Reserva de las Declaraciones Tributarias", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía de Calidad y Gobierno de Datos para Entidades Públicas", "entidad": "MinTIC Colombia", "porque": "Fija las directrices obligatorias de gobernanza de datos para la administración colombiana.", "url": "https://gobiernodigital.mintic.gov.co/"},
            {"tipo": "Metodología", "titulo": "Marco DAMA Wheel y Evaluación de Madurez de Gestión de Datos", "entidad": "DAMA International", "porque": "Análisis de las 11 áreas de conocimiento y niveles de madurez CMMI para auditorías de datos.", "url": "https://www.dama.org/"},
            {"tipo": "Guía Técnica", "titulo": "Guía para la Implementación del Principio de Responsabilidad Demostrada (Accountability)", "entidad": "Superintendencia de Industria y Comercio (SIC)", "porque": "Criterios de auditoría y medidas de seguridad obligatorias para responsables de bases de datos.", "url": "https://www.sic.gov.co/"},
            {"tipo": "Lineamiento", "titulo": "Lineamientos de Reserva Tributaria en Sistemas de Información", "entidad": "UAE DIAN", "porque": "Doctrina oficial sobre alcance, excepciones probatorias y sanciones por violación del Art. 583 E.T.", "url": "https://www.dian.gov.co/"}
        ]
    },
    6: {
        "fuentes": [
            {"tipo": "Decreto", "autor": "Presidencia de la República (2020)", "titulo": "Decreto 1742 de 2020: Estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales", "editorial": "Diario Oficial 51.536", "url": "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30040183"},
            {"tipo": "Decreto Ley", "autor": "Presidencia de la República (2020/2023)", "titulo": "Decretos Ley 071 de 2020 y 927 de 2023: Sistema Específico de Carrera Administrativa de la DIAN", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/"},
            {"tipo": "Resolución", "autor": "UAE DIAN (2021)", "titulo": "Resolución 000069 de 2021: Distribución y Asignación de Funciones de las Dependencias de la DIAN", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Resolución", "autor": "UAE DIAN (2024)", "titulo": "Manual Específico de Funciones y Competencias Laborales para los Empleos de la DIAN", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Organigrama Funcional y Matriz de Relacionamiento Dirección de Gestión de Innovación y Tecnología", "entidad": "UAE DIAN", "porque": "Detalla la subordinación, dependencias y flujo de información entre subdirecciones tecnológicas.", "url": "https://www.dian.gov.co/"},
            {"tipo": "Lineamiento", "titulo": "Protocolo de Carrera Específica y Evaluación del Desempeño Laboral en la DIAN", "entidad": "Comisión de Personal DIAN / CNSC", "porque": "Criterios de ascenso, periodo de prueba y causales de retiro del servicio en el régimen especial.", "url": "https://www.cnsc.gov.co/"},
            {"tipo": "Doctrina", "titulo": "Sentencia C-494 de 2020 de la Corte Constitucional sobre Regímenes Especiales de Carrera", "entidad": "Corte Constitucional", "porque": "Fundamentación del mérito, igualdad de oportunidades e ingreso por concurso público en la DIAN.", "url": "https://www.corteconstitucional.gov.co/"}
        ]
    },
    7: {
        "fuentes": [
            {"tipo": "Estándar", "autor": "AXELOS (2019)", "titulo": "ITIL® 4 Foundation: ITIL 4 Edition (Service Value System, Service Level Management, SLAs, OLAs)", "editorial": "TSO (The Stationery Office)", "url": "https://www.axelos.com/certifications/itil-service-management"},
            {"tipo": "Estándar", "autor": "ISACA (2018)", "titulo": "COBIT® 2019 Framework: Governance and Management Objectives", "editorial": "ISACA", "url": "https://www.isaca.org/resources/cobit"},
            {"tipo": "Oficial", "autor": "MinTIC Colombia (2021)", "titulo": "Modelo de Madurez de Gestión de Datos para el Sector Público", "editorial": "MinTIC", "url": "https://gobiernodigital.mintic.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía para la Definición y Monitoreo de Acuerdos de Nivel de Servicio (SLA) en TI del Estado", "entidad": "MinTIC / DAFP", "porque": "Diseño de métricas de disponibilidad (99.9%), tiempo de respuesta y escalamiento de incidentes.", "url": "https://www.mintic.gov.co/"},
            {"tipo": "Manual", "titulo": "Catálogo de Servicios de Información e Intercambio Seguro de Datos", "entidad": "UAE DIAN", "porque": "Especificación técnica de APIs, contratos de intercambio y consumo de servicios analíticos institucionales.", "url": "https://www.dian.gov.co/"}
        ]
    },
    8: {
        "fuentes": [
            {"tipo": "Decreto", "autor": "Presidencia de la República (1989)", "titulo": "Estatuto Tributario Nacional (Decreto 624 de 1989) - Obligaciones, Determinación y Sanciones", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html"},
            {"tipo": "Decreto", "autor": "Presidencia de la República (2019)", "titulo": "Decreto 1165 de 2019: Régimen de Aduanas de Colombia y Operaciones de Comercio Exterior", "editorial": "Diario Oficial", "url": "https://www.suin-juriscol.gov.co/"},
            {"tipo": "Oficial", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3 y Filosofía Institucional de la DIAN", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Plan Estratégico Institucional DIAN y Modelo de Gestión del Riesgo Integral", "entidad": "UAE DIAN", "porque": "Ejes misionales de recaudo, control aduanero y facilitación del comercio exterior.", "url": "https://www.dian.gov.co/"},
            {"tipo": "Manual", "titulo": "Manual de Procedimientos del Sistema de Fiscalización Electrónica y Aduanera", "entidad": "UAE DIAN", "porque": "Fases del proceso de cobro, pliegos de cargos, liquidaciones oficiales y recursos procesales.", "url": "https://www.dian.gov.co/"}
        ]
    },
    9: {
        "fuentes": [
            {"tipo": "Libro", "autor": "Kimball, Ralph & Ross, Margy (2013)", "titulo": "The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3rd ed.)", "editorial": "Wiley", "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/"},
            {"tipo": "Libro", "autor": "Inmon, William H. (2005)", "titulo": "Building the Data Warehouse (4th ed.)", "editorial": "Wiley", "url": "https://www.wiley.com/en-us/Building+the+Data+Warehouse%2C+4th+Edition-p-9780764599446"},
            {"tipo": "Libro", "autor": "Celko, Joe (2014)", "titulo": "Complete Guide to NoSQL: What Every SQL Professional Needs to Know", "editorial": "Morgan Kaufmann", "url": "https://www.sciencedirect.com/book/9780124071926/complete-guide-to-nosql"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía de Modelado Dimensional y Granularidad en Data Warehouses Fiscales", "entidad": "Kimball Group Technical Articles", "porque": "Patrones de diseño de hechos transaccionales, periódicos acumulativos y dimensiones lentamente cambiantes (SCD 1, 2, 3).", "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/"},
            {"tipo": "Metodología", "titulo": "Patrones de Modelado Data Vault 2.0 (Hubs, Links y Satélites)", "entidad": "Data Vault Alliance", "porque": "Arquitectura de repositorios de datos históricos altamente auditables y adaptables a cambios continuos.", "url": "https://datavaultalliance.com/"}
        ]
    },
    10: {
        "fuentes": [
            {"tipo": "Libro", "autor": "Kahneman, Daniel (2011)", "titulo": "Thinking, Fast and Slow (Sistema 1 vs. Sistema 2, Sesgos Cognitivos)", "editorial": "Farrar, Straus and Giroux", "url": "https://us.macmillan.com/books/9780374533557/thinkingfastandslow"},
            {"tipo": "Libro", "autor": "Pearl, Judea & Mackenzie, Dana (2018)", "titulo": "The Book of Why: The New Science of Cause and Effect", "editorial": "Basic Books", "url": "https://www.basicbooks.com/titles/judea-pearl/the-book-of-why/9780465097609/"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2012)", "titulo": "Ley 1564 de 2012 (Código General del Proceso) - Artículos 240 a 242: Prueba por Indicios", "editorial": "Diario Oficial", "url": "https://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (1989)", "titulo": "Estatuto Tributario Nacional - Artículos 742 a 746: Régimen Probatorio y Presunción de Veracidad", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html"}
        ],
        "complementarios": [
            {"tipo": "Guía Técnica", "titulo": "Guía de Detección de Falacias Estadísticas en Analítica de Negocio", "entidad": "Harvard Data Science Review", "porque": "Análisis práctico sobre p-hacking, sesgo de supervivencia y selección de variables en ciencia de datos.", "url": "https://hdsr.mitpress.mit.edu/"},
            {"tipo": "Jurisprudencia", "titulo": "Jurisprudencia del Consejo de Estado sobre la Prueba Indiciaria en Procesos Tributarios", "entidad": "Consejo de Estado de Colombia", "porque": "Criterios de pluralidad, gravedad y concordancia para desvirtuar la presunción de veracidad.", "url": "https://www.consejodeestado.gov.co/"},
            {"tipo": "Manual", "titulo": "Manual de Auditoría Fiscal Basada en Riesgos", "entidad": "CIAT", "porque": "Criterios para evitar sesgos muestrales en la selección de contribuyentes para fiscalización.", "url": "https://www.ciat.org/"}
        ]
    },
    11: {
        "fuentes": [
            {"tipo": "Estándar", "autor": "ISO/IEC (2022)", "titulo": "ISO/IEC 27001:2022 - Information Security Management Systems (ISMS)", "editorial": "ISO Geneva", "url": "https://www.iso.org/standard/27001"},
            {"tipo": "Estándar", "autor": "ISO (2019)", "titulo": "ISO 22301:2019 - Security and resilience — Business continuity management systems", "editorial": "ISO Geneva", "url": "https://www.iso.org/standard/75106.html"},
            {"tipo": "Estándar", "autor": "NIST (2020)", "titulo": "NIST SP 800-53 Rev. 5: Security and Privacy Controls for Information Systems and Organizations", "editorial": "U.S. Dept of Commerce", "url": "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2009)", "titulo": "Ley 1273 de 2009: Delitos Informáticos y Protección de Sistemas de Información", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html"},
            {"tipo": "Decreto", "autor": "Presidencia de Colombia (1989)", "titulo": "Estatuto Tributario Nacional - Artículo 579-2: Declaración de Contingencia Tecnológica", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html"}
        ],
        "complementarios": [
            {"tipo": "Política", "titulo": "Documento CONPES 3995 de 2020: Política Nacional de Confianza y Seguridad Digital", "entidad": "DNP Colombia", "porque": "Lineamientos de ciberseguridad para infraestructuras críticas del Estado y resiliencia cibernética.", "url": "https://colaboracion.dnp.gov.co/CDI/Conpes/Econ%C3%B3micos/3995.pdf"},
            {"tipo": "Guía Técnica", "titulo": "Guía para la Gestión de Continuidad del Negocio en Entidades Públicas", "entidad": "DAFP / MinTIC", "porque": "Metodología para BCP/DRP, análisis de impacto al negocio (BIA) y cálculo de RTO y RPO.", "url": "https://www.funcionpublica.gov.co/"},
            {"tipo": "Jurisprudencia", "titulo": "Sentencia C-063 de 2003 de la Corte Constitucional sobre Reserva Tributaria y Control Fiscal", "entidad": "Corte Constitucional", "porque": "Límites constitucionales de la reserva tributaria frente al derecho de acceso a la información pública.", "url": "https://www.corteconstitucional.gov.co/"}
        ]
    },
    12: {
        "fuentes": [
            {"tipo": "Resolución", "autor": "UAE DIAN (2024)", "titulo": "Resolución 065 de 2024: Diccionario de Competencias Comportamentales de la DIAN (Comportamiento Ético Nivel 4)", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Guía Técnica", "autor": "Subdirección de Talento Humano DIAN (2024)", "titulo": "Abecé de Evidencias de Competencias Conductuales en la Función Pública", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Oficial", "titulo": "Guía Metodológica para la Evaluación de Juicio Situacional en Concursos Públicos", "entidad": "CNSC", "porque": "Estructura de casos, dilemas éticos y opciones de respuesta con justificación conductual.", "url": "https://www.cnsc.gov.co/"},
            {"tipo": "Manual", "titulo": "Guía para la Gestión y Trámite del Conflicto de Interés en el Empleo Público", "entidad": "DAFP", "porque": "Definición de conflicto de interés aparente, potencial y real, y deber de declaración formal.", "url": "https://www.funcionpublica.gov.co/"}
        ]
    },
    13: {
        "fuentes": [
            {"tipo": "Resolución", "autor": "UAE DIAN (2024)", "titulo": "Resolución 065 de 2024: Diccionario de Competencias Comportamentales de la DIAN (Comunicación Efectiva Nivel 4)", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Guía Oficial", "autor": "DAFP (2019)", "titulo": "Guía de Lenguaje Claro para Servidores Públicos de Colombia", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/"},
            {"tipo": "Guía Técnica", "autor": "Subdirección de Talento Humano DIAN (2024)", "titulo": "Abecé de Evidencias de Competencias Conductuales: Comunicación Asertiva", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Manual de Comunicaciones Oficiales y Atención al Ciudadano en Canales Digitales", "entidad": "UAE DIAN", "porque": "Protocolos de redacción clara, empatía y respuestas jurídicamente sólidas a requerimientos ciudadanos.", "url": "https://www.dian.gov.co/"}
        ]
    },
    14: {
        "fuentes": [
            {"tipo": "Resolución", "autor": "UAE DIAN (2024)", "titulo": "Resolución 065 de 2024: Diccionario de Competencias Comportamentales de la DIAN (Innovación Nivel 4)", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Libro", "autor": "Bason, Christian (2018)", "titulo": "Leading Public Sector Innovation: Co-creating for a Better Society", "editorial": "Policy Press", "url": "https://policy.bristoluniversitypress.co.uk/leading-public-sector-innovation-second-edition"},
            {"tipo": "Guía Técnica", "autor": "Subdirección de Talento Humano DIAN (2024)", "titulo": "Abecé de Evidencias de Competencias Conductuales: Innovación y Mejora Continua", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Metodología", "titulo": "Metodología de Innovación Pública y Experimentación en el Estado", "entidad": "DNP / Equipo de Innovación Pública (EiP)", "porque": "Diseño centrado en el usuario, prototipado rápido y evaluación de impacto de soluciones digitales.", "url": "https://www.dnp.gov.co/"}
        ]
    },
    15: {
        "fuentes": [
            {"tipo": "Resolución", "autor": "UAE DIAN (2024)", "titulo": "Resolución 065 de 2024: Diccionario de Competencias Comportamentales de la DIAN (Trabajo en Equipo Nivel 3)", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Libro", "autor": "Lencioni, Patrick (2002)", "titulo": "The Five Dysfunctions of a Team: A Leadership Fable", "editorial": "Jossey-Bass", "url": "https://www.tablegroup.com/books/dysfunctions/"},
            {"tipo": "Guía Técnica", "autor": "Subdirección de Talento Humano DIAN (2024)", "titulo": "Abecé de Evidencias de Competencias Conductuales: Trabajo Colaborativo", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Oficial", "titulo": "Guía de Liderazgo y Trabajo en Equipo en la Transformación de la DIAN", "entidad": "UAE DIAN", "porque": "Gestión del cambio, resolución de conflictos interdependientes y alineación de objetivos institucionales.", "url": "https://www.dian.gov.co/"}
        ]
    },
    16: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3: Valor del Compromiso", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Oficial", "autor": "UAE DIAN (2023)", "titulo": "Filosofía Institucional de la DIAN: Propósito Central, Misión y Manifiesto de Servidores", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Oficial", "titulo": "Caja de Herramientas de Integridad del Servidor Público", "entidad": "DAFP", "porque": "Casos prácticos de juicio situacional para interiorizar y evidenciar el valor del compromiso con el bien común.", "url": "https://www.funcionpublica.gov.co/"}
        ]
    },
    17: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3: Valor de la Diligencia", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2019/2021)", "titulo": "Leyes 1952 de 2019 y 2094 de 2021: Código General Disciplinario (Deberes, Prohibiciones y Faltas)", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/ley_1952_2019.html"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Manual de Buenas Prácticas Disciplinarias y Prevención del Daño Antijurídico", "entidad": "Procuraduría General de la Nación", "porque": "Estándares de debida diligencia, custodia de expedientes y observancia de términos legales perentorios.", "url": "https://www.procuraduria.gov.co/"}
        ]
    },
    18: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3: Valor de la Honestidad", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Guía Oficial", "autor": "UAE DIAN (2023)", "titulo": "Guía para la Gestión y Trámite del Conflicto de Interés", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Decreto", "autor": "Presidencia de la República (1989)", "titulo": "Estatuto Tributario Nacional - Artículo 583: Reserva de las Declaraciones Tributarias", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html"}
        ],
        "complementarios": [
            {"tipo": "Política", "titulo": "Estrategia de Transparencia, Acceso a la Información y Lucha contra la Corrupción", "entidad": "Secretaría de Transparencia de la Presidencia", "porque": "Mecanismos de rendición de cuentas, canales de denuncia y protección al denunciante en entidades recaudadoras.", "url": "http://www.secretariatransparencia.gov.co/"}
        ]
    },
    19: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3: Valor de la Justicia y la Equidad", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Oficial", "autor": "UAE DIAN (2023)", "titulo": "Valor Aspiracional de la DIAN: Objetividad (Lechuza) - Decisiones Basadas en Evidencias", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Ley", "autor": "Congreso de Colombia (2011)", "titulo": "Ley 1437 de 2011 (CPACA): Principios de Igualdad, Imparcialidad y Debido Proceso", "editorial": "Diario Oficial", "url": "http://www.secretariasenado.gov.co/senado/basedoc/ley_1437_2011.html"}
        ],
        "complementarios": [
            {"tipo": "Jurisprudencia", "titulo": "Sentencia C-003 de 2017 de la Corte Constitucional sobre Debido Proceso Administrativo", "entidad": "Corte Constitucional", "porque": "Garantías sustanciales de contradicción, presunción de buena fe y motivación en decisiones tributarias.", "url": "https://www.corteconstitucional.gov.co/"}
        ]
    },
    20: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN (2023)", "titulo": "Código de Integridad CG-TAH-0002 Versión 3: Valor del Respeto", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Oficial", "autor": "UAE DIAN (2023)", "titulo": "Manifiesto Institucional de la DIAN: El Respeto por la Dignidad Humana y la Diversidad", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía Oficial", "titulo": "Guía de Enfoque Diferencial y No Discriminación en la Función Pública", "entidad": "DAFP / Ministerio de Justicia", "porque": "Protocolos de atención digna, equitativa y libre de sesgos en actuaciones administrativas con ciudadanos.", "url": "https://www.funcionpublica.gov.co/"}
        ]
    }
}

# 1. Actualizar track_intros.js
js_path = 'IA/3_Aplicativo_Interactivo/js/track_intros.js'
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

prefix = js_content.split('window.MODULE_BIBLIOGRAPHIES =')[0].rstrip()
new_js = prefix + '\n\nwindow.MODULE_BIBLIOGRAPHIES = ' + json.dumps(MOD_DATA, ensure_ascii=False, indent=4) + ';\n'

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(new_js)

print("OK: track_intros.js actualizado exitosamente.")

# 2. Limpiar secciones de bibliografia redundantes en los markdowns
md_files = sorted(glob.glob('IA/4_Ampliacion_Contenido/*.md'))
cleaned_count = 0

for mf in md_files:
    with open(mf, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reemplazar secciones de bibliografía y complementarios
    # Buscamos '## ... Bibliografía' hasta el siguiente '##' o '#' o fin
    # OJO: Queremos mantener las Flashcards ('# Flashcards') y las lecciones ('# Titulo Leccion')
    
    # Patron 1: ## ... Bibliografía Oficial ...
    p1 = r'\n##\s*\d*\.?\s*Bibliograf[íi]a[^\n]*\n.*?(?=\n##|\n#|\Z)'
    # Patron 2: ## ... Documentos Complementarios ...
    p2 = r'\n##\s*\d*\.?\s*Documentos Complementarios[^\n]*\n.*?(?=\n##|\n#|\Z)'

    new_content = re.sub(p1, '', content, flags=re.DOTALL | re.IGNORECASE)
    new_content = re.sub(p2, '', new_content, flags=re.DOTALL | re.IGNORECASE)

    if new_content != content:
        with open(mf, 'w', encoding='utf-8') as f:
            f.write(new_content)
        cleaned_count += 1
        print(f"Limpio: {mf}")

print(f"Total archivos Markdown limpiados de texto plano repetido: {cleaned_count}")
