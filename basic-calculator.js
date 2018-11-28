const basicCalculator = (operator, num1, num2) => {
  let result;
  if (operator === "add") {
    result = add(num1, num2);
  } else if (operator === "subtract") {
    result = subtract(num1, num2);
  } else if (operator === "divide") {
    result = divide(num1, num2);
  } else if (operator === "multiply") {
    result = multiply(num1, num2);
  } else {
    result = "not math";
  }
  return result;
};

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

const answer = basicCalculator("multiply", 11, 11);
console.log(answer, "<-- this is our answer");
