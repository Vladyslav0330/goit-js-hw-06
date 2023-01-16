const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsEl = document.querySelector("#ingredients");

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredients[i];

  elements.push(itemEl);
}

console.log(elements);

listIngredientsEl.append(...elements); 