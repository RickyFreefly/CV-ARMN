// Genera el sitio estático a partir de cv-data.js y src/.
// Uso: node build.mjs   (Node 18+, sin dependencias)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

import { SITE, LANGS, PAGES, ROUTES, caseRoute } from "./src/i18n.mjs";
import { base } from "./src/layouts/base.mjs";
import { home } from "./src/pages/home.mjs";
import { about } from "./src/pages/about.mjs";
import { projects } from "./src/pages/projects.mjs";
import { caseStudy } from "./src/pages/case.mjs";
import { experience } from "./src/pages/experience.mjs";
import { contact } from "./src/pages/contact.mjs";
import { notFound } from "./src/pages/notfound.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));

// cv-data.js asigna window.CV_DATA; se evalúa en un contexto aislado
const sandbox = { window: {} };
vm.runInNewContext(readFileSync(join(ROOT, "cv-data.js"), "utf8"), sandbox);
const D = sandbox.window.CV_DATA;

const PAGE_FN = { home, about, projects, experience, contact };
const written = [];

function write(route, html) {
  const file = route.endsWith("/") ? join(ROOT, route, "index.html") : join(ROOT, route);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written.push(route);
}

// enlaces antiguos de la página única (#en, #hablemos, #caso-…) → nuevas rutas
function legacyRedirects(lang) {
  const map = {
    en: "/en/", es: "/",
    hablemos: ROUTES.contact[lang], contacto: ROUTES.contact[lang],
    "sobre-mi": ROUTES.about[lang], competencias: ROUTES.about[lang], proceso: ROUTES.about[lang] + "#metodologia",
    proyectos: ROUTES.projects[lang], experiencia: ROUTES.experience[lang], inicio: ROUTES.home[lang],
    ...Object.fromEntries(D.projects.map(p => [`caso-${p.id}`, caseRoute(p.slug, lang)])),
  };
  return `<script>(function(){var m=${JSON.stringify(map)},k=location.hash.slice(1);if(m[k]&&m[k]!==location.pathname)location.replace(m[k]);})();</script>`;
}

for (const lang of LANGS) {
  PAGES.forEach((page, order) => {
    const out = PAGE_FN[page]({ lang, D });
    const alternate = ROUTES[page];
    write(ROUTES[page][lang], base({
      lang, page, order, D, alternate, path: ROUTES[page][lang], ...out,
      extraHead: page === "home" ? legacyRedirects(lang) : "",
    }));
  });
  for (const project of D.projects) {
    const out = caseStudy({ lang, D, project });
    const alternate = { es: caseRoute(project.slug, "es"), en: caseRoute(project.slug, "en") };
    write(caseRoute(project.slug, lang), base({ lang, page: "case", order: PAGES.indexOf("projects") + 0.5, D, alternate, path: alternate[lang], ...out, showPager: false }));
  }
}

// 404 (GitHub Pages la usa para cualquier ruta inexistente)
const nf = notFound({ lang: "es" });
write("/404.html", base({ lang: "es", page: "404", order: -1, D, alternate: { es: "/", en: "/en/" }, path: "/404.html", ...nf, showPager: false, noindex: true }));

// sitemap con alternativas por idioma
const pairs = [
  ...PAGES.map(p => ROUTES[p]),
  ...D.projects.map(p => ({ es: caseRoute(p.slug, "es"), en: caseRoute(p.slug, "en") })),
];
const today = new Date().toISOString().slice(0, 10);
const urls = pairs.flatMap(pair => LANGS.map(lang => `  <url>
    <loc>${SITE}${pair[lang]}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE}${pair.es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${pair.en}"/>
  </url>`)).join("\n");
writeFileSync(join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`);
writeFileSync(join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /docs/\nDisallow: /tests/\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`${written.length} páginas generadas:\n  ${written.join("\n  ")}\n+ sitemap.xml, robots.txt`);
