# Lista de Mejoras Pendientes para GlobalIncom

Este archivo documenta las mejoras técnicas y de rendimiento que se han identificado para el sitio web `index.html`.

Actualizacion 10/feb/2026: Se agrego el generador de firmas en `/firmas/`. No cambia las tareas pendientes del sitio principal.
Actualizacion 11/may/2026: Se agrego el subproyecto `vcard/demo/` como portal de tarjetas de presentacion digitales. Mantenerlo como modulo aislado dentro del mismo repositorio.
Actualizacion 25/may/2026: El subproyecto `vcard/demo/` se amplio con 6 layouts verticales y selector de estilos persistente.
Actualizacion 05/jun/2026: Se actualizaron contenidos de Normatividad Aeronautica en `index.html` y se agregaron enlaces externos en "Normas y Estandares Aplicados". Sin cambios en tareas pendientes.
Actualizacion 11/sep/2026: Se creo `servicios/index.html` con refactor de identidad visual (paleta canon, Montserrat, Lucide, dark mode, SEO/JSON-LD completos). Ver CHANGELOG.

### Seguimiento vCard

-   **[x] Ampliar plantillas de vCard a variantes claramente distintas** (`Aura`, `Executive`, `Focus`, `Bold`, `Ultra Minimal`, `Tech Grid`).
-   **[ ] Agregar preseleccion de layout por URL** (`?layout=...`) para compartir tarjetas con estilo predeterminado.

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

---

### Pendientes específicos de `/servicios/index.html` (post-refactor 11/sep/2026)

- **[ ] Ofuscar la fórmula del cotizador:** La lógica de precios (`basePrice = 3000 + endpoints*160...`) está visible en el JS del frontend. Mover el cálculo a un endpoint backend o, mínimo, ofuscarlo para que un visitante con DevTools no vea el pricing exacto.
- **[ ] Definir destino real del formulario de cotización:** Actualmente `handleQuoteSubmit` solo abre el modal sin enviar datos. Decidir entre Formspree, endpoint propio, mailto: o webhook a CRM (HubSpot/Pipedrive).
- **[ ] Agregar sección de casos de éxito / logos de clientes:** Hoy la página tiene features pero cero evidencia social. Incluir 3-4 logos por sector (Gobierno, Retail, Manufactura, Salud).
- **[ ] Agregar CTAs intermedios a WhatsApp:** Solo hay un formulario al final. Tras secciones largas debería haber un botón "Te llamamos en 15 min" -> `https://wa.me/525555145729`.
- **[ ] Conectar o retirar la sección "Consola NOC/SOC en vivo":** Los datos de `Chart.js` son hardcoded. Si la página sigue "no pública" está bien; cuando se publique, conectar a un endpoint real de métricas o eliminar la sección para evitar promesas falsas.
- **[ ] Reescribir el copy / propuesta de valor:** El título y promesa siguen genéricos. Diferenciar: SLA medibles, mesa bilingüe, un solo contrato OPEX, TCO a 3 años vs CAPEX.
- **[ ] Agregar métricas duras propias:** Hoy hay "24/7/365", "< 15 min", "+99.9% uptime" pero faltan datos propios: tickets/mes, % resolución primer contacto, años experiencia del equipo.
- **[ ] Migrar Tailwind CDN a build:** Sigue usando `cdn.tailwindcss.com`. Cuando la página sea pública, migrar a `tailwind.config.js` + build con purge para reducir ~80% del CSS.
- **[ ] Validación de input tel con pattern:** El campo teléfono del formulario no valida formato antes del submit. Añadir `pattern="[0-9 +\-()]{10,}"`.
- **[ ] Accesibilidad de los toggles del cotizador:** Agregar `aria-pressed` y `role="switch"` en los 6 toggles de módulos.
- **[ ] Glosario / normalización de términos:** Hoy mezcla español e inglés (MDR, MAB, Heartbeat...). Definir política: español excepto nombres de productos.

