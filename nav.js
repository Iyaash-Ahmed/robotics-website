/* ==========================================================================
   Shared navigation behaviour — sticky navbar + mobile hamburger toggle.
   Include this on every page (after the page's own scripts). It only touches
   .navbar, #hamburger and #navigation, so it is safe alongside page scripts.
   ========================================================================== */
(function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger");
  const navigation = document.getElementById("navigation");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 0);
    });
  }

  if (hamburger && navigation) {
    const icon = hamburger.querySelector("i");

    const setMenu = (open) => {
      navigation.classList.toggle("active", open);
      hamburger.setAttribute("aria-expanded", String(open));
      if (icon) icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    };

    hamburger.addEventListener("click", () =>
      setMenu(!navigation.classList.contains("active"))
    );
    hamburger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setMenu(!navigation.classList.contains("active"));
      }
    });

    // Close the menu after a link is tapped (mobile)
    navigation
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", () => setMenu(false)));
  }
})();
