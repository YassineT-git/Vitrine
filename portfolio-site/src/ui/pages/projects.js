/** Page projects : modifier la structure ici, les textes dans data/. */
import { t } from "../../data/translations.js";
import { projects } from "../../data/projects.js";
import { icon } from "../icons.js";
import { html } from "../markup.js";
import { projectCard } from "../projects.js";
import { nudge } from "../layout.js";
export function projectListing(lang) {
  const s = t(lang);
  return html`
    <main id="main" class="shell projects-page">
      <header class="page-heading">
        <span class="eyebrow">${s.projectsEyebrow}</span>
        <h1>${s.projectsTitle}</h1>
        <p>${s.projectsSub}</p>
      </header>
      <div class="project-toolbar">
        <div class="project-filters" role="group" aria-label="${s.filterLabel}">
          ${["all", "dev", "systems", "saved"]
            .map(
              (x, i) => html`
                <button
                  data-filter="${x}"
                  class="filter-button ${i === 0 ? "active" : ""}"
                  aria-pressed="${i === 0}"
                >
                  ${x === "saved" ? icon("bookmark") : ""}${s[x]}${x === "saved"
                    ? '<span class="saved-count">0</span>'
                    : ""}
                </button>
              `,
            )
            .join("")}
        </div>
        <label class="project-search">
          ${icon("search")}
          <input
            type="search"
            id="project-search"
            placeholder="${s.searchProjects}"
            aria-label="${s.searchProjects}"
            autocomplete="off"
          />
        </label>
      </div>
      <div class="results-toolbar">
        <span id="results-count" role="status" aria-live="polite">4 ${s.results}</span>
        <div>
          <label class="sort-label">
            <span class="sr-only">${s.sort}</span>
            <select id="project-sort" aria-label="${s.sort}">
              <option value="default">${s.newest}</option>
              <option value="az">${s.az}</option>
            </select>
          </label>
          <div
            class="view-switch"
            role="group"
            aria-label="${lang === "fr" ? "Affichage" : "View"}"
          >
            <button
              class="icon-button active"
              data-view="grid"
              aria-pressed="true"
              aria-label="${s.grid}"
            >
              ${icon("grid")}
            </button>
            <button
              class="icon-button"
              data-view="list"
              aria-pressed="false"
              aria-label="${s.list}"
            >
              ${icon("list")}
            </button>
          </div>
        </div>
      </div>
      <div id="project-grid" class="project-grid">
        ${projects.map((p) => projectCard(p, lang)).join("")}
      </div>
      <div id="empty-state" class="empty-state" hidden>
        ${icon("search")}
        <h2>${s.noResults}</h2>
        <p>${s.noHint}</p>
        <button class="button secondary" data-reset>${s.reset}</button>
      </div>
      <p class="local-note">${icon("bookmark")} ${s.allLocal}</p>
    </main>
    ${nudge(lang)}
  `;
}
