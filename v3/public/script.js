const galleryItems = [
  {
    src: "./images/selected/interior-living-01.jpg",
    title: "Living Area",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    group: "render-residential-interior"
  },
  {
    src: "./images/selected/interior-bedroom-01.jpg",
    title: "Bedroom",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    group: "render-residential-interior"
  },
  {
    src: "./images/selected/interior-dining-01.jpg",
    title: "Dining Area",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    group: "render-residential-interior"
  },
  {
    src: "./images/selected/interior-kitchen-01.jpg",
    title: "Kitchen",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    group: "render-residential-interior"
  },
  {
    src: "./images/selected/commercial-retail-01.jpg",
    title: "Retail Interior",
    badges: ["Render", "Commercial", "Interior"],
    main: "render",
    sector: "commercial",
    type: "interior",
    group: "render-commercial-interior"
  },
  {
    src: "./images/selected/commercial-cafe-01.jpg",
    title: "Cafe Perspective",
    badges: ["Full-Set", "Commercial", "Coffee Set"],
    main: "full-set",
    sector: "commercial",
    type: "coffee-set",
    group: "full-set-coffee"
  },
  {
    src: "./images/selected/commercial-plan-01.jpg",
    title: "Cafe Plan Board",
    badges: ["Full-Set", "Commercial", "Coffee Set"],
    main: "full-set",
    sector: "commercial",
    type: "coffee-set",
    group: "full-set-coffee"
  },
  {
    src: "./images/selected/exterior-house-01.jpg",
    title: "Residential Facade",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    group: "render-residential-exterior"
  },
  {
    src: "./images/selected/exterior-house-02.jpg",
    title: "House Perspective",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    group: "render-residential-exterior"
  },
  {
    src: "./images/selected/exterior-dormitel-01.jpg",
    title: "Dormitel Exterior",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    group: "render-residential-exterior"
  },
  {
    src: "./images/selected/exterior-resort-01.jpg",
    title: "Resort View",
    badges: ["Render", "Commercial", "Exterior"],
    main: "render",
    sector: "commercial",
    type: "exterior",
    group: "render-commercial-exterior"
  },
  {
    src: "./images/plans/a-01.jpg",
    title: "Architectural Sheet",
    badges: ["Full-Set", "Residential", "Architecture Set"],
    main: "full-set",
    sector: "residential",
    type: "architecture-set",
    group: "full-set-architecture"
  },
  {
    src: "./images/plans/a1.jpg",
    title: "Building Plan Sheet",
    badges: ["Full-Set", "Residential", "Architecture Set"],
    main: "full-set",
    sector: "residential",
    type: "architecture-set",
    group: "full-set-architecture"
  },
  {
    src: "./images/plans/power-layout.jpg",
    title: "Power Layout",
    badges: ["Full-Set", "Commercial", "Interior Set"],
    main: "full-set",
    sector: "commercial",
    type: "interior-set",
    group: "full-set-interior"
  }
];

const projectDetails = {
  "residential-interior": {
    label: "01 • Residential Interior Project",
    title: "Placeholder for a curated residential interior case study",
    text: "This popup is reserved for the final curated project version with better captions, more process images, and stronger problem-solution context.",
    images: [
      "./images/selected/interior-bedroom-01.jpg",
      "./images/selected/interior-dining-01.jpg",
      "./images/selected/interior-kitchen-01.jpg"
    ]
  },
  "full-set-architecture": {
    label: "02 • Full-Set Architecture Project",
    title: "Placeholder for a complete architecture set",
    text: "This popup will hold a selected project where drawings, plans, and supporting renderings should stay together in one architecture story.",
    images: [
      "./images/selected/exterior-dormitel-01.jpg",
      "./images/plans/a-01.jpg",
      "./images/plans/a1.jpg"
    ]
  },
  "full-set-interior": {
    label: "03 • Sample Full-Set Interior Design Project",
    title: "Placeholder for a coffee house or similar full-set interior package",
    text: "This popup is intended for a grouped interior design set with renderings, boards, plans, and sections together.",
    images: [
      "./images/selected/commercial-cafe-01.jpg",
      "./images/selected/commercial-plan-01.jpg",
      "./images/selected/commercial-retail-01.jpg"
    ]
  }
};

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const projectDialog = document.getElementById("projectDialog");
const projectDialogClose = document.getElementById("projectDialogClose");
const projectDialogLabel = document.getElementById("projectDialogLabel");
const projectDialogTitle = document.getElementById("projectDialogTitle");
const projectDialogText = document.getElementById("projectDialogText");
const projectDialogGallery = document.getElementById("projectDialogGallery");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const paletteToggle = document.getElementById("paletteToggle");
const palettePanel = document.getElementById("palettePanel");
const paletteOptions = document.getElementById("paletteOptions");
const sectorSelect = document.getElementById("sectorSelect");
const typeSelect = document.getElementById("typeSelect");

const palettes = [
  {
    name: "Default Warm",
    colors: ["#faf8f5", "#f3f0eb", "#b8926c", "#7a7570", "#e5ddd4"],
    vars: {
      "--bg": "#faf8f5",
      "--bg-alt": "#f3f0eb",
      "--panel": "rgba(255, 252, 247, 0.88)",
      "--text": "#2c2826",
      "--text-light": "#7a7570",
      "--text-muted": "#a8a39e",
      "--accent": "#b8926c",
      "--accent-light": "#d4b89a",
      "--accent-dark": "#8a6d4f",
      "--border": "#e5ddd4",
      "--nav-bg": "rgba(250, 248, 245, 0.92)"
    }
  },
  {
    name: "Earthy Rose",
    colors: ["#425749", "#C23C5A", "#D5A18E", "#DEC3BE", "#758B7C"],
    vars: {
      "--bg": "#f7f0ed",
      "--bg-alt": "#dec3be",
      "--panel": "rgba(255, 248, 245, 0.88)",
      "--text": "#425749",
      "--text-light": "#6d756f",
      "--text-muted": "#9b928f",
      "--accent": "#c23c5a",
      "--accent-light": "#d5a18e",
      "--accent-dark": "#8e3046",
      "--border": "#d9c2bc",
      "--nav-bg": "rgba(247, 240, 237, 0.92)"
    }
  },
  {
    name: "Sand & Sky",
    colors: ["#EACBA9", "#7FC7CC", "#f5e6d1", "#9a8364", "#d7b998"],
    vars: {
      "--bg": "#fbf4ea",
      "--bg-alt": "#eacba9",
      "--panel": "rgba(255, 251, 245, 0.9)",
      "--text": "#5d4f40",
      "--text-light": "#7e7468",
      "--text-muted": "#aaa096",
      "--accent": "#7fc7cc",
      "--accent-light": "#b7dde0",
      "--accent-dark": "#4c99a0",
      "--border": "#dfc9b2",
      "--nav-bg": "rgba(251, 244, 234, 0.93)"
    }
  },
  {
    name: "Deep Sea",
    colors: ["#12343b", "#2d5f5d", "#5c8374", "#c6d8d3", "#e9f1ef"],
    vars: {
      "--bg": "#eef4f2",
      "--bg-alt": "#c6d8d3",
      "--panel": "rgba(255, 255, 255, 0.88)",
      "--text": "#12343b",
      "--text-light": "#44655f",
      "--text-muted": "#7d9a95",
      "--accent": "#2d5f5d",
      "--accent-light": "#5c8374",
      "--accent-dark": "#183f44",
      "--border": "#c2d3cf",
      "--nav-bg": "rgba(238, 244, 242, 0.93)"
    }
  },
  {
    name: "Moss Green",
    colors: ["#495c43", "#70895b", "#a5b68d", "#d6e2c3", "#f3f6ea"],
    vars: {
      "--bg": "#f4f7ee",
      "--bg-alt": "#d6e2c3",
      "--panel": "rgba(255, 255, 250, 0.9)",
      "--text": "#495c43",
      "--text-light": "#697560",
      "--text-muted": "#99a18f",
      "--accent": "#70895b",
      "--accent-light": "#a5b68d",
      "--accent-dark": "#556846",
      "--border": "#d4dcc7",
      "--nav-bg": "rgba(244, 247, 238, 0.93)"
    }
  },
  {
    name: "Terracotta",
    colors: ["#7a3e2b", "#b85c38", "#d89b7a", "#f0d2bf", "#fff6f0"],
    vars: {
      "--bg": "#fff7f1",
      "--bg-alt": "#f0d2bf",
      "--panel": "rgba(255, 251, 247, 0.9)",
      "--text": "#5c3023",
      "--text-light": "#846457",
      "--text-muted": "#b09489",
      "--accent": "#b85c38",
      "--accent-light": "#d89b7a",
      "--accent-dark": "#8e4327",
      "--border": "#ead0c0",
      "--nav-bg": "rgba(255, 247, 241, 0.93)"
    }
  },
  {
    name: "Cherry Blossom",
    colors: ["#f0c4cb", "#c87d87", "#fbead6", "#6b7556", "#e5bca9"],
    vars: {
      "--bg": "#fff8f7",
      "--bg-alt": "#f0c4cb",
      "--panel": "rgba(255, 252, 250, 0.9)",
      "--text": "#5e4f47",
      "--text-light": "#816a65",
      "--text-muted": "#ae9793",
      "--accent": "#c87d87",
      "--accent-light": "#e5bca9",
      "--accent-dark": "#9f5f68",
      "--border": "#ecd7d1",
      "--nav-bg": "rgba(255, 248, 247, 0.93)"
    }
  },
  {
    name: "Red Wine",
    colors: ["#4d1f2d", "#8c2f39", "#b76e79", "#e8c7cf", "#f9f0f2"],
    vars: {
      "--bg": "#faf2f4",
      "--bg-alt": "#e8c7cf",
      "--panel": "rgba(255, 252, 252, 0.9)",
      "--text": "#4d1f2d",
      "--text-light": "#75545f",
      "--text-muted": "#a1838c",
      "--accent": "#8c2f39",
      "--accent-light": "#b76e79",
      "--accent-dark": "#6a202a",
      "--border": "#e5cfd5",
      "--nav-bg": "rgba(250, 242, 244, 0.93)"
    }
  },
  {
    name: "Sunshine",
    colors: ["#f6bc3f", "#ffd56b", "#fff0b3", "#8a6d1f", "#fff8dd"],
    vars: {
      "--bg": "#fff9e8",
      "--bg-alt": "#fff0b3",
      "--panel": "rgba(255, 253, 245, 0.92)",
      "--text": "#5e4c1d",
      "--text-light": "#8a7848",
      "--text-muted": "#b6a472",
      "--accent": "#f6bc3f",
      "--accent-light": "#ffd56b",
      "--accent-dark": "#c99321",
      "--border": "#ecdfb1",
      "--nav-bg": "rgba(255, 249, 232, 0.93)"
    }
  },
  {
    name: "Pinterest Product Stylish",
    colors: ["#F0C4CB", "#C87D87", "#FBEAD6", "#6B7556", "#E5BCA9"],
    vars: {
      "--bg": "#fff8f6",
      "--bg-alt": "#fbead6",
      "--panel": "rgba(255, 251, 248, 0.9)",
      "--text": "#6b7556",
      "--text-light": "#81786e",
      "--text-muted": "#ab9f95",
      "--accent": "#c87d87",
      "--accent-light": "#e5bca9",
      "--accent-dark": "#9c5f68",
      "--border": "#ebddd0",
      "--nav-bg": "rgba(255, 248, 246, 0.93)"
    }
  },
  {
    name: "Pinterest Brand",
    colors: ["#5C30FF", "#E63C23", "#F791C3", "#F6BC3F", "#008C47"],
    vars: {
      "--bg": "#fff4ea",
      "--bg-alt": "#ffe8ce",
      "--panel": "rgba(255, 250, 244, 0.92)",
      "--text": "#2c2138",
      "--text-light": "#6f6577",
      "--text-muted": "#a59aa8",
      "--accent": "#5c30ff",
      "--accent-light": "#f791c3",
      "--accent-dark": "#3f1ed0",
      "--border": "#ead7ca",
      "--nav-bg": "rgba(255, 244, 234, 0.93)"
    }
  },
  {
    name: "Slate Studio",
    colors: ["#2c3440", "#6c7a89", "#c4ccd6", "#e7ebf0", "#f7f9fb"],
    vars: {
      "--bg": "#f7f9fb",
      "--bg-alt": "#e7ebf0",
      "--panel": "rgba(255, 255, 255, 0.9)",
      "--text": "#2c3440",
      "--text-light": "#5f6a76",
      "--text-muted": "#97a1ab",
      "--accent": "#6c7a89",
      "--accent-light": "#c4ccd6",
      "--accent-dark": "#475361",
      "--border": "#dde3ea",
      "--nav-bg": "rgba(247, 249, 251, 0.93)"
    }
  },
  {
    name: "Olive Clay",
    colors: ["#58644f", "#8f7f61", "#c3b09a", "#e6d9ca", "#f8f4ee"],
    vars: {
      "--bg": "#f8f4ee",
      "--bg-alt": "#e6d9ca",
      "--panel": "rgba(255, 252, 248, 0.9)",
      "--text": "#44453b",
      "--text-light": "#6d685f",
      "--text-muted": "#9f978d",
      "--accent": "#8f7f61",
      "--accent-light": "#c3b09a",
      "--accent-dark": "#685a43",
      "--border": "#e1d5c8",
      "--nav-bg": "rgba(248, 244, 238, 0.93)"
    }
  }
];

const state = {
  main: "all",
  sector: "all",
  type: "all",
  visibleItems: [],
  lightboxItems: [],
  currentIndex: 0,
  palette: "Default Warm"
};

function matchesFilter(item) {
  const mainOk = state.main === "all" || item.main === state.main;
  const sectorOk = state.sector === "all" || item.sector === state.sector;
  const typeOk = state.type === "all" || item.type === state.type;
  return mainOk && sectorOk && typeOk;
}

function getVisibleItems() {
  return galleryItems.filter(matchesFilter);
}

function renderGallery() {
  state.visibleItems = getVisibleItems();
  gallery.innerHTML = "";

  state.visibleItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-item";
    card.innerHTML = `
      <div class="gallery-badges">
        ${item.badges.map((badge) => `<span class="gallery-badge">${badge}</span>`).join("")}
      </div>
      <img src="${item.src}" alt="${item.title}" loading="eager" />
      <div class="gallery-overlay">
        <strong class="gallery-title">${item.title}</strong>
      </div>
    `;
    card.addEventListener("click", () => openLightboxForGroup(item));
    gallery.appendChild(card);
  });
}

function applyPalette(name) {
  const palette = palettes.find((item) => item.name === name) || palettes[0];
  Object.entries(palette.vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  state.palette = palette.name;
  document.querySelectorAll(".palette-option").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.palette === palette.name);
  });
}

function renderPaletteOptions() {
  paletteOptions.innerHTML = "";
  palettes.forEach((palette) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-option";
    button.dataset.palette = palette.name;
    button.innerHTML = `
      <span class="palette-option-name">${palette.name}</span>
      <span class="palette-option-swatches">
        ${palette.colors.map((color) => `<span class="palette-swatch" style="background:${color}"></span>`).join("")}
      </span>
    `;
    button.addEventListener("click", () => applyPalette(palette.name));
    paletteOptions.appendChild(button);
  });
  applyPalette(state.palette);
}

function openLightboxForGroup(item) {
  state.lightboxItems = state.visibleItems.filter((candidate) => candidate.group === item.group);
  if (!state.lightboxItems.length) {
    state.lightboxItems = [item];
  }
  state.currentIndex = state.lightboxItems.findIndex((candidate) => candidate.src === item.src);
  if (state.currentIndex < 0) {
    state.currentIndex = 0;
  }
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const item = state.lightboxItems[state.currentIndex];
  if (!item) return;
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxCaption.textContent = `${item.title} • ${item.badges.join(" • ")}`;
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function prevImage() {
  if (!state.lightboxItems.length) return;
  state.currentIndex = (state.currentIndex - 1 + state.lightboxItems.length) % state.lightboxItems.length;
  updateLightbox();
}

function nextImage() {
  if (!state.lightboxItems.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.lightboxItems.length;
  updateLightbox();
}

function setFilter(group, value) {
  state[group] = value;
  document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === value);
  });
  renderGallery();
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.group, button.dataset.filter);
  });
});

document.querySelectorAll(".concept-pill[data-group]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.group, button.dataset.filter);
    document.querySelectorAll(".concept-pill[data-group=\"main\"]").forEach((node) => {
      node.classList.toggle("concept-pill-active", node === button);
    });
  });
});

sectorSelect.addEventListener("change", () => {
  setFilter("sector", sectorSelect.value);
});

typeSelect.addEventListener("change", () => {
  setFilter("type", typeSelect.value);
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const details = projectDetails[button.dataset.project];
    if (!details) return;
    projectDialogLabel.textContent = details.label;
    projectDialogTitle.textContent = details.title;
    projectDialogText.textContent = details.text;
    projectDialogGallery.innerHTML = details.images.map((src, index) => (
      `<img src="${src}" alt="${details.title} placeholder image ${index + 1}" />`
    )).join("");
    projectDialog.showModal();
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);
projectDialogClose.addEventListener("click", () => projectDialog.close());

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("open")) {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") prevImage();
    if (event.key === "ArrowRight") nextImage();
  }
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

projectDialog.addEventListener("click", (event) => {
  const bounds = projectDialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (outside) {
    projectDialog.close();
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("open");
});

paletteToggle.addEventListener("click", () => {
  const willOpen = palettePanel.hidden;
  palettePanel.hidden = !willOpen;
  paletteToggle.setAttribute("aria-expanded", String(willOpen));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#paletteSwitcher")) {
    palettePanel.hidden = true;
    paletteToggle.setAttribute("aria-expanded", "false");
  }
});

renderPaletteOptions();
renderGallery();
