/** En-tête, pied de page et blocs réutilisés. */
import { t, tr } from "../data/translations.js";
import { profile } from "../data/profile.js";
import { icon } from "./icons.js";
import { html } from "./markup.js";
export function header(page, lang) {
  const s = t(lang),
    active = page.startsWith("project-") ? "projects" : page;
  return html`
    <a class="skip-link" href="#main">${s.skip}</a>
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="index.html" aria-label="Yassine Tahiri — ${s.home}">
          yt
          <span>.</span>
        </a>
        <nav
          class="desktop-nav"
          aria-label="${lang === "fr" ? "Navigation principale" : "Main navigation"}"
        >
          ${[
            ["home", "index.html"],
            ["projects", "projets.html"],
            ["about", "parcours.html"],
            ["contact", "contact.html"],
          ]
            .map(
              ([key, url]) => html`
                <a href="${url}" ${active === key ? 'aria-current="page"' : ""}>
                  ${s[key]}
                </a>
              `,
            )
            .join("")}
        </nav>
        <div class="nav-actions">
          <button class="search-trigger" data-command aria-label="${s.search}">
            ${icon("search")}
            <kbd>⌘ K</kbd>
          </button>
          <button
            class="icon-button language-button lang-push"
            data-language
            aria-label="${s.language}"
          >
            <span class="language-cube" aria-hidden="true">
              <span class="language-face language-front">${icon("translate")}</span>
              <span class="language-face language-bottom">
                ${lang === "fr" ? "ANG" : "FR"}
              </span>
            </span>
          </button>
          <button
            class="icon-button"
            data-theme
            aria-label="${s.theme}"
            aria-haspopup="dialog"
          >
            ${icon("sun")}
          </button>
          <button
            class="icon-button mobile-toggle"
            data-menu
            aria-label="${s.menu}"
            aria-expanded="false"
          >
            ${icon("menu")}
          </button>
        </div>
      </div>
    </header>
  `;
}
export function footer(lang) {
  const s = t(lang);
  return html`
    <footer class="site-footer shell">
      <a class="brand" href="index.html" aria-label="Yassine Tahiri">
        yt
        <span>.</span>
      </a>
      <p>${s.footer}</p>
      <div class="footer-links">
        <a href="${profile.github}" target="_blank" rel="noopener noreferrer">
          GitHub ${icon("diagonal")}
        </a>
        <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
          LinkedIn ${icon("diagonal")}
        </a>
        <button data-privacy>${s.privacy}</button>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Yassine Tahiri</span>
        <span>${s.made}</span>
        <a href="#top">${s.top} ↑</a>
      </div>
    </footer>
  `;
}
export function nudge(lang) {
  const s = t(lang);
  return html`
    <section class="contact-nudge shell">
      <div>
        <span class="eyebrow">${s.talk}</span>
        <h2>${s.contactNudge}</h2>
        <p>${s.contactNudgeText}</p>
      </div>
      <a href="contact.html" class="round-link" aria-label="${s.contact}">
        ${icon("diagonal")}
      </a>
    </section>
  `;
}
export function skills(lang) {
  const s = t(lang);
  return html`
    <section class="skills-section shell" id="competences">
      <div class="section-heading">
        <h2>${s.skillTitle}</h2>
        <p>${s.skillSub}</p>
      </div>
      <div class="skill-rows">
        ${[
          [
            "code",
            s.skillDev,
            s.skillDevText,
            "Java · C++ · Python · HTML / CSS",
            "projets.html?filtre=dev",
            s.seePractice,
          ],
          [
            "network",
            s.skillSys,
            s.skillSysText,
            "Linux · SSH · DNS · MariaDB",
            "projets.html?filtre=systems",
            s.seePractice,
          ],
          [
            "shield",
            s.skillCyber,
            s.skillCyberText,
            "EDR · SIEM · DLP · Gestion de projet",
            "parcours.html#experience",
            s.seeExperience,
          ],
        ]
          .map(
            ([ico, title, desc, tools, href, label], i) => html`
              <a class="skill-row" href="${href}">
                <span class="skill-icon">${icon(ico)}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${desc}</p>
                  <span class="skill-tools">${tools}</span>
                </div>
                <span class="skill-link">${label} ${icon("diagonal")}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}
