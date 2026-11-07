# Auditoría de accesibilidad WCAG 2.2 AA · CV-ARMN

> **Nota (7 de noviembre de 2026):** esta auditoría se hizo sobre la versión de página única. El rediseño multipágina sustituyó el panel «Hablemos» y el diálogo de casos por páginas propias, y mantiene los mismos criterios (contraste, foco, objetivos, menú accesible, movimiento reducido). `tests/accesibilidad.js` se actualizó para revisar cualquier página.

Fecha: 5 de noviembre de 2026. Alcance: `index.html` (portafolio y panel de la hoja de vida) y `cv.html` (vista `#cv`, impresión y editor).

## Incidencias y correcciones

| # | Incidencia | Criterio WCAG | Corrección | Criterio de aceptación |
|---|---|---|---|---|
| 1 | El panel de la hoja de vida no atrapaba el foco: con Tab se salía al contenido de fondo. | 2.4.3 Orden del foco, 2.1.2 | Tab y Mayús+Tab circulan dentro del panel; el fondo (`header`, `main`, `footer`, enlace de salto) queda `inert` mientras el panel está abierto. | Con el panel abierto, Tab desde el último control va al primero y Mayús+Tab desde el primero va al último; ningún elemento del fondo recibe foco. |
| 2 | El enlace PDF del panel tenía la clase `cvp-close` y el foco inicial caía en él en vez de en «Cerrar». | 2.4.3 | El enlace usa su propia clase `cvp-pdf`. | Al abrir el panel, el foco está en «Cerrar». |
| 3 | Si el navegador no reproducía la animación de cierre (pestaña en segundo plano), el panel quedaba abierto. | 2.1.1 Teclado | El cierre termina con la animación o con un temporizador de 450 ms, lo que ocurra primero. | Escape cierra el panel siempre y el foco vuelve al botón que lo abrió. |
| 4 | El texto en naranja de marca tenía un contraste de 2.97:1 y el texto blanco sobre naranja, de 3.05:1. | 1.4.3 Contraste | Nuevos tonos: `--orange-ink` `#b14a0c` (5.3:1) para texto y `--orange-strong` `#c2540f` (4.6:1) para botones con texto blanco y títulos grandes. El naranja original queda en rellenos, íconos e ilustraciones. | Ningún texto visible por debajo de 4.5:1 (3:1 si es grande), medido en 8 anchos. |
| 5 | El anillo de foco naranja tenía 2.97:1 frente al fondo. | 1.4.11, 2.4.7 | Contorno de 3 px en `--orange-ink` (5.3:1). | El foco es visible sobre todos los fondos del sitio. |
| 6 | El encabezado sticky podía tapar el elemento enfocado al tabular. | 2.4.11 Foco no oculto | `scroll-padding-top` igual a la altura real del encabezado. | El elemento enfocado queda siempre debajo del encabezado. |
| 7 | No había forma de saltar la navegación. | 2.4.1 Evitar bloques | Enlace «Saltar al contenido» (ES/EN), visible al recibir foco. | Primer Tab de la página: aparece el enlace y lleva a `#main`. |
| 8 | Con el menú móvil cerrado, sus enlaces dependían de una transición CSS para salir del orden de tabulación. | 2.4.3 | El menú cerrado es `inert` en pantallas ≤ 860 px. | Con el menú cerrado, Tab no entra en sus enlaces. |
| 9 | Los botones «Copiar» medían unos 20 px de alto. | 2.5.8 Tamaño del objetivo | Mínimo 28 × 44 px. | Todos los controles miden al menos 24 × 24 px. |
| 10 | Al copiar, el aviso solo cambiaba el texto del botón. | 4.1.3 Mensajes de estado | Región `aria-live="polite"` que anuncia «Copiado: …». | Un lector de pantalla anuncia la copia. |
| 11 | Íconos decorativos expuestos a lectores de pantalla. | 1.1.1 | `aria-hidden="true"` y `focusable="false"` en todos los íconos `svg.i` y en los subrayados. | Ningún ícono decorativo aparece en el árbol de accesibilidad. |
| 12 | Las ilustraciones generadas se insertaban con `alt=""` aunque transmiten contenido. | 1.1.1 | La imagen hereda la descripción de la ilustración original; las miniaturas de proyectos siguen siendo decorativas. | La ilustración del hero y la de «Sobre mí» tienen texto alternativo. |
| 13 | Las tarjetas de proyectos mostraban un ícono de enlace externo, pero no eran enlaces. | 3.2.4 Identificación coherente | Se retiró el ícono. | Ningún elemento parece un enlace si no lo es. |
| 14 | Campos del editor (`cv.html`) con borde de 1.2:1. | 1.4.11 | Borde `#8f887d`. | Los campos se distinguen del fondo con 3:1 o más. |

## Verificado

- Anchos: 320, 375, 390, 430, 768, 1024, 1440 y 1920 px, en español e inglés (`tests/accesibilidad.js`: 19–21 de 19–21 pruebas OK en cada ancho).
- Navegación: escritorio, tablet y móvil (`tests/navegacion.js`: 15/15, 21/21 y 20/20).
- Sin desbordamiento horizontal en la página ni en el panel.
- PDF: generado con Chrome sin interfaz en las cuatro combinaciones; texto seleccionable con fuentes incrustadas, idioma correcto, sin títulos huérfanos al final de página y sin texto faltante. Versión resumida: 2 páginas.
- `prefers-reduced-motion`: revisión de código. Todas las animaciones CSS se anulan y las de JavaScript se omiten cuando la preferencia está activa.

## Limitaciones (pruebas no ejecutadas)

- **Lectores de pantalla reales** (VoiceOver, NVDA, TalkBack): no se probaron. Los roles, nombres y estados se revisaron en el código y con el árbol de accesibilidad.
- **Táctil real:** las pruebas usaron clics simulados con emulación de tamaño de pantalla, no un dispositivo físico.
- **`prefers-reduced-motion` y alto contraste del sistema:** no se pudieron emular en el navegador de pruebas; se revisaron en el código.
- **Zoom del 200 % y espaciado de texto (1.4.4, 1.4.12):** no se midieron.
- **Teclado real:** Tab, Escape y las flechas se probaron con eventos simulados; el recorrido completo con teclado físico queda pendiente.
- **Impresión desde Safari y Firefox:** solo se verificó la de Chrome.
