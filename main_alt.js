const displayedNumber = document.querySelector(".displayed");
const clearButton = document.querySelector(".clear");
const operatorButton = document.querySelectorAll(".operator");
const modButton = document.querySelectorAll(".mod");
const numberButton = document.querySelectorAll(".number");
const equalsButton = document.querySelector(".equals");

displayedNumber.textContent = 0;
let currentNumber = "";
let result = "";
let operator = "";

function displayNumber() {
    if (currentNumber === "0" && this.textContent === "0") {
        return;
    } else {
        currentNumber += this.textContent;
        displayedNumber.textContent = currentNumber;
    }
}

function modifyNumber() {
    if (currentNumber === "") {
        return
    } else {
        switch (this.textContent) {
            case "+ / -":
                currentNumber = Number(currentNumber) * -1;
                break;
            case "%":
                currentNumber = Number(currentNumber) / 100;
                break;
        }
        displayedNumber.textContent = currentNumber;
    }}

function operate() {
    if (result != "") {
        showResult();
        operator = this.textContent;
    } else if (currentNumber === "") {
        return;
    } else {
        operator = this.textContent;
        result = currentNumber;
        currentNumber = "";
        displayedNumber.textContent = result;
    }
}

function showResult() {
    switch (operator) {
        case "+":
            result = Number(result) + Number(currentNumber);
            break;
        case "-":
            result = Number(result) - Number(currentNumber);
            break;
        case "*":
            result = Number(result) * Number(currentNumber);
            break;
        case "/":
            result = Number(result) / Number(currentNumber);
            break;
    }
    displayedNumber.textContent = result;
    currentNumber = "";
}

function clear() {
    currentNumber = "";
    result = "";
    displayedNumber.textContent = 0;
}

operatorButton.forEach((button) => button.addEventListener("click", operate));
numberButton.forEach((button) => button.addEventListener("click", displayNumber));
modButton.forEach((button) => button.addEventListener("click", modifyNumber));
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clear);