/*
  Auditoría automática de accesibilidad (WCAG 2.2 AA) del portafolio (index.html).

  Cómo usarla: abre el sitio, abre la consola del navegador (F12), pega este archivo
  y pulsa Enter. Repítelo en 320, 375, 390, 430, 768, 1024, 1440 y 1920 px con el
  modo de dispositivo de las herramientas de desarrollo.

  Cubre: contraste de texto (1.4.3), tamaño de objetivos (2.5.8), texto alternativo (1.1.1),
  ids duplicados, desbordamiento horizontal (1.4.10), menú cerrado fuera del foco,
  panel modal (foco inicial, foco atrapado, fondo inerte, Escape y restauración del foco).
  No cubre: lectores de pantalla reales, zoom del 200 %, preferencias del sistema ni gestos táctiles reales.
*/
(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const res = [];
  const check = (prueba, ok, detalle = "") => res.push({ prueba, resultado: ok ? "OK" : "FALLA", detalle });
  const visible = el => { const r = el.getBoundingClientRect(), cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity > 0.05; };

  // contraste: color del texto frente al primer fondo opaco de sus ancestros
  const rgb = s => (s.match(/[\d.]+/g) || []).map(Number);
  const lum = ([r, g, b]) => [r, g, b].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((a, v, i) => a + v * [.2126, .7152, .0722][i], 0);
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + .05) / (y + .05); };
  // fondo efectivo: ignora transparencias y valores color-mix(); el botón activo ES/EN pinta su fondo con ::before
  const bgOf = el => {
    if (el.matches('.lang button[aria-pressed="true"]')) return rgb(getComputedStyle(el.parentElement, "::before").backgroundColor);
    for (let n = el; n; n = n.parentElement) { const v = getComputedStyle(n).backgroundColor; if (!v.startsWith("rgb")) continue; const c = rgb(v); if (c.length >= 3 && (c[3] === undefined || c[3] > .9)) return c; }
    return rgb(getComputedStyle(document.body).backgroundColor);
  };
  const scanContrast = root => {
    const bad = [];
    root.querySelectorAll("*").forEach(el => {
      if (!visible(el) || el.closest("svg")) return;
      const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      if (!own) return;
      const cs = getComputedStyle(el), size = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
      const large = size >= 24 || (bold && size >= 18.66);
      const r = ratio(rgb(cs.color), bgOf(el));
      if (r < (large ? 3 : 4.5)) bad.push(`${el.tagName.toLowerCase()}.${el.className || ""} «${el.textContent.trim().slice(0, 30)}» ${r.toFixed(2)}`);
    });
    return bad;
  };
  // tamaño de objetivo: 24×24 px o separación suficiente (excepción de espaciado)
  const scanTargets = root => [...root.querySelectorAll("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter(visible).filter(el => !el.closest("p, li") || el.matches(".btn, .copy-btn"))
    .filter(el => { const r = el.getBoundingClientRect(); return r.width < 24 || r.height < 24; })
    .map(el => `${el.tagName.toLowerCase()} «${(el.textContent.trim() || el.getAttribute("aria-label") || "").slice(0, 24)}» ${Math.round(el.getBoundingClientRect().width)}×${Math.round(el.getBoundingClientRect().height)}`);

  // mide el estado final: termina transiciones y animaciones de entrada en curso
  document.getAnimations().forEach(a => { try { if (a.effect?.getComputedTiming().iterations !== Infinity) a.finish(); } catch {} });
  await wait(50);
  check("Idioma del documento", ["es", "en"].includes(document.documentElement.lang), document.documentElement.lang);
  const ids = [...document.querySelectorAll("[id]")].map(e => e.id), dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  check("Sin ids duplicados", dup.length === 0, dup.join(", "));
  const noAlt = [...document.images].filter(i => !i.hasAttribute("alt")).map(i => i.src.split("/").pop());
  check("Imágenes con atributo alt", noAlt.length === 0, noAlt.join(", "));
  const iconsExposed = [...document.querySelectorAll("svg.i")].filter(s => s.getAttribute("aria-hidden") !== "true").length;
  check("Íconos decorativos ocultos a lectores", iconsExposed === 0, `${iconsExposed} sin aria-hidden`);
  check("Enlace «Saltar al contenido»", !!document.querySelector('.skip[href="#main"]') && !!document.getElementById("main"));
  check("Sin desbordamiento horizontal", document.documentElement.scrollWidth <= innerWidth, `${document.documentElement.scrollWidth}/${innerWidth}`);
  const lowC = scanContrast(document.body);
  check("Contraste de texto (página)", lowC.length === 0, lowC.slice(0, 5).join(" · "));
  const smallT = scanTargets(document.body);
  check("Objetivos ≥ 24×24 px (página)", smallT.length === 0, smallT.slice(0, 5).join(" · "));

  const btn = document.querySelector(".menu-btn");
  if (getComputedStyle(btn).display !== "none") {
    check("Menú cerrado: inerte", document.getElementById("nav-menu").inert === true);
    check("Botón de menú con aria-expanded y aria-controls", btn.hasAttribute("aria-expanded") && btn.getAttribute("aria-controls") === "nav-menu");
  }

  // panel modal
  const opener = document.querySelector('.hero [data-open-cv]'), panel = document.getElementById("hablemos");
  opener.focus(); opener.click(); await wait(150);
  check("Panel: foco inicial en «Cerrar»", document.activeElement?.classList.contains("cvp-close"), document.activeElement?.className);
  check("Panel: fondo inerte", ["header.nav", "#main", "footer"].every(q => document.querySelector(q).inert));
  check("Panel: role=dialog, aria-modal y título", panel.getAttribute("role") === "dialog" && panel.getAttribute("aria-modal") === "true" && !!document.getElementById(panel.getAttribute("aria-labelledby")));
  const foc = [...panel.querySelectorAll('a[href], button:not([disabled])')].filter(visible);
  foc.at(-1).focus(); foc.at(-1).dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
  check("Panel: Tab en el último vuelve al primero", document.activeElement === foc[0]);
  foc[0].dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true }));
  check("Panel: Mayús+Tab en el primero va al último", document.activeElement === foc.at(-1));
  check("Panel: sin desbordamiento horizontal", panel.querySelector(".cvp-body").scrollWidth <= panel.querySelector(".cvp-body").clientWidth + 1);
  const lowP = scanContrast(panel);
  check("Contraste de texto (panel)", lowP.length === 0, lowP.slice(0, 5).join(" · "));
  const smallP = scanTargets(panel);
  check("Objetivos ≥ 24×24 px (panel)", smallP.length === 0, smallP.slice(0, 5).join(" · "));
  document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
  for (let i = 0; i < 20 && !panel.hidden; i++) { await wait(100); document.getAnimations().forEach(a => { try { if (a.effect?.getComputedTiming().iterations !== Infinity) a.finish(); } catch {} }); }
  check("Panel: Escape cierra", panel.hidden);
  check("Panel: el foco vuelve al botón que lo abrió", document.activeElement === opener);
  check("Panel: el fondo deja de estar inerte", !document.getElementById("main").inert);

  console.table(res);
  const failed = res.filter(r => r.resultado !== "OK");
  return `${res.length - failed.length}/${res.length} OK (${innerWidth}px)` + (failed.length ? " · Fallan: " + failed.map(f => `${f.prueba} [${f.detalle}]`).join("; ") : "");
})();
