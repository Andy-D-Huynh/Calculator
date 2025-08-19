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

let first
let second
let operator

function operation(first, second, operator){
    if (operator == "+"){
        add(first,second)
    } else if (operator == "-"){
        sub(first,second)
    } else if (operator == "*"){
        mult(first,second)
    } else if (operator == "/"){
        divide(first,second)
    } else {
        return "Invalid operator!"
    }      
}

const container = document.querySelector(".container")
const display = document.querySelector(".display")
const operators = document.querySelectorAll(".operators")
let value = parseInt(display.value)


for(let i = 0; i < 10; i++){
    let button = document.createElement("button")
    button.textContent = `${i}`
    button.addEventListener("click", () => {
        display.value += `${button.textContent}`
        value = parseInt(display.value)
        console.log(value)
    })
    container.appendChild(button)
}

let operatorsArr = [...operators]

operatorsArr.forEach((operator) => {
    operator.addEventListener("click", () => {
        display.value += `${operator.textContent}`
    })
})

// operators.addEventListener("click", () => {
//     display.value += `${operators.textContent}`      
// })
