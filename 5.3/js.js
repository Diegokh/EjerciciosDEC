const dni = document.querySelector('#dni');
const nombre = document.querySelector('#nombre');
const fecha = document.querySelector('#fecha');
const email = document.querySelector('#email');
const web = document.querySelector('#web');
const passwd = document.querySelector('#password');
const miForm = document.querySelector('#miForm');
const regexDNI = /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
const regexWeb = /^http:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const arrayUser = [];


function checkRquiered(objeto) {
    const error = document.querySelector('#error-' + objeto.id);

    if (!objeto.value.trim()) {
        objeto.style.border = '2px solid red';
        error.innerHTML = 'El campo ' + objeto.name + ' es obligatorio';
        return false;
    } else {
        objeto.style = "";
        error.innerHTML = "";
        return true;
    }
}

function validarDNI(dni) {
    return regexDNI.test(dni);
}

function validarEmail(email) {
    return regexEmail.test(email);
}

function validarWeb(web) {
    return regexWeb.test(web);
}

function validarFecha(fecha) {
    return regexFecha.test(fecha);
}

miForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let correcto = true;

    if (!checkRquiered(dni) || !validarDNI(dni.value.trim())) {
        document.querySelector('#error-dni').innerHTML = 'Formato DNI incorrecto';
        correcto = false;
    }

    if (!checkRquiered(nombre) || nombre.value.length > 50) {
        document.querySelector('#error-nombre').innerHTML = 'El nombre no puede tener mas de 50 caracteres';
        correcto = false;
    }

     if (!checkRquiered(fecha) || !validarFecha(fecha.value.trim())) {
        document.querySelector('#error-fecha').innerHTML = 'Formato fecha incorrecto (dd/mm/yyyy)';
        correcto = false;
    }

    if (!checkRquiered(email) || !validarEmail(email.value.trim())) {
        document.querySelector('#error-email').innerHTML = 'Formato email incorrecto';
        correcto = false;
    }

    
    if (!checkRquiered(web) || !validarWeb(web.value.trim())) {
        document.querySelector('#error-web').innerHTML = 'Formato web incorrecto';
        correcto = false;
    }

    
    if ( !checkRquiered(passwd) || passwd.value.length < 8 || passwd.value.length > 10) {
        document.querySelector('#error-password').innerHTML =
            'La contraseña debe tener entre 8 y 10 caracteres';
        correcto = false;
    }


    if (correcto) {
        alert("Usuario validado correctamente")
        const usuario ={
            dni: dni.value.trim(),
            nombre: nombre.value.trim(),
            fechaNacimiento: fecha.value.trim(),
            email:email.value.trim(),
            web: web.value.trim(),
            password:passwd.value
        };
        arrayUser.push(usuario);
        miForm.reset();
        console.log(arrayUser)
    }
})
