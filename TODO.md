# Lista de Mejoras Pendientes para GlobalIncom

Este archivo documenta las mejoras técnicas y de rendimiento que se han identificado para el sitio web `index.html`.

Actualizacion 10/feb/2026: Se agrego el generador de firmas en `/firmas/`. No cambia las tareas pendientes del sitio principal.
Actualizacion 11/may/2026: Se agrego el subproyecto `vcard/demo/` como portal de tarjetas de presentacion digitales. Mantenerlo como modulo aislado dentro del mismo repositorio.
Actualizacion 25/may/2026: El subproyecto `vcard/demo/` se amplio con 6 layouts verticales y selector de estilos persistente.
Actualizacion 05/jun/2026: Se actualizaron contenidos de Normatividad Aeronautica en `index.html` y se agregaron enlaces externos en "Normas y Estandares Aplicados". Sin cambios en tareas pendientes.
Actualizacion 11/sep/2026: Se creo `servicios/index.html` con refactor de identidad visual (paleta canon, Montserrat, Lucide, dark mode, SEO/JSON-LD completos). Ver CHANGELOG.
Actualizacion 12/oct/2026: Reenfoque completo de `servicios/index.html` al cumplimiento CO-SA-17.18/24. Nueva seccion Paquetes (Bronze/Silver/Gold), Mapeo 7.1-7.13, disclaimer de modelo MSSP/UVA y de CST. Cotizador reescrito en USD. Stack reescrito con Sophos+ManageEngine. Ver CHANGELOG.
Actualizacion 12/oct/2026 (refactor comercial): Segunda pasada sobre `servicios/index.html` para eliminar TODA mencion explicita a AFAC, CO-SA-17.18/24, UVA, MSSP, canalizacion, [EMPRESA A DEFINIR], numeral XIII/CST, Cláusulas 7.1-7.13 y Global Lynx. La página queda como un producto comercial vendible, no como un escaparate regulatorio. Ver CHANGELOG.
Actualizacion 12/oct/2026 (modelo de arrendamiento): Tercera pasada sobre `servicios/index.html` para reforzar el mensaje comercial "todo bajo arrendamiento, sin CAPEX". Se creo nueva seccion `#arrendamiento` (4 cards: AD/Proxmox, red Sophos, cableado, garantia), se renombro el card Stack 4 a "NPS con 802.1X + MAB" con bullets estructurados, y se agrego nueva fila "Servidores de AD arrendados" en la tabla de capacidades con check en los 3 tiers. Ver CHANGELOG.
Actualizacion 13/oct/2026 (Bronze Económico + Seqrite): Cuarta pasada sobre `servicios/index.html` para integrar la opcion "Bronze Economico" (stack Seqrite + ManageEngine, USD $1,500/mes) en la grid de paquetes, cotizador y tabla de capacidades. Se renombro "Bronze" a "Bronze Premium" para diferenciar. Se agregaron 3 nuevos add-ons comerciales al cotizador: DLP nativo (+USD 350), MDM/BYOD (+USD 250) y ZTNA (+USD 400), todos powered by Seqrite. Se elimino bloque HTML legacy duplicado de sliders que sobreescribia IDs del DOM. Backup completo previo en `servicios/index_v1_backup_antes_seqrite.html`. Ver CHANGELOG.
Actualizacion 13/oct/2026 (modelo de costos del cotizador): Quinta pasada sobre `servicios/index.html`. Se sustituyeron los precios hardcoded del cotizador por un modelo dinamico basado en descuentos de partner (P1-D variable por volumen), costo de personal prorrateado (P2-A) y margen operativo 40% (P4-B estandar industria). Se agrego bloque `<details>` colapsable "Ver desglose de costos" en el summary card con 5 lineas dinamicas (licencias, personal, subcontrato pendiente, costo total, margen 40%). Se ajusto el precio base de Bronze Economico de $1,500 a $2,000 para tener margen ~30%. Documentacion tecnica completa del modelo en `vario/Servicios_Administrados/MODELO_COSTOS_v1.md`. Subcontrato Global Lynx (P3) sigue pendiente de negociacion. Ver CHANGELOG.
Actualizacion 13/oct/2026 (PAM360 add-on + limpieza copy): Sexta pasada sobre `servicios/index.html`. Se agrego ManageEngine PAM360 como add-on comercial (`+USD 450/mes`, icono `key-round`) en el cotizador. Se agrego fila "PAM — Cuentas privilegiadas (ManageEngine PAM360)" en la tabla `#capacidades` con marca "Add-on" purpura en los 4 tiers. Se elimino copy "Costo operativo calculado sobre descuentos de partner reales" del card Bronze Economico (era texto interno del modelo, no debe aparecer en la landing publica). Ver CHANGELOG.
Actualizacion 13/oct/2026 (refactor titulos de paquetes): Septima pasada sobre `servicios/index.html`. Se refactorizaron los 4 titulos de los tiers para que sigan una escalera de madurez operativa sin redundancia verbal. Antes: "Empezar con poco" / "Empezar sin sobresaltos" / "Operar sin sobresaltos" / "Probar y demostrar". Ahora: "Arrancar con bajo costo" / "Estabilizar la operacion" / "Operar 24/7 sin sobresaltos" / "Demostrar y certificar". Ver CHANGELOG.
Actualizacion 13/oct/2026 (limpieza de copy comercial en HTML): Octava pasada sobre `servicios/index.html`. Se eliminaron menciones de relaciones comerciales ("partner", "aliado", "alianza") y de metodologia de costos interna (descuentos de lista, margen 40%, subcontratos pendientes) que no deben aparecer en la landing publica. El HTML ahora describe el servicio (componentes del stack) sin exponer la estructura comercial ni el modelo de costos. Ver CHANGELOG.

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

### Pendientes específicos de `/servicios/index.html` (post-refactor 12/oct/2026)

- **[x] Reescribir el copy / propuesta de valor:** Hero ahora habla explícitamente de cumplimiento CO-SA-17.18/24 y entrega de informe semestral AFAC.
- **[x] Reemplazar los 6 módulos genéricos por el stack del catálogo:** Sophos XGS + Endpoint, AD/Entra, NPS/MAB, Site24x7+Log360, Vulnerability Manager Plus, Correo+M365, Phish Threat.
- **[x] Agregar paquetes tiered (Bronze/Silver/Gold):** Nueva sección `#paquetes` con 3 tiers y precios aproximados en USD.
- **[x] Agregar mapeo cláusula 7.x × paquete:** Nueva sección `#cobertura` con tabla 13×3.
- **[x] Disclaimer del modelo MSSP/UVA:** Banda visible en el hero, en el footer y en el JSON-LD.
- **[x] Disclaimer del CST (numeral XIII):** Banda ámbar visible antes del footer.
- **[x] Cambiar moneda del cotizador de MXN a USD:** Coherente con el catálogo comercial.
- **[x] Refactor del cotizador a modelo de paquetes + add-ons:** Fórmula nueva basada en paquete base + dimensione + add-ons.
- **[ ] Reemplazar `[EMPRESA A DEFINIR]` por el nombre comercial del MSSP** cuando se defina (5 ocurrencias en la página: hero, footer, JSON-LD, disclaimer, modal).
- **[ ] Confirmar precios finales del cotizador** cuando se consolide la sección 5 del catálogo (precios actuales son preliminares según el propio catálogo v4).
- **[ ] Ofuscar la fórmula del cotizador:** La lógica de precios sigue visible en el JS del frontend. Mover el cálculo a un endpoint backend o, mínimo, ofuscarlo.
- **[ ] Definir destino real del formulario de cotización:** `handleQuoteSubmit` solo abre el modal. Decidir entre Formspree, endpoint propio, mailto: o webhook a CRM.
- **[ ] Conectar o retirar la sección "Consola NOC/SOC en vivo":** Los datos de `Chart.js` son hardcoded. Cuando se publique, conectar a endpoint real o eliminar.
- **[ ] Agregar sección de casos de éxito / logos de clientes:** Incluir 3-4 logos por sector (Aviación, Aeropuertos, Concesionarios).
- **[ ] Agregar CTAs intermedios a WhatsApp:** Botón "Te llamamos en 15 min" -> `https://wa.me/525555145729`.
- **[ ] Migrar Tailwind CDN a build:** Migrar a `tailwind.config.js` + build con purge.
- **[ ] Validación de input tel con pattern:** Añadir `pattern="[0-9 +\-()]{10,}"`.
- **[ ] Accesibilidad de los toggles del cotizador:** Agregar `aria-pressed` y `role="switch"` en los 4 add-ons y radios de paquetes.
- **[ ] Glosario / normalización de términos:** Hoy mezcla español e inglés (MDR, MAB, EDR, CSV...). Definir política: español excepto nombres de productos.
- **[x] Pruebas visuales finales con Playwright/screenshot:** Validar render de las nuevas secciones `paquetes` y `cobertura` con y sin dark mode, y el comportamiento del cotizador con diferentes paquetes y add-ons. Capturas `light` y `dark` generadas en `/tmp/servicios_full.png` y `/tmp/servicios_dark.png` muestran render correcto de las 11 secciones clave.
- **[x] Refactor de tono comercial (12/oct/2026):** Eliminadas todas las menciones regulatorias explicitas de la página `servicios/`. Hero, widget, "Cómo trabajamos" (antes ciclo audit-to-remediation), stack 8, paquetes B/S/G, comparativa de capacidades (antes cobertura 7.1-7.13), cumplimiento (antes regulatorio), footer, modal, SEO, JSON-LD y menú reescritos sin AFAC/CO-SA/UVA/MSSP/[EMPRESA A DEFINIR]/CST/numeral XIII/Cláusula 7.x/Global Lynx. HTML válido (0 errores). Capturas v2 en `/tmp/servicios_v2_light.png` y `/tmp/servicios_v2_dark.png`.
- **[x] Refuerzo del modelo de arrendamiento (12/oct/2026):** Nueva sección `#arrendamiento` con 4 cards (Servidores de AD/Proxmox, Equipamiento de red, Cableado estructurado, Mesa de ayuda + garantía) + nota sobre cotización caso por caso + CTA a `#cotizador`. Card Stack 4 renombrado a "NPS con 802.1X + MAB" con bullets que distinguen 802.1X (EAP-TLS para PCs/dominio) vs MAB (IoT, impresoras, APs, VoIP). Nueva fila "Servidores de AD arrendados" en la tabla de capacidades con check en los 3 tiers (Bronze/Silver/Gold) y tooltips diferenciados por nivel. Footer actualizado con ancla `#arrendamiento`. Meta description y JSON-LD `Service` actualizados para mencionar arrendamiento. HTML válido (0 errores). Capturas v3 en `/tmp/servicios_v3_light.png` y `/tmp/servicios_v3_dark.png`. Zooms: `/tmp/zoom_arrendamiento_*.png`, `/tmp/zoom_card_nps_*.png`, `/tmp/zoom_tabla_*.png`.
- **[ ] Decisión sobre la sección `#noc-soc` (consola de telemetría):** Tras el refactor comercial, queda una sección con "Visibilidad Total en Tiempo Real" + dashboard con datos hardcoded. Decidir: (a) conectar a endpoint real con métricas del servicio, (b) eliminar antes de publicación, o (c) reemplazar por mockup estático más neutro. Si se conserva, validar que no rompa el tono comercial.
- **[ ] Definir si GlobalIncom aparece como "operador" del servicio:** Asumí que GlobalIncom sí aparece como marca comercial (footer ahora dice "Operado por GlobalIncom"). Confirmar si esto es correcto o si se debe usar un genérico ("Servicios Administrados AeroRed", "Servicio Administrado de Ciberseguridad", etc.).


---

### Refinamiento del cotizador público (a partir de Excel comercial - 11/sep/2026)

**Contexto:** El Excel `_privado/centro_costos_servicios_administrados.xlsx` es una
herramienta interna de PLANIFICACION comercial para que el area comercial pueda
visualizar la estructura de costos y proponer mejoras al cotizador publico.
NO esta conectado con la aplicacion, NO modifica el sitio, NO es codigo fuente
del proyecto. Es solo un documento de trabajo para refinar el cotizador.

**Estado actual del cotizador publico:**
- Cotiza por `endpoints` como bloque unico (multiplicador global).
- Cotiza por `servidores` como bloque unico.
- Cotiza por `sites` como bloque unico.
- Cotiza por 6 modulos (NOC, FW, AD, SOC, VoIP, WiFi/PAM) con multiplicador simple.

**Refinamientos identificados por el area comercial que el Excel ayudara a modelar:**

- **[ ] Segmentar `endpoints` en 3 tiers:**
  - **Basico**: Solo LIC (licencia de agente sin monitoreo gestionado).
  - **MDR Essentials**: LIC + monitoreo + ticket automatico (sin gestion activa).
  - **MDR Complete**: LIC + monitoreo + gestion activa + reporte ejecutivo.
  - Hoy el cotizador cobra lo mismo para los 3, lo cual es incorrecto comercialmente.

- **[ ] Segmentar `servidores` en tiers similares:** Basico / Managed / Enterprise.

- **[ ] Segmentar modulos con sub-opciones:**
  - **NOC**: Basico (alertas), Estándar (alertas + tickets), Premium (alertas + tickets + reportes mensuales).
  - **SOC**: Monitoreo, Deteccion y respuesta, Threat hunting continuo.
  - **AD**: Solo sincronizacion, +MFA, +Identity Protection completo.
  - **VoIP**: Solo troncales, +IVR, +Call center completo.
  - **WiFi/PAM**: WiFi solo, PAM solo, ambos.

- **[ ] Agregar servicios transversales que hoy no estan:**
  - **Backup gestionado** (Veeam / Acronis).
  - **Microsoft 365 / Google Workspace gestionado**.
  - **Compliance pack** (nom-151 + iso 27001 + co-sa-17.18/24 combinados).
  - **Mesa de ayuda bilingue** (espanol + ingles).
  - **Capacitacion y awareness** para empleados del cliente.

- **[ ] Definir politica de descuentos por compromiso:**
  - Contrato anual: descuento -5%.
  - Contrato 3 anos: descuento -10%.
  - Pago anticipado anual: descuento -3% adicional.
  - Hoy ninguno de estos se refleja en el cotizador.

- **[ ] Agregar el concepto de "setup inicial" (CAPEX inicial):**
  - Hoy todo se cobra mensual (OPEX puro).
  - Algunos proyectos requieren inversion inicial grande (firewall dedicado, rack, implementacion).
  - El cotizador deberia permitir desglosar CAPEX + OPEX.

**Workflow propuesto (futuro):**
1. El area comercial propone tiers/segmentos en el Excel.
2. Cline valida que el modelo de costos cuadre.
3. Cline implementa los cambios en el cotizador JS de `servicios/index.html`.
4. Se actualiza la Hoja 6 del Excel con la nueva formula.
5. Se hace commit + push con la nueva version.

**Decisiones pendientes (preguntar a Ernesto):**
- ¿Que tiers especificos quiere para cada modulo?
- ¿Cuales son los multiplicadores comerciales de cada tier?
- ¿Como se llaman comercialmente los tiers (Basico/Standard/Premium vs Lite/Pro/Enterprise)?
