const categoryDivs = document.querySelectorAll(".recipe-category h3");

// On reload, restore the saved active item
const saved = localStorage.getItem("activeCategory");
if (saved) {
  categoryDivs.forEach(h3 => {
    if (h3.textContent === saved) {
      h3.classList.add("active");
    }
  });
}

categoryDivs.forEach(h3 => {
  h3.addEventListener("click", () => {
    categoryDivs.forEach(d => d.classList.remove("active"));
    h3.classList.add("active");
    // Save the clicked item's text to localStorage
    localStorage.setItem("activeCategory", h3.textContent);
  });
});


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
      <a href="#">&#8594;</a>
    </div>
    <div class="food-item">
      <img src="salad.jpg" alt="Food 3">
      <h4>Fresh Salad</h4>
      <a href="#">&#8594;</a>
    </div>
  `,
  drink: `
    <div class="food-item">
      <img src="drinks.jpg" alt="Drink 1">
      <h4>Fresh Juice</h4>
      <a href="#">&#8594;</a>
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

  // Save to localStorage
  localStorage.setItem("activeCategory", type);
}

// Default to food on load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("activeCategory") || "food";
  document.getElementById("category-content").innerHTML = content[saved];

  // Restore active underline
  const categoryDivs = document.querySelectorAll(".recipe-category h3");
  categoryDivs.forEach(h3 => {
    if (h3.textContent.toLowerCase().replaceAll(" ", "") === saved) {
      h3.classList.add("active");
    }
  });
});

console.log(localStorage.clear());