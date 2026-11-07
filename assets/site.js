// armandomedina.dev — comportamiento compartido por todas las páginas.
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lang = document.documentElement.lang === "en" ? "en" : "es";
  const T = lang === "en" ? { copied: "Copied" } : { copied: "Copiado" };
  const header = document.querySelector(".site-header");

  // ---------- dirección de la transición entre páginas ----------
  // Avanzar en el recorrido (Inicio → Contacto, o «Siguiente caso») desliza hacia la izquierda; retroceder, al revés.
  const ORDER_KEY = "am-order", DIR_KEY = "am-dir";
  addEventListener("pageswap", () => { try { sessionStorage.setItem(ORDER_KEY, document.documentElement.dataset.order); } catch {} });
  addEventListener("pagereveal", e => {
    if (!e.viewTransition) return;
    try {
      const from = parseFloat(sessionStorage.getItem(ORDER_KEY)), to = parseFloat(document.documentElement.dataset.order);
      const hint = sessionStorage.getItem(DIR_KEY);
      sessionStorage.removeItem(DIR_KEY);
      const dir = hint || (from < to ? "forward" : from > to ? "back" : "");
      if (dir) e.viewTransition.types.add(dir);
    } catch {}
  });
  document.addEventListener("click", e => {
    const a = e.target.closest("a[rel='next'], a[rel='prev']");
    if (a) try { sessionStorage.setItem(DIR_KEY, a.rel === "next" ? "forward" : "back"); } catch {}
    const l = e.target.closest(".lang a[data-lang]");
    if (l) try { localStorage.setItem("am-lang", l.dataset.lang); } catch {}
  });

  // ---------- encabezado: borde al hacer scroll ----------
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });

  // ---------- menú móvil: diálogo de navegación accesible ----------
  const btn = header.querySelector(".menu-btn"), menu = document.getElementById("site-menu");
  const narrow = matchMedia("(max-width: 920px)");
  const isOpen = () => header.hasAttribute("data-open");
  const sync = () => {
    const open = isOpen();
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? btn.dataset.labelClose : btn.dataset.labelOpen);
    menu.inert = narrow.matches && !open;           // cerrado: fuera del foco y del lector de pantalla
    document.body.classList.toggle("menu-open", open);
    document.getElementById("main").inert = open;    // abierto: el contenido de fondo no recibe foco
    document.querySelector(".site-footer").inert = open;
  };
  const open = () => { header.setAttribute("data-open", ""); sync(); (menu.querySelector("a.on") || menu.querySelector("a")).focus({ preventScroll: true }); };
  const close = (refocus = true) => { if (!isOpen()) return; header.removeAttribute("data-open"); sync(); if (refocus) btn.focus({ preventScroll: true }); };
  btn.addEventListener("click", () => (isOpen() ? close() : open()));
  header.addEventListener("keydown", e => {
    if (!isOpen()) return;
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    const links = [...menu.querySelectorAll("a")], i = links.indexOf(document.activeElement);
    if (i >= 0) {
      const next = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: links.length - 1 }[e.key];
      if (next !== undefined) { e.preventDefault(); links[(next + links.length) % links.length].focus(); return; }
    }
    if (e.key === "Tab") {                            // el foco circula dentro del encabezado mientras el menú está abierto
      const f = [...header.querySelectorAll("a[href], button")].filter(el => el.offsetParent !== null && !el.closest("[inert]"));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  menu.addEventListener("click", e => { if (e.target.closest("a")) close(false); });
  narrow.addEventListener("change", () => { header.removeAttribute("data-open"); sync(); });
  // al volver con «Atrás» desde la caché del navegador, el menú debe aparecer cerrado
  addEventListener("pageshow", () => { header.removeAttribute("data-open"); sync(); });
  sync();

  // ---------- copiar correo y teléfono ----------
  const live = document.getElementById("live");
  document.querySelectorAll(".copy-btn").forEach(b => b.addEventListener("click", () => {
    const label = b.textContent;
    const done = () => { b.textContent = T.copied; if (live) live.textContent = `${T.copied}: ${b.dataset.copy}`; setTimeout(() => (b.textContent = label), 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.copy).then(done, () => {});
  }));

  // ---------- experiencia: filtro y «ver más» ----------
  const filters = document.querySelector(".filters");
  if (filters) {
    filters.hidden = false;                            // sin JavaScript se ve todo, sin filtro
    filters.addEventListener("click", e => {
      const b = e.target.closest("button[data-filter]");
      if (!b) return;
      filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      document.querySelectorAll(".tl-group").forEach(g => { g.hidden = b.dataset.filter !== "all" && g.dataset.group !== b.dataset.filter; });
    });
  }
  document.querySelectorAll("details.more").forEach(d => {
    const s = d.querySelector("summary"), more = s.textContent;
    d.addEventListener("toggle", () => { s.textContent = d.open ? s.dataset.less : more; });
  });

  // ---------- caso de estudio: índice que sigue la lectura ----------
  const toc = document.querySelector(".toc");
  if (toc) {
    const links = new Map([...toc.querySelectorAll("a")].map(a => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach((a, id) => { const on = id === en.target.id; a.classList.toggle("on", on); on ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current"); });
    }), { rootMargin: "-30% 0px -60% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    // en móvil el índice empieza plegado para no empujar el contenido
    if (narrow.matches) toc.querySelector("details").open = false;
    toc.addEventListener("click", e => {
      const a = e.target.closest("a");
      if (!a) return;
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true });
      history.replaceState(null, "", a.getAttribute("href"));
      if (narrow.matches) toc.querySelector("details").open = false;
    });
  }
})();
