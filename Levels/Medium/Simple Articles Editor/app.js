const theContent = document.getElementById('content');
const fontFamily = document.getElementById('family');
const boldStyleBtn = document.getElementById('bold');
const colorsBtn = document.getElementById('change-colors');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const standardValue = document.getElementById('value');

let maxValue = 22;

const fontFamilyHandler = function () {
  theContent.style.fontFamily = this.value;
};

const boldStyleHandler = function () {
  theContent.classList.toggle('font-weight');
};

const colorAndBackgroundColorHandler = function () {
  theContent.classList.toggle('special-style');
};

let minValue;
const increaseFontSizeHandler = function () {
  if (decreaseBtn.classList.contains('disabled')) {
    decreaseBtn.classList.remove("disabled")
  }
  minValue = parseInt(standardValue.textContent);
  standardValue.textContent = minValue + 1;
  if (minValue == maxValue) {
    increaseBtn.classList.add('disabled');
    standardValue.textContent = maxValue;
  }
  theContent.style.fontSize = `${minValue + 1}px`;
};

const decreaseFontSizeHandler = function () {
  if (increaseBtn.classList.contains('disabled')) {
    increaseBtn.classList.remove("disabled")
  }
  minValue = parseInt(standardValue.textContent);
  standardValue.textContent = minValue - 1;
  console.log(minValue)
  if (minValue == 16) {
    decreaseBtn.classList.add("disabled");
    standardValue.textContent = minValue
  }
  theContent.style.fontSize = `${minValue}px`;
};

fontFamily.addEventListener('change', fontFamilyHandler);
boldStyleBtn.addEventListener('click', boldStyleHandler);
colorsBtn.addEventListener('click', colorAndBackgroundColorHandler);
increaseBtn.addEventListener('click', increaseFontSizeHandler);
decreaseBtn.addEventListener('click', decreaseFontSizeHandler);
