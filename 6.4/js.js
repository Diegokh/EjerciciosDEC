const boton = document.querySelector('#btnEnviar')

function cambiar(evt) {
    if (evt.keyCode == 13) {
        var next = this.nextElementSibling; 
        if (next && next.nextElementSibling && next.nextElementSibling.type == "text") {
            next.nextElementSibling.focus();
        }else{
            boton.innerText = "CAMBIADO"
            boton.style.backgroundColor = 'blue'
            boton.style.color = 'white'
            

        }
    }
}

var inputs = document.getElementsByTagName("input");

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", cambiar, false);
}