// Contacto: motivos y canales reales (correo, teléfono, LinkedIn, CV en PDF).
import { UI, cvRoute, pdfRoute } from "../i18n.mjs";
import { h, icon, pageHead, copyButton, button } from "../components/ui.mjs";

export function contact({ lang, D }) {
  const L = UI[lang], C = L.contact, c = D.contact;
  return {
    title: C.title,
    description: C.description,
    body: `
<div class="wrap">
  ${pageHead({ eyebrow: C.eyebrow, title: C.heading, lead: C.lead, size: "xl" })}

  <section aria-labelledby="reasons-title" class="block tight">
    <h2 id="reasons-title" class="sr-only">${h(C.reasonsLabel)}</h2>
    <ul class="reasons" role="list">
      ${C.reasons.map(([ic, title, text], i) => `<li class="card rise" style="--i:${4 + i}">${icon(ic, 24)}<h3>${h(title)}</h3><p>${h(text)}</p></li>`).join("")}
    </ul>
  </section>

  <section aria-labelledby="channels-title" class="block">
    <h2 id="channels-title" class="section-title">${h(C.channelsLabel)}</h2>
    <ul class="channels" role="list">
      <li class="channel card">
        <span class="kicker">${icon("mail", 18)} ${h(C.email)}</span>
        <a class="channel-value" href="mailto:${h(c.email)}">${h(c.email)}</a>
        <p class="channel-actions">${button(`mailto:${c.email}`, C.write, { variant: "primary", ico: "arrow" })} ${copyButton(c.email, L.copy)}</p>
      </li>
      <li class="channel card">
        <span class="kicker">${icon("in", 18)} ${h(C.linkedin)}</span>
        <a class="channel-value" href="${h(c.linkedinUrl)}" target="_blank" rel="noopener">${h(c.linkedin)}</a>
        <p class="channel-actions">${button(c.linkedinUrl, C.profile, { variant: "outline", ico: "arrow", attrs: ' target="_blank" rel="noopener"' })}</p>
      </li>
      <li class="channel card">
        <span class="kicker">${icon("phone", 18)} ${h(C.phone)}</span>
        <a class="channel-value" href="tel:${h(c.phoneRaw)}">${h(c.phone)}</a>
        <p class="channel-actions">${button(`tel:${c.phoneRaw}`, C.call, { variant: "outline", ico: "phone" })} ${copyButton(c.phoneRaw, L.copy)}</p>
      </li>
      <li class="channel card accent-card">
        <span class="kicker">${icon("down", 18)} ${h(C.cv)}</span>
        <a class="channel-value" href="${cvRoute(lang)}">${h(L.home.viewCv)}</a>
        <p class="channel-actions stack">
          ${button(pdfRoute(lang), C.pdfFull, { variant: "outline", ico: "down", attrs: ' target="_blank" rel="noopener"' })}
          ${button(pdfRoute(lang, "resumen"), C.pdfShort, { variant: "outline", ico: "down", attrs: ' target="_blank" rel="noopener"' })}
        </p>
      </li>
    </ul>
    <p class="location">${icon("pin", 18)} ${h(C.location)}: ${h(c.location)}</p>
  </section>
</div>`,
  };
}
