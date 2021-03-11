const categoriesInArrey = document.querySelectorAll('.item');

console.log(`В списке ${categoriesInArrey.length} категории.`);

categoriesInArrey.forEach(e =>
  console.log(
    `Категория: ${e.querySelector('h2').textContent}
  Количество элементов: ${e.querySelectorAll('li').length}`,
  ),
);
