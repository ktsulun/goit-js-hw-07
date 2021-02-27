
// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.getElementById('name-input'),
  span: document.getElementById('name-output')
}

function OnInput(event){
  event.target.value.replace(/\s/g, '')
  ? refs.span.textContent = event.target.value
  : refs.span.textContent = 'незнакомец' 
}



refs.input.addEventListener('input',OnInput)


