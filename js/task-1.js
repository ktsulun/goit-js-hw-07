const categoriesItemsArray = document.querySelectorAll(`.item`);
console.log(`В списке ${categoriesItemsArray.length} категории`);

// console.log(categoriesItemsArray);

// for (let i = 0; i < categoriesItemsArray.length; i += 1) {
//   const categoriesItemTitle = categoriesItemsArray[i].querySelector(`h2`);
//   const categoryList = categoriesItemsArray[i].querySelectorAll(`li`);

//   console.log(
//     `Категория: ` +
//       categoriesItemTitle.textContent +
//       `\nКоличество элементов: ` +
//       categoryList.length
//   );
// }

categoriesItemsArray.forEach((element) => {
  const categoriesItemTitle = element.querySelector(`h2`);
  const categoryList = element.querySelectorAll(`li`);

  console.log(
    `Категория: ${categoriesItemTitle.textContent} \nКоличество элементов: ${categoryList.length}`
  );
});
