const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");
document.getElementById("menu-toggle")
.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("active");
});
document.getElementById("menu-close")
.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("active");
});
