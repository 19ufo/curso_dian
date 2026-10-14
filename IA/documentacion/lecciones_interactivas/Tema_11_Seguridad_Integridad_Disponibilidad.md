---
modulo: 11
---
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

::: q
En el diseño de la arquitectura del Repositorio Único de Datos (DataR), un proveedor sugiere cifrar los respaldos históricos utilizando una única clave simétrica compartida y almacenada en un archivo de configuración del servidor. ¿Qué riesgo crítico y qué estándar se vulneran?
---
Vulnera las buenas prácticas de **gestión de claves de ISO 27001** y expone la clave a robo por intrusión al servidor. Se debe implementar **Envelope Encryption** con claves custodiadas en un servicio centralizado de gestión de claves (**KMS / HSM**), con rotación automatizada, control de acceso estricto y auditoría de llamadas de descifrado.
:::

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

::: q
El servicio de recepción de declaraciones tributarias sufre una caída general durante el último día del calendario de vencimientos de Grandes Contribuyentes. La DIAN dispone de un sitio pasivo frío (Cold Standby) con RTO de 8 horas. ¿Qué impacto jurídico y operativo tiene esta configuración?
---
Un RTO de 8 horas en una fecha de vencimiento crítico paraliza el recaudo nacional, genera indefensión en los contribuyentes que intentan cumplir oportunamente la obligación e impone la obligación jurídica de declarar la **contingencia tecnológica (Art. 579-2 del E.T.)**, aplazando los vencimientos sin sanción. Por ello, los servicios transaccionales críticos exigen topologías **Active-Active** o **Hot Standby** con RTO de minutos.
:::

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

# Flashcards

- RPO (Recovery Point Objective) :: Tolerancia máxima de pérdida de datos medida en tiempo transcurrido desde el último respaldo.
- RTO (Recovery Time Objective) :: Tiempo máximo aceptable para restablecer la operatividad de un servicio tras una interrupción.
- Topología Active-Active :: Dos o más centros de cómputo procesando transacciones en paralelo con conmutación instantánea.
- Reserva Tributaria (Art. 583 E.T.) :: Carácter reservado de las declaraciones tributarias; solo utilizable para fines de administración tributaria o excepciones de ley.
- Envelope Encryption (Cifrado de Sobre) :: Cifrado de datos con una clave DEK local, la cual a su vez es cifrada con una clave maestra KEK custodiada en KMS/HSM.
- mTLS (Mutual TLS) :: Protocolo en el que tanto el cliente como el servidor se autentican mutuamente mediante certificados digitales antes de cifrar el canal.
- Almacenamiento WORM :: Write Once, Read Many; medio inmutable que impide modificar o borrar registros, garantizando integridad probatoria forense.
- Ley 1273 de 2009 :: Ley de delitos informáticos en Colombia (acceso abusivo, daño informático, violación de datos personales).
