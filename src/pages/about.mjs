// Sobre mí: presentación, enfoque, especialidades, metodología y formación.
import { UI, ROUTES } from "../i18n.mjs";
import { h, icon, pageHead, chips, button } from "../components/ui.mjs";

export function about({ lang, D }) {
  const L = UI[lang], A = L.about;
  const specialties = D.skills.map((g, i) => `
      <li class="spec card rise" style="--i:${i}">
        <span class="spec-ic">${icon(A.specialtyIcons[g.group[lang]] || "layers", 22)}</span>
        <h3>${h(g.group[lang])}</h3>
        ${chips(g.items[lang])}
      </li>`).join("");
  const steps = A.steps.map(([ic, name, text], i) => `
      <li class="step">
        <span class="step-ic">${icon(ic, 22)}</span>
        <span class="step-n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${h(name)}</h3>
        <p>${h(text)}</p>
      </li>`).join("");
  const certs = D.certifications.map(g => `
        <h4>${h(g.group[lang])}</h4>
        <ul class="plain" role="list">${g.items.map(i => `<li><span>${h(i.name[lang])}</span><small>${[i.issuer, i.year].filter(Boolean).map(h).join(" · ")}</small></li>`).join("")}</ul>`).join("");
  return {
    title: A.title,
    description: A.description,
    body: `
<div class="wrap">
  <div class="intro-grid">
    ${pageHead({ eyebrow: A.eyebrow, title: A.title, lead: A.lead })}
    <figure class="intro-illo rise" style="--i:2"><img src="/img/sobre-mi.webp" alt="${h(A.illoAlt)}" width="1200" height="900"></figure>
  </div>

  <section class="block" aria-labelledby="approach">
    <h2 id="approach" class="section-title">${h(A.approach)}</h2>
    <p class="body-text">${h(D.approach[lang])}</p>
    <ul class="traits" role="list">
      ${A.traits.map(([ic, label]) => `<li>${icon(ic, 22)}<span>${h(label)}</span></li>`).join("")}
    </ul>
  </section>

  <section class="block" aria-labelledby="specialties">
    <h2 id="specialties" class="section-title">${h(A.specialties)}</h2>
    <ul class="specs" role="list">${specialties}
    </ul>
  </section>

  <section class="block" id="metodologia" aria-labelledby="method">
    <h2 id="method" class="section-title">${h(A.method)}</h2>
    <p class="body-text">${h(A.methodLead)}</p>
    <ol class="steps">${steps}
    </ol>
  </section>

  <section class="block" aria-labelledby="education">
    <h2 id="education" class="section-title">${h(A.education)}</h2>
    <div class="edu-grid">
      <div class="card">
        <ul class="plain" role="list">${D.education.map(x => `<li><span>${h(x.title[lang])}</span><small>${h(x.school)} · ${h(x.year[lang])}</small></li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>${h(A.certifications)}</h3>${certs}
      </div>
      <div class="card">
        <h3>${h(A.languages)}</h3>
        <ul class="plain" role="list">${D.languages.map(l => `<li><span>${h(l[lang])}</span></li>`).join("")}</ul>
      </div>
    </div>
  </section>

  <p class="next-step">${button(ROUTES.projects[lang], UI[lang].nav.projects, { variant: "primary", ico: "arrow" })}</p>
</div>`,
  };
}
