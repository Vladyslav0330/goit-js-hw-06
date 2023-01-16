// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;
}
