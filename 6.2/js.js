
document.addEventListener("DOMContentLoaded", function () {

    const inputTexto = document.querySelector('#nombre')
    const inputFecha = document.querySelector('#fecha')
    const btnNombre = document.querySelector('#boton1')
    const btnFecha = document.querySelector('#boton2')

    btnNombre.addEventListener('click', function () {

        inputTexto.value = 'Diego'
        btnNombre.value = 'Cambiado'

    })

    btnFecha.addEventListener('click', function (){
        const hoy = new Date()

        let anio = hoy.getFullYear()
        let mes = hoy.getMonth() + 1
        let dia = hoy.getDate()

        if (mes < 10) {
            mes = '0' + mes
        }

        if(dia < 10){
            dia = '0' + dia
        }

        let fechaFormateada = anio + "-" + mes + "-" + dia;

        inputFecha.value = fechaFormateada;
    })







})
