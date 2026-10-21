/** Page project : modifier la structure ici, les textes dans data/. */
import { t, tr } from "../../data/translations.js";
import { projects } from "../../data/projects.js";
import { icon } from "../icons.js";
import { html } from "../markup.js";
import { visual } from "../projects.js";
export function projectDetail(p, lang) {
  const s = t(lang),
    next = projects[(projects.indexOf(p) + 1) % projects.length];
  return html`
    <main id="main" class="project-detail">
      <div class="reading-progress" aria-label="${s.reading}"><span></span></div>
      <header class="detail-heading shell">
        <a class="back-link" href="projets.html">← ${s.back}</a>
        <div class="detail-eyebrow">
          <span class="eyebrow">${s[p.category]} / ${p.label}</span>
          <button class="text-link" data-save="${p.id}" aria-pressed="false">
            ${icon("bookmark")}
            <span>${s.save}</span>
          </button>
        </div>
        <h1>${tr(p.title, lang)}</h1>
        <p class="detail-subtitle">${tr(p.subtitle, lang)}</p>
        <div class="tags">
          ${p.tags
            .map(
              (x) => html`
                <a href="projets.html?recherche=${encodeURIComponent(x)}">${x}</a>
              `,
            )
            .join("")}
        </div>
      </header>
      <div class="detail-hero shell">${visual(p, lang, true)}</div>
      <div class="case-layout shell">
        <aside class="case-sidebar">
          <dl>
            <dt>${s.context}</dt>
            <dd>${tr(p.context, lang)}</dd>
            <dt>${s.role}</dt>
            <dd>${tr(p.role, lang)}</dd>
            <dt>${s.team}</dt>
            <dd>${tr(p.team, lang)}</dd>
          </dl>
          <nav aria-label="${lang === "fr" ? "Sommaire du projet" : "Project contents"}">
            <a href="#contexte">
              01
              <span>${s.challenge}</span>
            </a>
            <a href="#realisation">
              02
              <span>${s.work}</span>
            </a>
            <a href="#apprentissage">
              03
              <span>${s.learning}</span>
            </a>
            <a href="#galerie">
              04
              <span>${s.gallery}</span>
            </a>
          </nav>
        </aside>
        <article class="case-content">
          <section id="contexte">
            <span class="section-number">01 /</span>
            <h2>${s.challenge}</h2>
            <p>${tr(p.intro, lang)}</p>
          </section>
          <section id="realisation">
            <span class="section-number">02 /</span>
            <h2>${s.work}</h2>
            <ul class="work-list">
              ${p.work
                .map(
                  (x) => html`
                    <li>
                      ${icon("check")}
                      <span>${tr(x, lang)}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </section>
          <section id="apprentissage">
            <span class="section-number">03 /</span>
            <h2>${s.learning}</h2>
            <p>${tr(p.learning, lang)}</p>
            <div class="outcome">
              <span class="eyebrow">${s.outcome}</span>
              <p>${tr(p.outcome, lang)}</p>
            </div>
          </section>
          <section id="galerie">
            <span class="section-number">04 /</span>
            <h2>${s.gallery}</h2>
            <p class="gallery-note">${tr(p.galleryNote, lang)}</p>
            <div class="case-gallery ${p.id === "jeu-2d" ? "pixel-gallery" : ""}">
              ${p.gallery
                .map(
                  (g, i) => html`
                    <figure>
                      <button
                        data-gallery="${p.id}"
                        data-index="${i}"
                        aria-label="${s.zoom} : ${tr(g.caption, lang)}"
                      >
                        <img src="${g.src}" alt="${tr(g.caption, lang)}" loading="lazy" />
                        <span>${icon("plus")}</span>
                      </button>
                      <figcaption>
                        <span>0${i + 1}</span>
                        ${tr(g.caption, lang)}
                      </figcaption>
                    </figure>
                  `,
                )
                .join("")}
            </div>
          </section>
          <div class="project-source">
            <span>${s.references}</span>
            <a
              class="text-link"
              href="https://github.com/YassineT-git/Vitrine"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${s.original}${icon("diagonal")}
            </a>
          </div>
        </article>
      </div>
      <a class="next-project shell" href="${next.file}">
        <div>
          <span class="eyebrow">${s.next} / ${next.label}</span>
          <h2>${tr(next.title, lang)}</h2>
        </div>
        <span class="round-link">${icon("arrow")}</span>
      </a>
    </main>
  `;
}
