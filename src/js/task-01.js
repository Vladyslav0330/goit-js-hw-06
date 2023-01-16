const numCategorEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numCategorEl.length}`);

const categoriesEl = numCategorEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
