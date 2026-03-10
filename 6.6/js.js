const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btnSuma = document.querySelector('#suma')
const btnResta = document.querySelector('#resta')
const btnMult = document.querySelector('#multi')
const btnDiv = document.querySelector('#divi')
const btnBorrar = document.querySelector('#ce')
const resultado = document.querySelector('#resultado')
const form = document.querySelector('#form')
const error = document.querySelector('#error')
const btns = document.getElementsByTagName('button')


num1.focus()

function validar(){

    error.innerHTML = ''
    num1.style.backgroundColor = ''
    num2.style.backgroundColor = ''

    if(num1.value.trim() == ''){
        num1.focus()
        num1.style.backgroundColor = 'red'
        error.innerHTML += 'Debes ingresar un valor en num1'
        return false
    }

    if(num2.value.trim() == ''){
        num2.focus()
        num2.style.backgroundColor = 'red'
        error.innerHTML += 'Debes ingresar un valor en num2'
        return false
    }

    return true
}

function operar(operacion){
    if(!validar()) return
    const n1 = parseFloat(num1.value)
    const n2 = parseFloat(num2.value)
    let res 
    if (operacion === '+') res = n1 + n2
    if(operacion === '-') res = n1 - n2 
    if(operacion === 'x') res = n1 * n2 
    if(operacion === '/') res = n1 / n2


}