const input = document.querySelector("#name-input");
const log = document.getElementById("name-output");

input.addEventListener("input", updateValue);

function updateValue(event) {
  log.textContent = event.target.value;
}
