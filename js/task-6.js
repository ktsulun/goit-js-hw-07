const input = document.getElementById(`validation-input`);

input.addEventListener(`blur`, onBlurValidation);

function onBlurValidation(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    input.classList = `valid`;
  } else {
    input.classList = `invalid`;
  }
}
