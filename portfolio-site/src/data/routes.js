/** Routes statiques : garder les noms des fichiers pour les liens directs et le SEO. */
import { projects } from "./projects.js";
export const routes = [
  ["index.html", "home"],
  ["projets.html", "projects"],
  ["parcours.html", "about"],
  ["contact.html", "contact"],
  ...projects.map((p) => [p.file, "project-" + p.id]),
];
export const pageTitles = {
  home: "Yassine Tahiri — Cycle ingénieur IIM, Polytech Paris-Saclay",
  projects: "Mes projets — Yassine Tahiri",
  about: "Mon parcours — Yassine Tahiri",
  contact: "Contact — Yassine Tahiri",
  ...Object.fromEntries(
    projects.map((p) => ["project-" + p.id, p.title.fr + " — Yassine Tahiri"]),
  ),
};
