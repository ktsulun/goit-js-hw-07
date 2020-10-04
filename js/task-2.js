const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListEl = document.querySelector(`#ingredients`);
let ingredientsListItemArray = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsListItem = document.createElement("li");
//   ingredientsListItem.textContent = ingredients[i];
//   ingredientsListItemArray.push(ingredientsListItem);
// }
ingredients.forEach((element) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = element;
  ingredientsListItemArray.push(ingredientsListItem);
});
ingredientsListEl.append(...ingredientsListItemArray);
