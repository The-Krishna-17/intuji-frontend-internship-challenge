// Drop down logic for navbar

const toggles = document.querySelectorAll(".dropdown__toggle");

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown__menu").forEach((menu) => {
    menu.classList.remove("show");
  });

  toggles.forEach((toggle) => {
    if (toggle.contains(e.target)) {
      const menu = toggle.nextElementSibling;
      menu.classList.toggle("show");
      e.preventDefault();
    }
  });
});
