var currentDisplay = '';
var currentOperator = "";
var numA = 0;
var numB = 0;
const display = document.getElementById("display");
const child = document.getElementById("output");
const div = document.createElement('div');
div.setAttribute('id', 'output');

function add(a, b) {
    var result = Number(a) + Number(b);
    return result;
}

function subtract(a, b) {
    var result = a - b;
    return result;
}

function multiply(a, b) {
    var result = a * b;
    return result;
}

function divide(a, b) {
    if (b == 0) {
        alert("You know you can't divide by zero!");
        currentNumber = 0;
    }

    var result = a / b;
    return result;
}

function clearDisplay(a) {
    numA = 0;
    numB = 0;
    currentDisplay = '';
    div.textContent = 'Welcome!';
    display.removeChild(child);
    display.appendChild(div);
}

function operate(a, b, operator) {
    var result = 0;
    if (operator == "add") {
        result = add(a, b);
    } else if (operator == "subtract") {
        result = subtract(a, b);
    } else if (operator == "multiply") {
        result = multiply(a, b);
    } else {
        result = divide(a, b);
    }

    div.textContent = result;
    display.removeChild(child);
    display.appendChild(div);
}

function updateDisplay(a) {
    if (a == 'add') {
        numA = currentDisplay;
        currentOperator = 'add';
        div.textContent = '+';
        currentDisplay = '';
    } else if (a == 'subtract') {
        numA = currentDisplay;
        currentOperator = 'subtract';
        div.textContent = '-';
        currentDisplay = '';
    } else if (a == 'multiply') {
        numA = currentDisplay;
        currentOperator = 'multiply';
        div.textContent = 'X';
        currentDisplay = '';
    } else if (a == 'divide') {
        numA = currentDisplay;
        currentOperator = 'divide';
        div.textContent = '/';
        currentDisplay = '';
    } else {
        div.textContent = currentDisplay + a;
        currentDisplay += a;
    }

    display.removeChild(child);
    display.appendChild(div);
}

function equals() {
    numB = currentDisplay;
    currentDisplay = '';
    
    operate(numA, numB, currentOperator);
}