# Portfolio de Yassine Tahiri

Portfolio en HTML, CSS et JavaScript, avec une version française et anglaise. Les pages existent en HTML et restent accessibles sans JavaScript. Les animations enrichissent cette navigation.

## Les dossiers à connaître

```text
src/
├── data/
│   ├── profile.js          Coordonnées, formation et expériences
│   ├── projects.js         Textes, outils et images des projets
│   ├── translations.js     Textes français / anglais du site
│   └── routes.js           Adresses et titres des pages
├── ui/
│   ├── pages/              Structure HTML de chaque page
│   ├── layout.js           Navigation, pied de page, blocs communs
│   ├── projects.js         Cartes et visuels des projets
│   └── icons.js            Pictogrammes SVG, dont la traduction
├── styles/
│   ├── base.css            Couleurs, typographie et mise en page
│   ├── responsive.css      Adaptations tablette et téléphone
│   ├── motion.css          Transitions et effets visuels
│   └── print.css           Impression
├── app.js                  Filtres, favoris, langues et formulaire
├── navigation.js           Navigation, historique et positions de lecture
└── motion.js               Accordéons, transitions et fenêtres
public/assets/              Images et CV à remplacer ici
dist/                       Résultat généré, utilisé par l'hébergement
build.mjs                   Génération des pages
scripts/check.mjs           Vérifications avant publication
```

**Modifie `src/` et `public/`.** Les modifications faites directement dans `dist/` seront remplacées lors de la prochaine génération.

## Ouvrir le site sur ton ordinateur

Le dossier `dist/` livré est déjà prêt. Avec Python installé :

```bash
npm start
```

Ouvre ensuite http://127.0.0.1:4173. Évite d'ouvrir le HTML par double-clic : les modules JavaScript nécessitent un serveur local.

Pour travailler sur les sources, installe d'abord l'outil de mise en forme :

```bash
npm install
npm run build
npm start
```

Après une modification :

```bash
npm run format
npm run build
npm run check
```

Actualise la page du navigateur après la génération. Aucune installation n'est requise pour les visiteurs du site ; Prettier est utilisé uniquement pendant le développement.

## Modifier les informations personnelles

Dans `src/data/profile.js` :

- `profile.email`, `github`, `linkedin` et `resume` changent les coordonnées et liens communs.
- `profile.education` contient les formations affichées dans le parcours.
- `experience` contient les expériences professionnelles et leur contenu déroulant.

Dans `src/data/translations.js`, `homeIntro` et `aboutIntro` sont les présentations de l'accueil et du parcours. Mets à jour les deux langues ensemble. Le cursus actuel est **Informatique et ingénierie mathématique (IIM), Polytech Paris-Saclay**, depuis septembre 2026.

Pour changer le CV, remplace `public/assets/CV_Yassine.pdf` en gardant le nom, puis régénère le site. Le CV fourni est celui du dépôt d'origine.

## Modifier ou ajouter un projet

Dans `src/data/projects.js`, chaque objet représente un projet :

- `id` doit rester unique ; `file` est son adresse, par exemple `ciup.html`.
- `category` vaut `dev` ou `systems` pour les filtres.
- `title`, `summary`, `intro`, `learning` et `outcome` contiennent les textes français et anglais.
- `tags` contient les outils utilisés et alimente la recherche.
- `work` décrit le travail réalisé ; `gallery` contient les chemins des images et leurs légendes.

Ajoute les images dans `public/assets/`. Le chemin utilisé dans `gallery` commence par `assets/`, sans `public/` devant.

La génération ajoute automatiquement une page et une route pour chaque projet. Si tu ajoutes un cinquième projet, mets aussi à jour les libellés `allProjects` et `projectCount` dans les deux langues. Les quatre visuels actuels sont définis dans `src/ui/projects.js` : adapte la fonction `visual()` pour donner un visuel spécifique à un nouveau projet.

## Ajuster les effets visuels

Dans `src/styles/motion.css` :

- `--motion-duration` règle la durée des changements de page.
- `--motion-offset` règle leur déplacement vertical.
- `--motion-ease` règle leur accélération.
- `.language-cube` et `.language-face` définissent le bouton de traduction en trois dimensions.
- `::view-transition-group(project-cover)` règle l'agrandissement du visuel vers la fiche.

Dans `src/motion.js`, les durées des accordéons et des fenêtres sont indiquées à côté de leur animation. Les commentaires expliquent pourquoi la fermeture attend la fin de l'effet. La préférence système « réduire les animations » est respectée.

`src/navigation.js` conserve les vrais liens, les boutons précédent/suivant du navigateur et les positions de lecture. Il utilise View Transitions si disponible, avec un repli en fondu sur les autres navigateurs. Les liens externes, le téléchargement du CV et les clics avec Ctrl/Cmd restent natifs.

## Données et contact

Le thème, la langue, les favoris et le brouillon de contact restent dans le navigateur. Aucun outil de suivi ni serveur applicatif n'est utilisé.

Le formulaire prépare un email dans la messagerie du visiteur ; il n'envoie pas d'email depuis le site. Les animations pixel art et la photo du Raspberry Pi sont présentées comme illustrations dans les fiches.

## Publication et références

La publication GitHub Pages est gérée par `.github/workflows/portfolio-pages.yml`, à la racine du dépôt. Un changement sur `main` reconstruit ce dossier, exécute les vérifications et publie `dist/`. Les anciennes rubriques restent conservées dans le reste du dépôt.

- [Intitulé officiel de la formation IIM](https://www.polytech.universite-paris-saclay.fr/formation/informatique-et-ingenierie-mathematique)
- [Documentation de View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using)
