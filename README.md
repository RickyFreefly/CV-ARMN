# Armando Medina · Portafolio y hoja de vida

Sitio estático (HTML, CSS y JavaScript sin dependencias) con el portafolio y la hoja de vida de Armando Ricardo Medina Nieto, Product Manager técnico. Funciona en español e inglés.

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | Portafolio. El botón «Hablemos» abre la hoja de vida completa en un panel. |
| `cv.html` | Editor de la hoja de vida con vista previa animada. `cv.html#cv` muestra solo el CV, y el botón «Imprimir / PDF» genera un PDF en A4. |
| `img/` | Ilustraciones y foto. |
| `PROMPTS-CHATGPT.md` | Prompts usados para generar las ilustraciones. |

## Enlaces útiles

- `index.html#en`: abre el portafolio en inglés (`#es` en español).
- `index.html#hablemos`: abre el portafolio con la hoja de vida desplegada.

## Verlo en local

```bash
python3 -m http.server 8000
```

Luego abre http://localhost:8000.

## Publicar con GitHub Pages

En el repositorio, ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`, y guarda. El sitio queda en `https://rickyfreefly.github.io/CV-ARMN/`.
