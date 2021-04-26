class Calculator {
    constructor(previousValuetxt, answertxt) {
        this.previousValuetxt = previousValuetxt;
        this.answertxt = answertxt;
        this.answer = ' ';
    }
    clear() {
        this.answer = '';
        this.previousValue = '';
        this.answertxt.innerText = '';
        this.operation = '';

    }
    delete() {

    }
    appendNumber(number) {
        console.log(this.answer);
        this.answer = this.answer + number.toString();
        console.log(this.answer);
    }
    chooseOperation(operation) {
        this.operation = operation.innerText;
        console.log(this.operation)

    }
    compute() {

    }
    updateDisplay() {

        this.answertxt.innerText = this.answer;
    }
}

const btnNumber = document.querySelectorAll('[data-number]');
const btnOperation = document.querySelectorAll('[data-operation]');
const btnDelete = document.querySelector('[data-deleteit]');
const btnClear = document.querySelector('[data-all-clear]');
const btnEquale = document.querySelector('[data-equale]');
const previousValuetxt = document.querySelector('[data-previousValue]');
const answertxt = document.querySelector('[data-answer]');
const btnAdd = document.getElementById('plus');

const calculator = new Calculator(previousValuetxt, answertxt);
previousValuetxt.innerHTML = 0;

btnNumber.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

btnClear.addEventListener('click', function() {
    calculator.clear();
    calculator.updateDisplay();
})
btnEquale.addEventListener('click', function() {
    // this.previousValuetxt.innerText = this.answer;
})
var a = 0;
var b = 0;
var c = parseInt(answertxt.innerText);
btnAdd.addEventListener('click', function() {
    a = parseInt(answertxt.innerText);
    b =
        c = a + b;
    previousValuetxt.innerText = previousValuetxt.innerText + "+" + answertxt.innerText;

    console.log('Previous' + previousValuetxt.innerText);
    console.log('Answer' + answertxt.innerText);
    answertxt.innerText = parseInt(previousValuetxt.innerText) + parseInt(answertxt.innerText);
})