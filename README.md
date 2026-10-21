# Portfolio — Yassine Tahiri

Portfolio en HTML, CSS et JavaScript, hébergé sur [GitHub Pages](https://yassinet-git.github.io/Vitrine/).

## Les fichiers

```text
index.html          Accueil et présentation
projets.html        Liste, recherche et filtres des projets
ciup.html           Projet Java / Swing
jeu-2d.html         Projet C++ / SDL2
raspberry.html      Projet Linux / Raspberry Pi
reseau.html         Projet réseau Debian
parcours.html       Formation et expériences
contact.html        Coordonnées et formulaire
404.html            Page introuvable
css/
  styles.css        Mise en page, couleurs et typographie
  responsive.css    Adaptation aux petits écrans
  animations.css    Transitions, survols et bouton de traduction
  print.css         Présentation à l'impression
js/
  main.js           Traduction, filtres, favoris, thèmes, galerie et contact
  navigation.js     Lecture des pages HTML et historique du navigateur
  animations.js     Transitions de page, accordéons et fenêtres
assets/             Images, icônes SVG et CV PDF
```

Les pages HTML sont les fichiers à modifier et les fichiers publiés. Il n'y a pas de compilation, de dépendance npm ou de dossier de sortie à générer.

## Modifier le contenu

- **Présentation** : modifier `index.html` et `parcours.html`.
- **Projets** : modifier la carte dans `projets.html` et sa fiche HTML. Les deux projets de l'accueil sont aussi dans `index.html`.
- **CV** : remplacer `assets/CV_Yassine.pdf` en gardant le même nom.
- **Couleurs** : modifier les variables au début de `css/styles.css`.
- **Animations** : les durées et les effets sont dans `css/animations.css`.
- **Menu et pied de page** : ces blocs sont présents dans chaque page. Reporter une modification commune dans toutes les pages.

Le texte français est écrit directement dans le HTML. La traduction anglaise est dans `data-en` :

```html
<h2 data-en="My projects.">Mes projets.</h2>
```

Pour un attribut, utiliser par exemple `data-en-placeholder`, `data-en-alt` ou `data-en-aria-label`. Le script conserve le français pour le réafficher au changement de langue. Les éléments portant `data-en` contiennent seulement du texte ; pour un titre avec un saut de ligne ou une icône, traduire ses fragments dans des `<span>`.

Pour ajouter un projet, copier une fiche et une carte existantes. Sur la carte, choisir un `data-project` unique, `data-category="dev"` ou `"systems"`, un `data-order` et les technologies dans `data-keywords`. Utiliser le même identifiant pour le bouton `data-save`. Ajouter aussi le lien dans la recherche rapide (`#command-results`) de chaque page.

## Voir le site sur son ordinateur

Ouvrir `index.html` dans un navigateur suffit pour lire les pages. Pour tester l'ensemble du site, y compris les icônes SVG et les transitions entre pages, lancer un petit serveur depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Puis ouvrir [localhost:8000](http://localhost:8000). Aucun `npm install` ni `npm run build` n'est nécessaire.

## Récupérer et publier des modifications

Pour récupérer le dépôt une première fois :

```bash
git clone https://github.com/YassineT-git/Vitrine.git
cd Vitrine
```

Avant de modifier les fichiers, récupérer les dernières mises à jour :

```bash
git pull --ff-only
```

Après les modifications :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

Chaque envoi sur `main` publie les fichiers sur GitHub Pages. L'avancement apparaît dans l'onglet [Actions](https://github.com/YassineT-git/Vitrine/actions).

## Fonctionnement

La navigation ouvre de vrais fichiers HTML. JavaScript ajoute une transition en lisant la page suivante ; si cette lecture échoue, le navigateur ouvre le lien normalement. Sans JavaScript, les liens, le contenu et les accordéons restent accessibles.

Le thème, la langue, les favoris et le brouillon sont conservés dans le navigateur. Le formulaire prépare un email dans la messagerie du visiteur ; il ne l'envoie pas automatiquement. Aucun service de suivi n'est utilisé.
