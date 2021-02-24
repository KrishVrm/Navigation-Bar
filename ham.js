// HAMBURGER NAVBAR
const hamburger = document
  .querySelector(".hamburger")
  .addEventListener("click", () => {
    const moboNav = document.querySelector(".mobo_nav");
    const hamButton = document.querySelector(".hamButton");
    hamButton.classList.toggle("hamAnimation");
    hamButton.classList.toggle("hamOutAnimation");
    moboNav.classList.toggle("hide_for_desktop");
  });
