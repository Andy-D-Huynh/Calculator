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