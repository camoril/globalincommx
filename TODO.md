# Lista de Mejoras Pendientes para GlobalIncom

Este archivo documenta las mejoras técnicas y de rendimiento que se han identificado para el sitio web `index.html`.

---

### **PRIORIDAD ALTA (Impacto en Rendimiento)**

-   **[ ] Generar CSS Purgado y Eliminar CDN de Tailwind:**
    -   **Tarea:** Implementar un proceso de "build" (usando Node.js y el CLI de Tailwind) para escanear el archivo `index.html`, identificar solo las clases que se están usando y generar un archivo `.css` mínimo y altamente optimizado. Este archivo local reemplazaría al script del CDN.
    -   **Impacto:** Reducción drástica del tamaño del CSS, mejorando significativamente la velocidad de carga (FCP y LCP).

-   **[ ] Optimizar y Precargar la Imagen de Fondo del Hero:**
    -   **Tarea:** Comprimir y convertir la imagen `corporate_commercial.jpg` a un formato más eficiente (como WebP) y añadir una etiqueta `<link rel="preload">` en el `<head>` para que el navegador la descargue con alta prioridad.
    -   **Impacto:** Acelera la renderización del contenido visual principal (Largest Contentful Paint), una métrica clave para la experiencia de usuario y el SEO.

---

### **PRIORIDAD MEDIA (Impacto en SEO)**

-   **[ ] Implementar "Clean URLs" para el Router SPA:**
    -   **Tarea:** Cambiar el sistema de navegación de `/#seccion` a `/seccion` (ej. `.../infraestructura`). Esto requiere una modificación en el JavaScript del router y una configuración de reescritura de URL en el servidor (mediante un archivo `.htaccess` en cPanel).
    -   **Impacto:** Es más profesional, amigable para el usuario y permite a los motores de búsqueda indexar cada sección como una página independiente, lo que mejora el SEO.

---

### **PRIORIDAD BAJA (Buenas Prácticas y Mantenimiento)**

-   **[ ] Refactorizar `onclick` a `addEventListener`:**
    -   **Tarea:** Mover toda la lógica de los atributos `onclick` del HTML a un bloque de JavaScript centralizado, separando la estructura del comportamiento.
    -   **Impacto:** Mejora la organización, legibilidad y mantenimiento del código a largo plazo.

-   **[ ] Usar el Elemento `<picture>` para Imágenes Locales:**
    -   **Tarea:** Utilizar la etiqueta `<picture>` para las imágenes del sitio (ej. `cabling-management-1500x430.jpg`) para ofrecer formatos de imagen modernos (como WebP) a los navegadores que los soportan, con un respaldo a JPG para los que no.
    -   **Impacto:** Reduce el tamaño de las imágenes para la mayoría de los usuarios, mejorando el rendimiento.
