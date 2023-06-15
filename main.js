let operation = "";
const operators = ["+", "-", "/", "*"];

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("click", () => {
        const lastCharacter = operation.charAt(operation.length - 1);
        if (operators.includes(key.innerHTML) && operators.includes(lastCharacter)) {
            operation = operation.slice(0, -1) + key.innerHTML;
        } else if (key.innerHTML === "=") {
            document.querySelector(".result").textContent = String(eval(operation));
            operation = ""
        } else {
            operation += key.innerHTML;
        }
        showOperation(operation);
    })
    })

const showOperation = operation => document.querySelector(".operation").textContent = operation;