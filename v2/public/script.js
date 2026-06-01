const galleryItems = [
  {
    src: "images/selected/interior-living-01.jpg",
    category: "interior",
    title: "Open-plan living and dining",
    subtitle: "Residential interior visualization",
    className: "is-wide is-tall"
  },
  {
    src: "images/selected/interior-bedroom-01.jpg",
    category: "interior",
    title: "Bedroom perspective",
    subtitle: "Residential interior visualization",
    className: "is-tall"
  },
  {
    src: "images/selected/interior-dining-01.jpg",
    category: "interior",
    title: "Dining and living palette study",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-kitchen-01.jpg",
    category: "interior",
    title: "Compact kitchen planning",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-lounge-01.jpg",
    category: "interior",
    title: "Soft seating and wall styling",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-living-02.jpg",
    category: "interior",
    title: "Living area with shelving focus",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-detail-01.jpg",
    category: "interior",
    title: "Finish detail vignette",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-bar-01.jpg",
    category: "interior",
    title: "Bar and storage moment",
    subtitle: "Residential interior visualization"
  },
  {
    src: "images/selected/interior-dining-02.jpg",
    category: "interior",
    title: "Dining perspective",
    subtitle: "Residential interior visualization",
    className: "is-wide"
  },
  {
    src: "images/selected/exterior-house-01.jpg",
    category: "exterior",
    title: "Residential facade study",
    subtitle: "Exterior architectural visualization"
  },
  {
    src: "images/selected/exterior-house-02.jpg",
    category: "exterior",
    title: "Alternative house perspective",
    subtitle: "Exterior architectural visualization"
  },
  {
    src: "images/selected/exterior-dormitel-01.jpg",
    category: "exterior",
    title: "Dormitel night rendering",
    subtitle: "Multi-storey exterior visualization",
    className: "is-wide"
  },
  {
    src: "images/selected/exterior-resort-01.jpg",
    category: "exterior",
    title: "Resort presentation view",
    subtitle: "Exterior architectural visualization"
  },
  {
    src: "images/selected/commercial-cafe-01.jpg",
    category: "commercial",
    title: "Cafe and carwash concept",
    subtitle: "Commercial environment visualization"
  },
  {
    src: "images/selected/commercial-retail-01.jpg",
    category: "commercial",
    title: "Retail environment perspective",
    subtitle: "Commercial interior visualization"
  },
  {
    src: "images/selected/commercial-plan-01.jpg",
    category: "commercial",
    title: "Commercial plan presentation",
    subtitle: "Planning and layout support"
  },
  {
    src: "images/plans/a-01.jpg",
    category: "drawings",
    title: "Architectural sheet preview",
    subtitle: "Perspective, context, and client-ready sheet layout"
  },
  {
    src: "images/plans/a1.jpg",
    category: "drawings",
    title: "Multi-storey plan sheet",
    subtitle: "Architectural layout and section preview"
  },
  {
    src: "images/plans/power-layout.jpg",
    category: "drawings",
    title: "Power layout preview",
    subtitle: "Technical support drawing"
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const filterGroup = document.getElementById("filterGroup");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

let activeFilter = "all";

function renderGallery(filter) {
  galleryGrid.innerHTML = "";

  galleryItems
    .filter((item) => filter === "all" || item.category === filter)
    .forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = `gallery-item ${item.className || ""}`.trim();
      figure.innerHTML = `
        <img src="${item.src}" alt="${item.title}" />
        <figcaption>
          <span class="card-tag">${item.category}</span>
          <strong>${item.title}</strong>
          <span>${item.subtitle}</span>
        </figcaption>
      `;
      figure.tabIndex = 0;
      figure.addEventListener("click", () => openLightbox(item));
      figure.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(item);
        }
      });
      galleryGrid.appendChild(figure);
    });
}

function openLightbox(item) {
  lightboxImage.src = item.src;
  lightboxImage.alt = item.title;
  lightboxCaption.textContent = `${item.title} — ${item.subtitle}`;
  lightbox.showModal();
}

filterGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) {
    return;
  }

  activeFilter = button.dataset.filter;
  document
    .querySelectorAll(".filter-button")
    .forEach((node) => node.classList.toggle("is-active", node === button));
  renderGallery(activeFilter);
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  const bounds = lightbox.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) {
    lightbox.close();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

renderGallery(activeFilter);
