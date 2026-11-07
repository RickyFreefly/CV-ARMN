// Caso de estudio con ruta propia. Las secciones sin datos verificados (objetivos, aprendizajes…) no se muestran.
import { UI, ROUTES, caseRoute } from "../i18n.mjs";
import { h, icon, chips, squiggle } from "../components/ui.mjs";

export function caseStudy({ lang, D, project: p }) {
  const C = UI[lang].case, S = C.sections;
  const all = D.projects, i = all.indexOf(p), n = all.length;
  const prev = all[(i - 1 + n) % n], next = all[(i + 1) % n];
  const list = items => `<ul class="bullets">${items.map(x => `<li>${h(x[lang])}</li>`).join("")}</ul>`;

  // orden fijo de las ocho secciones; solo se incluyen las que tienen contenido
  const sections = [
    ["context", p.context && `<p class="body-text">${h(p.context[lang])}</p>`],
    ["objectives", p.objectives?.length && list(p.objectives)],
    ["role", `<p class="body-text"><strong>${h(p.role[lang])}</strong> · ${h(p.period[lang])}</p>`],
    ["solution", p.did?.length && list(p.did)],
    ["tech", p.stack?.length && chips(p.stack, "chips lg")],
    ["decisions", p.decisions?.length && list(p.decisions)],
    ["results", p.results?.length && `<ul class="results">${p.results.map(r => `<li>${icon("check", 20)}<span>${h(r[lang])}</span></li>`).join("")}</ul>`],
    ["learnings", p.learnings?.length && list(p.learnings)],
  ].filter(([, html]) => html);

  const toc = sections.map(([k], j) => `<li><a href="#${k}"><span aria-hidden="true">${String(j + 1).padStart(2, "0")}</span> ${h(S[k])}</a></li>`).join("");
  const metaLabel = p.periodLabel === "org" ? C.org : C.period;

  return {
    title: `${p.title} · ${C.eyebrow}`,
    description: `${p.title}: ${p.subtitle[lang]}. ${p.context[lang]}`.slice(0, 300),
    body: `
<div class="wrap">
  <nav class="breadcrumb rise" style="--i:0" aria-label="${h(C.breadcrumb)}">
    <ol><li><a href="${ROUTES.projects[lang]}">${h(UI[lang].nav.projects)}</a></li><li><span aria-current="page">${h(p.title)}</span></li></ol>
  </nav>
  <header class="case-hero">
    <div>
      <p class="eyebrow rise" style="--i:0">${h(C.eyebrow)} · ${i + 1} ${h(C.of)} ${n}</p>
      <h1 id="page-title" class="title">${h(p.title).split(" ").map((w, k) => `<span class="w" style="--i:${k}">${w}</span>`).join(" ")}</h1>
      ${squiggle}
      <p class="lead rise" style="--i:3">${h(p.subtitle[lang])}</p>
      <dl class="case-meta rise" style="--i:4">
        <div><dt>${h(S.role.split(" ")[0])}</dt><dd>${h(p.role[lang])}</dd></div>
        <div><dt>${h(metaLabel)}</dt><dd>${h(p.period[lang])}</dd></div>
      </dl>
    </div>
    <figure class="case-media${p.id === "gravity" ? " grey" : ""} rise" style="--i:2"><img src="/${h(p.image.replace(".png", ".webp"))}" alt="${h(p.imageAlt[lang])}" width="1200" height="900"></figure>
  </header>

  <div class="case-layout">
    <aside class="toc" aria-labelledby="toc-title">
      <details open>
        <summary id="toc-title">${h(C.toc)}</summary>
        <ol role="list">${toc}</ol>
      </details>
    </aside>
    <div class="case-content">
      ${sections.map(([k, html], j) => `
      <section id="${k}" class="case-section" aria-labelledby="${k}-title">
        <h2 id="${k}-title"><span class="sec-n" aria-hidden="true">${String(j + 1).padStart(2, "0")}</span>${h(S[k])}</h2>
        ${html}
      </section>`).join("")}
    </div>
  </div>

  <nav class="case-pager" aria-label="${h(C.prev)} / ${h(C.next)}">
    <a class="pager-link prev" href="${caseRoute(prev.slug, lang)}" rel="prev">${icon("arrow", 18)}<span><small>${h(C.prev)}</small>${h(prev.title)}</span></a>
    <a class="pager-all" href="${ROUTES.projects[lang]}">${h(C.all)}</a>
    <a class="pager-link next" href="${caseRoute(next.slug, lang)}" rel="next"><span><small>${h(C.next)}</small>${h(next.title)}</span>${icon("arrow", 18)}</a>
  </nav>
</div>`,
  };
}
