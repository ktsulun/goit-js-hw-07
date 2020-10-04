const input = document.getElementById(`validation-input`);

input.addEventListener(`blur`, onBlurValidation);

function onBlurValidation(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    input.classList = `valid`;
  } else if (event.currentTarget.value.length === 0) {
    input.classList = ``;
  } else {
    input.classList = `invalid`;
  }
}
