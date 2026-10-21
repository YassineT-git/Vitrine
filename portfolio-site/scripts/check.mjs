/**
 * Vérifications du contenu et des fichiers générés.
 * Les animations se contrôlent dans le navigateur ; ce script vérifie les liens,
 * les identifiants, les deux langues et le rendu de toutes les pages.
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { routes } from "../src/data/routes.js";
import { strings } from "../src/data/translations.js";
import { projects } from "../src/data/projects.js";
import { profile } from "../src/data/profile.js";
import { renderPage } from "../src/ui/pages.js";

assert.deepEqual(
  Object.keys(strings.fr).sort(),
  Object.keys(strings.en).sort(),
  "Chaque texte doit exister dans les deux langues.",
);
assert.equal(
  new Set(projects.map((p) => p.id)).size,
  projects.length,
  "Chaque projet doit avoir un id unique.",
);
assert(profile.education[0].title.fr.includes("IIM"));

for (const [, page] of routes) {
  for (const language of ["fr", "en"]) {
    const markup = renderPage(page, language);
    assert(!markup.includes("undefined"), `Texte manquant : ${page} / ${language}`);
    assert.equal(
      (markup.match(/<h1\b/g) || []).length,
      1,
      `Un seul titre principal : ${page}`,
    );
    const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `Identifiant dupliqué : ${page}`);
  }
}

const pages = routes.map(([file]) => file).concat("404.html");
const idsByFile = new Map(
  pages.map((file) => [
    file,
    new Set(
      [...readFileSync("dist/" + file, "utf8").matchAll(/\bid="([^"]+)"/g)].map(
        (match) => match[1],
      ),
    ),
  ]),
);
for (const file of pages) {
  const markup = readFileSync("dist/" + file, "utf8");
  for (const match of markup.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const link = match[1].replaceAll("&amp;", "&");
    if (/^(https?:|mailto:|tel:|data:)/.test(link)) continue;
    const url = new URL(link, "https://portfolio.local/" + file);
    const target = decodeURIComponent(url.pathname.slice(1));
    assert(existsSync("dist/" + target), `${file} : fichier absent ${target}`);
    if (url.hash && idsByFile.has(target))
      assert(
        idsByFile.get(target).has(url.hash.slice(1)),
        `${file} : ancre absente ${link}`,
      );
  }
}

function checkSyntax(directory) {
  for (const file of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, file.name);
    if (file.isDirectory()) checkSyntax(path);
    else if (file.name.endsWith(".js")) execFileSync(process.execPath, ["--check", path]);
  }
}
checkSyntax("src");
console.log(
  "Vérifié : rendu FR/EN, formation IIM, liens, images, ancres et syntaxe JavaScript.",
);
