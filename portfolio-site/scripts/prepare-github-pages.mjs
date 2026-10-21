/**
 * Préparation propre à GitHub Pages.
 * Conserver les anciens liens du portfolio évite de casser les favoris existants.
 * Les chemins relatifs fonctionnent aussi quand le site est servi sous /Vitrine/.
 */
import { mkdirSync, writeFileSync } from "node:fs";

writeFileSync("dist/.nojekyll", "");
mkdirSync("dist/Portfolio", { recursive: true });
const redirects = {
  "index.html": "../index.html",
  "projets.html": "../projets.html",
  "competences.html": "../index.html#competences",
};
for (const [file, destination] of Object.entries(redirects)) {
  writeFileSync(
    `dist/Portfolio/${file}`,
    `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="refresh" content="0;url=${destination}">
  <title>Portfolio — Yassine Tahiri</title>
</head>
<body><p>Le portfolio a changé d’adresse. <a href="${destination}">Ouvrir le portfolio</a>.</p></body>
</html>\n`,
  );
}
console.log("GitHub Pages : redirections et fichier .nojekyll préparés.");
