// Layout compartido: <head> con SEO por ruta, encabezado, contenido, recorrido y pie.
import { SITE, UI } from "../i18n.mjs";
import { ICON_SPRITE } from "../components/icons.mjs";
import { header } from "../components/header.mjs";
import { footer, pager } from "../components/footer.mjs";
import { h } from "../components/ui.mjs";

const VERSION = Date.now().toString(36); // evita que el navegador use CSS/JS viejos tras publicar

export function base({ lang, page, order, title, description, path, alternate, body, D, ogImage, extraHead = "", showPager = true, noindex = false }) {
  const L = UI[lang];
  const fullTitle = page === "home" ? title : `${title} · Armando Medina`;
  const og = ogImage || `/img/og-${lang}.png`;
  return `<!doctype html>
<html lang="${lang}" data-order="${order}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${h(fullTitle)}</title>
<meta name="description" content="${h(description)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${SITE}${path}">
<link rel="alternate" hreflang="es" href="${SITE}${alternate.es}">
<link rel="alternate" hreflang="en" href="${SITE}${alternate.en}">
<link rel="alternate" hreflang="x-default" href="${SITE}${alternate.es}">`}
<meta property="og:type" content="${page === "case" ? "article" : "website"}">
<meta property="og:site_name" content="Armando Medina">
<meta property="og:title" content="${h(fullTitle)}">
<meta property="og:description" content="${h(description)}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${SITE}${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${lang === "es" ? "es_CO" : "en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#fdfcfa">
<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap">
<link rel="stylesheet" href="/assets/site.css?v=${VERSION}">
${extraHead}
<script src="/assets/site.js?v=${VERSION}" defer></script>
</head>
<body data-page="${page}">
${ICON_SPRITE}
${header({ lang, page, alternate })}
<p class="sr-only" id="live" aria-live="polite"></p>
<main id="main" tabindex="-1">
${body}
</main>
${showPager ? pager({ lang, page: page === "case" ? "" : page }) : ""}
${footer({ lang, D })}
</body>
</html>
`;
}
