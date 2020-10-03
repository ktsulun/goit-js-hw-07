const decrementBtnEl = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementBtnEl = document.querySelector(
  `button[data-action="increment"]`
);
let count = document.querySelector(`#value`);

decrementBtnEl.addEventListener(`click`, () => {
  count.innerHTML--;
});

incrementBtnEl.addEventListener(`click`, () => {
  count.innerHTML++;
});
