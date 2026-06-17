# 🌍 IA Impact — Outil de Sensibilisation à l'Impact Environnemental de l'IA

> Outil interactif développé dans le cadre du défi **« L'impact environnemental de l'IA générative »** de [defis.data.gouv.fr](https://defis.data.gouv.fr/defis/limpact-environnemental-de-lia-generative).

**IA Impact** est une application web statique qui permet d'estimer et de visualiser en temps réel l'empreinte écologique (énergie, CO₂ et eau) liée à l'utilisation quotidienne de modèles d'intelligence artificielle générative.

---

## 🚀 Fonctionnalités principales

*   **⚡ Simulateur en temps réel** : Configurez votre usage quotidien (nombre de requêtes de 1 à 500), sélectionnez le modèle utilisé et le type de tâche pour estimer instantanément votre empreinte.
*   **📊 Comparatif dynamique** : Visualisez sous forme de graphique à barres la consommation énergétique comparative de tous les modèles pour votre configuration de tâche.
*   **📐 Équivalences concrètes (Annuelles)** : Pour donner du sens aux chiffres (Wh, g CO₂e, mL), l'application traduit votre empreinte annuelle en km de voiture, charges de smartphone, heures de streaming vidéo, requêtes Google et bouteilles d'eau de 50 cL.
*   **🌱 Indicateur de niveau d'impact** : Un indicateur visuel dynamique évalue votre usage (Faible, Modéré, Élevé) et vous propose des pistes d'optimisation.
*   **📚 Section éducative complète** : Un accordéon interactif aborde les notions clés : différence entre entraînement et inférence, facteurs d'impact des modèles, consommation d'eau des datacenters, conseils d'éco-conception pour les utilisateurs et méthodologie détaillée.

---

## 🛠️ Stack Technique

Le projet a été conçu selon des principes de sobriété numérique, en n'utilisant aucune dépendance ni framework lourd :

*   **HTML5** : Structure sémantique respectueuse de l'accessibilité et du SEO.
*   **Vanilla CSS** : Design élégant inspiré du style "HackerRank" (fond noir pur, accents vert fluo, typographie moderne *Inter*, micro-animations fluides, responsive design).
*   **Vanilla JavaScript (ES6)** : Logique applicative réactive, animations de compteurs fluides via `requestAnimationFrame` et gestion des animations au défilement à l'aide de l'API `IntersectionObserver`.

---

## 📁 Structure du Projet

L'ensemble de l'application repose sur trois fichiers principaux à la racine du projet :

*   [index.html](file:///Users/vinct/Documents/repos/open-data-university-project/index.html) : Structure de la page et contenu éditorial.
*   [style.css](file:///Users/vinct/Documents/repos/open-data-university-project/style.css) : Identité visuelle, mise en page (Flexbox et CSS Grid) et animations.
*   [app.js](file:///Users/vinct/Documents/repos/open-data-university-project/app.js) : Modèle de données, logique de calcul d'impact, gestion de l'état et animations des compteurs.

---

## 🔬 Données et Méthodologie

Les données utilisées pour les calculs proviennent de rapports environnementaux officiels et d'estimations académiques de référence :

### 1. Valeurs de base par modèle (pour 1 requête textuelle standard)

| Modèle | Fournisseur | Énergie (Wh) | CO₂ (g CO₂e) | Eau (mL) |
| :--- | :--- | :--- | :--- | :--- |
| **Gemini Flash** | Google | `0.24 Wh` | `0.30 g` | `10 mL` |
| **Claude Sonnet** | Anthropic | `0.30 Wh` | `1.00 g` | `12 mL` |
| **GPT-4o** | OpenAI | `0.34 Wh` | `1.14 g` | `15 mL` |
| **Mistral Large** | Mistral AI | `0.30 Wh` | `1.14 g` | `45 mL` |
| **Raisonnement (o3)**| OpenAI | `3.40 Wh` | `11.40 g` | `150 mL` |
| **Modèle léger** | Divers | `0.10 Wh` | `0.15 g` | `5 mL` |

### 2. Multiplicateurs par tâche

*   **Texte / Chat** : `x1.0`
*   **Génération de code** : `x1.5`
*   **Résumé / Analyse** : `x1.2`
*   **Génération d'images** : `x4.0`

### 3. Références d'équivalence

*   🚗 **Voiture** : `1 kg CO₂e ≈ 7.14 km` (sur la base d'une voiture moyenne émettant 140 gCO₂e/km).
*   📱 **Smartphone** : `1 charge complète ≈ 12 Wh`.
*   📺 **Streaming** : `1 heure de vidéo en streaming ≈ 36 Wh`.
*   🔍 **Recherche Google** : `1 requête Google ≈ 0.03 Wh` (soit ~10 fois moins qu'une requête IA standard).
*   🍶 **Eau en bouteille** : `1 bouteille = 500 mL`.

---

## 💻 Installation et Lancement local

Puisqu'il s'agit d'une application 100% statique, elle ne nécessite aucune étape de compilation ou d'installation de paquets.

### Option 1 : Lancement direct
Double-cliquez simplement sur le fichier [index.html](file:///Users/vinct/Documents/repos/open-data-university-project/index.html) pour l'ouvrir dans n'importe quel navigateur web.

### Option 2 : Serveur local de développement (recommandé)
Si vous souhaitez servir l'application avec un serveur HTTP local, vous pouvez exécuter l'une des commandes suivantes dans votre terminal à la racine du projet :

```bash
# Avec Node.js (via npx)
npx serve .

# Avec Python 3
python3 -m http.server 8000
```
Puis accédez à l'adresse indiquée (généralement `http://localhost:3000` ou `http://localhost:8000`).

---

## 📎 Sources et Crédits

*   **Google Environmental Report (2025)** : Données relatives à l'efficacité énergétique de Gemini.
*   **OpenAI / Sam Altman (Juin 2025)** : Chiffres de consommation de ChatGPT.
*   **Mistral AI** : Analyse de cycle de vie (ACV) de Mistral Large 2.
*   **Epoch AI (Février 2025)** : Analyse des tendances des puissances de calcul de l'IA.
*   **UC Riverside** : Recherches sur l'empreinte hydrique de l'IA générative.
*   **Défi data.gouv.fr** : [Défi : L'impact environnemental de l'IA générative](https://defis.data.gouv.fr/defis/limpact-environnemental-de-lia-generative).
