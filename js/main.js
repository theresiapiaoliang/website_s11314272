// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Parallax scrolling effect
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.5}px`;
  }
});