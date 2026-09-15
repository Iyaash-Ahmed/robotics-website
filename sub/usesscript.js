window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

const hamburgerMenu = document.querySelector(".hamburger-menu");
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
}

const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });
}
