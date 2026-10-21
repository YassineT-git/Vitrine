/**
 * CONSTRUCTION DU SITE
 * src/ = les fichiers à modifier ; public/ = les images et le CV.
 * dist/ = la version générée pour l'hébergement, régénérée à chaque build.
 * Chaque page existe réellement en HTML, même sans JavaScript.
 */
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { extname } from "node:path";
import { format } from "prettier";
import { renderPage } from "./src/ui/pages.js";
import { routes, pageTitles } from "./src/data/routes.js";
import { projects } from "./src/data/projects.js";
import { t } from "./src/data/translations.js";
import { esc, html } from "./src/ui/markup.js";

// Nettoyer seulement les fichiers générés ; ne jamais modifier public/ ici.
const output = new URL("./dist/", import.meta.url);
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(new URL("./public/", import.meta.url), output, { recursive: true });
cpSync(new URL("./src/", import.meta.url), new URL("./dist/js/", import.meta.url), {
  recursive: true,
  filter: (source) => !extname(source) || source.endsWith(".js"),
});

const stylesheet = ["base", "responsive", "motion", "print"]
  .map((name) =>
    readFileSync(new URL(`./src/styles/${name}.css`, import.meta.url), "utf8"),
  )
  .join("\n\n");
writeFileSync(new URL("./dist/styles.css", import.meta.url), stylesheet);

for (const [file, page] of routes) {
  const project = projects.find((project) => page === `project-${project.id}`);
  const description = project ? project.summary.fr : t("fr").homeIntro;
  const document = html`
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" />
        <title>${esc(pageTitles[page])}</title>
        <meta name="description" content="${esc(description)}" />
        <meta property="og:title" content="${esc(pageTitles[page])}" />
        <meta property="og:description" content="${esc(description)}" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="styles.css" />
        <script>
          // Appliquer le thème avant le premier affichage évite un flash blanc.
          try {
            const preference = localStorage.getItem("yt-theme") || "light";
            const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";
            document.documentElement.dataset.theme =
              preference === "system" ? systemTheme : preference;
          } catch {}
        </script>
      </head>
      <body id="top" data-page="${page}">
        <div id="app">${renderPage(page, "fr")}</div>
        <div
          id="navigation-status"
          class="sr-only"
          aria-live="polite"
          aria-atomic="true"
        ></div>
        <noscript>
          <p class="shell">
            La navigation et les projets restent accessibles. JavaScript active les
            filtres et les animations.
          </p>
        </noscript>
        <script type="module" src="js/app.js"></script>
      </body>
    </html>
  `;
  writeFileSync(new URL(file, output), await format(document, { parser: "html" }));
}

const notFound = html`
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Page introuvable — Yassine Tahiri</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <main class="shell page-heading">
        <span class="eyebrow">404 / Yassine Tahiri</span>
        <h1>Page introuvable.</h1>
        <p>
          Le lien est peut-être ancien. Vous pouvez retrouver les projets depuis
          l’accueil.
        </p>
        <p>
          <a class="button primary" href="index.html">Revenir à l’accueil →</a>
        </p>
      </main>
    </body>
  </html>
`;
writeFileSync(new URL("404.html", output), await format(notFound, { parser: "html" }));
console.log(`${routes.length} pages générées et une page 404.`);
