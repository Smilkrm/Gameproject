const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equals = document.querySelector('.equals');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const result = document.querySelector('.calc-result');

let num1 = 0;
let num2 = 0;
let clickedOperator = null;

input1.addEventListener('input', () => {
  num1 = parseFloat(input1.value);
});
input2.addEventListener('input', () => {
  num2 = parseFloat(input2.value);
});

function setOperation(clickedOperator) {
  operation = clickedOperator;
}

function calculate() {
  let answer;
  switch (operation) {
    case 'add':
      answer = num1 + num2;
      break;
    case 'subtract':
      answer = num1 - num2;
      break;
    case 'multiply':
      answer = num1 * num2;
      break;
    case 'divide':
      answer = num1 / num2;
      break;
    default:
      result.textContent = 'Try again';
      break;
  }
  result.textContent = answer;
}

add.addEventListener('click', () => setOperation('add'));
subtract.addEventListener('click', () => setOperation('subtract'));
multiply.addEventListener('click', () => setOperation('multiply'));
divide.addEventListener('click', () => setOperation('divide'));

equals.addEventListener('click', calculate);
