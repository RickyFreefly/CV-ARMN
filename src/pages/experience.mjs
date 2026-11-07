// Experiencia: resumen, filtro y línea de tiempo separada en producto/tecnología y docencia.
import { UI, cvRoute, pdfRoute } from "../i18n.mjs";
import { h, icon, pageHead, button } from "../components/ui.mjs";

const VISIBLE = 3; // logros visibles antes de «Ver más»

function entry(e, lang, D) {
  const E = UI[lang].experience;
  const shown = e.bullets.slice(0, VISIBLE), extra = e.bullets.slice(VISIBLE);
  const li = b => `<li>${h(b[lang])}</li>`;
  return `
      <li class="tl-item" data-kind="${e.kind}">
        <div class="tl-head">
          <h3><span class="tl-role">${h(e.role[lang])}</span> <span class="tl-org">${h(e.org)}</span></h3>
          <p class="tl-date">${h(e.start[lang])} – ${h(e.end[lang])}${e.product ? ` <span class="tag">${h(D.labels[lang].productRole)}</span>` : ""}</p>
        </div>
        <ul class="bullets">${shown.map(li).join("")}</ul>
        ${extra.length ? `<details class="more"><summary data-less="${h(E.less)}">${h(E.more(extra.length))}</summary><ul class="bullets">${extra.map(li).join("")}</ul></details>` : ""}
        ${e.stack ? `<p class="tl-stack">Stack: ${h(e.stack)}</p>` : ""}
      </li>`;
}

export function experience({ lang, D }) {
  const E = UI[lang].experience;
  const group = (kind, titleKey) => `
  <section class="tl-group" data-group="${kind}" aria-labelledby="g-${kind}">
    <h2 id="g-${kind}" class="section-title">${h(E.filters[titleKey])}</h2>
    <ol class="timeline" role="list">${D.experience.filter(e => e.kind === kind).map(e => entry(e, lang, D)).join("")}
    </ol>
  </section>`;
  return {
    title: E.title,
    description: E.description,
    body: `
<div class="wrap">
  <div class="head-row">
    ${pageHead({ eyebrow: E.eyebrow, title: E.title, lead: E.lead })}
    <p class="head-action rise" style="--i:4">${button(cvRoute(lang), E.viewCv, { variant: "outline", ico: "book" })}</p>
  </div>

  <ul class="summary" role="list">
    ${D.summary.map((s, i) => `<li class="card rise" style="--i:${5 + i}"><span class="kicker">${h(s.label[lang])}</span><b>${h(s.value[lang])}</b><p>${h(s.text[lang])}</p></li>`).join("")}
  </ul>

  <div class="filters" role="group" aria-label="${h(E.filterLabel)}" hidden>
    <button type="button" data-filter="all" aria-pressed="true">${h(E.filters.all)}</button>
    <button type="button" data-filter="pro" aria-pressed="false">${h(E.filters.pro)}</button>
    <button type="button" data-filter="doc" aria-pressed="false">${h(E.filters.doc)}</button>
  </div>

  ${group("pro", "pro")}
  ${group("doc", "doc")}

  <aside class="cv-cta card" aria-labelledby="cv-cta-title">
    <div><h2 id="cv-cta-title">${h(E.cvTitle)}</h2><p>${h(E.cvText)}</p></div>
    <p class="actions">
      ${button(cvRoute(lang), E.viewCv, { variant: "primary", ico: "book" })}
      ${button(pdfRoute(lang), E.pdfFull, { variant: "outline", ico: "down", attrs: ' target="_blank" rel="noopener"' })}
      ${button(pdfRoute(lang, "resumen"), E.pdfShort, { variant: "outline", ico: "down", attrs: ' target="_blank" rel="noopener"' })}
    </p>
  </aside>
</div>`,
  };
}
