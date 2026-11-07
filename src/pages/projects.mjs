// Proyectos: portafolio visual; cada tarjeta lleva a su caso de estudio.
import { UI, caseRoute } from "../i18n.mjs";
import { h, icon, pageHead, chips } from "../components/ui.mjs";

export function projectCard(p, lang, i = 0, headingLevel = 2) {
  const P = UI[lang].projects, Hn = `h${headingLevel}`;
  return `
    <li class="project rise" style="--i:${i + 2}">
      <figure class="project-media${p.id === "gravity" ? " grey" : ""}"><img src="/${h(p.image.replace(".png", ".webp"))}" alt="" width="1200" height="900" loading="lazy"></figure>
      <div class="project-body">
        <${Hn}>${h(p.title)}</${Hn}>
        <p class="project-sum">${h(p.subtitle[lang])}</p>
        <dl class="project-meta">
          <div><dt>${h(P.role)}</dt><dd>${h(p.role[lang])}</dd></div>
          <div><dt>${h(P.tech)}</dt><dd>${chips(p.stack)}</dd></div>
        </dl>
        <a class="case-link" href="${caseRoute(p.slug, lang)}" aria-label="${h(P.viewCase)}: ${h(p.title)}">${h(P.viewCase)} ${icon("arrow", 18)}</a>
      </div>
    </li>`;
}

export function projects({ lang, D }) {
  const P = UI[lang].projects;
  return {
    title: P.title,
    description: P.description,
    body: `
<div class="wrap">
  ${pageHead({ eyebrow: P.eyebrow, title: P.title, lead: P.lead })}
  <ul class="projects" role="list">${D.projects.map((p, i) => projectCard(p, lang, i)).join("")}
  </ul>
</div>`,
  };
}
