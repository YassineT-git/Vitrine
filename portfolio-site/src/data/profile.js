/**
 * PROFIL : formation, coordonnées et expériences.
 * Le CV PDF n'est pas réécrit automatiquement : remplacer public/assets/CV_Yassine.pdf.
 */
const text = (fr, en) => ({ fr, en });
export const profile = {
  name: "Yassine Tahiri",
  email: "yassinetahiri.pro@gmail.com",
  github: "https://github.com/YassineT-git",
  linkedin: "https://www.linkedin.com/in/yassine-t/",
  resume: "assets/CV_Yassine.pdf",
  education: [
    {
      date: text("Depuis septembre 2026", "Since September 2026"),
      title: text(
        "Cycle ingénieur IIM — Polytech Paris-Saclay",
        "IIM engineering programme — Polytech Paris-Saclay",
      ),
      detail: text(
        "Spécialité Informatique et ingénierie mathématique (IIM).",
        "Computer Science and Mathematical Engineering (IIM).",
      ),
      current: true,
    },
    {
      date: text("Jusqu’à l’été 2026", "Until summer 2026"),
      title: text(
        "Informatique — IUT d’Orsay, Université Paris-Saclay",
        "Computer science — IUT d’Orsay, Université Paris-Saclay",
      ),
      detail: text(
        "Parcours Data & Intelligence artificielle · Option Mathématiques pour l’ingénieur",
        "Data & Artificial Intelligence track · Mathematics for Engineers option",
      ),
    },
    {
      date: "2024",
      title: text(
        "Baccalauréat général — Lycée de Villaroy",
        "General baccalaureate — Lycée de Villaroy",
      ),
      detail: text(
        "Mathématiques · Numérique et sciences informatiques · Mathématiques expertes",
        "Mathematics · Computer science · Advanced mathematics",
      ),
    },
  ],
};
export const experience = [
  {
    date: text("2025 — Présent", "2025 — Present"),
    org: "Novatine",
    title: text("Apprenti chef de projet", "Apprentice project manager"),
    desc: text("Cybersécurité & gestion de projet", "Cybersecurity & project management"),
    items: [
      text(
        "Contribution au cadrage, à la planification et au suivi opérationnel de projets cybersécurité.",
        "Contributed to scoping, planning and operational follow-up of cybersecurity projects.",
      ),
      text(
        "Participation au déploiement de solutions EDR et SIEM et aux démarches d’audit et d’homologation LPM.",
        "Participated in EDR and SIEM deployments, audits and LPM compliance processes.",
      ),
      text(
        "Conception de supports de formation et analyse de données dans des projets liés à l’IA.",
        "Created training materials and analysed data for AI-related projects.",
      ),
    ],
  },
  {
    date: "2024 — 2025",
    org: "Novatine",
    title: text("Assistant chef de projet", "Assistant project manager"),
    desc: text("Protection des données", "Data protection"),
    items: [
      text(
        "Analyse des flux de données et des risques de fuite d’information.",
        "Analysed data flows and information leakage risks.",
      ),
      text(
        "Paramétrage de politiques DLP, participation aux tests et au suivi des incidents.",
        "Configured DLP policies, participated in testing and incident follow-up.",
      ),
    ],
  },
  {
    date: text("Été 2023", "Summer 2023"),
    org: "Open BPO",
    title: text("Stagiaire en cybersécurité", "Cybersecurity intern"),
    desc: text(
      "Sécurité des postes & documentation",
      "Endpoint security & documentation",
    ),
    items: [
      text(
        "Participation au déploiement d’une solution EDR et à la résolution des difficultés après installation.",
        "Participated in an EDR deployment and post-installation troubleshooting.",
      ),
      text(
        "Rédaction de documentation technique et contribution à une FAQ.",
        "Wrote technical documentation and contributed to a FAQ.",
      ),
    ],
  },
  {
    date: text("Été 2023", "Summer 2023"),
    org: "OSM’OZ",
    title: text("Formateur en intelligence artificielle", "AI trainer"),
    desc: text("Transmission & pédagogie", "Teaching & learning"),
    items: [
      text(
        "Création et animation de modules de découverte de l’IA avec jeux, quiz et FAQ.",
        "Created and delivered introductory AI modules using games, quizzes and FAQs.",
      ),
    ],
  },
  {
    date: text("Depuis 2022", "Since 2022"),
    org: text("Indépendant", "Independent"),
    title: text("Professeur de mathématiques", "Mathematics tutor"),
    desc: text("Accompagnement individuel", "One-to-one support"),
    items: [
      text(
        "Création de cours de mathématiques, aide aux devoirs et accompagnement des élèves.",
        "Created mathematics lessons, helped with homework and supported students.",
      ),
    ],
  },
];
