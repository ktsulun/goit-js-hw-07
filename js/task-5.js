const refs = {
  input: document.getElementById('name-input'),
  span: document.getElementById('name-output'),
};

function OnInput(event) {
  event.target.value.replace(/\s/g, '')
    ? (refs.span.textContent = event.target.value)
    : (refs.span.textContent = 'незнакомец');
}

refs.input.addEventListener('input', OnInput);
