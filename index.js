// I guess keyboard support is just keydown??  readonly and key-mapping system... what does that mean??

let justCalculated = false

function add(a,b){
    return Math.round((a + b) * 100) / 100
}

function sub(a,b){
    return Math.round((a-b) * 100) / 100
}

function mult(a,b){
    return Math.round(a * b * 100) / 100
}

function divide(a,b){
    return Math.round(a / b * 100) / 100
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
const digits = document.querySelector(".digits")
const display = document.querySelector(".display")
const operators = document.querySelectorAll(".operators")
// const equals = document.querySelector(".result")
const clear = document.querySelector(".delete")


for(let i = 0; i < 10; i++){
    let button = document.createElement("button")
    button.textContent = `${i}`
    button.addEventListener("click", () => {
        if (!justCalculated){
            display.value += `${button.textContent}`
        } else {
            display.value = `${button.textContent}`
        }     
        
    })
    digits.appendChild(button)
}

let operatorsArr = [...operators]

operatorsArr.forEach((operator) => {
    operator.addEventListener("click", () => {
        const firstChar = display.value[0]
        const lastChar = display.value[display.value.length - 1]
        if ("+-*/".includes(lastChar) || "+-*/".includes(firstChar)) return
        middleOpIndex = display.value.split('').findIndex(item => "+-*/".includes(item))
        if (middleOpIndex > 0 && middleOpIndex < display.value.length - 1){
            evaluateExpression()
            justCalculated = false
        }
        display.value += `${operator.textContent}`
        console.log(display.value)
    })
})

let decimal = document.createElement("button")
decimal.textContent = "."
digits.appendChild(decimal)

let equals = document.createElement("button")
equals.textContent = `=`
equals.addEventListener("click" , () => {
    evaluateExpression();
    justCalculated = true
})
digits.appendChild(equals)

clear.addEventListener("click", () => {
    display.value = ""
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
        if (second == 0 && operator == "/"){
            display.value = "Invalid operation! Click clear to remove this message."
            return
        }
        display.value = `${operation(first,second,operator)}`
    }
}
// operators.addEventListener("click", () => {
//     display.value += `${operators.textContent}`      
// })
