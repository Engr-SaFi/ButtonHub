
/* ==========================================
   BUTTONHUB - COMPLETE JAVASCRIPT
   10 categories x 30 buttons = 300 buttons
========================================== */

/* 1. CATEGORIES */

const categories = [
  { id: "gradient", name: "Gradient" },
  { id: "neon", name: "Neon" },
  { id: "outline", name: "Outline" },
  { id: "3d", name: "3D" },
  { id: "glow", name: "Glow" },
  { id: "animated", name: "Animated" },
  { id: "social", name: "Social" },
  { id: "auth", name: "Login / Signup" },
  { id: "download", name: "Download" },
  { id: "icon", name: "Icon" }
];

/* 2. COLORS */

const palettes = [
  ["#6366f1", "#9333ea", "#ffffff"],
  ["#ec4899", "#f43f5e", "#ffffff"],
  ["#0ea5e9", "#2563eb", "#ffffff"],
  ["#10b981", "#059669", "#ffffff"],
  ["#f97316", "#ea580c", "#ffffff"],
  ["#8b5cf6", "#d946ef", "#ffffff"],
  ["#14b8a6", "#0f766e", "#ffffff"],
  ["#ef4444", "#b91c1c", "#ffffff"],
  ["#eab308", "#ca8a04", "#111827"],
  ["#06b6d4", "#0891b2", "#ffffff"],
  ["#84cc16", "#4d7c0f", "#ffffff"],
  ["#f43f5e", "#be123c", "#ffffff"],
  ["#a855f7", "#6d28d9", "#ffffff"],
  ["#3b82f6", "#1d4ed8", "#ffffff"],
  ["#fb7185", "#e11d48", "#ffffff"],
  ["#22c55e", "#15803d", "#ffffff"],
  ["#f59e0b", "#d97706", "#111827"],
  ["#64748b", "#334155", "#ffffff"],
  ["#0891b2", "#155e75", "#ffffff"],
  ["#c026d3", "#86198f", "#ffffff"],
  ["#4f46e5", "#312e81", "#ffffff"],
  ["#ea580c", "#9a3412", "#ffffff"],
  ["#059669", "#064e3b", "#ffffff"],
  ["#7c3aed", "#4c1d95", "#ffffff"],
  ["#db2777", "#831843", "#ffffff"],
  ["#0284c7", "#075985", "#ffffff"],
  ["#65a30d", "#365314", "#ffffff"],
  ["#dc2626", "#7f1d1d", "#ffffff"],
  ["#9333ea", "#581c87", "#ffffff"],
  ["#475569", "#0f172a", "#ffffff"]
];

/* 3. BUTTON LABELS */

const labels = [
  "Get Started", "Learn More", "Explore Now",
  "Click Me", "Discover", "Continue",
  "Let's Go", "Try It Free", "Read More",
  "View Details", "Get Access", "Join Now",
  "Start Today", "See More", "Open Now",
  "Create Account", "Submit", "Confirm",
  "Next Step", "Let's Begin", "Launch",
  "Get Yours", "Choose Plan", "See Options",
  "Find Out", "Get Started Now", "Take Action",
  "Let's Build", "Continue Now", "Explore"
];

const socialLabels = [
  "f Facebook", "𝕏 Twitter", "◎ Instagram",
  "in LinkedIn", "▶ YouTube", "♪ TikTok",
  "✉ Email", "● WhatsApp", "◉ Telegram",
  "f Follow Us", "𝕏 Share Post", "◎ View Profile",
  "in Connect", "▶ Subscribe", "♪ Listen Now",
  "✉ Send Email", "● Chat Now", "◉ Join Channel",
  "f Like Page", "𝕏 Post Now", "◎ Follow",
  "in My Network", "▶ Watch Video", "♪ Explore Music",
  "✉ Contact Us", "● Message", "◉ Open Channel",
  "f Share Page", "𝕏 Follow", "◎ Discover"
];

const iconLabels = [
  "⌂", "♥", "★", "✓", "＋", "✉",
  "⌕", "⚙", "☰", "♬", "☀", "☾",
  "↗", "↻", "✎", "⌫", "♙", "♧",
  "⚑", "⚡", "☁", "♫", "✦", "❖",
  "⊕", "⊖", "⟳", "⇧", "⇩", "⋯"
];

const downloadLabels = [
  "↓ Download", "↓ Get File", "↓ Download Now",
  "↓ Save File", "↓ Download PDF"
];

const authLabels = [
  "Login", "Sign Up", "Register",
  "Create Account", "Sign In"
];

/* 4. SHARED CSS FOR COPIED BUTTONS */

const commonCSS = `
/* Shared button base */
.demo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border: 2px solid transparent;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;
  text-decoration: none;
  transition: all .25s ease;
}

.demo-btn:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 4px;
}
`;

const cssRules = {
  gradient: `
.btn-gradient {
  color: var(--fg);
  background: linear-gradient(135deg, var(--c1), var(--c2));
  box-shadow: 0 5px 15px #6366f144;
}
.btn-gradient:hover {
  color: var(--fg);
  transform: translateY(-3px);
  filter: brightness(1.08);
}`,

  neon: `
.btn-neon {
  color: var(--c1);
  background: #101827;
  border-color: var(--c1);
  box-shadow: 0 0 12px var(--c1);
}
.btn-neon:hover {
  color: #101827;
  background: var(--c1);
  box-shadow: 0 0 24px var(--c1);
}`,

  outline: `
.btn-outline {
  color: var(--c1);
  background: transparent;
  border-color: var(--c1);
}
.btn-outline:hover {
  color: #fff;
  background: var(--c1);
}`,

  "3d": `
.btn-3d {
  color: var(--fg);
  background: var(--c1);
  border-radius: 8px;
  box-shadow: 0 5px 0 var(--c2);
}
.btn-3d:hover {
  color: var(--fg);
  transform: translateY(3px);
  box-shadow: 0 2px 0 var(--c2);
}`,

  glow: `
.btn-glow {
  color: var(--fg);
  background: var(--c1);
  box-shadow: 0 0 12px var(--c1);
}
.btn-glow:hover {
  color: var(--fg);
  transform: scale(1.04);
  box-shadow: 0 0 25px var(--c1);
}`,

  animated: `
.btn-animated {
  color: var(--fg);
  background: linear-gradient(120deg, var(--c1), var(--c2), var(--c1));
  background-size: 200% 200%;
}
.btn-animated:hover {
  color: var(--fg);
  background-position: 100% 0;
  transform: translateY(-3px) scale(1.03);
  letter-spacing: .5px;
}`,

  social: `
.btn-social {
  color: var(--fg);
  background: var(--c1);
  border-radius: 999px;
}
.btn-social:hover {
  color: var(--fg);
  filter: brightness(.88);
  transform: translateY(-2px);
}`,

  auth: `
.btn-auth {
  color: var(--fg);
  background: var(--c1);
  border-radius: 999px;
  padding-left: 27px;
  padding-right: 27px;
}
.btn-auth:hover {
  color: var(--fg);
  background: var(--c2);
}`,

  download: `
.btn-download {
  color: var(--fg);
  background: linear-gradient(135deg, var(--c1), var(--c2));
  border-radius: 12px;
  box-shadow: 0 4px 12px #64748b35;
}
.btn-download:hover {
  color: var(--fg);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #64748b45;
}`,

  icon: `
.btn-icon {
  color: var(--fg);
  background: var(--c1);
  min-width: 50px;
  min-height: 48px;
  padding: 10px;
  border-radius: 14px;
  font-size: 19px;
}
.btn-icon:hover {
  color: var(--fg);
  background: var(--c2);
  transform: rotate(-4deg) scale(1.06);
}`
};

/* 5. GENERATE 300 BUTTONS */

function getButtonLabel(category, index) {
  if (category === "social") return socialLabels[index];
  if (category === "icon") return iconLabels[index];

  if (category === "download") {
    return downloadLabels[index % downloadLabels.length];
  }

  if (category === "auth") {
    return authLabels[index % authLabels.length];
  }

  return labels[index];
}

const buttons = categories.flatMap((category) => {
  return Array.from({ length: 30 }, (_, index) => {
    const palette = palettes[index];

    const style = [
      `--c1: ${palette[0]}`,
      `--c2: ${palette[1]}`,
      `--fg: ${palette[2]}`
    ].join("; ");

    return {
      id: `${category.id}-${index + 1}`,
      name: `${category.name} Button ${index + 1}`,
      category: category.id,
      categoryName: category.name,
      text: getButtonLabel(category.id, index),
      className: `btn-${category.id}`,
      style
    };
  });
});

/* 6. SELECT HTML ELEMENTS */

const buttonGrid = document.getElementById("buttonGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const emptyMessage = document.getElementById("emptyMessage");
const resultCount = document.getElementById("resultCount");
const totalCount = document.getElementById("totalCount");
const categoryCount = document.getElementById("categoryCount");

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const modalElement = document.getElementById("buttonModal");
const buttonModal = bootstrap.Modal.getOrCreateInstance(modalElement);

const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPreview = document.getElementById("modalPreview");
const codeOutput = document.getElementById("codeOutput");

const copyCodeButton = document.getElementById("copyCodeButton");
const copyBothButton = document.getElementById("copyBothButton");
const toastElement = document.getElementById("copyToast");
const toastMessage = document.getElementById("toastMessage");

const toast = bootstrap.Toast.getOrCreateInstance(toastElement, {
  delay: 2200
});

const filterButtons = document.querySelectorAll(".category-chip");
const codeTabs = document.querySelectorAll(".code-tab");

/* 7. APPLICATION STATE */

let currentCategory = "all";
let currentPage = 1;
let currentButton = null;
let currentCodeType = "html";

const itemsPerPage = 24;

/* 8. SAFE HTML ESCAPING */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}

/* 9. BUILD COPYABLE CODE */

function getHTML(button) {
  return `<button type="button" class="demo-btn ${button.className}" style="${button.style}">${escapeHTML(button.text)}</button>`;
}

function getCSS(button) {
  return `${commonCSS}\n${cssRules[button.category]}`;
}

function getBothCode(button) {
  return `<!-- HTML -->\n${getHTML(button)}\n\n<!-- CSS -->\n${getCSS(button)}`;
}

/* 10. TOAST MESSAGE */

function showToast(message) {
  toastMessage.textContent = message;
  toast.show();
}

/* 11. COPY TO CLIPBOARD */

async function copyCode(code, type) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      // Fallback for local development or older browsers.
      const textarea = document.createElement("textarea");

      textarea.value = code;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.style.pointerEvents = "none";

      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand("copy");
      textarea.remove();

      if (!copied) {
        throw new Error("Clipboard copy failed.");
      }
    }

    showToast(`${type} copied successfully!`);
  } catch (error) {
    console.error("Copy error:", error);
    showToast("Copy failed. Try localhost or HTTPS.");
  }
}

/* 12. FILTER BUTTONS */

function getFilteredButtons() {
  const query = searchInput.value.toLowerCase().trim();

  return buttons.filter((button) => {
    const matchesCategory =
      currentCategory === "all" ||
      button.category === currentCategory;

    const searchableText =
      `${button.name} ${button.text} ${button.categoryName}`.toLowerCase();

    const matchesSearch = searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });
}

/* 13. CREATE A BUTTON CARD */

function createButtonCard(button) {
  const column = document.createElement("div");
  column.className = "col-12 col-md-6 col-lg-4";

  const card = document.createElement("article");
  card.className = "button-card";

  const preview = document.createElement("div");
  preview.className = "preview-area";

  const demo = document.createElement("button");
  demo.type = "button";
  demo.className = `demo-btn ${button.className}`;
  demo.setAttribute("style", button.style);
  demo.textContent = button.text;

  preview.appendChild(demo);

  const content = document.createElement("div");
  content.className = "card-content";

  const heading = document.createElement("h3");
  heading.className = "card-title";
  heading.textContent = button.name;

  const category = document.createElement("p");
  category.className = "card-category";
  category.textContent = `Category: ${button.categoryName}`;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const htmlButton = document.createElement("button");
  htmlButton.type = "button";
  htmlButton.className = "btn btn-primary";
  htmlButton.textContent = "Copy HTML";

  const cssButton = document.createElement("button");
  cssButton.type = "button";
  cssButton.className = "btn btn-outline-secondary";
  cssButton.textContent = "Copy CSS";

  const viewButton = document.createElement("button");
  viewButton.type = "button";
  viewButton.className = "btn btn-view-code";
  viewButton.textContent = "Preview / Code";

  htmlButton.addEventListener("click", () => {
    copyCode(getHTML(button), "HTML");
  });

  cssButton.addEventListener("click", () => {
    copyCode(getCSS(button), "CSS");
  });

  viewButton.addEventListener("click", () => {
    openButtonModal(button);
  });

  actions.append(htmlButton, cssButton, viewButton);
  content.append(heading, category, actions);
  card.append(preview, content);
  column.appendChild(card);

  return column;
}

/* 14. RENDER BUTTON GRID WITH PAGINATION */

function renderButtons() {
  const filteredButtons = getFilteredButtons();
  const totalPages = Math.max(
    1,
    Math.ceil(filteredButtons.length / itemsPerPage)
  );

  // Keep current page within valid bounds.
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * itemsPerPage;
  const visibleButtons = filteredButtons.slice(
    start,
    start + itemsPerPage
  );

  buttonGrid.replaceChildren();

  const fragment = document.createDocumentFragment();

  visibleButtons.forEach((button) => {
    fragment.appendChild(createButtonCard(button));
  });

  buttonGrid.appendChild(fragment);

  resultCount.textContent = filteredButtons.length;
  totalCount.textContent = buttons.length;
  categoryCount.textContent = categories.length;

  emptyMessage.classList.toggle(
    "d-none",
    filteredButtons.length > 0
  );

  buttonGrid.classList.toggle(
    "d-none",
    filteredButtons.length === 0
  );

  prevPage.disabled = currentPage <= 1;
  nextPage.disabled = currentPage >= totalPages;

  pageInfo.textContent =
    `Page ${currentPage} of ${totalPages}`;

  clearSearch.classList.toggle(
    "visible",
    searchInput.value.length > 0
  );
}

/* 15. CATEGORY CLICK EVENTS */

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    currentPage = 1;

    filterButtons.forEach((item) => {
      const isActive = item === button;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderButtons();
  });
});

/* 16. SEARCH EVENTS */

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderButtons();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  currentPage = 1;
  renderButtons();
  searchInput.focus();
});

/* 17. RESET FILTERS */

document.getElementById("resetFilters").addEventListener("click", () => {
  currentCategory = "all";
  currentPage = 1;
  searchInput.value = "";

  filterButtons.forEach((button) => {
    const isActive = button.dataset.category === "all";

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderButtons();
});

/* 18. PAGINATION EVENTS */

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderButtons();
    document.getElementById("library").scrollIntoView();
  }
});

nextPage.addEventListener("click", () => {
  const totalPages = Math.ceil(
    getFilteredButtons().length / itemsPerPage
  );

  if (currentPage < totalPages) {
    currentPage++;
    renderButtons();
    document.getElementById("library").scrollIntoView();
  }
});

/* 19. OPEN BUTTON PREVIEW MODAL */

function openButtonModal(button) {
  currentButton = button;
  currentCodeType = "html";

  modalTitle.textContent = button.name;
  modalCategory.textContent = button.categoryName;

  modalPreview.replaceChildren();

  const demo = document.createElement("button");
  demo.type = "button";
  demo.className = `demo-btn ${button.className}`;
  demo.setAttribute("style", button.style);
  demo.textContent = button.text;

  modalPreview.appendChild(demo);

  updateCodeTab();
  buttonModal.show();
}

/* 20. UPDATE HTML / CSS TABS */

function updateCodeTab() {
  if (!currentButton) return;

  const isHTML = currentCodeType === "html";

  codeOutput.textContent = isHTML
    ? getHTML(currentButton)
    : getCSS(currentButton);

  codeTabs.forEach((tab) => {
    const active = tab.dataset.codeTab === currentCodeType;

    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  copyCodeButton.textContent = isHTML
    ? "Copy HTML"
    : "Copy CSS";
}

codeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCodeType = tab.dataset.codeTab;
    updateCodeTab();
  });
});

/* 21. MODAL COPY BUTTONS */

copyCodeButton.addEventListener("click", () => {
  if (!currentButton) return;

  const code = currentCodeType === "html"
    ? getHTML(currentButton)
    : getCSS(currentButton);

  copyCode(code, currentCodeType.toUpperCase());
});

copyBothButton.addEventListener("click", () => {
  if (!currentButton) return;

  copyCode(getBothCode(currentButton), "HTML + CSS");
});

/* 22. DARK MODE */

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);

  themeIcon.textContent = isDark ? "☀" : "☾";
  themeText.textContent = isDark ? "Light Mode" : "Dark Mode";

  themeToggle.setAttribute(
    "aria-pressed",
    String(isDark)
  );
}

let savedTheme = null;

try {
  savedTheme = localStorage.getItem("buttonhub-theme");
} catch (error) {
  console.warn("Theme storage is unavailable.");
}

setTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");

  setTheme(isDark);

  try {
    localStorage.setItem(
      "buttonhub-theme",
      isDark ? "dark" : "light"
    );
  } catch (error) {
    console.warn("Could not save theme preference.");
  }
});

/* 23. INITIALIZE */

filterButtons.forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.category === "all")
  );
});

codeTabs.forEach((tab) => {
  tab.setAttribute(
    "aria-selected",
    String(tab.dataset.codeTab === "html")
  );
});

renderButtons();

console.log(
  `ButtonHub loaded: ${buttons.length} buttons in ${categories.length} categories.`
);
