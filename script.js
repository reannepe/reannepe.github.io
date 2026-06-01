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
const sectorSelect = document.getElementById("sectorSelect");
const typeSelect = document.getElementById("typeSelect");

const state = {
  main: "all",
  sector: "all",
  type: "all",
  visibleItems: [],
  lightboxItems: [],
  currentIndex: 0
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

renderGallery();
