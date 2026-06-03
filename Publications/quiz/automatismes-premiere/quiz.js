// =============================================================
// Quiz Automatismes Première — banque de questions + logique app
// Généré pour une vitrine statique : aucune dépendance, tout fonctionne hors ligne.
// =============================================================

const QUESTION_BANK = [
  {
    "id": "Q001",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "L’inverse du triple de $4$ est égal à :",
    "options": [
      "$6$",
      "$\\dfrac{3}{4}$",
      "$12$",
      "$\\dfrac{1}{12}$"
    ],
    "answer": 3,
    "explanation": "Le triple de $4$ vaut $12$. Son inverse est donc $\\dfrac{1}{12}$.",
    "method": "Identifier d’abord la quantité, puis prendre son inverse.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "inverse"
    ],
    "bac": true
  },
  {
    "id": "Q002",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère $G=a+\\dfrac{b}{cd}$. Pour $a=\\dfrac12$, $b=3$, $c=-2$ et $d=2$, la valeur de $G$ est :",
    "options": [
      "$\\dfrac{5}{4}$",
      "$\\dfrac{7}{4}$",
      "$-\\dfrac{5}{4}$",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 3,
    "explanation": "On calcule $cd=-4$, donc $\\dfrac{b}{cd}=\\dfrac{3}{-4}=-\\dfrac34$. Ainsi $G=\\dfrac12-\\dfrac34=-\\dfrac14$.",
    "method": "Remplacer les lettres, effectuer le produit au dénominateur, puis réduire au même dénominateur.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "expression littérale"
    ],
    "bac": true
  },
  {
    "id": "Q003",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Le prix d’un article est multiplié par $0,97$. Cela correspond à :",
    "options": [
      "une hausse de $97\\%$",
      "une baisse de $30\\%$",
      "une baisse de $3\\%$",
      "une hausse de $0,97\\%$"
    ],
    "answer": 2,
    "explanation": "Multiplier par $0,97$ signifie conserver $97\\%$ du prix initial. On perd donc $3\\%$.",
    "method": "Coefficient $1+t$ pour une hausse, coefficient $1-t$ pour une baisse.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q004",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Un prix $P$ augmente de $20\\%$ puis diminue de $20\\%$. Le nouveau prix est noté $P_1$. On peut affirmer que :",
    "options": [
      "$P_1=P$",
      "$P_1\\gt P$",
      "cela dépend de $P$",
      "$P_1\\lt P$"
    ],
    "answer": 3,
    "explanation": "Le coefficient global vaut $1,20\\times0,80=0,96$. Le prix final vaut $0,96P$, donc il est inférieur à $P$.",
    "method": "Les évolutions successives se multiplient, elles ne s’additionnent pas.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q005",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une expérience aléatoire possède quatre issues. Les probabilités sont données dans le tableau. On peut affirmer que :",
    "options": [
      "$x=0,25$",
      "$x=0,60$",
      "$x=\\dfrac{3}{20}$",
      "$x=\\dfrac{2}{5}$"
    ],
    "answer": 3,
    "explanation": "La somme des probabilités vaut $1$. Or $0,25+0,20+0,15=0,60$, donc $x=1-0,60=0,40=\\dfrac25$.",
    "method": "Dans une loi de probabilité, la somme de toutes les probabilités est égale à $1$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Issue",
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "rows": [
        [
          "Probabilité",
          "$0,25$",
          "$\\dfrac{1}{5}$",
          "$0,15$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "sujet type bac",
      "loi de probabilité"
    ],
    "bac": true
  },
  {
    "id": "Q006",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère des réels non nuls $x$, $y$ et $u$ tels que $\\dfrac1x+\\dfrac1y=\\dfrac1u$. On peut affirmer que :",
    "options": [
      "$u=xy$",
      "$u=x+y$",
      "$u=\\dfrac{xy}{x+y}$",
      "$u=\\dfrac{x+y}{xy}$"
    ],
    "answer": 2,
    "explanation": "On a $\\dfrac1x+\\dfrac1y=\\dfrac{x+y}{xy}$. Donc $\\dfrac1u=\\dfrac{x+y}{xy}$, d’où $u=\\dfrac{xy}{x+y}$.",
    "method": "Mettre les fractions au même dénominateur, puis inverser les deux membres.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "fractions littérales"
    ],
    "bac": true
  },
  {
    "id": "Q007",
    "domain": "Fonctions et représentations",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère l’inéquation $x^2\\ge 5$ sur $\\mathbb{R}$. Elle est équivalente à :",
    "options": [
      "$-\\sqrt5\\le x\\le \\sqrt5$",
      "$x=-\\sqrt5$ ou $x=\\sqrt5$",
      "$x\\le -\\sqrt5$ ou $x\\ge \\sqrt5$",
      "$x\\ge \\sqrt5$"
    ],
    "answer": 2,
    "explanation": "La parabole $y=x^2$ est au-dessus du niveau $5$ à gauche de $-\\sqrt5$ et à droite de $\\sqrt5$.",
    "method": "Pour $x^2\\ge a$ avec $a\\gt 0$, les solutions sont extérieures à l’intervalle $[-\\sqrt a;\\sqrt a]$.",
    "diagram": {
      "type": "parabola",
      "a": 1,
      "b": 0,
      "c": 0,
      "xMin": -4,
      "xMax": 4,
      "yMin": -1,
      "yMax": 10,
      "shadeY": 5
    },
    "tags": [
      "sujet type bac",
      "inéquation",
      "parabole"
    ],
    "bac": true
  },
  {
    "id": "Q008",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "On a représenté une droite $\\mathcal D$ dans un repère. Une équation possible de $\\mathcal D$ est :",
    "options": [
      "$y=-\\dfrac12x+2$",
      "$y=-2x+2$",
      "$y=\\dfrac12x+2$",
      "$x+2y-2=0$"
    ],
    "answer": 0,
    "explanation": "La droite coupe l’axe des ordonnées en $2$ et descend de $1$ quand $x$ augmente de $2$, donc son coefficient directeur est $-\\dfrac12$.",
    "method": "Lire l’ordonnée à l’origine puis calculer la pente avec deux points de la droite.",
    "diagram": {
      "type": "affine",
      "m": -0.5,
      "b": 2,
      "xMin": -4,
      "xMax": 6,
      "yMin": -2,
      "yMax": 5,
      "highlightX": 2
    },
    "tags": [
      "sujet type bac",
      "droite",
      "graphique"
    ],
    "bac": true
  },
  {
    "id": "Q009",
    "domain": "Fonctions et représentations",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère $f_1:x\\mapsto x^2-(x-1)^2$, $f_2:x\\mapsto x^2+1$ et $f_3:x\\mapsto \\dfrac{3-2x}{4}$. Parmi ces fonctions, celles qui sont affines sont :",
    "options": [
      "toutes",
      "uniquement $f_2$",
      "uniquement $f_1$ et $f_3$",
      "aucune"
    ],
    "answer": 2,
    "explanation": "$f_1(x)=x^2-(x^2-2x+1)=2x-1$ est affine. $f_2$ est du second degré. $f_3(x)=\\dfrac34-\\dfrac12x$ est affine.",
    "method": "Une fonction affine peut toujours s’écrire sous la forme $ax+b$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "fonction affine"
    ],
    "bac": true
  },
  {
    "id": "Q010",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La parabole représentée est tournée vers le bas et coupe l’axe des ordonnées en $6$. Une fonction possible est :",
    "options": [
      "$x\\mapsto -x^2-6$",
      "$x\\mapsto x^2+6$",
      "$x\\mapsto -x^2+6x$",
      "$x\\mapsto -x^2+6$"
    ],
    "answer": 3,
    "explanation": "Une parabole tournée vers le bas a un coefficient de $x^2$ négatif. Son ordonnée à l’origine vaut $6$, donc l’expression $-x^2+6$ convient.",
    "method": "Le signe du coefficient de $x^2$ donne le sens d’ouverture de la parabole.",
    "diagram": {
      "type": "parabola",
      "a": -1,
      "b": 0,
      "c": 6,
      "xMin": -4,
      "xMax": 4,
      "yMin": -3,
      "yMax": 8
    },
    "tags": [
      "sujet type bac",
      "parabole"
    ],
    "bac": true
  },
  {
    "id": "Q011",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "On donne la série statistique ci-dessous. Sa moyenne est :",
    "options": [
      "$9$",
      "$42$",
      "$10,5$",
      "$9,9$"
    ],
    "answer": 3,
    "explanation": "La moyenne pondérée vaut $\\dfrac{6\\times2+9\\times4+12\\times3+15\\times1}{2+4+3+1}=\\dfrac{99}{10}=9,9$.",
    "method": "Pour une moyenne avec effectifs, on divise la somme pondérée par l’effectif total.",
    "diagram": {
      "type": "table",
      "headers": [
        "Valeur",
        "$6$",
        "$9$",
        "$12$",
        "$15$"
      ],
      "rows": [
        [
          "Effectif",
          "$2$",
          "$4$",
          "$3$",
          "$1$"
        ]
      ]
    },
    "tags": [
      "sujet type bac",
      "moyenne pondérée"
    ],
    "bac": true
  },
  {
    "id": "Q012",
    "domain": "Statistiques",
    "difficulty": 3,
    "type": "qcm",
    "question": "Voici trois notes avec leurs coefficients. Que doit valoir $x$ pour que la moyenne soit $14$ ?",
    "options": [
      "$x=2$",
      "$x=10^{-3}$",
      "impossible",
      "$x=5$"
    ],
    "answer": 3,
    "explanation": "On veut $\\dfrac{8+2\\times12+16x}{1+2+x}=14$. Donc $32+16x=42+14x$, d’où $2x=10$ et $x=5$.",
    "method": "Traduire la moyenne pondérée par une équation.",
    "diagram": {
      "type": "table",
      "headers": [
        "Note",
        "$8$",
        "$12$",
        "$16$"
      ],
      "rows": [
        [
          "Coefficient",
          "$1$",
          "$2$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "sujet type bac",
      "moyenne",
      "équation"
    ],
    "bac": true
  },
  {
    "id": "Q013",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir de l’arbre pondéré, la probabilité $P(A\\cap B)$ vaut :",
    "options": [
      "$0,18$",
      "$0,9$",
      "$0,50$",
      "$0,30$"
    ],
    "answer": 0,
    "explanation": "Sur une branche, on multiplie les probabilités : $P(A\\cap B)=P(A)\\times P_A(B)=0,6\\times0,3=0,18$.",
    "method": "Dans un arbre, la probabilité d’un chemin est le produit des probabilités rencontrées.",
    "diagram": {
      "type": "tree",
      "first": [
        [
          "$A$",
          "$0,6$"
        ],
        [
          "$\\overline A$",
          "$0,4$"
        ]
      ],
      "second": {
        "$A$": [
          [
            "$B$",
            "$0,3$"
          ],
          [
            "$\\overline B$",
            "$0,7$"
          ]
        ],
        "$\\overline A$": [
          [
            "$B$",
            "$0,2$"
          ],
          [
            "$\\overline B$",
            "$0,8$"
          ]
        ]
      }
    },
    "tags": [
      "sujet type bac",
      "arbre pondéré"
    ],
    "bac": true
  },
  {
    "id": "Q014",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une suite arithmétique vérifie $u_0=5$ et a pour raison $3$. Son terme général est :",
    "options": [
      "$u_n=5\\times3^n$",
      "$u_n=3n+5$",
      "$u_n=8n$",
      "$u_n=5n+3$"
    ],
    "answer": 1,
    "explanation": "Pour une suite arithmétique de premier terme $u_0$, on a $u_n=u_0+nr$, donc $u_n=5+3n$.",
    "method": "Suite arithmétique : on ajoute toujours la même raison.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "suite arithmétique"
    ],
    "bac": true
  },
  {
    "id": "Q015",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "La fonction $f$ est définie par $f(x)=x^2-5x+1$. Sa dérivée est :",
    "options": [
      "$2x+5$",
      "$2$",
      "$x^2-5$",
      "$2x-5$"
    ],
    "answer": 3,
    "explanation": "On dérive terme à terme : $(x^2)'=2x$, $(-5x)'=-5$ et $1'=0$.",
    "method": "Connaître les dérivées usuelles : $(x^2)'=2x$ et $(ax)'=a$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "dérivée"
    ],
    "bac": true
  },
  {
    "id": "Q016",
    "domain": "Défis spécialité première",
    "difficulty": 3,
    "type": "qcm",
    "question": "Le trinôme $x^2-5x+4$ est positif ou nul pour :",
    "options": [
      "$[1;4]$",
      "$[1;+\\infty)$",
      "$(-\\infty;1]\\cup[4;+\\infty)$",
      "$(-\\infty;4]$"
    ],
    "answer": 2,
    "explanation": "On factorise $x^2-5x+4=(x-1)(x-4)$. Comme le coefficient dominant est positif, le trinôme est positif à l’extérieur des racines.",
    "method": "Pour un trinôme de coefficient dominant positif, le signe est positif à l’extérieur des racines.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "second degré"
    ],
    "bac": true
  },
  {
    "id": "Q017",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{1}{2}+\\dfrac{1}{3} $.",
    "options": [
      "$1$",
      "$\\dfrac{2}{5}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{5}{6}$"
    ],
    "answer": 3,
    "explanation": "On réduit au même dénominateur : $\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{5}{6}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q018",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{2}{3}+\\dfrac{1}{6} $.",
    "options": [
      "$\\dfrac{5}{6}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{8}{9}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur : $\\dfrac{2}{3}+\\dfrac{1}{6}=\\dfrac{5}{6}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q019",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{3}{4}+\\dfrac{1}{8} $.",
    "options": [
      "$\\dfrac{7}{8}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{29}{32}$",
      "$\\dfrac{5}{8}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur : $\\dfrac{3}{4}+\\dfrac{1}{8}=\\dfrac{7}{8}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q020",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{6}+-\\dfrac{1}{3} $.",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{5}{9}$",
      "$\\dfrac{4}{9}$",
      "$\\dfrac{7}{6}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur : $\\dfrac{5}{6}+-\\dfrac{1}{3}=\\dfrac{1}{2}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q021",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{7}{10}+\\dfrac{1}{5} $.",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{23}{25}$",
      "$\\dfrac{8}{15}$",
      "$\\dfrac{9}{10}$"
    ],
    "answer": 3,
    "explanation": "On réduit au même dénominateur : $\\dfrac{7}{10}+\\dfrac{1}{5}=\\dfrac{9}{10}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q022",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{4}{9}+\\dfrac{2}{3} $.",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{31}{27}$",
      "$\\dfrac{10}{9}$",
      "$-\\dfrac{2}{9}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur : $\\dfrac{4}{9}+\\dfrac{2}{3}=\\dfrac{10}{9}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q023",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{12}+\\dfrac{1}{4} $.",
    "options": [
      "$\\dfrac{3}{8}$",
      "$\\dfrac{2}{3}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{11}{16}$"
    ],
    "answer": 1,
    "explanation": "On réduit au même dénominateur : $\\dfrac{5}{12}+\\dfrac{1}{4}=\\dfrac{2}{3}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q024",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{3}{5}+\\dfrac{7}{10} $.",
    "options": [
      "$-\\dfrac{1}{10}$",
      "$\\dfrac{33}{25}$",
      "$\\dfrac{13}{10}$",
      "$\\dfrac{2}{3}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur : $\\dfrac{3}{5}+\\dfrac{7}{10}=\\dfrac{13}{10}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q025",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{11}{15}+\\dfrac{2}{5} $.",
    "options": [
      "$\\dfrac{86}{75}$",
      "$\\dfrac{13}{20}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{17}{15}$"
    ],
    "answer": 3,
    "explanation": "On réduit au même dénominateur : $\\dfrac{11}{15}+\\dfrac{2}{5}=\\dfrac{17}{15}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q026",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{8}+\\dfrac{3}{4} $.",
    "options": [
      "$-\\dfrac{1}{8}$",
      "$\\dfrac{45}{32}$",
      "$\\dfrac{11}{8}$",
      "$\\dfrac{2}{3}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur : $\\dfrac{5}{8}+\\dfrac{3}{4}=\\dfrac{11}{8}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q027",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{2}{7}+\\dfrac{5}{14} $.",
    "options": [
      "$\\dfrac{4}{49}$",
      "$-\\dfrac{9}{14}$",
      "$\\dfrac{1}{14}$",
      "$\\dfrac{1}{7}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur : $-\\dfrac{2}{7}+\\dfrac{5}{14}=\\dfrac{1}{14}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q028",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{7}{9}+-\\dfrac{1}{3} $.",
    "options": [
      "$\\dfrac{4}{9}$",
      "$\\dfrac{10}{9}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{13}{27}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur : $\\dfrac{7}{9}+-\\dfrac{1}{3}=\\dfrac{4}{9}$.",
    "method": "Avant d’additionner deux fractions, on les écrit avec le même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": false
  },
  {
    "id": "Q029",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{2}{3}\\times \\dfrac{9}{4} $.",
    "options": [
      "$\\dfrac{35}{12}$",
      "$\\dfrac{3}{2}$",
      "$-\\dfrac{3}{2}$",
      "$\\dfrac{8}{27}$"
    ],
    "answer": 1,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $\\dfrac{3}{2}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q030",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{6}\\times \\dfrac{3}{10} $.",
    "options": [
      "$\\dfrac{1}{4}$",
      "$-\\dfrac{1}{4}$",
      "$\\dfrac{17}{15}$",
      "$\\dfrac{25}{9}$"
    ],
    "answer": 0,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $\\dfrac{1}{4}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q031",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{4}{7}\\times \\dfrac{21}{8} $.",
    "options": [
      "$-\\dfrac{3}{2}$",
      "$-\\dfrac{32}{147}$",
      "$\\dfrac{115}{56}$",
      "$\\dfrac{3}{2}$"
    ],
    "answer": 0,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $-\\dfrac{3}{2}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q032",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{12}{5}\\times \\dfrac{5}{6} $.",
    "options": [
      "$\\dfrac{72}{25}$",
      "$-2$",
      "$2$",
      "$\\dfrac{97}{30}$"
    ],
    "answer": 2,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $2$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q033",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{3}{11}\\times \\dfrac{22}{9} $.",
    "options": [
      "$-\\dfrac{27}{242}$",
      "$\\dfrac{215}{99}$",
      "$-\\dfrac{2}{3}$",
      "$\\dfrac{2}{3}$"
    ],
    "answer": 2,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $-\\dfrac{2}{3}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q034",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{7}{12}\\times \\dfrac{9}{7} $.",
    "options": [
      "$\\dfrac{49}{108}$",
      "$\\dfrac{157}{84}$",
      "$-\\dfrac{3}{4}$",
      "$\\dfrac{3}{4}$"
    ],
    "answer": 3,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $\\dfrac{3}{4}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q035",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{8}\\times -\\dfrac{16}{25} $.",
    "options": [
      "$-\\dfrac{125}{128}$",
      "$-\\dfrac{2}{5}$",
      "$-\\dfrac{3}{200}$",
      "$\\dfrac{2}{5}$"
    ],
    "answer": 1,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $-\\dfrac{2}{5}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q036",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{9}{10}\\times \\dfrac{5}{3} $.",
    "options": [
      "$\\dfrac{3}{2}$",
      "$\\dfrac{77}{30}$",
      "$\\dfrac{27}{50}$",
      "$-\\dfrac{3}{2}$"
    ],
    "answer": 0,
    "explanation": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie : $\\dfrac{3}{2}$.",
    "method": "Pour multiplier deux fractions, il n’est pas nécessaire de les mettre au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions",
      "produit"
    ],
    "bac": false
  },
  {
    "id": "Q037",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(2)^{5}$.",
    "options": [
      "$10$",
      "$32$",
      "$0$",
      "$\\dfrac{1}{32}$"
    ],
    "answer": 1,
    "explanation": "On applique la définition d’une puissance. Ici $(2)^{5}=32$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q038",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(3)^{4}$.",
    "options": [
      "$0$",
      "$12$",
      "$\\dfrac{1}{81}$",
      "$81$"
    ],
    "answer": 3,
    "explanation": "On applique la définition d’une puissance. Ici $(3)^{4}=81$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q039",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(5)^{3}$.",
    "options": [
      "$0$",
      "$15$",
      "$125$",
      "$\\dfrac{1}{125}$"
    ],
    "answer": 2,
    "explanation": "On applique la définition d’une puissance. Ici $(5)^{3}=125$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q040",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(-2)^{4}$.",
    "options": [
      "$-16$",
      "$-8$",
      "$16$",
      "$\\dfrac{1}{16}$"
    ],
    "answer": 2,
    "explanation": "On applique la définition d’une puissance. Ici $(-2)^{4}=16$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q041",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(-3)^{3}$.",
    "options": [
      "$\\dfrac{1}{27}$",
      "$-9$",
      "$27$",
      "$-27$"
    ],
    "answer": 3,
    "explanation": "On applique la définition d’une puissance. Ici $(-3)^{3}=-27$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q042",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(10)^{-2}$.",
    "options": [
      "$0$",
      "$\\dfrac{1}{100}$",
      "$100$",
      "$-20$"
    ],
    "answer": 1,
    "explanation": "On applique la définition d’une puissance. Ici $(10)^{-2}=\\dfrac{1}{100}$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q043",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(4)^{-1}$.",
    "options": [
      "$-4$",
      "$\\dfrac{1}{4}$",
      "$0$",
      "$4$"
    ],
    "answer": 1,
    "explanation": "On applique la définition d’une puissance. Ici $(4)^{-1}=\\dfrac{1}{4}$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q044",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $(2)^{-3}$.",
    "options": [
      "$8$",
      "$\\dfrac{1}{8}$",
      "$0$",
      "$-6$"
    ],
    "answer": 1,
    "explanation": "On applique la définition d’une puissance. Ici $(2)^{-3}=\\dfrac{1}{8}$.",
    "method": "Attention au signe quand la base est négative et à l’inverse quand l’exposant est négatif.",
    "diagram": null,
    "tags": [
      "puissances"
    ],
    "bac": false
  },
  {
    "id": "Q045",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $3500$ en notation scientifique.",
    "options": [
      "$35\\times10^2$",
      "$0,35\\times10^4$",
      "$3,5\\times10^3$",
      "$3,5\\times10^{-3}$"
    ],
    "answer": 2,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q046",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $0,0042$ en notation scientifique.",
    "options": [
      "$42\\times10^{-4}$",
      "$0,42\\times10^{-2}$",
      "$4,2\\times10^3$",
      "$4,2\\times10^{-3}$"
    ],
    "answer": 3,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q047",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $720000$ en notation scientifique.",
    "options": [
      "$42\\times10^{-4}$",
      "$4,2\\times10^3$",
      "$0,42\\times10^{-2}$",
      "$7,2\\times10^5$"
    ],
    "answer": 3,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q048",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $0,00081$ en notation scientifique.",
    "options": [
      "$8,1\\times10^{-4}$",
      "$0,42\\times10^{-2}$",
      "$4,2\\times10^3$",
      "$42\\times10^{-4}$"
    ],
    "answer": 0,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q049",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $12000000$ en notation scientifique.",
    "options": [
      "$1,2\\times10^7$",
      "$4,2\\times10^3$",
      "$42\\times10^{-4}$",
      "$0,42\\times10^{-2}$"
    ],
    "answer": 0,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q050",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Écrire $0,065$ en notation scientifique.",
    "options": [
      "$42\\times10^{-4}$",
      "$0,42\\times10^{-2}$",
      "$4,2\\times10^3$",
      "$6,5\\times10^{-2}$"
    ],
    "answer": 3,
    "explanation": "En notation scientifique, on écrit un nombre sous la forme $a\\times10^n$ avec $1\\le a\\lt10$.",
    "method": "Déplacer la virgule et compter le nombre de rangs : vers la gauche, exposant positif ; vers la droite, exposant négatif.",
    "diagram": null,
    "tags": [
      "notation scientifique"
    ],
    "bac": false
  },
  {
    "id": "Q051",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $3x+5=17$.",
    "options": [
      "$x=\\dfrac{12}{5}$",
      "$x=-4$",
      "$x=\\dfrac{22}{3}$",
      "$x=4$"
    ],
    "answer": 3,
    "explanation": "On isole $x$ : $3x=12$ puis $x=4$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q052",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $2x-7=9$.",
    "options": [
      "$x=-8$",
      "$x=8$",
      "$x=-\\dfrac{16}{7}$",
      "$x=1$"
    ],
    "answer": 1,
    "explanation": "On isole $x$ : $2x=16$ puis $x=8$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q053",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $-4x+6=-10$.",
    "options": [
      "$x=1$",
      "$x=-\\dfrac{8}{3}$",
      "$x=-4$",
      "$x=4$"
    ],
    "answer": 3,
    "explanation": "On isole $x$ : $-4x=-16$ puis $x=4$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q054",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $5x-2=18$.",
    "options": [
      "$x=-4$",
      "$x=-10$",
      "$x=4$",
      "$x=\\dfrac{16}{5}$"
    ],
    "answer": 2,
    "explanation": "On isole $x$ : $5x=20$ puis $x=4$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q055",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $-3x-1=11$.",
    "options": [
      "$x=-\\dfrac{10}{3}$",
      "$x=4$",
      "$x=-4$",
      "$x=-12$"
    ],
    "answer": 2,
    "explanation": "On isole $x$ : $-3x=12$ puis $x=-4$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q056",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $7x+4=-10$.",
    "options": [
      "$x=-2$",
      "$x=-\\dfrac{6}{7}$",
      "$x=2$",
      "$x=-\\dfrac{7}{2}$"
    ],
    "answer": 0,
    "explanation": "On isole $x$ : $7x=-14$ puis $x=-2$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q057",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $6x+8=2$.",
    "options": [
      "$x=1$",
      "$x=-1$",
      "$x=-\\dfrac{3}{4}$",
      "$x=\\dfrac{5}{3}$"
    ],
    "answer": 1,
    "explanation": "On isole $x$ : $6x=-6$ puis $x=-1$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q058",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Résoudre dans $\\mathbb{R}$ : $9x-3=24$.",
    "options": [
      "$x=-9$",
      "$x=\\dfrac{7}{3}$",
      "$x=3$",
      "$x=-3$"
    ],
    "answer": 2,
    "explanation": "On isole $x$ : $9x=27$ puis $x=3$.",
    "method": "Dans une équation du premier degré, on effectue la même opération des deux côtés.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": false
  },
  {
    "id": "Q059",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Résoudre l’inéquation $2x+3 \\lt 11$.",
    "options": [
      "$x \\gt 4$",
      "$x \\lt -4$",
      "$x \\lt 4$",
      "$x = 4$"
    ],
    "answer": 2,
    "explanation": "On isole $x$. Attention : si l’on divise par un nombre négatif, le sens de l’inégalité change.",
    "method": "Le réflexe important est de changer le sens de l’inégalité lors d’une division par un nombre négatif.",
    "diagram": null,
    "tags": [
      "inéquation"
    ],
    "bac": false
  },
  {
    "id": "Q060",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Résoudre l’inéquation $-3x+4 \\lt 10$.",
    "options": [
      "$x = -2$",
      "$x \\lt -2$",
      "$x \\gt 2$",
      "$x \\gt -2$"
    ],
    "answer": 3,
    "explanation": "On isole $x$. Attention : si l’on divise par un nombre négatif, le sens de l’inégalité change.",
    "method": "Le réflexe important est de changer le sens de l’inégalité lors d’une division par un nombre négatif.",
    "diagram": null,
    "tags": [
      "inéquation"
    ],
    "bac": false
  },
  {
    "id": "Q061",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Résoudre l’inéquation $5x-1 \\gt 14$.",
    "options": [
      "$x \\gt 3$",
      "$x = 3$",
      "$x \\lt 3$",
      "$x \\gt -3$"
    ],
    "answer": 0,
    "explanation": "On isole $x$. Attention : si l’on divise par un nombre négatif, le sens de l’inégalité change.",
    "method": "Le réflexe important est de changer le sens de l’inégalité lors d’une division par un nombre négatif.",
    "diagram": null,
    "tags": [
      "inéquation"
    ],
    "bac": false
  },
  {
    "id": "Q062",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Résoudre l’inéquation $-2x-5 \\gt 1$.",
    "options": [
      "$x \\gt -3$",
      "$x \\lt -3$",
      "$x \\lt 3$",
      "$x = -3$"
    ],
    "answer": 1,
    "explanation": "On isole $x$. Attention : si l’on divise par un nombre négatif, le sens de l’inégalité change.",
    "method": "Le réflexe important est de changer le sens de l’inégalité lors d’une division par un nombre négatif.",
    "diagram": null,
    "tags": [
      "inéquation"
    ],
    "bac": false
  },
  {
    "id": "Q063",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Résoudre l’inéquation $4x+7 \\le -9$.",
    "options": [
      "$x \\le 4$",
      "$x \\lt -4$",
      "$x = -4$",
      "$x \\le -4$"
    ],
    "answer": 3,
    "explanation": "On isole $x$. Attention : si l’on divise par un nombre négatif, le sens de l’inégalité change.",
    "method": "Le réflexe important est de changer le sens de l’inégalité lors d’une division par un nombre négatif.",
    "diagram": null,
    "tags": [
      "inéquation"
    ],
    "bac": false
  },
  {
    "id": "Q064",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Développer et réduire : $3(x+4)$.",
    "options": [
      "$3x+4$",
      "$7x$",
      "$3x+12$",
      "$x+12$"
    ],
    "answer": 2,
    "explanation": "On applique la distributivité ou une identité remarquable : $3(x+4)$=$3x+12$.",
    "method": "Reconnaître rapidement la distributivité simple et les identités remarquables.",
    "diagram": null,
    "tags": [
      "calcul littéral"
    ],
    "bac": false
  },
  {
    "id": "Q065",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Développer et réduire : $-2(x-5)$.",
    "options": [
      "$2x+10$",
      "$-2x+5$",
      "$-2x+10$",
      "$-2x-10$"
    ],
    "answer": 2,
    "explanation": "On applique la distributivité ou une identité remarquable : $-2(x-5)$=$-2x+10$.",
    "method": "Reconnaître rapidement la distributivité simple et les identités remarquables.",
    "diagram": null,
    "tags": [
      "calcul littéral"
    ],
    "bac": false
  },
  {
    "id": "Q066",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Développer et réduire : $(x+3)(x-3)$.",
    "options": [
      "$x^2-6x+9$",
      "$x^2-9$",
      "$2x-9$",
      "$x^2+9$"
    ],
    "answer": 1,
    "explanation": "On applique la distributivité ou une identité remarquable : $(x+3)(x-3)$=$x^2-9$.",
    "method": "Reconnaître rapidement la distributivité simple et les identités remarquables.",
    "diagram": null,
    "tags": [
      "calcul littéral"
    ],
    "bac": false
  },
  {
    "id": "Q067",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Développer et réduire : $(x+4)^2$.",
    "options": [
      "$2x+8$",
      "$x^2+8x+16$",
      "$x^2+16$",
      "$x^2+4x+16$"
    ],
    "answer": 1,
    "explanation": "On applique la distributivité ou une identité remarquable : $(x+4)^2$=$x^2+8x+16$.",
    "method": "Reconnaître rapidement la distributivité simple et les identités remarquables.",
    "diagram": null,
    "tags": [
      "calcul littéral"
    ],
    "bac": false
  },
  {
    "id": "Q068",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Développer et réduire : $(2x-1)^2$.",
    "options": [
      "$4x^2-1$",
      "$2x^2-2x+1$",
      "$4x^2+1$",
      "$4x^2-4x+1$"
    ],
    "answer": 3,
    "explanation": "On applique la distributivité ou une identité remarquable : $(2x-1)^2$=$4x^2-4x+1$.",
    "method": "Reconnaître rapidement la distributivité simple et les identités remarquables.",
    "diagram": null,
    "tags": [
      "calcul littéral"
    ],
    "bac": false
  },
  {
    "id": "Q069",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Factoriser : $x^2-16$.",
    "options": [
      "$(x-8)(x+8)$",
      "$x(x-16)$",
      "$(x-4)^2$",
      "$(x-4)(x+4)$"
    ],
    "answer": 3,
    "explanation": "On cherche un facteur commun ou une identité remarquable. Ici : $x^2-16$=$(x-4)(x+4)$.",
    "method": "Commencer par repérer un facteur commun ou une différence de deux carrés.",
    "diagram": null,
    "tags": [
      "factorisation"
    ],
    "bac": false
  },
  {
    "id": "Q070",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Factoriser : $9x^2-25$.",
    "options": [
      "$(9x-5)(x+5)$",
      "$(3x-5)^2$",
      "$(9x-25)(x+1)$",
      "$(3x-5)(3x+5)$"
    ],
    "answer": 3,
    "explanation": "On cherche un facteur commun ou une identité remarquable. Ici : $9x^2-25$=$(3x-5)(3x+5)$.",
    "method": "Commencer par repérer un facteur commun ou une différence de deux carrés.",
    "diagram": null,
    "tags": [
      "factorisation"
    ],
    "bac": false
  },
  {
    "id": "Q071",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Factoriser : $x^2+6x+9$.",
    "options": [
      "$(x+3)^2$",
      "$(x+6)^2$",
      "$(x-3)^2$",
      "$(x+3)(x-3)$"
    ],
    "answer": 0,
    "explanation": "On cherche un facteur commun ou une identité remarquable. Ici : $x^2+6x+9$=$(x+3)^2$.",
    "method": "Commencer par repérer un facteur commun ou une différence de deux carrés.",
    "diagram": null,
    "tags": [
      "factorisation"
    ],
    "bac": false
  },
  {
    "id": "Q072",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Factoriser : $4x^2-12x$.",
    "options": [
      "$x(4x+12)$",
      "$4x(x-3)$",
      "$4x(x+3)$",
      "$4(x-3)$"
    ],
    "answer": 1,
    "explanation": "On cherche un facteur commun ou une identité remarquable. Ici : $4x^2-12x$=$4x(x-3)$.",
    "method": "Commencer par repérer un facteur commun ou une différence de deux carrés.",
    "diagram": null,
    "tags": [
      "factorisation"
    ],
    "bac": false
  },
  {
    "id": "Q073",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $25\\%$ de $80$.",
    "options": [
      "$55$",
      "$20$",
      "$25$",
      "$105$"
    ],
    "answer": 1,
    "explanation": "On calcule $80\\times \\dfrac{1}{4}$, ce qui donne $20$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q074",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $15\\%$ de $200$.",
    "options": [
      "$30$",
      "$185$",
      "$215$",
      "$15$"
    ],
    "answer": 0,
    "explanation": "On calcule $200\\times \\dfrac{3}{20}$, ce qui donne $30$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q075",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $12\\%$ de $250$.",
    "options": [
      "$30$",
      "$12$",
      "$262$",
      "$238$"
    ],
    "answer": 0,
    "explanation": "On calcule $250\\times \\dfrac{3}{25}$, ce qui donne $30$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q076",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $40\\%$ de $75$.",
    "options": [
      "$35$",
      "$40$",
      "$30$",
      "$115$"
    ],
    "answer": 2,
    "explanation": "On calcule $75\\times \\dfrac{2}{5}$, ce qui donne $30$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q077",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $5\\%$ de $600$.",
    "options": [
      "$5$",
      "$595$",
      "$30$",
      "$605$"
    ],
    "answer": 2,
    "explanation": "On calcule $600\\times \\dfrac{1}{20}$, ce qui donne $30$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q078",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $30\\%$ de $90$.",
    "options": [
      "$120$",
      "$30$",
      "$27$",
      "$60$"
    ],
    "answer": 2,
    "explanation": "On calcule $90\\times \\dfrac{3}{10}$, ce qui donne $27$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q079",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $18\\%$ de $150$.",
    "options": [
      "$168$",
      "$27$",
      "$132$",
      "$18$"
    ],
    "answer": 1,
    "explanation": "On calcule $150\\times \\dfrac{9}{50}$, ce qui donne $27$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q080",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $2,5\\%$ de $400$.",
    "options": [
      "$402,5$",
      "$2,5$",
      "$397,5$",
      "$10$"
    ],
    "answer": 3,
    "explanation": "On calcule $400\\times \\dfrac{1}{40}$, ce qui donne $10$.",
    "method": "Prendre $p\\%$ d’une quantité revient à multiplier par $\\dfrac{p}{100}$.",
    "diagram": null,
    "tags": [
      "pourcentage"
    ],
    "bac": false
  },
  {
    "id": "Q081",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $120$ et augmente de $10\\%$. Sa nouvelle valeur est :",
    "options": [
      "$12$",
      "$110$",
      "$132$",
      "$130$"
    ],
    "answer": 2,
    "explanation": "Le coefficient multiplicateur est $1,1$. La valeur finale vaut donc $120\\times 1,1=132$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q082",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $80$ et augmente de $25\\%$. Sa nouvelle valeur est :",
    "options": [
      "$55$",
      "$100$",
      "$20$",
      "$105$"
    ],
    "answer": 1,
    "explanation": "Le coefficient multiplicateur est $1,25$. La valeur finale vaut donc $80\\times 1,25=100$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q083",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $250$ et diminue de $20\\%$. Sa nouvelle valeur est :",
    "options": [
      "$50$",
      "$200$",
      "$270$",
      "$230$"
    ],
    "answer": 1,
    "explanation": "Le coefficient multiplicateur est $0,8$. La valeur finale vaut donc $250\\times 0,8=200$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q084",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $60$ et diminue de $15\\%$. Sa nouvelle valeur est :",
    "options": [
      "$9$",
      "$75$",
      "$45$",
      "$51$"
    ],
    "answer": 3,
    "explanation": "Le coefficient multiplicateur est $0,85$. La valeur finale vaut donc $60\\times 0,85=51$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q085",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $45$ et augmente de $40\\%$. Sa nouvelle valeur est :",
    "options": [
      "$18$",
      "$85$",
      "$63$",
      "$5$"
    ],
    "answer": 2,
    "explanation": "Le coefficient multiplicateur est $1,4$. La valeur finale vaut donc $45\\times 1,4=63$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q086",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $300$ et diminue de $5\\%$. Sa nouvelle valeur est :",
    "options": [
      "$285$",
      "$305$",
      "$15$",
      "$295$"
    ],
    "answer": 0,
    "explanation": "Le coefficient multiplicateur est $0,95$. La valeur finale vaut donc $300\\times 0,95=285$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q087",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $150$ et augmente de $12\\%$. Sa nouvelle valeur est :",
    "options": [
      "$168$",
      "$18$",
      "$138$",
      "$162$"
    ],
    "answer": 0,
    "explanation": "Le coefficient multiplicateur est $1,12$. La valeur finale vaut donc $150\\times 1,12=168$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q088",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une quantité vaut $90$ et diminue de $30\\%$. Sa nouvelle valeur est :",
    "options": [
      "$120$",
      "$63$",
      "$60$",
      "$27$"
    ],
    "answer": 1,
    "explanation": "Le coefficient multiplicateur est $0,7$. La valeur finale vaut donc $90\\times 0,7=63$.",
    "method": "Hausse de $t\\%$ : multiplier par $1+\\dfrac{t}{100}$. Baisse de $t\\%$ : multiplier par $1-\\dfrac{t}{100}$.",
    "diagram": null,
    "tags": [
      "évolution"
    ],
    "bac": false
  },
  {
    "id": "Q089",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $10\\%$ puis de $20\\%$. Le taux global est :",
    "options": [
      "$-10\\%$",
      "$10\\%$",
      "$30\\%$",
      "$32\\%$"
    ],
    "answer": 3,
    "explanation": "Le coefficient global est $(1+10/100)(1+20/100)=1,32$. Le taux global vaut donc $32\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q090",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $30\\%$ puis de $-10\\%$. Le taux global est :",
    "options": [
      "$20\\%$",
      "$-40\\%$",
      "$40\\%$",
      "$17\\%$"
    ],
    "answer": 3,
    "explanation": "Le coefficient global est $(1+30/100)(1+-10/100)=1,17$. Le taux global vaut donc $17\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q091",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $-20\\%$ puis de $25\\%$. Le taux global est :",
    "options": [
      "$45\\%$",
      "$5\\%$",
      "$0\\%$",
      "$-45\\%$"
    ],
    "answer": 2,
    "explanation": "Le coefficient global est $(1+-20/100)(1+25/100)=1,0$. Le taux global vaut donc $0\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q092",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $15\\%$ puis de $-15\\%$. Le taux global est :",
    "options": [
      "$30\\%$",
      "$0\\%$",
      "$-30\\%$",
      "$-2,25\\%$"
    ],
    "answer": 3,
    "explanation": "Le coefficient global est $(1+15/100)(1+-15/100)=0,9775$. Le taux global vaut donc $-2,25\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q093",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $50\\%$ puis de $-20\\%$. Le taux global est :",
    "options": [
      "$-70\\%$",
      "$30\\%$",
      "$20\\%$",
      "$70\\%$"
    ],
    "answer": 2,
    "explanation": "Le coefficient global est $(1+50/100)(1+-20/100)=1,2$. Le taux global vaut donc $20\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q094",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $8\\%$ puis de $12\\%$. Le taux global est :",
    "options": [
      "$20\\%$",
      "$20,96\\%$",
      "$4\\%$",
      "$-4\\%$"
    ],
    "answer": 1,
    "explanation": "Le coefficient global est $(1+8/100)(1+12/100)=1,2096$. Le taux global vaut donc $20,96\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q095",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur subit une évolution de $-10\\%$ puis de $-10\\%$. Le taux global est :",
    "options": [
      "$-20\\%$",
      "$-19\\%$",
      "$-10\\%$",
      "$0\\%$"
    ],
    "answer": 1,
    "explanation": "Le coefficient global est $(1+-10/100)(1+-10/100)=0,81$. Le taux global vaut donc $-19\\%$.",
    "method": "Pour plusieurs évolutions, on multiplie les coefficients multiplicateurs.",
    "diagram": null,
    "tags": [
      "évolutions successives"
    ],
    "bac": true
  },
  {
    "id": "Q096",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir augmenté de $20\\%$, une valeur vaut $180$. La valeur initiale était :",
    "options": [
      "$216.0$",
      "$150$",
      "$30$",
      "$180$"
    ],
    "answer": 1,
    "explanation": "La valeur finale vaut valeur initiale $\\times 1,2$. Donc la valeur initiale vaut $180\\div 1,2=150$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q097",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir diminué de $30\\%$, une valeur vaut $91$. La valeur initiale était :",
    "options": [
      "$91$",
      "$39$",
      "$63.7$",
      "$130$"
    ],
    "answer": 3,
    "explanation": "La valeur finale vaut valeur initiale $\\times 0,7$. Donc la valeur initiale vaut $91\\div 0,7=130$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q098",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir diminué de $16\\%$, une valeur vaut $84$. La valeur initiale était :",
    "options": [
      "$16$",
      "$100$",
      "$84$",
      "$70.56$"
    ],
    "answer": 1,
    "explanation": "La valeur finale vaut valeur initiale $\\times 0,84$. Donc la valeur initiale vaut $84\\div 0,84=100$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q099",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir augmenté de $10\\%$, une valeur vaut $55$. La valeur initiale était :",
    "options": [
      "$5$",
      "$55$",
      "$50$",
      "$60.5$"
    ],
    "answer": 2,
    "explanation": "La valeur finale vaut valeur initiale $\\times 1,1$. Donc la valeur initiale vaut $55\\div 1,1=50$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q100",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir diminué de $10\\%$, une valeur vaut $72$. La valeur initiale était :",
    "options": [
      "$64.8$",
      "$80$",
      "$72$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "La valeur finale vaut valeur initiale $\\times 0,9$. Donc la valeur initiale vaut $72\\div 0,9=80$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q101",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Après avoir augmenté de $30\\%$, une valeur vaut $156$. La valeur initiale était :",
    "options": [
      "$36$",
      "$156$",
      "$202.8$",
      "$120$"
    ],
    "answer": 3,
    "explanation": "La valeur finale vaut valeur initiale $\\times 1,3$. Donc la valeur initiale vaut $156\\div 1,3=120$.",
    "method": "Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur.",
    "diagram": null,
    "tags": [
      "évolution réciproque"
    ],
    "bac": false
  },
  {
    "id": "Q102",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le tableau est un tableau de proportionnalité. La valeur de $x$ est :",
    "options": [
      "$x=29$",
      "$x=1.67$",
      "$x=15$",
      "$x=16$"
    ],
    "answer": 2,
    "explanation": "Le coefficient multiplicateur de la première à la deuxième colonne est $36\\div 12=3$. Donc $x=5\\times 3=15$.",
    "method": "Dans un tableau de proportionnalité, le rapport entre deux grandeurs reste constant.",
    "diagram": {
      "type": "table",
      "headers": [
        "Grandeur A",
        "$12$",
        "$36$"
      ],
      "rows": [
        [
          "Grandeur B",
          "$5$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "proportionnalité"
    ],
    "bac": false
  },
  {
    "id": "Q103",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le tableau est un tableau de proportionnalité. La valeur de $x$ est :",
    "options": [
      "$x=0.75$",
      "$x=24$",
      "$x=12$",
      "$x=13$"
    ],
    "answer": 2,
    "explanation": "Le coefficient multiplicateur de la première à la deuxième colonne est $28\\div 7=4$. Donc $x=3\\times 4=12$.",
    "method": "Dans un tableau de proportionnalité, le rapport entre deux grandeurs reste constant.",
    "diagram": {
      "type": "table",
      "headers": [
        "Grandeur A",
        "$7$",
        "$28$"
      ],
      "rows": [
        [
          "Grandeur B",
          "$3$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "proportionnalité"
    ],
    "bac": false
  },
  {
    "id": "Q104",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le tableau est un tableau de proportionnalité. La valeur de $x$ est :",
    "options": [
      "$x=20$",
      "$x=0.8$",
      "$x=21$",
      "$x=40$"
    ],
    "answer": 0,
    "explanation": "Le coefficient multiplicateur de la première à la deuxième colonne est $45\\div 9=5$. Donc $x=4\\times 5=20$.",
    "method": "Dans un tableau de proportionnalité, le rapport entre deux grandeurs reste constant.",
    "diagram": {
      "type": "table",
      "headers": [
        "Grandeur A",
        "$9$",
        "$45$"
      ],
      "rows": [
        [
          "Grandeur B",
          "$4$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "proportionnalité"
    ],
    "bac": false
  },
  {
    "id": "Q105",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le tableau est un tableau de proportionnalité. La valeur de $x$ est :",
    "options": [
      "$x=29$",
      "$x=20$",
      "$x=21$",
      "$x=3.2$"
    ],
    "answer": 1,
    "explanation": "Le coefficient multiplicateur de la première à la deuxième colonne est $35\\div 14=\\dfrac{5}{2}$. Donc $x=8\\times \\dfrac{5}{2}=20$.",
    "method": "Dans un tableau de proportionnalité, le rapport entre deux grandeurs reste constant.",
    "diagram": {
      "type": "table",
      "headers": [
        "Grandeur A",
        "$14$",
        "$35$"
      ],
      "rows": [
        [
          "Grandeur B",
          "$8$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "proportionnalité"
    ],
    "bac": false
  },
  {
    "id": "Q106",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le tableau est un tableau de proportionnalité. La valeur de $x$ est :",
    "options": [
      "$x=23$",
      "$x=34$",
      "$x=3.67$",
      "$x=33$"
    ],
    "answer": 3,
    "explanation": "Le coefficient multiplicateur de la première à la deuxième colonne est $18\\div 6=3$. Donc $x=11\\times 3=33$.",
    "method": "Dans un tableau de proportionnalité, le rapport entre deux grandeurs reste constant.",
    "diagram": {
      "type": "table",
      "headers": [
        "Grandeur A",
        "$6$",
        "$18$"
      ],
      "rows": [
        [
          "Grandeur B",
          "$11$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "proportionnalité"
    ],
    "bac": false
  },
  {
    "id": "Q107",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=2x-3$. Calculer $f(5)$.",
    "options": [
      "$-7$",
      "$5$",
      "$8$",
      "$7$"
    ],
    "answer": 3,
    "explanation": "On remplace $x$ par $5$ : $f(5)=7$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q108",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=-3x+4$. Calculer $f(-2)$.",
    "options": [
      "$11$",
      "$-10$",
      "$10$",
      "$8$"
    ],
    "answer": 2,
    "explanation": "On remplace $x$ par $-2$ : $f(-2)=10$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q109",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=4x+1$. Calculer $f(3)$.",
    "options": [
      "$11$",
      "$13$",
      "$14$",
      "$-13$"
    ],
    "answer": 1,
    "explanation": "On remplace $x$ par $3$ : $f(3)=13$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q110",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=-2x+5$. Calculer $f(1)$.",
    "options": [
      "$4$",
      "$1$",
      "$3$",
      "$-3$"
    ],
    "answer": 2,
    "explanation": "On remplace $x$ par $1$ : $f(1)=3$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q111",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=5x-7$. Calculer $f(2)$.",
    "options": [
      "$1$",
      "$-3$",
      "$4$",
      "$3$"
    ],
    "answer": 3,
    "explanation": "On remplace $x$ par $2$ : $f(2)=3$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q112",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=\\dfrac{1}{2}x+3$. Calculer $f(8)$.",
    "options": [
      "$5$",
      "$-7$",
      "$7$",
      "$8$"
    ],
    "answer": 2,
    "explanation": "On remplace $x$ par $8$ : $f(8)=7$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q113",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=3x-1$. Calculer $f(-4)$.",
    "options": [
      "$13$",
      "$-13$",
      "$-15$",
      "$-12$"
    ],
    "answer": 1,
    "explanation": "On remplace $x$ par $-4$ : $f(-4)=-13$.",
    "method": "Calculer une image consiste à remplacer $x$ par la valeur donnée.",
    "diagram": null,
    "tags": [
      "image"
    ],
    "bac": false
  },
  {
    "id": "Q114",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=4x+1$. Résoudre $f(x)=13$.",
    "options": [
      "$x=3$",
      "$x=4$",
      "$x=-3$",
      "$x=13$"
    ],
    "answer": 0,
    "explanation": "On résout $4x+1=13$, ce qui donne $x=3$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q115",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=-2x+5$. Résoudre $f(x)=1$.",
    "options": [
      "$x=1$",
      "$x=2$",
      "$x=-2$",
      "$x=3$"
    ],
    "answer": 1,
    "explanation": "On résout $-2x+5=1$, ce qui donne $x=2$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q116",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=3x-6$. Résoudre $f(x)=0$.",
    "options": [
      "$x=0$",
      "$x=3$",
      "$x=2$",
      "$x=-2$"
    ],
    "answer": 2,
    "explanation": "On résout $3x-6=0$, ce qui donne $x=2$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q117",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=5x+2$. Résoudre $f(x)=17$.",
    "options": [
      "$x=-3$",
      "$x=17$",
      "$x=3$",
      "$x=4$"
    ],
    "answer": 2,
    "explanation": "On résout $5x+2=17$, ce qui donne $x=3$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q118",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=-3x+4$. Résoudre $f(x)=10$.",
    "options": [
      "$x=2$",
      "$x=-1$",
      "$x=-2$",
      "$x=10$"
    ],
    "answer": 2,
    "explanation": "On résout $-3x+4=10$, ce qui donne $x=-2$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q119",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Soit $f(x)=\\dfrac{1}{2}x+1$. Résoudre $f(x)=5$.",
    "options": [
      "$x=9$",
      "$x=8$",
      "$x=5$",
      "$x=-8$"
    ],
    "answer": 1,
    "explanation": "On résout $\\dfrac{1}{2}x+1=5$, ce qui donne $x=8$.",
    "method": "Résoudre $f(x)=k$, c’est chercher les antécédents de $k$.",
    "diagram": null,
    "tags": [
      "antécédent"
    ],
    "bac": false
  },
  {
    "id": "Q120",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(0;1)$ et $B(2;5)$. Une équation de cette droite est :",
    "options": [
      "$y=2x-1$",
      "$y=1x+2$",
      "$y=2x+1$",
      "$y=-2x+1$"
    ],
    "answer": 2,
    "explanation": "Le coefficient directeur vaut $\\dfrac{5-1}{2-0}=2$. On obtient ensuite l’ordonnée à l’origine $b=1$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": 2.0,
      "b": 1,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q121",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(1;3)$ et $B(4;12)$. Une équation de cette droite est :",
    "options": [
      "$y=3x$",
      "$y=3x+3$",
      "$y=-3x$",
      "$y=0x+3$"
    ],
    "answer": 0,
    "explanation": "Le coefficient directeur vaut $\\dfrac{12-3}{4-1}=3$. On obtient ensuite l’ordonnée à l’origine $b=0$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": 3.0,
      "b": 0,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q122",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(-1;2)$ et $B(3;-6)$. Une équation de cette droite est :",
    "options": [
      "$y=0x$",
      "$y=-2x+2$",
      "$y=2x$",
      "$y=-2x$"
    ],
    "answer": 3,
    "explanation": "Le coefficient directeur vaut $\\dfrac{-6-2}{3--1}=-2$. On obtient ensuite l’ordonnée à l’origine $b=0$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": -2.0,
      "b": 0,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q123",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(0;-2)$ et $B(3;4)$. Une équation de cette droite est :",
    "options": [
      "$y=2x-2$",
      "$y=-2x-2$",
      "$y=-2x+2$",
      "$y=x-2$"
    ],
    "answer": 0,
    "explanation": "Le coefficient directeur vaut $\\dfrac{4--2}{3-0}=2$. On obtient ensuite l’ordonnée à l’origine $b=-2$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": 2.0,
      "b": -2,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q124",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(-2;5)$ et $B(2;1)$. Une équation de cette droite est :",
    "options": [
      "$y=-1x+5$",
      "$y=1x+3$",
      "$y=3x$",
      "$y=-1x+3$"
    ],
    "answer": 3,
    "explanation": "Le coefficient directeur vaut $\\dfrac{1-5}{2--2}=-1$. On obtient ensuite l’ordonnée à l’origine $b=3$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": -1.0,
      "b": 3,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q125",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite passe par $A(2;1)$ et $B(6;3)$. Une équation de cette droite est :",
    "options": [
      "$y=\\dfrac{1}{2}x$",
      "$y=0x$",
      "$y=\\dfrac{1}{2}x+1$",
      "$y=-\\dfrac{1}{2}x$"
    ],
    "answer": 0,
    "explanation": "Le coefficient directeur vaut $\\dfrac{3-1}{6-2}=\\dfrac{1}{2}$. On obtient ensuite l’ordonnée à l’origine $b=0$.",
    "method": "Pour une droite, utiliser $m=\\dfrac{y_B-y_A}{x_B-x_A}$ puis $y=mx+p$.",
    "diagram": {
      "type": "affine",
      "m": 0.5,
      "b": 0,
      "xMin": -4,
      "xMax": 7,
      "yMin": -5,
      "yMax": 13
    },
    "tags": [
      "droite"
    ],
    "bac": false
  },
  {
    "id": "Q126",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "À l’aide du graphique, lire l’image de $3$ par la fonction représentée.",
    "options": [
      "$-5$",
      "$6$",
      "$3$",
      "$5$"
    ],
    "answer": 3,
    "explanation": "On part de l’abscisse $3$ et on lit l’ordonnée du point de la droite : elle vaut $5$.",
    "method": "L’image de $x$ se lit sur l’axe vertical à partir du point de la courbe d’abscisse $x$.",
    "diagram": {
      "type": "affine",
      "m": 2,
      "b": -1,
      "xMin": -5,
      "xMax": 5,
      "yMin": -5,
      "yMax": 8,
      "highlightX": 3
    },
    "tags": [
      "lecture graphique"
    ],
    "bac": true
  },
  {
    "id": "Q127",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "À l’aide du graphique, lire l’image de $2$ par la fonction représentée.",
    "options": [
      "$2$",
      "$3$",
      "$0$",
      "$-2$"
    ],
    "answer": 0,
    "explanation": "On part de l’abscisse $2$ et on lit l’ordonnée du point de la droite : elle vaut $2$.",
    "method": "L’image de $x$ se lit sur l’axe vertical à partir du point de la courbe d’abscisse $x$.",
    "diagram": {
      "type": "affine",
      "m": -1,
      "b": 4,
      "xMin": -5,
      "xMax": 5,
      "yMin": -5,
      "yMax": 8,
      "highlightX": 2
    },
    "tags": [
      "lecture graphique"
    ],
    "bac": true
  },
  {
    "id": "Q128",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "À l’aide du graphique, lire l’image de $4$ par la fonction représentée.",
    "options": [
      "$4$",
      "$3$",
      "$-3$",
      "$0$"
    ],
    "answer": 1,
    "explanation": "On part de l’abscisse $4$ et on lit l’ordonnée du point de la droite : elle vaut $3$.",
    "method": "L’image de $x$ se lit sur l’axe vertical à partir du point de la courbe d’abscisse $x$.",
    "diagram": {
      "type": "affine",
      "m": 0.5,
      "b": 1,
      "xMin": -5,
      "xMax": 5,
      "yMin": -5,
      "yMax": 8,
      "highlightX": 4
    },
    "tags": [
      "lecture graphique"
    ],
    "bac": true
  },
  {
    "id": "Q129",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "À l’aide du graphique, lire l’image de $-1$ par la fonction représentée.",
    "options": [
      "$6$",
      "$5$",
      "$-5$",
      "$-1$"
    ],
    "answer": 1,
    "explanation": "On part de l’abscisse $-1$ et on lit l’ordonnée du point de la droite : elle vaut $5$.",
    "method": "L’image de $x$ se lit sur l’axe vertical à partir du point de la courbe d’abscisse $x$.",
    "diagram": {
      "type": "affine",
      "m": -2,
      "b": 3,
      "xMin": -5,
      "xMax": 5,
      "yMin": -5,
      "yMax": 8,
      "highlightX": -1
    },
    "tags": [
      "lecture graphique"
    ],
    "bac": true
  },
  {
    "id": "Q130",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La fonction est définie par $f(x)=-(x-1)^2+4$. Le sommet de sa parabole est :",
    "options": [
      "$S(-1;4)$",
      "$S(0;3)$",
      "$S(1;4)$",
      "$S(4;1)$"
    ],
    "answer": 2,
    "explanation": "La forme canonique $a(x-\\alpha)^2+\\beta$ donne directement le sommet $S(\\alpha;\\beta)$.",
    "method": "Lire le sommet dans la forme canonique.",
    "diagram": {
      "type": "parabola",
      "a": -1,
      "b": 2,
      "c": 3,
      "xMin": -3,
      "xMax": 5,
      "yMin": -2,
      "yMax": 5
    },
    "tags": [
      "parabole",
      "forme canonique"
    ],
    "bac": true
  },
  {
    "id": "Q131",
    "domain": "Fonctions et représentations",
    "difficulty": 3,
    "type": "qcm",
    "question": "Résoudre graphiquement $4-x^2\\ge0$ revient à choisir :",
    "options": [
      "$]-\\infty;-2]\\cup[2;+\\infty[$",
      "$\\{-2;2\\}$",
      "$[0;4]$",
      "$[-2;2]$"
    ],
    "answer": 3,
    "explanation": "$4-x^2=(2-x)(2+x)$ est positif entre ses deux racines $-2$ et $2$.",
    "method": "Pour une parabole tournée vers le bas, la fonction est positive entre les racines.",
    "diagram": {
      "type": "parabola",
      "a": -1,
      "b": 0,
      "c": 4,
      "xMin": -4,
      "xMax": 4,
      "yMin": -4,
      "yMax": 5
    },
    "tags": [
      "inéquation",
      "second degré"
    ],
    "bac": true
  },
  {
    "id": "Q132",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir du tableau de valeurs, choisir l’affirmation correcte.",
    "options": [
      "$f(4)=-2$",
      "$f$ est décroissante sur $[-3;1]$",
      "$f$ est croissante sur $[-3;1]$",
      "$f(1)=5$"
    ],
    "answer": 1,
    "explanation": "On compare les valeurs indiquées dans le tableau et on lit directement les images ou le sens d’évolution entre deux colonnes.",
    "method": "Un tableau de valeurs permet de lire des images et de comparer des valeurs, mais il ne donne pas toujours toute la courbe.",
    "diagram": {
      "type": "table",
      "headers": [
        "$x$",
        "$-3$",
        "$1$",
        "$4$"
      ],
      "rows": [
        [
          "$f(x)$",
          "$5$",
          "$-2$",
          "$6$"
        ]
      ]
    },
    "tags": [
      "tableau de valeurs"
    ],
    "bac": true
  },
  {
    "id": "Q133",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir du tableau de valeurs, choisir l’affirmation correcte.",
    "options": [
      "Le minimum lu est $-4$",
      "Le maximum lu est $-4$",
      "$g$ est toujours négative",
      "$g(3)=-4$"
    ],
    "answer": 0,
    "explanation": "On compare les valeurs indiquées dans le tableau et on lit directement les images ou le sens d’évolution entre deux colonnes.",
    "method": "Un tableau de valeurs permet de lire des images et de comparer des valeurs, mais il ne donne pas toujours toute la courbe.",
    "diagram": {
      "type": "table",
      "headers": [
        "$x$",
        "$-2$",
        "$0$",
        "$3$"
      ],
      "rows": [
        [
          "$g(x)$",
          "$1$",
          "$-4$",
          "$7$"
        ]
      ]
    },
    "tags": [
      "tableau de valeurs"
    ],
    "bac": true
  },
  {
    "id": "Q134",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "La médiane de la série $2, 4, 7, 9, 13$ est :",
    "options": [
      "$0$",
      "$2$",
      "$13$",
      "$7$"
    ],
    "answer": 3,
    "explanation": "La série est déjà rangée. La médiane est la valeur centrale, ou la moyenne des deux valeurs centrales si l’effectif est pair.",
    "method": "Ranger les valeurs puis chercher le milieu de la série.",
    "diagram": null,
    "tags": [
      "médiane"
    ],
    "bac": false
  },
  {
    "id": "Q135",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "La médiane de la série $5, 6, 8, 10, 16$ est :",
    "options": [
      "$8$",
      "$9$",
      "$16$",
      "$5$"
    ],
    "answer": 0,
    "explanation": "La série est déjà rangée. La médiane est la valeur centrale, ou la moyenne des deux valeurs centrales si l’effectif est pair.",
    "method": "Ranger les valeurs puis chercher le milieu de la série.",
    "diagram": null,
    "tags": [
      "médiane"
    ],
    "bac": false
  },
  {
    "id": "Q136",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "La médiane de la série $1, 1, 3, 6, 9, 20$ est :",
    "options": [
      "$\\dfrac{9}{2}$",
      "$20$",
      "$\\dfrac{20}{3}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "La série est déjà rangée. La médiane est la valeur centrale, ou la moyenne des deux valeurs centrales si l’effectif est pair.",
    "method": "Ranger les valeurs puis chercher le milieu de la série.",
    "diagram": null,
    "tags": [
      "médiane"
    ],
    "bac": false
  },
  {
    "id": "Q137",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "La médiane de la série $12, 14, 14, 15, 18$ est :",
    "options": [
      "$12$",
      "$18$",
      "$14$",
      "$14,6$"
    ],
    "answer": 2,
    "explanation": "La série est déjà rangée. La médiane est la valeur centrale, ou la moyenne des deux valeurs centrales si l’effectif est pair.",
    "method": "Ranger les valeurs puis chercher le milieu de la série.",
    "diagram": null,
    "tags": [
      "médiane"
    ],
    "bac": false
  },
  {
    "id": "Q138",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer la moyenne de la série donnée par le tableau.",
    "options": [
      "$37$",
      "$12$",
      "$12,33333333$",
      "$6$"
    ],
    "answer": 1,
    "explanation": "On calcule la somme des valeurs pondérées par leurs effectifs, puis on divise par l’effectif total.",
    "method": "Moyenne pondérée : $\\overline{x}=\\dfrac{\\sum x_i n_i}{\\sum n_i}$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Valeur",
        "$10$",
        "$12$",
        "$15$"
      ],
      "rows": [
        [
          "Effectif",
          "$2$",
          "$3$",
          "$1$"
        ]
      ]
    },
    "tags": [
      "moyenne pondérée"
    ],
    "bac": true
  },
  {
    "id": "Q139",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer la moyenne de la série donnée par le tableau.",
    "options": [
      "$6$",
      "$8,666666667$",
      "$23$",
      "$7,666666667$"
    ],
    "answer": 1,
    "explanation": "On calcule la somme des valeurs pondérées par leurs effectifs, puis on divise par l’effectif total.",
    "method": "Moyenne pondérée : $\\overline{x}=\\dfrac{\\sum x_i n_i}{\\sum n_i}$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Valeur",
        "$5$",
        "$7$",
        "$11$"
      ],
      "rows": [
        [
          "Effectif",
          "$1$",
          "$2$",
          "$3$"
        ]
      ]
    },
    "tags": [
      "moyenne pondérée"
    ],
    "bac": true
  },
  {
    "id": "Q140",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer la moyenne de la série donnée par le tableau.",
    "options": [
      "$8$",
      "$12,375$",
      "$47$",
      "$11,75$"
    ],
    "answer": 1,
    "explanation": "On calcule la somme des valeurs pondérées par leurs effectifs, puis on divise par l’effectif total.",
    "method": "Moyenne pondérée : $\\overline{x}=\\dfrac{\\sum x_i n_i}{\\sum n_i}$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Valeur",
        "$8$",
        "$9$",
        "$14$",
        "$16$"
      ],
      "rows": [
        [
          "Effectif",
          "$3$",
          "$1$",
          "$2$",
          "$2$"
        ]
      ]
    },
    "tags": [
      "moyenne pondérée"
    ],
    "bac": true
  },
  {
    "id": "Q141",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer la moyenne de la série donnée par le tableau.",
    "options": [
      "$6$",
      "$20$",
      "$6,666666667$",
      "$10$"
    ],
    "answer": 0,
    "explanation": "On calcule la somme des valeurs pondérées par leurs effectifs, puis on divise par l’effectif total.",
    "method": "Moyenne pondérée : $\\overline{x}=\\dfrac{\\sum x_i n_i}{\\sum n_i}$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Valeur",
        "$4$",
        "$6$",
        "$10$"
      ],
      "rows": [
        [
          "Effectif",
          "$5$",
          "$3$",
          "$2$"
        ]
      ]
    },
    "tags": [
      "moyenne pondérée"
    ],
    "bac": true
  },
  {
    "id": "Q142",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "À partir de la boîte à moustaches, choisir l’affirmation correcte.",
    "options": [
      "La médiane vaut $8$",
      "L’étendue vaut $12$",
      "Le premier quartile vaut $8$",
      "Le maximum vaut $12$"
    ],
    "answer": 0,
    "explanation": "On lit le minimum, le premier quartile, la médiane, le troisième quartile et le maximum sur la boîte.",
    "method": "Une boîte à moustaches se lit de gauche à droite : min, $Q_1$, médiane, $Q_3$, max.",
    "diagram": {
      "type": "boxplot",
      "min": 2,
      "q1": 5,
      "median": 8,
      "q3": 12,
      "max": 16
    },
    "tags": [
      "boîte à moustaches"
    ],
    "bac": true
  },
  {
    "id": "Q143",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "À partir de la boîte à moustaches, choisir l’affirmation correcte.",
    "options": [
      "L’étendue vaut $10$",
      "Le troisième quartile vaut $9$",
      "Le maximum vaut $11$",
      "La médiane vaut $6$"
    ],
    "answer": 0,
    "explanation": "On lit le minimum, le premier quartile, la médiane, le troisième quartile et le maximum sur la boîte.",
    "method": "Une boîte à moustaches se lit de gauche à droite : min, $Q_1$, médiane, $Q_3$, max.",
    "diagram": {
      "type": "boxplot",
      "min": 4,
      "q1": 6,
      "median": 9,
      "q3": 11,
      "max": 14
    },
    "tags": [
      "boîte à moustaches"
    ],
    "bac": true
  },
  {
    "id": "Q144",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans le diagramme en barres, quelle modalité possède l’effectif le plus grand ?",
    "options": [
      "$D$",
      "$C$",
      "$B$",
      "$A$"
    ],
    "answer": 1,
    "explanation": "La barre la plus haute correspond à l’effectif le plus grand.",
    "method": "Comparer visuellement la hauteur des barres.",
    "diagram": {
      "type": "bar",
      "values": [
        5,
        8,
        12,
        10
      ],
      "labels": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "tags": [
      "diagramme"
    ],
    "bac": false
  },
  {
    "id": "Q145",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans le diagramme en barres, quelle modalité possède l’effectif le plus grand ?",
    "options": [
      "$T1$",
      "$T2$",
      "$T4$",
      "$T3$"
    ],
    "answer": 0,
    "explanation": "La barre la plus haute correspond à l’effectif le plus grand.",
    "method": "Comparer visuellement la hauteur des barres.",
    "diagram": {
      "type": "bar",
      "values": [
        14,
        9,
        6,
        11
      ],
      "labels": [
        "T1",
        "T2",
        "T3",
        "T4"
      ]
    },
    "tags": [
      "diagramme"
    ],
    "bac": false
  },
  {
    "id": "Q146",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans un dé équilibré à $6$ faces, la probabilité de obtenir un nombre pair est :",
    "options": [
      "$\\dfrac{2}{3}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{1}{2}$"
    ],
    "answer": 3,
    "explanation": "On compte les cas favorables et on divise par le nombre total de cas possibles : $\\dfrac{1}{2}$.",
    "method": "En situation d’équiprobabilité : $P(A)=\\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.",
    "diagram": null,
    "tags": [
      "équiprobabilité"
    ],
    "bac": false
  },
  {
    "id": "Q147",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans un dé équilibré à $6$ faces, la probabilité de obtenir un nombre strictement supérieur à $4$ est :",
    "options": [
      "$\\dfrac{1}{6}$",
      "$\\dfrac{2}{3}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{2}$"
    ],
    "answer": 2,
    "explanation": "On compte les cas favorables et on divise par le nombre total de cas possibles : $\\dfrac{1}{3}$.",
    "method": "En situation d’équiprobabilité : $P(A)=\\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.",
    "diagram": null,
    "tags": [
      "équiprobabilité"
    ],
    "bac": false
  },
  {
    "id": "Q148",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une pièce équilibrée lancée deux fois, la probabilité de obtenir deux piles est :",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{3}{4}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{4}$"
    ],
    "answer": 3,
    "explanation": "On compte les cas favorables et on divise par le nombre total de cas possibles : $\\dfrac{1}{4}$.",
    "method": "En situation d’équiprobabilité : $P(A)=\\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.",
    "diagram": null,
    "tags": [
      "équiprobabilité"
    ],
    "bac": false
  },
  {
    "id": "Q149",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une urne contenant $3$ boules rouges et $5$ bleues, la probabilité de tirer une boule rouge est :",
    "options": [
      "$\\dfrac{5}{8}$",
      "$\\dfrac{3}{8}$",
      "$\\dfrac{3}{5}$",
      "$\\dfrac{1}{3}$"
    ],
    "answer": 1,
    "explanation": "On compte les cas favorables et on divise par le nombre total de cas possibles : $\\dfrac{3}{8}$.",
    "method": "En situation d’équiprobabilité : $P(A)=\\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.",
    "diagram": null,
    "tags": [
      "équiprobabilité"
    ],
    "bac": false
  },
  {
    "id": "Q150",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=\\dfrac{7}{10}$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$\\dfrac{17}{10}$",
      "$\\dfrac{3}{10}$",
      "$\\dfrac{7}{10}$",
      "$\\dfrac{2}{5}$"
    ],
    "answer": 1,
    "explanation": "L’événement contraire vérifie $P(\\overline A)=1-P(A)=\\dfrac{3}{10}$.",
    "method": "La somme des probabilités d’un événement et de son contraire vaut $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q151",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=\\dfrac{2}{5}$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$\\dfrac{3}{5}$",
      "$\\dfrac{7}{5}$",
      "$\\dfrac{2}{5}$",
      "$\\dfrac{1}{5}$"
    ],
    "answer": 0,
    "explanation": "L’événement contraire vérifie $P(\\overline A)=1-P(A)=\\dfrac{3}{5}$.",
    "method": "La somme des probabilités d’un événement et de son contraire vaut $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q152",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=0$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$\\dfrac12$",
      "$\\dfrac13$",
      "$1$",
      "$0$"
    ],
    "answer": 2,
    "explanation": "L’événement contraire vérifie $P(\\overline A)=1-P(A)=1$.",
    "method": "La somme des probabilités d’un événement et de son contraire vaut $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q153",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=\\dfrac{3}{4}$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$\\dfrac{7}{4}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{3}{4}$",
      "$\\dfrac{1}{4}$"
    ],
    "answer": 3,
    "explanation": "L’événement contraire vérifie $P(\\overline A)=1-P(A)=\\dfrac{1}{4}$.",
    "method": "La somme des probabilités d’un événement et de son contraire vaut $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q154",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=\\dfrac{11}{20}$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$\\dfrac{9}{20}$",
      "$\\dfrac{1}{10}$",
      "$\\dfrac{31}{20}$",
      "$\\dfrac{11}{20}$"
    ],
    "answer": 0,
    "explanation": "L’événement contraire vérifie $P(\\overline A)=1-P(A)=\\dfrac{9}{20}$.",
    "method": "La somme des probabilités d’un événement et de son contraire vaut $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q155",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "On suppose $A$ et $B$ indépendants avec $P(A)=0,6$ et $P(B)=0,25$. Alors $P(A\\cap B)$ vaut :",
    "options": [
      "$0,85$",
      "$0,25$",
      "$0,35$",
      "$0,15$"
    ],
    "answer": 3,
    "explanation": "Pour deux événements indépendants, $P(A\\cap B)=P(A)P(B)=0,6\\times0,25=0,15$.",
    "method": "Indépendance : la probabilité de l’intersection est le produit des probabilités.",
    "diagram": null,
    "tags": [
      "indépendance"
    ],
    "bac": true
  },
  {
    "id": "Q156",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "On suppose $A$ et $B$ indépendants avec $P(A)=0,4$ et $P(B)=0,5$. Alors $P(A\\cap B)$ vaut :",
    "options": [
      "$-0,09999999999999998$",
      "$0,5$",
      "$0,9$",
      "$0,2$"
    ],
    "answer": 3,
    "explanation": "Pour deux événements indépendants, $P(A\\cap B)=P(A)P(B)=0,4\\times0,5=0,2$.",
    "method": "Indépendance : la probabilité de l’intersection est le produit des probabilités.",
    "diagram": null,
    "tags": [
      "indépendance"
    ],
    "bac": true
  },
  {
    "id": "Q157",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "On suppose $A$ et $B$ indépendants avec $P(A)=0,75$ et $P(B)=0,2$. Alors $P(A\\cap B)$ vaut :",
    "options": [
      "$0,15$",
      "$0,95$",
      "$0,55$",
      "$0,2$"
    ],
    "answer": 0,
    "explanation": "Pour deux événements indépendants, $P(A\\cap B)=P(A)P(B)=0,75\\times0,2=0,15$.",
    "method": "Indépendance : la probabilité de l’intersection est le produit des probabilités.",
    "diagram": null,
    "tags": [
      "indépendance"
    ],
    "bac": true
  },
  {
    "id": "Q158",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "On suppose $A$ et $B$ indépendants avec $P(A)=0,3$ et $P(B)=0,8$. Alors $P(A\\cap B)$ vaut :",
    "options": [
      "$0,24$",
      "$1,1$",
      "$-0,5$",
      "$0,8$"
    ],
    "answer": 0,
    "explanation": "Pour deux événements indépendants, $P(A\\cap B)=P(A)P(B)=0,3\\times0,8=0,24$.",
    "method": "Indépendance : la probabilité de l’intersection est le produit des probabilités.",
    "diagram": null,
    "tags": [
      "indépendance"
    ],
    "bac": true
  },
  {
    "id": "Q159",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir de l’arbre pondéré, calculer $P(A\\cap B)$.",
    "options": [
      "$0,50$",
      "$0,90$",
      "$0,14$",
      "$0,35$"
    ],
    "answer": 2,
    "explanation": "La probabilité d’un chemin se calcule en multipliant les probabilités des branches qui le composent.",
    "method": "Arbre pondéré : produit sur un chemin, somme entre chemins incompatibles.",
    "diagram": {
      "type": "tree",
      "first": [
        [
          "$A$",
          "$0,7$"
        ],
        [
          "$\\overline A$",
          "$0,30000000000000004$"
        ]
      ],
      "second": {
        "$A$": [
          [
            "$B$",
            "$0,2$"
          ],
          [
            "$\\overline B$",
            "$0,8$"
          ]
        ],
        "$\\overline A$": [
          [
            "$B$",
            "$0,5$"
          ],
          [
            "$\\overline B$",
            "$0,5$"
          ]
        ]
      }
    },
    "tags": [
      "arbre pondéré"
    ],
    "bac": true
  },
  {
    "id": "Q160",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir de l’arbre pondéré, calculer $P(A\\cap B)$.",
    "options": [
      "$0,50$",
      "$0,30$",
      "$0,90$",
      "$0,35$"
    ],
    "answer": 1,
    "explanation": "La probabilité d’un chemin se calcule en multipliant les probabilités des branches qui le composent.",
    "method": "Arbre pondéré : produit sur un chemin, somme entre chemins incompatibles.",
    "diagram": {
      "type": "tree",
      "first": [
        [
          "$A$",
          "$0,4$"
        ],
        [
          "$\\overline A$",
          "$0,6$"
        ]
      ],
      "second": {
        "$A$": [
          [
            "$B$",
            "$0,75$"
          ],
          [
            "$\\overline B$",
            "$0,25$"
          ]
        ],
        "$\\overline A$": [
          [
            "$B$",
            "$0,1$"
          ],
          [
            "$\\overline B$",
            "$0,9$"
          ]
        ]
      }
    },
    "tags": [
      "arbre pondéré"
    ],
    "bac": true
  },
  {
    "id": "Q161",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "À partir de l’arbre pondéré, calculer $P(\\overline A\\cap B)$.",
    "options": [
      "$0,14$",
      "$0,90$",
      "$0,35$",
      "$0,50$"
    ],
    "answer": 0,
    "explanation": "La probabilité d’un chemin se calcule en multipliant les probabilités des branches qui le composent.",
    "method": "Arbre pondéré : produit sur un chemin, somme entre chemins incompatibles.",
    "diagram": {
      "type": "tree",
      "first": [
        [
          "$A$",
          "$0,3$"
        ],
        [
          "$\\overline A$",
          "$0,7$"
        ]
      ],
      "second": {
        "$A$": [
          [
            "$B$",
            "$0,6$"
          ],
          [
            "$\\overline B$",
            "$0,4$"
          ]
        ],
        "$\\overline A$": [
          [
            "$B$",
            "$0,2$"
          ],
          [
            "$\\overline B$",
            "$0,8$"
          ]
        ]
      }
    },
    "tags": [
      "arbre pondéré"
    ],
    "bac": true
  },
  {
    "id": "Q162",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dériver la fonction $f$ définie par $f(x)=x^3-4x+2$. On obtient :",
    "options": [
      "$3x^2-4$",
      "$x^2-4$",
      "$3x-4$",
      "$3x^2+4$"
    ],
    "answer": 0,
    "explanation": "On utilise les dérivées usuelles et la linéarité de la dérivation : $f'(x)=3x^2-4$.",
    "method": "Apprendre les dérivées usuelles permet de répondre très vite.",
    "diagram": null,
    "tags": [
      "dérivée"
    ],
    "bac": false
  },
  {
    "id": "Q163",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dériver la fonction $f$ définie par $f(x)=\\dfrac1x$. On obtient :",
    "options": [
      "$x^2$",
      "$\\dfrac1{x^2}$",
      "$-\\dfrac1x$",
      "$-\\dfrac1{x^2}$"
    ],
    "answer": 3,
    "explanation": "On utilise les dérivées usuelles et la linéarité de la dérivation : $f'(x)=-\\dfrac1{x^2}$.",
    "method": "Apprendre les dérivées usuelles permet de répondre très vite.",
    "diagram": null,
    "tags": [
      "dérivée"
    ],
    "bac": false
  },
  {
    "id": "Q164",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dériver la fonction $f$ définie par $f(x)=e^x+2x$. On obtient :",
    "options": [
      "$e^x+2$",
      "$e^x+2x$",
      "$e^{x+2}$",
      "$xe^{x-1}+2$"
    ],
    "answer": 0,
    "explanation": "On utilise les dérivées usuelles et la linéarité de la dérivation : $f'(x)=e^x+2$.",
    "method": "Apprendre les dérivées usuelles permet de répondre très vite.",
    "diagram": null,
    "tags": [
      "dérivée"
    ],
    "bac": false
  },
  {
    "id": "Q165",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une suite arithmétique vérifie $u_0=2$ et $u_{n+1}=u_n+3$. Alors :",
    "options": [
      "$u_n=3+2n$",
      "$u_n=2+3n$",
      "$u_n=5n$",
      "$u_n=2\\times 3^n$"
    ],
    "answer": 1,
    "explanation": "Une suite arithmétique de raison $r$ vérifie $u_n=u_0+nr$.",
    "method": "Repérer une relation du type $u_{n+1}=u_n+r$.",
    "diagram": null,
    "tags": [
      "suite"
    ],
    "bac": false
  },
  {
    "id": "Q166",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une suite arithmétique vérifie $u_0=10$ et $u_{n+1}=u_n-2$. Alors :",
    "options": [
      "$u_n=8n$",
      "$u_n=10\\times -2^n$",
      "$u_n=10-2n$",
      "$u_n=-2+10n$"
    ],
    "answer": 2,
    "explanation": "Une suite arithmétique de raison $r$ vérifie $u_n=u_0+nr$.",
    "method": "Repérer une relation du type $u_{n+1}=u_n+r$.",
    "diagram": null,
    "tags": [
      "suite"
    ],
    "bac": false
  },
  {
    "id": "Q167",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Une suite arithmétique vérifie $u_0=1$ et $u_{n+1}=u_n+5$. Alors :",
    "options": [
      "$u_n=5+1n$",
      "$u_n=1+5n$",
      "$u_n=1\\times 5^n$",
      "$u_n=6n$"
    ],
    "answer": 1,
    "explanation": "Une suite arithmétique de raison $r$ vérifie $u_n=u_0+nr$.",
    "method": "Repérer une relation du type $u_{n+1}=u_n+r$.",
    "diagram": null,
    "tags": [
      "suite"
    ],
    "bac": false
  },
  {
    "id": "Q168",
    "domain": "Défis spécialité première",
    "difficulty": 3,
    "type": "qcm",
    "question": "Le trinôme $$(x-2)(x+3)$$ est positif ou nul sur :",
    "options": [
      "$[2;+\\infty[$",
      "$]-\\infty;-3]$",
      "$]-\\infty;-3]\\cup[2;+\\infty[$",
      "$[-3;2]$"
    ],
    "answer": 2,
    "explanation": "On utilise le tableau de signes des deux facteurs et le signe du coefficient dominant.",
    "method": "Un produit de deux facteurs change de signe à chaque racine simple.",
    "diagram": null,
    "tags": [
      "second degré",
      "signe"
    ],
    "bac": true
  },
  {
    "id": "Q169",
    "domain": "Défis spécialité première",
    "difficulty": 3,
    "type": "qcm",
    "question": "Le trinôme $$-(x-1)(x-5)$$ est positif ou nul sur :",
    "options": [
      "$[1;5]$",
      "$[0;5]$",
      "$]-\\infty;1]\\cup[5;+\\infty[$",
      "$[1;+\\infty[$"
    ],
    "answer": 0,
    "explanation": "On utilise le tableau de signes des deux facteurs et le signe du coefficient dominant.",
    "method": "Un produit de deux facteurs change de signe à chaque racine simple.",
    "diagram": null,
    "tags": [
      "second degré",
      "signe"
    ],
    "bac": true
  },
  {
    "id": "Q170",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Simplifier $\\dfrac{18x}{24}$ pour $x\\ne0$.",
    "options": [
      "$\\dfrac{18}{24x}$",
      "$\\dfrac{4x}{3}$",
      "$\\dfrac{3x}{4}$",
      "$\\dfrac{x}{6}$"
    ],
    "answer": 2,
    "explanation": "On divise le numérateur et le dénominateur par $6$.",
    "method": "Chercher le plus grand facteur commun.",
    "diagram": null,
    "tags": [
      "simplification"
    ],
    "bac": true
  },
  {
    "id": "Q171",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Si $2a-3=7$, alors $a$ vaut :",
    "options": [
      "$10$",
      "$5$",
      "$2$",
      "$-5$"
    ],
    "answer": 1,
    "explanation": "On obtient $2a=10$, donc $a=5$.",
    "method": "Isoler la lettre inconnue.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": true
  },
  {
    "id": "Q172",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "Résoudre $\\dfrac{x}{3}+2=5$.",
    "options": [
      "$x=7$",
      "$x=9$",
      "$x=1$",
      "$x=15$"
    ],
    "answer": 1,
    "explanation": "On obtient $\\dfrac{x}{3}=3$, donc $x=9$.",
    "method": "Enlever les opérations inverses dans le bon ordre.",
    "diagram": null,
    "tags": [
      "équation"
    ],
    "bac": true
  },
  {
    "id": "Q173",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Un article passe de $80$ € à $100$ €. Le taux d’évolution est :",
    "options": [
      "$25\\%$",
      "$125\\%$",
      "$20\\%$",
      "$80\\%$"
    ],
    "answer": 0,
    "explanation": "Le taux vaut $\\dfrac{100-80}{80}=\\dfrac{20}{80}=0,25=25\\%$.",
    "method": "Toujours diviser par la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q174",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une quantité est multipliée par $1,08$. Cela correspond à :",
    "options": [
      "une baisse de $8\\%$",
      "une hausse de $8\\%$",
      "une hausse de $108\\%$",
      "une baisse de $92\\%$"
    ],
    "answer": 1,
    "explanation": "Le coefficient $1,08=1+0,08$ correspond à une hausse de $8\\%$.",
    "method": "Comparer le coefficient à $1$.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q175",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "Le point $A(3;11)$ appartient-il à la courbe de $f(x)=4x-1$ ?",
    "options": [
      "Seulement si $x=11$",
      "Non",
      "Oui",
      "Impossible à savoir"
    ],
    "answer": 2,
    "explanation": "$f(3)=4\\times3-1=11$, donc l’ordonnée correspond.",
    "method": "Tester un point consiste à remplacer $x$ par son abscisse.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q176",
    "domain": "Fonctions et représentations",
    "difficulty": 2,
    "type": "qcm",
    "question": "La droite d’équation $y=-3x+7$ a pour coefficient directeur :",
    "options": [
      "$3$",
      "$-3$",
      "$7$",
      "$-7$"
    ],
    "answer": 1,
    "explanation": "Dans $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Repérer $a$ dans l’écriture $y=ax+b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q177",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $20$ valeurs, une fréquence de $0,35$ correspond à un effectif de :",
    "options": [
      "$7$",
      "$5$",
      "$35$",
      "$12$"
    ],
    "answer": 0,
    "explanation": "Effectif = fréquence $\\times$ effectif total $=0,35\\times20=7$.",
    "method": "Une fréquence est une proportion.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q178",
    "domain": "Probabilités",
    "difficulty": 1,
    "type": "qcm",
    "question": "Si $P(A)=0,32$, alors $P(\\overline A)$ vaut :",
    "options": [
      "$1,32$",
      "$0,68$",
      "$0,58$",
      "$0,32$"
    ],
    "answer": 1,
    "explanation": "$P(\\overline A)=1-0,32=0,68$.",
    "method": "Complémentaire : on soustrait à $1$.",
    "diagram": null,
    "tags": [
      "événement contraire"
    ],
    "bac": true
  },
  {
    "id": "Q179",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Si $P(A)=0,4$ et $P_A(B)=0,25$, alors $P(A\\cap B)$ vaut :",
    "options": [
      "$0,25$",
      "$0,40$",
      "$0,65$",
      "$0,10$"
    ],
    "answer": 3,
    "explanation": "$P(A\\cap B)=P(A)\\times P_A(B)=0,4\\times0,25=0,10$.",
    "method": "Conditionnelle : multiplier par la probabilité de la première branche.",
    "diagram": null,
    "tags": [
      "probabilité conditionnelle"
    ],
    "bac": true
  },
  {
    "id": "Q180",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "La dérivée de $f(x)=3x^2-2x+5$ est :",
    "options": [
      "$x^3-x^2+5x$",
      "$3x-2$",
      "$6x+5$",
      "$6x-2$"
    ],
    "answer": 3,
    "explanation": "$(3x^2)'=6x$, $(-2x)'=-2$ et $5'=0$.",
    "method": "Dériver terme à terme.",
    "diagram": null,
    "tags": [
      "dérivée"
    ],
    "bac": true
  },
  {
    "id": "Q181",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la fonction affine $f(x)=2x+5$. L’antécédent de $17$ par $f$ est :",
    "options": [
      "$x=11$",
      "$x=6$",
      "$x=17$",
      "$x=-6$"
    ],
    "answer": 1,
    "explanation": "On résout $2x+5=17$, donc $x=6$.",
    "method": "Antécédent = solution de l’équation $f(x)=y$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "antécédent"
    ],
    "bac": true
  },
  {
    "id": "Q182",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la fonction affine $f(x)=3x-1$. L’antécédent de $8$ par $f$ est :",
    "options": [
      "$x=8$",
      "$x=\\dfrac{7}{3}$",
      "$x=-3$",
      "$x=3$"
    ],
    "answer": 3,
    "explanation": "On résout $3x-1=8$, donc $x=3$.",
    "method": "Antécédent = solution de l’équation $f(x)=y$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "antécédent"
    ],
    "bac": true
  },
  {
    "id": "Q183",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la fonction affine $f(x)=-2x+7$. L’antécédent de $1$ par $f$ est :",
    "options": [
      "$x=1$",
      "$x=-3$",
      "$x=3$",
      "$x=-4$"
    ],
    "answer": 2,
    "explanation": "On résout $-2x+7=1$, donc $x=3$.",
    "method": "Antécédent = solution de l’équation $f(x)=y$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "antécédent"
    ],
    "bac": true
  },
  {
    "id": "Q184",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la fonction affine $f(x)=4x+0$. L’antécédent de $12$ par $f$ est :",
    "options": [
      "$x=3$",
      "$x=0$",
      "$x=-3$",
      "$x=12$"
    ],
    "answer": 0,
    "explanation": "On résout $4x+0=12$, donc $x=3$.",
    "method": "Antécédent = solution de l’équation $f(x)=y$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "antécédent"
    ],
    "bac": true
  },
  {
    "id": "Q185",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la fonction affine $f(x)=5x+3$. L’antécédent de $-7$ par $f$ est :",
    "options": [
      "$x=-2$",
      "$x=-7$",
      "$x=2$",
      "$x=-\\dfrac{4}{5}$"
    ],
    "answer": 0,
    "explanation": "On résout $5x+3=-7$, donc $x=-2$.",
    "method": "Antécédent = solution de l’équation $f(x)=y$.",
    "diagram": null,
    "tags": [
      "sujet type bac",
      "antécédent"
    ],
    "bac": true
  },
  {
    "id": "Q186",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère la relation $v=\\dfrac{d}{t}$. Exprimer $d$ en fonction de $v$ et $t$.",
    "options": [
      "$d=\\dfrac{t}{v}$",
      "$d=v+t$",
      "$d=\\dfrac{v}{t}$",
      "$d=vt$"
    ],
    "answer": 3,
    "explanation": "On isole la grandeur demandée en appliquant les opérations inverses.",
    "method": "Quand une lettre est au dénominateur ou multipliée, penser aux opérations inverses.",
    "diagram": null,
    "tags": [
      "formule",
      "sujet type bac"
    ],
    "bac": true
  },
  {
    "id": "Q187",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère la relation $C=2\\pi r$. Exprimer $r$ en fonction de $C$.",
    "options": [
      "$r=\\dfrac{2\\pi}{C}$",
      "$r=C-2\\pi$",
      "$r=2\\pi C$",
      "$r=\\dfrac{C}{2\\pi}$"
    ],
    "answer": 3,
    "explanation": "On isole la grandeur demandée en appliquant les opérations inverses.",
    "method": "Quand une lettre est au dénominateur ou multipliée, penser aux opérations inverses.",
    "diagram": null,
    "tags": [
      "formule",
      "sujet type bac"
    ],
    "bac": true
  },
  {
    "id": "Q188",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère la relation $A=\\dfrac{bh}{2}$. Exprimer $h$ en fonction de $A$ et $b$.",
    "options": [
      "$h=\\dfrac{A}{2b}$",
      "$h=2Ab$",
      "$h=\\dfrac{b}{2A}$",
      "$h=\\dfrac{2A}{b}$"
    ],
    "answer": 3,
    "explanation": "On isole la grandeur demandée en appliquant les opérations inverses.",
    "method": "Quand une lettre est au dénominateur ou multipliée, penser aux opérations inverses.",
    "diagram": null,
    "tags": [
      "formule",
      "sujet type bac"
    ],
    "bac": true
  },
  {
    "id": "Q189",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 3,
    "type": "qcm",
    "question": "On considère la relation $y=3x-4$. Exprimer $x$ en fonction de $y$.",
    "options": [
      "$x=3y-4$",
      "$x=\\dfrac{y-4}{3}$",
      "$x=y+\\dfrac43$",
      "$x=\\dfrac{y+4}{3}$"
    ],
    "answer": 3,
    "explanation": "On isole la grandeur demandée en appliquant les opérations inverses.",
    "method": "Quand une lettre est au dénominateur ou multipliée, penser aux opérations inverses.",
    "diagram": null,
    "tags": [
      "formule",
      "sujet type bac"
    ],
    "bac": true
  },
  {
    "id": "Q190",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{6}-\\dfrac{1}{4} $.",
    "options": [
      "$\\dfrac{2}{5}$",
      "$\\dfrac{13}{12}$",
      "$\\dfrac{7}{12}$",
      "$-\\dfrac{7}{12}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{5}{6}-\\dfrac{1}{4}=\\dfrac{7}{12}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q191",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{7}{8}-\\dfrac{3}{16} $.",
    "options": [
      "$\\dfrac{1}{6}$",
      "$\\dfrac{17}{16}$",
      "$-\\dfrac{11}{16}$",
      "$\\dfrac{11}{16}$"
    ],
    "answer": 3,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{7}{8}-\\dfrac{3}{16}=\\dfrac{11}{16}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q192",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{2}{3}-\\dfrac{5}{9} $.",
    "options": [
      "$\\dfrac{1}{9}$",
      "$-\\dfrac{1}{9}$",
      "$-\\dfrac{1}{4}$",
      "$\\dfrac{11}{9}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{2}{3}-\\dfrac{5}{9}=\\dfrac{1}{9}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q193",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{1}{2}-\\dfrac{3}{4} $.",
    "options": [
      "$\\dfrac{1}{4}$",
      "$-\\dfrac{5}{4}$",
      "$-\\dfrac{2}{3}$",
      "$\\dfrac{5}{4}$"
    ],
    "answer": 1,
    "explanation": "On réduit au même dénominateur puis on soustrait : $-\\dfrac{1}{2}-\\dfrac{3}{4}=-\\dfrac{5}{4}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q194",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{11}{12}-\\dfrac{5}{6} $.",
    "options": [
      "$\\dfrac{1}{12}$",
      "$\\dfrac{7}{4}$",
      "$\\dfrac{1}{3}$",
      "$-\\dfrac{1}{12}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{11}{12}-\\dfrac{5}{6}=\\dfrac{1}{12}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q195",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{13}{10}-\\dfrac{7}{5} $.",
    "options": [
      "$-\\dfrac{1}{10}$",
      "$\\dfrac{27}{10}$",
      "$\\dfrac{1}{10}$",
      "$\\dfrac{2}{5}$"
    ],
    "answer": 0,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{13}{10}-\\dfrac{7}{5}=-\\dfrac{1}{10}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q196",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{3}{5}--\\dfrac{1}{10} $.",
    "options": [
      "$\\dfrac{1}{2}$",
      "$-\\dfrac{2}{15}$",
      "$-\\dfrac{1}{2}$",
      "$-\\dfrac{7}{10}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur puis on soustrait : $-\\dfrac{3}{5}--\\dfrac{1}{10}=-\\dfrac{1}{2}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q197",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{4}{7}--\\dfrac{2}{3} $.",
    "options": [
      "$-\\dfrac{2}{21}$",
      "$\\dfrac{3}{5}$",
      "$-\\dfrac{26}{21}$",
      "$\\dfrac{26}{21}$"
    ],
    "answer": 3,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{4}{7}--\\dfrac{2}{3}=\\dfrac{26}{21}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q198",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{9}{14}-\\dfrac{1}{2} $.",
    "options": [
      "$-\\dfrac{1}{7}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{1}{7}$",
      "$\\dfrac{8}{7}$"
    ],
    "answer": 2,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{9}{14}-\\dfrac{1}{2}=\\dfrac{1}{7}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q199",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{15}{16}-\\dfrac{3}{8} $.",
    "options": [
      "$\\dfrac{21}{16}$",
      "$\\dfrac{9}{16}$",
      "$\\dfrac{1}{2}$",
      "$-\\dfrac{9}{16}$"
    ],
    "answer": 1,
    "explanation": "On réduit au même dénominateur puis on soustrait : $\\dfrac{15}{16}-\\dfrac{3}{8}=\\dfrac{9}{16}$.",
    "method": "Soustraire une fraction revient à additionner son opposé après réduction au même dénominateur.",
    "diagram": null,
    "tags": [
      "fractions"
    ],
    "bac": true
  },
  {
    "id": "Q200",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{3}{5}\\div \\dfrac{9}{10} $.",
    "options": [
      "$\\dfrac{27}{50}$",
      "$\\dfrac{3}{2}$",
      "$-\\dfrac{2}{3}$",
      "$\\dfrac{2}{3}$"
    ],
    "answer": 3,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{3}{5}\\times \\dfrac{10}{9}=\\dfrac{2}{3}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q201",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{7}{12}\\div \\dfrac{14}{9} $.",
    "options": [
      "$\\dfrac{8}{3}$",
      "$\\dfrac{49}{54}$",
      "$\\dfrac{3}{8}$",
      "$-\\dfrac{3}{8}$"
    ],
    "answer": 2,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{7}{12}\\times \\dfrac{9}{14}=\\dfrac{3}{8}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q202",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{4}{3}\\div \\dfrac{2}{9} $.",
    "options": [
      "$-\\dfrac{1}{6}$",
      "$6$",
      "$-\\dfrac{8}{27}$",
      "$-6$"
    ],
    "answer": 3,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $-\\dfrac{4}{3}\\times \\dfrac{9}{2}=-6$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q203",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{5}{8}\\div -\\dfrac{15}{16} $.",
    "options": [
      "$-\\dfrac{75}{128}$",
      "$\\dfrac{2}{3}$",
      "$-\\dfrac{3}{2}$",
      "$-\\dfrac{2}{3}$"
    ],
    "answer": 3,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{5}{8}\\times -\\dfrac{16}{15}=-\\dfrac{2}{3}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q204",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{11}{6}\\div \\dfrac{22}{3} $.",
    "options": [
      "$\\dfrac{121}{9}$",
      "$\\dfrac{1}{4}$",
      "$4$",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 1,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{11}{6}\\times \\dfrac{3}{22}=\\dfrac{1}{4}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q205",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{2}{7}\\div \\dfrac{6}{35} $.",
    "options": [
      "$\\dfrac{5}{3}$",
      "$-\\dfrac{5}{3}$",
      "$\\dfrac{3}{5}$",
      "$\\dfrac{12}{245}$"
    ],
    "answer": 0,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{2}{7}\\times \\dfrac{35}{6}=\\dfrac{5}{3}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q206",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ -\\dfrac{9}{10}\\div \\dfrac{3}{5} $.",
    "options": [
      "$-\\dfrac{27}{50}$",
      "$\\dfrac{3}{2}$",
      "$-\\dfrac{2}{3}$",
      "$-\\dfrac{3}{2}$"
    ],
    "answer": 3,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $-\\dfrac{9}{10}\\times \\dfrac{5}{3}=-\\dfrac{3}{2}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q207",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 2,
    "type": "qcm",
    "question": "Calculer $ \\dfrac{4}{15}\\div \\dfrac{2}{3} $.",
    "options": [
      "$\\dfrac{5}{2}$",
      "$-\\dfrac{2}{5}$",
      "$\\dfrac{2}{5}$",
      "$\\dfrac{8}{45}$"
    ],
    "answer": 2,
    "explanation": "Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{4}{15}\\times \\dfrac{3}{2}=\\dfrac{2}{5}$.",
    "method": "Transformer la division en multiplication par l’inverse.",
    "diagram": null,
    "tags": [
      "fractions",
      "quotient"
    ],
    "bac": true
  },
  {
    "id": "Q208",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $3+4\\times5$.",
    "options": [
      "$23$",
      "$20$",
      "$27$",
      "$35$"
    ],
    "answer": 0,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q209",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $(3+4)\\times5$.",
    "options": [
      "$20$",
      "$23$",
      "$35$",
      "$12$"
    ],
    "answer": 2,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q210",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $18-6\\div3$.",
    "options": [
      "$4$",
      "$6$",
      "$16$",
      "$12$"
    ],
    "answer": 2,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q211",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $2^3+5^2$.",
    "options": [
      "$64$",
      "$49$",
      "$30$",
      "$33$"
    ],
    "answer": 3,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q212",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $4(7-2)^2$.",
    "options": [
      "$100$",
      "$400$",
      "$44$",
      "$36$"
    ],
    "answer": 0,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q213",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $-3^2$.",
    "options": [
      "$9$",
      "$6$",
      "$-6$",
      "$-9$"
    ],
    "answer": 3,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q214",
    "domain": "Calcul numérique et algébrique",
    "difficulty": 1,
    "type": "qcm",
    "question": "Calculer mentalement : $(-3)^2$.",
    "options": [
      "$9$",
      "$-9$",
      "$6$",
      "$-6$"
    ],
    "answer": 0,
    "explanation": "On applique les priorités opératoires : parenthèses, puissances, produits/quotients, puis sommes/différences.",
    "method": "Respecter l’ordre des opérations évite les erreurs rapides.",
    "diagram": null,
    "tags": [
      "priorités"
    ],
    "bac": false
  },
  {
    "id": "Q215",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $1,12$ correspond à :",
    "options": [
      "une hausse de $12\\%$",
      "une hausse de $112\\%$",
      "une baisse de $112\\%$",
      "aucune évolution"
    ],
    "answer": 0,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $1,12$ donne : une hausse de $12\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q216",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $0,84$ correspond à :",
    "options": [
      "une baisse de $16\\%$",
      "une hausse de $84\\%$",
      "aucune évolution",
      "une baisse de $84\\%$"
    ],
    "answer": 0,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $0,84$ donne : une baisse de $16\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q217",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $1,005$ correspond à :",
    "options": [
      "une hausse de $100\\%$",
      "aucune évolution",
      "une hausse de $0,5\\%$",
      "une baisse de $100\\%$"
    ],
    "answer": 2,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $1,005$ donne : une hausse de $0,5\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q218",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $0,975$ correspond à :",
    "options": [
      "une baisse de $2,5\\%$",
      "une hausse de $98\\%$",
      "aucune évolution",
      "une baisse de $98\\%$"
    ],
    "answer": 0,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $0,975$ donne : une baisse de $2,5\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q219",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $2,0$ correspond à :",
    "options": [
      "une hausse de $200\\%$",
      "une hausse de $100\\%$",
      "aucune évolution",
      "une baisse de $200\\%$"
    ],
    "answer": 1,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $2,0$ donne : une hausse de $100\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q220",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $0,5$ correspond à :",
    "options": [
      "une baisse de $50\\%$",
      "$-10\\%$",
      "aucune évolution",
      "une hausse de $50\\%$"
    ],
    "answer": 0,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $0,5$ donne : une baisse de $50\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q221",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $1,25$ correspond à :",
    "options": [
      "une hausse de $25\\%$",
      "aucune évolution",
      "une hausse de $125\\%$",
      "une baisse de $125\\%$"
    ],
    "answer": 0,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $1,25$ donne : une hausse de $25\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q222",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 1,
    "type": "qcm",
    "question": "Multiplier une quantité par $0,68$ correspond à :",
    "options": [
      "aucune évolution",
      "une baisse de $32\\%$",
      "une hausse de $68\\%$",
      "une baisse de $68\\%$"
    ],
    "answer": 1,
    "explanation": "On compare le coefficient multiplicateur à $1$. Ici $0,68$ donne : une baisse de $32\\%$.",
    "method": "Coefficient supérieur à $1$ : hausse ; inférieur à $1$ : baisse.",
    "diagram": null,
    "tags": [
      "coefficient multiplicateur"
    ],
    "bac": true
  },
  {
    "id": "Q223",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $40$ à $56$. Son taux d’évolution est :",
    "options": [
      "$140\\%$",
      "$16\\%$",
      "$40\\%$",
      "$-40\\%$"
    ],
    "answer": 2,
    "explanation": "Le taux vaut $\\dfrac{56-40}{40}=0,4$, soit $40\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q224",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $150$ à $120$. Son taux d’évolution est :",
    "options": [
      "$-30\\%$",
      "$80\\%$",
      "$20\\%$",
      "$-20\\%$"
    ],
    "answer": 3,
    "explanation": "Le taux vaut $\\dfrac{120-150}{150}=-0,2$, soit $-20\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q225",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $64$ à $80$. Son taux d’évolution est :",
    "options": [
      "$25\\%$",
      "$16\\%$",
      "$-25\\%$",
      "$125\\%$"
    ],
    "answer": 0,
    "explanation": "Le taux vaut $\\dfrac{80-64}{64}=0,25$, soit $25\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q226",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $240$ à $180$. Son taux d’évolution est :",
    "options": [
      "$75\\%$",
      "$-25\\%$",
      "$25\\%$",
      "$-60\\%$"
    ],
    "answer": 1,
    "explanation": "Le taux vaut $\\dfrac{180-240}{240}=-0,25$, soit $-25\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q227",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $30$ à $45$. Son taux d’évolution est :",
    "options": [
      "$50\\%$",
      "$15\\%$",
      "$150\\%$",
      "$-50\\%$"
    ],
    "answer": 0,
    "explanation": "Le taux vaut $\\dfrac{45-30}{30}=0,5$, soit $50\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q228",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $500$ à $450$. Son taux d’évolution est :",
    "options": [
      "$-50\\%$",
      "$90\\%$",
      "$10\\%$",
      "$-10\\%$"
    ],
    "answer": 3,
    "explanation": "Le taux vaut $\\dfrac{450-500}{500}=-0,1$, soit $-10\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q229",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $18$ à $21,6$. Son taux d’évolution est :",
    "options": [
      "$-20\\%$",
      "$120\\%$",
      "$20\\%$",
      "$3,6\\%$"
    ],
    "answer": 2,
    "explanation": "Le taux vaut $\\dfrac{21,6-18}{18}=0,2$, soit $20\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q230",
    "domain": "Proportions, pourcentages et évolutions",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une grandeur passe de $72$ à $54$. Son taux d’évolution est :",
    "options": [
      "$25\\%$",
      "$-25\\%$",
      "$-18\\%$",
      "$75\\%$"
    ],
    "answer": 1,
    "explanation": "Le taux vaut $\\dfrac{54-72}{72}=-0,25$, soit $-25\\%$.",
    "method": "Le dénominateur est toujours la valeur initiale.",
    "diagram": null,
    "tags": [
      "taux d’évolution"
    ],
    "bac": true
  },
  {
    "id": "Q231",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le point $M(1;11)$ appartient-il à la courbe de $f(x)=2x+5$ ?",
    "options": [
      "Oui",
      "Non",
      "Seulement si $x=0$",
      "On ne peut pas savoir"
    ],
    "answer": 1,
    "explanation": "On calcule $f(1)$. Si le résultat est l’ordonnée $11$, le point appartient à la courbe.",
    "method": "Tester l’appartenance d’un point : comparer $f(x_M)$ à $y_M$.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q232",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le point $M(4;-2)$ appartient-il à la courbe de $f(x)=3x-2$ ?",
    "options": [
      "Seulement si $x=0$",
      "Oui",
      "On ne peut pas savoir",
      "Non"
    ],
    "answer": 3,
    "explanation": "On calcule $f(4)$. Si le résultat est l’ordonnée $-2$, le point appartient à la courbe.",
    "method": "Tester l’appartenance d’un point : comparer $f(x_M)$ à $y_M$.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q233",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le point $M(-5;-8)$ appartient-il à la courbe de $f(x)=-1x+3$ ?",
    "options": [
      "Seulement si $x=0$",
      "On ne peut pas savoir",
      "Oui",
      "Non"
    ],
    "answer": 3,
    "explanation": "On calcule $f(-5)$. Si le résultat est l’ordonnée $-8$, le point appartient à la courbe.",
    "method": "Tester l’appartenance d’un point : comparer $f(x_M)$ à $y_M$.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q234",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le point $M(2;2)$ appartient-il à la courbe de $f(x)=4x+0$ ?",
    "options": [
      "Seulement si $x=0$",
      "Non",
      "On ne peut pas savoir",
      "Oui"
    ],
    "answer": 1,
    "explanation": "On calcule $f(2)$. Si le résultat est l’ordonnée $2$, le point appartient à la courbe.",
    "method": "Tester l’appartenance d’un point : comparer $f(x_M)$ à $y_M$.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q235",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Le point $M(2;7)$ appartient-il à la courbe de $f(x)=\\dfrac{1}{2}x+6$ ?",
    "options": [
      "Seulement si $x=0$",
      "Oui",
      "Non",
      "On ne peut pas savoir"
    ],
    "answer": 1,
    "explanation": "On calcule $f(2)$. Si le résultat est l’ordonnée $7$, le point appartient à la courbe.",
    "method": "Tester l’appartenance d’un point : comparer $f(x_M)$ à $y_M$.",
    "diagram": null,
    "tags": [
      "appartenance"
    ],
    "bac": true
  },
  {
    "id": "Q236",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=-1x+3$, l’ordonnée à l’origine est :",
    "options": [
      "$-1$",
      "$3$",
      "$-3$",
      "$0$"
    ],
    "answer": 1,
    "explanation": "Dans l’écriture $y=ax+b$, l’ordonnée à l’origine est $b$.",
    "method": "Ne pas confondre coefficient directeur $a$ et ordonnée à l’origine $b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q237",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=-1x+3$, le coefficient directeur est :",
    "options": [
      "$3$",
      "$-1$",
      "$0$",
      "$1$"
    ],
    "answer": 1,
    "explanation": "Dans l’écriture $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Le coefficient directeur indique la pente de la droite.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q238",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=2x-4$, l’ordonnée à l’origine est :",
    "options": [
      "$2$",
      "$0$",
      "$-4$",
      "$4$"
    ],
    "answer": 2,
    "explanation": "Dans l’écriture $y=ax+b$, l’ordonnée à l’origine est $b$.",
    "method": "Ne pas confondre coefficient directeur $a$ et ordonnée à l’origine $b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q239",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=2x-4$, le coefficient directeur est :",
    "options": [
      "$2$",
      "$-4$",
      "$0$",
      "$-2$"
    ],
    "answer": 0,
    "explanation": "Dans l’écriture $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Le coefficient directeur indique la pente de la droite.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q240",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=\\dfrac{3}{2}x+1$, l’ordonnée à l’origine est :",
    "options": [
      "$\\dfrac{3}{2}$",
      "$0$",
      "$-1$",
      "$1$"
    ],
    "answer": 3,
    "explanation": "Dans l’écriture $y=ax+b$, l’ordonnée à l’origine est $b$.",
    "method": "Ne pas confondre coefficient directeur $a$ et ordonnée à l’origine $b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q241",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=\\dfrac{3}{2}x+1$, le coefficient directeur est :",
    "options": [
      "$\\dfrac{3}{2}$",
      "$-\\dfrac{3}{2}$",
      "$1$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "Dans l’écriture $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Le coefficient directeur indique la pente de la droite.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q242",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=-\\dfrac{2}{3}x+2$, l’ordonnée à l’origine est :",
    "options": [
      "$2$",
      "$-\\dfrac{2}{3}$",
      "$0$",
      "$-2$"
    ],
    "answer": 0,
    "explanation": "Dans l’écriture $y=ax+b$, l’ordonnée à l’origine est $b$.",
    "method": "Ne pas confondre coefficient directeur $a$ et ordonnée à l’origine $b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q243",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=-\\dfrac{2}{3}x+2$, le coefficient directeur est :",
    "options": [
      "$0$",
      "$\\dfrac{2}{3}$",
      "$2$",
      "$-\\dfrac{2}{3}$"
    ],
    "answer": 3,
    "explanation": "Dans l’écriture $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Le coefficient directeur indique la pente de la droite.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q244",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=0x-5$, l’ordonnée à l’origine est :",
    "options": [
      "$-5$",
      "$5$",
      "$1$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "Dans l’écriture $y=ax+b$, l’ordonnée à l’origine est $b$.",
    "method": "Ne pas confondre coefficient directeur $a$ et ordonnée à l’origine $b$.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q245",
    "domain": "Fonctions et représentations",
    "difficulty": 1,
    "type": "qcm",
    "question": "Pour la droite d’équation $y=0x-5$, le coefficient directeur est :",
    "options": [
      "$1$",
      "$0$",
      "$-1$",
      "$-5$"
    ],
    "answer": 1,
    "explanation": "Dans l’écriture $y=ax+b$, le coefficient directeur est $a$.",
    "method": "Le coefficient directeur indique la pente de la droite.",
    "diagram": null,
    "tags": [
      "droite"
    ],
    "bac": true
  },
  {
    "id": "Q246",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $30$ valeurs, une fréquence de $0,2$ correspond à un effectif de :",
    "options": [
      "$24$",
      "$6$",
      "$20,0$",
      "$150$"
    ],
    "answer": 1,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,2\\times30=6$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q247",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $45$ valeurs, une fréquence de $0,4$ correspond à un effectif de :",
    "options": [
      "$18$",
      "$40,0$",
      "$27$",
      "$112$"
    ],
    "answer": 0,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,4\\times45=18$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q248",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $80$ valeurs, une fréquence de $0,125$ correspond à un effectif de :",
    "options": [
      "$10$",
      "$12,5$",
      "$640$",
      "$70$"
    ],
    "answer": 0,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,125\\times80=10$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q249",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $25$ valeurs, une fréquence de $0,6$ correspond à un effectif de :",
    "options": [
      "$15$",
      "$60,0$",
      "$42$",
      "$10$"
    ],
    "answer": 0,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,6\\times25=15$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q250",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $120$ valeurs, une fréquence de $0,05$ correspond à un effectif de :",
    "options": [
      "$6$",
      "$5,0$",
      "$114$",
      "$2400$"
    ],
    "answer": 0,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,05\\times120=6$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q251",
    "domain": "Statistiques",
    "difficulty": 1,
    "type": "qcm",
    "question": "Dans une série de $16$ valeurs, une fréquence de $0,75$ correspond à un effectif de :",
    "options": [
      "$75,0$",
      "$4$",
      "$21$",
      "$12$"
    ],
    "answer": 3,
    "explanation": "Effectif = fréquence $\\times$ effectif total = $0,75\\times16=12$.",
    "method": "Une fréquence est une proportion de l’effectif total.",
    "diagram": null,
    "tags": [
      "fréquence"
    ],
    "bac": true
  },
  {
    "id": "Q252",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la série ordonnée : $2, 4, 5, 7, 9, 10, 13, 15$. Choisir l’affirmation correcte.",
    "options": [
      "$Q_1=5$",
      "$Q_1=7$",
      "$Q_1=2$",
      "$Q_1=4$"
    ],
    "answer": 3,
    "explanation": "On utilise les positions de la médiane ou des quartiles dans la série ordonnée.",
    "method": "Les indicateurs de position se lisent après avoir rangé la série.",
    "diagram": null,
    "tags": [
      "quartiles",
      "médiane"
    ],
    "bac": true
  },
  {
    "id": "Q253",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la série ordonnée : $1, 3, 6, 8, 11, 14, 16, 18$. Choisir l’affirmation correcte.",
    "options": [
      "$Q_3=16$",
      "$Q_3=14$",
      "$Q_3=11$",
      "$Q_3=18$"
    ],
    "answer": 0,
    "explanation": "On utilise les positions de la médiane ou des quartiles dans la série ordonnée.",
    "method": "Les indicateurs de position se lisent après avoir rangé la série.",
    "diagram": null,
    "tags": [
      "quartiles",
      "médiane"
    ],
    "bac": true
  },
  {
    "id": "Q254",
    "domain": "Statistiques",
    "difficulty": 2,
    "type": "qcm",
    "question": "On considère la série ordonnée : $5, 6, 6, 9, 10, 12, 12, 13, 14, 15$. Choisir l’affirmation correcte.",
    "options": [
      "La médiane vaut $12$",
      "La médiane vaut $9$",
      "La médiane vaut $10$",
      "La médiane vaut $11$"
    ],
    "answer": 3,
    "explanation": "On utilise les positions de la médiane ou des quartiles dans la série ordonnée.",
    "method": "Les indicateurs de position se lisent après avoir rangé la série.",
    "diagram": null,
    "tags": [
      "quartiles",
      "médiane"
    ],
    "bac": true
  },
  {
    "id": "Q255",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Choisir l’affirmation correcte à partir du tableau d’effectifs.",
    "options": [
      "$P(A\\cap B)=\\dfrac{10}{30}$",
      "$P(A)=\\dfrac{20}{30}=\\dfrac23$",
      "$P(B)=\\dfrac{12}{30}$",
      "$P(A)=\\dfrac{8}{30}$"
    ],
    "answer": 1,
    "explanation": "On lit la marge de la ligne $A$ : elle contient $20$ individus sur $30$. Donc $P(A)=\\dfrac{20}{30}=\\dfrac23$.",
    "method": "Dans un tableau croisé, la case intérieure donne l’intersection ; les marges donnent les événements simples.",
    "diagram": {
      "type": "table",
      "headers": [
        "",
        "$B$",
        "$\\overline B$",
        "Total"
      ],
      "rows": [
        [
          "$A$",
          "$12$",
          "$8$",
          "$20$"
        ],
        [
          "$\\overline A$",
          "$10$",
          "$0$",
          "$10$"
        ],
        [
          "Total",
          "$22$",
          "$8$",
          "$30$"
        ]
      ]
    },
    "tags": [
      "tableau croisé"
    ],
    "bac": true
  },
  {
    "id": "Q256",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Choisir l’affirmation correcte à partir du tableau d’effectifs.",
    "options": [
      "$P(B)=\\dfrac{12}{30}$",
      "$P(A)=\\dfrac{20}{40}=\\dfrac12$",
      "$P(A)=\\dfrac{8}{30}$",
      "$P(A\\cap B)=\\dfrac{10}{30}$"
    ],
    "answer": 1,
    "explanation": "On lit la marge de la ligne $A$ : elle contient $20$ individus sur $40$. Donc $P(A)=\\dfrac{20}{40}=\\dfrac12$.",
    "method": "Dans un tableau croisé, la case intérieure donne l’intersection ; les marges donnent les événements simples.",
    "diagram": {
      "type": "table",
      "headers": [
        "",
        "$B$",
        "$\\overline B$",
        "Total"
      ],
      "rows": [
        [
          "$A$",
          "$15$",
          "$5$",
          "$20$"
        ],
        [
          "$\\overline A$",
          "$20$",
          "$0$",
          "$20$"
        ],
        [
          "Total",
          "$35$",
          "$5$",
          "$40$"
        ]
      ]
    },
    "tags": [
      "tableau croisé"
    ],
    "bac": true
  },
  {
    "id": "Q257",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Choisir l’affirmation correcte à partir du tableau d’effectifs.",
    "options": [
      "$P(A\\cap B)=\\dfrac{18}{50}=\\dfrac9{25}$",
      "$P(B)=\\dfrac{12}{30}$",
      "$P(A)=\\dfrac{8}{30}$",
      "$P(A\\cap B)=\\dfrac{10}{30}$"
    ],
    "answer": 0,
    "explanation": "On divise l’effectif favorable par l’effectif total. Pour une intersection, on lit la case commune aux deux événements.",
    "method": "Dans un tableau croisé, la case intérieure donne l’intersection ; les marges donnent les événements simples.",
    "diagram": {
      "type": "table",
      "headers": [
        "",
        "$B$",
        "$\\overline B$",
        "Total"
      ],
      "rows": [
        [
          "$A$",
          "$18$",
          "$7$",
          "$25$"
        ],
        [
          "$\\overline A$",
          "$25$",
          "$0$",
          "$25$"
        ],
        [
          "Total",
          "$43$",
          "$7$",
          "$50$"
        ]
      ]
    },
    "tags": [
      "tableau croisé"
    ],
    "bac": true
  },
  {
    "id": "Q258",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dans la loi de probabilité ci-dessous, la valeur de $x$ est :",
    "options": [
      "$\\dfrac{1}{4}$",
      "$0$",
      "$\\dfrac{3}{4}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "La somme des probabilités vaut $1$. Donc $x=1-(\\dfrac{1}{4}+\\dfrac{1}{3}+\\dfrac{1}{6})=\\dfrac{1}{4}$.",
    "method": "Une loi de probabilité doit toujours avoir une somme égale à $1$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Issue",
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "rows": [
        [
          "Probabilité",
          "$\\dfrac{1}{4}$",
          "$\\dfrac{1}{3}$",
          "$\\dfrac{1}{6}$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "loi de probabilité"
    ],
    "bac": true
  },
  {
    "id": "Q259",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dans la loi de probabilité ci-dessous, la valeur de $x$ est :",
    "options": [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{4}{5}$",
      "$0$",
      "$\\dfrac{1}{5}$"
    ],
    "answer": 3,
    "explanation": "La somme des probabilités vaut $1$. Donc $x=1-(\\dfrac{1}{2}+\\dfrac{1}{5}+\\dfrac{1}{10})=\\dfrac{1}{5}$.",
    "method": "Une loi de probabilité doit toujours avoir une somme égale à $1$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Issue",
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "rows": [
        [
          "Probabilité",
          "$\\dfrac{1}{2}$",
          "$\\dfrac{1}{5}$",
          "$\\dfrac{1}{10}$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "loi de probabilité"
    ],
    "bac": true
  },
  {
    "id": "Q260",
    "domain": "Probabilités",
    "difficulty": 2,
    "type": "qcm",
    "question": "Dans la loi de probabilité ci-dessous, la valeur de $x$ est :",
    "options": [
      "$\\dfrac{1}{4}$",
      "$\\dfrac{3}{10}$",
      "$0$",
      "$\\dfrac{3}{4}$"
    ],
    "answer": 0,
    "explanation": "La somme des probabilités vaut $1$. Donc $x=1-(\\dfrac{3}{10}+\\dfrac{1}{4}+\\dfrac{1}{5})=\\dfrac{1}{4}$.",
    "method": "Une loi de probabilité doit toujours avoir une somme égale à $1$.",
    "diagram": {
      "type": "table",
      "headers": [
        "Issue",
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "rows": [
        [
          "Probabilité",
          "$\\dfrac{3}{10}$",
          "$\\dfrac{1}{4}$",
          "$\\dfrac{1}{5}$",
          "$x$"
        ]
      ]
    },
    "tags": [
      "loi de probabilité"
    ],
    "bac": true
  },
  {
    "id": "Q261",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une suite géométrique vérifie $u_0=3$ et a pour raison $2$. Son terme général est :",
    "options": [
      "$u_n=3\\times2^n$",
      "$u_n=6^n$",
      "$u_n=3+2n$",
      "$u_n=2\\times 3^n$"
    ],
    "answer": 0,
    "explanation": "Pour une suite géométrique de premier terme $u_0$, on a $u_n=u_0q^n$.",
    "method": "Suite géométrique : on multiplie toujours par la même raison.",
    "diagram": null,
    "tags": [
      "suite géométrique"
    ],
    "bac": false
  },
  {
    "id": "Q262",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une suite géométrique vérifie $u_0=5$ et a pour raison $\\dfrac{1}{2}$. Son terme général est :",
    "options": [
      "$u_n=5+\\dfrac{1}{2}n$",
      "$u_n=\\dfrac{1}{2}\\times 5^n$",
      "$u_n=5\\times\\left(\\dfrac12\\right)^n$",
      "$u_n=\\dfrac{5}{2}^n$"
    ],
    "answer": 2,
    "explanation": "Pour une suite géométrique de premier terme $u_0$, on a $u_n=u_0q^n$.",
    "method": "Suite géométrique : on multiplie toujours par la même raison.",
    "diagram": null,
    "tags": [
      "suite géométrique"
    ],
    "bac": false
  },
  {
    "id": "Q263",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "Une suite géométrique vérifie $u_0=2$ et a pour raison $3$. Son terme général est :",
    "options": [
      "$u_n=3\\times 2^n$",
      "$u_n=2\\times3^n$",
      "$u_n=2+3n$",
      "$u_n=6^n$"
    ],
    "answer": 1,
    "explanation": "Pour une suite géométrique de premier terme $u_0$, on a $u_n=u_0q^n$.",
    "method": "Suite géométrique : on multiplie toujours par la même raison.",
    "diagram": null,
    "tags": [
      "suite géométrique"
    ],
    "bac": false
  },
  {
    "id": "Q264",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Simplifier : $e^0$.",
    "options": [
      "$e$",
      "$-1$",
      "$1$",
      "$0$"
    ],
    "answer": 2,
    "explanation": "On utilise les règles de calcul de l’exponentielle.",
    "method": "Les règles de l’exponentielle ressemblent aux règles des puissances.",
    "diagram": null,
    "tags": [
      "exponentielle"
    ],
    "bac": false
  },
  {
    "id": "Q265",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Simplifier : $e^1$.",
    "options": [
      "$e^2$",
      "$e$",
      "$0$",
      "$1$"
    ],
    "answer": 1,
    "explanation": "On utilise les règles de calcul de l’exponentielle.",
    "method": "Les règles de l’exponentielle ressemblent aux règles des puissances.",
    "diagram": null,
    "tags": [
      "exponentielle"
    ],
    "bac": false
  },
  {
    "id": "Q266",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Simplifier : $e^a\\times e^b$.",
    "options": [
      "$e^{ab}$",
      "$e^{a-b}$",
      "$e^{a+b}$",
      "$e^a+e^b$"
    ],
    "answer": 2,
    "explanation": "On utilise les règles de calcul de l’exponentielle.",
    "method": "Les règles de l’exponentielle ressemblent aux règles des puissances.",
    "diagram": null,
    "tags": [
      "exponentielle"
    ],
    "bac": false
  },
  {
    "id": "Q267",
    "domain": "Défis spécialité première",
    "difficulty": 1,
    "type": "qcm",
    "question": "Simplifier : $\\dfrac{e^a}{e^b}$.",
    "options": [
      "$e^{ab}$",
      "$e^{a-b}$",
      "$e^a-e^b$",
      "$e^{a+b}$"
    ],
    "answer": 1,
    "explanation": "On utilise les règles de calcul de l’exponentielle.",
    "method": "Les règles de l’exponentielle ressemblent aux règles des puissances.",
    "diagram": null,
    "tags": [
      "exponentielle"
    ],
    "bac": false
  },
  {
    "id": "Q268",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "On sait que $f'(x)\\gt 0$ sur $[1;4]$. On peut affirmer que :",
    "options": [
      "on ne peut rien dire",
      "$f$ est croissante sur $[1;4]$",
      "$f$ est décroissante sur $[1;4]$",
      "$f$ est constante"
    ],
    "answer": 1,
    "explanation": "Le signe de la dérivée donne le sens de variation de la fonction.",
    "method": "Dérivée positive : fonction croissante ; dérivée négative : fonction décroissante.",
    "diagram": null,
    "tags": [
      "dérivée",
      "variations"
    ],
    "bac": true
  },
  {
    "id": "Q269",
    "domain": "Défis spécialité première",
    "difficulty": 2,
    "type": "qcm",
    "question": "On sait que $f'(x)\\lt 0$ sur $[-2;3]$. On peut affirmer que :",
    "options": [
      "$f$ est positive",
      "$f$ est décroissante sur $[-2;3]$",
      "$f$ est croissante sur $[-2;3]$",
      "$f$ est nulle"
    ],
    "answer": 1,
    "explanation": "Le signe de la dérivée donne le sens de variation de la fonction.",
    "method": "Dérivée positive : fonction croissante ; dérivée négative : fonction décroissante.",
    "diagram": null,
    "tags": [
      "dérivée",
      "variations"
    ],
    "bac": true
  }
];


const OFFICIAL_DOMAINS = [
  "Calcul numérique et algébrique",
  "Proportions, pourcentages et évolutions",
  "Fonctions et représentations",
  "Statistiques",
  "Probabilités"
];

const state = {
  session: [],
  index: 0,
  answers: {},
  checked: {},
  mode: "bac",
  immediate: true,
  shuffled: true,
  startedAt: null,
  timerId: null,
  totalSeconds: 0,
  selectedDomain: "Tous les thèmes",
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function typesetMath(root = document.body){
  if(typeof renderMathInElement !== "function") return;
  try {
    renderMathInElement(root, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      throwOnError: false,
      strict: false
    });
  } catch (error) {
    console.warn("Rendu mathématique indisponible", error);
  }
}

function escapeHTML(str){
  return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}

function shuffleArray(arr){
  const copy = [...arr];
  for(let i=copy.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function questionsByDomain(domain){
  if(domain === "Tous les thèmes") return QUESTION_BANK;
  if(domain === "Officiel épreuve anticipée") return QUESTION_BANK.filter(q => OFFICIAL_DOMAINS.includes(q.domain));
  return QUESTION_BANK.filter(q => q.domain === domain);
}

function makeSession({domain="Officiel épreuve anticipée", count=24, difficulty="mix", mode="training"} = {}){
  let pool = questionsByDomain(domain);
  if(difficulty !== "mix") pool = pool.filter(q => String(q.difficulty) === String(difficulty));
  if(mode === "bac") {
    const bacPool = QUESTION_BANK.filter(q => q.bac && OFFICIAL_DOMAINS.includes(q.domain));
    pool = bacPool.length >= 12 ? bacPool : QUESTION_BANK.filter(q => OFFICIAL_DOMAINS.includes(q.domain));
    count = 12;
    state.immediate = false;
  }
  if(mode === "errors") {
    const ids = JSON.parse(localStorage.getItem("autoPremiereErrors") || "[]");
    pool = QUESTION_BANK.filter(q => ids.includes(q.id));
    if(pool.length === 0){
      pool = QUESTION_BANK.filter(q => OFFICIAL_DOMAINS.includes(q.domain));
    }
  }
  const selected = shuffleArray(pool).slice(0, Math.min(count, pool.length));
  state.session = selected;
  state.index = 0;
  state.answers = {};
  state.checked = {};
  state.mode = mode;
  state.startedAt = new Date();
  state.selectedDomain = domain;
  state.totalSeconds = mode === "bac" ? 10 * 60 : 0;
  clearInterval(state.timerId);
  if(state.totalSeconds){
    state.timerId = setInterval(tickTimer, 1000);
  }
  renderQuiz();
  document.body.classList.add("quiz-started");
  $("#quizZone").scrollIntoView({behavior:"smooth", block:"start"});
}

function tickTimer(){
  state.totalSeconds -= 1;
  const el = $("#timer");
  if(el) el.textContent = formatTime(state.totalSeconds);
  if(state.totalSeconds <= 0){
    clearInterval(state.timerId);
    finishQuiz();
  }
}

function formatTime(seconds){
  const m = Math.floor(Math.max(seconds,0)/60);
  const s = Math.max(seconds,0)%60;
  return `${m}:${String(s).padStart(2,"0")}`;
}

function currentQuestion(){ return state.session[state.index]; }

function renderQuiz(){
  const q = currentQuestion();
  if(!q){
    $("#quizZone").innerHTML = `<section class="empty-state"><h2>Aucune question disponible</h2><p>Change le thème ou relance un autre mode.</p></section>`;
    return;
  }
  const progress = Math.round(((state.index) / state.session.length) * 100);
  const answeredCount = Object.keys(state.answers).length;
  const isChecked = !!state.checked[q.id];
  const selected = state.answers[q.id];
  const scoreNow = state.session.reduce((acc,item)=> acc + (state.checked[item.id] && state.answers[item.id] === item.answer ? 1 : 0), 0);
  const timerHtml = state.totalSeconds ? `<span class="stat-chip timer-chip">⏱ ${formatTime(state.totalSeconds)}</span>` : "";
  $("#quizZone").innerHTML = `
    <section class="quiz-shell" aria-live="polite">
      <div class="quiz-topline">
        <div>
          <p class="eyebrow">Question ${state.index + 1} / ${state.session.length}</p>
          <h2>${q.domain}</h2>
        </div>
        <div class="quiz-stats">
          ${timerHtml}
          <span class="stat-chip">Score provisoire : ${scoreNow}/${state.session.length}</span>
          <span class="stat-chip">Répondues : ${answeredCount}/${state.session.length}</span>
        </div>
      </div>

      <div class="progress" aria-hidden="true"><span style="width:${progress}%"></span></div>

      <article class="question-card difficulty-${q.difficulty}">
        ${state.mode === "bac" ? `<div class="exam-banner"><strong>PREMIÈRE PARTIE : AUTOMATISMES — QCM</strong><span>Une seule réponse possible · calculatrice non autorisée · correction à la fin</span></div>` : ""}
        <div class="question-meta">
          <span class="pill">Niveau ${q.difficulty}</span>
          <span class="pill">${q.type === "vf" ? "Vrai / Faux" : "QCM"}</span>
          ${(q.tags||[]).slice(0,3).map(t=>`<span class="pill muted-pill">${escapeHTML(t)}</span>`).join("")}
        </div>
        <h3>${q.question}</h3>
        <div id="diagramHost">${renderDiagram(q.diagram)}</div>
        <div class="options" role="radiogroup" aria-label="Réponses proposées">
          ${q.options.map((opt,i)=> optionTemplate(q,opt,i,selected,isChecked)).join("")}
        </div>
        <div id="feedbackHost">${isChecked ? correctionTemplate(q) : ""}</div>
      </article>

      <div class="quiz-actions">
        <button class="btn-soft" id="prevBtn" ${state.index===0 ? "disabled" : ""}>← Précédente</button>
        <button class="btn-main" id="checkBtn" ${selected === undefined || isChecked ? "disabled" : ""}>Valider</button>
        <button class="btn-soft" id="nextBtn">${state.index === state.session.length-1 ? "Terminer" : "Suivante →"}</button>
      </div>
    </section>
  `;

  typesetMath($("#quizZone"));

  $$(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if(state.checked[q.id]) return;
      state.answers[q.id] = Number(btn.dataset.index);
      if(state.immediate) {
        state.checked[q.id] = true;
      }
      renderQuiz();
    });
  });
  $("#checkBtn")?.addEventListener("click", () => {
    state.checked[q.id] = true;
    rememberErrorIfNeeded(q);
    renderQuiz();
  });
  $("#prevBtn")?.addEventListener("click", () => {
    state.index = Math.max(0, state.index - 1);
    renderQuiz();
  });
  $("#nextBtn")?.addEventListener("click", () => {
    if(state.answers[q.id] !== undefined && !state.checked[q.id]) {
      state.checked[q.id] = true;
      rememberErrorIfNeeded(q);
    }
    if(state.index === state.session.length - 1) finishQuiz();
    else { state.index += 1; renderQuiz(); }
  });
}

function optionTemplate(q,opt,i,selected,isChecked){
  let cls = "option-btn";
  if(selected === i) cls += " is-selected";
  if(isChecked && i === q.answer) cls += " is-correct";
  if(isChecked && selected === i && i !== q.answer) cls += " is-wrong";
  const letter = String.fromCharCode(65+i);
  return `<button class="${cls}" data-index="${i}" type="button">
    <span class="letter">${letter}</span>
    <span>${opt}</span>
  </button>`;
}

function correctionTemplate(q){
  const selected = state.answers[q.id];
  const ok = selected === q.answer;
  rememberErrorIfNeeded(q);
  return `<div class="correction ${ok ? "ok" : "ko"}">
    <h4>${ok ? "Bonne réponse" : "Correction"}</h4>
    <p><strong>Réponse attendue :</strong> ${q.options[q.answer]}</p>
    <p>${q.explanation}</p>
    ${q.method ? `<p class="method"><strong>Méthode à retenir :</strong> ${q.method}</p>` : ""}
  </div>`;
}

function rememberErrorIfNeeded(q){
  if(state.answers[q.id] === undefined) return;
  let ids = JSON.parse(localStorage.getItem("autoPremiereErrors") || "[]");
  if(state.answers[q.id] !== q.answer){
    if(!ids.includes(q.id)) ids.push(q.id);
  } else {
    ids = ids.filter(id => id !== q.id);
  }
  localStorage.setItem("autoPremiereErrors", JSON.stringify(ids.slice(-80)));
}

function finishQuiz(){
  clearInterval(state.timerId);
  state.session.forEach(q => {
    if(state.answers[q.id] !== undefined) state.checked[q.id] = true;
    rememberErrorIfNeeded(q);
  });
  const score = state.session.reduce((acc,q)=> acc + (state.answers[q.id] === q.answer ? 1 : 0), 0);
  const percent = Math.round(score/state.session.length*100);
  const elapsed = state.startedAt ? Math.round((new Date()-state.startedAt)/1000) : 0;
  saveHistory(score, percent, elapsed);
  const byDomain = summarizeByDomain();
  $("#quizZone").innerHTML = `
    <section class="result-panel">
      <p class="eyebrow">Bilan de la séance</p>
      <h2>${score}/${state.session.length} — ${percent}%</h2>
      <p>${messageFor(percent)}</p>
      <div class="result-grid">
        ${Object.entries(byDomain).map(([domain, data]) => `
          <div class="mini-result">
            <strong>${domain}</strong>
            <span>${data.ok}/${data.total}</span>
            <div class="mini-bar"><i style="width:${Math.round(data.ok/data.total*100)}%"></i></div>
          </div>`).join("")}
      </div>
      <div class="quiz-actions wrap">
        <button class="btn-main" id="reviewBtn">Voir la correction détaillée</button>
        <button class="btn-soft" id="errorsBtn">Refaire mes erreurs</button>
        <button class="btn-soft" id="restartBtn">Retour au menu</button>
        <button class="btn-soft" id="exportBtn">Exporter le bilan</button>
      </div>
      <div id="reviewHost"></div>
    </section>`;
  typesetMath($("#quizZone"));
  $("#reviewBtn").addEventListener("click", renderReview);
  $("#errorsBtn").addEventListener("click", () => makeSession({mode:"errors", count:24, domain:"Tous les thèmes"}));
  $("#restartBtn").addEventListener("click", () => {
    document.body.classList.remove("quiz-started");
    $("#menu").scrollIntoView({behavior:"smooth"});
  });
  $("#exportBtn").addEventListener("click", exportReport);
}

function messageFor(percent){
  if(percent >= 90) return "Excellent : les automatismes sont très solides. Tu peux augmenter la difficulté ou passer en mode BAC.";
  if(percent >= 70) return "Bon niveau : reprends surtout les questions ratées pour stabiliser les réflexes.";
  if(percent >= 50) return "Base correcte, mais certains réflexes doivent devenir plus rapides et plus sûrs.";
  return "Il faut reprendre les méthodes une par une. Utilise les corrections puis refais une séance ciblée.";
}

function summarizeByDomain(){
  const out = {};
  state.session.forEach(q => {
    out[q.domain] ||= {ok:0,total:0};
    out[q.domain].total++;
    if(state.answers[q.id] === q.answer) out[q.domain].ok++;
  });
  return out;
}

function saveHistory(score, percent, elapsed){
  const history = JSON.parse(localStorage.getItem("autoPremiereHistory") || "[]");
  history.unshift({date:new Date().toLocaleString("fr-FR"), score, total:state.session.length, percent, elapsed, mode:state.mode});
  localStorage.setItem("autoPremiereHistory", JSON.stringify(history.slice(0,12)));
}

function renderReview(){
  const host = $("#reviewHost");
  host.innerHTML = `<div class="review-list">
    ${state.session.map((q,idx) => {
      const selected = state.answers[q.id];
      const ok = selected === q.answer;
      return `<article class="review-card ${ok ? "ok" : "ko"}">
        <div class="review-head"><strong>${idx+1}. ${q.domain}</strong><span>${ok ? "✓" : "✕"}</span></div>
        <p>${q.question}</p>
        ${renderDiagram(q.diagram)}
        <p><strong>Ta réponse :</strong> ${selected === undefined ? "Non répondu" : q.options[selected]}</p>
        <p><strong>Réponse :</strong> ${q.options[q.answer]}</p>
        <p>${q.explanation}</p>
        ${q.method ? `<p class="method"><strong>Méthode :</strong> ${q.method}</p>` : ""}
      </article>`;
    }).join("")}
  </div>`;
  typesetMath(host);
}

function exportReport(){
  const score = state.session.reduce((acc,q)=> acc + (state.answers[q.id] === q.answer ? 1 : 0), 0);
  const lines = [
    "Quiz Automatismes — Première",
    `Date : ${new Date().toLocaleString("fr-FR")}`,
    `Score : ${score}/${state.session.length}`,
    "",
    "Détail :"
  ];
  state.session.forEach((q,idx)=>{
    const selected = state.answers[q.id];
    lines.push(`${idx+1}. [${q.domain}] ${stripHTML(q.question)}`);
    lines.push(`   Ta réponse : ${selected === undefined ? "Non répondu" : stripHTML(q.options[selected])}`);
    lines.push(`   Réponse attendue : ${stripHTML(q.options[q.answer])}`);
    lines.push(`   Explication : ${stripHTML(q.explanation)}`);
  });
  const blob = new Blob([lines.join("\n")], {type:"text/plain;charset=utf-8"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bilan-quiz-automatismes-premiere.txt";
  a.click();
  URL.revokeObjectURL(a.href);
}

function stripHTML(s){
  const div = document.createElement("div");
  div.innerHTML = s;
  return div.textContent || div.innerText || "";
}

function renderDiagram(diagram){
  if(!diagram) return "";
  if(diagram.type === "affine") return renderAffine(diagram);
  if(diagram.type === "parabola") return renderParabola(diagram);
  if(diagram.type === "bar") return renderBar(diagram);
  if(diagram.type === "boxplot") return renderBoxplot(diagram);
  if(diagram.type === "table") return renderTable(diagram);
  if(diagram.type === "tree") return renderTree(diagram);
  if(diagram.type === "curveSign") return renderCurveSign(diagram);
  return "";
}

function renderAffine(d){
  const W=420,H=300,p=32;
  const xMin=d.xMin ?? -5, xMax=d.xMax ?? 5, yMin=d.yMin ?? -5, yMax=d.yMax ?? 5;
  const sx=x=>p+(x-xMin)*(W-2*p)/(xMax-xMin);
  const sy=y=>H-p-(y-yMin)*(H-2*p)/(yMax-yMin);
  const x1=xMin, y1=d.m*x1+d.b, x2=xMax, y2=d.m*x2+d.b;
  const grid=[];
  for(let x=Math.ceil(xMin); x<=Math.floor(xMax); x++) grid.push(`<line x1="${sx(x)}" y1="${p}" x2="${sx(x)}" y2="${H-p}" class="grid"/><text x="${sx(x)}" y="${sy(0)+14}" class="axis-label">${x}</text>`);
  for(let y=Math.ceil(yMin); y<=Math.floor(yMax); y++) grid.push(`<line x1="${p}" y1="${sy(y)}" x2="${W-p}" y2="${sy(y)}" class="grid"/><text x="${sx(0)-18}" y="${sy(y)+4}" class="axis-label">${y}</text>`);
  let helper="";
  if(d.highlightX !== undefined){
    const hx=sx(d.highlightX), hy=sy(d.m*d.highlightX+d.b);
    helper = `<line x1="${hx}" y1="${sy(0)}" x2="${hx}" y2="${hy}" class="helper"/><circle cx="${hx}" cy="${hy}" r="5" class="point"/>`;
  }
  if(d.highlightY !== undefined){
    const y=d.highlightY; const x=(y-d.b)/d.m;
    helper += `<line x1="${sx(x)}" y1="${sy(y)}" x2="${sx(x)}" y2="${sy(0)}" class="helper"/><circle cx="${sx(x)}" cy="${sy(y)}" r="5" class="point"/>`;
  }
  return `<div class="diagram"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graphique de fonction affine">
    ${grid.join("")}
    <line x1="${p}" y1="${sy(0)}" x2="${W-p}" y2="${sy(0)}" class="axis"/>
    <line x1="${sx(0)}" y1="${p}" x2="${sx(0)}" y2="${H-p}" class="axis"/>
    <line x1="${sx(x1)}" y1="${sy(y1)}" x2="${sx(x2)}" y2="${sy(y2)}" class="curve"/>
    ${helper}
  </svg></div>`;
}

function renderParabola(d){
  const W=420,H=300,p=32;
  const xMin=d.xMin ?? -5, xMax=d.xMax ?? 5, yMin=d.yMin ?? -5, yMax=d.yMax ?? 5;
  const sx=x=>p+(x-xMin)*(W-2*p)/(xMax-xMin);
  const sy=y=>H-p-(y-yMin)*(H-2*p)/(yMax-yMin);
  const pts=[];
  for(let i=0;i<=120;i++){
    const x=xMin+(xMax-xMin)*i/120;
    const y=d.a*x*x+d.b*x+d.c;
    pts.push(`${sx(x)},${sy(y)}`);
  }
  const grid=[];
  for(let x=Math.ceil(xMin); x<=Math.floor(xMax); x++) grid.push(`<line x1="${sx(x)}" y1="${p}" x2="${sx(x)}" y2="${H-p}" class="grid"/><text x="${sx(x)}" y="${sy(0)+14}" class="axis-label">${x}</text>`);
  for(let y=Math.ceil(yMin); y<=Math.floor(yMax); y++) grid.push(`<line x1="${p}" y1="${sy(y)}" x2="${W-p}" y2="${sy(y)}" class="grid"/><text x="${sx(0)-18}" y="${sy(y)+4}" class="axis-label">${y}</text>`);
  return `<div class="diagram"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graphique de parabole">
    ${grid.join("")}
    <line x1="${p}" y1="${sy(0)}" x2="${W-p}" y2="${sy(0)}" class="axis"/>
    <line x1="${sx(0)}" y1="${p}" x2="${sx(0)}" y2="${H-p}" class="axis"/>
    ${d.shadeY !== undefined ? `<line x1="${p}" y1="${sy(d.shadeY)}" x2="${W-p}" y2="${sy(d.shadeY)}" class="helper"/><text x="${W-p-22}" y="${sy(d.shadeY)-6}" class="axis-label">${d.shadeY}</text>` : ""}
    <polyline points="${pts.join(" ")}" class="curve nofill"/>
  </svg></div>`;
}

function renderCurveSign(d){
  const W=460,H=260,p=34;
  const sx=x=>p+(x+4)*(W-2*p)/8;
  const sy=y=>H-p-(y+3)*(H-2*p)/6;
  const pts=[];
  for(let i=0;i<=160;i++){
    const x=-4+8*i/160;
    const y=0.09*(x+3)*(x-0.3)*(x-3)-0.2;
    pts.push(`${sx(x)},${sy(y)}`);
  }
  const points = d.points || [[-3,-1.7,"A"],[-2.1,1.25,"B"],[0.4,1.05,"R"],[3.1,-0.15,"S"]];
  return `<div class="diagram"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbe avec points repérés">
    <line x1="${p}" y1="${sy(0)}" x2="${W-p}" y2="${sy(0)}" class="axis"/>
    <line x1="${sx(0)}" y1="${p}" x2="${sx(0)}" y2="${H-p}" class="axis"/>
    <polyline points="${pts.join(" ")}" class="curve nofill"/>
    ${points.map(([x,y,label])=>`<circle cx="${sx(x)}" cy="${sy(y)}" r="5" class="point"/><text x="${sx(x)+8}" y="${sy(y)-8}" class="axis-label point-label">${label}</text>`).join("")}
  </svg></div>`;
}

function renderBar(d){
  const W=420,H=250,p=36;
  const max=Math.max(...d.values);
  const barW=(W-2*p)/d.values.length*0.55;
  return `<div class="diagram"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Diagramme en barres">
    <line x1="${p}" y1="${H-p}" x2="${W-p}" y2="${H-p}" class="axis"/>
    <line x1="${p}" y1="${p}" x2="${p}" y2="${H-p}" class="axis"/>
    ${d.values.map((v,i)=>{
      const x=p+(i+0.25)*(W-2*p)/d.values.length;
      const h=(H-2*p)*v/max;
      return `<rect x="${x}" y="${H-p-h}" width="${barW}" height="${h}" class="bar"/><text x="${x+barW/2}" y="${H-p+18}" class="axis-label mid">${d.labels[i]}</text><text x="${x+barW/2}" y="${H-p-h-8}" class="axis-label mid">${v}</text>`;
    }).join("")}
  </svg></div>`;
}

function renderBoxplot(d){
  const W=420,H=160,p=40;
  const minScale=Math.floor(d.min/2)*2, maxScale=Math.ceil(d.max/2)*2;
  const sx=x=>p+(x-minScale)*(W-2*p)/(maxScale-minScale);
  const y=80;
  const ticks=[];
  for(let x=minScale; x<=maxScale; x+=2){ ticks.push(`<line x1="${sx(x)}" y1="115" x2="${sx(x)}" y2="122" class="axis"/><text x="${sx(x)}" y="140" class="axis-label mid">${x}</text>`); }
  return `<div class="diagram"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Boîte à moustaches">
    <line x1="${sx(d.min)}" y1="${y}" x2="${sx(d.max)}" y2="${y}" class="axis"/>
    <rect x="${sx(d.q1)}" y="${y-24}" width="${sx(d.q3)-sx(d.q1)}" height="48" class="box"/>
    <line x1="${sx(d.median)}" y1="${y-24}" x2="${sx(d.median)}" y2="${y+24}" class="helper"/>
    <line x1="${sx(d.min)}" y1="${y-16}" x2="${sx(d.min)}" y2="${y+16}" class="axis"/>
    <line x1="${sx(d.max)}" y1="${y-16}" x2="${sx(d.max)}" y2="${y+16}" class="axis"/>
    ${ticks.join("")}
  </svg></div>`;
}

function renderTable(d){
  return `<div class="table-diagram"><table><thead><tr>${d.headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${d.rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderTree(d){
  return `<div class="tree-diagram" aria-label="Arbre pondéré">
    <div class="tree-root">Ω</div>
    <div class="tree-level">
      ${d.first.map(([name,p])=>`<div class="tree-node"><span>${name}</span><small>${p}</small><div class="tree-children">${d.second[name].map(([n,pp])=>`<em>${n}<small>${pp}</small></em>`).join("")}</div></div>`).join("")}
    </div>
  </div>`;
}

function initMenu(){
  const counts = QUESTION_BANK.reduce((acc,q)=>{acc[q.domain]=(acc[q.domain]||0)+1; return acc;},{});
  const domainHost = $("#domainCards");
  const domainInfo = [
    ["Officiel épreuve anticipée", QUESTION_BANK.filter(q=>OFFICIAL_DOMAINS.includes(q.domain)).length, "Séance mélangée sur les thèmes évaluables."],
    ...Object.entries(counts).map(([name,count]) => [name,count, descriptionForDomain(name)])
  ];
  domainHost.innerHTML = domainInfo.map(([name,count,desc]) => `
    <button class="domain-card" type="button" data-domain="${escapeHTML(name)}">
      <span>${name}</span>
      <strong>${count} questions</strong>
      <small>${desc}</small>
    </button>`).join("");
  $$(".domain-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".domain-card").forEach(c=>c.classList.remove("is-selected"));
      card.classList.add("is-selected");
      $("#domainSelect").value = card.dataset.domain;
    });
  });
  $(".domain-card")?.classList.add("is-selected");

  $("#startBac").addEventListener("click", () => makeSession({mode:"bac"}));
  $("#startTraining").addEventListener("click", () => {
    const domain = $("#domainSelect").value;
    const count = Number($("#questionCount").value);
    const difficulty = $("#difficultySelect").value;
    state.immediate = $("#immediateToggle").checked;
    makeSession({mode:"training", domain, count, difficulty});
  });
  $("#startAll").addEventListener("click", () => makeSession({mode:"training", domain:"Tous les thèmes", count:60, difficulty:"mix"}));
  $("#startErrors").addEventListener("click", () => makeSession({mode:"errors", count:24, domain:"Tous les thèmes"}));
  $("#resetProgress").addEventListener("click", () => {
    localStorage.removeItem("autoPremiereErrors");
    localStorage.removeItem("autoPremiereHistory");
    renderHistory();
  });
  populateSelect(domainInfo.map(d=>d[0]));
  renderHistory();
}

function descriptionForDomain(name){
  const map = {
    "Calcul numérique et algébrique":"Fractions, puissances, équations, signes, unités.",
    "Proportions, pourcentages et évolutions":"Coefficients, taux, évolutions successives et réciproques.",
    "Fonctions et représentations":"Images, antécédents, droites, lectures graphiques.",
    "Statistiques":"Moyenne, médiane, quartiles, graphiques et dispersion.",
    "Probabilités":"Contraire, équiprobabilité, arbres, tableaux, conditionnelles.",
    "Défis spécialité première":"Suites, dérivées, second degré et exponentielle."
  };
  return map[name] || "Entraînement ciblé.";
}

function populateSelect(domains){
  const select = $("#domainSelect");
  select.innerHTML = domains.map(d=>`<option>${d}</option>`).join("");
}

function renderHistory(){
  const host = $("#historyHost");
  const history = JSON.parse(localStorage.getItem("autoPremiereHistory") || "[]");
  const errors = JSON.parse(localStorage.getItem("autoPremiereErrors") || "[]");
  if(history.length === 0){
    host.innerHTML = `<p class="muted-text">Aucun historique pour le moment. Questions à retravailler : ${errors.length}.</p>`;
    return;
  }
  host.innerHTML = `<div class="history-list">${history.slice(0,5).map(h=>`<div><strong>${h.percent}%</strong><span>${h.score}/${h.total} — ${h.date}</span></div>`).join("")}</div><p class="muted-text">Questions à retravailler : ${errors.length}</p>`;
}

function bindKeyboard(){
  document.addEventListener("keydown", (e)=>{
    const q = currentQuestion();
    if(!q) return;
    const key = e.key.toLowerCase();
    const map = {a:0,b:1,c:2,d:3};
    if(map[key] !== undefined && map[key] < q.options.length && !state.checked[q.id]){
      state.answers[q.id] = map[key];
      if(state.immediate) state.checked[q.id] = true;
      renderQuiz();
    }
    if(key === "enter") {
      if(state.answers[q.id] !== undefined && !state.checked[q.id]) {
        state.checked[q.id] = true;
        renderQuiz();
      } else if(state.index < state.session.length-1){
        state.index++;
        renderQuiz();
      } else {
        finishQuiz();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  bindKeyboard();
});
