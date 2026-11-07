// Comprueba el sitio generado sin navegador: rutas, enlaces, anclas, SEO e idioma.
// Uso: node build.mjs && node tests/rutas.mjs
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "../src/i18n.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const fails = [], passes = [];
const check = (name, ok, detail = "") => (ok ? passes : fails).push(detail ? `${name} — ${detail}` : name);

// páginas generadas: index.html en la raíz y en cada carpeta de ruta, más 404.html
const SKIP = new Set(["node_modules", ".git", "src", "tests", "docs", "img", "assets", ".claude"]);
function pages(dir = ROOT, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { if (!SKIP.has(f)) pages(p, out); }
    else if (f === "index.html" || (dir === ROOT && f === "404.html")) out.push(p);
  }
  return out;
}
const routeOf = file => "/" + file.slice(ROOT.length + 1).replace(/index\.html$/, "");
const fileOf = route => {
  const clean = route.split(/[?#]/)[0];
  const p = join(ROOT, clean);
  return clean.endsWith("/") ? join(p, "index.html") : p;
};
const attr = (html, re) => [...html.matchAll(re)].map(m => m[1]);
const meta = (html, name) => (html.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`)) || [])[1];

const all = pages();
check("Páginas generadas", all.length >= 17, `${all.length} archivos`);
const descriptions = new Map();

for (const file of all) {
  const html = readFileSync(file, "utf8"), route = routeOf(file), is404 = route === "/404.html";
  const lang = (html.match(/<html lang="(\w+)"/) || [])[1];
  // idioma coherente con la ruta
  check(`${route}: idioma`, is404 || lang === (route.startsWith("/en/") ? "en" : "es"), lang);
  // SEO por ruta
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
  const desc = meta(html, "description");
  check(`${route}: título y descripción`, !!title && !!desc && desc.length >= 50);
  if (!is404) {
    const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    check(`${route}: canonical`, canonical === SITE + route, canonical);
    for (const l of ["es", "en"]) {
      const alt = (html.match(new RegExp(`hreflang="${l}" href="${SITE}([^"]+)"`)) || [])[1];
      check(`${route}: hreflang ${l}`, !!alt && existsSync(fileOf(alt)), alt);
    }
    if (descriptions.has(desc)) check(`${route}: descripción única`, false, `igual que ${descriptions.get(desc)}`);
    descriptions.set(desc, route);
  }
  const og = meta(html, "og:image");
  check(`${route}: imagen de vista previa`, !!og && existsSync(fileOf(og.replace(SITE, ""))), og);
  // un único h1 y página activa en el menú
  check(`${route}: un solo h1`, (html.match(/<h1[\s>]/g) || []).length === 1);
  if (!is404) check(`${route}: página activa en el menú`, /aria-current="(page|true)" class="on"/.test(html));
  // enlaces y recursos internos
  const refs = [...attr(html, /href="([^"]+)"/g), ...attr(html, /src="([^"]+)"/g)]
    .filter(u => u.startsWith("/") && !u.startsWith("//"));
  const broken = refs.filter(u => !existsSync(fileOf(u)));
  check(`${route}: enlaces internos`, broken.length === 0, broken.join(", "));
  // anclas dentro de la misma página
  const ids = new Set(attr(html, /\sid="([^"]+)"/g));
  const anchors = attr(html, /href="#([^"]+)"/g).filter(a => !ids.has(a));
  check(`${route}: anclas`, anchors.length === 0, anchors.join(", "));
  // las páginas en inglés no deben mostrar la interfaz en español (y viceversa)
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  const foreign = lang === "en" ? ["Sobre mí", "Proyectos", "Experiencia profesional", "Hablemos", "Ver caso de estudio", "Saltar al contenido"]
                                : ["Let's talk", "View case study", "Skip to content", "Professional experience"];
  const leaked = foreign.filter(w => visible.includes(w));
  check(`${route}: textos en su idioma`, leaked.length === 0, leaked.join(", "));
  // no se publican marcas internas
  check(`${route}: sin TODO visibles`, !/TODO/.test(visible));
}

// sitemap: todas las URL existen
const sitemap = readFileSync(join(ROOT, "sitemap.xml"), "utf8");
const locs = attr(sitemap, /<loc>([^<]+)<\/loc>/g);
const missing = locs.filter(u => !existsSync(fileOf(u.replace(SITE, ""))));
check("sitemap.xml", locs.length >= 16 && missing.length === 0, `${locs.length} URL${missing.length ? ", faltan: " + missing.join(", ") : ""}`);

// redirecciones de los enlaces antiguos de la página única
const home = readFileSync(join(ROOT, "index.html"), "utf8");
const map = JSON.parse((home.match(/var m=(\{[^;]+\}),k=/) || [])[1] || "{}");
const badRedirects = Object.entries(map).filter(([, to]) => !existsSync(fileOf(to)));
check("Redirecciones de enlaces antiguos", Object.keys(map).length >= 10 && badRedirects.length === 0, badRedirects.map(([k, v]) => `#${k}→${v}`).join(", "));

// el CV y su vista ATS siguen disponibles
check("cv.html disponible", existsSync(join(ROOT, "cv.html")) && existsSync(join(ROOT, "cv-data.js")));

console.log(`${passes.length} comprobaciones OK, ${fails.length} fallos`);
if (fails.length) { console.log("\nFallos:\n- " + fails.join("\n- ")); process.exit(1); }
