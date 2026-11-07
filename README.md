# Armando Medina · Portafolio y hoja de vida

Sitio estático multipágina, en español e inglés, del portafolio y la hoja de vida de Armando Ricardo Medina Nieto, Product Manager Técnico | Product Owner. Se publica en **https://armandomedina.dev** con GitHub Pages.

HTML, CSS y JavaScript sin frameworks ni dependencias. Las páginas se generan con un script de Node a partir de los datos y de plantillas.

## Páginas y rutas

| Página | Español | Inglés |
|---|---|---|
| Inicio | `/` | `/en/` |
| Sobre mí | `/sobre-mi/` | `/en/about/` |
| Proyectos | `/proyectos/` | `/en/projects/` |
| Caso: Flowcol | `/proyectos/flowcol/` | `/en/projects/flowcol/` |
| Caso: Flow · Gravity Tunnel | `/proyectos/flow-gravity-tunnel/` | `/en/projects/flow-gravity-tunnel/` |
| Caso: Primer Paso | `/proyectos/primer-paso/` | `/en/projects/primer-paso/` |
| Experiencia | `/experiencia/` | `/en/experience/` |
| Contacto | `/contacto/` | `/en/contact/` |
| CV (ATS / PDF) | `/cv.html?lang=es#cv` | `/cv.html?lang=en#cv` |

Cada ruta es un archivo `index.html` real en su carpeta: se puede recargar o compartir sin errores 404. Rutas inexistentes muestran `404.html`.

**Enlaces antiguos** de la página única siguen funcionando y redirigen desde la portada: `/#en` → `/en/`, `/#hablemos` y `/#contacto` → `/contacto/`, `/#caso-flowcol` → `/proyectos/flowcol/`, `/#experiencia` → `/experiencia/`, etc.

## Estructura

```
cv-data.js              Datos de la hoja de vida y de los casos (ES/EN). Fuente única.
build.mjs               Genera todas las páginas, sitemap.xml y robots.txt.
src/
  i18n.mjs              Rutas y textos de interfaz en español e inglés.
  layouts/base.mjs      <head> con SEO por ruta, encabezado, contenido, recorrido y pie.
  components/           header.mjs, footer.mjs, ui.mjs (botones, chips, títulos), icons.mjs.
  pages/                home, about, projects, case, experience, contact, notfound.
  og.html               Plantilla de la imagen de vista previa (1200×630).
assets/site.css         Estilos compartidos (tokens, componentes, motion, responsive).
assets/site.js          Menú móvil, transiciones, filtro de experiencia, índice de casos, copiar.
cv.html                 Editor de la hoja de vida y vista ATS/PDF (#cv).
img/                    Ilustraciones (PNG originales y WebP para la web), foto, favicon y vistas previas.
tests/                  Pruebas de rutas (Node) y de accesibilidad (navegador).
docs/                   Propuesta del rediseño y auditoría de accesibilidad.
```

Las carpetas de rutas (`sobre-mi/`, `proyectos/`, `experiencia/`, `contacto/`, `en/`), `index.html`, `404.html`, `sitemap.xml` y `robots.txt` **se generan**: no se editan a mano.

## Cómo actualizar el sitio

1. Edita el contenido en `cv-data.js` (cargos, viñetas, casos, competencias) o los textos de interfaz en `src/i18n.mjs`.
2. Genera las páginas y pruébalas:
   ```bash
   node build.mjs
   ```
   ```bash
   node tests/rutas.mjs
   ```
3. Revisa en local:
   ```bash
   python3 -m http.server 8000
   ```
   y abre http://localhost:8000.
4. Haz commit y push a `main`; GitHub Pages publica en un minuto.

**Casos de estudio:** cada caso tiene ocho secciones posibles. Las que no tienen datos verificados (por ahora «Objetivos del producto» y «Aprendizajes») no se muestran. Para activarlas, completa `objectives` y `learnings` del proyecto en `cv-data.js` (cada elemento con `es` y `en`) y vuelve a generar. Los campos `todo` señalan la evidencia pendiente y nunca se publican.

## Navegación y motion

- **Encabezado persistente** en todas las páginas: AM. · Inicio · Sobre mí · Proyectos · Experiencia · Contacto · ES/EN · Hablemos. La página activa lleva `aria-current="page"`; en un caso de estudio, «Proyectos» se marca como sección actual.
- **ES/EN** lleva a la misma página en el otro idioma.
- **Recorrido:** «Anterior / Siguiente» al final de cada página; en los casos, «Caso anterior / Todos los proyectos / Siguiente caso».
- **Menú móvil (≤ 920 px):** panel a pantalla completa; el foco entra al menú, circula con Tab, flechas e Inicio/Fin; Escape cierra y devuelve el foco; el fondo queda inerte.
- **Transiciones entre páginas** con View Transitions entre documentos (~300 ms): el encabezado permanece y el contenido se desliza hacia adelante o hacia atrás según el recorrido. En navegadores sin soporte (Firefox) la navegación es normal.
- **Entradas** de títulos por palabras y del contenido en cascada; hover de 150–200 ms en tarjetas y botones; flotación suave del visual del hero.
- Con `prefers-reduced-motion` se desactivan todas las animaciones y transiciones.

## SEO

Cada página tiene título, descripción, `canonical`, `hreflang` ES/EN y vista previa Open Graph (`img/og-es.png`, `img/og-en.png`). `sitemap.xml` lista las 16 URL con sus alternativas de idioma.

**Imagen de vista previa:** para regenerarla tras cambiar `src/og.html`, con el servidor local en marcha:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot="$PWD/img/og-es.png" "http://localhost:8000/src/og.html"
```

(Para inglés, `og-en.png` y `?lang=en` al final de la URL.)

## Hoja de vida en PDF

`cv.html#cv` muestra el CV en una sola columna, con texto seleccionable y títulos estándar (apto para ATS). Versión completa (4 páginas A4) o resumida (2 páginas), en español o inglés:

- `cv.html?lang=es&version=completo#cv` · `cv.html?lang=es&version=resumen#cv`
- `cv.html?lang=en&version=completo#cv` · `cv.html?lang=en&version=resumen#cv`

Con `&print=1` se abre el cuadro de impresión para «Guardar como PDF». Sin `#cv`, `cv.html` es el editor con vista previa animada.

## Pruebas

- `node tests/rutas.mjs`: recorre todas las páginas generadas y comprueba enlaces internos, anclas, idioma de cada ruta, título, descripción única, `canonical`, `hreflang`, vista previa, página activa, sitemap y redirecciones de enlaces antiguos.
- `tests/accesibilidad.js`: pégalo en la consola del navegador en cualquier página. Comprueba contraste, tamaño de objetivos, texto alternativo, ids, enlace de salto, desbordamiento y el menú móvil. Ejecútalo en 320, 375, 390, 430, 768, 1024, 1440 y 1920 px.

## Dominio

`armandomedina.dev` se define en el archivo `CNAME`. DNS en Hostinger: registros `A` de `@` a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`; `AAAA` de `@` a `2606:50c0:8000::153` … `2606:50c0:8003::153`; `CNAME` de `www` a `rickyfreefly.github.io`. HTTPS forzado en la configuración de Pages.
