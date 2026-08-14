# GlobalIncom - Sitio Web Corporativo

Este repositorio contiene el código fuente del sitio web corporativo de GlobalIncom, una Single Page Application (SPA) desarrollada con HTML, Tailwind CSS y JavaScript puro. El sitio presenta las soluciones de la empresa en infraestructura, ciberseguridad, normatividad aeronáutica y gobierno de TI.

Para ver el sitio en producción, visita [https://globalincom.com.mx](https://globalincom.com.mx).

También incluye subproyectos corporativos aislados, como el portal de vCards digitales ubicado en `vcard/demo/`, pensado como plantilla genérica para publicar tarjetas de presentación móviles por colaborador con descarga de contacto, QR y cambio de tema. Actualmente integra 6 plantillas visuales verticales (`Aura`, `Executive`, `Focus`, `Bold`, `Ultra Minimal`, `Tech Grid`) con persistencia de estilo en `localStorage`.

Además se incluye una tarjeta final publicada para colaborador en `vcard/sergio-huerta/`, optimizada para uso directo (layout `Executive` por defecto y controles de demo simplificados).

Actualización reciente (jun/2026): se refinó el contenido de la sección de Normatividad Aeronáutica (4 fases más generales, mejora de redacción en ciclos de implementación) y se añadieron enlaces externos directos para normas y estándares aplicados.

---

## ➤ Tecnologías y Características

-   **Frontend:**
    -   **HTML5:** Estructura semántica y moderna.
    -   **Tailwind CSS:** Diseño responsivo y moderno, cargado a través de CDN.
    -   **JavaScript (Vanilla):** Lógica de la aplicación, incluyendo el enrutador SPA y componentes interactivos, sin dependencias de frameworks.

-   **Características Principales:**
    -   **Single Page Application (SPA):** Enrutador personalizado mediante "hash routing" (`/#seccion`) para una navegación fluida sin recargar la página.
    -   **Modo Oscuro:** Soporte completo de tema claro/oscuro con persistencia en `localStorage`.
    -   **Optimización SEO:**
        -   Meta Tags (Description, Keywords, Canonical).
        -   Open Graph y Twitter Cards para previews en redes sociales.
        -   Datos Estructurados (JSON-LD) para `Organization`, `LocalBusiness` y `WebSite`.
        -   Archivos `robots.txt` y `sitemap.xml` para guiar a los motores de búsqueda.
    -   **Rendimiento:**
        -   Implementación de `loading="lazy"` en todas las imágenes para carga diferida.
        -   Optimización de URLs de imágenes de Unsplash para usar el formato WebP.
    -   **Accesibilidad (A11y):** Atributos ARIA en componentes de navegación (menús desplegables) para mejorar la experiencia con lectores de pantalla.
    -   **Componentes Interactivos:** Sistema de modales para mostrar infografías (`cableado.html`, `seguridad.html`) y videos.
    -   **Analítica:** Integración con Google Tag Manager y Microsoft Clarity para el seguimiento del comportamiento del usuario.

---

## ➤ Estructura del Repositorio

-   `index.html`: El archivo principal que contiene toda la estructura de la SPA.
-   `presenta.html` / `cableado.html` / `seguridad.html`: Contenido informativo (presentaciones, infografías) que se carga en modales.
-   `mexicana.html`: Documento estratégico de arquitectura de defensa y continuidad operativa para Mexicana de Aviación. Incluye análisis de Sophos MDR, ManageEngine Suite y Tenable.
-   `xdr.html`: Análisis comparativo de arquitecturas XDR/EDR (Sophos vs CrowdStrike vs Legacy). Documento técnico para evaluación de soluciones de ciberseguridad.
-   `vcard/demo/`: Plantilla genérica de vCard digital para colaboradores, con perfil dinámico, descarga de `.vcf`, QR de acceso y modo claro/oscuro.
    -   Selector de estilos con 6 layouts verticales de presentación.
    -   Botón rápido "Estilo" para alternar plantilla en tiempo real.
    -   Persistencia de plantilla y tema en `localStorage`.
-   `vcard/sergio-huerta/`: Tarjeta final de colaborador para despliegue, con URL pública y datos de contacto listos para compartir.
    -   Incluye retrato final en `vcard/assets/images/SergioHuerta2_cropped.jpg` con ajuste de encuadre por zoom suave.
-   `CAMBIOS.txt`: Registro cronológico y detallado de todas las modificaciones y nuevas características implementadas.
-   `CHANGELOG.md`: Changelog estructurado con todas las mejoras, nuevas características y correcciones.
-   `TODO.md`: Lista de mejoras técnicas y de rendimiento pendientes.
-   `robots.txt`: Directivas para los crawlers de los motores de búsqueda.
-   `sitemap.xml`: Mapa del sitio para ayudar a la indexación.
-   `/firmas/`: Generador de firmas de correo (HTML + JS).
-   `/img/`: Contiene imágenes locales como el fondo del hero y el SVG animado.
-   `/brands/`: Contiene los logos de los partners tecnológicos.
