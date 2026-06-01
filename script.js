const galleryItems = [
  {
    src: "./images/selected/interior-living-01.jpg",
    title: "Urbina Residence — Living Area",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    project: "Urbina Residence",
    location: "Makati City",
    group: "urbina-residence"
  },
  {
    src: "./images/selected/interior-bedroom-01.jpg",
    title: "Urbina Residence — Bedroom",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    project: "Urbina Residence",
    location: "Makati City",
    group: "urbina-residence"
  },
  {
    src: "./images/selected/interior-dining-01.jpg",
    title: "Urbina Residence — Dining and Living",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    project: "Urbina Residence",
    location: "Makati City",
    group: "urbina-residence"
  },
  {
    src: "./images/selected/interior-kitchen-01.jpg",
    title: "Urbina Residence — Compact Kitchen",
    badges: ["Render", "Residential", "Interior"],
    main: "render",
    sector: "residential",
    type: "interior",
    project: "Urbina Residence",
    location: "Makati City",
    group: "urbina-residence"
  },
  {
    src: "./images/selected/commercial-retail-01.jpg",
    title: "Ready, Set, Learn — Playschool Interior",
    badges: ["Render", "Commercial", "Interior"],
    main: "render",
    sector: "commercial",
    type: "interior",
    project: "Ready, Set, Learn",
    location: "Quezon City",
    group: "ready-set-learn"
  },
  {
    src: "./images/selected/commercial-cafe-01.jpg",
    title: "Carwash Cafe — Interior Perspective",
    badges: ["Render", "Commercial", "Interior"],
    main: "render",
    sector: "commercial",
    type: "interior",
    project: "Carwash Cafe Concept",
    location: "",
    group: "carwash-cafe"
  },
  {
    src: "./images/selected/commercial-plan-01.jpg",
    title: "Carwash Cafe — Plan Board",
    badges: ["Render", "Commercial", "Interior"],
    main: "render",
    sector: "commercial",
    type: "interior",
    project: "Carwash Cafe Concept",
    location: "",
    group: "carwash-cafe"
  },
  {
    src: "./images/selected/exterior-house-01.jpg",
    title: "Residential House — Facade Study",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    project: "Antipolo Residence",
    location: "Antipolo",
    group: "house-exterior"
  },
  {
    src: "./images/selected/exterior-house-02.jpg",
    title: "Residential House — Perspective",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    project: "Antipolo Residence",
    location: "Antipolo",
    group: "house-exterior"
  },
  {
    src: "./images/selected/exterior-dormitel-01.jpg",
    title: "One Florida Place — Dormitel Exterior",
    badges: ["Render", "Residential", "Exterior"],
    main: "render",
    sector: "residential",
    type: "exterior",
    project: "One Florida Place Dormitel",
    location: "Valenzuela City",
    group: "one-florida-place"
  },
  {
    src: "./images/selected/exterior-resort-01.jpg",
    title: "Tagaytay Resort — Exterior View",
    badges: ["Render", "Commercial", "Exterior"],
    main: "render",
    sector: "commercial",
    type: "exterior",
    project: "Tagaytay Event's Place and Resort",
    location: "Tagaytay",
    group: "tagaytay-resort"
  },
  {
    src: "./images/plans/a-01.jpg",
    title: "Ready, Set, Learn — Sheet A-01",
    badges: ["Full-Set", "Commercial", "Drawing / Plan"],
    main: "full-set",
    sector: "commercial",
    type: "drawing",
    project: "Ready, Set, Learn",
    location: "Quezon City",
    group: "ready-set-learn"
  },
  {
    src: "./images/plans/a1.jpg",
    title: "One Florida Place — Plan Sheet A1",
    badges: ["Full-Set", "Residential", "Drawing / Plan"],
    main: "full-set",
    sector: "residential",
    type: "drawing",
    project: "One Florida Place Dormitel",
    location: "Valenzuela City",
    group: "one-florida-place"
  },
  {
    src: "./images/plans/power-layout.jpg",
    title: "Rocket Coffee Booth — Power Layout",
    badges: ["Full-Set", "Commercial", "Drawing / Plan"],
    main: "full-set",
    sector: "commercial",
    type: "drawing",
    project: "Rocket Coffee Co. Booth",
    location: "San Juan City",
    group: "rocket-coffee-booth"
  },
  {
    src: "./images/selected/vertis-garden.jpg",
    title: "Vertis Garden — Outdoor Landscape Perspective",
    badges: ["Render", "Commercial", "Exterior"],
    main: "render",
    sector: "commercial",
    type: "exterior",
    project: "Vertis Garden",
    location: "",
    group: "vertis-garden"
  },
  {
    src: "./images/selected/urban-jam-laundry-01.jpg",
    title: "Urban Jam Laundry Shop — Sheet A1",
    badges: ["Full-Set", "Commercial", "Drawing / Plan"],
    main: "full-set",
    sector: "commercial",
    type: "drawing",
    project: "Urban Jam Laundry Shop",
    location: "",
    group: "urban-jam-laundry"
  }
];

const projectDetails = {
  "urbina-residence": {
    label: "01 • Urbina Residence",
    title: "Reworking a cramped Makati studio into a warmer, more flexible home.",
    text: "This condominium unit in Makati City started as a tight studio with existing dividers that made the space feel smaller and less usable. The concept removed old partitions and introduced a half-modular, half-glass divider strategy combined with storage-focused furniture planning. Light built-ins with wood and fabric contrast, carpet zoning, mirrors, and glass were used to enlarge the perceived space. The scope covered architectural interior design, project management, and modular contractor coordination over a 5-week design-build schedule.",
    images: [
      "./images/selected/interior-living-01.jpg",
      "./images/selected/interior-bedroom-01.jpg",
      "./images/selected/interior-dining-01.jpg",
      "./images/selected/interior-kitchen-01.jpg"
    ]
  },
  "one-florida-place": {
    label: "02 • One Florida Place Dormitel",
    title: "Balancing room capacity, circulation, and presentation across a 6-storey concept.",
    text: "A multi-storey dormitel in Valenzuela City requiring varied room types, commercial space, parking, and a stronger market presence, all within budget and lot constraints. The project maximized room count and variety while balancing cost, ventilation, commercial income spaces, and penthouse requirements. Scope covered overall project management plus exterior and interior design over a 32-week period.",
    images: [
      "./images/selected/exterior-dormitel-01.jpg",
      "./images/plans/a1.jpg",
      "./images/selected/interior-dining-01.jpg"
    ]
  },
  "ready-set-learn": {
    label: "03 • Ready, Set, Learn",
    title: "Child-friendly planning and Scandinavian-inspired interiors for a small playschool fit-out.",
    text: "Designed for a Quezon City playschool and therapy center with a playful, modern Scandinavian interior. The project solved exposed piping and limited floor area using muted pastel colors, light wood textures, fun fixtures, foldable wall panels, hidden built-in storage, decorative ceiling panels, and glass dividers. The 3-week design-only scope included a full drawing set with plans, sections, elevations, schedules, detailing, BOM, and signed-and-sealed blueprints.",
    images: [
      "./images/selected/commercial-retail-01.jpg",
      "./images/plans/a-01.jpg",
      "./images/selected/interior-living-01.jpg"
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
  currentIndex: 0,
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

function availableOptions(forSelect) {
  const items = forSelect === "sector"
    ? galleryItems.filter((i) => (state.main === "all" || i.main === state.main) && (state.type === "all" || i.type === state.type))
    : galleryItems.filter((i) => (state.main === "all" || i.main === state.main) && (state.sector === "all" || i.sector === state.sector));
  return [...new Set(items.map((i) => i[forSelect]))].sort();
}

function updateDropdowns() {
  const sectorOpts = availableOptions("sector");
  const typeOpts = availableOptions("type");

  [sectorSelect, typeSelect].forEach((sel) => {
    const isSector = sel === sectorSelect;
    const avail = isSector ? sectorOpts : typeOpts;
    const current = sel.value;
    const keep = current === "all" || avail.includes(current);
    if (!keep) sel.value = "all";

    Array.from(sel.options).forEach((opt) => {
      if (opt.value === "all") return;
      opt.hidden = !avail.includes(opt.value);
    });
  });
}

function syncStateFromDropdowns() {
  if (state.sector !== sectorSelect.value) state.sector = sectorSelect.value;
  if (state.type !== typeSelect.value) state.type = typeSelect.value;
}

function setFilter(group, value) {
  state[group] = value;
  if (group !== "sector") sectorSelect.value = state.sector;
  if (group !== "type") typeSelect.value = state.type;
  document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === value);
  });
  updateDropdowns();
  syncStateFromDropdowns();
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
      `<img src="${src}" alt="${details.title} image ${index + 1}" data-dialog-img="${index}" />`
    )).join("");
    projectDialogGallery.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", () => {
        const images = details.images;
        const idx = parseInt(img.dataset.dialogImg, 10);
        state.lightboxItems = images.map((src) => ({ src, title: details.title, badges: [] }));
        state.currentIndex = idx;
        updateLightbox();
        projectDialog.close();
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });
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
