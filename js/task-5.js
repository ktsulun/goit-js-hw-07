const input = document.querySelector("#name-input");
const log = document.getElementById("name-output");

input.addEventListener("input", updateValue);

function updateValue(event) {
  if (event.target.value === ``) {
    log.textContent = `незнакомец`;
  } else {
    log.textContent = event.target.value;
  }
}
