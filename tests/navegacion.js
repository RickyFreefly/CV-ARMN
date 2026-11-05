/*
  Prueba de navegación del portafolio (index.html).

  Cómo usarla: abre el sitio, abre la consola del navegador (F12), pega este
  archivo completo y pulsa Enter. Repite en escritorio, tablet (768 px) y
  móvil (375 px) usando el modo de dispositivo de las herramientas de desarrollo.

  Comprueba:
  - que todo enlace interno (#…) tiene un destino que existe;
  - que «Hablemos» lleva a #contacto y no abre el panel de la hoja de vida;
  - que cada enlace del menú deja su sección justo debajo del encabezado sticky;
  - que el menú responsive se cierra al elegir un enlace;
  - teclado del menú: flechas, Inicio/Fin con ciclo, Escape devuelve el foco al botón;
  - que «Ver CV completo», «Más», «Ver trayectoria completa» y «Las 10 posiciones» abren el panel;
  - que la página no se desborda a lo ancho.
*/
(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const results = [];
  const check = (name, ok, detail = "") => results.push({ prueba: name, resultado: ok ? "OK" : "FALLA", detalle: detail });

  // El desplazamiento suave se fuerza a instantáneo para poder medir el destino
  const realScrollTo = window.scrollTo.bind(window);
  window.scrollTo = o => realScrollTo(typeof o === "object" ? { top: o.top, behavior: "instant" } : o);
  const panel = document.getElementById("hablemos");
  const closePanel = async () => { if (!panel.hidden) { panel.querySelector(".cvp-close").click(); await wait(500); document.getAnimations().forEach(a => { try { a.finish(); } catch {} }); await wait(50); } };

  try {
    const header = document.querySelector("header.nav");
    const btn = document.querySelector(".menu-btn");
    const narrow = getComputedStyle(btn).display !== "none";

    // 1. Destinos válidos
    const broken = [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute("href")).filter(h => h.length > 1 && !document.getElementById(h.slice(1)));
    check("Enlaces internos con destino", broken.length === 0, broken.join(", "));

    // 2. Menú: cada sección queda bajo el encabezado y el menú se cierra
    for (const a of document.querySelectorAll(".nav ul a")) {
      realScrollTo({ top: 0, behavior: "instant" }); await wait(80);
      if (narrow) { btn.click(); await wait(80); }
      a.click(); await wait(350);
      const id = a.getAttribute("href").slice(1), el = document.getElementById(id);
      const top = el.getBoundingClientRect().top, navH = header.getBoundingClientRect().height;
      const atBottom = Math.abs(scrollY - (document.documentElement.scrollHeight - innerHeight)) < 3;
      const placed = id === "inicio" ? top <= navH + 2 : (top >= navH && top <= navH + 30) || atBottom;
      check(`Menú → #${id}`, placed && !document.querySelector(".nav").hasAttribute("data-open"), `top=${Math.round(top)} encabezado=${Math.round(navH)}${atBottom ? " (final de página)" : ""}`);
    }

    // 3. «Hablemos» → #contacto
    const cta = document.querySelector(".nav-cta");
    check("«Hablemos» apunta a #contacto", cta.getAttribute("href") === "#contacto" && !cta.hasAttribute("data-open-cv"));
    if (getComputedStyle(cta).display !== "none") {
      realScrollTo({ top: 0, behavior: "instant" }); await wait(80);
      cta.click(); await wait(350);
      const footerTop = document.getElementById("contacto").getBoundingClientRect().top;
      check("«Hablemos» no abre el panel y llega al contacto", panel.hidden && footerTop < innerHeight);
    }

    // 4. Teclado del menú responsive
    if (narrow) {
      realScrollTo({ top: 0, behavior: "instant" }); await wait(80);
      btn.focus(); btn.click(); await wait(80);
      check("Menú abierto: aria-expanded=true", btn.getAttribute("aria-expanded") === "true");
      const items = [...document.querySelectorAll("#nav-menu a")];
      const key = k => document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: k, bubbles: true }));
      key("Home"); check("Tecla Inicio → primer enlace", document.activeElement === items[0]);
      key("ArrowUp"); check("Flecha arriba en el primero → último", document.activeElement === items.at(-1));
      key("ArrowDown"); check("Flecha abajo en el último → primero", document.activeElement === items[0]);
      key("Escape"); await wait(450); // el menú se oculta al terminar su transición
      check("Escape cierra y devuelve el foco al botón", btn.getAttribute("aria-expanded") === "false" && document.activeElement === btn);
      check("Menú cerrado fuera del orden de tabulación", getComputedStyle(document.getElementById("nav-menu")).visibility === "hidden");
    }

    // 5. Accesos al panel de la hoja de vida
    for (const el of document.querySelectorAll("[data-open-cv]")) {
      await closePanel();
      el.click(); await wait(80);
      check(`Abre el CV: «${el.textContent.trim() || el.getAttribute("aria-label")}»`, !panel.hidden);
    }
    await closePanel();

    check("Sin desbordamiento horizontal", document.documentElement.scrollWidth <= innerWidth, `${document.documentElement.scrollWidth}px / ${innerWidth}px`);
  } finally {
    window.scrollTo = realScrollTo;
  }
  console.table(results);
  const failed = results.filter(r => r.resultado !== "OK");
  return `${results.length - failed.length}/${results.length} pruebas OK (${innerWidth}px)` + (failed.length ? " · Fallan: " + failed.map(f => `${f.prueba} [${f.detalle}]`).join("; ") : "");
})();
