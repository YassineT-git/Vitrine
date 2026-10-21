/*
 * Interactions du portfolio, sans bibliothèque ni génération de HTML.
 * Pour modifier un texte, ouvrir la page .html correspondante.
 * Les fonctions sont regroupées par fonctionnalité ci-dessous.
 */
(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const normalize = (text) =>
    String(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const { transitionContent, setupAccordions, animateDialogIn, closeDialog } =
    window.portfolioAnimations;

  // Le stockage peut être refusé par le navigateur : le site reste utilisable.
  function read(key, fallback) {
    try {
      return localStorage.getItem("yt-" + key) ?? fallback;
    } catch {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem("yt-" + key, value);
    } catch {}
  }
  function readJSON(key, fallback) {
    try {
      return JSON.parse(read(key, JSON.stringify(fallback)));
    } catch {
      return fallback;
    }
  }
  function remove(key) {
    try {
      localStorage.removeItem("yt-" + key);
    } catch {}
  }

  let language = read("language", "fr") === "en" ? "en" : "fr";
  let theme = ["light", "dark", "system"].includes(read("theme")) ? read("theme") : "light";
  let view = read("view", "grid") === "list" ? "list" : "grid";
  let saved = readSaved();
  let filter = "all",
    search = "",
    sort = "default";
  let toastTimer,
    galleryIndex = 0,
    commandIndex = 0;
  const systemTheme = matchMedia("(prefers-color-scheme: dark)");
  const frenchText = new WeakMap();
  const frenchAttributes = new WeakMap();
  const say = (fr, en) => (language === "fr" ? fr : en);

  function readSaved() {
    const value = readJSON("saved", []);
    return new Set(Array.isArray(value) ? value.filter((id) => typeof id === "string") : []);
  }
  function toast(message) {
    $("#toast").textContent = message;
    $("#toast").classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("#toast")?.classList.remove("show"), 3200);
  }
  function changeIcon(button, name) {
    $("use", button)?.setAttribute("href", "assets/icons.svg#" + name);
  }

  // 1. Traduction : le français reste dans le HTML, l'anglais dans data-en.
  // On mémorise le français avant le premier changement pour pouvoir y revenir.
  function translatePage() {
    $$("[data-en]").forEach((element) => {
      if (!frenchText.has(element)) frenchText.set(element, element.textContent);
      element.textContent = language === "en" ? element.dataset.en : frenchText.get(element);
    });
    for (const attribute of ["aria-label", "alt", "placeholder", "title", "content"]) {
      $$(`[data-en-${attribute}]`).forEach((element) => {
        if (!frenchAttributes.has(element)) frenchAttributes.set(element, {});
        const originals = frenchAttributes.get(element);
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(
          attribute,
          language === "en" ? element.getAttribute("data-en-" + attribute) : originals[attribute],
        );
      });
    }
    document.documentElement.lang = language;
  }

  // 2. Apparence et favoris : les choix sont conservés sur cet appareil.
  function applyTheme() {
    const resolved = theme === "system" ? (systemTheme.matches ? "dark" : "light") : theme;
    document.documentElement.dataset.theme = resolved;
    $('meta[name="theme-color"]').content = resolved === "dark" ? "#141516" : "#ffffff";
    $$("[data-set-theme]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setTheme === theme));
    });
    changeIcon($("button[data-theme]"), resolved === "dark" ? "moon" : "sun");
  }
  function syncSaved() {
    $$("[data-save]").forEach((button) => {
      const selected = saved.has(button.dataset.save);
      const label = selected
        ? say("Retirer de ma sélection", "Remove from collection")
        : say("Enregistrer le projet", "Save project");
      const title =
        $("h3", button.closest(".project-card") || $("#main"))?.textContent ||
        $("#main h1").textContent;
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("aria-label", label + " : " + title);
      const span = $("span", button);
      if (span) span.textContent = label;
    });
    $$(".saved-count").forEach((element) => (element.textContent = saved.size));
  }

  // 3. Projets : filtrer les cartes HTML existantes, sans les recréer.
  function readFilters() {
    const query = new URL(location.href).searchParams;
    filter = ["all", "dev", "systems", "saved"].includes(query.get("filtre"))
      ? query.get("filtre")
      : "all";
    search = query.get("recherche") || "";
    sort = query.get("tri") === "az" ? "az" : "default";
  }
  function updateListing(updateURL = false) {
    const grid = $("#project-grid");
    if (!grid) return;
    const cards = $$(".project-card", grid);
    const term = normalize(search.trim());
    cards.sort((a, b) =>
      sort === "az"
        ? $("h3", a).textContent.localeCompare($("h3", b).textContent, language)
        : Number(a.dataset.order) - Number(b.dataset.order),
    );
    let count = 0;
    cards.forEach((card) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "saved" ? saved.has(card.dataset.project) : card.dataset.category === filter);
      card.hidden =
        !matchesFilter || !normalize(card.textContent + " " + card.dataset.keywords).includes(term);
      if (!card.hidden) count++;
      grid.append(card);
    });
    grid.classList.toggle("list-view", view === "list");
    grid.hidden = count === 0;
    $("#empty-state").hidden = count !== 0;
    $("#results-count").textContent =
      count + " " + say(count === 1 ? "projet" : "projets", count === 1 ? "project" : "projects");
    for (const [attribute, value] of [
      ["filter", filter],
      ["view", view],
    ]) {
      $$(`[data-${attribute}]`).forEach((button) => {
        const active = button.dataset[attribute] === value;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    $("#project-search").value = search;
    $("#project-sort").value = sort;
    if (updateURL) {
      const url = new URL(location.href);
      for (const key of ["filtre", "recherche", "tri"]) url.searchParams.delete(key);
      if (filter !== "all") url.searchParams.set("filtre", filter);
      if (search) url.searchParams.set("recherche", search);
      if (sort === "az") url.searchParams.set("tri", sort);
      history.replaceState(history.state, "", url);
    }
  }

  // 4. Recherche rapide et fenêtres de dialogue.
  function renderCommands() {
    const term = normalize($("#command-input").value);
    const items = $$("[data-command-item]");
    items.forEach((link) => {
      link.hidden = !normalize(link.textContent + " " + link.dataset.keywords).includes(term);
      link.classList.remove("is-selected");
    });
    const visible = items.filter((link) => !link.hidden);
    commandIndex = 0;
    visible[0]?.classList.add("is-selected");
    $("#command-empty").hidden = visible.length > 0;
  }
  function showDialog(id) {
    const dialog = document.getElementById(id);
    if (dialog.open) return;
    dialog.showModal();
    animateDialogIn(dialog);
    document.body.classList.add("dialog-open");
    if (id === "command-dialog") {
      $("#command-input").value = "";
      renderCommands();
      $("#command-input").focus();
    }
  }
  function setupDialogs() {
    $$("dialog").forEach((dialog) => {
      dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeDialog(dialog);
      });
      dialog.addEventListener("close", () => {
        if (!$$("dialog[open]").length) document.body.classList.remove("dialog-open");
      });
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          closeDialog(dialog);
      });
    });
  }

  // 5. Galerie : les images et les légendes viennent de la fiche HTML.
  function renderGallery() {
    const images = $$("[data-gallery] img");
    const source = images[galleryIndex];
    if (!source) return;
    const image = $("#lightbox-image");
    image.src = source.src;
    image.alt = source.alt;
    $("#lightbox-caption").textContent = source.alt;
    $("#lightbox-count").textContent = `${galleryIndex + 1} / ${images.length}`;
    $$("[data-gallery-prev], [data-gallery-next]").forEach(
      (button) => (button.disabled = images.length < 2),
    );
  }
  function stepGallery(amount) {
    const count = $$("[data-gallery]").length;
    if (!count) return;
    galleryIndex = (galleryIndex + amount + count) % count;
    renderGallery();
  }

  // 6. Contact : brouillon local et email prérempli dans la messagerie du visiteur.
  // Aucun message n'est envoyé automatiquement et aucun serveur n'est nécessaire.
  function saveDraft() {
    const form = $("#contact-form");
    if (form) write("draft", JSON.stringify(Object.fromEntries(new FormData(form))));
  }
  function setupContact() {
    const form = $("#contact-form");
    if (!form) return;
    const draft = readJSON("draft", {});
    if (draft && typeof draft === "object") {
      for (const name of ["name", "email", "subject", "message"]) {
        if (typeof draft[name] === "string") form.elements[name].value = draft[name];
      }
    }
    form.addEventListener("input", saveDraft);
    form.addEventListener("change", saveDraft);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      saveDraft();
      const data = new FormData(form);
      const name = data.get("name").trim();
      const email = data.get("email").trim();
      const message = data.get("message").trim();
      const subject = form.elements.subject.selectedOptions[0].textContent;
      const body = `${say("Bonjour Yassine,", "Hello Yassine,")}\n\n${message}\n\n${name}\n${email}`;
      const url =
        "mailto:" +
        $(".email-large").href.slice(7) +
        "?subject=" +
        encodeURIComponent(subject + " — " + name) +
        "&body=" +
        encodeURIComponent(body);
      $("#prepared-email").href = url;
      $("#form-result").hidden = false;
      location.href = url;
    });
  }
  function updateProgress() {
    const bar = $(".reading-progress span");
    if (!bar) return;
    const range = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (range > 0 ? Math.min(100, Math.max(0, (scrollY / range) * 100)) : 0) + "%";
  }
  function closeMenu() {
    $(".site-header").classList.remove("menu-open");
    const button = $("[data-menu]");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", say("Ouvrir le menu", "Open menu"));
    changeIcon(button, "menu");
  }
  function refreshPreferences() {
    translatePage();
    if ($(".site-header").classList.contains("menu-open")) {
      $("[data-menu]").setAttribute("aria-label", say("Fermer le menu", "Close menu"));
    }
    applyTheme();
    syncSaved();
    updateListing();
    renderCommands();
    if ($("#gallery-dialog").open) renderGallery();
  }
  function initializePage() {
    readFilters();
    refreshPreferences();
    setupAccordions();
    setupDialogs();
    setupContact();
    updateProgress();
  }

  // Les événements ci-dessous sont posés une fois, même après une navigation animée.
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.hasAttribute("data-menu")) {
      const open = $(".site-header").classList.toggle("menu-open");
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute(
        "aria-label",
        open ? say("Fermer le menu", "Close menu") : say("Ouvrir le menu", "Open menu"),
      );
      changeIcon(button, open ? "close" : "menu");
    }
    if (button.hasAttribute("data-command")) showDialog("command-dialog");
    if (button.hasAttribute("data-theme")) showDialog("theme-dialog");
    if (button.hasAttribute("data-privacy")) showDialog("privacy-dialog");
    if (button.hasAttribute("data-close-dialog")) closeDialog(button.closest("dialog"));
    if (button.hasAttribute("data-set-theme")) {
      theme = button.dataset.setTheme;
      write("theme", theme);
      applyTheme();
      closeDialog($("#theme-dialog"));
    }
    if (button.hasAttribute("data-language")) {
      if (button.disabled) return;
      button.disabled = true;
      try {
        await transitionContent(
          () => {
            language = language === "fr" ? "en" : "fr";
            write("language", language);
            refreshPreferences();
          },
          { kind: "language" },
        );
      } finally {
        button.disabled = false;
      }
    }
    if (button.hasAttribute("data-save")) {
      const id = button.dataset.save;
      const selected = saved.has(id);
      if (selected) saved.delete(id);
      else saved.add(id);
      write("saved", JSON.stringify([...saved]));
      syncSaved();
      updateListing();
      toast(
        selected
          ? say("Projet retiré de ta sélection", "Project removed from your collection")
          : say("Projet ajouté à ta sélection", "Project added to your collection"),
      );
      if (filter === "saved" && !saved.has(id))
        $('[data-filter="saved"]')?.focus({ preventScroll: true });
    }
    if (button.hasAttribute("data-filter")) {
      filter = button.dataset.filter;
      updateListing(true);
    }
    if (button.hasAttribute("data-view")) {
      view = button.dataset.view;
      write("view", view);
      updateListing();
    }
    if (button.hasAttribute("data-reset")) {
      filter = "all";
      search = "";
      sort = "default";
      updateListing(true);
      $("#project-search").focus();
    }
    if (button.hasAttribute("data-gallery")) {
      galleryIndex = $$("[data-gallery]").indexOf(button);
      renderGallery();
      showDialog("gallery-dialog");
    }
    if (button.hasAttribute("data-gallery-prev")) stepGallery(-1);
    if (button.hasAttribute("data-gallery-next")) stepGallery(1);
    if (button.hasAttribute("data-copy")) {
      const email = $(".email-large").href.slice(7);
      try {
        await navigator.clipboard.writeText(email);
        toast(say("Adresse email copiée", "Email address copied"));
      } catch {
        toast(say("Copie l’adresse : ", "Copy this address: ") + email);
      }
    }
    if (button.hasAttribute("data-clear-draft")) {
      remove("draft");
      $("#contact-form").reset();
      $("#form-result").hidden = true;
      toast(say("Brouillon effacé", "Draft cleared"));
    }
    if (button.hasAttribute("data-clear-local")) {
      for (const key of ["theme", "language", "saved", "view", "draft"]) remove(key);
      saved = new Set();
      theme = "light";
      language = "fr";
      view = "grid";
      refreshPreferences();
      $("#contact-form")?.reset();
      if ($("#form-result")) $("#form-result").hidden = true;
      toast("Les données locales ont été effacées.");
      closeDialog($("#privacy-dialog"));
    }
  });
  document.addEventListener("input", (event) => {
    if (event.target.id === "project-search") {
      search = event.target.value;
      updateListing(true);
    }
    if (event.target.id === "command-input") renderCommands();
  });
  document.addEventListener("change", (event) => {
    if (event.target.id === "project-sort") {
      sort = event.target.value;
      updateListing(true);
    }
  });
  document.addEventListener("keydown", (event) => {
    const typing = event.target.matches("input, textarea, select, [contenteditable=true]");
    if (
      ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") ||
      (event.key === "/" && !typing && !$$("dialog[open]").length)
    ) {
      event.preventDefault();
      showDialog("command-dialog");
      return;
    }
    if ($("#command-dialog").open) {
      const items = $$("[data-command-item]").filter((link) => !link.hidden);
      if (["ArrowDown", "ArrowUp"].includes(event.key) && items.length) {
        event.preventDefault();
        commandIndex =
          (commandIndex + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach((link, i) => link.classList.toggle("is-selected", i === commandIndex));
        items[commandIndex].scrollIntoView({ block: "nearest" });
      }
      if (event.key === "Enter" && event.target.id === "command-input" && items.length) {
        event.preventDefault();
        items[commandIndex].click();
      }
    }
    if ($("#gallery-dialog").open && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      stepGallery(event.key === "ArrowLeft" ? -1 : 1);
    }
    if (event.key === "Escape") closeMenu();
  });
  systemTheme.addEventListener("change", () => {
    if (theme === "system") applyTheme();
  });
  window.addEventListener("storage", (event) => {
    if (event.key === "yt-saved" || event.key === null) {
      saved = readSaved();
      syncSaved();
      updateListing();
    }
    if (event.key === "yt-theme" || event.key === null) {
      theme = ["light", "dark", "system"].includes(read("theme")) ? read("theme") : "light";
      applyTheme();
    }
  });
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  initializePage();
  window.setupPortfolioNavigation({
    beforeNavigate: saveDraft,
    afterNavigate: initializePage,
  });
})();
