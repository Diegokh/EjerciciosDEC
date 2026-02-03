function checkRequired(campo) {
    var valor = campo.value;
    var error = document.getElementById("error-" + campo.name);

    if (valor == "") {
        error.innerHTML = "Este campo es obligatorio";
        campo.style.border = "2px solid red";
        return false;
    } else {
        error.innerHTML = "";
        campo.style.border = "2px solid green";
        return true;
    }
}
