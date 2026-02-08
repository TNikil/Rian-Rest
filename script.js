// ================= CONFIG =================
const WHATSAPP_NUMBER = "+94743052300";
const LOCATION_TEXT = "Rian Rest Apartment";
const GOOGLE_MAPS_DIRECTIONS_LINK =
  "https://maps.app.goo.gl/fyHXyLoEcC5SiogB6";

const WA_MESSAGE =
  "Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!";
// =========================================

function toWaLink(number, message) {
  const clean = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${clean}?text=${text}`;
}

const waLink = toWaLink(WHATSAPP_NUMBER, WA_MESSAGE);

// WhatsApp buttons
["waTopBtn","waHeroBtn","waAboutBtn","waContactBtn","waFloat"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// Contact info
document.getElementById("waText").textContent = WHATSAPP_NUMBER;
document.getElementById("locText").textContent = LOCATION_TEXT;
document.getElementById("msgPreview").textContent = WA_MESSAGE;

// Directions button
document.getElementById("directionsBtn").href = GOOGLE_MAPS_DIRECTIONS_LINK;

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 900) nav.style.display = "none";
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.getElementById("galleryGrid").addEventListener("click", e => {
  const btn = e.target.closest(".g");
  if (!btn) return;
  lightboxImg.src = btn.dataset.img;
  lightbox.style.display = "flex";
});

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
}

lightboxClose.onclick = closeLightbox;
lightbox.onclick = e => e.target === lightbox && closeLightbox();
document.addEventListener("keydown", e => e.key === "Escape" && closeLightbox());
