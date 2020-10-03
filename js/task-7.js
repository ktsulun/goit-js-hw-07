const controlEl = document.getElementById(`font-size-control`);
const textEl = document.getElementById(`text`);

controlEl.addEventListener("input", onInputFontSizeChange);

function onInputFontSizeChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
