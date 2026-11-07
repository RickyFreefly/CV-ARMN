// Inicio: portada editorial breve con propuesta de valor, visual conceptual, indicadores y puertas de entrada.
import { ROUTES, UI, cvRoute } from "../i18n.mjs";
import { h, icon, squiggle, button } from "../components/ui.mjs";

export function home({ lang, D }) {
  const L = UI[lang], H = L.home;
  const [first, ...rest] = D.shortName.split(" ");
  const nameWords = [`<span class="w" style="--i:0">${h(first)}</span>`, `<span class="w accent" style="--i:1">${h(rest.join(" "))}</span>`].join(" ");
  const doors = ["about", "projects", "experience"].map((p, i) => `
        <li><a class="door rise" style="--i:${8 + i}" href="${ROUTES[p][lang]}">
          <span class="door-title">${h(L.nav[p])} ${icon("arrow", 18)}</span>
          <span class="door-text">${h(H.doors[p])}</span>
        </a></li>`).join("");
  return {
    title: H.title,
    description: H.description,
    body: `
<section class="hero wrap" aria-labelledby="page-title">
  <div class="hero-copy">
    <p class="eyebrow rise" style="--i:0">${h(D.role[lang])}</p>
    <h1 id="page-title" class="title display">${nameWords}</h1>
    ${squiggle}
    <p class="lead rise" style="--i:3">${h(D.pitch[lang])}</p>
    <div class="actions rise" style="--i:4">
      ${button(ROUTES.projects[lang], H.explore, { variant: "primary", ico: "arrow" })}
      ${button(cvRoute(lang), H.viewCv, { variant: "outline", ico: "book" })}
    </div>
  </div>
  <figure class="hero-visual rise" style="--i:2">
    <img src="/img/hero.webp" alt="${h(H.heroAlt)}" width="1200" height="900" fetchpriority="high">
    <svg class="links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M18 18 C 40 4, 62 4, 84 20"/><path d="M84 20 C 96 46, 92 66, 76 86"/><path d="M18 18 C 4 44, 10 70, 30 84"/>
    </svg>
    <ul class="concepts" role="list" aria-label="${h(H.concepts.join(", "))}">
      ${H.concepts.map((c, i) => `<li class="concept c${i + 1}"><span class="dot" aria-hidden="true"></span>${h(c)}</li>`).join("")}
    </ul>
  </figure>
</section>

<section class="wrap stats-band" aria-label="${h(H.statsLabel)}">
  <ul class="stats" role="list">
    ${H.stats.map(([n, label], i) => `<li class="rise" style="--i:${5 + i}"><b>${h(n)}</b><span>${h(label)}</span></li>`).join("")}
  </ul>
</section>

<section class="wrap doors-band" aria-labelledby="doors-title">
  <h2 id="doors-title" class="kicker">${h(H.doorsLabel)}</h2>
  <ul class="doors" role="list">${doors}
  </ul>
</section>`,
  };
}
