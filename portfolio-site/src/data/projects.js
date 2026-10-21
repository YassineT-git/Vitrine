/**
 * CONTENU À MODIFIER : les quatre projets.
 * Un projet = un objet. Conserver un id unique et un nom de fichier .html.
 * title, summary, intro, learning... existent en français et en anglais.
 * gallery contient des chemins relatifs à public/assets (ou dist/assets).
 * Après une modification : npm run build.
 */
export const projects = [
  {
    id: "ciup",
    file: "ciup.html",
    category: "dev",
    order: 4,
    label: "01",
    tags: ["Java", "Swing", "Git", "UML"],
    title: {
      fr: "Gestion de la CIUP",
      en: "CIUP management",
    },
    subtitle: {
      fr: "Une application Java pour gérer les maisons et les inscriptions.",
      en: "A Java application to manage residences and registrations.",
    },
    summary: {
      fr: "Une application de gestion des maisons et des étudiants de la Cité internationale universitaire de Paris.",
      en: "An application to manage residences and students at the Cité internationale universitaire de Paris.",
    },
    context: {
      fr: "Projet de BUT Informatique · Semestre 2",
      en: "Computer science project · Semester 2",
    },
    team: {
      fr: "En binôme",
      en: "Team of two",
    },
    role: {
      fr: "Conception & développement",
      en: "Design & development",
    },
    intro: {
      fr: "Comment organiser l’inscription des étudiants et la gestion des maisons au sein d’une même application ? Ce projet nous a amenés à relier les règles métier à une interface de gestion lisible.",
      en: "How can student registration and residence management come together in one application? This project connected business rules with a clear management interface.",
    },
    work: [
      {
        fr: "Modélisation des étudiants, des maisons et des services à l’aide d’un diagramme UML.",
        en: "Modelled students, residences and services using UML.",
      },
      {
        fr: "Développement d’une interface Java Swing pour naviguer entre les écrans de gestion.",
        en: "Developed a Java Swing interface for the management workflows.",
      },
      {
        fr: "Gestion des inscriptions, des listes d’attente et des règles de répartition des nationalités.",
        en: "Implemented registration, waiting lists and nationality distribution rules.",
      },
      {
        fr: "Travail avec Git, tests unitaires et documentation du code en binôme.",
        en: "Worked in a pair with Git, unit tests and code documentation.",
      },
    ],
    learning: {
      fr: "J’ai appris à faire évoluer ensemble le modèle de données, la logique métier et les écrans. Le travail en binôme m’a aussi demandé de rendre mes choix compréhensibles et de partager un code structuré.",
      en: "I learned to evolve the data model, business logic and interface together. Working in a pair also taught me to explain my decisions and share well-structured code.",
    },
    outcome: {
      fr: "Une application de gestion et une démarche complète, de l’analyse du besoin à la soutenance.",
      en: "A management application and a complete process, from requirements analysis to presentation.",
    },
    gallery: [
      {
        src: "assets/projets/p1/liste.png",
        caption: {
          fr: "Écran de gestion des maisons",
          en: "Residence management screen",
        },
      },
      {
        src: "assets/projets/p1/dash.png",
        caption: {
          fr: "Parcours d’ajout d’une maison",
          en: "Add a residence workflow",
        },
      },
      {
        src: "assets/projets/p1/log.png",
        caption: {
          fr: "Écran de connexion",
          en: "Sign-in screen",
        },
      },
    ],
    galleryNote: {
      fr: "Aperçus de l’interface : gestion des maisons, ajout et connexion.",
      en: "Interface views: residence management, adding a residence and signing in.",
    },
  },
  {
    id: "jeu-2d",
    file: "jeu-2d.html",
    category: "dev",
    order: 3,
    label: "02",
    tags: ["C++", "SDL2", "POO"],
    title: {
      fr: "Jeu 2D en C++",
      en: "2D game in C++",
    },
    subtitle: {
      fr: "Animations, niveaux et collisions avec SDL2.",
      en: "Animations, levels and collisions with SDL2.",
    },
    summary: {
      fr: "Un jeu 2D en C++ : animations, niveaux, collisions et ennemis dans un univers pixel art.",
      en: "A 2D C++ game with animations, levels, collisions and enemies in a pixel-art world.",
    },
    context: {
      fr: "Projet de BUT Informatique · Première année",
      en: "Computer science project · First year",
    },
    team: {
      fr: "En binôme",
      en: "Team of two",
    },
    role: {
      fr: "Développement du jeu",
      en: "Game development",
    },
    intro: {
      fr: "Créer un jeu, c’est faire fonctionner des dizaines de petites interactions ensemble. Avec SDL2 et un moteur C++ simplifié, nous avons construit un environnement animé, organisé autour d’une boucle de jeu et de classes dédiées.",
      en: "Making a game means bringing many small interactions together. Using SDL2 and a simplified C++ engine, we built an animated environment around a game loop and dedicated classes.",
    },
    work: [
      {
        fr: "Organisation du code en classes : personnage, niveau, tuile et objet.",
        en: "Organised the code into character, level, tile and object classes.",
      },
      {
        fr: "Animations à partir de sprite sheets et gestion des entrées clavier.",
        en: "Built sprite-sheet animations and handled keyboard input.",
      },
      {
        fr: "Chargement des niveaux depuis des fichiers texte et gestion des collisions.",
        en: "Loaded levels from text files and implemented collision handling.",
      },
      {
        fr: "Ajout d’ennemis avec une IA simple, de bonus et de conditions de fin de partie.",
        en: "Added enemies with simple AI, bonuses and end-of-game conditions.",
      },
    ],
    learning: {
      fr: "Ce projet m’a permis de mieux comprendre la programmation événementielle, la gestion des ressources et le débogage d’un système où tout évolue en temps réel.",
      en: "This project helped me understand event-driven programming, resource management and debugging a system that changes in real time.",
    },
    outcome: {
      fr: "Un jeu structuré en C++, réalisé progressivement en binôme sur plusieurs semaines.",
      en: "A structured C++ game, developed progressively in a pair over several weeks.",
    },
    gallery: [
      {
        src: "assets/projets/p2/chevalier-pixel.gif",
        caption: {
          fr: "Illustration pixel art du portfolio d’origine",
          en: "Pixel-art illustration from the original portfolio",
        },
      },
      {
        src: "assets/projets/p2/sae102.gif",
        caption: {
          fr: "Visuel animé associé au projet",
          en: "Animated visual associated with the project",
        },
      },
    ],
    galleryNote: {
      fr: "Des animations pixel art pour illustrer l’univers du projet.",
      en: "Pixel-art animations illustrating the project’s visual world.",
    },
  },
  {
    id: "raspberry",
    file: "raspberry.html",
    category: "systems",
    order: 2,
    label: "03",
    tags: ["Linux", "Raspberry Pi", "SSH", "MariaDB", "Python"],
    title: {
      fr: "Serveur Linux sur Raspberry Pi",
      en: "Linux server on Raspberry Pi",
    },
    subtitle: {
      fr: "Installation de Linux et configuration de MariaDB.",
      en: "Installing Linux and configuring MariaDB.",
    },
    summary: {
      fr: "Installation d’un environnement Linux et d’un serveur MariaDB sur Raspberry Pi, avec documentation en anglais.",
      en: "A Linux environment and MariaDB server on Raspberry Pi, with documentation in English.",
    },
    context: {
      fr: "Projet de BUT Informatique · SAÉ S103",
      en: "Computer science project · SAÉ S103",
    },
    team: {
      fr: "En trinôme",
      en: "Team of three",
    },
    role: {
      fr: "Installation & configuration",
      en: "Installation & configuration",
    },
    intro: {
      fr: "Sur un Raspberry Pi 400, l’objectif était de mettre en place un environnement Linux capable d’héberger une base de données. Le projet a été mené en anglais, des consignes à la documentation technique.",
      en: "On a Raspberry Pi 400, the goal was to set up a Linux environment capable of hosting a database. The project was conducted in English, from instructions to technical documentation.",
    },
    work: [
      {
        fr: "Installation du système Linux et prise en main de la ligne de commande.",
        en: "Installed Linux and worked with the command line.",
      },
      {
        fr: "Configuration des accès distants SSH et des utilisateurs.",
        en: "Configured remote SSH access and user accounts.",
      },
      {
        fr: "Installation de MariaDB et mise en place de la base de données.",
        en: "Installed MariaDB and set up the database.",
      },
      {
        fr: "Vérification par scripts Python et rédaction du rapport technique en anglais.",
        en: "Verified the configuration with Python scripts and wrote the technical report in English.",
      },
    ],
    learning: {
      fr: "J’ai découvert l’importance de vérifier une configuration et de documenter les étapes pour pouvoir la reproduire. Un environnement qui démarre ne suffit pas : il faut aussi comprendre comment il fonctionne.",
      en: "I discovered how important it is to verify a configuration and document the steps so it can be reproduced. Getting an environment to start is only the beginning; understanding how it works matters too.",
    },
    outcome: {
      fr: "Un environnement Linux avec MariaDB, accompagné d’une documentation et de vérifications automatisées.",
      en: "A Linux environment with MariaDB, accompanied by documentation and automated checks.",
    },
    gallery: [
      {
        src: "assets/projets/p3/Rasperry.webp",
        caption: {
          fr: "Illustration matérielle issue du portfolio (Raspberry Pi 5)",
          en: "Hardware illustration from the portfolio (Raspberry Pi 5)",
        },
      },
      {
        src: "assets/projets/p3/MariaDB.png",
        caption: {
          fr: "Visuel MariaDB associé au projet",
          en: "MariaDB visual associated with the project",
        },
      },
    ],
    galleryNote: {
      fr: "Le travail a été réalisé sur Raspberry Pi 400. La photo du portfolio montre un autre modèle et sert d’illustration.",
      en: "The work used a Raspberry Pi 400. The portfolio photo shows a different model and is an illustration.",
    },
  },
  {
    id: "reseau",
    file: "reseau.html",
    category: "systems",
    order: 1,
    label: "04",
    tags: ["Debian", "DNS", "DHCP", "SSH", "Wireshark"],
    title: {
      fr: "Configuration d’un réseau Debian",
      en: "Debian network configuration",
    },
    subtitle: {
      fr: "Services DNS, DHCP et accès SSH.",
      en: "DNS, DHCP and SSH access.",
    },
    summary: {
      fr: "Un projet de configuration réseau sous Linux : services, accès distants et compréhension des échanges.",
      en: "A Linux network configuration project: services, remote access and understanding exchanges.",
    },
    context: {
      fr: "Projet de BUT Informatique · Réseaux",
      en: "Computer science project · Networking",
    },
    team: {
      fr: "Projet académique",
      en: "Academic project",
    },
    role: {
      fr: "Configuration réseau",
      en: "Network configuration",
    },
    intro: {
      fr: "Ce projet rassemble les bases de la configuration réseau sous Debian : relier les machines, configurer les services et comprendre les communications. Il prolonge mon intérêt pour les systèmes et la cybersécurité.",
      en: "This project brings together the basics of network configuration on Debian: connecting machines, configuring services and understanding communication. It builds on my interest in systems and cybersecurity.",
    },
    work: [
      {
        fr: "Configuration d’un environnement réseau Linux Debian.",
        en: "Configured a Debian Linux network environment.",
      },
      {
        fr: "Travail sur les services DNS et DHCP.",
        en: "Worked with DNS and DHCP services.",
      },
      {
        fr: "Utilisation de SSH pour les accès distants.",
        en: "Used SSH for remote access.",
      },
      {
        fr: "Mobilisation de Wireshark pour comprendre les échanges réseau.",
        en: "Used Wireshark to understand network exchanges.",
      },
    ],
    learning: {
      fr: "Mettre en relation une topologie, une configuration et les échanges observés est une étape essentielle pour progresser en administration système et en sécurité.",
      en: "Connecting a topology, its configuration and the observed exchanges is an essential step towards progressing in system administration and security.",
    },
    outcome: {
      fr: "Une mise en pratique des fondamentaux réseau et des services Linux.",
      en: "Practical experience with networking fundamentals and Linux services.",
    },
    gallery: [
      {
        src: "assets/projets/p5/saeRes.png",
        caption: {
          fr: "Topologie réseau présentée dans le portfolio",
          en: "Network topology presented in the portfolio",
        },
      },
    ],
    galleryNote: {
      fr: "Une topologie pour comprendre les liens entre les machines, les routeurs et les services réseau.",
      en: "A topology to understand the links between machines, routers and network services.",
    },
  },
];
