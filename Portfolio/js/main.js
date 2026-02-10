/* =========================
   BOOT
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  setupTimeline();               // accordéon timeline
  setupIntersectionReveal();     // reveal .reveal
  setupInfiniteCarousel();       // carrousel infini + pause
  setupSkillFilters();           // filtres (sélection unique)

  // Nouveautés
  setupTimelineReveal();         // apparition latérale (gauche/droite)
  setupProjectCardsHover();      // swap image + tagline overlay
  setupProjectModal();           // modal + tabs + iframe + galerie
  setupSectionToggles();         // flèche ↕ + repli sections projets
  setupBackToTop();              // bouton retour en haut
});



(function(){
  const STORAGE_KEY = "lang";
  const getLang = () => localStorage.getItem(STORAGE_KEY) || "fr";
  const setLang = (v) => localStorage.setItem(STORAGE_KEY, v);
  const other = (v) => (v === "fr" ? "ang" : "fr");

  const btn   = document.getElementById("langPush");
  const row1  = document.getElementById("lpRow1");
  const row2  = document.getElementById("lpRow2");

  function render(){
    const lang = getLang();
    if (!row1 || !row2 || !btn) return;

    if (lang === "fr"){
      row2.textContent = "ANG";
      btn.setAttribute("aria-label", "Passer le site en anglais");
      document.documentElement.setAttribute("lang", "fr");
    }else{
      row2.textContent = "FR";
      btn.setAttribute("aria-label", "Switch the site to French");
      document.documentElement.setAttribute("lang", "en");
    }
  }

  function toggle(){
    const next = other(getLang());
    setLang(next);
    render();
  }

  document.addEventListener("DOMContentLoaded", render);
  btn?.addEventListener("click", toggle);
  btn?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
})();


/* =========================
   Reveal on scroll (sections & cartes)
   ========================= */
function setupIntersectionReveal(){
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries)=> {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold:.12 });
  els.forEach(el => io.observe(el));
}

/* =========================
   Timeline: accordéon
   ========================= */
function setupTimeline(){
  const headers = document.querySelectorAll('.tl-header');

  headers.forEach(btn => {
    const id = btn.getAttribute('data-target');
    const panel = document.getElementById(id);
    if (!panel) return;

    // Assure un wrapper interne pour la technique grid (sinon overflow ne marche pas bien)
    if (!panel.querySelector(':scope > .tl-panel-inner')) {
      const inner = document.createElement('div');
      inner.className = 'tl-panel-inner';

      // déplacer tous les enfants dans inner
      while (panel.firstChild) inner.appendChild(panel.firstChild);
      panel.appendChild(inner);
    }

    // État initial
    panel.dataset.open = "false";
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        // fermer
        btn.setAttribute('aria-expanded', 'false');
        panel.dataset.open = "false";
      } else {
        // ouvrir
        btn.setAttribute('aria-expanded', 'true');
        panel.dataset.open = "true";
      }
    });
  });
}

/* =========================
   Timeline: reveal latéral
   ========================= */
function setupTimelineReveal(){
  const items = document.querySelectorAll('.tl-item');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        const idx = Array.from(items).indexOf(e.target);
        const dirAttr = e.target.getAttribute('data-direction');
        const dir = dirAttr || (idx % 2 === 0 ? 'right' : 'left');
        e.target.classList.add(dir === 'left' ? 'reveal-left' : 'reveal-right');
        io.unobserve(e.target);
      }
    });
  }, { threshold:.15 });

  items.forEach(it => io.observe(it));
}

/* =========================
   Carrousel infini (index)
   ========================= */
function setupInfiniteCarousel(){
  const carousel = document.getElementById('logoCarousel');
  if (!carousel) return;
  const track = carousel.querySelector('.track');
  if (!track) return;

  let x = 0;
  let raf = null;
  let speed = 0.5;

  // dupliquer pour effet infini
  const slides = Array.from(track.children);
  slides.forEach(sl => track.appendChild(sl.cloneNode(true)));

  function step(){
    x -= speed;
    if (Math.abs(x) > track.scrollWidth / 2) x = 0;
    track.style.transform = `translateX(${x}px)`;
    raf = requestAnimationFrame(step);
  }

  const start = () => { if (!raf) raf = requestAnimationFrame(step); };
  const stop  = () => { if (raf) cancelAnimationFrame(raf); raf = null; };

  start();
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
}

/* =========================
   Compétences: filtres (sélection unique)
   ========================= */
function setupSkillFilters(){
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.skill-card');
  if (!chips.length || !cards.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Sélection unique
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;
      cards.forEach(card => {
        const tags = (card.getAttribute('data-tags') || '').split(',').map(s => s.trim());
        const show = filter === '*' || tags.includes(filter);
        card.toggleAttribute('hidden', !show);
      });
    });
  });
}

/* =========================
   Projets: overlay + swap image
   ========================= */
function setupProjectCardsHover(){
  document.querySelectorAll('.project-card').forEach(card => {
    const img = card.querySelector('img');
    const alt = img?.getAttribute('data-alt');
    const tagline = card.getAttribute('data-tagline');

    // Crée l’overlay si défini
    if (tagline && !card.querySelector('.overlay')){
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.textContent = tagline;
      card.appendChild(ov);
    }

    // Swap image au hover
    if (img && alt){
      card.addEventListener('mouseenter', () => { img.dataset.src = img.src; img.src = alt; });
      card.addEventListener('mouseleave', () => { if (img.dataset.src) img.src = img.dataset.src; });
    }
  });
}

/* =========================
   Projets: modale + onglets + iframe + galerie
   ========================= */
function setupProjectModal(){
  const overlay = document.getElementById('modalOverlay');
  const modal   = document.getElementById('projectModal');
  if (!overlay || !modal) return;

  const btnClose = modal.querySelector('#closeModal');
  const tabs = modal.querySelectorAll('.modal-tabs .tab');
  const contents = modal.querySelectorAll('.tab-content');

  const DEFAULT_TAB_ID = 'tech';

  function activateTab(tabId){
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    const tab = Array.from(tabs).find(t => t.dataset.tab === tabId);
    const content = modal.querySelector(`#${tabId}`);

    if (tab && content){
      tab.classList.add('active');
      content.classList.add('active');
      return;
    }

    // fallback si jamais "tech" n'existe pas
    if (tabs[0] && contents[0]){
      tabs[0].classList.add('active');
      contents[0].classList.add('active');
    }
  }

  // Définis ici les démos/infos de tes projets (➜ ajoute images[])
  const DEMOS = {
    p1: {
      url: 'https://example.com/demo1',
      desc: [
        'Ce projet transversal a été réalisé en fin de deuxième semestre de BUT Informatique.',
        'Il consistait à développer une application Java simulant la gestion des maisons à la Cité Internationale Universitaire de Paris. Le projet mobilisait des compétences en développement orienté objet, en interfaces graphiques (Java Swing), en gestion de projet et en qualité de code.',
        'En binôme, nous avons modélisé les entités (étudiants, maisons, services), conçu un diagramme UML, programmé une interface graphique intuitive, et implémenté des fonctionnalités comme l’inscription intelligente des étudiants, la gestion des listes d’attente ou encore l’équilibre des nationalités.',
        'Le projet était aussi l’occasion de travailler avec Git pour le versioning, d’écrire des tests unitaires, et de documenter notre code. Ce projet m’a offert une expérience concrète de la conception et du développement d’une application complète, en m’impliquant dans toutes les étapes du cycle de développement logiciel, de l’analyse à la soutenance.'
      ],
      tech: [
        {
          label: "Java",
          alt: "Logo Java — langage orienté objet",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
          label: "Figma",
          alt: "Logo Figma",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
      ],

      images: [
        'assets/projets/p1/log.png',
        'assets/projets/p1/liste.png',
        'assets/projets/p1/dash.png',
      ]
    },
    p2: {
      url: 'https://example.com/magicmusic',
      desc: [
        'Ce projet a été réalisé au cours de ma première année de BUT Informatique. L’objectif était de concevoir un jeu vidéo 2D en pixel art inspiré des jeux rétro, en utilisant le langage C++ et la bibliothèque graphique SDL2. Le jeu met en scène un personnage contrôlé par le joueur dans un environnement animé, avec des ennemis gérés par une IA simple, des bonus à récupérer et des collisions à éviter.',
        'Le travail a été réalisé en binôme sur plusieurs semaines. Nous avons structuré le projet autour de classes dédiées (Personnage, Niveau, Tuile, Objet...), utilisé des sprite sheets pour les animations et mis en place un système de chargement de niveaux à partir de fichiers texte. Le gameplay s’appuie sur une boucle de jeu fluide (60 FPS) avec gestion des événements (déplacement, interaction, victoire ou défaite).',
        'Ce projet m’a permis de renforcer mes compétences en programmation événementielle et orientée objet, en gestion de ressources graphiques, ainsi qu’en conception de jeux vidéo. J’ai également appris à manipuler un moteur de jeu simplifié, à utiliser un IDE (Code::Blocks) efficacement, et à collaborer autour d’un projet logiciel structuré.',
        'Create a free website with Framer, the website builder loved by startups, designers and agencies.'
      ],
      tech: [
        {
          label: "C++",
          alt: "Logo C++ — langage de programmation",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
          label: "SDL2",
          alt: "SDL2",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl2/sdl2-original.svg"
        },
      ],
      images: [
        'assets/projets/p2/cover.jpg',
        'assets/projets/p2/playlist.jpg',
        'assets/projets/p2/equalizer.jpg'
      ]
    },
    p3: {
      url: '',
      desc: [
        'Ce projet portait sur l’installation et la configuration d’un système Linux sur un Raspberry Pi 400, ainsi que sur la mise en place d’un serveur de base de données MariaDB. Il s’agissait d’un travail pratique de type DevOps, entièrement mené en anglais, incluant un rapport technique et des scripts d’installation.',
        'En trinôme, nous avons installé l’OS, configuré les accès SSH, créé et vérifié la base de données via des scripts Python. Le travail a été validé par un QCM technique et un script de test automatique.',
        'Ce projet m’a introduit à l’administration système, à la configuration de serveurs, à l’utilisation de la ligne de commande Linux, et à une approche rigoureuse et reproductible du déploiement logiciel.'
      ],
      tech: [
        {
          label: "linux",
          alt: "Logo Linux — système d'exploitation",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        },
        {
          label: "DEBIAN",
          alt: "Logo Debian — distribution Linux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
        },
        {
          label: "Raspberry Pi",
          alt: "Logo Raspberry Pi — micro-ordinateur",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
      ],
      images: [
        'assets/projets/p3/topo.jpg',
        'assets/projets/p3/vlan.jpg'
      ]
    },
    p4: {
      url: '',
      desc: [
        'Ce projet transversal a été réalisé en fin de deuxième semestre de BUT Informatique.',
        'Il consistait à développer une application Java simulant la gestion des maisons à la Cité Internationale Universitaire de Paris. Le projet mobilisait des compétences en développement orienté objet, en interfaces graphiques (Java Swing), en gestion de projet et en qualité de code.',
        'En binôme, nous avons modélisé les entités (étudiants, maisons, services), conçu un diagramme UML, programmé une interface graphique intuitive, et implémenté des fonctionnalités comme l’inscription intelligente des étudiants, la gestion des listes d’attente ou encore l’équilibre des nationalités.',
        'Le projet était aussi l’occasion de travailler avec Git pour le versioning, d’écrire des tests unitaires, et de documenter notre code. Ce projet m’a offert une expérience concrète de la conception et du développement d’une application complète, en m’impliquant dans toutes les étapes du cycle de développement logiciel, de l’analyse à la soutenance.'
      ],
      tech: [
        {
          label: "Linux",
          alt: "Logo Linux — système d'exploitation",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        },
        {
          label: "DEBIAN",
          alt: "Logo Debian — distribution Linux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
        },
        {
          label: "WHIRESHARK",
          alt: "Logo Wireshark — analyseur réseau",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wireshark/wireshark-original.svg"
        },
      ],
      images: [
        'assets/projets/p3/topo.jpg',
        'assets/projets/p3/vlan.jpg'
      ]
    },
    p5: {
      url: '',
      desc: [
        'Ce projet transversal a été réalisé en fin de deuxième semestre de BUT Informatique.',
        'Il consistait à développer une application Java simulant la gestion des maisons à la Cité Internationale Universitaire de Paris. Le projet mobilisait des compétences en développement orienté objet, en interfaces graphiques (Java Swing), en gestion de projet et en qualité de code.',
        'En binôme, nous avons modélisé les entités (étudiants, maisons, services), conçu un diagramme UML, programmé une interface graphique intuitive, et implémenté des fonctionnalités comme l’inscription intelligente des étudiants, la gestion des listes d’attente ou encore l’équilibre des nationalités.',
        'Le projet était aussi l’occasion de travailler avec Git pour le versioning, d’écrire des tests unitaires, et de documenter notre code. Ce projet m’a offert une expérience concrète de la conception et du développement d’une application complète, en m’impliquant dans toutes les étapes du cycle de développement logiciel, de l’analyse à la soutenance.'
      ],
      tech: 'Oracle, SQL, PL/SQL',
      images: [
        'assets/projets/p5/sql.jpg',
        'assets/projets/p5/report.jpg'
      ]
    },
  };

  // —— helpers galerie
  function buildGallery(container, images){
    container.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'gallery';

    // zone principale
    const main = document.createElement('div');
    main.className = 'gallery-main';

    // flèches
    const left = document.createElement('button');
    left.className = 'gallery-arrow left';
    left.setAttribute('aria-label', 'Image précédente');
    left.innerHTML = '<span>‹</span>';
    const right = document.createElement('button');
    right.className = 'gallery-arrow right';
    right.setAttribute('aria-label', 'Image suivante');
    right.innerHTML = '<span>›</span>';

    // images principales (superposées pour fade)
    const mainImgs = images.map((src, i) => {
      const im = document.createElement('img');
      im.src = src;
      if (i === 0) im.classList.add('is-active');
      main.appendChild(im);
      return im;
    });

    main.appendChild(left);
    main.appendChild(right);

    // miniatures
    const thumbs = document.createElement('div');
    thumbs.className = 'gallery-thumbs';
    const thumbBtns = images.map((src, i) => {
      const btn = document.createElement('button');
      btn.setAttribute('type','button');
      if (i === 0) btn.classList.add('is-active');
      btn.innerHTML = `<img src="${src}" alt="Aperçu ${i+1}">`;
      thumbs.appendChild(btn);
      return btn;
    });

    wrap.appendChild(main);
    wrap.appendChild(thumbs);
    container.appendChild(wrap);

    let index = 0;
    let lock = false;

    function goTo(n, dir = 1){
      if (lock || n === index || n < 0 || n >= mainImgs.length) return;
      lock = true;

      // reset classes
      mainImgs.forEach(img => img.classList.remove('is-active'));
      thumbBtns.forEach(b => b.classList.remove('is-active'));

      const next = mainImgs[n];

      // petite animation: on prépare un léger slide selon la direction
      next.style.transform = `translateX(${dir*12}px) scale(1.01)`;
      requestAnimationFrame(() => {
        next.classList.add('is-active');
      });

      // active la miniature
      thumbBtns[n].classList.add('is-active');

      // fin d’anim (durée alignée sur CSS .35s)
      setTimeout(() => {
        index = n;
        lock = false;
      }, 360);
    }

    function next(){ goTo((index+1)%mainImgs.length, +1); }
    function prev(){ goTo((index-1+mainImgs.length)%mainImgs.length, -1); }

    // events
    right.addEventListener('click', next);
    left.addEventListener('click', prev);
    thumbBtns.forEach((b, i) => b.addEventListener('click', () => goTo(i, i>index?+1:-1)));

    // navigation clavier quand la modale est ouverte
    const onKey = (e) => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    document.addEventListener('keydown', onKey);

    // cleanup renvoyé pour fermeture modale
    return () => document.removeEventListener('keydown', onKey);
  }

  // —— ouverture depuis une carte
  let cleanupGallery = null;

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project');
      const data = DEMOS[id] || {};

      // =========================
      // DESCRIPTION : galerie + <p> par élément
      // =========================
      const descEl = modal.querySelector('#desc');
      descEl.innerHTML = '';

      // (1) Galerie si images
      if (Array.isArray(data.images) && data.images.length){
        const galleryHost = document.createElement('div');
        descEl.appendChild(galleryHost);
        cleanupGallery = buildGallery(galleryHost, data.images);
      }

      // (2) Paragraphes si desc est un tableau
      if (Array.isArray(data.desc)){
        data.desc.forEach(txt => {
          const p = document.createElement('p');
          p.textContent = txt;
          descEl.appendChild(p);
        });
      }
      // (3) Si desc est une string
      else if (typeof data.desc === 'string' && data.desc.trim()){
        const p = document.createElement('p');
        p.textContent = data.desc;
        descEl.appendChild(p);
      }
      // (4) Fallback
      else {
        descEl.textContent = 'Description à venir…';
      }

      // =========================
      // Tech (vignettes cliquables -> competences.html)
      // =========================
      const techEl = modal.querySelector('#tech');
      techEl.innerHTML = '';

      const COMPETENCES_URL = 'competences.html';

      if (Array.isArray(data.tech) && data.tech.length) {
        const grid = document.createElement('div');
        grid.className = 'tech-grid';

        data.tech.forEach(t => {
          const a = document.createElement('a');
          a.className = 'tech-card';
          a.href = COMPETENCES_URL; // redirection
          a.setAttribute('aria-label', `Voir les compétences (${t.label || 'tech'})`);

          const logoWrap = document.createElement('div');
          logoWrap.className = 'tech-logoWrap';

          const img = document.createElement('img');
          img.className = 'tech-logo';
          img.src = t.src;
          img.alt = t.alt || t.label || 'Logo';
          img.loading = 'lazy';
          img.decoding = 'async';

          const meta = document.createElement('div');
          meta.className = 'tech-meta';

          const name = document.createElement('div');
          name.className = 'tech-name';
          name.textContent = t.label || '';

          const hint = document.createElement('div');
          hint.className = 'tech-hint';
          hint.textContent = 'Voir dans Compétences';

          logoWrap.appendChild(img);
          meta.appendChild(name);
          meta.appendChild(hint);

          a.appendChild(logoWrap);
          a.appendChild(meta);

          grid.appendChild(a);
        });

        techEl.appendChild(grid);

      } else if (typeof data.tech === 'string' && data.tech.trim()) {
        techEl.textContent = data.tech;
      } else {
        techEl.textContent = 'Stack technique à venir…';
      }

      // =========================
      // Aperçu (iframe)
      // =========================
      const ap = modal.querySelector('#apercu');
      ap.innerHTML = '';
      if (data.url){
        const wrap = document.createElement('div'); wrap.className = 'responsive-iframe';
        wrap.innerHTML = `<iframe src="${data.url}" title="Aperçu du projet"></iframe>`;
        ap.appendChild(wrap);
      } else {
        ap.textContent = 'Aperçu disponible prochainement.';
      }

      // ✅ Tabs: TECH par défaut (au lieu de Description)
      activateTab(DEFAULT_TAB_ID);

      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // Tabs (inchangé)
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    modal.querySelector(`#${tab.dataset.tab}`).classList.add('active');
  }));

  // Fermeture
  const close = () => {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // stop iframe
    const iframe = modal.querySelector('#apercu iframe');
    if (iframe) iframe.src = iframe.src;
    // cleanup listeners clavier
    if (cleanupGallery){ cleanupGallery(); cleanupGallery = null; }
  };

  btnClose?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('active')) close(); });
}

/* =========================
   Sections repliables (flèche)
   ========================= */
function setupSectionToggles(){
  document.querySelectorAll('.toggle-section').forEach(btn => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (!target) return;

    btn.addEventListener('click', () => {
      const isHidden = getComputedStyle(target).display === 'none' || target.hasAttribute('hidden');
      if (isHidden){
        target.style.display = '';
        target.removeAttribute('hidden');
        btn.classList.add('open');
      } else {
        target.style.display = 'none';
        btn.classList.remove('open');
      }
    });

    // état initial (ouvert)
    btn.classList.add('open');
  });
}

/* =========================
   Back to top
   ========================= */
function setupBackToTop(){
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const onScroll = () => {
    if (window.scrollY > 300) btn.classList.add('show'); else btn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  onScroll();
}
