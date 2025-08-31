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
const equals = document.querySelector(".result")
let value = Number(display.value)


for(let i = 0; i < 10; i++){
    let button = document.createElement("button")
    button.textContent = `${i}`
    button.addEventListener("click", () => {
        display.value += `${button.textContent}`
        value = Number(display.value)
        console.log(display.value)
    })
    container.appendChild(button)
}

let operatorsArr = [...operators]

operatorsArr.forEach((operator) => {
    operator.addEventListener("click", () => {
        const firstChar = display.value[0]
        const lastChar = display.value[display.value.length - 1]
        if ("+-*/".includes(lastChar) || "+-*/".includes(firstChar)) return
        display.value += `${operator.textContent}`
        console.log(display.value)
    })
})

equals.addEventListener("click" , () => {
    evaluateExpression();
})


function evaluateExpression(){
    if (!display.value.includes("+") && !display.value.includes("-") && !display.value.includes("*") && !display.value.includes("/")){
        display.value = display.value
    } else {
        if ("+-*/".includes(display.value[0])) return
        opIndex = display.value.split('').findIndex(item => "+-*/".includes(item))
        first = Number(display.value.slice(0, opIndex))
        second = Number(display.value.slice(opIndex + 1, display.value.length))
        operator = display.value[opIndex]
        display.value = `${operation(first,second,operator)}`
    }
}
// operators.addEventListener("click", () => {
//     display.value += `${operators.textContent}`      
// })
