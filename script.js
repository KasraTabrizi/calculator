const display = document.getElementById("display");
const clearButton = document.getElementById("clear__button");
const deleteButton = document.getElementById("delete__button");
const gridButtons = document.getElementsByClassName("grid__button");

let inputArray = [];

for (let i = 0; i < gridButtons.length; i++) {
  console.log(gridButtons[i].innerHTML);
  gridButtons[i].addEventListener("click", function (e) {
    let value = e.target.textContent;
    console.log("Input Value: ", value);
    inputArray.push(value);
    console.log(inputArray);
  });
}

function operation(number1, number2, operator) {
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
