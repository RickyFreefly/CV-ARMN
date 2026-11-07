// Encabezado persistente: logo, navegación, selector de idioma, «Hablemos» y menú móvil.
import { ROUTES, PAGES, UI } from "../i18n.mjs";
import { h, icon } from "./ui.mjs";

export function header({ lang, page, alternate }) {
  const L = UI[lang];
  // en un caso de estudio, «Proyectos» se marca como sección actual (no como página exacta)
  const links = PAGES.map(p => {
    const current = p === page ? "page" : page === "case" && p === "projects" ? "true" : "";
    return `<li><a href="${ROUTES[p][lang]}"${current ? ` aria-current="${current}" class="on"` : ""}>${h(L.nav[p])}</a></li>`;
  }).join("\n          ");
  return `<a class="skip" href="#main">${h(L.skip)}</a>
  <header class="site-header">
    <div class="wrap bar">
      <a class="logo" href="${ROUTES.home[lang]}" aria-label="Armando Medina, ${h(L.nav.home)}">AM<b>.</b></a>
      <nav class="site-nav" aria-label="${h(L.sections)}">
        <ul id="site-menu" class="menu">
          ${links}
          <li class="menu-cta"><a class="btn dark" href="${ROUTES.contact[lang]}">${h(L.talk)} ${icon("arrow", 16)}</a></li>
        </ul>
      </nav>
      <div class="bar-end">
        <div class="lang" role="group" aria-label="${h(L.language)}" data-on="${lang}">
          <a href="${alternate.es}" hreflang="es" lang="es" data-lang="es"${lang === "es" ? ' aria-current="true"' : ""}><span aria-hidden="true">ES</span><span class="sr-only">${h(L.langNames.es)}</span></a>
          <a href="${alternate.en}" hreflang="en" lang="en" data-lang="en"${lang === "en" ? ' aria-current="true"' : ""}><span aria-hidden="true">EN</span><span class="sr-only">${h(L.langNames.en)}</span></a>
        </div>
        <a class="btn dark talk" href="${ROUTES.contact[lang]}">${h(L.talk)} ${icon("arrow", 16)}</a>
        <button type="button" class="menu-btn" aria-expanded="false" aria-controls="site-menu" aria-label="${h(L.menuOpen)}" data-label-open="${h(L.menuOpen)}" data-label-close="${h(L.menuClose)}">
          <span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>`;
}
