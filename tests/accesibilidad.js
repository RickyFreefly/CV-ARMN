/*
  Auditoría automática de accesibilidad (WCAG 2.2 AA) para cualquier página del sitio.

  Cómo usarla: abre una página, abre la consola del navegador (F12), pega este archivo y
  pulsa Enter. Repítelo en cada ruta y en 320, 375, 390, 430, 768, 1024, 1440 y 1920 px.

  Cubre: idioma, ids duplicados, texto alternativo, íconos decorativos, enlace de salto,
  un solo h1, página activa en el menú, desbordamiento horizontal (1.4.10), contraste de
  texto (1.4.3), tamaño de objetivos (2.5.8) y el menú móvil (estado, foco, Escape, fondo inerte).
  No cubre: lectores de pantalla reales, zoom del 200 %, preferencias del sistema ni gestos táctiles reales.
*/
(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const res = [];
  const check = (prueba, ok, detalle = "") => res.push({ prueba, resultado: ok ? "OK" : "FALLA", detalle });
  const visible = el => { const r = el.getBoundingClientRect(), cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity > 0.05; };
  const finishAnims = () => document.getAnimations().forEach(a => { try { if (a.effect?.getComputedTiming().iterations !== Infinity) a.finish(); } catch {} });
  finishAnims(); await wait(50);

  // contraste: color del texto frente al primer fondo opaco de sus ancestros
  const rgb = s => (s.match(/[\d.]+/g) || []).map(Number);
  const lum = ([r, g, b]) => [r, g, b].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((a, v, i) => a + v * [.2126, .7152, .0722][i], 0);
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + .05) / (y + .05); };
  const bgOf = el => {
    if (el.closest('.lang a[aria-current]')) return rgb(getComputedStyle(el.closest(".lang"), "::before").backgroundColor);
    for (let n = el; n; n = n.parentElement) { const v = getComputedStyle(n).backgroundColor; if (!v.startsWith("rgb")) continue; const c = rgb(v); if (c.length >= 3 && (c[3] === undefined || c[3] > .9)) return c; }
    return rgb(getComputedStyle(document.body).backgroundColor);
  };
  const lowContrast = [...document.body.querySelectorAll("*")].filter(el => visible(el) && !el.closest("svg, .logo") && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())).flatMap(el => {
    const cs = getComputedStyle(el), size = parseFloat(cs.fontSize), large = size >= 24 || (+cs.fontWeight >= 700 && size >= 18.66);
    const r = ratio(rgb(cs.color), bgOf(el));
    return r < (large ? 3 : 4.5) ? [`«${el.textContent.trim().slice(0, 24)}» ${r.toFixed(2)}`] : [];
  });
  // objetivos: 24×24 px como mínimo (los enlaces dentro de párrafos están exentos)
  const smallTargets = [...document.querySelectorAll("a[href], button, summary, input, select, textarea")]
    .filter(visible).filter(el => !el.closest("p:not(.actions):not(.channel-actions), li.plain"))
    .filter(el => { const r = el.getBoundingClientRect(); return r.width < 24 || r.height < 24; })
    .map(el => `«${(el.textContent.trim() || el.getAttribute("aria-label") || "").slice(0, 20)}» ${Math.round(el.getBoundingClientRect().width)}×${Math.round(el.getBoundingClientRect().height)}`);

  check("Idioma del documento", ["es", "en"].includes(document.documentElement.lang), document.documentElement.lang);
  const ids = [...document.querySelectorAll("[id]")].map(e => e.id), dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  check("Sin ids duplicados", dup.length === 0, dup.join(", "));
  const noAlt = [...document.images].filter(i => !i.hasAttribute("alt")).map(i => i.src.split("/").pop());
  check("Imágenes con atributo alt", noAlt.length === 0, noAlt.join(", "));
  const exposed = [...document.querySelectorAll("svg.i, svg.squiggle")].filter(s => s.getAttribute("aria-hidden") !== "true").length;
  check("Íconos decorativos ocultos a lectores", exposed === 0, `${exposed} sin aria-hidden`);
  check("Enlace «Saltar al contenido»", !!document.querySelector('.skip[href="#main"]') && !!document.getElementById("main"));
  check("Un solo h1", document.querySelectorAll("h1").length === 1);
  const current = document.querySelectorAll(".menu a[aria-current]");
  check("Página activa marcada en el menú", current.length === 1 || document.body.dataset.page === "404", [...current].map(a => a.textContent).join(", "));
  check("Selector de idioma lleva a esta página traducida", [...document.querySelectorAll(".lang a")].every(a => a.hasAttribute("hreflang") && a.getAttribute("href").startsWith("/")));
  check("Sin desbordamiento horizontal", document.documentElement.scrollWidth <= innerWidth, `${document.documentElement.scrollWidth}/${innerWidth}`);
  check("Contraste de texto", lowContrast.length === 0, lowContrast.slice(0, 5).join(" · "));
  check("Objetivos ≥ 24×24 px", smallTargets.length === 0, smallTargets.slice(0, 5).join(" · "));

  // menú móvil
  const btn = document.querySelector(".menu-btn"), menu = document.getElementById("site-menu");
  if (getComputedStyle(btn).display !== "none") {
    check("Menú cerrado: inerte", menu.inert === true);
    check("Botón de menú con aria-expanded y aria-controls", btn.getAttribute("aria-expanded") === "false" && btn.getAttribute("aria-controls") === "site-menu");
    btn.focus(); btn.click(); await wait(80); finishAnims();
    check("Menú abierto: aria-expanded=true y etiqueta «cerrar»", btn.getAttribute("aria-expanded") === "true" && btn.getAttribute("aria-label") === btn.dataset.labelClose);
    check("Menú abierto: el foco entra al menú", menu.contains(document.activeElement), document.activeElement?.textContent.trim());
    check("Menú abierto: contenido de fondo inerte", document.getElementById("main").inert === true);
    const links = [...menu.querySelectorAll("a")];
    check("Menú abierto: enlaces visibles y ≥ 44 px", links.every(a => visible(a) && a.getBoundingClientRect().height >= 44));
    links.at(-1).focus();
    document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    check("Menú: flecha abajo en el último vuelve al primero", document.activeElement === links[0]);
    document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await wait(50);
    check("Menú: Escape cierra y devuelve el foco al botón", btn.getAttribute("aria-expanded") === "false" && document.activeElement === btn && menu.inert === true && !document.getElementById("main").inert);
  }

  console.table(res);
  const failed = res.filter(r => r.resultado !== "OK");
  return `${res.length - failed.length}/${res.length} OK (${location.pathname} · ${innerWidth}px)` + (failed.length ? " · Fallan: " + failed.map(f => `${f.prueba} [${f.detalle}]`).join("; ") : "");
})();
