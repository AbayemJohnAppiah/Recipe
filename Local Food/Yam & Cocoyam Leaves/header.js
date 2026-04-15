const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ✅ Use the correct ID "categories"
const categoriesToggle = document.getElementById("categories");
const dropdown = document.querySelector(".categorie-links");

categoriesToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("active");
});