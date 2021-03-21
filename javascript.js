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
        //reset or clear calculator contents here
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