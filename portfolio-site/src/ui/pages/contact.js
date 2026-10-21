/** Page contact : modifier la structure ici, les textes dans data/. */
import { t } from "../../data/translations.js";
import { profile } from "../../data/profile.js";
import { icon } from "../icons.js";
import { html } from "../markup.js";
export function contact(lang) {
  const s = t(lang);
  return html`
    <main id="main" class="contact-page shell">
      <header class="page-heading">
        <span class="eyebrow">${s.talk}</span>
        <h1>${s.contactTitle}</h1>
        <p>${s.contactSub}</p>
      </header>
      <div class="contact-layout">
        <aside class="contact-info">
          <span class="eyebrow">${s.direct}</span>
          <a class="email-large" href="mailto:${profile.email}">
            ${profile.email.replace("@", "<br>@")} ${icon("diagonal")}
          </a>
          <button class="text-link" data-copy>${icon("copy")} ${s.copy}</button>
          <div class="contact-location">${icon("location")}${s.location}</div>
          <div class="contact-social">
            <span class="eyebrow">${s.elsewhere}</span>
            <a href="${profile.github}" target="_blank" rel="noopener noreferrer">
              GitHub ${icon("diagonal")}
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
              LinkedIn ${icon("diagonal")}
            </a>
            <a href="${profile.resume}" download>${s.download}${icon("download")}</a>
          </div>
        </aside>
        <div>
          <form id="contact-form" class="contact-form">
            <div class="form-row">
              <label>
                ${s.formName}
                <input
                  name="name"
                  autocomplete="name"
                  required
                  maxlength="100"
                  placeholder="${lang === "fr" ? "Prénom Nom" : "Full name"}"
                />
              </label>
              <label>
                ${s.formEmail}
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  maxlength="254"
                  placeholder="vous@exemple.fr"
                />
              </label>
            </div>
            <label>
              ${s.formSubject}
              <select name="subject">
                ${["Hello", "Project", "Career", "Other"]
                  .map(
                    (x) => html`
                      <option value="${x}">${s["subject" + x]}</option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
            <label>
              ${s.formMessage}
              <textarea
                name="message"
                rows="6"
                required
                minlength="10"
                maxlength="5000"
                placeholder="${s.formPlaceholder}"
              ></textarea>
            </label>
            <div class="draft-row">
              <span id="draft-status">${s.formDraft}</span>
              <button type="button" data-clear-draft>${s.formClear}</button>
            </div>
            <button class="button primary" type="submit">
              ${s.formSend}${icon("arrow")}
            </button>
            <p class="form-note">${s.formNote}</p>
          </form>
          <div id="form-result" class="form-result" role="status" hidden>
            <p>${s.formReady}</p>
            <a id="prepared-email" class="text-link" href="mailto:${profile.email}">
              ${s.sendAgain}${icon("diagonal")}
            </a>
          </div>
        </div>
      </div>
    </main>
  `;
}
