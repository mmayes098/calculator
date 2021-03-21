var currentNumber = 0;

function add(a, b) {
    var result = a + b;
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

    return result;
}

function updateDisplay(a) {
    const display = document.getElementById("display");
    const child = document.getElementById("output");
    const div = document.createElement('div');
    div.setAttribute('id', 'output');
    div.textContent = a;
    display.removeChild(child);
    display.appendChild(div);
}