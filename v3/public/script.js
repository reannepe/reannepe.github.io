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
      "--bg": "#f4dfdc",
      "--bg-alt": "#c23c5a",
      "--panel": "rgba(255, 243, 239, 0.9)",
      "--text": "#253831",
      "--text-light": "#645b58",
      "--text-muted": "#8f7d7a",
      "--accent": "#c23c5a",
      "--accent-light": "#d5a18e",
      "--accent-dark": "#7e2037",
      "--border": "#d7a49d",
      "--nav-bg": "rgba(244, 223, 220, 0.94)"
    }
  },
  {
    name: "Sand & Sky",
    colors: ["#EACBA9", "#7FC7CC", "#f5e6d1", "#9a8364", "#d7b998"],
    vars: {
      "--bg": "#f6deb7",
      "--bg-alt": "#7fc7cc",
      "--panel": "rgba(255, 248, 238, 0.92)",
      "--text": "#413428",
      "--text-light": "#716457",
      "--text-muted": "#9b8b7b",
      "--accent": "#7fc7cc",
      "--accent-light": "#eacba9",
      "--accent-dark": "#2f7f86",
      "--border": "#d8b28a",
      "--nav-bg": "rgba(246, 222, 183, 0.94)"
    }
  },
  {
    name: "Deep Sea",
    colors: ["#12343b", "#2d5f5d", "#5c8374", "#c6d8d3", "#e9f1ef"],
    vars: {
      "--bg": "#0f2228",
      "--bg-alt": "#12343b",
      "--panel": "rgba(29, 54, 61, 0.9)",
      "--text": "#edf7f5",
      "--text-light": "#b8d1cc",
      "--text-muted": "#8aa7a1",
      "--accent": "#5c8374",
      "--accent-light": "#c6d8d3",
      "--accent-dark": "#80e0c4",
      "--border": "#31535b",
      "--nav-bg": "rgba(15, 34, 40, 0.94)"
    }
  },
  {
    name: "Moss Green",
    colors: ["#495c43", "#70895b", "#a5b68d", "#d6e2c3", "#f3f6ea"],
    vars: {
      "--bg": "#2b3328",
      "--bg-alt": "#495c43",
      "--panel": "rgba(60, 77, 55, 0.92)",
      "--text": "#f0f6e7",
      "--text-light": "#cfdcbe",
      "--text-muted": "#a0ad8e",
      "--accent": "#a5b68d",
      "--accent-light": "#d6e2c3",
      "--accent-dark": "#e0ef72",
      "--border": "#5b7053",
      "--nav-bg": "rgba(43, 51, 40, 0.94)"
    }
  },
  {
    name: "Terracotta",
    colors: ["#7a3e2b", "#b85c38", "#d89b7a", "#f0d2bf", "#fff6f0"],
    vars: {
      "--bg": "#f1c4aa",
      "--bg-alt": "#7a3e2b",
      "--panel": "rgba(255, 244, 236, 0.92)",
      "--text": "#3f2118",
      "--text-light": "#755446",
      "--text-muted": "#a58274",
      "--accent": "#b85c38",
      "--accent-light": "#d89b7a",
      "--accent-dark": "#7d2e17",
      "--border": "#d9aa8f",
      "--nav-bg": "rgba(241, 196, 170, 0.94)"
    }
  },
  {
    name: "Cherry Blossom",
    colors: ["#f0c4cb", "#c87d87", "#fbead6", "#6b7556", "#e5bca9"],
    vars: {
      "--bg": "#f8d7de",
      "--bg-alt": "#c87d87",
      "--panel": "rgba(255, 247, 246, 0.92)",
      "--text": "#50423d",
      "--text-light": "#756560",
      "--text-muted": "#9f8d88",
      "--accent": "#c87d87",
      "--accent-light": "#e5bca9",
      "--accent-dark": "#8e5059",
      "--border": "#e1b7be",
      "--nav-bg": "rgba(248, 215, 222, 0.94)"
    }
  },
  {
    name: "Red Wine",
    colors: ["#4d1f2d", "#8c2f39", "#b76e79", "#e8c7cf", "#f9f0f2"],
    vars: {
      "--bg": "#2e0f1b",
      "--bg-alt": "#4d1f2d",
      "--panel": "rgba(73, 30, 43, 0.92)",
      "--text": "#f8edf0",
      "--text-light": "#d7b8bf",
      "--text-muted": "#ab808c",
      "--accent": "#8c2f39",
      "--accent-light": "#b76e79",
      "--accent-dark": "#d24a59",
      "--border": "#6e3748",
      "--nav-bg": "rgba(46, 15, 27, 0.94)"
    }
  },
  {
    name: "Red Wine v1",
    colors: ["#8c2f39", "#b76e79", "#e8c7cf", "#f9f0f2", "#4d1f2d"],
    vars: {
      "--bg": "#2e0f1b",
      "--bg-alt": "#8c2f39",
      "--panel": "rgba(73, 30, 43, 0.92)",
      "--text": "#f8edf0",
      "--text-light": "#d7b8bf",
      "--text-muted": "#ab808c",
      "--accent": "#b76e79",
      "--accent-light": "#e8c7cf",
      "--accent-dark": "#d24a59",
      "--border": "#6e3748",
      "--nav-bg": "rgba(46, 15, 27, 0.94)"
    }
  },
  {
    name: "Red Wine v2",
    colors: ["#b76e79", "#e8c7cf", "#f9f0f2", "#4d1f2d", "#8c2f39"],
    vars: {
      "--bg": "#2e0f1b",
      "--bg-alt": "#b76e79",
      "--panel": "rgba(73, 30, 43, 0.92)",
      "--text": "#f8edf0",
      "--text-light": "#d7b8bf",
      "--text-muted": "#ab808c",
      "--accent": "#e8c7cf",
      "--accent-light": "#f9f0f2",
      "--accent-dark": "#d24a59",
      "--border": "#6e3748",
      "--nav-bg": "rgba(46, 15, 27, 0.94)"
    }
  },
  {
    name: "Red Wine v3",
    colors: ["#e8c7cf", "#f9f0f2", "#4d1f2d", "#8c2f39", "#b76e79"],
    vars: {
      "--bg": "#2e0f1b",
      "--bg-alt": "#e8c7cf",
      "--panel": "rgba(73, 30, 43, 0.92)",
      "--text": "#f8edf0",
      "--text-light": "#d7b8bf",
      "--text-muted": "#ab808c",
      "--accent": "#f9f0f2",
      "--accent-light": "#4d1f2d",
      "--accent-dark": "#d24a59",
      "--border": "#6e3748",
      "--nav-bg": "rgba(46, 15, 27, 0.94)"
    }
  },
  {
    name: "Red Wine v4",
    colors: ["#f9f0f2", "#4d1f2d", "#8c2f39", "#b76e79", "#e8c7cf"],
    vars: {
      "--bg": "#2e0f1b",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(73, 30, 43, 0.92)",
      "--text": "#f8edf0",
      "--text-light": "#d7b8bf",
      "--text-muted": "#ab808c",
      "--accent": "#4d1f2d",
      "--accent-light": "#8c2f39",
      "--accent-dark": "#d24a59",
      "--border": "#6e3748",
      "--nav-bg": "rgba(46, 15, 27, 0.94)"
    }
  },
  {
    name: "Red Wine Light",
    colors: ["#fcf4f6", "#e8c7cf", "#b76e79", "#8c2f39", "#4d1f2d"],
    vars: {
      "--bg": "#fcf4f6",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(255, 252, 253, 0.92)",
      "--text": "#2c161d",
      "--text-light": "#6e3b4a",
      "--text-muted": "#a66c7a",
      "--accent": "#8c2f39",
      "--accent-light": "#b76e79",
      "--accent-dark": "#4d1f2d",
      "--border": "#e0c5cc",
      "--nav-bg": "rgba(252, 244, 246, 0.94)"
    }
  },
  {
    name: "Red Wine Light v1",
    colors: ["#e8c7cf", "#b76e79", "#8c2f39", "#4d1f2d", "#fcf4f6"],
    vars: {
      "--bg": "#fcf4f6",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(255, 252, 253, 0.92)",
      "--text": "#2c161d",
      "--text-light": "#6e3b4a",
      "--text-muted": "#a66c7a",
      "--accent": "#b76e79",
      "--accent-light": "#8c2f39",
      "--accent-dark": "#4d1f2d",
      "--border": "#e0c5cc",
      "--nav-bg": "rgba(252, 244, 246, 0.94)"
    }
  },
  {
    name: "Red Wine Light v2",
    colors: ["#b76e79", "#8c2f39", "#4d1f2d", "#fcf4f6", "#e8c7cf"],
    vars: {
      "--bg": "#fcf4f6",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(255, 252, 253, 0.92)",
      "--text": "#2c161d",
      "--text-light": "#6e3b4a",
      "--text-muted": "#a66c7a",
      "--accent": "#8c2f39",
      "--accent-light": "#4d1f2d",
      "--accent-dark": "#e8c7cf",
      "--border": "#e0c5cc",
      "--nav-bg": "rgba(252, 244, 246, 0.94)"
    }
  },
  {
    name: "Red Wine Light v3",
    colors: ["#8c2f39", "#4d1f2d", "#fcf4f6", "#e8c7cf", "#b76e79"],
    vars: {
      "--bg": "#fcf4f6",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(255, 252, 253, 0.92)",
      "--text": "#2c161d",
      "--text-light": "#6e3b4a",
      "--text-muted": "#a66c7a",
      "--accent": "#4d1f2d",
      "--accent-light": "#fcf4f6",
      "--accent-dark": "#b76e79",
      "--border": "#e0c5cc",
      "--nav-bg": "rgba(252, 244, 246, 0.94)"
    }
  },
  {
    name: "Red Wine Light v4",
    colors: ["#4d1f2d", "#fcf4f6", "#e8c7cf", "#b76e79", "#8c2f39"],
    vars: {
      "--bg": "#fcf4f6",
      "--bg-alt": "#f9f0f2",
      "--panel": "rgba(255, 252, 253, 0.92)",
      "--text": "#2c161d",
      "--text-light": "#6e3b4a",
      "--text-muted": "#a66c7a",
      "--accent": "#fcf4f6",
      "--accent-light": "#e8c7cf",
      "--accent-dark": "#8c2f39",
      "--border": "#e0c5cc",
      "--nav-bg": "rgba(252, 244, 246, 0.94)"
    }
  },
  {
    name: "Sunshine",
    colors: ["#f6bc3f", "#ffd56b", "#fff0b3", "#8a6d1f", "#fff8dd"],
    vars: {
      "--bg": "#ffef98",
      "--bg-alt": "#f6bc3f",
      "--panel": "rgba(255, 251, 230, 0.94)",
      "--text": "#513d09",
      "--text-light": "#7d6723",
      "--text-muted": "#a68d4a",
      "--accent": "#f6bc3f",
      "--accent-light": "#ffd56b",
      "--accent-dark": "#b97d00",
      "--border": "#e2c46a",
      "--nav-bg": "rgba(255, 239, 152, 0.94)"
    }
  },
  {
    name: "Pinterest Product Stylish",
    colors: ["#F0C4CB", "#C87D87", "#FBEAD6", "#6B7556", "#E5BCA9"],
    vars: {
      "--bg": "#f5d0d5",
      "--bg-alt": "#6b7556",
      "--panel": "rgba(255, 247, 241, 0.92)",
      "--text": "#38412f",
      "--text-light": "#5f584f",
      "--text-muted": "#83786f",
      "--accent": "#c87d87",
      "--accent-light": "#e5bca9",
      "--accent-dark": "#914f58",
      "--border": "#d7b29f",
      "--nav-bg": "rgba(245, 208, 213, 0.94)"
    }
  },
  {
    name: "Pinterest Product Stylish v1",
    colors: ["#C87D87", "#FBEAD6", "#6B7556", "#E5BCA9", "#F0C4CB"],
    vars: {
      "--bg": "#f5d0d5",
      "--bg-alt": "#E5BCA9",
      "--panel": "rgba(255, 247, 241, 0.92)",
      "--text": "#38412f",
      "--text-light": "#5f584f",
      "--text-muted": "#83786f",
      "--accent": "#FBEAD6",
      "--accent-light": "#F0C4CB",
      "--accent-dark": "#914f58",
      "--border": "#d7b29f",
      "--nav-bg": "rgba(245, 208, 213, 0.94)"
    }
  },
  {
    name: "Pinterest Product Stylish v2",
    colors: ["#FBEAD6", "#6B7556", "#E5BCA9", "#F0C4CB", "#C87D87"],
    vars: {
      "--bg": "#f5d0d5",
      "--bg-alt": "#F0C4CB",
      "--panel": "rgba(255, 247, 241, 0.92)",
      "--text": "#38412f",
      "--text-light": "#5f584f",
      "--text-muted": "#83786f",
      "--accent": "#6B7556",
      "--accent-light": "#C87D87",
      "--accent-dark": "#914f58",
      "--border": "#d7b29f",
      "--nav-bg": "rgba(245, 208, 213, 0.94)"
    }
  },
  {
    name: "Pinterest Product Stylish v3",
    colors: ["#6B7556", "#E5BCA9", "#F0C4CB", "#C87D87", "#FBEAD6"],
    vars: {
      "--bg": "#f5d0d5",
      "--bg-alt": "#C87D87",
      "--panel": "rgba(255, 247, 241, 0.92)",
      "--text": "#38412f",
      "--text-light": "#5f584f",
      "--text-muted": "#83786f",
      "--accent": "#E5BCA9",
      "--accent-light": "#FBEAD6",
      "--accent-dark": "#914f58",
      "--border": "#d7b29f",
      "--nav-bg": "rgba(245, 208, 213, 0.94)"
    }
  },
  {
    name: "Pinterest Product Stylish v4",
    colors: ["#E5BCA9", "#F0C4CB", "#C87D87", "#FBEAD6", "#6B7556"],
    vars: {
      "--bg": "#f5d0d5",
      "--bg-alt": "#FBEAD6",
      "--panel": "rgba(255, 247, 241, 0.92)",
      "--text": "#38412f",
      "--text-light": "#5f584f",
      "--text-muted": "#83786f",
      "--accent": "#F0C4CB",
      "--accent-light": "#6B7556",
      "--accent-dark": "#914f58",
      "--border": "#d7b29f",
      "--nav-bg": "rgba(245, 208, 213, 0.94)"
    }
  },
  {
    name: "Pinterest Brand",
    colors: ["#5C30FF", "#E63C23", "#F791C3", "#F6BC3F", "#008C47"],
    vars: {
      "--bg": "#ffe8ce",
      "--bg-alt": "#5c30ff",
      "--panel": "rgba(255, 247, 240, 0.94)",
      "--text": "#291942",
      "--text-light": "#6c5a81",
      "--text-muted": "#9c8baa",
      "--accent": "#5c30ff",
      "--accent-light": "#f791c3",
      "--accent-dark": "#e63c23",
      "--border": "#efcaa8",
      "--nav-bg": "rgba(255, 232, 206, 0.94)"
    }
  },
  {
    name: "Slate Studio",
    colors: ["#2c3440", "#6c7a89", "#c4ccd6", "#e7ebf0", "#f7f9fb"],
    vars: {
      "--bg": "#1f2630",
      "--bg-alt": "#2c3440",
      "--panel": "rgba(48, 57, 69, 0.92)",
      "--text": "#f5f7fa",
      "--text-light": "#c8d0da",
      "--text-muted": "#94a2af",
      "--accent": "#8fa3b8",
      "--accent-light": "#c4ccd6",
      "--accent-dark": "#ffffff",
      "--border": "#45505d",
      "--nav-bg": "rgba(31, 38, 48, 0.94)"
    }
  },
  {
    name: "Olive Clay",
    colors: ["#58644f", "#8f7f61", "#c3b09a", "#e6d9ca", "#f8f4ee"],
    vars: {
      "--bg": "#d8c7b3",
      "--bg-alt": "#58644f",
      "--panel": "rgba(248, 242, 233, 0.92)",
      "--text": "#39392f",
      "--text-light": "#666056",
      "--text-muted": "#948a7f",
      "--accent": "#8f7f61",
      "--accent-light": "#c3b09a",
      "--accent-dark": "#4d563f",
      "--border": "#c9b9a8",
      "--nav-bg": "rgba(216, 199, 179, 0.94)"
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
