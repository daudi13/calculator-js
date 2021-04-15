class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {}
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.'))return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {}
    compute() { }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}
const digitButtons = document.querySelectorAll('[data-number]');
const actionButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})