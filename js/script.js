// Simple enhancement – can be expanded later
console.log("Elegant Events website loaded successfully");

// Example future use:
// form validation
// animations
// popup gallery
// HERO CAROUSEL SCRIPT
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);
