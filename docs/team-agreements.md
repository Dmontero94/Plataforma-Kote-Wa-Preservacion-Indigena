# 🤝 Acuerdos de Colaboración del Equipo - Plataforma Kóte Wà

Este documento establece las reglas y expectativas de trabajo para el equipo de desarrollo, buscando reducir fricciones, asegurar la consistencia del código y optimizar la colaboración entre los dos miembros.

---

## 1. Normas y Horarios de Colaboración

### 1.1. Horario de Trabajo Principal
* **Zona Horaria:** Costa Rica (GMT-6).
* **Horario de Desarrollo:** El horario de mayor colaboración y codificación se establece **a partir de las 6:00 p.m.**
* **Duración Mínima:** Cada sesión de trabajo activa debe tener una duración mínima de **2 horas** para garantizar un progreso significativo en las tareas.

### 1.2. Reuniones de Sincronización (Daily Scrum)
* **Frecuencia y Hora:** Reunión diaria, no mayor a 15 minutos, a las **6:15 p.m.** (al inicio de la sesión de trabajo).
* **Temas a Cubrir (Cada Miembro):**
    1.  ¿Qué hice ayer?
    2.  ¿Qué haré hoy?
    3.  ¿Qué impedimento (bloqueo) tengo? (Máximo 2 minutos por impedimento).

### 1.3. Comunicación
* **Herramienta Principal:** WhatsApp, Google Meet
* **Uso:** Usar el chat solo para coordinaciones rápidas. Para discusiones complejas o decisiones de diseño, se debe esperar a la reunión de las 6:15 p.m.

---

## 2. Roles y Responsabilidades

Dado que el equipo se compone de solo dos miembros, las responsabilidades de gestión se dividen para asegurar el equilibrio.

| Rol | Miembro Responsable | Responsabilidades Clave |
| :--- | :--- | :--- |
| **Líder Técnico/Arquitecto** | Daniela | Responsable final de las guías de código, la estructura de carpetas y las decisiones de *stack* tecnológico. |
| **Scrum Master/Facilitador** | Wilmer | Responsable de gestionar el Backlog en Jira, organizar la *Daily Scrum* y eliminar impedimentos. |
| **Control de Calidad (Compartido)** | AMBOS | Obligación de revisar y aprobar todos los *Pull Requests* del compañero antes de fusionar. |

### 2.1. Compromiso de Contribución
* **Seguimiento Semanal:** Al final de cada *sprint* de dos semanas, cada miembro debe haber resuelto un mínimo de **1 Épica pequeña o 2 Historias de Usuario (HU)** de tamaño mediano, cerradas y verificadas en Jira.
* **Priorización:** El trabajo debe reflejar la prioridad establecida en el Backlog de Jira, dando preferencia a las historias de **Prioridad ALTA** primero.

---

## 3. Lista de Verificación (Definition of Done - DoD)

Una Historia de Usuario (HU) solo puede considerarse **FINALIZADA (DONE)** en Jira si cumple *rigurosamente* con **todos** los siguientes puntos.

### 📜 Código y Estilo
1.  **Legibilidad:** El código escrito es claro, conciso y sigue las **Convenciones de Nomenclatura** descritas en el `README.md`.
2.  **Pruebas:** El código nuevo ha sido cubierto con **pruebas unitarias** (cobertura mínima de 70% en la funcionalidad crítica).

### 🔄 Revisión y QA (Control de Calidad)
3.  **Criterios de Aceptación (CA):** La funcionalidad cumple **TODOS** los Criterios de Aceptación definidos en la HU de Jira.
4.  **Pull Request (PR):** Se ha abierto un PR desde la rama *feature* hacia `develop`.
5.  **Aprobación:** El PR ha sido revisado y **aprobado por el otro desarrollador** del equipo.

### ✅ Cierre y Documentación
6.  **Fusión:** El código aprobado ha sido fusionado exitosamente en la rama `develop`.
7.  **Limpieza:** La rama *feature* local ha sido eliminada.
8.  **Cierre:** La Historia de Usuario ha sido movida al estado **"DONE"** en Jira, y se ha validado que el código corre sin errores en el entorno de desarrollo.