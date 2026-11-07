// Pie compartido: recorrido «Anterior / Siguiente» entre páginas y contacto breve.
import { ROUTES, PAGES, UI } from "../i18n.mjs";
import { h, icon } from "./ui.mjs";

export function pager({ lang, page }) {
  const L = UI[lang], i = PAGES.indexOf(page);
  if (i < 0) return "";
  const prev = PAGES[i - 1], next = PAGES[i + 1];
  return `<nav class="pager wrap" aria-label="${h(L.prev)} / ${h(L.next)}">
    ${prev ? `<a class="pager-link prev" href="${ROUTES[prev][lang]}" rel="prev">${icon("arrow", 18)}<span><small>${h(L.prev)}</small>${h(L.nav[prev])}</span></a>` : "<span></span>"}
    ${next ? `<a class="pager-link next" href="${ROUTES[next][lang]}" rel="next"><span><small>${h(L.next)}</small>${h(L.nav[next])}</span>${icon("arrow", 18)}</a>`
           : `<a class="pager-link next" href="${ROUTES.home[lang]}"><span><small>${h(L.backToStart)}</small>${h(L.nav.home)}</span>${icon("arrow", 18)}</a>`}
  </nav>`;
}

export function footer({ lang, D }) {
  const L = UI[lang], c = D.contact;
  return `<footer class="site-footer">
    <div class="wrap foot">
      <a class="logo" href="${ROUTES.home[lang]}" aria-label="Armando Medina, ${h(L.nav.home)}">AM<b>.</b></a>
      <ul class="foot-links" role="list">
        <li><a href="mailto:${h(c.email)}">${icon("mail", 16)} ${h(c.email)}</a></li>
        <li><a href="${h(c.linkedinUrl)}" target="_blank" rel="noopener">${icon("in", 16)} LinkedIn</a></li>
        <li><a href="${ROUTES.contact[lang]}">${icon("arrow", 16)} ${h(L.talk)}</a></li>
      </ul>
      <p class="legal">© 2026 Armando Medina · ${h(L.footerNote)}</p>
    </div>
  </footer>`;
}
