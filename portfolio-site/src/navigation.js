/**
 * NAVIGATION ENTRE LES PAGES
 * Les liens gardent leurs vraies adresses .html : nouvel onglet, partage,
 * accès direct et navigation sans JavaScript continuent de fonctionner.
 * Lors d'un clic normal, on remplace le contenu localement pour l'animer.
 */
import { routes } from "./data/routes.js";
import { $, $$ } from "./lib/dom.js";
import { transitionContent } from "./motion.js";

export function createNavigation({ getPage, beforeNavigate, render }) {
  const routeMap = new Map(routes);
  const base = new URL("./", location.href);
  let currentURL = new URL(location.href);
  let index = history.state?.portfolio?.index || 0;
  let busy = false;
  let pendingNavigation = null;
  let scrollFrame;

  // Le navigateur conserve l'historique ; ce module conserve les positions de lecture.
  history.scrollRestoration = "manual";
  history.replaceState(
    { ...history.state, portfolio: { index, scrollY } },
    "",
    location.href,
  );

  const getRoute = (url) => {
    if (url.origin !== base.origin || new URL("./", url).pathname !== base.pathname)
      return null;
    return routeMap.get(url.pathname.split("/").pop() || "index.html");
  };

  const saveScroll = () => {
    if (busy) return;
    history.replaceState(
      { ...history.state, portfolio: { index, scrollY } },
      "",
      location.href,
    );
  };

  const restoreScroll = (url, position) => {
    const anchor = url.hash
      ? document.getElementById(decodeURIComponent(url.hash.slice(1)))
      : null;
    if (anchor) anchor.scrollIntoView({ behavior: "instant", block: "start" });
    else window.scrollTo({ top: position || 0, behavior: "instant" });
  };

  async function navigate(url, options = {}) {
    const nextPage = getRoute(url);
    if (!nextPage) return;
    // Pendant un effet, retenir le dernier clic au lieu de l'ignorer.
    if (busy) {
      pendingNavigation = { url, options };
      return;
    }
    const { mode = "push", position = 0, nextIndex = index + 1, projectId } = options;
    if (url.href === currentURL.href && nextPage === getPage()) {
      restoreScroll(url, position);
      return;
    }
    beforeNavigate();
    const direction = nextIndex < index ? "back" : "forward";
    if (mode === "push") saveScroll();
    busy = true;
    document.documentElement.setAttribute("aria-busy", "true");

    // Fermer les fenêtres avant la capture évite d'animer un ancien fond flouté.
    $$("dialog[open]").forEach((dialog) => dialog.close());
    document.body.classList.remove("dialog-open");

    try {
      await transitionContent(
        () => {
          if (mode === "push")
            history.pushState(
              { portfolio: { index: nextIndex, scrollY: position } },
              "",
              url.href,
            );
          index = nextIndex;
          if (mode === "pop" && location.href !== url.href)
            history.replaceState(
              { portfolio: { index: nextIndex, scrollY: position } },
              "",
              url.href,
            );
          render(nextPage, url);
          currentURL = new URL(url);
          restoreScroll(url, position);
          const main = $("#main");
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: true });
          $("#navigation-status").textContent = document.title;
        },
        { direction, projectId },
      );
    } catch (error) {
      // Un problème d'animation ne doit jamais rendre un lien inutilisable.
      console.warn("Navigation animée indisponible, ouverture classique.", error);
      location.assign(url.href);
    } finally {
      busy = false;
      document.documentElement.removeAttribute("aria-busy");
      if (pendingNavigation) {
        const pending = pendingNavigation;
        pendingNavigation = null;
        navigate(pending.url, pending.options);
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
      event.altKey
    )
      return;
    if (link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href);
    const nextPage = getRoute(url);
    if (!nextPage) return;
    // Les liens de sommaire restent gérés nativement, avec leur défilement doux.
    if (url.pathname === currentURL.pathname && url.search === currentURL.search) return;
    event.preventDefault();
    const projectId = nextPage.startsWith("project-")
      ? nextPage.slice(8)
      : getPage().startsWith("project-")
        ? getPage().slice(8)
        : undefined;
    navigate(url, { projectId });
  });

  window.addEventListener("popstate", (event) => {
    const url = new URL(location.href);
    if (url.pathname === currentURL.pathname && url.search === currentURL.search) {
      restoreScroll(url, event.state?.portfolio?.scrollY || 0);
      currentURL = url;
      return;
    }
    const projectId = getPage().startsWith("project-") ? getPage().slice(8) : undefined;
    navigate(url, {
      mode: "pop",
      nextIndex: event.state?.portfolio?.index || 0,
      position: event.state?.portfolio?.scrollY || 0,
      projectId,
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
}
