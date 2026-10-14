# 🏛️ Ecosistema de Preparación — Concurso DIAN 2676 (2026)
## Inspector I — Subdirección de Procesamiento de Datos (OPEC 236670)

Bienvenido al repositorio central de preparación para el concurso de méritos de la **Comisión Nacional del Servicio Civil (CNSC)** y la **Universidad Areandina** para el ingreso a la carrera específica de la **Dirección de Impuestos y Aduanas Nacionales (DIAN)**.

---

## 📁 Estructura del Proyecto (`IA/`)

El entorno está organizado de manera modular y limpia en dos componentes esenciales, complementados por las herramientas de automatización:

```text
IA/
├── Aplicativo/                    # Plataforma Web Interactiva LMS (Visor, Simulador, Flashcards)
│   ├── index.html                 # Punto de entrada local del aplicativo
│   ├── css/                       # Estilos modernos (tokens de diseño, temas claro/oscuro)
│   ├── js/                        # Motores lógicos, simulador de exámenes y base de datos
│   └── data/                      # Datos maestros de respaldo
│
├── documentacion/                 # Base de Conocimiento y Guías Exhaustivas de Estudio
│   ├── 01_Funcionales_60%/        # 11 Guías monográficas de los temas funcionales eliminatorios
│   ├── 02_Comportamentales_15%/   # 4 Guías de competencias conductuales (Resolución DIAN 065/2024)
│   ├── 03_Integridad_10%/         # 5 Guías de valores de integridad (Código CG-TAH-0002 v3)
│   ├── lecciones_interactivas/    # 20 Unidades temáticas modulares que alimentan el aplicativo
│   └── README.md                  # Índice temático detallado de la documentación
│
├── tools/                         # Herramientas de Compilación y Automatización
│   └── build.js                   # Compilador rápido Markdown -> Aplicativo (Node.js)
│
├── GUIA_DE_ESTUDIO_Y_PLAN_MAESTRO.md # Plan maestro estratégico de estudio (cronograma de 4 semanas)
└── README.md                      # Este archivo de referencia
```

---

## 🚀 Acceso al Aplicativo Interactivo

Puedes estudiar a través del aplicativo de dos formas:

1. **En línea (GitHub Pages):**
   👉 **[https://19ufo.github.io/curso_dian/](https://19ufo.github.io/curso_dian/)**

2. **De forma local en tu equipo:**
   Abre directamente en cualquier navegador moderno:
   👉 [**`IA/Aplicativo/index.html`**](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/Aplicativo/index.html)

### Funcionalidades del Aplicativo:
- **📖 Visor de Lecciones Exhaustivas:** Contenidos completos con infografías visuales de arquitectura, diagramas comparativos y cuadros oficiales de bibliografía con enlaces directos.
- **📝 Simulador de Exámenes PJS:** Pruebas de Juicio Situacional con temporizador de examen real, cálculo de puntaje sobre 100 puntos y retroalimentación justificada con clave y análisis de distractores.
- **⚡ Flashcards de Repaso Activo:** 160 tarjetas de memoria con repetición espaciada y filtrado por componente.
- **💾 Respaldo y Restauración de Avances:** Exportación e importación de tu progreso y puntajes en archivo `.json` para estudiar en múltiples dispositivos.

---

## ⚙️ Mantenimiento y Compilación del Contenido

Los archivos `.md` en [`documentacion/lecciones_interactivas/`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/documentacion/lecciones_interactivas/) actúan como **fuente única de verdad**. Cada vez que edites o amplíes una lección, compila los cambios ejecutando:

```bash
node IA/tools/build.js
```

El compilador actualizará automáticamente el bundle [`IA/Aplicativo/js/data_extra.js`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/Aplicativo/js/data_extra.js) sin dependencias externas.
