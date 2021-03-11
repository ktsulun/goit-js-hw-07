const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEls = [];

ingredients.map(e => listEls.push(`<li>${e}</li>`));

document.getElementById(`ingredients`).innerHTML = [...listEls].join('');
