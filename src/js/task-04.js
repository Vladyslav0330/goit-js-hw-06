const decrementBtn = document.querySelectorAll("button")[0];
// const value = document.querySelector("#value");
let value = 0;
const incrementBtn = document.querySelectorAll("button")[1];

decrementBtn.addEventListener("click", (onDecrementBtnClick) => {
  value = value - 1;
  const valueEl = document.querySelector("span");
  valueEl.textContent = value;
});


incrementBtn.addEventListener("click", (onIncrementBtnClick) => {
  value += 1;
  const valueEl = document.querySelector("span");
  valueEl.textContent = value;
});