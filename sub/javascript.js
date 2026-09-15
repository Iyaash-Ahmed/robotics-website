/* Navigation is now handled by the shared nav.js. */
let start = false;

window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const services = document.querySelector(".services");
  const portfolio = document.querySelector(".portfolio");
  const data = document.querySelector(".data");
  const nums = document.querySelectorAll(".num");

  if (about) {
    about.classList.toggle("change", window.pageYOffset >= 200);
  }

  if (about && services) {
    services.classList.toggle(
      "change",
      window.pageYOffset >= about.offsetTop + 200
    );
  }

  if (services && portfolio) {
    portfolio.classList.toggle("change", window.pageYOffset >= services.offsetTop);
  }

  if (data && nums.length && !start && window.scrollY >= data.offsetTop - 300) {
    start = true;
    nums.forEach((num) => startCount(num));
  }
});

const startCount = (el) => {
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 5);
};
