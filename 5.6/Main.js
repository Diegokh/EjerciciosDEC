const registro = new RegistroAlumnos();
//usuario123@correo.es email valido

const modulos1SMR = [
    "Montaje y Mantenimiento",
    "Redes Locales",
    "Aplicaciones Ofimáticas",
    "Sistemas Operativos"
];

const modulos2SMR = [
    "Servicios en Red",
    "Seguridad Informática",
    "Aplicaciones Web",
    "Empresa e Iniciativa Emprendedora"
];

//Datos form
const form = document.querySelector('#formAlumno')
const nombre = document.querySelector('#nombre')
const dni = document.querySelector('#dni')
const direccion = document.querySelector('#direccion')
const curso = document.querySelector('#curso')
const edad = document.querySelector('#edad');
const modulo = document.querySelector('#modulo');
const fecha = document.querySelector('#fecha');
const email = document.querySelector('#email');

// FIX PRINCIPAL: cuando el usuario pulsa "Grabar", el navegador dispara el evento
// blur del campo que tenía el foco ANTES de ejecutar el submit. Ese blur llamaba
// a checkRequired/validarDni y cortaba la validación del resto del formulario.
// Con esta bandera lo bloqueamos durante el submit.
let enviando = false;

dni.focus()


form.addEventListener('submit', function (event) {
    event.preventDefault()

    enviando = true; // bloqueamos el blur

    const repite = document.querySelector('input[name="repite"]:checked')

    let correcto = true

    if (!checkRequired(dni)) {
        correcto = false
    }

    if (!checkRequired(nombre)) {
        correcto = false
    }

    if (!checkRequired(direccion)) {
        correcto = false
    }

    if (curso.value === '') {
        document.querySelector('#error-curso').innerHTML = 'Selecciona un curso'
        curso.style.border = '2px solid red'
        correcto = false
    } else {
        document.querySelector('#error-curso').innerHTML = ''
        curso.style.border = ''
    }

    if (!checkRequired(edad)) {
        correcto = false;
    } else if (isNaN(edad.value) || Number(edad.value) <= 0) {
        document.querySelector('#error-edad').innerHTML = 'La edad debe ser un número válido';
        edad.style.border = '2px solid red';
        correcto = false;
    } else {
        document.querySelector('#error-edad').innerHTML = '';
        edad.style.border = '';
    }

    if (modulo.value === '') {
        document.querySelector('#error-modulo').innerHTML = 'Debes seleccionar un modulo';
        modulo.style.border = '2px solid red'
        correcto = false
    } else {
        document.querySelector('#error-modulo').innerHTML = ''
        modulo.style.border = ''
    }

    if (!repite) {
        document.querySelector('#error-repite').innerHTML = 'Selecciona si repite o no';
        correcto = false
    } else {
        document.querySelector('#error-repite').innerHTML = ''
    }

    if (!checkRequired(fecha)) {
        correcto = false
    }

    if (!checkRequired(email)) {
        correcto = false;
    }

    enviando = false; // desbloqueamos el blur

    if (correcto) {
        const alumno = {
            dni: dni.value.trim(),
            nombre: nombre.value.trim(),
            direccion: direccion.value.trim(),
            curso: curso.value,
            edad: Number(edad.value),
            modulo: modulo.value,
            repite: repite.value,
            fecha: fecha.value,
            email: email.value.trim()
        }
        const guardado = registro.agregarAlumno(alumno);

        if (guardado) {
            form.reset();
            const errores = document.querySelectorAll('p[id^="error-"]');
            for (let i = 0; i < errores.length; i++) {
                errores[i].innerHTML = "";
            }
            const inputsBordes = document.querySelectorAll('input, select');
            for (let i = 0; i < inputsBordes.length; i++) {
                inputsBordes[i].style.border = "";
            }
            modulo.innerHTML = '<option value="">-- Selecciona módulo --</option>';
            dni.focus();
            console.log(registro.getAlumnos());
        }
    }

})

curso.addEventListener("change", function () {

    modulo.innerHTML = '<option value="">-- Selecciona módulo --</option>';

    let listaModulos;

    if (curso.value === "1SMR") {
        listaModulos = modulos1SMR;
    } else if (curso.value === "2SMR") {
        listaModulos = modulos2SMR;
    } else {
        return;
    }

    for (let i = 0; i < listaModulos.length; i++) {
        let option = document.createElement("option");
        option.value = listaModulos[i];
        option.textContent = listaModulos[i];
        modulo.appendChild(option);
    }
});

// --- VALIDACIÓN AL PERDER EL FOCO (BLUR) ---
const campos = [dni, nombre, direccion, edad, fecha, email, curso, modulo];

for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('blur', function () {
        // FIX: ignoramos el blur si estamos en medio del submit
        if (enviando) return;

        if (this.id === 'curso' || this.id === 'modulo') {
            const errorLabel = document.querySelector('#error-' + this.id);
            if (this.value === '') {
                errorLabel.innerHTML = 'Campo obligatorio';
            } else {
                errorLabel.innerHTML = '';
            }
        } else {
            checkRequired(this);
        }
    });
}

// --- FUNCIONALIDAD DE LOS BOTONES ---

// Botón Limpiar
document.querySelector('#btnLimpiar').addEventListener('click', function () {
    form.reset();

    const errores = document.querySelectorAll('p[id^="error-"]');
    for (let i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }

    const inputsBordes = document.querySelectorAll('input, select');
    for (let i = 0; i < inputsBordes.length; i++) {
        inputsBordes[i].style.border = "";
    }

    modulo.innerHTML = '<option value="">-- Selecciona módulo --</option>';
    dni.focus();
});

// Botón Mostrar Alumnos Matriculados
document.querySelector('#btnMostrar').addEventListener('click', function () {
    console.log("--- LISTADO DE ALUMNOS ---");
    const lista = registro.getAlumnos();
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
});

// Botón Alumnos 1º SMR
document.querySelector('#btn1SMR').addEventListener('click', function () {
    console.log("--- ALUMNOS 1º SMR ---");
    const lista1 = registro.getAlumnos1SMR();
    for (let i = 0; i < lista1.length; i++) {
        console.log(lista1[i]);
    }
});

// Botón Alumno Mayor
document.querySelector('#btnMayor').addEventListener('click', function () {
    console.log("--- ALUMNO MAYOR ---");
    const mayor = registro.alumnoMayorEdad();
    if (mayor) {
        console.log(mayor);
    } else {
        console.log("No hay alumnos registrados.");
    }
});