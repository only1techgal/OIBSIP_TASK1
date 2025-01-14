let display = document.getElementById('display');
let currentInput = "";
let operator = "";
let firstNum = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        let value = this.innerHTML;

        if (value >= '0' && value <= '9') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            currentInput = "";
            display.value = currentInput;
        } else if (value === '=') {
            if (firstNum !== null && operator !== "") {
                currentInput = calculate(firstNum, currentInput, operator);
                display.value = currentInput;
                firstNum = null;
                operator = "";
            }
        } else {
            if (firstNum === null) {
                firstNum = currentInput;
                operator = value;
                currentInput = "";
            } else {
                currentInput = calculate(firstNum, currentInput, operator);
                operator = value;
                firstNum = currentInput;
                display.value = currentInput;
                currentInput = "";
            }
        }
    });
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
