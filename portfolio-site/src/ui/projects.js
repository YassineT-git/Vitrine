/** Visuels et cartes des projets. Les images réelles restent identifiées dans les fiches. */
import { t, tr } from "../data/translations.js";
import { icon } from "./icons.js";
import { html } from "./markup.js";
export function visual(p, lang, hero = false) {
  if (p.id === "ciup")
    return html`
      <div class="project-visual visual-ciup ${hero ? "large" : ""}">
        <div class="window-frame">
          <div class="window-bar">
            <i></i>
            <i></i>
            <i></i>
            <span>CIUP · Java Swing</span>
          </div>
          <img
            src="assets/projets/p1/liste.png"
            alt="${tr(p.gallery[0].caption, lang)}"
            ${hero ? "" : 'loading="lazy"'}
            width="1704"
            height="1154"
          />
        </div>
        <span class="visual-label">INTERFACE / JAVA SWING</span>
      </div>
    `;
  if (p.id === "jeu-2d")
    return html`
      <div class="project-visual visual-game">
        <div class="pixel-grid" aria-hidden="true"></div>
        <div class="game-label">
          C++
          <span>/ SDL2</span>
        </div>
        <img
          src="assets/projets/p2/chevalier-pixel.gif"
          alt="${tr(p.gallery[0].caption, lang)}"
          width="180"
          height="180"
          loading="lazy"
        />
        <span class="visual-label">
          ${lang === "fr" ? "UN UNIVERS EN PIXELS" : "A WORLD OF PIXELS"}
        </span>
        <span class="pixel-star" aria-hidden="true">✦</span>
      </div>
    `;
  if (p.id === "raspberry")
    return html`
      <div class="project-visual visual-pi">
        <span class="hardware-label">$ ssh pi@raspberry</span>
        <img
          src="assets/projets/p3/Rasperry.webp"
          alt="${lang === "fr"
            ? "Illustration d’un Raspberry Pi"
            : "Raspberry Pi illustration"}"
          width="1000"
          height="1000"
          loading="lazy"
        />
        <span class="visual-label">LINUX / MARIADB / SSH</span>
      </div>
    `;
  return html`
    <div class="project-visual visual-network">
      <div class="network-drawing" aria-hidden="true">
        <svg viewBox="0 0 400 220" fill="none">
          <path
            d="M70 60 200 110 330 60M70 160 200 110 330 160M200 110V20M200 110v90"
            stroke="currentColor"
            stroke-width="1"
          />
          <circle
            cx="200"
            cy="110"
            r="27"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <rect
            x="42"
            y="42"
            width="56"
            height="36"
            rx="6"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <rect
            x="42"
            y="142"
            width="56"
            height="36"
            rx="6"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <rect
            x="302"
            y="42"
            width="56"
            height="36"
            rx="6"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <rect
            x="302"
            y="142"
            width="56"
            height="36"
            rx="6"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <circle
            cx="200"
            cy="20"
            r="8"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <circle
            cx="200"
            cy="200"
            r="8"
            fill="var(--network-node)"
            stroke="currentColor"
          />
          <path
            d="M188 110h24m-12-12v24M60 60h20M60 160h20M320 60h20M320 160h20"
            stroke="currentColor"
          />
        </svg>
        <span>DNS</span>
        <span>DHCP</span>
        <span>SSH</span>
      </div>
      <span class="visual-label">DEBIAN / NETWORK SERVICES</span>
    </div>
  `;
}
export function projectCard(p, lang) {
  const s = t(lang);
  return html`
    <article class="project-card" data-project="${p.id}">
      <a
        class="project-image-link"
        href="${p.file}"
        aria-label="${s.read} : ${tr(p.title, lang)}"
      >
        ${visual(p, lang)}
      </a>
      <div class="project-card-body">
        <div class="project-card-meta">
          <span>
            ${s[p.category]}
            <span class="meta-slash">/</span>
            ${p.label}
          </span>
          <button
            class="save-button icon-button"
            data-save="${p.id}"
            aria-label="${s.save} : ${tr(p.title, lang)}"
            aria-pressed="false"
          >
            ${icon("bookmark")}
          </button>
        </div>
        <a class="project-title-link" href="${p.file}">
          <h3>${tr(p.title, lang)}</h3>
          ${icon("diagonal")}
        </a>
        <p>${tr(p.summary, lang)}</p>
        <div class="tags">
          ${p.tags
            .slice(0, 4)
            .map(
              (x) => html`
                <span>${x}</span>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}
