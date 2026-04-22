let content = {
  food: `
    <div class="food-item">
      <img src="Local food.jpg" alt="Food 1">
      <h4>Local Ghanaina Food</h4>
      <a href="Local Food/localFood.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="Fat food.jpg" alt="Food 2">
      <h4>Fast Food</h4>
      <a href="Fast Food/fastFood.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="salad.jpg" alt="Food 3">
      <h4>Fresh Salad</h4>
      <a href="Salad/salad.html">&#8594;</a>
    </div>
  `,
  drink: `
    <div class="food-item">
      <img src="drink.jpg" alt="Drink 1">
      <h4>Fresh Juices</h4>
      <a href="Drinks/drink.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="Hot-Tea.jpg" alt="Drink 2">
      <h4>Hot Tea</h4>
      <a href="Hot Tea/hot-tea.html">&#8594;</a>
    </div>
  `,
  icecream: `
    <div class="food-item">
      <img src="Ice cream.jpg" alt="Ice Cream 1">
      <h4>Vanilla Scoop</h4>
      <a href="#">&#8594;</a>
    </div>
  `
};

function showCategory(type) {
  // Update content
  document.getElementById("category-content").innerHTML = content[type];

  // Update active underline
  const categoryDivs = document.querySelectorAll(".recipe-category h3");
  categoryDivs.forEach(h3 => h3.classList.remove("active"));
  event.target.classList.add("active");

  // Save type key to localStorage
  localStorage.setItem("activeCategory", type);
}

// Default to food on load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("activeCategory") || "food";

  // Load content
  document.getElementById("category-content").innerHTML = content[saved];

  // Restore active underline
  const categoryDivs = document.querySelectorAll(".recipe-category h3");
  categoryDivs.forEach(h3 => {
    if (h3.textContent.toLowerCase().replaceAll(" ", "") === saved) {
      h3.classList.add("active");
    }
  });
});