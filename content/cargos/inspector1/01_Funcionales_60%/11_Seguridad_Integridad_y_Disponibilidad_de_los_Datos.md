---
titulo: "11. Seguridad, Integridad y Disponibilidad de los Datos"
modulo: 11
componente: "Funcional - Seguridad de la Información & Ciberseguridad (60%)"
cargo: "Inspector I (OPEC 236670 - Nivel Profesional)"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
operador: "Universidad de San Buenaventura / Areandina"
corte_normativo: "19 de junio de 2026"
total_preguntas: 10
total_flashcards: 20
---

# Guía de Estudio e Inmersión Técnica: Seguridad, Integridad y Disponibilidad de los Datos

**Concurso de Méritos:** DIAN 2676 de 2026 — Comisión Nacional del Servicio Civil (CNSC)  
**Operador Académico:** Universidad de San Buenaventura / Areandina  
**Cargo Objetivo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia Asignada:** Subdirección de Procesamiento de Datos (Dirección de Gestión de Innovación y Tecnología - Nivel Central)  
**Eje Temático Funcional:** 11. Seguridad, Integridad y Disponibilidad de los Datos  
**Ponderación en Prueba de Competencias Funcionales:** 60%  
**Corte Normativo y Técnico Oficial:** 19 de junio de 2026  

---

## Unidad 1: La Tríada de Seguridad de la Información (CID) en la DIAN

### 1.1 El Ecosistema de Seguridad en la Administración Tributaria y Aduanera
La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) custodia el activo intangible más sensible de la República de Colombia: los registros patrimoniales, transaccionales, bancarios y de comercio exterior de la totalidad de las personas naturales y jurídicas del país. Una brecha de seguridad que comprometa la información fiscal del Estado no solo vulnera los derechos fundamentales a la intimidad económica y el *Habeas Data* (Artículos 15 y 74 de la Constitución Política), sino que destruye la confianza ciudadana en las instituciones y amenaza directamente la **Seguridad Fiscal de la Nación**.

La doctrina internacional de ciberseguridad estructura la protección de los activos de información en torno al modelo canónico de la **Tríada CID (Confidencialidad, Integridad y Disponibilidad)**, el cual adquiere en la DIAN connotaciones técnicas y mandatos jurídicos reforzados:

```diagram
LA TRÍADA CID APLICADA A LA SEGURIDAD FISCAL DE LA DIAN

                       [CONFIDENCIALIDAD]
                       * Reserva Tributaria (Art. 583 E.T.)
                       * Control de Acceso ABAC / RBAC
                       * Enmascaramiento Dinámico (DDM)
                               /\
                              /  \
                             /    \
                            /      \
                           /        \
                          /          \
                         /            \
[INTEGRIDAD] <--------------------------> [DISPONIBILIDAD]
* Hashes Criptográficos SHA-256           * Alta Disponibilidad (Multi-Región)
* Firma Digital X.509 (Factura UBL 2.1)   * Continuidad de Negocio (BCP / DRP)
* Trazabilidad Forense Inmutable          * RTO < 1h / RPO < 15min en Vencimientos
```

1. **Confidencialidad:** Garantiza que la información tributaria, aduanera y cambiaria sea accesible **únicamente por los funcionarios y sistemas autorizados**, amparados en un mandato legal expreso o auto comisorio de investigación (Artículo 583 del Estatuto Tributario). Proscribe terminantemente la divulgación o consulta de declaraciones fuera de expedientes reglados.
2. **Integridad:** Asegura la **exactitud, completitud y no alteración** de los datos a lo largo de todo su ciclo de vida (desde la transmisión de la factura electrónica por el contribuyente hasta su almacenamiento en DataR). Garantiza que ninguna cifra haya sido borrada, modificada o corrompida de forma accidental o maliciosa (*Principio de Inalterabilidad Probatoria*).
3. **Disponibilidad:** Asegura que los sistemas informáticos, las APIs de facturación y los portales de radicación y pago permanezcan **plenamente accesibles y operativos para los ciudadanos y la administración cuando se requieran**, evitando parálisis operacionales en fechas de vencimientos masivos del calendario tributario (Artículo 579-2 del E.T. - Declaratoria de contingencia).

### 1.2 Matriz Comparativa: Los Tres Pilares de la Tríada CID en la DIAN
La siguiente matriz detalla la articulación técnica, los riesgos operacionales y las consecuencias normativas de cada dimensión de la tríada:

| Dimensión de Seguridad | Objetivo Estratégico en la DIAN | Riesgo de Materialización | Mecanismos Técnicos de Mitigación | Marco Normativo y Sancionatorio |
| :--- | :--- | :--- | :--- | :--- |
| **Confidencialidad** | Blindar el secreto fiscal y comercial de los contribuyentes frente a accesos no autorizados. | Fuga de información reservada, extorsión a contribuyentes y venta de bases de datos. | RBAC, ABAC, Enmascaramiento Dinámico (DDM), Cifrado en reposo (AES-256) y TLS 1.3. | Art. 583 E.T. (Reserva Tributaria), Ley 1581 de 2012, Ley 1273 de 2009 (Art. 269F - Delito). |
| **Integridad** | Garantizar que las declaraciones, facturas y registros contables no sufran adulteración. | Falsedad material en documento público, alteración de deudas fiscales y borrado de cartera. | Hashes SHA-256, Firmas Digitales con certificados X.509, Formatos WORM e inmutabilidad en DataR. | Código Penal (Art. 287 - Falsedad), Ley 527 de 1999 (No Repudio), CPACA Art. 137. |
| **Disponibilidad** | Garantizar la operación ininterrumpida de los servicios de radicación, pago y facturación. | Caída del portal MUISCA en días de vencimiento, denegación de servicio (DDoS) y daño de discos. | Clústeres Activo-Activo multi-zona, Auto-scaling en la nube, DRP/BCP, RTO y RPO mínimos. | Art. 579-2 E.T. (Declaratoria de Contingencia), Decreto 1499 de 2017 (MIPG Gestión Operativa). |

### 1.3 El Modelo de Defensa en Profundidad (*Defense-in-Depth*)
En la Subdirección de Procesamiento de Datos, la seguridad no se confía a un único mecanismo perimetral (como un firewall externo), sino que se implementa una arquitectura de **Defensa en Profundidad** estructurada en múltiples capas concéntricas:

```blueprint
ARQUITECTURA DE DEFENSA EN PROFUNDIDAD EN EL ENTORNO DataR

+-------------------------------------------------------------------------------+
| 1. SEGURIDAD FÍSICA Y DE ENTORNO: Centros de cómputo Tier III/IV, biometría.  |
+-------------------------------------------------------------------------------+
  |
  v
+-------------------------------------------------------------------------------+
| 2. SEGURIDAD PERIMETRAL: WAF (Web Application Firewall), Protección Anti-DDoS.|
+-------------------------------------------------------------------------------+
    |
    v
+-------------------------------------------------------------------------------+
| 3. SEGURIDAD DE RED: Microsegmentación, VPCs aisladas, mTLS y Zero Trust.    |
+-------------------------------------------------------------------------------+
      |
      v
+-------------------------------------------------------------------------------+
| 4. SEGURIDAD DE CÓMPUTO: Hardening de Kubernetes, parches automáticos de OS.  |
+-------------------------------------------------------------------------------+
        |
        v
+-------------------------------------------------------------------------------+
| 5. SEGURIDAD DE APLICACIÓN: Validación de esquemas, OAuth 2.0, API Gateway.   |
+-------------------------------------------------------------------------------+
          |
          v
+-------------------------------------------------------------------------------+
| 6. SEGURIDAD DEL DATO (NÚCLEO): Cifrado AES-256, RLS, CLS, Masking, Auditoría.|
+-------------------------------------------------------------------------------+
```

Si una capa exterior se ve comprometida (por ejemplo, una brecha en la red interna), las capas interiores (autenticación mTLS, control de acceso basado en atributos y cifrado de columnas) impiden que el atacante extraiga datos legibles o altere las tablas de DataR.

> [!LAW]
> **Fundamento Jurídico - Artículo 583 del Estatuto Tributario:**  
> *"La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada..."*  
> La vulneración de la confidencialidad de la reserva no solo acarrea la destitución inmediata del cargo conforme al régimen disciplinario de los Decretos Ley 071 de 2020 y 927 de 2023, sino penas de prisión de 4 a 8 años consagradas en el Artículo 269F del Código Penal (Violación de Datos Personales).

> [!EXAM]
> **Alerta de Examen CNSC / Areandina:**  
> En las situaciones problema de la prueba de competencias funcionales, la opción que sugiera relajar los controles de cifrado, deshabilitar logs de auditoría forense o permitir accesos genéricos compartidos para acelerar la entrega de un proyecto urgente es **ROTUNDAMENTE INCORRECTA**. Los principios de seguridad por diseño (*Security by Design*) y de reserva tributaria son de orden público y no admiten excepciones operacionales.

---

## Unidad 2: Marco Normativo de Seguridad, Privacidad y Estándar ISO/IEC 27001 en la DIAN

### 2.1 La Norma Internacional ISO/IEC 27001:2022 y el SGSI en la DIAN
La DIAN fundamenta su gestión de seguridad en la norma internacional **ISO/IEC 27001:2022**, la cual especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un **Sistema de Gestión de Seguridad de la Información (SGSI)**.

El SGSI opera bajo el ciclo de Deming o **Ciclo PHVA (Planear, Hacer, Verificar, Actuar)**:
1. **Planear (Plan):** Definir el alcance del SGSI en la Subdirección de Procesamiento de Datos, evaluar los activos de información, realizar el análisis formal de riesgos y formular la Declaración de Aplicabilidad (*Statement of Applicability* - SoA) seleccionando los controles del Anexo A.
2. **Hacer (Do):** Implementar las políticas de seguridad, controles de acceso, cifrado, microsegmentación y programas de capacitación continua a funcionarios y contratistas.
3. **Verificar (Check):** Medir la eficacia del SGSI mediante auditorías internas de seguridad, escaneos de vulnerabilidades periódicos, simulacros de incidentes y revisión por la Dirección de Gestión de Innovación y Tecnología.
4. **Actuar (Act):** Adoptar acciones correctivas y de mejora continua ante incidentes de seguridad detectados, hallazgos de auditoría o nuevas amenazas cibernéticas emergentes.

```diagram
EL CICLO PHVA DEL SGSI (ISO/IEC 27001:2022) EN LA DIAN

     +-------------------------+             +-------------------------+
     |       PLANEAR (Plan)    |             |        HACER (Do)       |
     | * Evaluación de Activos |             | * Implementación de     |
     | * Análisis de Riesgos   | ----------> |   Controles de Seguridad|
     | * Declaración SoA       |             | * Cifrado y Gobernanza  |
     +-------------------------+             +-------------------------+
                  ^                                       |
                  |                                       v
     +-------------------------+             +-------------------------+
     |       ACTUAR (Act)      |             |     VERIFICAR (Check)   |
     | * Acciones Correctivas  | <---------- | * Auditorías Internas   |
     | * Lecciones Aprendidas  |             | * Pentesting y Métricas |
     | * Mejora Continua SGSI  |             | * Monitoreo SOC / SIEM  |
     +-------------------------+             +-------------------------+
```

### 2.2 El Modelo de Seguridad y Privacidad de la Información (MSPI) de MinTIC
En articulación con el Modelo Integrado de Planeación y Gestión (MIPG), la DIAN adopta el **Modelo de Seguridad y Privacidad de la Información (MSPI)** emitido por el Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) como política de obligatorio cumplimiento para el sector público colombiano. El MSPI alinea los controles de la norma ISO/IEC 27001 con el marco legal colombiano de transparencia, gobierno digital y protección de datos personales.

### 2.3 Régimen Penal de Delitos Informáticos en Colombia (Ley 1273 de 2009)
La Ley 1273 de 2009 incorporó al Código Penal el Título VII BIS, tipificando los delitos contra la confidencialidad, la integridad y la disponibilidad de los datos y de los sistemas informáticos. El Inspector I debe conocer con exactitud estas conductas para la custodia de los sistemas de la DIAN:

| Tipo Penal (Ley 1273 de 2009) | Conducta Fáctica Prohibida | Sanción Penal Prevista | Agravante para Servidores DIAN |
| :--- | :--- | :--- | :--- |
| **Acceso Abusivo a un Sistema Informático (Art. 269A)** | Acceder sin autorización o excediendo la autorización a todo o parte de un sistema informático de la DIAN. | Prisión de **48 a 96 meses** y multa de 100 a 1.000 SMLMV. | **Se aumenta de la mitad a las tres cuartas partes** si es cometido por funcionario con privilegios de acceso. |
| **Obstaculización Ilegítima de Sistema (Art. 269B)** | Impedir o dificultar el funcionamiento normal o el acceso a los servidores de facturación o portal DIAN. | Prisión de **48 a 96 meses** y multa de 100 a 1.000 SMLMV. | Agravado si afecta servicios esenciales de recaudación tributaria del Estado. |
| **Interceptación de Datos Informáticos (Art. 269C)** | Interceptar datos informáticos en su transmisión o emisiones electromagnéticas sin orden judicial. | Prisión de **36 a 72 meses**. | Agravado si los datos interceptados están amparados por reserva tributaria. |
| **Daño Informático (Art. 269D)** | Destruir, dañar, borrar, deteriorar o alterar datos tributarios en bases de datos de la DIAN. | Prisión de **48 a 96 meses** y multa de 100 a 1.000 SMLMV. | Agravado si afecta registros oficiales de declaraciones o cobro coactivo. |
| **Uso de Software Malicioso (Art. 269E)** | Producir, traficar, adquirir, distribuir o introducir malware o ransomware en la red de la DIAN. | Prisión de **48 a 96 meses** y multa de 100 a 1.000 SMLMV. | Agravado por atentar contra la infraestructura crítica del Estado. |
| **Violación de Datos Personales (Art. 269F)** | Obtener, sustraer, revelar, comercializar o usar datos personales fiscales en provecho propio o ajeno. | Prisión de **48 a 96 meses** y multa de 100 a 1.000 SMLMV. | Agravado si recae sobre bases de datos de la administración pública. |

### 2.4 Régimen de Protección de Datos Personales (Ley 1581 de 2012) en la DIAN
Aunque la DIAN ejerce potestades de imperio legal para recaudar datos sin requerir autorización previa del contribuyente (excepción del Art. 10 literal a de la Ley 1581 de 2012 para entidades públicas en ejercicio de funciones legales), **permanece plenamente sujeta a los Principios Rectores de Protección de Datos**:
* **Principio de Finalidad:** Los datos recaudados solo pueden utilizarse para fines de control tributario, aduanero, cambiario y estadísticas públicas oficiales.
* **Principio de Circulación Restringida:** Los datos no pueden suministrarse a terceros salvo mandato legal expreso o convenios interinstitucionales con traslado de reserva.
* **Principio de Seguridad:** Obligación de implementar medidas técnicas y humanas para impedir adulteración, pérdida o acceso indebido.
* **Principio de Confidencialidad:** Obligación perpetua de secreto profesional que subsiste incluso después de finalizada la vinculación laboral con la entidad.

---

## Unidad 3: Criptografía Aplicada y Protección de Datos en Tránsito y en Reposo

### 3.1 Criptografía Simétrica y Protección de Datos en Reposo (*Encryption at Rest*)
El almacenamiento de petabytes de información en el Lakehouse DataR y en bases de datos relacionales exige mecanismos robustos de **Cifrado en Reposo**:
* **Algoritmo Estándar: AES-256 (Advanced Encryption Standard):** Cifrado simétrico por bloques con llaves de 256 bits, catalogado como militarmente seguro e invulnerable a ataques por fuerza bruta con la tecnología de cómputo actual.
* **Gestión Centralizada de Llaves con KMS (*Key Management Service*):** Las llaves criptográficas maestras se almacenan en módulos de seguridad de hardware dedicados (**HSM - Hardware Security Modules**) que cumplen la certificación FIPS 140-2 Nivel 3.
* **Técnica de Cifrado en Envoltura (*Envelope Encryption*):** Los datos se cifran con una Llave de Cifrado de Datos (*Data Encryption Key* - DEK) efímera, y la DEK se cifra a su vez con la Llave Maestra de Clave (*Key Encryption Key* - KEK) gestionada en el KMS. La DEK nunca se almacena en texto plano en el disco.

```diagram
FLUJO CRIPTOGRÁFICO DE ENVELOPE ENCRYPTION EN DataR

  [Datos Tributarios en Texto Plano] + [Data Encryption Key (DEK)]
                                    |
                                    v (Algoritmo AES-256)
                       [DATOS CIFRADOS EN DISCO]
                                    ^
                                    |
                    +---------------+---------------+
                    |                               |
  [DEK en Texto Plano] + [Key Encryption Key (KEK)] | (KEK custodiada en HSM)
                       |                            |
                       v (Algoritmo Asimétrico RSA/ECC)
              [DEK CIFRADA (Encrypted DEK)] --------+ (Almacenada junto a los datos)
```

### 3.2 Criptografía Asimétrica y Protección de Datos en Tránsito (*Encryption in Transit*)
Para todas las comunicaciones internas y externas (consumo de APIs, replicación entre clústeres y portal del contribuyente), la DIAN exige **Cifrado en Tránsito** de extremo a extremo:
* **Protocolo TLS 1.3 (Transport Layer Security):** Obligatorio en toda la infraestructura institucional. Elimina algoritmos obsoletos y vulnerables (como SHA-1, RC4, MD5 y suites de cifrado CBC) y acelera la negociación inicial (*Handshake*) en un solo viaje de ida y vuelta (*1-RTT* o *0-RTT*).
* **Perfect Forward Secrecy (PFS - Confidencialidad Directa Perfecta):** Protocolos basados en intercambio de llaves Diffie-Hellman Efímero (DHE / ECDHE), los cuales garantizan que si la llave privada del servidor llegase a verse comprometida en el futuro, las sesiones de comunicación pasadas interceptadas no podrán ser descifradas retroactivamente.
* **Certificados Digitales X.509 v3 y Mutual TLS (mTLS):** Para integraciones críticas interinstitucionales (ej. cruce con el Banco de la República o la UIAF), no basta con que el cliente valide al servidor de la DIAN; el servidor de la DIAN exige y valida criptográficamente el certificado digital del cliente antes de permitir el consumo del servicio de datos.

### 3.3 Técnicas de Ofuscación: Dynamic Data Masking, Anonimización y Seudonimización
Para cumplir con el principio de minimización de datos en ambientes analíticos y de entrenamiento de modelos de Machine Learning, el Inspector I implementa técnicas de ofuscación de datos:

```blueprint
TÉCNICAS DE PROTECCIÓN Y OFUSCACIÓN DE DATOS FISCALES

1. ENMASCARAMIENTO DINÁMICO (Dynamic Data Masking - DDM)
   * En tiempo de consulta: NIT '900.123.456-7' ===> '900.***.***-*'
   * Tarjeta bancaria: '4532 1234 5678 9012' ===> '**** **** **** 9012'
   * El dato en disco permanece intacto; la capa de servicio altera la visualización.

2. SEUDONIMIZACIÓN ( reversible únicamente con llave secreta)
   * Reemplazar NIT por un Identificador Subrogado Hash con Sal (Salted Hash).
   * SHA-256(NIT + Salt_Secreta_DIAN) ===> '8f4c2b9a1e...'
   * Permite correlacionar compras y ventas en analítica de grafos sin revelar la identidad real.

3. ANONIMIZACIÓN IRREVERSIBLE
   * Destrucción matemática de la correlación con la identidad del titular.
   * Supresión de identificadores, agregación k-anónima y perturbación diferencial (Differential Privacy).
   * Utilizado para publicaciones en el portal de Datos Abiertos de la DIAN.
```

> [!NOTE]
> **Diferencia Técnica Fundamental entre Seudonimización y Anonimización:**  
> La **Seudonimización** es un proceso reversible (si se posee la llave secreta o tabla de mapeo) y, por tanto, la información sigue considerándose jurídicamente **Dato Personal protegido por la Ley 1581 de 2012**. La **Anonimización** es irreversible y rompe de forma definitiva el vínculo entre el dato y el titular; por ende, los datos verdaderamente anonimizados dejan de ser datos personales y pueden compartirse libremente sin violar la reserva tributaria.

---

## Unidad 4: Continuidad del Negocio, Alta Disponibilidad y Recuperación ante Desastres (DRP/BCP)

### 4.1 Métricas Fundamentales de Resiliencia: RTO y RPO
En la gestión de infraestructura de procesamiento de datos de la DIAN, la capacidad de sobreponerse a fallas catastróficas (terremotos, caídas globales de centros de cómputo, ciberataques de ransomware o corrupción masiva de bases de datos) se mide cuantitativamente mediante dos parámetros técnicos:

```diagram
LÍNEA TEMPORAL DE DESASTRE Y DEFINICIÓN DE RPO Y RTO

<--- Operación Normal ---> | <---------- INTERRUPCIÓN CRÍTICA ----------> | <--- Restauración --->
                           |                                                |
[Último Backup Válido]     |                     [EVENTO DE DESASTRE]       | [Sistemas Operativos]
          |                |                               |                |           |
          +----------------+                               +----------------+           |
                   |                                                |                   |
                   v                                                v                   v
           [ RPO: Ventana de ]                             [ RTO: Tiempo de  ]
           [ Pérdida de Datos]                             [ Recuperación    ]
           (Data Loss Window)                              (Downtime Window)
```

1. **RPO (Recovery Point Objective - Punto Objetivo de Recuperación):** Es la cantidad máxima de tiempo de datos transaccionales que la entidad está dispuesta a tolerar perder ante un desastre, medida hacia atrás desde el momento del fallo.
   * *Para el sistema de Facturación Electrónica UBL 2.1, el RPO fijado es cercano a cero ($\text{RPO} < 15\text{ minutos}$), garantizado mediante replicación síncrona de datos en múltiples zonas de disponibilidad.*
2. **RTO (Recovery Time Objective - Tiempo Objetivo de Recuperación):** Es el tiempo máximo admisible que puede transcurrir desde el instante en que ocurre el desastre hasta que los sistemas y servicios de datos son restaurados y se encuentran plenamente disponibles para los usuarios.
   * *Para los servicios transaccionales misionales de la DIAN durante los vencimientos del calendario tributario, el RTO exigido es $\text{RTO} < 1\text{ hora}$.*

### 4.2 Planes de Continuidad (BCP) y Recuperación ante Desastres (DRP)
* **BCP (Business Continuity Plan - Plan de Continuidad del Negocio):** Estrategia integral institucional que define cómo las dependencias de la DIAN continúan prestando sus funciones críticas ante una interrupción severa (procesos alternos manuales, contingencias operacionales y comunicación de crisis).
* **DRP (Disaster Recovery Plan - Plan de Recuperación ante Desastres):** Conjunto estrictamente técnico de procedimientos de TI para restaurar la infraestructura, servidores, redes y bases de datos en un centro de cómputo alterno.

### 4.3 Estrategias de Backup y la Regla Canónica 3-2-1
Para garantizar que un ataque de cifrado malicioso (*Ransomware*) no destruya los registros históricos de DataR, la Subdirección de Procesamiento de Datos implementa la **Regla 3-2-1 de Respaldos**:
* Mantener al menos **Tres (3) copias** de los datos (la versión en producción y dos respaldos).
* Almacenar los respaldos en **Dos (2) medios físicos o tipos de almacenamiento diferentes** (ej. almacenamiento de objetos en la nube y almacenamiento en cintas inmutables / storage dedicado).
* Mantener al menos **Una (1) copia Fuera de Sitio (*Off-Site*)** en una región geográfica completamente separada (ej. en una segunda región cloud a más de 500 kilómetros de distancia) con **bloqueo de escritura inmutable (*WORM - Write Once, Read Many*)**, impidiendo que incluso un usuario administrador con credenciales comprometidas pueda eliminar o cifrar las copias de seguridad.

### 4.4 Contingencia Tributaria Legal (Artículo 579-2 del Estatuto Tributario)
Cuando por razones de fuerza mayor o fallas técnicas imputables a los sistemas informáticos de la DIAN no sea posible presentar las declaraciones o realizar los pagos en la fecha límite fijada en el calendario tributario:
* El Director General de la DIAN está facultado legalmente para expedir una resolución formal declarando el **Estado de Contingencia**.
* Los contribuyentes pueden presentar sus declaraciones y efectuar sus pagos sin liquidar sanciones de extemporaneidad ni intereses moratorios, disponiendo de un plazo de hasta el día siguiente al restablecimiento oficial del servicio.

> [!LAW]
> **Falsa Declaratoria de Contingencia y Responsabilidad Funcional:**  
> Declarar indebidamente una contingencia para encubrir la negligencia de contratistas o demoras administrativas no atribuibles a fallas técnicas verificadas en los servidores genera investigaciones de la Procuraduría General de la Nación y la Contraloría General de la República por detrimento patrimonial e incumplimiento de deberes públicos.

---

## Unidad 5: Ciberseguridad Ofensiva/Defensiva, Gestión de Vulnerabilidades y Auditoría Forense

### 5.1 Ciberseguridad Defensiva (Blue Team) y Ofensiva (Red Team) en la DIAN
Para proteger la infraestructura digital contra actores de ciberdelincuencia avanzada y amenazas persistentes avanzadas (APT), la DIAN opera bajo un esquema de confrontación controlada:
* **Blue Team (Equipo Defensor):** Personal del Centro de Operaciones de Seguridad (**SOC - Security Operations Center**). Monitorea continuamente las 24 horas del día el tráfico de red, analiza las alertas del sistema **SIEM (Security Information and Event Management)**, implementa reglas de detección y contiene incidentes en tiempo real.
* **Red Team (Equipo Ofensor / Ethical Hacking):** Especialistas en seguridad ofensiva que simulan ataques reales dirigidos contra las aplicaciones, APIs y empleados de la DIAN (pruebas de penetración, ingeniería social controlada y explotación de vulnerabilidades de día cero) para descubrir brechas antes de que sean explotadas por ciberdelincuentes.
* **Purple Team:** Instancia de cooperación técnica donde el Red Team y el Blue Team analizan conjuntamente los resultados de los ataques simulados para optimizar las reglas de detección del SIEM y fortalecer el *hardening* de los servidores.

```diagram
FLUJO DE MONITOREO Y RESPUESTA A INCIDENTES EN EL SOC DE LA DIAN

[Fuentes de Telemetría: Kubernetes, DataR, API Gateway, Active Directory]
                                    |
                                    v (Logs estructurados vía Syslog/TLS)
+-------------------------------------------------------------------------------+
|         SIEM INSTITUCIONAL (Correlación de Eventos en Tiempo Real)            |
| * Detección de anomalías de comportamiento (UEBA)                             |
| * Reglas Sigma / Reglas Snort de explotación de vulnerabilidades CVE          |
+-------------------------------------------------------------------------------+
                                    |
                                    v (Disparo de Alerta de Severidad Alta)
+-------------------------------------------------------------------------------+
|         SOC (Security Operations Center - Analistas Nivel 1, 2 y 3)           |
| * Triaje y verificación de falsos positivos                                   |
| * Contención automática vía SOAR (Aislamiento de IP / Revocación de Token)    |
+-------------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------------+
|         EQUIPO DE RESPUESTA A INCIDENTES Y AUDITORÍA FORENSE                  |
| * Preservación de memoria RAM y discos (Cadena de Custodia Digital)           |
| * Análisis de causa raíz y reporte formal a MinTIC y Fiscalía General         |
+-------------------------------------------------------------------------------+
```

### 5.2 Gestión de Vulnerabilidades y Estándar CVSS
La DIAN ejecuta escaneos automatizados semanales sobre la totalidad de su parque computacional, clasificando las vulnerabilidades según el estándar internacional **CVSS (Common Vulnerability Scoring System v3.1)**:
* **Baja (0.1 - 3.9):** Vulnerabilidades informativas o de bajo impacto operacional.
* **Media (4.0 - 6.9):** Requieren remediación programada en las ventanas de mantenimiento mensual.
* **Alta (7.0 - 8.9):** Exigen la aplicación de parches de seguridad en un plazo máximo de cinco (5) días hábiles.
* **Crítica (9.0 - 10.0):** Vulnerabilidades de ejecución remota de código sin autenticación (*RCE*) o evasión de controles de acceso. Exigen la activación inmediata del comité de crisis, aplicación de parches de emergencia (*Zero-Day Patching*) o aislamiento de la red en un plazo inferior a 24 horas.

### 5.3 Auditoría Forense Digital y Cadena de Custodia
Cuando se detecta una intrusión o la fuga deliberada de información tributaria por parte de un funcionario infractor, el Inspector I debe proceder bajo los estrictos protocolos de la **Informática Forense y la Cadena de Custodia Digital**:
1. **Identificación y Aislamiento:** Desconectar el equipo de la red física y Wi-Fi sin apagarlo, para preservar la memoria volátil (RAM) donde residen llaves criptográficas, procesos en ejecución y conexiones activas.
2. **Adquisición Forense:** Generar una imagen bit a bit (*Bit-Stream Image*) del disco duro y un volcado de memoria RAM utilizando bloqueadores de escritura físicos de hardware (*Hardware Write Blockers*).
3. **Verificación de Integridad mediante Hash:** Calcular inmediatamente el hash criptográfico (SHA-256) de la imagen forense y consignarlo en el formato oficial de cadena de custodia. Si el hash de la copia no coincide con el del original, la prueba es judicialmente inadmisible.
4. **Análisis Forense en Entorno Aislado:** Analizar exclusivamente sobre la copia forense y nunca sobre el medio original, extrayendo los logs del sistema, trazas de conexión y eventos de auditoría que demuestren la autoría material del delito informático para su remisión a la Fiscalía General de la Nación.

---

## Flashcards Mnemotécnicas (20 Conceptos Clave)

- **Confidencialidad en la DIAN ::** Pilar de seguridad que garantiza que la información protegida por Reserva Tributaria (Art. 583 E.T.) solo sea accesible por personal formalmente autorizado mediante expediente reglado.
- **Integridad de los Datos Fiscales ::** Garantía de que las declaraciones, facturas y registros contables no han sido alterados, borrados o corrompidos desde su generación hasta su archivo.
- **Disponibilidad de Servicios ::** Garantía de acceso continuo y oportuno a las plataformas de la DIAN para ciudadanos y funcionarios, previniendo caídas durante los vencimientos tributarios.
- **Defensa en Profundidad ::** Estrategia de seguridad que implementa múltiples capas concéntricas de protección (física, red, cómputo, aplicación y datos) para no depender de un solo control.
- **Ciclo PHVA en ISO/IEC 27001 ::** Ciclo de mejora continua del Sistema de Gestión de Seguridad de la Información: Planear (análisis de riesgos), Hacer (controles), Verificar (auditorías) y Actuar (acciones correctivas).
- **Acceso Abusivo a Sistema Informático (Art. 269A C.P.) ::** Delito informático que castiga con prisión de 48 a 96 meses al que acceda sin autorización o excediendo la concedida a los sistemas de la DIAN.
- **Violación de Datos Personales (Art. 269F C.P.) ::** Delito penal que sanciona la comercialización, sustracción o divulgación indebida de datos personales fiscales contenidos en archivos del Estado.
- **Envelope Encryption (Cifrado en Envoltura) ::** Técnica donde los datos se cifran con una llave de datos (DEK) rápida y la DEK se cifra a su vez con una llave maestra (KEK) protegida en un módulo HSM.
- **Perfect Forward Secrecy (PFS) ::** Propiedad criptográfica de protocolos modernos (TLS 1.3) que garantiza que el compromiso futuro de una llave privada del servidor no permita descifrar sesiones pasadas.
- **Dynamic Data Masking (DDM) ::** Técnica que ofusca en tiempo real datos sensibles (como números de tarjeta o cuentas) en la capa de consulta sin alterar el valor real almacenado en el disco.
- **Seudonimización frente a Anonimización ::** La seudonimización es reversible mediante llave secreta y sigue siendo dato personal protegido; la anonimización es irreversible y desvincula totalmente la identidad.
- **Recovery Time Objective (RTO) ::** Tiempo máximo admisible de indisponibilidad técnica que puede tardar la entidad en restaurar sus sistemas tras un incidente de desastre.
- **Recovery Point Objective (RPO) ::** Cantidad máxima de tiempo de datos transaccionales que la organización está dispuesta a tolerar perder ante una caída catastrófica.
- **Regla 3-2-1 de Respaldos ::** Mantener 3 copias de los datos en 2 medios físicos distintos, con 1 copia almacenada fuera de sitio (Off-site) e inmutable (WORM) para resistir ransomware.
- **Contingencia Tributaria (Art. 579-2 E.T.) ::** Declaratoria formal del Director General de la DIAN que autoriza a los contribuyentes a presentar declaraciones sin sanciones cuando el portal colapsa por fallas de la entidad.
- **Blue Team frente a Red Team ::** El Blue Team defiende y monitorea el SOC en tiempo real; el Red Team ejecuta simulaciones de ataque (Ethical Hacking) para descubrir brechas antes que los delincuentes.
- **CVSS (Common Vulnerability Scoring System) ::** Estándar internacional numérico (0.0 a 10.0) que califica la severidad objetiva de las vulnerabilidades informáticas descubiertas en los sistemas.
- **Vulnerabilidad Crítica en CVSS ::** Calificación entre 9.0 y 10.0 que exige remediación o aislamiento de emergencia en menos de 24 horas por permitir ejecución remota de código (RCE).
- **Cadena de Custodia Digital ::** Procedimiento pericial estricto que preserva la evidencia informática mediante copias bit a bit y verificación de hashes criptográficos (SHA-256) inalterados.
- **Principio de Falla Segura (Fail-Secure) ::** Directriz de arquitectura donde un sistema que pierde conectividad o sufre una falla debe cerrarse y denegar el acceso por defecto, impidiendo la entrada no verificada.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Vulneración de Confidencialidad y Reserva Tributaria por Empleado Público
**Eje Temático:** La Tríada de Seguridad de la Información (CID) y Reserva Tributaria  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un funcionario de carrera que se desempeña como Inspector I en la Dirección Seccional de Impuestos de Medellín recibe la visita de un amigo de la infancia, quien es candidato a la alcaldía de un municipio cercano. El candidato le pide el favor informal de ingresar a los sistemas de DataR y revisar la declaración de renta y las facturas electrónicas de su principal contrincante político, para verificar si es cierto que posee propiedades no declaradas y denunciarlo en un debate público. El candidato le asegura que no habrá copia física y que solo le basta con ver la pantalla durante treinta segundos.

**Enunciado:**  
De acuerdo con el Artículo 583 del Estatuto Tributario, la Ley 1273 de 2009 y el régimen disciplinario de la DIAN (Decreto Ley 927 de 2023), ¿cuál es la conducta legal y técnica que debe adoptar el Inspector I?

**Opciones de respuesta:**  
- **A.** Negarse rotundamente a la solicitud, advertir al peticionario que la información está protegida por **Reserva Tributaria** y que consultar o exhibir datos fiscales sin un expediente de fiscalización formalmente asignado constituye delito penal de **Acceso Abusivo a Sistema Informático agravado** y **Violación de Datos Personales**, además de falta gravísima sancionada con destitución inmediata.
- **B.** Permitir que el amigo mire la pantalla discretamente sin imprimir documentos, considerando que el derecho ciudadano a la información democrática y el debate electoral priman sobre el deber de reserva fiscal.
- **C.** Cobrarle una tarifa en efectivo al candidato por prestarle el servicio de consulta informal, argumentando que se trata de una asesoría técnica particular fuera del horario de atención al público.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Artículo 583 del Estatuto Tributario** consagra el carácter reservado de las declaraciones y bases gravables. El funcionario que consulte datos tributarios sin que medie un auto formal de investigación dentro de sus funciones comete una falta disciplinaria gravísima de destitución e inhabilidad general (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023). Adicionalmente, el Artículo 269A del Código Penal castiga el acceso abusivo a sistemas informáticos con el agravante de ser cometido por servidor público abusando de sus funciones, concurriendo con el delito de Violación de Datos Personales (Art. 269F C.P.).
* **Justificación B (Incorrecta):** Es incorrecta. El deber de reserva tributaria es de estricto orden público y no admite excepciones por conveniencia política o electoral; permitir la visualización de la pantalla consuma la violación de la confidencialidad.
* **Justificación C (Incorrecta):** Es incorrecta. Constituye el delito de cohecho propio o concusión, además de fraude procesal y falta disciplinaria de la mayor gravedad en la función pública.

---

### Pregunta PJS 2: Gestión de Vulnerabilidades Críticas y Principio de Falla Segura
**Eje Temático:** Ciberseguridad Ofensiva/Defensiva y Gestión de Vulnerabilidades  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El Centro de Operaciones de Seguridad (SOC) de la DIAN detecta a las 11:00 PM de un viernes una vulnerabilidad crítica de día cero de ejecución remota de código (**RCE con puntaje CVSS de 10.0**) en el software del API Gateway que recibe y valida las declaraciones aduaneras de importación en todos los puertos marítimos del país. Los atacantes ya han comenzado a escanear masivamente los endpoints institucionales. El fabricante del software no ha publicado un parche oficial y la única medida técnica efectiva para evitar el secuestro y robo masivo de la base de datos es deshabilitar de inmediato el endpoint vulnerable mientras se aplica un parche temporal propio (*Virtual Patching* en el WAF), lo cual suspenderá temporalmente la radicación de importaciones durante tres horas.

**Enunciado:**  
Al ser consultado en el comité de emergencia de ciberseguridad, ¿cuál es la decisión arquitectónica que debe respaldar el Inspector I aplicando los principios del SGSI (ISO/IEC 27001)?

**Opciones de respuesta:**  
- **A.** Ordenar el aislamiento y desconexión inmediata del endpoint vulnerable aplicando el principio de **Falla Segura (*Fail-Secure*)** para proteger la integridad y confidencialidad del núcleo de DataR, coordinando la declaratoria de contingencia aduanera mientras se implementa la regla de mitigación en el WAF.
- **B.** Dejar el sistema completamente abierto y vulnerable durante todo el fin de semana para no afectar las estadísticas de tiempo de desaduanamiento de los puertos, asumiendo el riesgo de que los atacantes borren la base de datos nacional.
- **C.** Despedir inmediatamente a todos los analistas del SOC acusándolos de haber creado ellos mismos la vulnerabilidad de software para no trabajar durante el fin de semana.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Frente a una vulnerabilidad crítica de puntaje máximo (CVSS 10.0) con ataques en curso, la doctrina de ciberseguridad (ISO/IEC 27001 y NIST SP 800-61) exige aplicar la contención inmediata bajo el principio de **Falla Segura (*Fail-Closed / Fail-Secure*)**. La preservación de la soberanía de los datos nacionales y la prevención de una catástrofe de secuestro de información (*Ransomware*) prima sobre la continuidad temporal de la radicación. La afectación operativa a los usuarios se ampara legalmente mediante la declaratoria de contingencia aduanera reglada.
* **Justificación B (Incorrecta):** Es incorrecta. Constituye una negligencia técnica temeraria que expone a la DIAN a la pérdida irreparable de información estratégica del Estado colombiano.
* **Justificación C (Incorrecta):** Es incorrecta. Es un despropósito de gestión que castiga al equipo de detección y evidencia una falta total de liderazgo técnico y comprensión del ciclo de respuesta a incidentes.

---

### Pregunta PJS 3: Aplicación del Cifrado en Reposo y Envelope Encryption en DataR
**Eje Temático:** Criptografía Aplicada y Protección de Datos en Reposo  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el diseño de la arquitectura de almacenamiento del lago de datos DataR en la nube, un proveedor tecnológico sugiere almacenar las tablas de la capa Oro en buckets de almacenamiento sin cifrar o utilizando llaves administradas por el proveedor en texto plano, argumentando que "las bases de datos ya se encuentran detrás del firewall corporativo y que cifrar con AES-256 incrementa innecesariamente el tiempo de procesamiento de las consultas de Machine Learning en un 3%".

**Enunciado:**  
Como Inspector I de la Subdirección de Procesamiento de Datos, ¿cuál es el requerimiento de seguridad criptográfica no negociable que debe imponer al diseño?

**Opciones de respuesta:**  
- **A.** Rechazar la propuesta del proveedor y exigir la implementación obligatoria de **Cifrado en Reposo con algoritmo AES-256** utilizando **Envelope Encryption (Cifrado en Envoltura)** con llaves administradas por la DIAN en un módulo HSM (FIPS 140-2 Nivel 3), garantizando que ningún empleado del proveedor cloud pueda leer los datos fiscales en disco físico.
- **B.** Aceptar la sugerencia del proveedor de no cifrar nada, confiando en que los acuerdos de confidencialidad en papel impiden materialmente que ocurran filtraciones de datos en la nube.
- **C.** Sustituir el cifrado por una contraseña simple de 4 dígitos compartida en un archivo de texto en el escritorio de todos los desarrolladores.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El modelo de **Confianza Cero (*Zero Trust*)** y los estándares del MSPI de MinTIC prohíben asumir que la red interna o los entornos de nube son intrínsecamente seguros. El cifrado en reposo mediante **AES-256** con **Envelope Encryption** y llaves custodiadas exclusivamente en módulos HSM controlados por la DIAN es mandatorio. Si los discos físicos en el centro de datos sufren robo o un administrador no autorizado del proveedor cloud accede al almacenamiento bruto, los datos permanecerán matemáticamente ilegibles, blindando la reserva tributaria del Artículo 583 del E.T.
* **Justificación B (Incorrecta):** Es incorrecta. Antepone acuerdos contractuales a las garantías técnicas exigidas por la ley de protección de datos (Ley 1581 de 2012) y el estándar ISO/IEC 27001.
* **Justificación C (Incorrecta):** Es incorrecta. Vulnera los principios elementales de seguridad de la información, facilitando la fuga y destrucción de la información fiscal.

---

### Pregunta PJS 4: Dimensionamiento de RTO y RPO ante Ataques de Ransomware
**Eje Temático:** Continuidad del Negocio, Alta Disponibilidad y DRP/BCP  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un ataque sofisticado de ransomware logra vulnerar un controlador de dominio en la red corporativa de la DIAN y comienza a cifrar los servidores de base de datos donde se almacenan las facturas electrónicas emitidas en las últimas 48 horas. Afortunadamente, el sistema de alertas tempranas del SOC aísla la red. El Comité de Continuidad de Negocio se reúne para activar el Plan de Recuperación ante Desastres (DRP). El Director exige saber cuántos datos se perdieron y cuánto tiempo tardará el restablecimiento del servicio.

**Enunciado:**  
¿Qué parámetros técnicos definidos en el DRP debe utilizar el Inspector I para explicar la situación y coordinar la restauración?

**Opciones de respuesta:**  
- **A.** El **RPO (Punto Objetivo de Recuperación)** para determinar la pérdida máxima de datos transaccionales según el último respaldo inmutable no infectado (máximo 15 minutos en el diseño de DataR), y el **RTO (Tiempo Objetivo de Recuperación)** para fijar el tiempo necesario para levantar la infraestructura alterna en la región secundaria de la nube (fijado en menos de 1 hora).
- **B.** Pagar inmediatamente el rescate exigido en criptomonedas a los ciberdelincuentes utilizando los fondos del recaudo tributario del día, sin verificar la existencia de copias de seguridad.
- **C.** Declarar la liquidación definitiva y disolución de la DIAN manifestando que ningún sistema informático del mundo puede recuperarse de un ataque de ransomware.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la gestión de continuidad del negocio (ISO 22301 y DRP en ISO/IEC 27001), el **RPO** cuantifica la brecha de pérdida de datos tolerable respecto al último snapshot inmutable no contaminado, y el **RTO** mide la ventana de tiempo admisible para restaurar los servicios operativos en un centro de cómputo alterno. El diseño resiliente de DataR garantiza que la restauración se ejecute desde copias inmutables fuera de sitio (Regla 3-2-1), restaurando la operación sin ceder a extorsiones delictivas.
* **Justificación B (Incorrecta):** Es incorrecta. Constituye una conducta ilícita; los recursos públicos no pueden destinarse al pago de extorsiones y no existe ninguna garantía técnica de que los atacantes entreguen llaves funcionales.
* **Justificación C (Incorrecta):** Es incorrecta. Desconoce los protocolos de resiliencia del Estado y abdica de las funciones constitucionales indelegables de la administración tributaria.

---

### Pregunta PJS 5: Preservación de la Cadena de Custodia Digital en Incidentes Internos
**Eje Temático:** Ciberseguridad Ofensiva/Defensiva y Auditoría Forense  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Oficina de Control Interno Disciplinario de la DIAN sorprende en flagrancia a un contratista de desarrollo informático descargando en una memoria USB personal más de 50.000 declaraciones del impuesto sobre la renta de personas expuestas políticamente (PEP). Un inspector novato propone apagar inmediatamente el computador de escritorio del contratista desconectando el cable de la pared y formatear la memoria USB para "destruir la fuga y evitar el escándalo público".

**Enunciado:**  
Como Inspector I experto en informática forense, ¿cuál es el procedimiento probatorio estricto que debe ordenar para preservar la validez de la evidencia ante la Fiscalía General de la Nación?

**Opciones de respuesta:**  
- **A.** Impedir el apagado forzoso del equipo para preservar la memoria volátil (RAM), desconectar el cable de red para aislarlo, realizar la captura forense de la RAM y un clonado bit a bit del disco y de la USB mediante bloqueadores de escritura físicos, calculando de inmediato el **hash SHA-256** para sellar la **Cadena de Custodia Digital**.
- **B.** Convalidar la orden de apagar el equipo y formatear la USB, confiando en que el testimonio verbal del inspector novato será suficiente para condenar penalmente al infractor en los tribunales.
- **C.** Dejar que el contratista se lleve la memoria USB a su casa para evitar confrontaciones personales dentro de las oficinas de la entidad.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En informática forense (normas ISO/IEC 27037 y manuales de policía judicial de la Fiscalía), apagar el computador destruye la memoria RAM, donde residen procesos activos, conexiones de red y sesiones del usuario. Formatear la USB destruye el cuerpo del delito. El procedimiento reglado exige **aislar el equipo de la red sin apagarlo**, extraer la memoria volátil, generar imágenes forenses bit a bit con bloqueador de hardware y certificar la autenticidad e inalterabilidad de la prueba mediante el cálculo inmediato del **hash criptográfico SHA-256** en el acta de cadena de custodia digital (Art. 254 y ss. del Código de Procedimiento Penal).
* **Justificación B (Incorrecta):** Es incorrecta. Destruye la evidencia digital material, dejando el proceso disciplinario y penal sin sustento probatorio idóneo y propiciando la impunidad del delincuente.
* **Justificación C (Incorrecta):** Es incorrecta. Configura complicidad por favorecimiento u omisión de denuncia de un delito informático flagrante.

---

### Pregunta PJS 6: Aplicación Legal de la Declaratoria de Contingencia Tributaria
**Eje Temático:** Continuidad del Negocio, Alta Disponibilidad y DRP/BCP  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El día del vencimiento del plazo improrrogable para la presentación de la declaración de retención en la fuente (Formulario 350) para los contribuyentes con NIT terminado en 1 y 2, se produce un corte general de fibra óptica submarina que interrumpe los enlaces de comunicación externos de los centros de cómputo de la DIAN a las 2:00 PM. A pesar de los esfuerzos del equipo de infraestructura, el servicio de radicación en línea permanece inaccesible hasta las 11:59 PM. Cientos de miles de agentes de retención no pudieron radicar sus formularios ni pagar el impuesto dentro del término legal.

**Enunciado:**  
¿Qué medida administrativa y jurídica reglada debe adoptar la Dirección General de la DIAN con base en el concepto técnico de la Subdirección de Procesamiento de Datos?

**Opciones de respuesta:**  
- **A.** Expedir la resolución formal que declara el **Estado de Contingencia Tributaria** conforme al **Artículo 579-2 del Estatuto Tributario**, autorizando a los contribuyentes afectados a presentar sus declaraciones y realizar el pago sin sanciones de extemporaneidad ni intereses moratorios hasta el día hábil siguiente al restablecimiento oficial del servicio.
- **B.** Negar la existencia de la falla y emitir automáticamente pliegos de cargos por sanción de extemporaneidad a los cientos de miles de contribuyentes que no alcanzaron a declarar antes de la medianoche.
- **C.** Exigir a cada contribuyente que tramite una póliza de seguro judicial individual para demostrar que intentó conectarse al portal de la DIAN durante la tarde.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Artículo 579-2 del Estatuto Tributario** regula de forma expresa la protección del ciudadano ante contingencias tecnológicas de la DIAN. Cuando por razones de fuerza mayor o fallas no imputables al contribuyente no sea posible la presentación de declaraciones a través de los servicios informáticos electrónicos, la administración debe declarar oficialmente la contingencia. El contribuyente queda habilitado para cumplir su deber formal hasta el día hábil siguiente a aquel en que los servicios informáticos se hayan restablecido, sin que se generen sanciones ni intereses de mora.
* **Justificación B (Incorrecta):** Es incorrecta. Viola el principio constitucional de buena fe (Art. 83 C.P.) y el debido proceso, sancionando al ciudadano por una falla técnica atribuible a la infraestructura tecnológica del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. Impone requisitos gravosos, inexistentes en la ley y desproporcionados, violando el principio de legalidad y eficiencia tributaria.

---

### Pregunta PJS 7: Protección de Identidades mediante Salted Hash en Modelos de Analítica
**Eje Temático:** Criptografía Aplicada y Protección de Datos en Reposo  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Análisis de Riesgo va a suministrar una base de datos de 20 millones de transacciones de facturación electrónica a una universidad pública para una investigación académica sobre redes de evasión. Para proteger la identidad de los contribuyentes, un ingeniero propone aplicar simplemente la función hash `SHA-256(NIT)` sobre el número de identificación tributaria sin añadir ningún componente adicional. El Inspector I advierte que, debido a que el espacio de búsqueda de los NITs en Colombia es muy pequeño (números de 9 a 10 dígitos), cualquier atacante puede generar una **Tabla Arcoíris (*Rainbow Table*)** en pocos minutos y revertir la totalidad de las identidades de los contribuyentes.

**Enunciado:**  
¿Qué técnica criptográfica debe implementar el Inspector I para blindar matemáticamente la seudonimización antes de entregar la información?

**Opciones de respuesta:**  
- **A.** Implementar la técnica de **Hash con Sal (*Salted Hash*)**, concatenando a cada NIT una cadena aleatoria criptográfica secreta y única custodiada en el HSM de la DIAN (`SHA-256(NIT + Salt_Secreta)`), neutralizando los ataques de diccionario y de tablas precalculadas.
- **B.** Cambiar la función a MD5 sin sal argumentando que los algoritmos antiguos son más difíciles de descifrar por las inteligencias artificiales modernas.
- **C.** Entregar la base de datos con los nombres y NITs completos en texto plano para que los investigadores de la universidad no pierdan tiempo descifrando códigos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Un hash simple sobre un dominio numérico finito y predecible como el NIT (apenas decenas de millones de combinaciones) es trivialmente vulnerable a ataques de precomputación mediante **Rainbow Tables**. La técnica de **Salted Hash (Hash con Sal Criptográfica)** añade una secuencia aleatoria secreta de alta entropía a la entrada antes de aplicar el algoritmo de resumen (SHA-256). Esto hace computacionalmente inviable generar tablas precalculadas, garantizando una seudonimización robusta que preserva las propiedades analíticas de red sin exponer la identidad de los contribuyentes.
* **Justificación B (Incorrecta):** Es incorrecta. El algoritmo MD5 está criptográficamente roto desde hace décadas, sufre colisiones demostradas y su uso está terminantemente prohibido en estándares de seguridad como NIST e ISO/IEC 27001.
* **Justificación C (Incorrecta):** Es incorrecta. Entrega información tributaria confidencial en texto plano sin protección, violando directamente el Artículo 583 del Estatuto Tributario y la Ley 1581 de 2012.

---

### Pregunta PJS 8: Implementación de la Microsegmentación y Redes Zero Trust
**Eje Temático:** La Tríada CID y el Modelo de Defensa en Profundidad  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En una auditoría de seguridad perimetral a la red de la DIAN, se descubre que cualquier computador de escritorio conectado a la red cableada de las Direcciones Seccionales (ej. Seccional Leticia o Girardot) tiene acceso directo a nivel de protocolo TCP a los puertos de administración de los clústeres de almacenamiento de DataR en el centro de datos principal de Bogotá. Si un computador local de una ventanilla se infecta con un troyano, el atacante podría desplazarse lateralmente y comprometer el núcleo de la base de datos nacional.

**Enunciado:**  
¿Cuál es la directriz arquitectónica que el Inspector I debe ordenar para contener el movimiento lateral en la red institucional?

**Opciones de respuesta:**  
- **A.** Implementar una arquitectura **Zero Trust con Microsegmentación de Red**, aislando los clústeres de DataR en zonas de red de máxima seguridad (VPC privadas restringidas) con políticas de acceso que exijan autenticación mTLS y túneles seguros cifrados, bloqueando todo tráfico no explícitamente autorizado desde las seccionales.
- **B.** Mantener la red plana y abierta, fundamentándose en que todos los computadores de la DIAN pertenecen al Estado y por tanto son intrínsecamente confiables.
- **C.** Desconectar permanentemente el servicio de internet en todas las seccionales de provincia para evitar que los funcionarios locales trabajen con computadores.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El principio rector de la arquitectura moderna de ciberseguridad es **Zero Trust (*Nunca Confiar, Siempre Verificar*)**. Las redes planas corporativas son altamente vulnerables a movimientos laterales tras la infección de un solo endpoint periférico. La **Microsegmentación** crea barreras de seguridad y perímetros lógicos alrededor de los activos críticos (como DataR), exigiendo autenticación estricta (mTLS, certificados de dispositivo) y control de acceso granular por políticas, impidiendo que una brecha en una seccional periférica comprometa el repositorio central.
* **Justificación B (Incorrecta):** Es incorrecta. Viola los principios de defensa en profundidad y asume una confianza ingenua que facilita el secuestro de infraestructura por malware o intrusiones avanzadas.
* **Justificación C (Incorrecta):** Es incorrecta. Destruye la desconcentración territorial y la prestación de los servicios aduaneros y tributarios en las regiones del país.

---

### Pregunta PJS 9: Seguridad en el Desarrollo de Software (DevSecOps) y Pruebas SAST/DAST
**Eje Temático:** Marco Normativo de Seguridad, Privacidad y Estándar ISO/IEC 27001  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un equipo de desarrollo de la Dirección de Gestión de Innovación y Tecnología finaliza la construcción de una nueva API REST que permite a los jueces de la república consultar medidas cautelares sobre cuentas bancarias embargadas por la DIAN. Para cumplir con el cronograma de entrega del Plan Estratégico, el líder técnico solicita desplegar la API directamente en producción sin someter el código a pruebas de análisis estático de seguridad (SAST) ni dinámico (DAST), asegurando que "el código fue escrito por ingenieros muy experimentados y no tiene errores".

**Enunciado:**  
A la luz de los controles de seguridad en el ciclo de vida del software (ISO/IEC 27001 Anexo A y DevSecOps), ¿qué acción debe instruir el Inspector I?

**Opciones de respuesta:**  
- **A.** Detener el despliegue a producción hasta que el software apruebe de forma satisfactoria los escaneos automatizados de seguridad de código (**SAST**) y pruebas de penetración dinámicas (**DAST**) en el pipeline de CI/CD, garantizando la ausencia de vulnerabilidades de inyección SQL o fallos en el control de acceso a nivel de objeto (BOLA/IDOR).
- **B.** Autorizar el despliegue inmediato a producción confiando en la experiencia subjetiva de los ingenieros, postergando las pruebas de seguridad para el año siguiente.
- **C.** Ordenar que la consulta de los jueces se realice a través de mensajes de texto SMS no cifrados enviados a los teléfonos móviles personales de los directivos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El estándar **ISO/IEC 27001:2022** en sus controles de desarrollo seguro de aplicaciones (Controles A.8.25 a A.8.29) y el marco **DevSecOps** prohíben el paso a producción de código sin validación de seguridad automatizada. Las vulnerabilidades de inyección SQL o autorización a nivel de objeto roto (BOLA/IDOR) son comunes incluso en desarrolladores experimentados. Las pruebas **SAST** (código estático) y **DAST** (aplicación en ejecución) aseguran que no existan puertas traseras ni fallas lógicas que expongan información de embargos judiciales a terceros.
* **Justificación B (Incorrecta):** Es incorrecta. Ignora los controles de calidad del software y expone a la DIAN a brechas masivas de datos y manipulación indebida de medidas cautelares financieras.
* **Justificación C (Incorrecta):** Es incorrecta. Propone un canal de comunicación inseguro, no auditable e incompatible con la reserva legal y la validez de los actos judiciales.

---

### Pregunta PJS 10: Auditoría Forense y Detección de Fuga de Información mediante Logs Inmutables
**Eje Temático:** Ciberseguridad Ofensiva/Defensiva y Auditoría Forense  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Oficina de Seguridad de la Información (OSI) de la DIAN recibe una alerta del SIEM reportando que un usuario con perfil de administrador en la Subdirección de Procesamiento de Datos ejecutó a las 2:30 AM un comando de volcado masivo (`pg_dump`) exportando la tabla completa de Declaraciones de Importación de Armamento y Material Bélico de los últimos tres años hacia una dirección IP externa en Europa Oriental. Al ser interrogado, el funcionario alega que su cuenta fue suplantada y que él no se encontraba despierto a esa hora.

**Enunciado:**  
¿Qué evidencias técnicas del sistema de auditoría forense inmutable debe consolidar el Inspector I para sustentar el informe pericial ante la Dirección General y los organismos de investigación judicial?

**Opciones de respuesta:**  
- **A.** Consolidar los registros de auditoría forense inmutables que correlacionen el inicio de sesión mediante autenticación multifactor (MFA con token de hardware físico verificado en poder del funcionario), la dirección IP interna y la huella digital del dispositivo (MAC / certificado X.509 de equipo), junto con el registro criptográfico inalterable del comando SQL ejecutado y el volumen de bytes transferidos.
- **B.** Desestimar la alerta del SIEM aceptando la coartada verbal del funcionario de que estaba dormido, sin realizar ninguna comprobación técnica en los logs de los servidores.
- **C.** Borrar todos los registros de auditoría del servidor para evitar que la prensa internacional se entere de la filtración de importaciones de material bélico.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La **Auditoría Forense Digital** exige aportar pruebas científicas incontrovertibles sustentadas en la correlación de eventos del SIEM. La presencia de **MFA de hardware físico**, la autenticación del certificado del equipo y los logs inmutables sellados criptográficamente desvirtúan la simple coartada verbal de suplantación, individualizando la autoría del acceso abusivo a sistemas protegidos (Art. 269A C.P.) y la violación de datos reservados (Art. 269F C.P.). La evidencia se estructura con plena cadena de custodia para su aporte a la investigación penal.
* **Justificación B (Incorrecta):** Es incorrecta. Configura una omisión flagrante del deber funcional de control y custodia de la seguridad nacional, facilitando la impunidad de la fuga de datos estratégicos.
* **Justificación C (Incorrecta):** Es incorrecta. El borrado deliberado de registros de auditoría constituye el delito de destrucción y alteración de evidencia digital (Art. 269D C.P.) y favorecimiento delictivo.

---

## Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Seguridad, Integridad y Disponibilidad de los Datos:

- [ ] Comprendo la **Tríada CID** (Confidencialidad, Integridad y Disponibilidad) y su aplicación específica en la custodia de la Reserva Tributaria (**Art. 583 E.T.**).
- [ ] Conozco el modelo de **Defensa en Profundidad** y la microsegmentación bajo principios **Zero Trust**.
- [ ] Domino las fases del ciclo **PHVA** en el Sistema de Gestión de Seguridad de la Información (**ISO/IEC 27001:2022**).
- [ ] Identifico los delitos informáticos de la **Ley 1273 de 2009** y sus agravantes para servidores públicos de la DIAN.
- [ ] Explico el principio de **Cifrado en Reposo con AES-256** y la técnica de **Envelope Encryption** con llaves custodiadas en HSM.
- [ ] Conozco las ventajas del protocolo **TLS 1.3**, **Perfect Forward Secrecy (PFS)** y autenticación **mTLS** en el intercambio de datos fiscales.
- [ ] Diferencio con precisión técnica y legal la **Seudonimización** (*Salted Hash*) de la **Anonimización Irreversible**.
- [ ] Calculo y dimensiono las métricas de resiliencia: **RTO** (Tiempo Objetivo de Recuperación) y **RPO** (Punto Objetivo de Recuperación).
- [ ] Aplico la **Regla 3-2-1 de Respaldos** con almacenamiento fuera de sitio e inmutabilidad contra ataques de ransomware.
- [ ] Domino la aplicación legal del **Artículo 579-2 del Estatuto Tributario** sobre declaratoria oficial de contingencia tributaria.
- [ ] Diferencio los roles de ciberseguridad: **Blue Team** (defensa y SOC/SIEM), **Red Team** (*Ethical Hacking*) y **Purple Team**.
- [ ] Clasifico la severidad de vulnerabilidades según el estándar **CVSS v3.1**, priorizando la atención de fallas críticas ($\ge 9.0$).
- [ ] Aplico los protocolos de **Cadena de Custodia Digital** y clonado forense bit a bit con verificación de hashes SHA-256 inalterados.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

### Lecturas Complementarias Recomendadas para Profundización
1. **NIST (National Institute of Standards and Technology) (2020).** *NIST SP 800-53 Rev. 5: Security and Privacy Controls for Information Systems and Organizations*. U.S. Department of Commerce.
   * **Por qué leerlo para el examen:** Es el catálogo de controles de ciberseguridad más riguroso del mundo. Detalla controles de acceso (AC), auditoría y responsabilidad (AU) y protección de sistemas y comunicaciones (SC) aplicables a entidades tributarias.
2. **Vacca, J. R. (2017).** *Computer and Information Security Handbook (3rd Edition)*. Morgan Kaufmann.
   * **Por qué leerlo para el examen:** Desarrolla con claridad pedagógica e ingenieril los principios de criptografía de envoltura, gestión de incidentes en el SOC y diseño de arquitecturas de alta disponibilidad.
3. **Casey, E. (2011).** *Digital Evidence and Computer Crime: Forensic Science, Computers, and the Internet (3rd Edition)*. Academic Press.
   * **Por qué leerlo para el examen:** Es la obra cumbre para entender los protocolos periciales de cadena de custodia digital, toma de imágenes forenses y valoración probatoria ante jueces y tribunales.

### Bibliografía Técnica, Normativa y Reglamentaria Oficial (Corte: 19 de junio de 2026)

#### A. Marco Legal Colombiano de Seguridad, Privacidad y Delitos Informáticos
* **Constitución Política de Colombia de 1991.** Artículo 15 (Derecho a la intimidad, buen nombre y Habeas Data) y Artículo 74 (Acceso a documentos públicos y reserva legal).
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes al 19 de junio de 2026).** Artículos 583 (Reserva tributaria), 584 (Excepciones), 585 (Convenios de intercambio de información), 579-2 (Declaratoria de contingencia tecnológica) y 616-1 (Facturación electrónica con validación previa).
* **Ley 1273 de 2009.** Por medio de la cual se modifica el Código Penal y se crea el bien jurídico tutelado de la protección de la información y de los datos (Delitos informáticos: Arts. 269A a 269J).
* **Ley 1581 de 2012.** Régimen General de Protección de Datos Personales (Habeas Data).
* **Ley 527 de 1999.** Reglamentación del acceso y uso de los mensajes de datos, comercio electrónico y firmas digitales (Equivalencia funcional y no repudio).
* **Decreto 1742 de 2020.** Estructura orgánica de la UAE DIAN — Funciones de la Dirección de Gestión de Innovación y Tecnología y de la Subdirección de Procesamiento de Datos.
* **Decretos Ley 071 de 2020 y 927 de 2023.** Régimen especial de carrera administrativa y faltas disciplinarias por violación de la reserva y seguridad de los datos en la DIAN.

#### B. Estándares Internacionales de Seguridad y Continuidad
* **ISO/IEC 27001:2022.** *Information security, cybersecurity and privacy protection — Information security management systems — Requirements*.
* **ISO/IEC 27002:2022.** *Information security, cybersecurity and privacy protection — Information security controls*.
* **ISO 22301:2019.** *Security and resilience — Business continuity management systems — Requirements*.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** *Modelo de Seguridad y Privacidad de la Información (MSPI).* Guías oficiales para entidades del Estado Colombiano.
