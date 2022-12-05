const headingEl = document.querySelector(".heading");
const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".button");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstNumber = randomIntFromInterval(1, 9);
let secondNumber = randomIntFromInterval(1, 9);
headingEl.textContent = `${firstNumber} * ${secondNumber}`;

buttonEl.addEventListener("click", function (e) {
  let result = firstNumber * secondNumber;
  if (Number(inputEl.value) === result) {
    alert("Молодец!"); // ДА
    firstNumber = randomIntFromInterval(1, 9);
    secondNumber = randomIntFromInterval(1, 9);
    headingEl.textContent = `${firstNumber} * ${secondNumber}`;
    inputEl.value = '';
  } else {
    alert("Не угадал!"); // НЕТ
  }
});