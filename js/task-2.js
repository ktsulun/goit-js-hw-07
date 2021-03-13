const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];





document.getElementById(`ingredients`).innerHTML = ingredients.map(e =>`<li>${e}</li>`).join('');
