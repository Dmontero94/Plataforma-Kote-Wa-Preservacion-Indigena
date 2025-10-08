# ✅ Requerimientos Funcionales (RFs)

Este documento detalla las funcionalidades explícitas que el sistema debe ejecutar. Cada requerimiento es **medible, sin ambigüedades y verificable** por el equipo de desarrollo y los *stakeholders*.

---

## 1. Módulo de Administración (Administrador)

| ID | Requerimiento Funcional (RF) | Descripción Detallada y Verificación |
| :--- | :--- | :--- |
| **RF-ADM-001** | **Gestión y Suspensión de Usuarios** | El sistema debe permitir al Administrador **filtrar y suspender** usuarios (Líder, Docente, General) basándose en el rol o el estado (activo, inactivo). |
| **RF-ADM-002** | **Supervisión de Contenidos** | El Administrador debe poder ver una lista de **todos los contenidos cargados**, con filtros por **Pueblo Indígena** y **estado de validación** (Pendiente, Aprobado, Rechazado). |
| **RF-ADM-003** | **Generación de Reportes de Uso** | El sistema debe generar un **reporte semanal** en formato CSV que muestre la cantidad de accesos y descargas por tipo de contenido y lengua indígena. |

---

## 2. Módulo de Contenido Comunitario (Líder Comunitario)

| ID | Requerimiento Funcional (RF) | Descripción Detallada y Verificación |
| :--- | :--- | :--- |
| **RF-LID-001** | **Carga de Recursos Multimedia** | El Líder Comunitario debe poder **subir archivos multimedia** (audio, video, texto) que no excedan **100MB** y etiquetarlos obligatoriamente con un pueblo indígena de la lista predefinida del MEP. |
| **RF-LID-002** | **Validación Cultural** | El Líder debe poder **revisar y aprobar recursos educativos** propuestos por el Docente (etiquetados como "Pendientes de Validación Cultural") antes de que se hagan públicos. |
| **RF-LID-003** | **Control de Audios Ancestrales** | Al cargar audios, el sistema debe solicitar y registrar el nombre del **anciano narrador/explicador** y la **temática tradicional** (historia, medicina, tradición). |

---

## 3. Módulo de Educación (Docente Intercultural)

| ID | Requerimiento Funcional (RF) | Descripción Detallada y Verificación |
| :--- | :--- | :--- |
| **RF-DOC-001** | **Creación de Cursos y Talleres** | El Docente debe poder **crear un "Curso" o "Taller"** agregando hasta **20 recursos** existentes (videos, audios) del Banco Cultural y asignarle un nivel pedagógico (Básico, Intermedio, Avanzado). |
| **RF-DOC-002** | **Acceso a Banco de Recursos** | El Docente debe poder **acceder y filtrar** el Banco de recursos culturales **ya validados** por el Líder Comunitario para usarlos en la creación de material didáctico. |

---

## 4. Módulo de Acceso General (Estudiante/Público General)

| ID | Requerimiento Funcional (RF) | Descripción Detallada y Verificación |
| :--- | :--- | :--- |
| **RF-PUB-001** | **Consulta del Banco de Recursos** | El usuario debe poder **consultar y buscar recursos culturales** por tres categorías obligatorias: **Pueblo Indígena, Tipo de Recurso (Audio, Video, Texto) y Palabra Clave** en el título/descripción. |
| **RF-PUB-002** | **Acceso a Módulos de Aprendizaje** | El usuario debe poder **inscribirse y acceder a Cursos Básicos de lenguas indígenas** con contenido interactivo (audio, escritura) y evaluaciones. |
| **RF-PUB-003** | **Diccionario Digital** | El usuario debe poder **consultar el Diccionario digital** (Español - Lengua Indígena) con resultados que incluyan **audio de pronunciación** y ejemplos de uso. |
| **RF-PUB-004** | **Recepción de Alertas** | El usuario debe poder **activar notificaciones** (push o correo) para recibir alertas sobre **eventos culturales** (festivales, ceremonias) de su Pueblo Indígena de interés. |