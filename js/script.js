// HERO CAROUSEL
// Carousel
let slides=document.querySelectorAll(".slide");
let current=0;

setInterval(()=>{
  slides[current].classList.remove("active");
  current=(current+1)%slides.length;
  slides[current].classList.add("active");
},4000);

// Testimonials
let t=document.querySelectorAll(".testimonial");
let ti=0;

setInterval(()=>{
  t[ti].classList.remove("active");
  ti=(ti+1)%t.length;
  t[ti].classList.add("active");
},4500);
