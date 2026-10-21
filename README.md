# Portfolio — Yassine Tahiri

Le portfolio actuel est publié sur **[yassinet-git.github.io/Vitrine](https://yassinet-git.github.io/Vitrine/)**.

## Modifier le portfolio

Les sources maintenues sont dans **[`portfolio-site/`](portfolio-site/)** :

- [`src/data/profile.js`](portfolio-site/src/data/profile.js) : formation, coordonnées et expériences.
- [`src/data/projects.js`](portfolio-site/src/data/projects.js) : projets et galeries.
- [`src/data/translations.js`](portfolio-site/src/data/translations.js) : textes français et anglais.
- [`src/styles/motion.css`](portfolio-site/src/styles/motion.css) : effets et transitions.
- [Guide complet](portfolio-site/README.md) : structure, commandes et exemples de modification.

```bash
cd portfolio-site
npm ci
npm run build
npm run check
npm start
```

## Publication automatique

Le workflow [Publication du portfolio](.github/workflows/portfolio-pages.yml) s’exécute à chaque modification du portfolio sur `main`. Il reconstruit le site, vérifie les pages puis publie `portfolio-site/dist/` avec GitHub Pages. Il peut aussi être lancé manuellement depuis l’onglet **Actions**.

Les anciennes adresses `Portfolio/index.html`, `Portfolio/projets.html` et `Portfolio/competences.html` redirigent vers le portfolio actuel.

Les dossiers historiques `Portfolio/`, `Publications/`, `assets/` et `open-data-university-project-main/` sont conservés pour référence et pour la séparation future du site d’enseignement. Ils ne sont pas inclus dans la publication du nouveau portfolio.

<details>
<summary>Présentation historique de la vitrine</summary>

# Vitrine Professionnelle - Portfolio & Enseignement

Bienvenue sur le dépôt de ma vitrine personnelle. Ce site web a été conçu pour centraliser mon parcours, mes compétences techniques en informatique, mes travaux de recherche en mathématiques, ainsi que mon activité de professeur particulier.

## Présentation du projet

Ce projet est une plateforme interactive qui me permet de présenter mes différents pôles d'activité. Il ne s'agit pas d'un simple site statique, mais d'un véritable hub regroupant mes projets de développement et mes ressources pédagogiques.

## Structure et Contenu

Le dépôt est organisé autour de trois axes principaux :

### 1. Portfolio

Situé dans le dossier `/Portfolio`, cette section regroupe l'ensemble de mes réalisations techniques.

* **Développement Web & Logiciel :** Présentation de mes projets de programmation.
* **Compétences :** Mise en avant de ma stack technique (HTML, CSS, JavaScript, etc.).
* **Expériences :** Détails de mon parcours académique et professionnel.

### 2. Publications (Informatique & Mathématiques)

Le dossier `/Publications` est le cœur intellectuel de la vitrine. J'y partage :

* **Articles Informatiques :** Veille technologique, tutoriels et analyses sur le développement.
* **Recherches en Mathématiques :** Notes, résolutions de problèmes complexes et publications académiques.
* **Vulgarisation :** Contenu destiné à rendre les concepts abstraits accessibles.

### 3. Enseignement (Mathématiques)

En tant que **professeur particulier de mathématiques**, j'ai dédié une partie du site à cette activité pour :

* **Pédagogie :** Expliquer ma méthode de travail et mon approche avec les élèves.
* **Ressources :** (À venir/Disponible) Supports de cours ou exercices pour mes étudiants.
* **Contact :** Permettre aux familles de me solliciter pour un accompagnement personnalisé.

---

## Caractéristiques Techniques

* **Architecture propre :** Utilisation d'une structure modulaire pour séparer le contenu textuel des ressources visuelles.
* **Performance :** Optimisation des fichiers pour un chargement rapide des publications.
* **Responsive Design :** Consultation fluide sur mobile pour les élèves et les recruteurs.

## Organisation des dossiers

```text
Vitrine/
├── Portfolio/          # Projets techniques et CV numérique
├── Publications/       # Articles et travaux (Maths & Info)
├── assets/             # Images, styles CSS et scripts JS
├── index.html          # Point d'entrée principal
└── .gitignore          # Configuration Git
```

## Installation locale

1. **Cloner le dépôt :**
```bash
git clone https://github.com/YassineT-git/Vitrine.git

```


2. **Lancer le site :**
Ouvrir `index.html` dans un navigateur.

</details>
