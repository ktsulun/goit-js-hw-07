// Напиши скрипт, который реагирует 
// на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text')
}

function onInput(event){
  refs.span.style.fontSize = event.target.value + "px";
}

refs.input.addEventListener('input',onInput)

