# 🏛️ Preparación Concurso DIAN 2676 — CNSC & Universidad Areandina

Plataforma Web Integral y Entorno de Estudio Especializado para superar con el más alto puntaje las pruebas escritas del **Proceso de Selección DIAN 2676 de 2026** (Comisión Nacional del Servicio Civil - CNSC & Universidad Areandina).

---

## 🚀 Acceso al Aplicativo

* 🌐 **Despliegue Oficial en GitHub Pages:** [https://19ufo.github.io/curso_dian/](https://19ufo.github.io/curso_dian/)
* 💻 **Ejecución Local (Offline):** Abre directamente en tu navegador el archivo [`index.html`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/index.html) o ejecuta en terminal:
  ```powershell
  npm start
  # o alternativamente:
  npx serve .
  # o con Python:
  python -m http.server 8080
  ```

---

## 📐 Arquitectura de Producción del Repositorio

El proyecto implementa una arquitectura desacoplada, limpia y optimizada para servir estáticamente en la raíz (`/`) de **GitHub Pages**, manteniendo una **ÚNICA fuente de verdad** en Markdown y compilación automatizada hacia assets cacheados:

```text
curso_dian/
├── index.html                    # Entrada principal / Selector de cargos (Inspector I, Gestor II, etc.)
├── curso.html                    # Motor visual del aula de estudio (LMS servido en la raíz)
├── README.md                     # Documentación técnica y guía de arquitectura
├── package.json                  # Scripts de compilación y servidor local
├── .gitignore                    # Exclusiones de archivos personales, cachés y dependencias
├── .nojekyll                     # Directiva para que GitHub Pages sirva assets sin procesamiento Jekyll
├── assets/                       # Recursos estáticos del Frontend
│   ├── css/                      # Hojas de estilo extraídas y modulares (styles.css, portal.css, extra.css)
│   ├── js/                       # Motores lógicos (app.js, quiz.js, backup.js, plan.js, tips.js, track_intros.js)
│   └── data/                     # Bases de datos compiladas (data.js, data_gestor2.js, data_extra.js)
├── content/                      # ÚNICA fuente de verdad en Markdown (.md)
│   ├── _comunes/                 # Módulos transversales compartidos (Estructura DIAN, Misionalidad, Integridad, Comportamentales)
│   └── cargos/                   # Contenidos estructurados por perfil OPEC
│       ├── inspector1/           # Guías de estudio profundas de Inspector I - Datos (OPEC 236670)
│       └── gestor2/              # Guías de estudio profundas de Gestor II - Gestión Pública (OPEC 236916)
├── tools/                        # Pipeline maestro de compilación
│   ├── compiler.js               # Compilador universal Multi-Cargo (Markdown -> JSON/JS optimizado)
│   └── build.js                  # Wrapper de ejecución rápida (npm run build)
├── docs_ia/                      # Reglas, protocolos y prompts del agente (INSTRUCCIONES_MAESTRAS_FLASH.md)
└── _archivo_personal_concurso/   # [Aislado/Ignorado en Git] Documentación personal del aspirante
```

---

## 🎯 Ponderaciones Oficiales del Concurso (Numeral 4.2 GOA)

| Componente de Evaluación | Carácter | Modalidad Ascenso | Modalidad Ingreso (c/e) | Umbral Mínimo |
| :--- | :---: | :---: | :---: | :---: |
| **Pruebas Escritas Funcionales** | **ELIMINATORIO** | **60%** | **65%** | **70.00 / 100 pts** |
| **Pruebas Comportamentales** | Clasificatorio | 15% | 15% | Sin umbral |
| **Pruebas de Integridad** | Clasificatorio | 10% | 10% | Sin umbral |
| **Valoración de Antecedentes** | Clasificatorio | 15% | 10% | Evaluación Hoja de Vida |

> [!CAUTION]
> **La prueba funcional es eliminatoria.** Quien obtenga 69.99 puntos sobre 100 queda automáticamente excluido del concurso. Por esta razón, el contenido funcional cuenta con la mayor densidad técnica y normativa.

---

## 🛠️ Pipeline de Compilación (`tools/`)

Los archivos Markdown dentro de `content/cargos/<cargo>/` constituyen la **ÚNICA fuente de verdad**. Toda modificación en temarios, preguntas o flashcards se compila de manera determinista hacia `assets/data/`.

### Comandos de Compilación:

```powershell
# Compilar todos los cargos registrados y lecciones interactivas
npm run build
# o directamente con Node:
node tools/compiler.js

# Compilar un cargo específico:
npm run build:inspector1    # Compila Inspector I (OPEC 236670) -> assets/data/data.js
npm run build:gestor2       # Compila Gestor II (OPEC 236916) -> assets/data/data_gestor2.js
```

### Capacidades del Compilador (`compiler.js`):
1. **Auto-descubrimiento:** Detecta cualquier nueva carpeta en `content/cargos/<slug_cargo>` y la registra dinámicamente.
2. **Parser de Unidades Universales:** Extrae entre 5 y 8 unidades por módulo, tiempos estimados, tablas, diagramas ASCII y cajas pedagógicas (`[!EXAM]`, `[!LAW]`, `[!WARNING]`, `[!TIP]`, `[!CASE]`).
3. **Simulador de Juicio Situacional (PJS):** Extrae preguntas de examen de 3 opciones (`A`, `B`, `C`) con justificación exhaustiva de la clave y desglose de distractores conforme al estándar Areandina.
4. **Flashcards & Autoevaluaciones:** Compila las tarjetas de repetición espaciada y preguntas desplegables (`::: q`).

---

## 🔄 Principio DRY y Módulos Transversales (`content/_comunes/`)

Para evitar duplicidad entre los diferentes cargos del concurso, la carpeta `content/_comunes/` aloja los fundamentos institucionales canónicos de la DIAN:
- **`00_Indice_y_Marco_Institucional_DIAN.md`**: Sistema Específico de Carrera (Decreto Ley 071/2020 y 927/2023).
- **`01_Diccionario_Competencias_Comportamentales_Res_065_2024.md`**: Diccionario Oficial DIAN.
- **`02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md`**: Código de Integridad CG-TAH-0002 v3 y decálogo de conductas.
- **`03_Abece_Evidencias_Competencias_Conductuales.md`**: Metodología de evidencias de desempeño y producto.

Cada cargo contextualiza estos fundamentos transversales aplicando las funciones, nivel jerárquico y casos específicos de su OPEC.

---

## 🌐 Despliegue en GitHub Pages (DevOps)

Gracias a la refactorización en la raíz, el despliegue es inmediato y sin herramientas complejas:
1. En GitHub, ve a **Settings > Pages**.
2. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. El archivo `.nojekyll` en la raíz garantiza que GitHub Pages sirva todos los archivos estáticos sin omitir recursos.

---

## 💾 Respaldo y Privacidad del Avance

El progreso del usuario (lecciones completadas, exámenes realizados y marcadores) se almacena de forma privada y 100% local en el `localStorage` del navegador. Mediante el modal de respaldo, es posible exportar e importar archivos `.json` para sincronizar el progreso entre dispositivos sin requerir backend ni recopilación de datos.
