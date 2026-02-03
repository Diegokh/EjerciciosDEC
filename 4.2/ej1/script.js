const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operacion = document.querySelector('#desp')
const boton = document.querySelector('#boton')
const miForm = document.querySelector('#miForm')
const resultadoForm = document.querySelector('#resultado')

miForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let resultado;

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    if (num1.value.trim() === '' || num2.value.trim() === '') {
        alert('Debes insertar un valor')
        return
    } else if (isNaN(n1) || isNaN(n2)) {
        alert('Debes insertar un valor numerico')
        return
    }

    if(operacion.value === 'sumar'){
        resultado = n1 + n2;
    }else if(operacion.value === 'restar'){
        resultado = n1 - n2;
    }else if(operacion.value === 'multiplicacion'){
        resultado = n1 * n2;
    }else if(operacion.value === 'division'){
        if(n2 === 0){
            alert('No se puede dividir por 0')
            num2.value = ''
            num2.focus()
            return
        }else{
            resultado = n1/n2
        }
    }

    resultadoForm.innerHTML = `La ${operacion.value} de ${n1} y ${n2} es ${resultado}`
    
    

})

