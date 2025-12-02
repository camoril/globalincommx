# Bytel - Sitio Web Corporativo

Este repositorio contiene el código fuente del sitio web corporativo de Bytel, una Single Page Application (SPA) desarrollada con HTML, Tailwind CSS y JavaScript puro. El sitio presenta las soluciones de la empresa en infraestructura de telecomunicaciones, ciberseguridad, normatividad aeronáutica y consultoría de TI.

Para ver el sitio en producción, visita [https://bytel.com.mx](https://bytel.com.mx).

---

## ➤ Tecnologías y Características

-   **Frontend:**
    -   **HTML5:** Estructura semántica y moderna.
    -   **Tailwind CSS:** Diseño responsivo y moderno, cargado a través de CDN.
    -   **JavaScript (Vanilla):** Lógica de la aplicación, incluyendo el enrutador SPA y componentes interactivos, sin dependencias de frameworks.

-   **Características Principales:**
    -   **Single Page Application (SPA):** Enrutador personalizado mediante "hash routing" (`/#seccion`) para una navegación fluida sin recargar la página.
    -   **Modo Oscuro:** Soporte completo de tema claro/oscuro con persistencia en `localStorage`.
    -   **Diseño de Marca:**
        -   Color principal: Verde (`#88B200`) característico de Bytel.
        -   Gradientes oscuros con acentos verdes para CTAs y elementos destacados.
    -   **Optimización SEO:**
        -   Meta Tags (Description, Keywords, Canonical).
        -   Open Graph y Twitter Cards para previews en redes sociales.
        -   Datos Estructurados (JSON-LD) para `Organization`, `LocalBusiness` y `WebSite`.
        -   Archivos `robots.txt` y `sitemap.xml` para guiar a los motores de búsqueda.
    -   **Rendimiento:**
        -   Implementación de `loading="lazy"` en todas las imágenes para carga diferida.
        -   Optimización de imágenes para tiempos de carga rápidos.
    -   **Accesibilidad (A11y):** Atributos ARIA en componentes de navegación para mejorar la experiencia con lectores de pantalla.
    -   **Componentes Interactivos:** Sistema de modales para mostrar información detallada de servicios y videos.
    -   **Sección de Financiamiento:** Diseño especial con gradiente rojo, patrón decorativo y badge con efecto backdrop-blur.

---

## ➤ Estructura del Repositorio

-   `index.html`: El archivo principal que contiene toda la estructura de la SPA.
-   `CAMBIOS.txt`: Registro cronológico y detallado de todas las modificaciones y nuevas características implementadas.
-   `TODO.md`: Lista de mejoras técnicas y de rendimiento pendientes.
-   `robots.txt`: Directivas para los crawlers de los motores de búsqueda.
-   `sitemap.xml`: Mapa del sitio para ayudar a la indexación.
-   `/img/`: Contiene imágenes locales como logos, fondos y recursos gráficos.
-   `/brands/`: Contiene los logos de los partners tecnológicos de Bytel.

## ➤ Servicios Destacados

El sitio presenta cuatro áreas principales de servicio:

1. **Infraestructura de Telecomunicaciones:** Diseño e implementación de soluciones de conectividad empresarial.
2. **Ciberseguridad:** Protección integral de activos digitales y cumplimiento normativo.
3. **Normatividad Aeronáutica:** Consultoría especializada para cumplimiento de estándares aeronáuticos.
4. **Consultoría de TI:** Asesoría estratégica para transformación digital y gobierno de TI.

## ➤ Contacto

-   **Sitio Web:** [bytel.com.mx](https://bytel.com.mx)
-   **Email:** contacto@bytel.com.mx
