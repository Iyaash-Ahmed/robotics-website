const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* Animated stat counters (sticky navbar + hamburger live in nav.js) */
const dataSection = document.querySelector(".data");
const nums = document.querySelectorAll(".num");
let counted = false;

window.addEventListener("scroll", () => {
  if (
    !counted &&
    dataSection &&
    window.scrollY + window.innerHeight >= dataSection.offsetTop
  ) {
    counted = true;
    nums.forEach((num) => startCount(num));
  }
});

const startCount = (el) => {
  const max = parseInt(el.dataset.val, 10) || 0;
  const duration = 2000; // total animation time in ms
  const stepTime = 20; // ms between frames
  const increment = Math.max(1, Math.ceil(max / (duration / stepTime)));
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

/* Contact form (no backend — validates and confirms client-side) */
const joinForm = document.getElementById("join-form");
const formMessage = document.getElementById("form-message");

if (joinForm) {
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = joinForm.firstName.value.trim();
    const lastName = joinForm.lastName.value.trim();
    const email = joinForm.email.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!firstName || !lastName || !emailValid) {
      formMessage.style.color = "#e06c6c";
      formMessage.textContent =
        "Please enter your first name, last name and a valid email.";
      return;
    }

    formMessage.style.color = "#c49b63";
    formMessage.textContent = `Thanks, ${firstName}! You've joined the Robotics Club.`;
    joinForm.reset();
  });
}
