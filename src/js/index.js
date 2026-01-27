const hero = document.querySelector(".hero-title");
const bottom = document.querySelector(".bottom-section");

const MIN_SCALE = 0.45;
const SCALE_DISTANCE = window.innerHeight * 0.9;

window.addEventListener("scroll", () => {
  const rect = bottom.getBoundingClientRect();

  let scale = 1 - window.scrollY / SCALE_DISTANCE;
  scale = Math.max(MIN_SCALE, scale);

  hero.style.transform = `scale(${scale})`;

  if (rect.top < window.innerHeight * 0.8) {
    hero.style.transform = `scale(${MIN_SCALE})`;
  }
});
