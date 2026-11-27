const applications = [
  {
    id: "hyper-multimedia-manager",
    name: "Hyper Multimedia Manager",
    short: "HMM",
    index: "01",
    category: "media",
    categoryLabel: "Media",
    description: "Przeglądarka i menedżer multimediów do porządkowania codziennego archiwum plików.",
    type: "Przeglądarka multimediów",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "amber",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/supmanager/main/index.html",
    repo: "https://github.com/Dobrychlopak87/supmanager"
  },
  {
    id: "blink-me-too",
    name: "BlinkMeToo",
    short: "B!",
    index: "02",
    category: "communication",
    categoryLabel: "Komunikacja",
    description: "Aplikacja do komunikacji światłem latarki — prosty sygnał, który działa bez słów.",
    type: "Komunikacja światłem",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "mint",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/BlinkMeToo/main/index.html",
    repo: "https://github.com/Dobrychlopak87/BlinkMeToo"
  },
  {
    id: "nano4hr",
    name: "nano4HR",
    short: "n4",
    index: "03",
    category: "operations",
    categoryLabel: "Operacje",
    description: "Ewidencja czasu pracy, BHP i zarządzanie HR w monolitycznej aplikacji SPA działającej offline.",
    type: "HR / praca offline",
    availability: "available",
    availabilityLabel: "Natywny podgląd",
    color: "blue",
    featured: true,
    preview: "https://dobrychlopak87.github.io/nano4HR/",
    repo: "https://github.com/Dobrychlopak87/nano4HR",
    story: "Powstała w 100% na ekranie telefonu — bez komputera, IDE i płatnych narzędzi. Monolityczny plik HTML (~514 KB) działa bez zależności zewnętrznych i oferuje lokalne eksporty ZIP, Excel, CSV, PDF oraz backup profilu do JSON."
  },
  {
    id: "ocroute",
    name: "OCRoute",
    short: "OCR",
    index: "04",
    category: "operations",
    categoryLabel: "Operacje",
    description: "Skaner etykiet OCR i planer doręczeń dla pracy, w której liczy się szybki odczyt danych.",
    type: "OCR / logistyka",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "violet",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/OCRoute/main/index.html",
    repo: "https://github.com/Dobrychlopak87/OCRoute"
  },
  {
    id: "portal-66600",
    name: "66600.PL",
    short: "66",
    index: "05",
    category: "publishing",
    categoryLabel: "Publikacja",
    description: "Lokalny portal społecznościowy — informacje, historie i głos miejsca w jednym adresie.",
    type: "Portal społecznościowy",
    availability: "available",
    availabilityLabel: "Działa online",
    color: "red",
    preview: "https://66600.gt.tc/",
    repo: null
  },
  {
    id: "skaner-ocr",
    name: "SkanerOCR",
    short: "S/O",
    index: "06",
    category: "operations",
    categoryLabel: "Operacje",
    description: "Lekki podgląd aplikacji OCR do szybkiego skanowania i pracy z rozpoznanym tekstem.",
    type: "OCR / narzędzie",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "teal",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/SkanerOCR/main/index.html",
    repo: "https://github.com/Dobrychlopak87/SkanerOCR"
  },
  {
    id: "qr-gen",
    name: "QR-gen",
    short: "QR",
    index: "07",
    category: "tools",
    categoryLabel: "Narzędzia",
    description: "Generator kodów QR do szybkiego zamieniania adresów i danych w gotowy kod.",
    type: "Generator / utility",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "black",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/QR-gen/main/index.html",
    repo: "https://github.com/Dobrychlopak87/QR-gen"
  },
  {
    id: "kurier-ai",
    name: "KurierAI",
    short: "KAI",
    index: "08",
    category: "operations",
    categoryLabel: "Operacje",
    description: "Projekt pozostaje prywatny. Publiczny podgląd wymaga opublikowania aplikacji na hostingu.",
    type: "Projekt prywatny",
    availability: "private",
    availabilityLabel: "Brak publicznego podglądu",
    color: "slate",
    preview: null,
    repo: "https://github.com/Dobrychlopak87/KurierAI"
  },
  {
    id: "text-editor",
    name: "Edytor tekstu",
    short: "TXT",
    index: "09",
    category: "tools",
    categoryLabel: "Narzędzia",
    description: "Lokalny edytor plików tekstowych z wyszukiwaniem i zapisem bez wychodzenia z przeglądarki.",
    type: "Edytor lokalny",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "blue",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/ByDBDevStudio/main/apps/text-editor/index.html",
    repo: "https://github.com/Dobrychlopak87/ByDBDevStudio/tree/main/apps/text-editor"
  },
  {
    id: "dbdevil-convert",
    name: "DBDevil CONVERT",
    short: "CON",
    index: "10",
    category: "tools",
    categoryLabel: "Narzędzia",
    description: "Zestaw lokalnych narzędzi dla deweloperów do szybkiej konwersji danych w przeglądarce.",
    type: "Dev tools",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "amber",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/ByDBDevStudio/main/apps/dbdevil-convert/index.html",
    repo: "https://github.com/Dobrychlopak87/ByDBDevStudio/tree/main/apps/dbdevil-convert"
  },
  {
    id: "image-base64",
    name: "Konwerter obrazów Base64",
    short: "B64",
    index: "11",
    category: "media",
    categoryLabel: "Media",
    description: "Konwertuj obrazy do Base64, Data URI, HTML lub CSS bez wysyłania plików na serwer.",
    type: "Obrazy / konwerter",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "mint",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/ByDBDevStudio/main/apps/image-base64/index.html",
    repo: "https://github.com/Dobrychlopak87/ByDBDevStudio/tree/main/apps/image-base64"
  },
  {
    id: "zip-to-text",
    name: "Konwerter ZIP do TXT/JSON",
    short: "ZIP",
    index: "12",
    category: "tools",
    categoryLabel: "Narzędzia",
    description: "Rozpakuj ZIP w przeglądarce i eksportuj pliki do TXT, JSON lub HTML — lokalnie i wygodnie.",
    type: "Pliki / konwerter",
    availability: "available",
    availabilityLabel: "Podgląd dostępny",
    color: "violet",
    preview: "https://rawcdn.githack.com/Dobrychlopak87/ByDBDevStudio/main/apps/zip-to-text/index.html",
    repo: "https://github.com/Dobrychlopak87/ByDBDevStudio/tree/main/apps/zip-to-text"
  }
];

const appsGrid = document.querySelector("#apps-grid");
const searchInput = document.querySelector("#search-input");
const availabilityFilter = document.querySelector("#availability-filter");
const resultCount = document.querySelector("#result-count");
const clearFilters = document.querySelector("#clear-filters");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#details-dialog");
const dialogClose = document.querySelector("#dialog-close");
let activeCategory = "all";

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;"
}[character]));

function visualMarkup(app, dialogMode = false) {
  return `<div class="visual-orb"></div><div class="visual-orbit"></div><span class="visual-corner">${escapeHtml(app.index)} / ${escapeHtml(app.categoryLabel.toUpperCase())}</span><span class="visual-mark">${escapeHtml(app.short)}<small>${dialogMode ? "DBDEVSTUDIO" : escapeHtml(app.type.toUpperCase())}</small></span>`;
}

function cardMarkup(app) {
  const isAvailable = app.availability === "available";
  const previewButton = isAvailable
    ? `<a class="button button-primary" href="${app.preview}" target="_blank" rel="noopener noreferrer">Otwórz aplikację <span class="button-arrow" aria-hidden="true">↗</span></a>`
    : `<span class="button button-disabled" title="Ta aplikacja nie ma publicznego podglądu">Podgląd niedostępny</span>`;
  const repoButton = app.repo
    ? `<a class="button button-ghost" href="${app.repo}" target="_blank" rel="noopener noreferrer">Repozytorium <span class="button-arrow" aria-hidden="true">↗</span></a>`
    : "";

  return `<article class="app-card${app.featured ? " is-featured" : ""}${!isAvailable ? " is-unavailable" : ""}" data-id="${app.id}">
    <div class="app-visual visual-${app.color}" aria-hidden="true">${visualMarkup(app)}</div>
    <div class="app-card-body">
      <div class="card-topline"><h3 class="app-name">${escapeHtml(app.name)}</h3><span class="app-index">${escapeHtml(app.index)}</span></div>
      <p class="app-description">${escapeHtml(app.description)}</p>
      <div class="card-meta"><span class="meta-pill">${escapeHtml(app.categoryLabel)}</span><span class="meta-pill ${isAvailable ? "available" : "private"}">${escapeHtml(app.availabilityLabel)}</span></div>
      <div class="card-actions">${previewButton}<button class="button button-ghost details-button" type="button" data-details="${app.id}">Szczegóły</button>${repoButton}</div>
    </div>
  </article>`;
}

function filteredApps() {
  const term = searchInput.value.trim().toLowerCase();
  const availability = availabilityFilter.value;
  return applications.filter((app) => {
    const matchesCategory = activeCategory === "all" || app.category === activeCategory;
    const matchesAvailability = availability === "all" || app.availability === availability;
    const searchText = `${app.name} ${app.description} ${app.categoryLabel} ${app.type}`.toLowerCase();
    return matchesCategory && matchesAvailability && (!term || searchText.includes(term));
  });
}

function render() {
  const visibleApps = filteredApps();
  appsGrid.innerHTML = visibleApps.map(cardMarkup).join("");
  resultCount.textContent = visibleApps.length;
  emptyState.hidden = visibleApps.length !== 0;
  appsGrid.hidden = visibleApps.length === 0;
  const hasFilters = searchInput.value.trim() || activeCategory !== "all" || availabilityFilter.value !== "all";
  clearFilters.hidden = !hasFilters;
  document.querySelectorAll(".details-button").forEach((button) => button.addEventListener("click", () => openDetails(button.dataset.details)));
}

function openDetails(id) {
  const app = applications.find((item) => item.id === id);
  if (!app) return;
  const isAvailable = app.availability === "available";
  document.querySelector("#dialog-visual").className = `dialog-visual visual-${app.color}`;
  document.querySelector("#dialog-visual").innerHTML = visualMarkup(app, true);
  document.querySelector("#dialog-kicker").innerHTML = `<span class="eyebrow-line"></span> ${escapeHtml(app.categoryLabel)} / ${escapeHtml(app.type)}`;
  document.querySelector("#dialog-title").textContent = app.name;
  document.querySelector("#dialog-description").textContent = app.description;
  document.querySelector("#dialog-facts").innerHTML = `<span class="meta-pill ${isAvailable ? "available" : "private"}">${escapeHtml(app.availabilityLabel)}</span><span class="meta-pill">aplikacja ${escapeHtml(app.index)}</span>`;
  document.querySelector("#dialog-story").textContent = app.story || (isAvailable ? "Podgląd otwiera aplikację bezpośrednio, bez strony htmlpreview.github.io. Operacje na plikach pozostają po stronie Twojej przeglądarki, jeśli aplikacja tak działa." : "Repozytorium jest prywatne, dlatego w katalogu nie ma publicznego podglądu tej aplikacji.");
  document.querySelector("#dialog-links").innerHTML = `${isAvailable ? `<a class="button button-primary" href="${app.preview}" target="_blank" rel="noopener noreferrer">Otwórz aplikację <span class="button-arrow" aria-hidden="true">↗</span></a>` : ""}${app.repo ? `<a class="button button-ghost" href="${app.repo}" target="_blank" rel="noopener noreferrer">Repozytorium <span class="button-arrow" aria-hidden="true">↗</span></a>` : ""}`;
  dialog.showModal();
  document.body.classList.add("modal-open");
}

function closeDetails() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
  render();
}));
searchInput.addEventListener("input", render);
availabilityFilter.addEventListener("change", render);
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  availabilityFilter.value = "all";
  activeCategory = "all";
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item.dataset.category === "all"));
  render();
  searchInput.focus();
});
document.querySelector("#empty-reset").addEventListener("click", () => clearFilters.click());
dialogClose.addEventListener("click", closeDetails);
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDetails(); });
dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && dialog.open) closeDetails();
});

render();
