/** Fenêtres de recherche, apparence, confidentialité et galerie. */
import { t } from "../data/translations.js";
import { icon } from "./icons.js";
import { html } from "./markup.js";
export function dialogs(lang) {
  const s = t(lang);
  return html`
    <dialog id="command-dialog" class="command-dialog">
      <div class="command-header">
        ${icon("search")}
        <input
          id="command-input"
          type="search"
          aria-label="${s.command}"
          placeholder="${s.commandHint}"
          autocomplete="off"
        />
        <button class="icon-button" data-close-dialog aria-label="${s.close}">
          ${icon("close")}
        </button>
      </div>
      <div id="command-results" class="command-results"></div>
      <div class="command-footer">
        <span>↑ ↓ ${s.keys}</span>
        <span>↵ ${s.enter}</span>
        <span>esc ${s.esc}</span>
      </div>
    </dialog>
    <dialog id="theme-dialog" class="small-dialog">
      <div class="dialog-title">
        <h2>${s.themeTitle}</h2>
        <button class="icon-button" data-close-dialog aria-label="${s.close}">
          ${icon("close")}
        </button>
      </div>
      <div class="theme-options">
        ${["light", "dark", "system"]
          .map(
            (x) => html`
              <button data-set-theme="${x}" aria-pressed="false">
                ${icon(x === "dark" ? "moon" : x === "system" ? "globe" : "sun")}${s[x]}
              </button>
            `,
          )
          .join("")}
      </div>
    </dialog>
    <dialog id="privacy-dialog" class="small-dialog">
      <div class="dialog-title">
        <h2>${s.privacyTitle}</h2>
        <button class="icon-button" data-close-dialog aria-label="${s.close}">
          ${icon("close")}
        </button>
      </div>
      <p>${s.privacyText}</p>
      <button class="button secondary" data-clear-local>${s.clearLocal}</button>
    </dialog>
    <dialog id="gallery-dialog" class="gallery-dialog">
      <div class="lightbox-header">
        <span id="lightbox-count"></span>
        <button class="icon-button" data-close-dialog aria-label="${s.close}">
          ${icon("close")}
        </button>
      </div>
      <div class="lightbox-content">
        <button class="icon-button" data-gallery-prev aria-label="${s.prev}">←</button>
        <img id="lightbox-image" alt="" />
        <button class="icon-button" data-gallery-next aria-label="${s.nextImage}">
          →
        </button>
      </div>
      <p id="lightbox-caption"></p>
    </dialog>
    <div id="toast" class="toast" role="status" aria-live="polite"></div>
  `;
}
