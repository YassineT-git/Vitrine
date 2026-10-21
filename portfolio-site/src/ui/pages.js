/** Assemble une page. Utilisé à la fois par le navigateur et par build.mjs. */
import { projects } from "../data/projects.js";
import { header, footer } from "./layout.js";
import { dialogs } from "./dialogs.js";
import { home } from "./pages/home.js";
import { projectListing } from "./pages/projects.js";
import { projectDetail } from "./pages/project.js";
import { about } from "./pages/about.js";
import { contact } from "./pages/contact.js";
export function renderPage(page, lang = "fr") {
  const content =
    page === "home"
      ? home(lang)
      : page === "projects"
        ? projectListing(lang)
        : page === "about"
          ? about(lang)
          : page === "contact"
            ? contact(lang)
            : projectDetail(
                projects.find((p) => page === "project-" + p.id) || projects[0],
                lang,
              );
  return header(page, lang) + content + footer(lang) + dialogs(lang);
}
