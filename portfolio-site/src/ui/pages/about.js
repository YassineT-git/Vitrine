/** Page about : modifier la structure ici, les textes dans data/. */
import { t, tr } from "../../data/translations.js";
import { profile, experience } from "../../data/profile.js";
import { icon } from "../icons.js";
import { html } from "../markup.js";
import { nudge } from "../layout.js";
export function about(lang) {
  const s = t(lang);
  return html`
    <main id="main">
      <header class="page-heading shell about-heading">
        <span class="eyebrow">Yassine Tahiri / ${s.about}</span>
        <h1>${s.aboutTitle}</h1>
        <p>${s.aboutSub}</p>
      </header>
      <div class="about-intro shell">
        <span class="eyebrow">${s.aboutMe}</span>
        <div>
          <p class="large-copy">${s.aboutIntro}</p>
          <a class="text-link" href="assets/CV_Yassine.pdf" download>
            ${s.download}${icon("download")}
          </a>
        </div>
      </div>
      <section class="experience-section shell" id="experience">
        <div class="section-heading">
          <h2>${s.experience}</h2>
          <p>
            ${lang === "fr"
              ? "Cybersécurité, gestion de projet et formation."
              : "Cybersecurity, project management and teaching."}
          </p>
        </div>
        <div class="timeline">
          ${experience
            .map(
              (e, i) => html`
                <details class="experience-item" ${i === 0 ? "open" : ""}>
                  <summary>
                    <span class="experience-date">${tr(e.date, lang)}</span>
                    <div>
                      <span class="experience-org">${tr(e.org, lang)}</span>
                      <h3>${tr(e.title, lang)}</h3>
                      <p>${tr(e.desc, lang)}</p>
                    </div>
                    <span class="expand-icon">${icon("plus")}</span>
                  </summary>
                  <div class="experience-content">
                    <ul>
                      ${e.items
                        .map(
                          (x) => html`
                            <li>${tr(x, lang)}</li>
                          `,
                        )
                        .join("")}
                    </ul>
                  </div>
                </details>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="education-section shell">
        <div class="section-heading"><h2>${s.education}</h2></div>
        ${profile.education
          .map(
            (e) => html`
              <div class="education-row">
                <span>${tr(e.date, lang)}</span>
                <div>
                  <h3>${tr(e.title, lang)}</h3>
                  <p>${tr(e.detail, lang)}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </section>
      <section class="method-section shell">
        <div class="section-heading"><h2>${s.approach}</h2></div>
        <div class="method-grid">
          ${[1, 2, 3]
            .map(
              (i) => html`
                <article>
                  <span>0${i}</span>
                  <h3>${s["method" + i]}</h3>
                  <p>${s["method" + i + "Text"]}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="personal-row">
          <div>
            <span class="eyebrow">${s.languages}</span>
            <p>
              ${lang === "fr"
                ? "Français · langue maternelle<br>Anglais · B2<br>Espagnol · B1"
                : "French · native<br>English · B2<br>Spanish · B1"}
            </p>
          </div>
          <div>
            <span class="eyebrow">${s.interests}</span>
            <p>${s.interestsText}</p>
          </div>
        </div>
      </section>
      ${nudge(lang)}
    </main>
  `;
}
