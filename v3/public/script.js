const galleryItems = [
  {
    src: "./images/selected/interior-living-01.jpg",
    title: "Living area",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Residential",
    primary: ["visualization", "interior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/interior-bedroom-01.jpg",
    title: "Bedroom",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Residential",
    primary: ["visualization", "interior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/interior-dining-01.jpg",
    title: "Dining area",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Residential",
    primary: ["visualization", "interior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/interior-kitchen-01.jpg",
    title: "Kitchen",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Residential",
    primary: ["visualization", "interior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/interior-lounge-01.jpg",
    title: "Lounge",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Residential",
    primary: ["visualization", "interior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/commercial-retail-01.jpg",
    title: "Retail interior",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Interior • Commercial",
    primary: ["visualization", "interior"],
    secondary: ["commercial"]
  },
  {
    src: "./images/selected/commercial-cafe-01.jpg",
    title: "Cafe perspective",
    topLabel: "Sample Full-Set Interior Design Project",
    bottomLabel: "Interior • Commercial",
    primary: ["coffee-set", "full-interior"],
    secondary: ["commercial"]
  },
  {
    src: "./images/selected/commercial-plan-01.jpg",
    title: "Cafe plan board",
    topLabel: "Sample Full-Set Interior Design Project",
    bottomLabel: "Technical • Commercial",
    primary: ["coffee-set", "full-interior"],
    secondary: ["commercial", "technical"]
  },
  {
    src: "./images/selected/exterior-house-01.jpg",
    title: "Residential facade",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Exterior • Residential",
    primary: ["visualization", "exterior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/exterior-house-02.jpg",
    title: "House perspective",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Exterior • Residential",
    primary: ["visualization", "exterior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/exterior-dormitel-01.jpg",
    title: "Dormitel exterior",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Exterior • Residential",
    primary: ["visualization", "exterior"],
    secondary: ["residential"]
  },
  {
    src: "./images/selected/exterior-resort-01.jpg",
    title: "Resort view",
    topLabel: "3D Visualization Renderings",
    bottomLabel: "Exterior • Commercial",
    primary: ["visualization", "exterior"],
    secondary: ["commercial"]
  },
  {
    src: "./images/plans/a-01.jpg",
    title: "Architectural sheet preview",
    topLabel: "Sample Full-Set Architectural Project",
    bottomLabel: "Technical • Drawings",
    primary: ["full-architecture"],
    secondary: ["technical"]
  },
  {
    src: "./images/plans/a1.jpg",
    title: "Building plan sheet",
    topLabel: "Sample Full-Set Architectural Project",
    bottomLabel: "Technical • Drawings",
    primary: ["full-architecture"],
    secondary: ["technical"]
  },
  {
    src: "./images/plans/power-layout.jpg",
    title: "Power layout",
    topLabel: "Sample Full-Set Architectural Interior Project",
    bottomLabel: "Technical • Drawings",
    primary: ["full-interior"],
    secondary: ["technical"]
  }
];

const projectDetails = {
  "residential-interior": {
    label: "Featured Project 01",
    title: "Residential Interior Project Placeholder",
    description: "This popup is reserved for a finished residential interior case study with better captions, before-and-after reasoning, more images, and a stronger written walkthrough.",
    images: [
      "./images/selected/interior-bedroom-01.jpg",
      "./images/selected/interior-dining-01.jpg",
      "./images/selected/interior-kitchen-01.jpg"
    ]
  },
  "full-set-architecture": {
    label: "Featured Project 02",
    title: "Full-Set Architecture Project Placeholder",
    description: "This popup will hold a complete architectural set with the selected project drawings, perspectives, and fuller project explanation once the final folder is supplied.",
    images: [
      "./images/selected/exterior-dormitel-01.jpg",
      "./images/plans/a-01.jpg",
      "./images/plans/a1.jpg"
    ]
  },
  "full-set-interior": {
    label: "Featured Project 03",
    title: "Sample Full-Set Interior Design Project Placeholder",
    description: "This popup is intended for the coffee house or another full interior design package with mood board, floor plan, section, and render sequence kept together.",
    images: [
      "./images/selected/commercial-cafe-01.jpg",
      "./images/selected/commercial-plan-01.jpg",
      "./images/selected/commercial-retail-01.jpg"
    ]
  }
};

const state = {
  primary: "all",
  secondary: "all",
  visibleItems: [],
  activeIndex: 0
};

const galleryGrid = document.getElementById("galleryGrid");
const primaryFilters = document.getElementById("primaryFilters");
const secondaryFilters = document.getElementById("secondaryFilters");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxClose = document.getElementById("lightboxClose");
const projectModal = document.getElementById("projectModal");
const projectClose = document.getElementById("projectClose");
const projectModalLabel = document.getElementById("projectModalLabel");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectModalGallery = document.getElementById("projectModalGallery");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

function matchesPrimary(item) {
  return state.primary === "all" || item.primary.includes(state.primary);
}

function matchesSecondary(item) {
  return state.secondary === "all" || item.secondary.includes(state.secondary);
}

function getVisibleItems() {
  return galleryItems.filter((item) => matchesPrimary(item) && matchesSecondary(item));
}

function renderGallery() {
  state.visibleItems = getVisibleItems();
  galleryGrid.innerHTML = "";

  state.visibleItems.forEach((item, index) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    figure.tabIndex = 0;
    figure.innerHTML = `
      <img src="${item.src}" alt="${item.title}" />
      <figcaption class="gallery-caption">
        <div class="card-caption-top">
          <span>${item.topLabel}</span>
          <span>${item.bottomLabel}</span>
        </div>
        <strong class="gallery-title">${item.title}</strong>
        <span class="gallery-meta">Grouped viewer opens within this category</span>
      </figcaption>
    `;
    figure.addEventListener("click", () => openLightbox(index));
    figure.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
    galleryGrid.appendChild(figure);
  });
}

function openLightbox(index) {
  state.activeIndex = index;
  updateLightbox();
  lightboxModal.showModal();
}

function updateLightbox() {
  const item = state.visibleItems[state.activeIndex];
  if (!item) {
    return;
  }
  lightboxImage.src = item.src;
  lightboxImage.alt = item.title;
  lightboxCaption.textContent = `${item.title} — ${item.topLabel} — ${item.bottomLabel}`;
}

function cycleLightbox(direction) {
  if (!state.visibleItems.length) {
    return;
  }
  state.activeIndex = (state.activeIndex + direction + state.visibleItems.length) % state.visibleItems.length;
  updateLightbox();
}

function setFilter(group, value) {
  state[group] = value;
  document
    .querySelectorAll(`[data-filter-group="${group}"]`)
    .forEach((button) => button.classList.toggle("is-active", button.dataset.filter === value));
  renderGallery();
}

function openProjectModal(projectKey) {
  const project = projectDetails[projectKey];
  if (!project) {
    return;
  }

  projectModalLabel.textContent = project.label;
  projectModalTitle.textContent = project.title;
  projectModalDescription.textContent = project.description;
  projectModalGallery.innerHTML = "";

  project.images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${project.title} placeholder image ${index + 1}`;
    projectModalGallery.appendChild(img);
  });

  projectModal.showModal();
}

primaryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) {
    return;
  }
  setFilter("primary", button.dataset.filter);
});

secondaryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) {
    return;
  }
  setFilter("secondary", button.dataset.filter);
});

lightboxPrev.addEventListener("click", () => cycleLightbox(-1));
lightboxNext.addEventListener("click", () => cycleLightbox(1));
lightboxClose.addEventListener("click", () => lightboxModal.close());
projectClose.addEventListener("click", () => projectModal.close());

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProjectModal(button.dataset.project));
});

[lightboxModal, projectModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) {
      modal.close();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (lightboxModal.open) {
    if (event.key === "ArrowLeft") {
      cycleLightbox(-1);
    }
    if (event.key === "ArrowRight") {
      cycleLightbox(1);
    }
  }
});

menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

renderGallery();
