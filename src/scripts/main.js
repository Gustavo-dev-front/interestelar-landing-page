const HEADER = document.querySelector(".header");
let scrolled = false;

window.addEventListener("scroll", () => {
  if (!scrolled & (window.scrollY >= 142))
    HEADER.classList.add("header--scrolled");
  else HEADER.classList.remove("header--scrolled");
});
