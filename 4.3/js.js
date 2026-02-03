const usuario = document.querySelector('#user');
const password = document.querySelector('#pass');
const btnEnviar = document.querySelector('#btnEnviar');
const caracteresEspeciales = '!@#$%^&*()-_+=<>?/.,;:[]{}|'; 
const miForm = document.querySelector('#miForm');
const numeros = '1234567890';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const letrasMayusculas = letrasMinusculas.toUpperCase();
const usersInfo = [];


miForm.addEventListener('submit' , (event) =>{

    event.preventDefault();

    if(usuario.value === ''){
        alert('Debes insertar un usuario')
        usuario.focus()
        return
    }else if (password.value === ''){
        alert('Debes insertar una contraseña')
        password.focus()
        return
    }

        let usuarioValido = true;

    for(let i = 0; i < usuario.value.length; i++){
        if(!letrasMinusculas.includes(usuario.value[i]) && !numeros.includes(usuario.value[i])){
            usuarioValido = false;
            alert('El usuario debe incluir letras minusculas y numeros')
            usuario.focus()
            usuario.value=''
            return
        }
    }

    let contieneMay = false;
    let contieneMin = false;
    let contieneNum = false;
    let contieneCar = false;
    let passwordUserVal = false

    for(let z = 0; z < password.value.length; z++){
        if(letrasMayusculas.includes(password.value[z])){
            contieneMay = true;
        }
         if(letrasMinusculas.includes(password.value[z])){
            contieneMin = true;
        }
        
        if(numeros.includes(password.value[z])){
            contieneNum = true;
        }
        if(caracteresEspeciales.includes(password.value[z])){
            contieneCar = true;
        }
}

if(!contieneCar || !contieneMin || !contieneMay || !contieneNum){
    alert('La contraseña debe contener una letra mayuscula, una minuscula, un numeros y un caracter especial');
    password.focus()
    password.value = ''
    return
}else{
    passwordUserVal = true
}

if(usuarioValido === true && passwordUserVal === true){
    usersInfo.push({
        usuario: usuario.value,
        password: password.value
    });
    alert('Usuario Registrado')
}



})

