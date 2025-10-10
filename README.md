# 🌿 Plataforma Kóte Wà: Preservación Lingüística Indígena de Costa Rica

> **Kóte Wà** (El Espíritu de las Palabras). Plataforma digital diseñada para la preservación, revitalización y promoción de las lenguas y conocimientos tradicionales de los pueblos indígenas de Costa Rica, bajo el marco del Ministerio de Educación Pública (MEP).

---

## 🎯 Objetivo del Proyecto

Crear un ecosistema digital robusto que facilite la **Educación Intercultural Bilingüe**, conectando a líderes comunitarios, docentes y al público general con recursos educativos valiosos y culturalmente pertinentes.

---

## 🛠️ Stack Tecnológico (Sugerido)

| Categoría | Tecnología | Razón de Uso |
| :--- | :--- | :--- |
| **Backend/API** | Node.js / Python (Django/Flask) | Escalabilidad y facilidad de desarrollo de API REST. |
| **Frontend** | React / Vue.js | Interfaz de usuario dinámica y modular para los módulos de aprendizaje interactivo. |
| **Base de Datos** | PostgreSQL / MongoDB | Ideal para almacenar datos relacionales (usuarios) y no relacionales (recursos multimedia categorizados). |

---

## 👥 Equipo de Desarrollo

| Rol Principal | Miembro del Equipo | Contacto (Sugerido) |
| :--- | :--- | :--- |
| Líder Técnico / Arquitecto | Daniela Montero | dmonteromo@ucenfotec.ac.cr |
| Scrum Master / Facilitador | Wilmer Paiz | wpaizm@ucenfotec.ac.cr |

---

## ⚙️ Guías de Desarrollo y Colaboración

### 1. Convenciones de Nomenclatura y Formato

Para mantener la consistencia y la legibilidad en el código, seguiremos las siguientes guías de estilo:

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Variables/Funciones** | `camelCase` | `obtenerContenidosCulturales` |
| **Clases/Componentes** | `PascalCase` | `ModuloAprendizaje` |
| **Archivos/Módulos** | `kebab-case` | `lider-comunitario.js` |
| **Indentación** | 2 espacios (Soft Tabs) | (Definido en archivo `.editorconfig`) |

### 2. Estrategia de Branches y Flujo de Trabajo (Git Flow Simplificado)

Utilizamos un modelo de ramas estricto, priorizando la estabilidad y la revisión obligatoria del código.

* **`main`**: Rama de **producción**. Siempre debe ser estable y estar lista para desplegar.
* **`develop`**: Rama principal de **integración**. Aquí se fusionan todas las funcionalidades terminadas.
* **`feature/nombre-tarea`**: Ramas para el desarrollo de nuevas funcionalidades (una Historia de Usuario).
* **`fix/nombre-bug`**: Ramas para la corrección de errores críticos.

#### ❗ Regla de Pull Request (PR)
* Todo el trabajo debe realizarse en ramas `feature/` o `fix/`.
* Para fusionar código a `develop`, es **obligatoria** la apertura de un Pull Request.
* El PR debe ser revisado y aprobado por el **otro miembro** del equipo (Aprobación de 1 revisor) para asegurar la calidad y el cumplimiento del *Definition of Done*.

### 3. Tipos de Commit y Mensajes

Los mensajes de commit deben ser informativos y seguir la convención **`<tipo>(<ámbito>): <descripción>`**:

| Tipo de Commit | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- |
| **`feat`** | Una nueva funcionalidad (mapeada a una HU). | `feat: Implementar subida de audios de líderes comunitarios` |
| **`fix`** | Una corrección de un error o bug. | `fix(auth): Corregir error de login en móviles` |
| **`docs`** | Cambios solo en la documentación (README, Markdown). | `docs: Actualizar sección de Tipos de Commit en README` |
| **`style`** | Cambios de formato (espacios, comas, etc.). | `style: Ajustar indentación en archivos JS` |
| **`refactor`** | Reestructuración de código sin cambiar funcionalidad. | `refactor: Modularizar función de validación de recursos` |
| **`chore`** | Tareas de mantenimiento (actualizar dependencias). | `chore: Actualizar dependencias de React a v18.0` |

---

## 📂 Estructura del Repositorio