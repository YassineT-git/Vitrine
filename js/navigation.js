/*
 * Navigation animée entre les vraies pages HTML.
 * On lit le prochain fichier avec fetch, puis on remplace #app.
 * Un lien reste un lien : nouvel onglet, téléchargement et accès direct fonctionnent.
 * En ouvrant index.html directement depuis l'ordinateur, la navigation reste native.
 */
window.setupPortfolioNavigation = function ({ beforeNavigate, afterNavigate }) {
  if (location.protocol === "file:") return;
  const { transitionContent } = window.portfolioAnimations;
  const base = new URL("./", location.href);
  let currentURL = new URL(location.href);
  let index = history.state?.portfolio?.index || 0;
  let busy = false,
    pending = null,
    scrollFrame;

  history.scrollRestoration = "manual";
  history.replaceState({ portfolio: { index, scrollY } }, "", location.href);

  function isLocalPage(url) {
    return (
      url.origin === base.origin &&
      new URL("./", url).pathname === base.pathname &&
      (url.pathname.endsWith(".html") || url.pathname.endsWith("/"))
    );
  }
  function saveScroll() {
    if (busy) return;
    history.replaceState({ portfolio: { index, scrollY } }, "", location.href);
    currentURL = new URL(location.href);
  }
  function restoreScroll(url, position) {
    const anchor = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
    if (anchor) anchor.scrollIntoView({ behavior: "instant", block: "start" });
    else scrollTo({ top: position, behavior: "instant" });
  }

  async function navigate(url, options = {}) {
    // Un deuxième clic pendant l'effet prend la suite du premier.
    if (busy) {
      pending = { url, options };
      return;
    }
    const { mode = "push", position = 0, nextIndex = index + 1 } = options;
    beforeNavigate();
    if (mode === "push") saveScroll();
    busy = true;
    document.documentElement.setAttribute("aria-busy", "true");
    const direction = nextIndex < index ? "back" : "forward";
    const previousProject = document.body.dataset.page.startsWith("project-")
      ? document.body.dataset.page.slice(8)
      : undefined;

    try {
      const response = await fetch(url.href);
      if (!response.ok) throw new Error("Page indisponible : " + response.status);
      const nextDocument = new DOMParser().parseFromString(await response.text(), "text/html");
      const nextApp = nextDocument.getElementById("app");
      if (!nextApp || !nextDocument.getElementById("main"))
        throw new Error("Structure de page différente");
      const nextPage = nextDocument.body.dataset.page;
      const projectId = nextPage.startsWith("project-") ? nextPage.slice(8) : previousProject;
      document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
      document.body.classList.remove("dialog-open");

      await transitionContent(
        () => {
          if (mode === "push")
            history.pushState({ portfolio: { index: nextIndex, scrollY: position } }, "", url);
          index = nextIndex;
          // Copier le titre et les descriptions, y compris leurs traductions.
          for (const selector of [
            "title",
            'meta[name="description"]',
            'meta[property="og:title"]',
            'meta[property="og:description"]',
          ]) {
            const next = nextDocument.querySelector(selector);
            if (next)
              document.querySelector(selector)?.replaceWith(document.importNode(next, true));
          }
          document.getElementById("app").replaceWith(document.importNode(nextApp, true));
          document.body.dataset.page = nextPage;
          currentURL = new URL(url);
          afterNavigate();
          restoreScroll(url, position);
          const main = document.getElementById("main");
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: true });
          document.getElementById("navigation-status").textContent = document.title;
        },
        { direction, projectId },
      );
    } catch (error) {
      // Si fetch ou une animation échoue, ouvrir normalement la page demandée.
      console.warn("Ouverture classique de la page.", error);
      location.assign(url.href);
    } finally {
      busy = false;
      document.documentElement.removeAttribute("aria-busy");
      if (pending) {
        const next = pending;
        pending = null;
        navigate(next.url, next.options);
      } else saveScroll();
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (
      !link ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    )
      return;
    const url = new URL(link.href);
    if (!isLocalPage(url)) return;
    // Un sommaire dans la page conserve le défilement natif et son ancre.
    if (url.pathname === location.pathname && url.search === location.search) return;
    event.preventDefault();
    navigate(url);
  });
  window.addEventListener("popstate", (event) => {
    const url = new URL(location.href);
    if (!isLocalPage(url)) return;
    if (url.pathname === currentURL.pathname && url.search === currentURL.search) {
      restoreScroll(url, event.state?.portfolio?.scrollY || 0);
      currentURL = url;
      return;
    }
    navigate(url, {
      mode: "pop",
      nextIndex: event.state?.portfolio?.index || 0,
      position: event.state?.portfolio?.scrollY || 0,
    });
  });
  window.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(saveScroll);
    },
    { passive: true },
  );
};
