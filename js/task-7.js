const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

function onInput(event) {
  refs.span.style.fontSize = event.target.value + 'px';
}

refs.input.addEventListener('input', onInput);
