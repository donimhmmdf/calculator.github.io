let prevNumber = "";
let caculationOperator = "";
let currentNumber = "0";
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
const inputOperator = (operator) => {
  if (caculationOperator === "") {
    prevNumber = currentNumber;
  }
  caculationOperator = operator;
  currentNumber = "0";
};
const calculate = () => {
  let result = "";
  switch (caculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  caculationOperator = "";
};
const clearAll = () => {
  prevNumber = "";
  caculationOperator = "";
  currentNumber = "0";
};
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});
