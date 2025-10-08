# 🔒 Requerimientos No Funcionales (RNFs)

Este documento define los atributos de calidad del sistema, que son cruciales para una experiencia de usuario positiva y la estabilidad operativa. Los RNFs establecen métricas de éxito del proyecto.

---

## 1. Usabilidad y Experiencia de Usuario

| ID | Requerimiento No Funcional (RNF) | Métrica Cuantificable |
| :--- | :--- | :--- |
| **RNF-USA-001** | **Diseño Responsivo General** | La interfaz de usuario debe ser **completamente funcional** y adaptarse a dispositivos móviles con una resolución mínima de **360px** de ancho. |
| **RNF-USA-002** | **Navegación Intuitiva** | El 90% de los usuarios de prueba deben poder completar la tarea de "Encontrar un audio y marcarlo como favorito" en **menos de 3 clics** desde la página de inicio. |

---

## 2. Rendimiento y Escalabilidad

| ID | Requerimiento No Funcional (RNF) | Métrica Cuantificable |
| :--- | :--- | :--- |
| **RNF-PER-001** | **Tiempo de Carga** | El tiempo de carga de cualquier página principal o lista de contenidos no debe exceder los **2.5 segundos** (T95, en el percentil 95 de peticiones). |
| **RNF-PER-002** | **Capacidad de Concurrencia** | El sistema debe soportar un mínimo de **500 usuarios concurrentes** activos en el módulo de aprendizaje sin degradación del rendimiento de la API. |
| **RNF-PER-003** | **Búsqueda de Diccionario** | La función de búsqueda del diccionario debe retornar resultados en menos de **1.0 segundo**. |

---

## 3. Seguridad y Privacidad

| ID | Requerimiento No Funcional (RNF) | Métrica Cuantificable |
| :--- | :--- | :--- |
| **RNF-SEG-001** | **Autenticación Fuerte** | El acceso a los roles de **Administrador y Líder Comunitario** debe implementar **Autenticación de Dos Factores (2FA)** obligatoria para proteger la integridad de los contenidos. |
| **RNF-SEG-002** | **Protección de Datos** | Todos los datos de usuario (contraseñas) y la información sensible de los Líderes/Ancianos deben ser almacenados con **encriptación AES-256** o superior. |
| **RNF-SEG-003** | **Validación de Archivos** | El sistema debe incluir un escaneo de seguridad que **bloquee la subida** de archivos multimedia que contengan *scripts* o amenazas de seguridad conocidas. |

---

## 4. Disponibilidad y Mantenimiento

| ID | Requerimiento No Funcional (RNF) | Métrica Cuantificable |
| :--- | :--- | :--- |
| **RNF-DIS-001** | **Tiempo de Actividad (Uptime)** | El sistema debe garantizar una disponibilidad de **99.5%** mensual, excluyendo las ventanas de mantenimiento programadas. |
| **RNF-DIS-002** | **Tolerancia a Fallos** | Si la base de datos principal falla, el sistema debe ser capaz de conmutar a una réplica de respaldo en **menos de 60 segundos** para minimizar el tiempo de inactividad. |