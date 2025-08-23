function add(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

let first = null
let second = null
let operator = null

function operation(first, second, operator){
    if (operator == "+"){
        return add(first,second)
    } else if (operator == "-"){
        return sub(first,second)
    } else if (operator == "*"){
        return mult(first,second)
    } else if (operator == "/"){
        return divide(first,second)
    } else {
        return "Invalid operator!"
    }      
}

const container = document.querySelector(".container")
const display = document.querySelector(".display")
const operators = document.querySelectorAll(".operators")
let value = Number(display.value)


for(let i = 0; i < 10; i++){
    let button = document.createElement("button")
    button.textContent = `${i}`
    button.addEventListener("click", () => {
        display.value += `${button.textContent}`
        value = Number(display.value)
        console.log(value)
    })
    container.appendChild(button)
}

let operatorsArr = [...operators]

operatorsArr.forEach((operator) => {
    operator.addEventListener("click", () => {
        const lastChar = display.value[display.value.length - 1]
        if ("+-*/".includes(lastChar)) return
        display.value += `${operator.textContent}`
    })
})

// operators.addEventListener("click", () => {
//     display.value += `${operators.textContent}`      
// })
