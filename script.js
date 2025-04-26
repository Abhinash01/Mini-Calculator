const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const calcBtn = document.getElementById('calcBtn');
const resultDiv = document.getElementById('result');

calcBtn.addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const op = operator.value;
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Please enter valid numbers!";
  } else {
    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = b !== 0 ? (a / b) : "Cannot divide by zero!";
        break;
      default:
        result = "Invalid Operation";
    }
  }

  resultDiv.textContent = `Result: ${result}`;
});
