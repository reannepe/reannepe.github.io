const images = [
  { src: "images/interior/1.jpg", cat: "interior" },
  { src: "images/interior/2.jpg", cat: "interior" },
  { src: "images/interior/3.jpg", cat: "interior" },
  { src: "images/interior/4.jpg", cat: "interior" },
  { src: "images/interior/5.jpg", cat: "interior" },
  { src: "images/interior/6.jpg", cat: "interior" },
  { src: "images/interior/7.jpg", cat: "interior" },
  { src: "images/interior/8.jpg", cat: "interior" },
  { src: "images/interior/9.jpg", cat: "interior" },
  { src: "images/interior/10.jpg", cat: "interior" },
  { src: "images/interior/11.jpg", cat: "interior" },
  { src: "images/interior/12.jpg", cat: "interior" },
  { src: "images/interior/16.jpg", cat: "interior" },
  { src: "images/interior/17.jpg", cat: "interior" },
  { src: "images/interior/18.jpg", cat: "interior" },
  { src: "images/interior/19.jpg", cat: "interior" },
  { src: "images/interior/21.jpg", cat: "interior" },
  { src: "images/interior/24.jpg", cat: "interior" },
  { src: "images/interior/27.jpg", cat: "interior" },
  { src: "images/interior/28.jpg", cat: "interior" },
  { src: "images/exterior/Dormitel.jpg", cat: "exterior" },
  { src: "images/exterior/Resort.jpg", cat: "exterior" },
  { src: "images/exterior/1.jpg", cat: "exterior" },
  { src: "images/exterior/2.jpg", cat: "exterior" },
  { src: "images/exterior/3.jpg", cat: "exterior" },
  { src: "images/exterior/1.1-01.jpg", cat: "exterior" },
  { src: "images/exterior/3.1-01.jpg", cat: "exterior" },
  { src: "images/commercial/carwash-cafe.jpg", cat: "commercial" },
  { src: "images/commercial/retail-store.jpg", cat: "commercial" },
  { src: "images/commercial/1.jpg", cat: "commercial" },
  { src: "images/commercial/1.1.jpg", cat: "commercial" },
  { src: "images/commercial/3.jpg", cat: "commercial" },
  { src: "images/commercial/4.jpg", cat: "commercial" },
  { src: "images/commercial/5.jpg", cat: "commercial" },
  { src: "images/commercial/6.jpg", cat: "commercial" },
  { src: "images/commercial/7.jpg", cat: "commercial" },
  { src: "images/commercial/9.jpg", cat: "commercial" },
  { src: "images/commercial/10.jpg", cat: "commercial" },
  { src: "images/commercial/26.jpg", cat: "commercial" },
  { src: "images/commercial/27.jpg", cat: "commercial" },
  { src: "images/plans/A-01.pdf", cat: "plans" },
  { src: "images/plans/A-02.pdf", cat: "plans" },
  { src: "images/plans/A-03.pdf", cat: "plans" },
  { src: "images/plans/A-04.pdf", cat: "plans" },
  { src: "images/plans/A-05.pdf", cat: "plans" },
  { src: "images/plans/A1.pdf", cat: "plans" },
  { src: "images/plans/A2.pdf", cat: "plans" },
  { src: "images/plans/A3.pdf", cat: "plans" },
  { src: "images/plans/A4.pdf", cat: "plans" },
  { src: "images/plans/A5.pdf", cat: "plans" },
  { src: "images/plans/A6.pdf", cat: "plans" },
  { src: "images/plans/POWER LAYOUT.pdf", cat: "plans" },
];

const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentFilter = "all";
let currentIndex = 0;
let filteredImages = [];

function renderGallery(filter) {
  gallery.innerHTML = "";
  filteredImages = filter === "all" ? images : images.filter((img) => img.cat === filter);

  filteredImages.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.style.animationDelay = `${(i % 6) * 0.06}s`;

    const isPDF = img.src.endsWith(".pdf");

    if (isPDF) {
      item.className += " pdf-item";
      item.innerHTML = `
        <div style="
          width:100%;height:100%;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          background: var(--bg-alt);padding:24px;
        ">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
               style="width:48px;height:48px;color:var(--accent);margin-bottom:12px;opacity:0.6">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
      `;
      item.addEventListener("click", () => {
        window.open(img.src, "_blank");
      });
    } else {
      item.innerHTML = `<img src="${img.src}" alt="" loading="lazy" />`;
      item.addEventListener("click", () => openLightbox(i));
    }

    gallery.appendChild(item);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const img = filteredImages[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = "";
  lightboxCaption.textContent = "";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
  updateLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % filteredImages.length;
  updateLightbox();
}

// Filter buttons
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderGallery(currentFilter);
});

// Lightbox controls
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("open");
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".gallery-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  observer.observe(el);
});

// Initial render
renderGallery("all");
