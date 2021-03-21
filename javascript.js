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