let content = {
  food: `
    <div class="food-item">
      <img src="Local food.jpg" alt="Local Food">
      <h4>Local Ghanaina Food</h4>
      <a href="Food/Local Food/localFood.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="Fat food.jpg" alt="Fat food">
      <h4>Fast Food</h4>
      <a href="Food/Fast Food/fastFood.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="salad.jpg" alt="Salad">
      <h4>Fresh Salad</h4>
      <a href="Food/Salad/salad.html">&#8594;</a>
    </div>
  `,
  drink: `
    <div class="food-item">
      <img src="Single-Drinks.jpg" alt="Single-Drinks">
      <h4>Single Juices</h4>
      <a href="Drinks/Single/single-drink.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="Multi-Drinks.jpg" alt="Multi-Drinks">
      <h4>Multi Juices</h4>
      <a href="Drinks/Multi/multi-drink.html">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="Hot-Tea.jpg" alt="Hot-Tea">
      <h4>Hot Tea</h4>
      <a href="Drinks/Hot Tea/hot-tea.html">&#8594;</a>
    </div>
  `,
  icecream: `
    <div class="food-item">
      <img src="Ice cream.jpg" alt="Ice cream">
      <h4>Vanilla Scoop</h4>
      <a href="Ice Cream & Snack/Ice Cream/ice-cream.html">&#8594;</a>
    </div>
        <div class="food-item">
      <img src="Snacks.jpg" alt="Snacks">
      <h4>SNACK</h4>
      <a href="Ice Cream & Snack/Snack/snack.html">&#8594;</a>
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