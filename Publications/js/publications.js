

  /* =========================
   TRADUCTION AUTO PAR ATTRIBUTS data-en
   (ne touche pas aux effets graphiques : uniquement du texte)
   ========================= */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("langPush");
    const row2 = document.getElementById("lpRow2");
    const html = document.documentElement;

    // état courant (FR par défaut)
    let isEnglish = false;

    const switchTo = (lang) => {
      const toEnglish = lang === "en";
      const nodes = document.querySelectorAll("[data-en]");

      nodes.forEach((el) => {
        // stocker le FR original une seule fois
        if (!el.dataset.fr) {
          el.dataset.fr = el.innerHTML;
        }
        el.innerHTML = toEnglish ? el.dataset.en : el.dataset.fr;
      });

      // attribut langue du document (utile pour a11y/SEO)
      html.lang = toEnglish ? "en" : "fr";

      // libellé du bouton
      row2.textContent = toEnglish ? "fr" : "ang";

      // aria-label du bouton
      btn.setAttribute("aria-label", toEnglish ? "Change language" : "Changer de langue");

      // <title> est déjà pris en charge car il a data-en
      // rien d'autre à faire pour garder les effets CSS/JS intacts
    };

    btn.addEventListener("click", () => {
      isEnglish = !isEnglish;
      switchTo(isEnglish ? "en" : "fr");
    });
  });
})();


// =========================
// Tabs (TOUT / Enseignement)
// =========================
(() => {
  const tabs = document.querySelectorAll(".tab");
  const panels = {
    all: document.getElementById("tab-all"),
    teaching: document.getElementById("tab-teaching"),
  };

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const key = btn.dataset.tab;
      Object.values(panels).forEach(p => p.classList.remove("is-active"));
      if (panels[key]) panels[key].classList.add("is-active");
    });
  });

  // =========================
  // Subtabs (Seconde / Première / Terminale)
  // =========================
  const subtabs = document.querySelectorAll(".subtab");
  const subpanels = {
    sec: document.getElementById("subtab-sec"),
    prem: document.getElementById("subtab-prem"),
    term: document.getElementById("subtab-term"),
  };

  subtabs.forEach(btn => {
    btn.addEventListener("click", () => {
      subtabs.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const key = btn.dataset.subtab;
      Object.values(subpanels).forEach(p => p.classList.remove("is-active"));
      if (subpanels[key]) subpanels[key].classList.add("is-active");
    });
  });
})();
