const formulario = document.querySelector('#form')
const usuario = document.querySelector('#usuario')
const passwd = document.querySelector('#password')
const deporteSeleccionado = document.querySelector('#deporte')
//const checkBox = document.querySelectorAll('input[name="tipoSocio"]:checked');
const btnReg = document.querySelector('#btnReg');

//Establezco el foco en usuario
usuario.focus();

//Compruebo que los campos no estan vacios
function checkRequired(objeto) {
    const error = document.querySelector('#error-' + objeto.id);
    // Para quitar los espacios
    if (!objeto.value.trim()) {
        objeto.style = "border: 2px solid red";
        error.innerHTML = `El campo ${objeto.name} es obligatorio`;
        return false;
    } else {
        objeto.style = "";
        error.innerHTML = "";
        return true;
    }
}


formulario.addEventListener('submit', function (event) {
    const afiliadoSeleccionado = document.querySelector('input[name="afiliado"]:checked');

    event.preventDefault();

    let valido = true

    if (!checkRequired(usuario)) {
        valido = false
    }

    if (!checkRequired(passwd)) {
        valido = false
    }

    if (!afiliadoSeleccionado) {
        document.querySelector('#error-afiliado').innerHTML = "Tienes que seleccionar una opcion"
        valido = false;
    } else {
        document.querySelector('#error-afiliado').innerHTML = "";
    }

    if (deporteSeleccionado.value === "") {
        document.querySelector('#error-deporte').innerHTML = "Debes seleccionar un deporte";
        valido = false;
    } else {
        document.querySelector('#error-deporte').innerHTML = "";
    }



    // Cuenta los checkbox marcados
    const marcados = document.querySelectorAll('input[name="tipoSocio"]:checked').length;

    if (marcados < 2) {
        document.querySelector('#error-pase').innerHTML = "Debes seleccionar al menos 2 opciones";
        valido = false;
    } else if(marcados > 2){
        document.querySelector('#error-pase').innerHTML = "No puedes seleccionar 3 opciones"
        valido = false
    }
    
    else {
        document.querySelector('#error-pase').innerHTML = "";
    }

    if(valido){
        const checkBoxes = document.querySelectorAll('input[name="tipoSocio"]:checked');
        let valoresCheck = [];
        
        for(let i = 0; i < checkBoxes.length; i++){
            valoresCheck.push(checkBoxes[i].value)
        }

        alert("Formulario enviado correctamente")
        const formVal = {
            usuario: usuario.value,
            passwd: passwd.value,
            deporteSeleccionado: deporteSeleccionado.value,
            checkBox: valoresCheck
        }

        formulario.reset()
        console.log(formVal)
    }




})