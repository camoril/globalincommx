# Changelog - GlobalIncom

Registro de cambios implementados en el sitio web de GlobalIncom.

**Período:** 28/nov/2025 - 11/sep/2026
**Última actualización:** 11/sep/2026

---

### Refactor de identidad visual en /servicios/ (11 de septiembre de 2026)

- **Feature:** Se creó la página dedicada `servicios/index.html` para mostrar la oferta de Servicios Administrados de TI y Ciberseguridad (NOC, SOC, redes LAN-to-LAN, mesa de ayuda 24/7).
- **Refactor:** Se reemplazó la paleta inventada (`gi-navy`/`gi-orange`/`gi-blue`) por la paleta canónica del sitio público (`brand-dark`/`brand-primary`/`brand-neutral`/`brand-light`) basada en `#E31B23`, `#000000`, `#A1A1A4` y `#F8F9FA`.
- **Refactor:** Se adoptó la tipografía dual Inter + Montserrat (esta última para headings) alineada con `index.html`.
- **Refactor:** Se migraron los 24 íconos FontAwesome a Lucide (mismo set que el resto del sitio).
- **Feature:** Se agregó el `<head>` completo con SEO meta (description, keywords, canonical), Open Graph, Twitter Cards, favicon SVG con los 3 círculos rojos, Google Analytics (`G-FFF66HX4FX`), Google Tag Manager (`GTM-WQ4XW6DC`) y Microsoft Clarity (`rvviylo106`).
- **Feature:** Se agregaron tres bloques JSON-LD: `LocalBusiness`, `WebSite` y `Service`.
- **Feature:** Se reescribió el header con el patrón del sitio: top utility bar negra, logo SVG "Global**Incom**", dropdown Soluciones, link activo "Servicios Administrados", CTA `btn-primary` con gradiente rojo, botón de cambio de tema (dark/light) y menú móvil colapsable con cierre automático al hacer clic en un enlace.
- **Feature:** Se agregó soporte de dark mode toggleable (clase `dark` + persistencia en `localStorage` + lectura de `prefers-color-scheme`), idéntico al patrón de `nacional.html`.
- **Feature:** Se mejoró la accesibilidad del modal de éxito: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, cierre con tecla `Esc` y soporte dark mode.
- **Tweak:** Se reemplazaron los colores hardcodeados en `Chart.js` (`#FF5B00`, `#0066CC`) por la paleta de marca.
- **Tweak:** Se inicializó `lucide.createIcons()` al final del body para renderizar los 71 íconos migrados.

### Fixed - Modo oscuro completo (2026-09-11)
- **Hero gradient**: `via-white` ahora es `dark:via-gray-900` (antes quedaba blanco en medio del hero oscuro).
- **20 cards** `bg-white` ahora tienen `dark:bg-gray-800` (módulos, arquitectura, cotizador, modal).
- **2 contenedores** `bg-slate-50` ahora tienen `dark:bg-gray-900`.
- **9 textos** `text-gray-500` ahora tienen `dark:text-gray-400` (suman legibilidad).
- **3 textos** `text-brand-dark` (títulos de cards en body) ahora tienen `dark:text-white`.
- **0 textos** `text-gray-900` sin dark: en body (todos ya estaban correctos).
- **3 overlays** `bg-white/10` y `bg-white/20` quedan sin dark: (son decorativos sobre fondo rojo, se ven bien en ambos modos).
- **Chart.js**: ya tenía colores oscuros hardcoded (slate-800 grid + slate-500 labels), no requirió cambios.
- Validación visual: 2 screenshots completos en `?theme=dark` (1280×8000) confirman consistencia total.

### Added - Centro de costos privado (2026-09-11)
- **Estructura**: Carpeta `_privado/` creada y agregada a `.gitignore` (junto al `.gitignore` raíz del repo).
- **Archivo**: `_privado/centro_costos_servicios_administrados.csv` con 6 secciones (variables base, módulos con márgenes, descuentos por volumen, proyecciones por tipo de cliente, variables faltantes recomendadas, y la fórmula actual del cotizador para referencia).
- **Decisión consciente**: el JS del cotizador NO consume este CSV (sería publicar centro de costos). El CSV es solo para uso interno/operativo.
- **117 líneas**, comillas balanceadas, abre correctamente en Excel/LibreOffice.
- **Próxima iteración sugerida**: convertir el CSV en un script Python que calcule el desglose de costo real por cotización.

- **Tweak:** Se eliminaron las tildes/acentos en selectores y atributos para evitar problemas de encoding en `sed`.

### Rework de copy para sector gobierno + paraestatal (11 de septiembre de 2026)

### Added - Centro de costos en Excel con formulas vivas (2026-09-11)
- **Archivo**: `_privado/centro_costos_servicios_administrados.xlsx` (NO se sube a git). 8 hojas, formato rico, formulas vivas.
- **Script generador**: `_privado/scripts/generar_excel.py` para regenerar el Excel desde codigo (454 lineas, openpyxl).
- **Hojas del Excel**:
  - `Portada`: indice visual con leyenda de colores.
  - `1-Variables`: 4 variables base con celdas amarillas editables (tu_costo).
  - `2-Modulos`: 6 modulos con desglose de licencia + horas + infra + overhead + margen. 12 columnas.
  - `3-Descuentos`: 5 rangos de descuento por volumen.
  - `4-Proyecciones`: 6 tipos de cliente con cotizacion tipica.
  - `5-Recomendaciones`: 5 variables que faltan en el cotizador publico.
  - `6-Formula`: 5 pasos de la formula JS del cotizador.
  - `7-Calculadora`: Calculadora interactiva con formulas vivas (5 formulas). Inputs en amarillo, calculos en verde.
- **Validado**: LibreOffice evalua las formulas correctamente. Subtotal base = $14,900 MXN con valores por defecto (40 endpoints, 5 servidores, 1 site). Contrato anual = $178,800 MXN.
- **Decision consciente**: el JS del cotizador publico NO consume este Excel (seria publicar centro de costos). El Excel es solo para uso interno/operativo.
- **Estilos**: paleta GlobalIncom (rojo #E31B23, negro, gris claro), formato moneda MXN, porcentajes, zebra striping, paneles congelados, bordes.
- **Migrado desde CSV**: el CSV anterior fue reemplazado por Excel porque el formato plano limitaba tablas multiples y formulas.


- **Tweak:** Badge del hero: "Modelo MSP / MSSP" → "Cumplimiento CO-SA-17.18/24 · NOM-151 · ISO 27001" (ancla el H1 en regulación, no en buzzwords).
- **Tweak:** H1 del hero: "Tu Infraestructura Gestionada 24/7" → "Cumplir con la normatividad TI ya no requiere operar tu propio NOC / sin sacrificar la continuidad 24/7/365" (dolor regulatorio, no técnico).
- **Tweak:** Subtitulo del hero reescrito con énfasis en bitácora auditable, SLAs contractuales, reportes ejecutivos mensuales para el Órgano Interno de Control y la ASF.
- **Tweak:** Los 4 bullets del hero pasaron de "feature/feature/feature/feature" a pares "dolor → solución" con subtexto explicativo (ej. "Bitácora auditable 24/7/365 / Cada evento queda registrado para el OIC").
- **Tweak:** CTAs del hero: "Cotizar Plan Modular" / "¿Cómo Funciona LAN-to-LAN?" → "Armar cotización con mi presupuesto" / "Ver caso de cumplimiento normativo".
- **Tweak:** Sección `arquitectura` (3 pasos): títulos reescritos con verbos directos ("Conectamos tu sede en 48 h" / "Asumimos la operación diaria" / "Bloqueamos amenazas y auditamos") y bullets más concretos.
- **Tweak:** Sección `modulos`: subtítulo pasa de "Oferta Modular Integrada" a "Oferta Modular Auditada" y agrega mención explícita de bitácora auditable.
- **Tweak:** Sección `cumplimiento`: las 4 tarjetas ahora mencionan regulación específica mexicana (CO-SA-17.18/24 AFAC, NOM-151, ANSI/TIA, NIST CSF) y se agrega párrafo introductorio sobre evidencia documental para OIC/ASF.
- **Limitación intencional:** No se agregaron métricas duras propias (tickets/mes, años promedio de experiencia, % resolución en primer contacto) porque el cliente indicó no tener datos exactos; quedó registrado en TODO.md para cuando estén disponibles.

### Corrección visual de botones e íconos Lucide sin tamaño (11 de septiembre de 2026)

- **Fix:** Hero CTA "Armar cotización con mi presupuesto": ícono `arrow-right` ahora tiene `w-5 h-5` (antes salía gigante y desalineado). Botón ahora usa `inline-flex items-center justify-center gap-2` en vez de `text-center`.
- **Fix:** Hero CTA secundario "Ver caso de cumplimiento normativo": mismo tratamiento (`inline-flex items-center justify-center`).
- **Fix:** Badge "Túnel Seguro LAN-to-LAN" en topología: ícono `lock` ahora con `w-3 h-3` y badge con `inline-flex items-center gap-1.5` (antes el candado salía arriba del texto).
- **Fix:** Botón submit "Solicitar Diagnóstico Gratuito": ícono `send` con `w-4 h-4`, agregada `inline-flex items-center justify-center gap-2`, eliminada redundancia `hover:bg-brand-primary` y agregada `btn-primary` con gradiente consistente.
- **Fix:** 6 íconos de módulos (network, shield, users, bug-off, phone-call, wifi) ahora con `w-7 h-7` (estaban vacíos y se renderizaban a tamaño default del navegador).
- **Fix:** 2 íconos de topología (building, server) con `w-6 h-6`.
- **Tweak:** Modal "Entendido": ahora con `inline-flex items-center justify-center gap-2`, ícono `check w-4 h-4`, sombra y transición consistentes.
- **Tweak:** Botón del mobile menu: ahora `inline-flex items-center justify-center w-full` (antes era `block` con `text-center`).
- **Tweak:** Botón del header desktop: `items-center` reordenado antes del `gap-2` para seguir orden canónico de Tailwind.
- **Resultado:** 0 íconos Lucide sin tamaño (`<i data-lucide="X"></i>`) en todo el archivo, 10 botones con `inline-flex items-center` correcto.

---

### Mejoras en vCard2 - Catálogo unificado y URL dinámicas (21 de agosto de 2026)

- Tweak: Se eliminó el botón "Disponible" de la esquina superior derecha para una presentación más limpia.
- Tweak: La URL pública del perfil ahora se construye dinámicamente usando `window.location.origin` + `window.location.pathname`, funcionando correctamente en cualquier dominio o ruta.
- Tweak: Se actualizó el catálogo de empleados en `vcard/vcard2/index.html` con la información real de Sergio Huerta y Ricardo Rangel (nombres completos, títulos, teléfonos y fotos).
- Tweak: Se eliminó el empleado por defecto. Ahora, al acceder sin el parámetro `?employee=`, se muestra información genérica indicando que se debe seleccionar un empleado específico.
- Tweak: Los botones de acción (Guardar, Compartir) ahora se deshabilitan cuando no hay un empleado seleccionado.

---

### vCard final de Sergio Huerta y refinamiento de plantillas (13 de agosto de 2026)

- Feature: Se creó la tarjeta final de colaborador en `vcard/sergio-huerta/index.html` con datos públicos de contacto, URL canónica y descarga de vCard.
- Tweak: Se ajustó el layout `Executive` como opción predeterminada para la tarjeta final.
- Tweak: Se removieron controles superiores de demo (chip y botones de estilo/tema) para dejar una presentación final más limpia.
- Tweak: Se incrementó el tamaño de la foto de perfil para aprovechar mejor el espacio superior en la tarjeta final.
- Tweak: Se actualizó la fotografía final a `vcard/assets/images/SergioHuerta2_cropped.jpg` y se aplicó un zoom suave global para mejorar el encuadre.
- Tweak: El subproyecto `vcard/demo/index.html` quedó anonimizado como plantilla genérica sin datos personales reales.

---

### Ajustes de contenido en Normatividad Aeronáutica (05 de junio de 2026)

- Tweak: El distintivo rojo "Circular CO-SA-17.18/24" en la cabecera AFAC ahora abre el PDF oficial en una pestaña nueva.
- Tweak: La sección "Fases de Evaluación Normativa" se simplificó de 6 a 4 etapas con redacción más general.
- Tweak: Se eliminó la redundancia de la palabra "FASE" en los títulos de las tarjetas, conservando la numeración visual.
- Tweak: La sección "Ciclos Típicos de Implementación" fue reescrita con texto más claro y explicativo.
- Tweak: Se agregaron enlaces externos a "Normas y Estándares Aplicados" (ISO/IEC 27001, NIST, IEC 62443, OACI Anexo 17 y LFPDPPP).

---

### Plantillas extendidas para portal vCard (25 de mayo de 2026)

- Feature: Se amplió el selector de estilos en `vcard/demo/index.html` con 6 plantillas verticales (`Aura`, `Executive`, `Focus`, `Bold`, `Ultra Minimal`, `Tech Grid`).
- Feature: Se agregó botón rápido "Estilo" dentro del header de la tarjeta para iterar layouts sin abrir el selector.
- Tweak: Cada plantilla ahora redefine composición visual (hero, avatar, densidad, bloques de acción, paneles y QR) para ofrecer variantes realmente distintas.
- Tweak: Se mantiene la paleta corporativa base y la compatibilidad con tema claro/oscuro.
- Tweak: Persistencia de layout seleccionada en `localStorage` con la llave `globalincom-vcard-layout`.

---

### Portal de vCards digitales para colaboradores (11 de mayo de 2026)

- Feature: Se añadió el subproyecto `vcard/demo/` como tarjeta de presentación digital móvil para colaboradores.
- Feature: La plantilla incorpora perfil dinámico, descarga de contactos en `.vcf`, QR de acceso y acciones rápidas de llamada, WhatsApp y correo.
- Feature: Se agregó selector de tema claro/oscuro con persistencia en `localStorage`.
- Tweak: Se ajustó la paleta a rojo corporativo y se alineó la tipografía y fondos con el lenguaje visual de Global Incom.
- Tweak: Se reforzó la interacción con animaciones, ripple táctil y tilt suave de la tarjeta.

---

### Restauración de sección AFAC y aeronáutica (18 de abril de 2026)

- Fix: Se restauró la visibilidad de la sección de Normatividad Aeronáutica dentro de la SPA.
- Fix: Se reactivaron los accesos desde navegación principal, menú móvil y tarjeta de inicio.
- Fix: Se recuperó la página interna de AFAC para navegación normal por hash.

---

### Generador de firmas de correo (10 de febrero de 2026)

- Feature: Se agrego el generador de firmas en `/firmas/` con vista previa, copia de firma y copia de HTML.
- Feature: Campos opcionales para telefono fijo y link PGP.
- Feature: Generacion automatica del link de WhatsApp con codigo de pais y numero.

---

### � Integración de Documentos Estratégicos en SPA (31 de diciembre de 2025)

- **Feature: Botón "Análisis XDR/EDR" en Sección Ciberseguridad**
  - Agregado botón interactivo debajo del item "Monitoreo y SIEM" en la página de Ciberseguridad Lógica.
  - Al hacer clic, abre el documento `xdr.html` en modal con título "Análisis XDR/EDR".
  - Ícono de rayo (zap) con estilo azul para diferenciación visual.
  - Implementado con ancho completo y alineación consistente con el resto de la interfaz.

- **Feature: Enlace "Arquitectura Mexicana" en Menú Empleados**
  - Agregado enlace en el menú oculto de empleados (both desktop y mobile).
  - Ubicado entre "Calculadora IPv6" y "Cerrar Sesión" con separador visual.
  - Al hacer clic, abre `mexicana.html` en modal con título "Arquitectura de Defensa - Mexicana".
  - Ícono de maletín (briefcase) para identificación rápida.
  - En mobile, automáticamente cierra el menú después de activar el modal.

### �🆕 Nuevos Documentos de Análisis Estratégico (31 de diciembre de 2025)

- **Feature: `mexicana.html` - Arquitectura de Defensa y Continuidad Operativa**
  - Nuevo documento técnico interactivo para Mexicana de Aviación.
  - Arquitectura de resiliencia integrada en tres fases: Mitigación (Sophos MDR), Visibilidad (ManageEngine Suite) y Cumplimiento (Tenable).
  - Incluye tabs navegables para: Visión General, Sophos MDR Complete, ManageEngine Suite, Sinergia con Tenable y Visión Completa del Ecosistema.
  - Diseño responsivo con Tailwind CSS y componentes interactivos con JavaScript vanilla.
  - Incorpora tablas comparativas, planes de implementación y requisitos de infraestructura.

- **Feature: `xdr.html` - Análisis Comparativo de Arquitecturas XDR/EDR**
  - Nuevo documento de análisis estratégico que evalúa modelos de ciberseguridad.
  - Comparativa entre: Protección Tradicional (Legacy EPP), EDR/XDR Puro (CrowdStrike Falcon) y Seguridad Sincronizada (Sophos Intercept X).
  - Incluye tablas técnicas detalladas, análisis de arquitectura de próxima generación y veredicto estratégico.
  - Diseño profesional con gradientes, análisis boxes y tipografía especializada (Urbanist + Inter).
  - Documentación exhaustiva sobre criterios técnicos, motores de detección y servicios MDR.

### 🚀 Mejoras (30 de diciembre de 2025)

- **Mejora de Contenido en `cableado.html`**
  - Se añadió una sección comparativa de tipos de Fibra Óptica (Multimodo OM1/OM4/OM5 y Monomodo OS2).
  - Se clarificó el origen del costo por hora en la calculadora de inversión, citando análisis de la industria.

- **CRITICAL FIX: Corrección de Error de Sintaxis HTML**
  - Se corrigió un error crítico de sintaxis HTML (`</div        </div>`) en la línea 1033 que causaba que las páginas de Consultoría y Servicios se mostraran vacías.
  - El tag malformado rompía la estructura del documento, causando que las secciones posteriores quedaran mal anidadas dentro de la sección de Ciberseguridad.
  - Este fix restaura la navegación correcta a todas las páginas del sitio.

- **Feature: Menú de Empleados Oculto**
  - Se implementó un menú oculto para empleados accesible haciendo click 5 veces en el logo de GlobalIncom.
  - Requiere contraseña para activación y persiste durante la sesión.
  - Incluye enlaces a: Webmail, cPanel, Calculadora IPv4, Calculadora IPv6.

- **Feature: Casos de Éxito Timeline**
  - Se añadió una sección de "Casos de Éxito" con diseño de línea de tiempo vertical.
  - Destaca proyectos importantes: Mexicana de Aviación, CAPUFE, Hospital Infantil de México.

- **Feature: Mesa de Servicio Dropdown**
  - Se convirtió el enlace único de "Mesa de Servicio" en un menú desplegable.
  - Ahora incluye dos portales: GlobalIncom y Mexicana de Aviación.

- **Fix: Visibilidad del Toggle de Tema**
  - Se corrigió la inicialización de los iconos de sol/luna en el botón de cambio de tema.
  - Los iconos ahora se muestran correctamente en ambos modos (claro/oscuro).

- **Sincronización de Tema en Modales (Dark Mode)**
  - Se implementó un método robusto para sincronizar el tema (claro/oscuro) entre la página principal y los modales (`nacional.html`, `seguridad.html`, etc.).
  - La página principal ahora pasa el tema activo como un parámetro en la URL (`?theme=dark`) al abrir un modal.
  - Los modales ahora priorizan este parámetro para garantizar una sincronización del 100%, eliminando cualquier inconsistencia.

- **Feature**: Se ha convertido el enlace "Mesa de Servicio" en un menú desplegable para alojar múltiples portales de clientes, manteniendo una barra de navegación limpia y escalable.
- **Feature**: Se añadió una sección de "Casos de Éxito" en la página de inicio con un diseño de línea de tiempo vertical para destacar los hitos importantes de la empresa.
- **Fix**: Se implementó una solución robusta para la sincronización del tema (claro/oscuro) entre la página principal y los modales que cargan contenido externo (`nacional.html`).
  - La función `openModal` en `index.html` ahora detecta el tema actual y lo pasa como un parámetro en la URL (`?theme=dark` o `?theme=light`).
  - Las páginas dentro de los modales (`nacional.html`) ahora priorizan este parámetro de URL para establecer su tema inicial, asegurando consistencia visual inmediata.
  - Esta solución reemplaza el método anterior que dependía únicamente de `localStorage` y no funcionaba de manera fiable con iframes.
- **Fix**: Se corrigió un problema de "flash of unstyled content" (FOUC) en `nacional.html` al mover el script de detección de tema al `<head>` del documento.
- **Feature**: Se añadió el modo oscuro a la página `nacional.html`.

## [1.0.0] - 2025-12-29
- **Feature**: Implementación inicial del sitio SPA.
- **Feature**: Secciones Home, Infraestructura, Ciberseguridad, Consultoría y Servicios.
- **Feature**: Router basado en Hash y navegación dinámica.
- **Feature**: Modo oscuro persistente con `localStorage`.
- **Feature**: Formulario de contacto con CAPTCHA lógico y envío AJAX.
- **Feature**: Componentes modales para iframes y video.

- **`nacional.html` - Corrección de Dark Mode**
  - Se mejoró el script de dark mode para que detecte la preferencia del sistema operativo (`prefers-color-scheme`) si no hay una selección previa en `localStorage`.
  - Esto asegura que el tema se sincronice correctamente desde la primera carga.

- **`nacional.html` - Implementación de Dark Mode**
  - Se implementó el modo oscuro para consistencia visual con el resto del sitio.
  - La página ahora sincroniza el tema (claro/oscuro) con la página principal usando `localStorage`.
  - Se agregó un botón de toggle (sol/luna) en una barra superior fija para cambiar de tema.
  - Se ajustaron todos los componentes visuales para ser compatibles con ambos temas.

---

### 📜 Historial de Cambios Anteriores

#### 29 de noviembre de 2025

- **`cableado.html` - Reparación de Iconos**
  - Se reemplazaron los iconos de Phosphor por SVG inline para mayor confiabilidad. (Commit: `b7bd365`)

- **`cableado.html` - Rediseño y Dark Mode**
  - Se aplicó el diseño visual y modo oscuro de `seguridad.html` para unificar la apariencia. (Commit: `2874849`)

- **Hero Section - Optimización de Animación SVG (Iteraciones 1-6)**
  - Se reemplazó el video estático por una animación SVG optimizada, mejorando el rendimiento y la estética. (Commits: `d7621f0` a `e08bc18`)

#### 28 de noviembre de 2025

- **`seguridad.html` - Limpieza de Diseño**
  - Se eliminó la cuadrícula de fondo para un diseño más limpio.

- **`seguridad.html` - Implementación de Dark Mode**
  - Se implementó el modo oscuro, sincronizado con `localStorage`.

- **`presenta.html` - Implementación de Dark Mode**
  - Se implementó el modo oscuro, sincronizado con `localStorage`.

- **General - Analytics y Comentarios**
  - Se implementó Microsoft Clarity para análisis de comportamiento.
  - Se tradujeron comentarios del código a español.

Fecha: 29/nov/2025 - 1:00 PM
AÑADIR BOTÓN MODAL DE CABLEADO EN index.html
- Añadido botón modal "Ver Infografía de Cableado" en página de Infraestructura (`index.html`)
- Ubicación: Sección "Infraestructura y Conectividad" (página-infra), líneas 589-595
- Funcionalidad: onclick="openModal('cableado.html', 'Infografía de Cableado')"
- Diseño: Botón rojo (#E31B23) con ícono de shield (SVG Lucide)
- Comportamiento: Abre modal con contenido de cableado.html en iframe
- Clases: bg-brand-primary, hover:bg-red-700, flex items-center gap-2
- (Commit: 4689859)

Fecha: 29/nov/2025 - 2:00 PM
IMPLEMENTACIÓN DE MEJORAS SEO - PRIORIDAD ALTA

Fecha: 29/nov/2025 - 2:30 PM
IMPLEMENTACIÓN DE OPTIMIZACIÓN DE IMÁGENES Y ACCESIBILIDAD

Archivos modificados:
  1. index.html - Añadidas 18+ instancias de lazy loading, ALTs mejorados, y URLs de Unsplash optimizadas (WebP, q=85).

DETALLES TÉCNICOS:

A. Lazy Loading (`loading="lazy"`):
   - Implementado en todas las etiquetas `<img>` del `index.html` para diferir la carga de imágenes fuera del viewport inicial.
   - Esto incluye el SVG animado del hero, la imagen de cableado estructurado, todos los logos de partners y las imágenes de Unsplash.

B. Atributos ALT Mejorados:
   - Se han revisado y mejorado los atributos `alt` para hacerlos más descriptivos y específicos, aumentando tanto el SEO como la accesibilidad.
   - Ejemplos:
     - `puntos-animados.svg`: "Animación interactiva de 6 puntos de conexión que representa la infraestructura de red conectada de GlobalIncom"
     - `cabling-management-1500x430.jpg`: "Infraestructura de cableado estructurado categoría 6A con rack organizado y gestión profesional de cables"
     - Logos de partners: Descripciones detalladas de cada marca y su rol (Cisco, Sophos, Fortinet, etc.)
     - Imágenes de Unsplash: Descripciones contextuales de cada imagen (SOC, Consultoría, Soporte Corporativo, Financiamiento).

C. Optimización de Imágenes de Unsplash:
   - Las URLs de Unsplash han sido modificadas para incluir parámetros de optimización:
     - `q=85`: Aumenta ligeramente la calidad de la imagen manteniendo un buen balance con el tamaño del archivo.
     - `fm=webp`: Solicita el formato WebP (más eficiente) para navegadores que lo soporten, con fallback automático al formato original para los no compatibles.

IMPACTO ESPERADO:
✓ Mejora significativa en la velocidad de carga de la página (LCP).
✓ Mayor puntuación en herramientas de rendimiento (PageSpeed Insights).
✓ Mejor experiencia de usuario, especialmente en conexiones lentas o dispositivos móviles.
✓ Mejora en accesibilidad para usuarios con lectores de pantalla.
✓ SEO mejorado gracias a los ALTs más descriptivos.

- (Commit: [PENDIENTE])



Archivos modificados/creados:
  1. index.html - Añadidas 26+ líneas de meta tags y JSON-LD
  2. robots.txt - Archivo nuevo (14 líneas)
  3. sitemap.xml - Archivo nuevo (77 líneas con 8 URLs)

DETALLES TÉCNICOS:

A. Meta Tags Implementados:
   - Meta Description: "Infraestructura TI, Ciberseguridad y Consultoría especializada..." (160 caracteres)
   - Meta Keywords: infraestructura TI, ciberseguridad, consultoría, cableado estructurado, etc.
   - Canonical Tag: <link rel="canonical" href="https://globalincom.com.mx/">
   - Robots Meta: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
   - Language Meta: Spanish
   - Revisit-after: 7 days

B. Open Graph Tags (Facebook/LinkedIn):
   - og:type: website
   - og:url: https://globalincom.com.mx/
   - og:title: GlobalIncom | Soluciones en Infraestructura, Seguridad y Gobierno TI
   - og:description: Infraestructura TI, Ciberseguridad y Consultoría especializada...
   - og:image: https://globalincom.com.mx/img/og-image.jpg
   - og:image:width: 1200, og:image:height: 630
   - og:locale: es_MX

C. Twitter Card Tags:
   - twitter:card: summary_large_image
   - twitter:title: GlobalIncom | Soluciones TI Integrales
   - twitter:description: Infraestructura, Ciberseguridad y Consultoría...
   - twitter:image: https://globalincom.com.mx/img/og-image.jpg

D. JSON-LD Structured Data (3 Schemas):
   - Organization Schema: name, url, logo, description, contactPoint
   - LocalBusiness Schema: name, image, description, address (Mexico), areaServed
   - WebSite Schema: url para integración con búsqueda de Google

E. Archivo robots.txt (Nuevo):
   User-agent: *
   Allow: /
   Disallow: /admin/, /.env, /node_modules/
   Sitemap: https://globalincom.com.mx/sitemap.xml
   Crawl-delay: 1

F. Archivo sitemap.xml (Nuevo):
   8 URLs con prioridades:
   - Página principal: priority 1.0
   - Infraestructura, Ciberseguridad, Consultoría, Servicios: priority 0.9
   - Normatividad Aeronáutica: priority 0.85
   - seguridad.html, cableado.html: priority 0.8
   - Privacidad: priority 0.5
   - Todos con: lastmod 2025-11-29, changefreq monthly (excepto privacy: yearly)

IMPACTO ESPERADO:
✓ Mejora en indexación de Google y otros buscadores
✓ Previews atractivos en redes sociales (Facebook, LinkedIn, Twitter)
✓ Posibles Rich Snippets y Featured Snippets
✓ Mayor CTR (Click-Through Rate) en resultados de búsqueda
✓ Mejor autoridad de dominio y crawleability
✓ Mejor UX en búsqueda móvil

PRÓXIMOS PASOS RECOMENDADOS:
1. Registrar sitio en Google Search Console y enviar sitemap
2. Registrar en Bing Webmaster Tools
3. Crear og-image.jpg (1200x630px) para redes sociales
4. Añadir lazy loading a imágenes (loading="lazy")
5. Considerar mejorar SPA routing para URLs limpias

- (Commit: 86ee4b0)


Fecha: 29/nov/2025 - 3:00 PM
IMPLEMENTACIÓN DE MEJORAS DE RENDIMIENTO Y ACCESIBILIDAD

Archivos modificados:
  1. index.html - Implementadas mejoras de precarga, `defer` de scripts y atributos ARIA.

DETALLES TÉCNICOS:

A. Precarga de Imagen del Hero (`preload`):
   - Se añadió `<link rel="preload" as="image" href="./img/corporate_commercial.jpg">` al `<head>`.
   - Esto indica al navegador que comience a descargar la imagen de fondo principal con alta prioridad, mejorando el LCP (Largest Contentful Paint).

B. Diferir Script de Tailwind (`defer`):
   - Se añadió el atributo `defer` al script de Tailwind CSS: `<script src="https://cdn.tailwindcss.com" defer></script>`.
   - Esto evita que el script de Tailwind bloquee el renderizado de la página, mejorando la velocidad de carga percibida. No se aplicó a Lucide para evitar errores de renderizado de íconos.

C. Accesibilidad ARIA en Menús:
   - Se añadió `aria-haspopup="true"` al botón del menú desplegable "Soluciones".
   - Se añadieron `aria-controls="mobile-menu"`, `aria-haspopup="true"` y `aria-expanded="false"` (dinámico) al botón del menú móvil.
   - Esto mejora la semántica y la navegación para usuarios con lectores de pantalla.

IMPACTO ESPERADO:
✓ Mejora en la velocidad de carga y la puntuación de rendimiento.
✓ Mejor experiencia para usuarios con tecnologías de asistencia.
✓ Se mantiene la integridad visual al no diferir scripts críticos.

- (Commit: [PENDIENTE])

Fecha: 29/nov/2025 - 2:45 PM
IMPLEMENTACIÓN DE MEJORAS DE ACCESIBILIDAD (ARIA) Y VALIDACIÓN DE FORMULARIO

Archivos modificados:
  1. index.html - Añadidos atributos ARIA al modal, y verificación de validación HTML5 en formulario de contacto.

DETALLES TÉCNICOS:

A. Accesibilidad ARIA en Modal (`#presentation-modal`):
   - Atributos `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"` y `aria-hidden="true"` (inicialmente) añadidos al elemento del modal.
   - Esto mejora la semántica del modal para tecnologías asistivas (lectores de pantalla), indicando su propósito y estado.

B. Validación de Formularios HTML5 (`#contactForm`):
   - Se verificó que los campos `nombre`, `email` y `mensaje` ya cuentan con el atributo `required`.
   - El campo `email` utiliza `type="email"`, lo que habilita la validación de formato nativa del navegador.
   - Esto asegura una validación básica de los datos de entrada antes del envío, mejorando la UX y la integridad de los datos.

IMPACTO ESPERADO:
✓ Mejora en la accesibilidad del sitio para usuarios con discapacidades.
✓ Experiencia de usuario más fluida en la interacción con modales y formularios.
✓ Reducción de errores de entrada y mejora en la calidad de los datos recibidos a través del formulario de contacto.

- (Commit: [PENDIENTE])

Fecha: 28/dic/2025 - 12:00 PM
ELIMINACIÓN DE ICONOS SOCIALES DEL FOOTER
- Se eliminaron los 3 iconos de redes sociales (GitHub, LinkedIn, PayPal) del footer según solicitud del usuario.
- El footer ahora solo contiene el logo con copyright y el enlace al aviso de privacidad.

Archivos modificados:
  1. index.html - Eliminada la sección de iconos sociales del footer.

DETALLES TÉCNICOS:

A. Footer simplificado:
   - Removida la div con clase "flex gap-4" que contenía los enlaces a redes sociales.
   - Mantenido el diseño responsive con flex-col md:flex-row.

IMPACTO ESPERADO:
✓ Diseño más limpio y minimalista en el footer.
✓ Eliminación de elementos no deseados por el usuario.

- (Commit: 4d3b16d)