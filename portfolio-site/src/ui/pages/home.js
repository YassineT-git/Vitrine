/** Page home : modifier la structure ici, les textes dans data/. */
import { t } from "../../data/translations.js";
import { projects } from "../../data/projects.js";
import { html } from "../markup.js";
import { projectCard } from "../projects.js";
import { nudge, skills } from "../layout.js";
import { icon } from "../icons.js";
import { profile } from "../../data/profile.js";
export function home(lang) {
  const s = t(lang);
  return html`
    <main id="main">
      <section class="hero shell">
        <div class="hero-eyebrow">
          <span class="eyebrow">${s.homeEyebrow}</span>
          <span class="hero-note">${s.homeNote}</span>
        </div>
        <div class="hero-layout">
          <h1>${s.homeTitle}</h1>
          <div class="hero-aside">
            <p>${s.homeIntro}</p>
            <div class="hero-actions">
              <a class="button primary" href="projets.html">
                ${s.explore}${icon("arrow")}
              </a>
              <a class="text-link" href="${profile.resume}" download>
                ${s.cv} ${icon("download")}
              </a>
            </div>
          </div>
        </div>
        <div class="hero-bottom">
          <div class="domain-list">
            <span>${s.homeLine}</span>
            <i></i>
            <span>${s.homeLine2}</span>
            <i></i>
            <span>${s.homeLine3}</span>
          </div>
          <a href="#selection" class="scroll-link" aria-label="${s.featured}">↓</a>
        </div>
      </section>
      <section class="selected-section shell" id="selection">
        <div class="section-heading">
          <h2>${s.selectedTitle}</h2>
          <div>
            <p>${s.selectedSub}</p>
            <a class="text-link" href="projets.html">${s.allProjects}${icon("arrow")}</a>
          </div>
        </div>
        <div class="project-grid home-projects">
          ${projects
            .slice(0, 2)
            .map((p) => projectCard(p, lang))
            .join("")}
        </div>
        <a class="all-projects-link" href="projets.html">
          <span>${s.projectCount}</span>
          <span>${s.allProjects}${icon("arrow")}</span>
        </a>
      </section>
      ${skills(lang)}
      <section class="about-teaser shell">
        <div class="about-mark" aria-hidden="true">
          y
          <span>t.</span>
        </div>
        <div>
          <span class="eyebrow">${s.now}</span>
          <h2>
            ${lang === "fr"
              ? "Études, alternance<br>et enseignement."
              : "Studies, work<br>and teaching."}
          </h2>
          <p>${s.nowText}</p>
          <a class="text-link" href="parcours.html">${s.aboutLink}${icon("arrow")}</a>
        </div>
      </section>
      ${nudge(lang)}
    </main>
  `;
}
