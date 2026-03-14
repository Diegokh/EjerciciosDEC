$(function(){
const num1 = $("#num1")
const num2 = $("#num2")
const btnSuma = $("#suma")
const btnResta = $("#resta")
const btnMult = $("#multi")
const btnDiv = $("#divi")
const btnBorrar = $("#ce")
const resultado = $("#resultado")
const form = $("#form")
const error = $("#error")


function validar(){
    error.html('')
    num1.css({"background-color" : ""})
    num2.css({"background-color" : ""})

    if(num1.val().trim() == ''){
        num1.focus()
        num1.css({"background-color" : "red"})
        error.append('Debes ingresar un valor en num1')
        return false
    }else if(isNaN(num1.val().trim())){
        num1.focus()
        num1.css({"background-color" : "red"})
        error.append('Debes ingresar un valor numerico en num1')
        return false
    }


    if(num2.val().trim() == ''){
        num2.focus()
        num2.css({"background-color" : "red"})
        error.append('Debes ingresar un valor en num2')  
        return false
    }else if(isNaN(num2.val().trim())){
        num2.focus()
        num2.css({"background-color" : "red"})
        error.append('Debes ingresar un valor numerico en num2') 
        return false
    }

    return true

}

function operar(operacion){
    if(!validar()) return
    const n1 = parseFloat(num1.val())
    const n2 = parseFloat(num2.val())
    let res 
    if(operacion === '+') res = n1 + n2 
    if(operacion === '-') res = n1 - n2
    if(operacion === 'x') res = n1 * n2
    if(operacion === '/') res = n1 / n2 

    resultado.html(`El resultado de la operacion es ${res}`)
}

btnSuma.click(function(){operar('+')})
btnResta.click(function(){operar('-')})
btnMult.click(function(){operar('x')})
btnDiv.click(function(){operar('/')})
btnBorrar.click(function(){
    num1.val('')
    num2.val('')
    resultado.html('')
    error.html('')
    num1.css({"background-color" : ""})
    num2.css({"background-color" : ""})
})

})