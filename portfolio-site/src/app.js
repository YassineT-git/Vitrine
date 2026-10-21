/**
 * INTERACTIONS DU SITE
 * Les fonctions ci-dessous se chargent des filtres, des favoris, du contact
 * et des préférences. L'animation et la navigation sont isolées dans des modules.
 * Le HTML est généré dans ui/ ; les textes modifiables sont dans data/.
 */
import { renderPage } from "./ui/pages.js";
import { projects } from "./data/projects.js";
import { profile } from "./data/profile.js";
import { t, tr } from "./data/translations.js";
import { pageTitles } from "./data/routes.js";
import { icon } from "./ui/icons.js";
import { esc } from "./ui/markup.js";
import { $, $$, normalize } from "./lib/dom.js";
import { read, write, readJSON } from "./lib/storage.js";
import {
  transitionContent,
  setupAccordions,
  animateDialogIn,
  closeDialog,
} from "./motion.js";
import { createNavigation } from "./navigation.js";

// État courant (conservé lors des changements de page).
let page = document.body.dataset.page;
let lang = read("language", "fr") === "en" ? "en" : "fr";
let saved = new Set(
  (Array.isArray(readJSON("saved", [])) ? readJSON("saved", []) : []).filter((id) =>
    projects.some((p) => p.id === id),
  ),
);
let theme = ["light", "dark", "system"].includes(read("theme", "light"))
  ? read("theme", "light")
  : "light";
let filter = "all";
let search = "";
let sort = "default";
function readListingState(url = new URL(location.href)) {
  const query = url.searchParams;
  filter = ["all", "dev", "systems", "saved"].includes(query.get("filtre"))
    ? query.get("filtre")
    : "all";
  search = query.get("recherche") || "";
  sort = query.get("tri") === "az" ? "az" : "default";
}
readListingState();
let view = read("view", "grid") === "list" ? "list" : "grid";
let toastTimer;
let galleryState = null;
let commandIndex = 0;
const systemMedia = matchMedia("(prefers-color-scheme:dark)");

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}
function applyTheme() {
  const resolved = theme === "system" ? (systemMedia.matches ? "dark" : "light") : theme;
  document.documentElement.dataset.theme = resolved;
  $('meta[name="theme-color"]').content = resolved === "dark" ? "#141516" : "#ffffff";
  $$("[data-set-theme]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.setTheme === theme)),
  );
  const trigger = $("button[data-theme]");
  if (trigger) trigger.innerHTML = icon(resolved === "dark" ? "moon" : "sun");
}
systemMedia.addEventListener("change", () => {
  if (theme === "system") applyTheme();
});

// Favoris : le même état alimente les cartes et les fiches.
function syncSaved() {
  $$("[data-save]").forEach((button) => {
    const p = projects.find((p) => p.id === button.dataset.save);
    const state = saved.has(p.id);
    button.setAttribute("aria-pressed", String(state));
    const label = state
      ? lang === "fr"
        ? "Retirer de ma sélection"
        : "Remove from collection"
      : t(lang).save;
    button.setAttribute("aria-label", label + " : " + tr(p.title, lang));
    const span = $("span", button);
    if (span) span.textContent = label;
  });
  $$(".saved-count").forEach((el) => (el.textContent = saved.size));
}
function syncURL() {
  if (page !== "projects") return;
  const url = new URL(location.href);
  for (const key of ["filtre", "recherche", "tri"]) url.searchParams.delete(key);
  if (filter !== "all") url.searchParams.set("filtre", filter);
  if (search) url.searchParams.set("recherche", search);
  if (sort === "az") url.searchParams.set("tri", sort);
  history.replaceState(history.state, "", url.pathname + url.search + url.hash);
}

// Filtrage des cartes existantes, sans reconstruire les boutons focalisés.
function updateListing(updateURL = true) {
  if (page !== "projects") return;
  const s = t(lang),
    term = normalize(search.trim());
  const found = projects.filter(
    (p) =>
      (filter === "all" ||
        (filter === "saved" ? saved.has(p.id) : p.category === filter)) &&
      normalize(
        [
          tr(p.title, lang),
          tr(p.summary, lang),
          p.title.fr,
          p.title.en,
          ...p.tags,
          s[p.category],
        ].join(" "),
      ).includes(term),
  );
  if (sort === "az")
    found.sort((a, b) => tr(a.title, lang).localeCompare(tr(b.title, lang), lang));
  const grid = $("#project-grid");
  // Garder les cartes existantes évite de perdre le focus quand un favori change.
  const cards = new Map(
    $$(".project-card", grid).map((card) => [card.dataset.project, card]),
  );
  found.forEach((p) => {
    const card = cards.get(p.id);
    card.hidden = false;
    grid.append(card);
  });
  projects
    .filter((p) => !found.includes(p))
    .forEach((p) => {
      cards.get(p.id).hidden = true;
    });
  grid.classList.toggle("list-view", view === "list");
  grid.hidden = found.length === 0;
  $("#empty-state").hidden = found.length !== 0;
  $("#results-count").textContent =
    `${found.length} ${found.length === 1 ? s.result : s.results}`;
  $$("[data-filter]").forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $$("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("#project-search").value = search;
  $("#project-sort").value = sort;
  if (updateURL) syncURL();
  syncSaved();
}

// Recherche rapide : pages, projets et CV.
const commandItems = () => {
  const s = t(lang);
  return [
    {
      title: s.home,
      url: "index.html",
      type: s.command,
      ico: "arrow",
      keywords: "accueil home",
    },
    {
      title: s.projects,
      url: "projets.html",
      type: s.command,
      ico: "code",
      keywords: "projets projects",
    },
    {
      title: s.about,
      url: "parcours.html",
      type: s.command,
      ico: "arrow",
      keywords: "experience parcours journey formation cybersecurite cybersécurité",
    },
    {
      title: s.contact,
      url: "contact.html",
      type: s.command,
      ico: "mail",
      keywords: "email contact ecrire écrire",
    },
    ...projects.map((p) => ({
      title: tr(p.title, lang),
      url: p.file,
      type: s.projects,
      ico: p.category === "dev" ? "code" : "network",
      keywords: [p.title.fr, p.title.en, ...p.tags].join(" "),
    })),
    {
      title: s.viewCv,
      url: "assets/CV_Yassine.pdf",
      type: "PDF",
      ico: "download",
      keywords: "CV résumé resume curriculum vitae",
      external: true,
    },
  ];
};
function renderCommands() {
  const term = normalize($("#command-input").value);
  const items = commandItems().filter((x) =>
    normalize(x.title + " " + x.keywords).includes(term),
  );
  commandIndex = 0;
  $("#command-results").innerHTML = items.length
    ? items
        .map(
          (x, i) =>
            `<a class="command-result ${i === 0 ? "is-selected" : ""}" href="${x.url}" ${x.external ? 'target="_blank" rel="noopener"' : ""}>${icon(x.ico)}<span>${esc(x.title)}</span><small>${esc(x.type)}</small></a>`,
        )
        .join("")
    : `<p class="command-empty">${t(lang).commandEmpty}</p>`;
}
function showDialog(id) {
  const dialog = $("#" + id);
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
function openGallery(projectId, index) {
  galleryState = { projectId, index };
  renderGallery();
  showDialog("gallery-dialog");
}
function renderGallery() {
  const p = projects.find((x) => x.id === galleryState.projectId);
  const item = p.gallery[galleryState.index];
  const img = $("#lightbox-image");
  img.src = item.src;
  img.alt = tr(item.caption, lang);
  $("#lightbox-caption").textContent = tr(item.caption, lang);
  $("#lightbox-count").textContent = `${galleryState.index + 1} / ${p.gallery.length}`;
  $$("[data-gallery-prev],[data-gallery-next]").forEach(
    (b) => (b.disabled = p.gallery.length < 2),
  );
}
function stepGallery(amount) {
  if (!galleryState) return;
  const p = projects.find((x) => x.id === galleryState.projectId);
  galleryState.index =
    (galleryState.index + amount + p.gallery.length) % p.gallery.length;
  renderGallery();
}

// Brouillon du formulaire : enregistré uniquement dans ce navigateur.
function getDraft() {
  const draft = readJSON("draft", {});
  return draft && typeof draft === "object" && !Array.isArray(draft) ? draft : {};
}
function restoreDraft() {
  const form = $("#contact-form");
  if (!form) return;
  const draft = getDraft();
  for (const name of ["name", "email", "subject", "message"])
    if (typeof draft[name] === "string" && form.elements[name])
      form.elements[name].value = draft[name];
}
function saveDraft() {
  const form = $("#contact-form");
  if (!form) return;
  const data = Object.fromEntries(new FormData(form));
  write("draft", JSON.stringify(data));
}

// À rappeler après chaque changement de page ou de langue.
function initialize() {
  document.documentElement.lang = lang;
  setupAccordions();
  document.title =
    lang === "en"
      ? (page.startsWith("project-")
          ? tr(projects.find((p) => "project-" + p.id === page).title, lang)
          : t(lang)[page] || "Portfolio") + " — Yassine Tahiri"
      : pageTitles[page];
  applyTheme();
  syncSaved();
  updateListing(false);
  restoreDraft();
  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog(dialog);
    });
    dialog.addEventListener("close", () => {
      if (!$$("dialog[open]").length) document.body.classList.remove("dialog-open");
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          closeDialog(dialog);
      }
    });
  });
  if (page === "contact") {
    $("#contact-form").addEventListener("input", saveDraft);
    $("#contact-form").addEventListener("change", saveDraft);
    $("#contact-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      saveDraft();
      const data = new FormData(form);
      const name = String(data.get("name")).trim(),
        email = String(data.get("email")).trim(),
        message = String(data.get("message")).trim();
      const subject = t(lang)["subject" + data.get("subject")];
      const body = `${lang === "fr" ? "Bonjour Yassine," : "Hello Yassine,"}\n\n${message}\n\n${name}\n${email}`;
      const url =
        "mailto:" +
        profile.email +
        "?subject=" +
        encodeURIComponent(subject + " — " + name) +
        "&body=" +
        encodeURIComponent(body);
      $("#prepared-email").href = url;
      $("#form-result").hidden = false;
      location.href = url;
    });
  }
  updateProgress();
}
if (lang !== "fr") $("#app").innerHTML = renderPage(page, lang);
initialize();

// Une seule délégation des clics : pas de doublon après une navigation.
document.addEventListener("click", async (event) => {
  const button = event.target.closest("button,[data-command]");
  if (!button) return;
  if (button.hasAttribute("data-menu")) {
    const open = $(".site-header").classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(open));
    button.innerHTML = icon(open ? "close" : "menu");
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
    saveDraft();
    await transitionContent(
      () => {
        lang = lang === "fr" ? "en" : "fr";
        write("language", lang);
        const top = window.scrollY;
        $("#app").innerHTML = renderPage(page, lang);
        document.body.classList.remove("dialog-open");
        initialize();
        window.scrollTo({ top, behavior: "instant" });
        $("[data-language]").focus({ preventScroll: true });
      },
      { kind: "language" },
    );
  }
  if (button.hasAttribute("data-save")) {
    const id = button.dataset.save;
    const state = saved.has(id);
    if (state) saved.delete(id);
    else saved.add(id);
    write("saved", JSON.stringify([...saved]));
    syncSaved();
    updateListing();
    toast(state ? t(lang).removedToast : t(lang).savedToast);
    if (filter === "saved" && !saved.has(id) && page === "projects")
      $('[data-filter="saved"]').focus({ preventScroll: true });
  }
  if (button.hasAttribute("data-filter")) {
    filter = button.dataset.filter;
    updateListing();
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
    updateListing();
    $("#project-search").focus();
  }
  if (button.hasAttribute("data-gallery"))
    openGallery(button.dataset.gallery, Number(button.dataset.index));
  if (button.hasAttribute("data-gallery-prev")) stepGallery(-1);
  if (button.hasAttribute("data-gallery-next")) stepGallery(1);
  if (button.hasAttribute("data-copy")) {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast(t(lang).copied);
    } catch {
      toast(t(lang).copyFail);
    }
  }
  if (button.hasAttribute("data-clear-draft")) {
    try {
      localStorage.removeItem("yt-draft");
    } catch {}
    $("#contact-form").reset();
    $("#form-result").hidden = true;
    toast(t(lang).draftCleared);
  }
  if (button.hasAttribute("data-clear-local")) {
    for (const key of ["theme", "language", "saved", "view", "draft"]) {
      try {
        localStorage.removeItem("yt-" + key);
      } catch {}
    }
    saved = new Set();
    theme = "light";
    view = "grid";
    applyTheme();
    syncSaved();
    updateListing();
    const form = $("#contact-form");
    if (form) form.reset();
    toast(t(lang).cleared);
    closeDialog($("#privacy-dialog"));
  }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "project-search") {
    search = event.target.value;
    updateListing();
  }
  if (event.target.id === "command-input") renderCommands();
});
document.addEventListener("change", (event) => {
  if (event.target.id === "project-sort") {
    sort = event.target.value;
    updateListing();
  }
});
document.addEventListener("keydown", (event) => {
  const typing = event.target.matches("input,textarea,select,[contenteditable=true]");
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    showDialog("command-dialog");
    return;
  }
  if (event.key === "/" && !typing && !$$("dialog[open]").length) {
    event.preventDefault();
    showDialog("command-dialog");
    return;
  }
  if ($("#command-dialog").open) {
    const items = $$(".command-result");
    if ((event.key === "ArrowDown" || event.key === "ArrowUp") && items.length) {
      event.preventDefault();
      commandIndex =
        (commandIndex + (event.key === "ArrowDown" ? 1 : -1) + items.length) %
        items.length;
      items.forEach((a, i) => a.classList.toggle("is-selected", i === commandIndex));
      items[commandIndex].scrollIntoView({ block: "nearest" });
    }
    if (event.key === "Enter" && event.target.id === "command-input" && items.length) {
      event.preventDefault();
      items[commandIndex].click();
    }
  }
  if ($("#gallery-dialog").open) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepGallery(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepGallery(1);
    }
  }
  if (event.key === "Escape") {
    $(".site-header").classList.remove("menu-open");
    const menu = $("[data-menu]");
    menu.setAttribute("aria-expanded", "false");
    menu.innerHTML = icon("menu");
  }
});
window.addEventListener("storage", (event) => {
  if (event.key === "yt-saved") {
    const value = readJSON("saved", []);
    saved = new Set(
      (Array.isArray(value) ? value : []).filter((id) =>
        projects.some((p) => p.id === id),
      ),
    );
    syncSaved();
    updateListing(false);
  }
  if (event.key === "yt-theme") {
    const value = read("theme", "system");
    theme = ["light", "dark", "system"].includes(value) ? value : "system";
    applyTheme();
  }
});
function updateProgress() {
  const bar = $(".reading-progress span");
  if (!bar) return;
  const range = document.documentElement.scrollHeight - innerHeight;
  bar.style.width =
    (range > 0 ? Math.min(100, Math.max(0, (scrollY / range) * 100)) : 0) + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

// Navigation enrichie : les vrais liens HTML restent utilisables sans JavaScript.
createNavigation({
  getPage: () => page,
  beforeNavigate: saveDraft,
  render: (nextPage, url) => {
    page = nextPage;
    document.body.dataset.page = page;
    readListingState(url);
    $("#app").innerHTML = renderPage(page, lang);
    document.body.classList.remove("dialog-open");
    initialize();
    updateMetadata();
  },
});

function updateMetadata() {
  const project = projects.find((p) => page === "project-" + p.id);
  const description = project ? tr(project.summary, lang) : t(lang).homeIntro;
  for (const selector of [
    'meta[name="description"]',
    'meta[property="og:description"]',
  ]) {
    const meta = $(selector);
    if (meta) meta.content = description;
  }
  const title = $('meta[property="og:title"]');
  if (title) title.content = document.title;
}
updateMetadata();
