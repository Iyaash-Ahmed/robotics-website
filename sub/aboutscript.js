/* Sticky navbar is handled by the shared nav.js. This only runs the
   stat counters, and only on pages that actually have them. */
const menu = document.querySelector(".menu");
const nums = document.querySelectorAll(".num");
let start = false;

if (menu && nums.length) {
  window.addEventListener("scroll", () => {
    if (!start && window.scrollY >= menu.offsetTop) {
      start = true;
      nums.forEach((num) => startCount(num));
    }
  });
}

const startCount = (el) => {
  const max = parseInt(el.dataset.val, 10) || 0;
  const stepTime = 20;
  const increment = Math.max(1, Math.ceil(max / (2000 / stepTime)));
  let current = 0;
  const count = setInterval(() => {
    current += increment;
    if (current >= max) {
      current = max;
      clearInterval(count);
    }
    el.textContent = current;
  }, stepTime);
};
