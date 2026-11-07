// 404: página no encontrada (GitHub Pages la sirve para cualquier ruta inexistente).
import { UI, ROUTES } from "../i18n.mjs";
import { h, pageHead, button } from "../components/ui.mjs";

export function notFound({ lang }) {
  const N = UI[lang].notFound;
  return {
    title: N.title,
    description: N.lead,
    body: `
<div class="wrap">
  ${pageHead({ eyebrow: "404", title: N.title, lead: N.lead })}
  <p class="actions">${button(ROUTES.home[lang], N.back, { variant: "primary", ico: "arrow" })} ${button(ROUTES.projects[lang], UI[lang].nav.projects, { variant: "outline", ico: "arrow" })}</p>
</div>`,
  };
}
