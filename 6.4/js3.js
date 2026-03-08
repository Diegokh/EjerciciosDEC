const texto = document.getElementById('texto')
const btn = document.querySelector('#btn')
function ocultacion(){

    if(texto.style.display === "none"){
        texto.style.display = "block"
        btn.textContent = 'Ocultar'
    }else{
        texto.style.display = "none"
        btn.textContent = 'Mostrar'
        btn.style.fontWeight = "bold"
    }
}

btn.addEventListener('click' , ocultacion)