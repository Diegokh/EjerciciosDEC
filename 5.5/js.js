const dni = document.querySelector('#dni');
dni.focus()


function validarDni() {
  //en validar antes que nada llamaremos a checkRequired(this) y comprobamos si no esta vacio.
  //una vez comprobado eso pues ya podemos comprobar con la expresion regular.
  //si esta completo pues se vera un mensajito que dira DNI validado
  //tras comprobar con la expresion regular, podemos hacer la operacion si no esta completo.
  //parte dificil es la de añadir ademas una letra al final.
  //podria añadir la letra a un string y setearlo como value de dni.
  let errores = false;

  document.querySelector("#error-dni").innerHTML = "";
  document.querySelector("#respuesta").innerHTML = "";

  //const dni = document.querySelector("#dni");

  //expresion para validarlo completo.
  const expresionCompleta = /^[0-9]{8}\-{1}[A-HJ-NP-TV-Z]{1}$/;
  //expresion para validarlo sin letra.
  const expresionSinLetra = /^[0-9]{8}\-{1}$/;

  //dependiendo del length del string se pasara por una validacion u otra.
  let contenido = dni.value.trim().toUpperCase();

  if (contenido.length <= 8 || contenido.length > 10) {
    const error = document.querySelector("#error-dni");
    error.innerHTML = `Introduzca el formato indicado: 12345678-X`;
    const validado = document.querySelector("#respuesta");
    validado.innerHTML = "";
    dni.focus()
    return false;
  } else if (contenido.length === 9) {
    if (expresionSinLetra.exec(contenido)) {
      //sacar el guion del string
      let numeros = contenido.replace(/-/g, "");

      let resto = numeros % 23;
      let letra;
      switch (resto) {
        case 0:
          letra = "T";
          break;
        case 1:
          letra = "R";
          break;
        case 2:
          letra = "W";
          break;
        case 3:
          letra = "A";
          break;
        case 4:
          letra = "G";
          break;
        case 5:
          letra = "M";
          break;
        case 6:
          letra = "Y";
          break;
        case 7:
          letra = "F";
          break;
        case 8:
          letra = "P";
          break;
        case 9:
          letra = "D";
          break;
        case 10:
          letra = "X";
          break;
        case 11:
          letra = "B";
          break;
        case 12:
          letra = "N";
          break;
        case 13:
          letra = "J";
          break;
        case 14:
          letra = "Z";
          break;
        case 15:
          letra = "S";
          break;
        case 16:
          letra = "Q";
          break;
        case 17:
          letra = "V";
          break;
        case 18:
          letra = "H";
          break;
        case 19:
          letra = "L";
          break;
        case 20:
          letra = "C";
          break;
        case 21:
          letra = "K";
          break;
        case 22:
          letra = "E";
          break;
      }
      const dni = document.querySelector("#dni");
      dni.value = contenido + letra;
      document.querySelector("#error-dni").innerHTML = "";
      document.querySelector("#respuesta").innerHTML =
        "Letra añadida automáticamente. DNI completo: " + dni.value;
      return true;
    }
    const validado = document.querySelector("#error-dni");
    validado.innerHTML = `Introduzca el formato correcto: 12345678-X`;
    dni.focus()
    return false;
    //validamos solo numeros y guion.
  } else if (contenido.length === 10) {
    //validamos el dni entero.
    if (expresionCompleta.exec(contenido)) {
      let numeros = contenido.replace(/[-A-HJ-NP-TV-Z]/g, "");
      let resto = numeros % 23;
      let letra;
      switch (resto) {
        case 0:
          letra = "T";
          break;
        case 1:
          letra = "R";
          break;
        case 2:
          letra = "W";
          break;
        case 3:
          letra = "A";
          break;
        case 4:
          letra = "G";
          break;
        case 5:
          letra = "M";
          break;
        case 6:
          letra = "Y";
          break;
        case 7:
          letra = "F";
          break;
        case 8:
          letra = "P";
          break;
        case 9:
          letra = "D";
          break;
        case 10:
          letra = "X";
          break;
        case 11:
          letra = "B";
          break;
        case 12:
          letra = "N";
          break;
        case 13:
          letra = "J";
          break;
        case 14:
          letra = "Z";
          break;
        case 15:
          letra = "S";
          break;
        case 16:
          letra = "Q";
          break;
        case 17:
          letra = "V";
          break;
        case 18:
          letra = "H";
          break;
        case 19:
          letra = "L";
          break;
        case 20:
          letra = "C";
          break;
        case 21:
          letra = "K";
          break;
        case 22:
          letra = "E";
          break;
      }

      const validado = document.querySelector("#respuesta");
      let dniValidar = numeros + "-" + letra;

      if (dniValidar === contenido) {
        document.querySelector("#error-dni").innerHTML = "";
        document.querySelector("#respuesta").innerHTML = "El DNI es correcto.";
        return true;
      } else {
        document.querySelector("#respuesta").innerHTML = "";
        document.querySelector("#error-dni").innerHTML = "La letra del DNI es incorrecta.";
        dni.focus();
        return false;
      }


    }
    const validado = document.querySelector("#respuesta");
    validado.innerHTML = "";
    const error = document.querySelector("#error-dni");
    error.innerHTML = `Introduce el formato correcto: 12345678-X`;
    dni.focus()
    return false;
  }
}

const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validarDni();
})

dni.addEventListener("blur", function () {
  validarDni()
})