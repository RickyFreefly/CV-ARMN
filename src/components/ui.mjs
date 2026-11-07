// Utilidades y piezas de interfaz reutilizables.
import { icon } from "./icons.mjs";

export const h = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const t = (o, lang) => (o && typeof o === "object" && lang in o ? o[lang] : o);

export const squiggle = `<svg class="squiggle" aria-hidden="true" focusable="false" viewBox="0 0 34 8"><path d="M2 5c5-3 9-3 15 0s10 2 15-1"/></svg>`;

// encabezado de página: eyebrow, título con entrada por palabras y entradilla
export function pageHead({ eyebrow, title, lead, id = "page-title", size = "" }) {
  const words = h(title).split(" ").map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ");
  return `<header class="page-head${size ? " " + size : ""}">
      ${eyebrow ? `<p class="eyebrow rise" style="--i:0">${h(eyebrow)}</p>` : ""}
      <h1 id="${id}" class="title">${words}</h1>
      ${squiggle}
      ${lead ? `<p class="lead rise" style="--i:3">${h(lead)}</p>` : ""}
    </header>`;
}

export const chips = (items, cls = "chips") => `<ul class="${cls}" role="list">${items.map(x => `<li>${h(x)}</li>`).join("")}</ul>`;

export const button = (href, label, { variant = "primary", ico, attrs = "" } = {}) =>
  `<a class="btn ${variant}" href="${h(href)}"${attrs}><span>${h(label)}</span>${ico ? " " + icon(ico, 16) : ""}</a>`;

export const copyButton = (value, label) => `<button type="button" class="copy-btn" data-copy="${h(value)}">${h(label)}</button>`;

export { icon };
