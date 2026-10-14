# Guía Maestra Oficial: 11. Seguridad, Integridad y Disponibilidad de los Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Seguridad de la Información & Ciberseguridad (60%)  
**Eje Temático Oficial:** Seguridad, Integridad y Disponibilidad de los Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **11. Seguridad, Integridad y Disponibilidad de los Datos**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía examina la Tríada CIA, criptografía moderna, control de acceso (RBAC vs. ABAC), técnicas de preservación de privacidad, observabilidad, continuidad del negocio (RPO/RTO) y el mandato ineludible de la Reserva Tributaria (Art. 583 E.T.).



### Módulo 1: La Tríada CIA y Principios de Ciberseguridad


La seguridad de la información reposa sobre tres pilares interdependientes (Estándar ISO/IEC 27001):



    * **Confidencialidad (Confidentiality):** Garantizar que la información sea accesible únicamente por personas autorizadas, impidiendo fugas o accesos ilegítimos.

    * **Integridad (Integrity):** Garantizar la exactitud, completitud y protección contra adulteraciones no autorizadas durante el almacenamiento, procesamiento o tránsito.

    * **Disponibilidad (Availability):** Asegurar que los datos y los servicios computacionales estén accesibles para los usuarios legítimos siempre que se requieran.





### Módulo 2: Criptografía Aplicada y Gestión de Claves



    
        

| Mecanismo Criptográfico | Algoritmos Estándar | Aplicación en Arquitecturas de Datos |
| :--- | :--- | :--- |

        

    
    
        

| **Cifrado Simétrico (At-Rest)** | AES-256 (GCM / CBC) | Cifrado masivo de discos, volúmenes de almacenamiento en la nube y archivos Parquet. Una única clave compartida cifra y descifra con altísima eficiencia de CPU. |
| :--- | :--- | :--- |

        

        

| **Cifrado Asimétrico** | RSA (2048/4096 bits), ECC (Curvas Elípticas) | Intercambio seguro de claves y firmas digitales de documentos tributarios (factura electrónica y certificados de no repudio). |
| :--- | :--- | :--- |

        

        

| **Funciones Hash Criptográficas** | SHA-256, SHA-3, HMAC (con clave) | Verificación de integridad de archivos y generación de claves subrogadas (Data Vault). Propiedad de un solo sentido (irreversible) y resistencia a colisiones. |
| :--- | :--- | :--- |

        

        

| **Cifrado de Sobre (Envelope Encryption)** | KMS (Key Management Service) / HSM | Los datos se cifran con una clave de datos local (Data Encryption Key - DEK). La DEK a su vez se cifra con una clave maestra protegida por hardware (Key Encryption Key - KEK). Permite rotación de claves sin descifrar petabytes de datos. |
| :--- | :--- | :--- |

        

    




### Módulo 3: Modelos de Control de Acceso: RBAC vs. ABAC


    
> 
        
#### 1. RBAC (Role-Based Access Control)

        
Los permisos se asignan a **roles** organizacionales fijos, y los usuarios se asignan a dichos roles:

        

            * *Ejemplo:* Rol `Auditor_Bogota` tiene permiso de lectura sobre la tabla `Declaraciones`.

            * *Limitación:* Provoca "Role Explosion" (explosión de roles) cuando se necesitan condiciones contextuales complejas (ej. auditar solo en horario laboral o solo contribuyentes asignados a su expediente).

        

    
    
> 
        
#### 2. ABAC (Attribute-Based Access Control)

        
Evalúa políticas dinámicas basadas en **atributos** combinados:

        

            * **Atributos del Sujeto:** Rol, dependencia, nivel de seguridad, Seccional.

            * **Atributos del Recurso:** Clasificación del dato (Público, Reservado, Secreto), NIT, tipo de impuesto.

            * **Atributos del Entorno:** Hora del día, dirección IP, dispositivo de conexión.

            * *Ejemplo de Regla:* "Permitir lectura si `usuario.seccional == contribuyente.seccional` Y `hora >= 08:00` Y `conexion.red == intranet_segura`".

        

    



### Módulo 4: Técnicas de Protección y Privacidad de Datos



    * **Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM):** Ofusca los datos al momento de la consulta al vuelo sin alterar el valor real almacenado en el disco. Si un analista junior consulta una tarjeta de crédito o NIT reservado, el motor retorna `****-****-****-1234`.

    * **Tokenización:** Reemplaza un dato sensible por un sustituto aleatorio no sensible (token) que no tiene relación matemática con el original. El mapeo real se custodia en una bóveda segura (Token Vault).

    * **Pseudonimización vs. Anonimización:**
        <br>• *Pseudonimización:* Separa la identidad del dato usando un identificador artificial; es reversible si se cuenta con la clave de enlace.
        <br>• *Anonimización:* Destruye irreversiblemente la capacidad de reidentificar al titular (ej. K-Anonimato, Privacidad Diferencial).





### Módulo 5: Continuidad del Negocio y Resiliencia (BCP y DRP)



    
        

| Métrica de Recuperación | Definición Técnica | Objetivo en la DIAN |
| :--- | :--- | :--- |

        

    
    
        

| **RPO (Recovery Point Objective)** | Cantidad máxima de pérdida de datos tolerada medida en tiempo transcurrido desde el último punto de respaldo antes del desastre. | Para transacciones de facturación y recaudo, el RPO debe ser cercano a cero ($RPO \approx 0$) mediante replicación sincrónica. |
| :--- | :--- | :--- |

        

        

| **RTO (Recovery Time Objective)** | Tiempo máximo tolerado para restablecer la operatividad del servicio informático tras un fallo o desastre. | Restablecimiento de servicios críticos de recepción de declaraciones en menos de 2 horas. |
| :--- | :--- | :--- |

        

    




### Módulo 6: La Reserva Tributaria (Artículo 583 del Estatuto Tributario)


> [!WARNING]
> 
    
#### Norma Suprema de Confidencialidad en la DIAN

    
El **Artículo 583 del Estatuto Tributario** establece que las declaraciones tributarias son de carácter estrictamente **reservado**. La reserva ampara la intimidad económica de los contribuyentes garantizada en el Artículo 15 de la Constitución Política:

    

        * **Sanción por Violación:** El servidor público que divulgue o comercialice información reservada incurre en destitución inmediata e inhabilidad para ejercer cargos públicos, además de sanciones penales.

        * **Excepciones Taxativas de Ley:** La reserva solo cede ante requerimientos formales de la justicia ordinaria penal, procesos de alimentos ante jueces de familia, comisiones de intercambio en tratados internacionales tributarios o convenios interadministrativos legalmente facultados. ¡Ningún funcionario puede ceder datos por mera cortesía o solicitud informal!

    




### Checklist Rápido de Estudio Previo al Examen



    * [ ] Explicar la Tríada CIA y el funcionamiento de Envelope Encryption (DEK vs KEK).

    * [ ] Diferenciar RBAC de ABAC y saber por qué ABAC resuelve la explosión de roles.

    * [ ] Distinguir Enmascaramiento Dinámico de Tokenización y Pseudonimización.

    * [ ] Definir las métricas de resiliencia RPO (pérdida de datos) y RTO (tiempo de recuperación).

    * [ ] Memorizar el alcance y excepciones taxativas de la Reserva Tributaria (Art. 583 E.T.).




### Referencias Oficiales y Documentación de Arquitectura
- [ISO/IEC 27001 Information Security Management](https://www.iso.org/standard/27001)
- [Estatuto Tributario - Artículo 583 (Reserva Tributaria)](https://estatuto.co/583)
- [NIST Special Publication 800-162 (ABAC Guide)](https://csrc.nist.gov/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Criptografía aplicada, gestión de accesos y la tríada de seguridad en datos estatales

## Qué vas a lograr en esta lección

Comprender la implementación técnica y normativa de la **Seguridad de la Información** en la DIAN: cifrado en reposo y en tránsito (**Envelope Encryption, KMS, mTLS**), arquitecturas de control de acceso granular (**RBAC, ABAC, PAM**), mitigación de vulnerabilidades y preservación de la **Tríada CIA** (Confidencialidad, Integridad, Disponibilidad) bajo estándares **ISO/IEC 27001**.

## 1. La Tríada CIA y principios rectores en administración tributaria

| Dimensión | Definición técnica | Mecanismos de salvaguarda en la DIAN |
|---|---|---|
| **Confidencialidad** | Garantizar que la información sea accesible únicamente por personas, entidades o procesos autorizados. | Cifrado (AES-256), Control de Acceso por Atributos (ABAC), enmascaramiento dinámico, **Reserva Tributaria (Art. 583 E.T.)**. |
| **Integridad** | Mantener la exactitud, completitud y no alteración no autorizada del dato desde su creación hasta su archivo. | Funciones Hash (SHA-256), firmas digitales X.509, sellos de tiempo (TSA), almacenamiento inmutable **WORM** (Write Once, Read Many). |
| **Disponibilidad** | Asegurar que los usuarios y sistemas autorizados tengan acceso oportuno y confiable a los datos cuando lo requieran. | Clústeres de alta disponibilidad (Active-Active), balanceo de carga, replicación multi-zona, planes de recuperación ante desastres (DRP). |

> [!TIP] Principios de seguridad aplicados
> - **Mínimo Privilegio (PoLP):** Cada usuario o servicio informático debe operar con los permisos estrictamente mínimos requeridos para cumplir su función.
> - **Defensa en Profundidad:** Múltiples capas concéntricas de seguridad (perímetro, red, host, aplicación, dato) para que la vulneración de una capa no comprometa el activo.
> - **Segregación de Funciones (SoD):** Ningún rol individual debe tener el control integral de un ciclo de vida crítico (ej. el desarrollador de pipelines no debe tener permisos de administración ni acceso directo a la base de producción).

## 2. Criptografía aplicada en arquitecturas de datos

### 1. Cifrado en Reposo y Envelope Encryption (Cifrado de Sobre)
Almacenar terabytes de datos en la nube o en discos locales sin cifrar expone a la entidad a fugas físicas o lógicas. El estándar de la industria es el **Cifrado de Sobre**:
1. **Data Encryption Key (DEK):** Clave simétrica de un solo uso generada localmente para cifrar el archivo o bloque de datos con **AES-256-GCM**.
2. **Key Encryption Key (KEK / Master Key):** Clave maestra custodiada dentro de un módulo de seguridad de hardware (**HSM**) en un servicio de gestión de claves (**KMS**).
3. **Mecánica:** La KEK cifra la DEK. El dato cifrado se almacena junto con la **DEK cifrada**. Para leer el dato, se solicita al KMS descifrar la DEK, la cual se carga temporalmente en memoria volátil para descifrar el bloque y luego se purga.
- *Ventaja clave:* Permite rotar la clave maestra KEK sin necesidad de reescribir ni recifrar petabytes de datos almacenados.

### 2. Cifrado en Tránsito y mTLS (Mutual TLS)
- **TLS Estándar:** El cliente verifica la identidad del servidor mediante un certificado digital y cifra el canal.
- **mTLS (TLS Mutuo):** Tanto el cliente como el servidor se autentican mutuamente mediante certificados digitales emitidos por una Autoridad de Certificación (**CA**) de confianza antes de establecer la conexión.
- *Uso obligatorio en el Estado:* Comunicaciones interinstitucionales (ej. convenios de cruce de información bancaria o aduanera y nodos de interoperabilidad X-Road).


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿En el diseño de la arquitectura del Repositorio Único de Datos (DataR), un proveedor sugiere cifrar los respaldos históricos utilizando una única clave simétrica compartida y almacenada en un archivo de configuración del servidor. ¿Qué riesgo crítico y qué estándar se vulneran??**
>
> *Respuesta razonada:* Vulnera las buenas prácticas de **gestión de claves de ISO 27001** y expone la clave a robo por intrusión al servidor. Se debe implementar **Envelope Encryption** con claves custodiadas en un servicio centralizado de gestión de claves (**KMS / HSM**), con rotación automatizada, control de acceso estricto y auditoría de llamadas de descifrado.


## 3. Modelos de control de acceso: RBAC vs. ABAC

| Criterio | RBAC (Role-Based) | ABAC (Attribute-Based) |
|---|---|---|
| **Fundamento** | Permisos asociados al **rol** o cargo asignado al usuario. | Permisos evaluados dinámicamente según **atributos** del sujeto, del recurso, de la acción y del entorno. |
| **Escalabilidad** | Tiende a la "explosión de roles" cuando las reglas de negocio son complejas. | Altamente escalable; una sola política cubre múltiples combinaciones. |
| **Contexto** | Estático (no evalúa horario, IP, geolocalización ni proyecto). | Dinámico (evalúa horario laboral, red interna, propósito del proyecto, nivel de sensibilidad). |
| **Ejemplo DIAN** | Rol "Inspector Fiscalizador": puede ver todas las declaraciones asignadas a su perfil. | Política ABAC: "Un Inspector puede ver declaraciones de renta si el contribuyente está en su seccional, la auditoría está abierta y accede desde la red institucional en horario laboral". |

## Checklist de la lección

- Explico los tres pilares de la tríada CIA y sus salvaguardas técnicas.
- Describo el funcionamiento y las ventajas del Cifrado de Sobre (Envelope Encryption).
- Diferencio TLS estándar de mTLS e identifico sus casos de uso.
- Comparo RBAC y ABAC en el marco de la gestión de información tributaria.

# Resiliencia, recuperación ante desastres (DRP/BCP) y la reserva tributaria legal

## Qué vas a lograr en esta lección

Dominar las métricas de resiliencia operativa (**RPO y RTO**), las topologías de continuidad (**Active-Active vs. Active-Passive**), y las implicaciones legales y penales de la **Reserva Tributaria (Art. 583 del Estatuto Tributario)**, la **Ley 1581 de 2012** y la **Ley 1273 de 2009**.

## 1. Planes de continuidad (BCP) y recuperación ante desastres (DRP)

- **BCP (Business Continuity Plan):** Plan integral organizacional que asegura que las funciones misionales de la DIAN continúen operando durante y después de una crisis o interrupción grave.
- **DRP (Disaster Recovery Plan):** Componente técnico del BCP focalizado en la infraestructura tecnológica, sistemas de información y datos.

### Métricas fundamentales de recuperación
1. **RPO (Recovery Point Objective - Objetivo de Punto de Recuperación):** La cantidad máxima de datos (medida en tiempo) que la entidad tolera perder ante un desastre.
   - *Ejemplo:* Si el RPO de facturación electrónica es de 5 minutos, los respaldos o replicaciones deben ejecutarse con un intervalo máximo de 5 minutos; una caída no puede implicar la pérdida de más de 5 minutos de facturas.
2. **RTO (Recovery Time Objective - Objetivo de Tiempo de Recuperación):** El tiempo máximo aceptable que puede transcurrir desde la interrupción del servicio hasta su restablecimiento operativo.
   - *Ejemplo:* Si el RTO del servicio de validación previa es de 30 minutos, el sistema debe estar recuperado y atendiendo peticiones en menos de media hora.

| Topología de contingencia | Descripción | Costo | RTO / RPO |
|---|---|---|---|
| **Active-Active (Multi-Región)** | Dos o más centros de datos procesan tráfico simultáneamente con replicación sincrónica o semi-sincrónica. | Muy alto | RTO ≈ 0 <br> RPO ≈ 0 |
| **Active-Passive (Hot Standby)** | El sitio secundario está encendido y sincronizado en tiempo real, pero solo recibe tráfico si el principal cae (failover automatizado). | Alto | RTO de minutos <br> RPO muy bajo |
| **Warm Standby** | El sitio secundario tiene infraestructura mínima encendida que escala automáticamente ante contingencias. | Medio | RTO de decenas de minutos |
| **Cold Standby (Backup & Restore)** | La infraestructura se aprovisiona desde cero restaurando copias de seguridad tras el desastre. | Bajo | RTO de horas/días <br> RPO de horas |


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿El servicio de recepción de declaraciones tributarias sufre una caída general durante el último día del calendario de vencimientos de Grandes Contribuyentes. La DIAN dispone de un sitio pasivo frío (Cold Standby) con RTO de 8 horas. ¿Qué impacto jurídico y operativo tiene esta configuración??**
>
> *Respuesta razonada:* Un RTO de 8 horas en una fecha de vencimiento crítico paraliza el recaudo nacional, genera indefensión en los contribuyentes que intentan cumplir oportunamente la obligación e impone la obligación jurídica de declarar la **contingencia tecnológica (Art. 579-2 del E.T.)**, aplazando los vencimientos sin sanción. Por ello, los servicios transaccionales críticos exigen topologías **Active-Active** o **Hot Standby** con RTO de minutos.


## 2. Marco jurídico: Reserva tributaria y delitos informáticos

### 1. La Reserva Tributaria (Artículo 583 del Estatuto Tributario)
- **Principio rector:** La información contenida en las declaraciones tributarias de los contribuyentes tiene carácter de **reserva legal**.
- **Límite de uso:** Solo puede ser utilizada para el control, recaudo, determinación y administración de los tributos y para los procesos que adelante la administración tributaria.
- **Excepciones legales expresas:** Solo puede levantarse por orden judicial de autoridad competente (jueces penales en investigaciones formales), por requerimiento de órganos de control fiscal (Contraloría) o convenios internacionales de intercambio de información tributaria debidamente ratificados.
- **Sanción para el funcionario:** La violación de la reserva tributaria constituye **falta disciplinaria gravísima**, causal de destitución inmediata e inhabilidad, sin perjuicio de la responsabilidad penal.

### 2. Delitos Informáticos (Ley 1273 de 2009 - Código Penal Colombiano)
Artículos clave que aplican a servidores públicos que gestionan bases de datos:
- **Art. 269A (Acceso abusivo a un sistema informático):** Acceder a un sistema informático sin autorización o por fuera de los permisos concedidos.
- **Art. 269C (Interceptación de datos informáticos):** Interceptar datos en su transmisión o emisiones electromagnéticas.
- **Art. 269D (Daño informático):** Destruir, dañar, borrar, deteriorar o alterar datos sin autorización.
- **Art. 269F (Violación de datos personales):** Obtener, compilar, sustraer, ofrecer, vender o utilizar datos personales para beneficio propio o de terceros sin estar facultado.
- *Agravante:* Cuando la conducta es cometida por un **servidor público** en ejercicio de sus funciones, las penas se incrementan de una tercera parte a la mitad.

## Checklist de la lección

- Defino RPO y RTO y evalúo topologías Active-Active vs. Active-Passive.
- Conozco el alcance y las excepciones de la Reserva Tributaria (Art. 583 E.T.).
- Identifico los tipos penales de la Ley 1273 de 2009 y los agravantes para servidores públicos.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- RPO (Recovery Point Objective) :: Tolerancia máxima de pérdida de datos medida en tiempo transcurrido desde el último respaldo.
- RTO (Recovery Time Objective) :: Tiempo máximo aceptable para restablecer la operatividad de un servicio tras una interrupción.
- Topología Active-Active :: Dos o más centros de cómputo procesando transacciones en paralelo con conmutación instantánea.
- Reserva Tributaria (Art. 583 E.T.) :: Carácter reservado de las declaraciones tributarias; solo utilizable para fines de administración tributaria o excepciones de ley.
- Envelope Encryption (Cifrado de Sobre) :: Cifrado de datos con una clave DEK local, la cual a su vez es cifrada con una clave maestra KEK custodiada en KMS/HSM.
- mTLS (Mutual TLS) :: Protocolo en el que tanto el cliente como el servidor se autentican mutuamente mediante certificados digitales antes de cifrar el canal.
- Almacenamiento WORM :: Write Once, Read Many; medio inmutable que impide modificar o borrar registros, garantizando integridad probatoria forense.
- Ley 1273 de 2009 :: Ley de delitos informáticos en Colombia (acceso abusivo, daño informático, violación de datos personales).

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Cifrado de Sobre (Envelope Encryption) en Cloud Storage  

**Escenario / Contexto:**  
Una entidad custodia 10 petabytes de facturas electrónicas cifradas en el almacenamiento de objetos. Para cumplir la política de seguridad ISO 27001, se debe rotar la clave criptográfica anualmente.  

**Pregunta / Enunciado:**  
¿Qué técnica arquitectónica permite rotar las claves criptográficas en segundos sin necesidad de descifrar y volver a cifrar los 10 petabytes de archivos?  

**Opciones de Respuesta:**  
- **A.** Cifrado de Sobre (Envelope Encryption), donde los archivos se cifran con una Clave de Encriptación de Datos (DEK) local, y la DEK a su vez se cifra con una Clave Maestra (KEK) administrada en un KMS/HSM; al rotar, solo se descifra y recifra la pequeña KEK sin tocar los petabytes de datos.
- **B.** Descifrar todos los archivos a texto plano y dejarlos sin contraseña para siempre.
- **C.** Comprimir todos los archivos en un único archivo RAR protegido con clave de 4 dígitos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Envelope Encryption desacopla el cifrado de datos del cifrado de claves: la rotación de la KEK maestra en el KMS es instantánea porque los datos masivos permanecen cifrados con sus DEKs individuales, las cuales solo se re-envuelven en metadatos.  

**Análisis de Distractores:**  
- *Opción B:* Dejar petabytes fiscales sin cifrar violaría las leyes de protección de datos y la reserva legal.
- *Opción C:* Un archivo RAR monolítico es inviable para petabytes y una clave de 4 dígitos carece de seguridad.

---

### Pregunta 2
**Tema Específico:** Control de Acceso Basado en Atributos (ABAC) vs. RBAC  

**Escenario / Contexto:**  
En la DIAN se necesita implementar una política de seguridad que establezca: 'Un auditor solo puede ver declaraciones tributarias de contribuyentes de su propia Seccional, durante su jornada laboral (08:00 a 17:00), y únicamente si se conecta desde la VPN corporativa institucional'.  

**Pregunta / Enunciado:**  
¿Por qué el modelo RBAC tradicional es insuficiente y qué modelo debe implementarse?  

**Opciones de Respuesta:**  
- **A.** RBAC solo evalúa roles estáticos provocando una explosión inmanejable de roles; debe implementarse ABAC (Attribute-Based Access Control), que evalúa dinámicamente atributos del sujeto, recurso, acción y entorno (tiempo, IP, ubicación).
- **B.** RBAC es perfecto y solo requiere crear 10 millones de roles diferentes para cada funcionario.
- **C.** Debe desactivarse todo control de acceso y confiar en la buena fe de los usuarios.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
ABAC (estándar NIST SP 800-162) permite políticas granulares multidimensionales basadas en atributos del entorno (hora, red) y del recurso (jurisdicción), evitando la proliferación inmanejable de roles de RBAC.  

**Análisis de Distractores:**  
- *Opción B:* Crear millones de roles genera el problema de 'Role Explosion', inauditable y propenso a errores.
- *Opción C:* Desactivar controles de acceso viola el mandato legal de seguridad y reserva tributaria.

---

### Pregunta 3
**Tema Específico:** La Reserva Tributaria (Artículo 583 del Estatuto Tributario)  

**Escenario / Contexto:**  
Un periodista reconocido solicita a un Inspector I, mediante derecho de petición, copia de las declaraciones de renta de los últimos 5 años de varios candidatos presidenciales, alegando el derecho constitucional a la libertad de prensa y al control ciudadano.  

**Pregunta / Enunciado:**  
¿Cuál es la respuesta jurídica y técnica que el servidor público debe emitir?  

**Opciones de Respuesta:**  
- **A.** Negar la entrega de las declaraciones invocando la Reserva Tributaria (Artículo 583 del Estatuto Tributario y Art. 15 de la Constitución), pues la intimidad económica de los contribuyentes es un secreto protegido por ley que no cede ante derechos de petición ni solicitudes informativas.
- **B.** Entregar las declaraciones en una memoria USB a cambio de una mención honorífica en la prensa.
- **C.** Publicar las declaraciones en la página web principal de la entidad.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Art. 583 del Estatuto Tributario declara la estricta reserva de las declaraciones tributarias. Los servidores públicos que la violen incurren en destitución disciplinaria y delito de violación de secreto. Solo cede ante orden judicial penal o tratados específicos.  

**Análisis de Distractores:**  
- *Opción B:* Entregar datos reservados por favores mediáticos o personales es causal de destitución y prisión.
- *Opción C:* La publicación abierta viola el derecho fundamental al habeas data y a la intimidad económica (Art. 15 C.P.).

---

### Pregunta 4
**Tema Específico:** Métricas de Resiliencia: RPO y RTO en Planes de Continuidad (DRP)  

**Escenario / Contexto:**  
En el diseño de la arquitectura de contingencia para la plataforma de recepción de facturación electrónica, el comité de riesgos define que en caso de un terremoto en el centro de datos principal, el servicio debe estar levantado en menos de 1 hora y no se permite perder más de 30 segundos de transacciones.  

**Pregunta / Enunciado:**  
¿A qué métricas técnicas corresponden estos dos requisitos respectivamente?  

**Opciones de Respuesta:**  
- **A.** RTO (Recovery Time Objective) de 1 hora y RPO (Recovery Point Objective) de 30 segundos.
- **B.** RPO de 1 hora y RTO de 30 segundos.
- **C.** MTBF de 1 hora y MTTR de 30 segundos.
- **D.** SLA de 1 hora y throughput de 30 segundos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
RTO es el tiempo máximo tolerado para recuperar la operatividad (tiempo de parada). RPO es la cantidad máxima de datos que se tolera perder medido en tiempo transcurrido desde el último punto de sincronización (30 segundos).  

**Análisis de Distractores:**  
- *Opción B:* Invierte los conceptos: RPO mide pérdida de datos en tiempo; RTO mide tiempo de restablecimiento.
- *Opción C:* MTBF es tiempo medio entre fallos y MTTR es tiempo medio de reparación técnica.
- *Opción D:* Throughput mide tasa de procesamiento, no ventana de pérdida de datos ante desastres.

---

### Pregunta 5
**Tema Específico:** Almacenamiento WORM (Write Once, Read Many) para Auditoría Forense  

**Escenario / Contexto:**  
Se requiere garantizar ante tribunales de justicia que las bitácoras de auditoría y los registros de acceso a las declaraciones de renta no puedan ser borrados ni modificados ni siquiera por el Administrador de Base de Datos con privilegios de root.  

**Pregunta / Enunciado:**  
¿Qué tecnología de almacenamiento garantiza esta inmutabilidad probatoria física y lógica?  

**Opciones de Respuesta:**  
- **A.** Almacenamiento con políticas de retención WORM (Write Once, Read Many) o Object Lock en modo cumplimiento legal (Compliance Mode), donde los objetos se vuelven inmutables e indelebles por diseño de hardware/firmware hasta que expire el plazo legal.
- **B.** Guardar las bitácoras en un archivo de texto en el escritorio de Windows del administrador.
- **C.** Desactivar los logs de auditoría para que nadie los pueda alterar.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El modelo WORM (Compliance Lock) bloquea toda operación de modificación o borrado a nivel de API y almacenamiento, impidiendo que usuarios privilegiados o actores maliciosos destruyan la evidencia pericial de auditoría.  

**Análisis de Distractores:**  
- *Opción B:* Archivos planos en el escritorio pueden ser editados o borrados en cualquier momento sin dejar rastro.
- *Opción C:* Desactivar los logs destruye la trazabilidad y viola las normas de control interno del Estado.

---

### Pregunta 6
**Tema Específico:** Autenticación Mutua con mTLS en Comunicación Interbancaria  

**Escenario / Contexto:**  
Para transmitir la información exógena bancaria desde los servidores de los bancos hacia la DIAN, se requiere garantizar que no solo el banco verifique la identidad del servidor de la DIAN, sino que el servidor de la DIAN compruebe criptográficamente la identidad auténtica del banco emisor.  

**Pregunta / Enunciado:**  
¿Qué protocolo de seguridad en capa de transporte implementa esta doble verificación?  

**Opciones de Respuesta:**  
- **A.** mTLS (Mutual TLS / TLS Bidireccional), donde tanto el cliente como el servidor intercambian y validan certificados digitales X.509 emitidos por una Autoridad de Certificación de confianza.
- **B.** HTTP básico en texto plano sin cifrado.
- **C.** FTP tradicional con usuario y contraseña anónima.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En TLS estándar solo el cliente valida al servidor; en mTLS ambas partes presentan certificados X.509 firmados, garantizando autenticación mutua, cifrado de canal robusto y prevención de ataques Man-in-the-Middle (MitM).  

**Análisis de Distractores:**  
- *Opción B:* HTTP plano envía los datos sin cifrar por la red, permitiendo interceptación masiva de secretos bancarios.
- *Opción C:* FTP anónimo carece de cifrado y autenticación, siendo totalmente inseguro para datos fiscales.

---

### Pregunta 7
**Tema Específico:** Pseudonimización vs. Anonimización bajo la Ley 1581 de 2012  

**Escenario / Contexto:**  
Un equipo de investigación desea utilizar los datos de ingresos y patrimonio de personas naturales para un estudio académico macroeconómico sin violar el régimen de Habeas Data.  

**Pregunta / Enunciado:**  
¿Cuál es la diferencia crítica entre pseudonimizar y anonimizar los datos según la doctrina de privacidad?  

**Opciones de Respuesta:**  
- **A.** La pseudonimización reemplaza identificadores directos por un código reversible (si se accede a la tabla de correspondencia protegida), mientras que la anonimización destruye irreversiblemente cualquier posibilidad técnica de reidentificar al titular, dejando el dato fuera del ámbito restrictivo de protección de datos personales.
- **B.** La pseudonimización es permanente y la anonimización dura solo 24 horas.
- **C.** Ambos términos significan exactamente lo mismo y no tienen diferencias jurídicas ni técnicas.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Los datos pseudonimizados siguen siendo datos personales porque pueden revertirse con la clave; los datos verdaderamente anonimizados ya no se consideran datos personales (al ser irreversible el desacople) y pueden compartirse de forma segura.  

**Análisis de Distractores:**  
- *Opción B:* La anonimización es permanente por definición matemática; no tiene un reloj efímero de 24 horas.
- *Opción C:* La jurisprudencia y los estándares internacionales (ISO 27701, GDPR, Ley 1581) distinguen claramente ambos conceptos.

---

### Pregunta 8
**Tema Específico:** Ataques de Inyección SQL (SQLi) y Mitigación en APIs de Consulta  

**Escenario / Contexto:**  
Un atacante envía en el parámetro `nit` de una consulta web la siguiente cadena: `' OR '1'='1'; DROP TABLE declaraciones; --`.  

**Pregunta / Enunciado:**  
¿Qué práctica de ingeniería de software a nivel de código previene este ataque de forma definitiva?  

**Opciones de Respuesta:**  
- **A.** El uso obligatorio de Consultas Parametrizadas (Prepared Statements) o mapeadores ORM seguros, donde el motor de base de datos compila la estructura SQL antes de evaluar los parámetros, tratando cualquier entrada del usuario estrictamente como un valor literal y nunca como código ejecutable.
- **B.** Concatenar los textos del usuario directamente dentro del comando SQL con el operador `+`.
- **C.** Reiniciar la base de datos cada vez que un usuario escriba comillas simples.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las consultas preparadas (Prepared Statements con bindings parametrizados) separan la instrucción de código de los datos suministrados por el usuario, neutralizando cualquier intento de inyección de sintaxis maliciosa.  

**Análisis de Distractores:**  
- *Opción B:* La concatenación manual de cadenas es precisamente la vulnerabilidad que causa la inyección SQL.
- *Opción C:* Reiniciar el servidor no mitiga la vulnerabilidad y causaría una denegación de servicio permanente.

---

### Pregunta 9
**Tema Específico:** Principio de Privilegio Mínimo (PoLP) y Segregación de Funciones  

**Escenario / Contexto:**  
Un nuevo funcionario ingresa como analista de soporte técnico básico y solicita que se le asignen credenciales con el rol de 'Super Administrador de Base de Datos' (DBA sysadmin) para no tener que pedir permisos cada vez que necesite consultar una tabla.  

**Pregunta / Enunciado:**  
El Inspector I debe denegar la solicitud aplicando:  

**Opciones de Respuesta:**  
- **A.** El Principio de Privilegio Mínimo (Principle of Least Privilege - PoLP), que exige que a cada usuario, proceso o servicio se le otorguen únicamente los permisos estrictamente necesarios y mínimos indispensables para cumplir sus funciones laborales específicas.
- **B.** Asignarle el rol de superadministrador para fomentar la confianza y la motivación laboral.
- **C.** Compartir la contraseña del Director General con todo el equipo.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El PoLP es la base de la seguridad informática (ISO 27001): sobre-otorgar privilegios eleva exponencialmente el riesgo de errores operativos catastróficos, fugas de datos y ataques de movimientos laterales de atacantes.  

**Análisis de Distractores:**  
- *Opción B:* La gestión de accesos no es una herramienta motivacional; es un control de seguridad estricto.
- *Opción C:* Compartir contraseñas maestras destruye el principio de no repudio y viola las políticas corporativas.

---

### Pregunta 10
**Tema Específico:** Topologías de Alta Disponibilidad: Active-Active vs. Active-Passive  

**Escenario / Contexto:**  
Para garantizar la disponibilidad continua del sistema de validación previa de facturación electrónica 24/7 sin tolerar ningún tiempo de inactividad durante mantenimientos programados o caídas de infraestructura en un centro de datos regional.  

**Pregunta / Enunciado:**  
¿Qué arquitectura de despliegue multi-región ofrece la mayor resiliencia y continuidad operativa?  

**Opciones de Respuesta:**  
- **A.** Topología Activo-Activo (Active-Active) multi-región con balanceador de carga global (GSLB) y replicación distribuida, donde ambos centros de datos atienden tráfico de producción simultáneamente; si uno falla, el otro absorbe el 100% de la carga sin tiempo de conmutación.
- **B.** Topología Activo-Pasivo frío donde el centro de datos de respaldo tarda 48 horas en encenderse.
- **C.** Un único servidor físico ubicado en una oficina sin planta eléctrica de respaldo.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La arquitectura Active-Active mantiene dos o más centros de datos procesando transacciones concurrentemente. Elimina el tiempo de failover (RTO cercano a cero) y garantiza resiliencia total ante desastres de zona.  

**Análisis de Distractores:**  
- *Opción B:* Un respaldo frío con 48 horas de latencia violaría los acuerdos de nivel de servicio del comercio nacional.
- *Opción C:* Un servidor único es un punto único de fallo (SPOF) catastrófico inaceptable para el Estado.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Estándares Internacionales de Seguridad y Protección de la Información
* **International Organization for Standardization.** (2022). *ISO/IEC 27001:2022 - Information security, cybersecurity and privacy protection — Information security management systems — Requirements*. Ginebra, Suiza.
* **International Organization for Standardization.** (2022). *ISO/IEC 27002:2022 - Information security controls*. (Controles de acceso, cifrado, integridad, respaldos, gestión de incidentes y redundancia).
* **National Institute of Standards and Technology (NIST).** (2020). *NIST Special Publication 800-53, Revision 5: Security and Privacy Controls for Information Systems and Organizations*. U.S. Department of Commerce.
* **International Organization for Standardization.** (2019). *ISO/IEC 27701:2019 - Security techniques — Extension to ISO/IEC 27001 and ISO/IEC 27002 for privacy information management*.

### Normativa Nacional Colombiana en Seguridad Digital
* **Congreso de la República de Colombia.** (2009). *Ley 1273 de 2009: Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - de la protección de la información y de los datos, y se preservan integralmente los sistemas*.
* **Congreso de la República de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales (Habeas Data)*.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2021). *Modelo de Seguridad y Privacidad de la Información (MSPI) del Estado Colombiano*.
* **Departamento Nacional de Planeación (DNP).** (2016). *Documento CONPES 3854: Política Nacional de Seguridad Digital*. Bogotá D.C.