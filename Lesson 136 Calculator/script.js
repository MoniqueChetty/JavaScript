let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    // debugger;
    if (isNaN(value)) {
        //not a number - Symbol
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    // if (symbol === "C") {
    //     buffer = "0";
    //     runningTotal = 0;
    // }
    console.log("handleSymbol " + symbol);
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;

        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    console.log("handelMath", symbol);
    if (buffer === "0") {
        // does nothing
        return;
    }
    const intBuffer = parseInt(buffer);
    // const intBuffer = +buffer;
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}

function flushOperation(intBuffer) {
    let i = runningTotal;
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        console.log("in x ");
        runningTotal = runningTotal * intBuffer;
    } else {
        console.log("in / ");
        runningTotal /= intBuffer;
    }
    console.log(
        "currentTotal " +
        i +
        " prevOprator " +
        previousOperator +
        " intBuffer " +
        intBuffer +
        " equales " +
        runningTotal
    );

    //   ←

    //   ×
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });
}

init();