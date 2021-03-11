const input = document.querySelector('#validation-input');

function onBlur() {
  console.log(input.getAttribute('data-length'));
  input.value.length > input.getAttribute('data-length')
    ? (input.classList = 'invalid')
    : (input.classList = 'valid');
}

input.addEventListener('blur', onBlur);
