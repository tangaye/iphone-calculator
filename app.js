const screenEl = document.querySelector('.screen')
const checkAnswer = document.querySelector("button:nth-last-child(2)")
let operands;

const handleOnClick = event => {
    const target = event.target
    const targetClasses = [...target.classList]

    if (targetClasses.includes('btn--switch')) toggleDarkMode()

    if (targetClasses.includes('btn--calc')) {

        screenEl.innerHTML = (target.textContent == "AC") ? "" :
            (target.textContent == "=") ? screenEl.innerHTML :
            screenEl.innerHTML += target.textContent
        operands = screenEl.innerHTML
    }
}

const toggleDarkMode = () => document.body.classList.toggle('light')

onclick = event => handleOnClick(event)


const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const divide = (num1, num2) => num1 / num2
const multiply = (num1, num2) => num1 * num2

const splitOperands = (numbers, operator) => {
    return { num1: Number(numbers.split(`${operator}`)[0]), num2: Number(numbers.split(`${operator}`)[1]) }
}

checkAnswer.addEventListener("click", () => {

    if (operands.includes("+")) {
        screenEl.innerHTML = add(splitOperands(operands, "+").num1, splitOperands(operands, "+").num2)

    } else if (operands.includes("-")) {

        screenEl.innerHTML = subtract(splitOperands(operands, "-").num1, splitOperands(operands, "-").num2)
    } else if (operands.includes("÷")) {
        screenEl.innerHTML = (parseInt(operands.split("÷")[1]) === 0) ? "Error" :
            divide(splitOperands(operands, "÷").num1, splitOperands(operands, "÷").num2)
    } else if (operands.includes("X")) {
        screenEl.innerHTML = multiply(splitOperands(operands, "X").num1, splitOperands(operands, "X").num2)
    }

})