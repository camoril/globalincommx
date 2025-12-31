# Changelog - GlobalIncom

Registro de cambios implementados en el sitio web de GlobalIncom.

**Período:** 28/nov - 30/dic/2025
**Última actualización:** 30/dic/2025 - 12:15 PM

---

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