"use strict";

const storageKey = "vitrine.ciup.demo.v1";
const pageSize = 7;
const $ = (id) => document.getElementById(id);
const today = new Date();
const monthFormat = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });
const dayFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" });
const dateFormat = new Intl.DateTimeFormat("fr-FR", { dateStyle: "short" });
const timeFormat = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" });
const palette = ["#8954ee", "#36bc78", "#579bea", "#d579c7", "#f4bb49", "#20b4ba", "#ed7766", "#a74074"];

function localDay(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return [date.getFullYear(), month, day].join("-");
}

function dateFromKey(key) {
  return new Date(key + "T12:00:00");
}

function normalized(text) {
  return text.trim().normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("fr");
}

function sortedLabels(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "fr"));
}

// Les bâtiments reprennent les visuels du projet Swing. Les inscriptions sont fictives.
function sampleData() {
  const houses = [
    ["avicenne", "Fondation Avicenne", 111, 10, 1969, "avicienne"],
    ["daubie", "Résidence Julie-Victoire Daubié", 84, 9, 2018, "daubie"],
    ["suisse", "Fondation Suisse", 46, 8, 1933, "suisse"],
    ["portugal", "Maison du Portugal", 118, 12, 1967, "portugal"],
    ["coree", "Maison de la Corée", 150, 10, 2018, "coree"],
    ["bourguiba", "Pavillon Habib Bourguiba", 98, 11, 2020, "bourguiba"],
    ["maroc", "Maison du Maroc", 102, 12, 1953, ""],
    ["japon", "Maison du Japon", 55, 7, 1929, ""],
  ].map(([id, name, capacity, nationalities, year, image]) => ({
    id, name, capacity, nationalities, year, director: "",
    photo: image ? "images/" + image + ".jpg" : "",
  }));

  const groups = [
    ["avicenne", [
      ["Aya", "Delor", "Française"], ["Diego", "Milhan", "Portugaise"],
      ["Léna", "Valmont", "Française"], ["Mina", "Avelar", "Brésilienne"],
      ["Lino", "Verdel", "Italienne"], ["Lila", "Dorne", "Canadienne"],
    ]],
    ["daubie", [["Malo", "Rivel", "Française"], ["Sofia", "Menvar", "Espagnole"]]],
    ["suisse", [
      ["Léon", "Alven", "Suisse"], ["Noa", "Dorin", "Canadienne"],
      ["Dina", "Mersel", "Française"], ["Julia", "Méran", "Allemande"],
    ]],
    ["portugal", [
      ["Inês", "Valeiro", "Portugaise"], ["Rita", "Solerin", "Espagnole"],
      ["Tiago", "Dovale", "Portugaise"], ["Rian", "Varedo", "Brésilienne"],
    ]],
    ["coree", [["Jina", "Nam", "Coréenne"], ["Élia", "Lordan", "Française"], ["Sora", "Han", "Coréenne"]]],
    ["bourguiba", [["Nora", "Dalil", "Tunisienne"], ["Rami", "Nabil", "Tunisienne"]]],
    ["maroc", [
      ["Samir", "Rami", "Marocaine"], ["Maya", "Neral", "Française"],
      ["Yara", "Azem", "Marocaine"], ["Nour", "Selmi", "Tunisienne"],
    ]],
    ["japon", [["Hana", "Mizuna", "Japonaise"], ["Nino", "Dalver", "Italienne"], ["Ren", "Amani", "Japonaise"]]],
  ];

  const members = groups.flatMap(([houseId, residents], group) => residents.map(
    ([firstName, lastName, nationality], index) => {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - group - index * 2 - 1);
      return {
        houseId, firstName, lastName, nationality, date: localDay(date),
        time: String(10 + index).padStart(2, "0") + ":30",
        duration: 6 + index,
        level: "",
        school: "",
      };
    },
  ));
  return { houses, members };
}

function loadData() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (Array.isArray(saved?.houses) && Array.isArray(saved?.members)) return saved;
  } catch {
    // La démonstration peut aussi fonctionner en mémoire.
  }
  return sampleData();
}

let data = loadData();
let chartHouse = data.houses[0]?.id;
let currentHouse = null;
let activityPage = 0;
let toastTimer;
let houseRequest = 0;
let pendingConfirmation = null;

const activityFilters = $("activity-filters");
const memberFilters = $("member-filters");
const studentForm = $("student-form");
const houseForm = $("house-form");
const dialog = $("confirmation");

function notify(message) {
  clearTimeout(toastTimer);
  $("status").textContent = message;
  toastTimer = setTimeout(() => { $("status").textContent = ""; }, 4800);
}

function saveData(message) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    message += " Vos essais seront effacés au rechargement.";
  }
  notify(message);
}

function makeElement(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function setOptions(select, choices, emptyLabel) {
  const previous = select.value;
  select.replaceChildren(new Option(emptyLabel, ""), ...choices.map(
    ([value, label]) => new Option(label, value),
  ));
  if (choices.some(([value]) => value === previous)) select.value = previous;
}

const getHouse = (id) => data.houses.find((house) => house.id === id);
const memberName = (member) => [member.firstName, member.lastName].join(" ");
const nationalityLabel = (member) => member.nationality || "Non renseignée";
const houseChoices = () => data.houses.map((house) => [house.id, house.name]);

function refreshFilters(form, members) {
  const fields = form.elements;
  const nationalities = sortedLabels(members.map(nationalityLabel));
  const dates = [...new Set(members.map((member) => member.date))].sort().reverse();
  setOptions(fields.nationality, nationalities.map((value) => [value, value]), "Toutes");
  setOptions(fields.date, dates.map((value) => [value, dateFormat.format(dateFromKey(value))]), "Toutes");
}

function filterMembers(form, members) {
  const { nationality, date, house } = form.elements;
  return members.filter((member) =>
    (!nationality.value || nationalityLabel(member) === nationality.value)
    && (!date.value || member.date === date.value)
    && (!house?.value || member.houseId === house.value),
  ).sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
}

function showRows(tbody, rows) {
  tbody.replaceChildren(...rows.map((values) => {
    const row = document.createElement("tr");
    row.append(...values.map((value) => makeElement("td", value)));
    return row;
  }));
}

function renderActivity() {
  const filtered = filterMembers(activityFilters, data.members);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  activityPage = Math.min(activityPage, pageCount - 1);
  const rows = filtered.slice(activityPage * pageSize, (activityPage + 1) * pageSize);
  showRows($("activity-rows"), rows.map((member) => [
    memberName(member), nationalityLabel(member), getHouse(member.houseId).name,
    "Ajout", dateFormat.format(dateFromKey(member.date)), member.time,
  ]));
  $("activity-empty").hidden = filtered.length > 0;
  $("page-previous").disabled = activityPage === 0;
  $("page-next").disabled = activityPage + 1 === pageCount;
  const count = filtered.length + (filtered.length > 1 ? " inscriptions" : " inscription");
  $("activity-count").textContent = pageCount > 1
    ? count + " · Page " + (activityPage + 1) + " sur " + pageCount
    : count;
}

function renderChart() {
  const house = getHouse(chartHouse) || data.houses[0];
  chartHouse = house?.id;
  const residents = data.members.filter((member) => member.houseId === chartHouse);
  const counts = new Map();
  residents.forEach((member) => {
    const nationality = nationalityLabel(member);
    counts.set(nationality, (counts.get(nationality) || 0) + 1);
  });

  const legend = $("chart-legend");
  const donut = $("donut");
  $("chart-house").textContent = house?.name || "Aucune maison";
  $("chart-total").textContent = residents.length;
  document.querySelectorAll("[data-chart-shift]").forEach((button) => {
    button.disabled = data.houses.length < 2;
  });
  legend.replaceChildren();
  donut.style.removeProperty("--segments");
  if (residents.length === 0) {
    legend.append(makeElement("li", "Aucun étudiant inscrit."));
    return;
  }

  let start = 0;
  const stops = [];
  [...counts.entries()].sort((a, b) => b[1] - a[1]).forEach(([nationality, count], index) => {
    const color = palette[index % palette.length];
    const end = index === counts.size - 1 ? 100 : start + count / residents.length * 100;
    stops.push(color + " " + start + "% " + end + "%");
    start = end;
    const row = document.createElement("li");
    const dot = makeElement("span", "", "dot");
    dot.style.setProperty("--segment-color", color);
    row.append(dot, makeElement("span", nationality), makeElement("strong", count));
    legend.append(row);
  });
  donut.style.setProperty("--segments", "conic-gradient(" + stops.join(", ") + ")");
}

function renderDashboard() {
  $("house-total").textContent = data.houses.length;
  $("student-total").textContent = data.members.length;
  $("nationality-total").textContent = new Set(data.members.map((member) => normalized(member.nationality)).filter(Boolean)).size;
  renderChart();
  renderActivity();
}

function renderHouses() {
  $("houses-empty").hidden = data.houses.length > 0;
  $("house-cards").replaceChildren(...data.houses.map((house) => {
    const card = makeElement("button", undefined, "card house-card");
    card.type = "button";
    const cover = house.photo
      ? makeElement("img", undefined, "house-cover")
      : makeElement("span", house.name[0].toLocaleUpperCase("fr"), "house-cover house-placeholder");
    if (house.photo) {
      cover.src = house.photo;
      cover.alt = "";
      cover.loading = "lazy";
    } else {
      cover.setAttribute("aria-hidden", "true");
    }
    const description = makeElement("span", undefined, "house-card-body");
    description.append(
      makeElement("strong", house.name),
      makeElement("small", house.capacity + (house.capacity > 1 ? " logements" : " logement")),
    );
    card.append(cover, description);
    card.addEventListener("click", () => openHouse(house.id));
    return card;
  }));
}

function renderMembers() {
  const residents = data.members.filter((member) => member.houseId === currentHouse);
  const filtered = filterMembers(memberFilters, residents);
  $("member-count").textContent = filtered.length;
  showRows($("member-rows"), filtered.map((member) => [
    memberName(member), nationalityLabel(member), member.level || "—", member.school || "—",
    dateFormat.format(dateFromKey(member.date)) + " · " + member.time,
    member.duration + " mois",
  ]));
  $("members-empty").hidden = filtered.length > 0;
}

function openHouse(id) {
  const house = getHouse(id);
  if (!house) return;
  currentHouse = id;
  $("house-title").textContent = house.name;
  $("house-capacity").textContent = house.capacity;
  $("house-nationalities").textContent = house.nationalities;
  $("house-year").textContent = house.year;
  $("house-director").textContent = house.director;
  $("director-fact").hidden = house.director === "";
  const image = $("house-image");
  image.hidden = !house.photo;
  if (house.photo) image.src = house.photo;
  else image.removeAttribute("src");
  refreshFilters(memberFilters, data.members.filter((member) => member.houseId === id));
  memberFilters.elements.nationality.value = "";
  memberFilters.elements.date.value = "";
  renderMembers();
  showScreen("house");
}

function showError(id, message = "") {
  $(id).textContent = message;
  $(id).hidden = !message;
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => { screen.hidden = screen.id !== name; });
  document.querySelectorAll(".menu [data-view]").forEach((button) => {
    const active = button.dataset.view === (name === "house" ? "houses" : name);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  $(name + "-title").focus();
}

function refreshData() {
  setOptions(activityFilters.elements.house, houseChoices(), "Toutes");
  setOptions(studentForm.elements.house, houseChoices(), "Choisir une maison");
  studentForm.querySelector('[type="submit"]').disabled = data.houses.length === 0;
  showError("student-error", data.houses.length === 0 ? "Ajoutez une maison avant d’inscrire un étudiant." : "");
  $("nationalities").replaceChildren(
    ...sortedLabels(data.members.map((member) => member.nationality).filter(Boolean))
      .map((value) => new Option(value)),
  );
  refreshFilters(activityFilters, data.members);
  renderDashboard();
  renderHouses();
}

function answerConfirmation(title, message, actionLabel, action) {
  $("confirmation-title").textContent = title;
  $("confirmation-text").textContent = message;
  $("confirmation-action").textContent = actionLabel;
  pendingConfirmation = action;
  dialog.returnValue = "cancel";
  dialog.showModal();
}

dialog.addEventListener("close", () => {
  const action = pendingConfirmation;
  pendingConfirmation = null;
  if (dialog.returnValue === "confirm" && action) action();
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.view));
});

document.querySelectorAll("[data-cancel]").forEach((button) => {
  button.addEventListener("click", () => {
    button.form.reset();
    if (button.form === houseForm) showError("house-error");
    if (button.form === studentForm && data.houses.length) showError("student-error");
    showScreen(button.dataset.cancel);
  });
});

document.querySelectorAll("[data-chart-shift]").forEach((button) => {
  button.addEventListener("click", () => {
    const position = data.houses.findIndex((house) => house.id === chartHouse);
    chartHouse = data.houses[(position + Number(button.dataset.chartShift) + data.houses.length) % data.houses.length].id;
    renderChart();
  });
});

activityFilters.addEventListener("change", () => { activityPage = 0; renderActivity(); });
activityFilters.addEventListener("reset", () => queueMicrotask(() => { activityPage = 0; renderActivity(); }));
$("page-previous").addEventListener("click", () => { activityPage -= 1; renderActivity(); });
$("page-next").addEventListener("click", () => { activityPage += 1; renderActivity(); });
memberFilters.addEventListener("change", renderMembers);
memberFilters.addEventListener("reset", () => queueMicrotask(renderMembers));

$("enrol-in-house").addEventListener("click", () => {
  studentForm.elements.house.value = currentHouse;
  showScreen("student");
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(studentForm);
  const firstName = fields.get("firstName").trim();
  const lastName = fields.get("lastName").trim();
  const duration = Number(fields.get("duration"));
  const house = getHouse(fields.get("house"));
  if (!firstName || !lastName || !house || !Number.isInteger(duration) || duration < 1) {
    showError("student-error", "Indiquez le prénom, le nom, la maison et une durée entière positive.");
    return;
  }
  const submittedAt = new Date();
  const member = {
    firstName, lastName, houseId: house.id, duration,
    nationality: fields.get("nationality").trim(),
    level: fields.get("level").trim(),
    school: fields.get("school").trim(),
    date: localDay(submittedAt),
    time: timeFormat.format(submittedAt),
  };
  data.members.unshift(member);
  chartHouse = house.id;
  studentForm.reset();
  activityFilters.reset();
  showScreen("dashboard");
  refreshData();
  saveData(memberName(member) + " est inscrit à " + house.name + ".");
});

async function resizePhoto(file) {
  if (!file.size) return "";
  if (file.size > 12 * 1024 * 1024 || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    throw new Error("Choisissez une image JPEG, PNG ou WebP de 12 Mo maximum.");
  }
  const url = URL.createObjectURL(file);
  try {
    const photo = new Image();
    photo.src = url;
    await photo.decode();
    const scale = Math.min(1, 820 / Math.max(photo.naturalWidth, photo.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(photo.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(photo.naturalHeight * scale));
    const context = canvas.getContext("2d");
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(photo, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.78);
  } catch {
    throw new Error("Cette image n’a pas pu être ouverte.");
  } finally {
    URL.revokeObjectURL(url);
  }
}

houseForm.addEventListener("reset", () => { houseRequest += 1; });
houseForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = houseForm.querySelector('[type="submit"]');
  if (submit.disabled) return;
  const request = ++houseRequest;
  const fields = new FormData(houseForm);
  const name = fields.get("name").trim();
  showError("house-error");
  if (!name || data.houses.some((house) => normalized(house.name) === normalized(name))) {
    showError("house-error", name ? "Ce nom de maison existe déjà." : "Renseignez le nom de l’établissement.");
    return;
  }

  submit.disabled = true;
  try {
    const photo = await resizePhoto(fields.get("photo"));
    if (request !== houseRequest) return;
    const house = {
      id: crypto.randomUUID(), name, photo,
      capacity: Number(fields.get("capacity")),
      nationalities: Number(fields.get("nationalities")),
      year: Number(fields.get("year")),
      director: fields.get("director").trim(),
    };
    data.houses.push(house);
    houseForm.reset();
    refreshData();
    if (!$("new-house").hidden) openHouse(house.id);
    saveData(name + " a été ajoutée.");
  } catch (error) {
    if (request === houseRequest) showError("house-error", error.message);
  } finally {
    submit.disabled = false;
  }
});

$("delete-house").addEventListener("click", () => {
  const house = getHouse(currentHouse);
  answerConfirmation(
    "Supprimer cette maison ?",
    house.name + " et ses inscriptions seront retirées de la démonstration.",
    "Supprimer",
    () => {
      data.houses = data.houses.filter(({ id }) => id !== house.id);
      data.members = data.members.filter((member) => member.houseId !== house.id);
      currentHouse = null;
      refreshData();
      showScreen("houses");
      saveData(house.name + " a été supprimée.");
    },
  );
});

$("reset-demo").addEventListener("click", () => {
  answerConfirmation(
    "Réinitialiser la démo ?",
    "Les données d’exemple seront restaurées dans cet onglet.",
    "Réinitialiser",
    () => {
      data = sampleData();
      chartHouse = data.houses[0].id;
      currentHouse = null;
      studentForm.reset();
      houseForm.reset();
      showError("house-error");
      activityFilters.reset();
      refreshData();
      showScreen("dashboard");
      saveData("La démonstration a été réinitialisée.");
    },
  );
});

const events = [
  [0, 7, "Atelier lecture", "Maison du Maroc", "14h00 – 15h00"],
  [0, 14, "Soirée étudiante", "Maison du Maroc", "20h00 – 22h00"],
  [0, 18, "Cuisine cambodgienne", "Maison du Cambodge", "12h00 – 14h00"],
  [0, 21, "Karaoké", "Maison de Norvège", "19h30 – 23h00"],
  [1, 5, "Atelier bento", "Maison du Japon", "11h00 – 13h00"],
  [1, 12, "Fête de l’érable", "Maison du Canada", "13h00 – 16h00"],
  [1, 16, "Tournoi de jeux vidéo", "Maison du Japon", "18h00 – 22h00"],
  [2, 3, "Samba et percussions", "Maison du Brésil", "16h00 – 18h00"],
].map(([offset, day, title, house, time]) => ({
  date: localDay(new Date(today.getFullYear(), today.getMonth() + offset, day)),
  title, house, time,
}));

const eventSearch = $("event-search");
let shownMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDay = "";

function renderEvents() {
  const query = normalized(eventSearch.value);
  const title = $("events-heading");
  let shownEvents;
  if (query) {
    title.textContent = "Résultats de la recherche";
    shownEvents = events.filter((event) => normalized(event.house).includes(query));
  } else if (selectedDay) {
    title.textContent = "Événements du " + dayFormat.format(dateFromKey(selectedDay));
    shownEvents = events.filter((event) => event.date === selectedDay);
  } else {
    title.textContent = "Événements à venir";
    shownEvents = events.filter((event) => event.date >= localDay(today)).slice(0, 2);
  }
  const list = $("events-list");
  list.replaceChildren(...shownEvents.map((event) => {
    const item = makeElement("li", undefined, "event");
    const date = dayFormat.format(dateFromKey(event.date));
    item.append(makeElement("strong", event.title), makeElement("span", event.house + " · " + date + " · " + event.time));
    return item;
  }));
  if (!shownEvents.length) list.append(makeElement("li", "Aucun événement.", "empty-message"));
}

function renderCalendar() {
  $("month-label").textContent = monthFormat.format(shownMonth);
  const grid = $("calendar-days");
  const year = shownMonth.getFullYear();
  const month = shownMonth.getMonth();
  const offset = (shownMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  grid.replaceChildren(...Array.from({ length: offset + daysInMonth }, (_, index) => {
    const day = index - offset + 1;
    if (day < 1) return document.createElement("span");
    const date = new Date(year, month, day);
    const key = localDay(date);
    const hasEvent = events.some((event) => event.date === key);
    const button = makeElement("button", day, hasEvent ? "has-event" : "");
    button.type = "button";
    button.setAttribute("aria-label", dayFormat.format(date) + (hasEvent ? ", avec événement" : ""));
    button.setAttribute("aria-pressed", String(selectedDay === key));
    if (key === localDay(today)) button.setAttribute("aria-current", "date");
    button.addEventListener("click", () => {
      selectedDay = key;
      eventSearch.value = "";
      grid.querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-pressed", "true");
      renderEvents();
    });
    return button;
  }));
}

document.querySelectorAll("[data-month-shift]").forEach((button) => {
  button.addEventListener("click", () => {
    shownMonth = new Date(shownMonth.getFullYear(), shownMonth.getMonth() + Number(button.dataset.monthShift), 1);
    renderCalendar();
  });
});
eventSearch.addEventListener("input", renderEvents);

refreshData();
renderCalendar();
renderEvents();
