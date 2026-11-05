# Armando Medina · Portafolio y hoja de vida

Sitio estático (HTML, CSS y JavaScript sin dependencias) con el portafolio y la hoja de vida de Armando Ricardo Medina Nieto, Product Manager técnico. Funciona en español e inglés.

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | Portafolio. El botón «Hablemos» abre la hoja de vida completa en un panel. |
| `cv.html` | Editor de la hoja de vida con vista previa animada. `cv.html#cv` muestra solo el CV, y el botón «Imprimir / PDF» genera un PDF en A4. |
| `img/` | Ilustraciones y foto. |
| `PROMPTS-CHATGPT.md` | Prompts usados para generar las ilustraciones. |

## Navegación

- **Menú:** Inicio, Sobre mí, Competencias, Proyectos, Experiencia y Contacto. Cada enlace se desplaza con suavidad y deja la sección justo debajo del encabezado sticky. La altura del encabezado se mide en vivo y se guarda en la variable CSS `--nav-h`.
- **«Hablemos»** (encabezado) lleva a la sección de contacto (`#contacto`).
- **La hoja de vida completa** se abre en un panel desde «Ver CV completo», «Más», «Ver trayectoria completa», «Las 10 posiciones» y el ícono de libro del pie. Todos usan el atributo `data-open-cv`.
- **Menú responsive (≤ 860 px):** botón con `aria-expanded` y `aria-controls`. Con el teclado: flechas arriba/abajo, Inicio y Fin recorren los enlaces, y Escape cierra el menú y devuelve el foco al botón. Se cierra al elegir un enlace, al hacer clic fuera o al salir con Tab. Cerrado, sus enlaces quedan fuera del orden de tabulación.
- El enlace de la sección visible se marca con `aria-current="location"`.

## Enlaces útiles

- `index.html#en`: abre el portafolio en inglés (`#es` en español).
- `index.html#hablemos`: abre el portafolio con la hoja de vida desplegada.
- `index.html#contacto` (o cualquier sección): abre el portafolio en esa sección.

## Pruebas

`tests/navegacion.js` prueba los enlaces, el desplazamiento con compensación, el menú responsive, el teclado y los accesos al panel. Abre el sitio, pega el archivo en la consola del navegador y repítelo en escritorio, tablet (768 px) y móvil (375 px) con el modo de dispositivo de las herramientas de desarrollo. Muestra una tabla con el resultado de cada prueba.

## Verlo en local

```bash
python3 -m http.server 8000
```

Luego abre http://localhost:8000.

## Publicar con GitHub Pages

En el repositorio, ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda. El sitio queda en `https://rickyfreefly.github.io/CV-ARMN/`.
