let inputArray = [];
let firstOperand = 0;
let secondOperand = 0;
let operator = "";

//Outputs
const firstScreen = document.getElementById("first_screen");
const secondScreen = document.getElementById("second_screen");

//Inputs
const clearButton = document.getElementById("clear__button");
const deleteButton = document.getElementById("delete__button");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const decimal = document.querySelectorAll("[data-decimal]");

numbers.forEach((number) => {
  number.addEventListener("click", () => appendValue(number.innerHTML));
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => appendValue(operator.innerHTML));
});

decimal[0].addEventListener("click", () => appendValue("."));

clearButton.addEventListener("click", () => clearInput());

deleteButton.addEventListener("click", () => deleteInput());

window.addEventListener("keydown", (e) => handleKeyboardKey(e));

function handleKeyboardKey(e) {
  if (e.key >= 0 && e.key <= 9) {
    appendValue(e.key);
  }
  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "."
  ) {
    appendValue(e.key);
  }
}

function clearInput() {
  inputArray = [];
  firstValue = 0;
  secondValue = 0;
  operand = "";
  firstScreen.textContent = "";
  secondScreen.textContent = "";
}

function deleteInput() {
  inputArray.pop();
  updateScreen();
  console.log(inputArray);
}

function appendValue(value) {
  inputArray.push(value);
  console.log(inputArray);
  updateScreen();

  if(value === "="){
    parseOperation()
  }
}

function updateScreen() {
  firstScreen.textContent = inputArray.join("");
}

function parseOperation(){
    inputArray.forEach((element) => {
        if (
            element === "+" ||
            element === "-" ||
            element === "*" ||
            element === "/" ||
            element === "."
          ) 
    })
}

function calculate(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "/") {
    return number1 / number2;
  }
}
