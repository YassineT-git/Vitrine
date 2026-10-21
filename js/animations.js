(() => {
  /**
   * ANIMATIONS
   * Les durées CSS sont dans ../css/animations.css.
   * Ici : transitions de contenu, accordéons et fenêtres de dialogue.
   * Si le visiteur préfère réduire les animations, les changements sont immédiats.
   */
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const easing = "cubic-bezier(.22, 1, .36, 1)";
  const accordionAnimations = new WeakMap();
  const closingDialogs = new WeakSet();
  let transitionSequence = 0;

  /**
   * Capture l'ancien contenu, applique la modification puis anime le nouveau.
   * L'API View Transition permet aussi d'agrandir le visuel d'une carte vers sa fiche.
   * Le repli Web Animations conserve un fondu fluide sur les autres navigateurs.
   */
  async function transitionContent(
    update,
    { kind = "page", direction = "forward", projectId } = {},
  ) {
    const sequence = ++transitionSequence;
    const root = document.documentElement;
    root.dataset.transition = kind;
    root.dataset.direction = direction;

    const nameProject = () => {
      if (!projectId) return;
      const selector = document.body.dataset.page.startsWith("project-")
        ? ".detail-hero .project-visual"
        : `[data-project="${projectId}"] .project-visual`;
      const cover = $(selector);
      if (!cover) return;
      const rect = cover.getBoundingClientRect();
      // Un visuel hors écran ne doit pas traverser la page pour rejoindre sa fiche.
      if (rect.bottom > 0 && rect.top < innerHeight)
        cover.style.viewTransitionName = "project-cover";
    };

    try {
      if (reducedMotion()) {
        update();
        return;
      }

      if (typeof document.startViewTransition === "function") {
        nameProject();
        const transition = document.startViewTransition(() => {
          update();
          nameProject();
        });
        // ready peut être rejetée si l'onglet est masqué : le contenu change quand même.
        transition.ready.catch(() => {});
        await transition.finished;
      } else {
        const previous = $("#main");
        const leaving = previous?.animate(
          [{ opacity: 1 }, { opacity: 0, transform: "translateY(-8px)" }],
          { duration: 110, easing: "ease-out", fill: "forwards" },
        );
        if (leaving) await leaving.finished;
        update();
        leaving?.cancel();
        const current = $("#main");
        if (current)
          await current.animate(
            [
              { opacity: 0, transform: "translateY(18px)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: kind === "language" ? 220 : 460, easing },
          ).finished;
      }
    } finally {
      if (sequence === transitionSequence) {
        $$('[style*="view-transition-name"]').forEach((element) =>
          element.style.removeProperty("view-transition-name"),
        );
        delete root.dataset.transition;
        delete root.dataset.direction;
      }
    }
  }

  /**
   * Conserve de vrais <details> : ils restent utilisables sans JavaScript.
   * À la fermeture, on attend la fin de l'animation avant de retirer open.
   * Un deuxième clic inverse l'animation depuis sa hauteur actuelle.
   */
  function setupAccordions() {
    $$(".experience-item").forEach((details) => {
      const summary = $("summary", details);
      const content = $(".experience-content", details);
      details.dataset.expanded = String(details.open);
      summary.setAttribute("aria-expanded", String(details.open));

      summary.addEventListener("click", (event) => {
        event.preventDefault();
        const opening = details.dataset.expanded !== "true";
        const startHeight = content.getBoundingClientRect().height;
        const startOpacity = Number(getComputedStyle(content).opacity);
        accordionAnimations.get(details)?.cancel();
        details.dataset.expanded = String(opening);
        summary.setAttribute("aria-expanded", String(opening));

        if (reducedMotion()) {
          details.open = opening;
          return;
        }

        details.open = true;
        const endHeight = opening ? content.scrollHeight : 0;
        const animation = content.animate(
          [
            {
              height: `${startHeight}px`,
              opacity: startHeight ? startOpacity : 0,
              transform: startHeight ? "none" : "translateY(-6px)",
            },
            {
              height: `${endHeight}px`,
              opacity: opening ? 1 : 0,
              transform: opening ? "none" : "translateY(-6px)",
            },
          ],
          { duration: opening ? 420 : 290, easing, fill: "both" },
        );

        accordionAnimations.set(details, animation);
        animation.finished
          .then(() => {
            if (accordionAnimations.get(details) !== animation) return;
            details.open = opening;
            animation.cancel();
            accordionAnimations.delete(details);
          })
          .catch(() => {}); // L'inversion d'une animation est une annulation normale.
      });
    });
  }

  function animateDialogIn(dialog) {
    if (reducedMotion()) return;
    dialog.animate(
      [
        { opacity: 0, transform: "translateY(16px) scale(.98)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 300, easing },
    );
  }

  /** Fermer après le fondu garde le fond flouté et le focus jusqu'au dernier instant. */
  async function closeDialog(dialog) {
    if (!dialog?.open || closingDialogs.has(dialog)) return;
    closingDialogs.add(dialog);
    try {
      if (!reducedMotion())
        await dialog.animate(
          [
            { opacity: 1, transform: "none" },
            { opacity: 0, transform: "translateY(8px) scale(.985)" },
          ],
          { duration: 150, easing: "ease-in", fill: "forwards" },
        ).finished;
      dialog.close();
      dialog.getAnimations().forEach((animation) => animation.cancel());
    } finally {
      closingDialogs.delete(dialog);
    }
  }

  window.portfolioAnimations = {
    transitionContent,
    setupAccordions,
    animateDialogIn,
    closeDialog,
  };
})();
