# Armando Medina · Portafolio y hoja de vida

Sitio estático (HTML, CSS y JavaScript sin dependencias) con el portafolio y la hoja de vida de Armando Ricardo Medina Nieto, Product Manager Técnico | Product Owner. Funciona en español e inglés.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Portafolio. «Ver CV completo» abre la hoja de vida en un panel; «Descargar CV en PDF» abre la versión imprimible. |
| `cv.html` | Hoja de vida. `cv.html#cv` es la versión para compartir e imprimir (ATS); sin `#cv`, es el editor con vista previa animada. |
| `cv-data.js` | **Fuente única de la hoja de vida en español e inglés.** La usan el panel del portafolio, la vista `#cv` y el editor. Los campos `todo` marcan evidencia pendiente y no se muestran. |
| `img/` | Ilustraciones y foto. |
| `tests/` | Pruebas de navegación y de accesibilidad que se ejecutan en la consola del navegador. |
| `docs/auditoria-accesibilidad.md` | Auditoría WCAG 2.2 AA: incidencias, correcciones, criterios de aceptación y limitaciones. |
| `PROMPTS-CHATGPT.md` | Prompts usados para generar las ilustraciones. |

Para cambiar un cargo, una fecha o una viñeta, edita solo `cv-data.js`; el panel, el PDF y el editor se actualizan juntos.

## Casos de estudio

Cada tarjeta de «Proyectos destacados» tiene un enlace «Ver caso de estudio» que abre un diálogo con el reto, lo que hice, las decisiones clave, los resultados, el rol, el periodo y la tecnología. Se navega entre casos con «Caso anterior» y «Siguiente caso».

- Los casos están en `projects` dentro de `cv-data.js`, en español e inglés. Solo incluyen hechos de la hoja de vida. Lo que falta (métricas, adopción, stack completo de Flow, fechas de Primer Paso) está en el campo `todo` de cada caso y no se muestra.
- Enlaces directos: `index.html#caso-flowcol`, `#caso-gravity` y `#caso-primer-paso`.
- El diálogo comparte el comportamiento accesible del panel del CV: foco atrapado, fondo inerte, Escape y foco devuelto al enlace.

## Hoja de vida en PDF

`cv.html#cv` muestra el CV en una sola columna, con texto real (seleccionable), títulos estándar y contacto en texto, pensado para sistemas ATS. La barra superior permite elegir idioma y versión:

| Enlace | Resultado |
|---|---|
| `cv.html?lang=es&version=completo#cv` | CV completo en español (4 páginas A4) |
| `cv.html?lang=es&version=resumen#cv` | CV resumido en español (2 páginas A4) |
| `cv.html?lang=en&version=completo#cv` | Full résumé in English (4 pages) |
| `cv.html?lang=en&version=resumen#cv` | Short résumé in English (2 pages) |

Al añadir `&print=1` se abre directamente el cuadro de impresión; ahí se elige **«Guardar como PDF»**. El PDF se genera en el navegador a partir de los datos vigentes, así que no hay archivos PDF guardados que puedan quedar desactualizados. El nombre sugerido del archivo sigue el patrón `Armando-Medina-CV-ES-completo`.

La impresión usa `@media print` con márgenes A4 de 15–16 mm, tipografía en puntos y saltos de página que evitan títulos huérfanos y viñetas partidas. La versión resumida conserva las viñetas marcadas en `short` dentro de `cv-data.js` y agrupa los cargos anteriores a 2022 en una línea cada uno.

## Navegación

- **Menú:** Inicio, Sobre mí, Competencias, Proyectos, Experiencia y Contacto. Cada enlace se desplaza con suavidad y deja la sección justo debajo del encabezado sticky (variable CSS `--nav-h`, medida en vivo).
- **«Hablemos»** (encabezado) lleva a `#contacto`.
- **El panel de la hoja de vida** se abre desde «Ver CV completo», «Más competencias», «Las 10 posiciones» y el ícono de libro del pie (atributo `data-open-cv`).
- **Menú responsive (≤ 860 px):** botón con `aria-expanded` y `aria-controls`. Con el teclado: flechas, Inicio y Fin recorren los enlaces, y Escape cierra y devuelve el foco al botón. Se cierra al elegir un enlace, al hacer clic fuera o al salir con Tab. Cerrado, el menú es `inert`.
- El enlace de la sección visible lleva `aria-current="location"`.

## Accesibilidad

- Enlace «Saltar al contenido», foco visible de 3 px y `scroll-padding-top` para que el encabezado no tape el foco.
- Panel del CV como diálogo modal: foco inicial en «Cerrar», Tab y Mayús+Tab circulan dentro, el fondo queda `inert`, Escape cierra y el foco vuelve al botón que lo abrió.
- Contraste AA: el naranja de marca (`#f26b1d`) se reserva para rellenos e íconos; el texto naranja usa `--orange-ink` (`#b14a0c`, 5.3:1) y los botones con texto blanco usan `--orange-strong` (`#c2540f`, 4.6:1).
- Todas las animaciones se desactivan con `prefers-reduced-motion`.

## Enlaces útiles

- `index.html#en` / `#es`: portafolio en inglés o español.
- `index.html#hablemos`: abre el portafolio con la hoja de vida desplegada.
- `index.html#contacto` (o cualquier sección): abre el portafolio en esa sección.

## Pruebas

Abre el sitio, pega el archivo en la consola del navegador y pulsa Enter. Muestra una tabla con el resultado de cada prueba.

- `tests/navegacion.js`: enlaces, desplazamiento con compensación, menú responsive, teclado y accesos al panel. Ejecútala en escritorio, tablet (768 px) y móvil (375 px).
- `tests/accesibilidad.js`: contraste, tamaño de objetivos, texto alternativo, ids duplicados, desbordamiento, menú inerte, panel del CV y los tres casos de estudio. Ejecútala en 320, 375, 390, 430, 768, 1024, 1440 y 1920 px.

## Verlo en local

```bash
python3 -m http.server 8000
```

Luego abre http://localhost:8000.

## Publicar con GitHub Pages

En el repositorio, ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda. El sitio queda en `https://rickyfreefly.github.io/CV-ARMN/`.
