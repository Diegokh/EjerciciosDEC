nombre.focus()
var inputs = document.getElementsByTagName("input");
const registro = new Usuarios()

function validarCambiar(evt) {
    if (evt.keyCode == 13) {

        evt.preventDefault()

        if(this.value.trim() === ''){
            this.style.border = '2px solid red'
             valido = false
            return 
        }

        this.style.border = '2px solid green'


        var next = this.nextElementSibling; 
        if (next && next.nextElementSibling && next.nextElementSibling.type == "text") {
            next.nextElementSibling.focus();
        }else{
            document.getElementById('btn').focus()
        }
    }
}

function renderTabla(){
    const tbody = document.getElementById('tbody')
    tbody.innerHTML = ''

    const usuarios = registro.getUsuarios()

    for(let i = 0; i < usuarios.length; i++){

        // Crear fila y celdas
        const tr = document.createElement('tr')

        const tdNombre = document.createElement('td')
        tdNombre.appendChild(document.createTextNode(usuarios[i].nombre))

        const tdApellidos = document.createElement('td')
        tdApellidos.appendChild(document.createTextNode(usuarios[i].apellidos))

        const tdBoton = document.createElement('td')
        const btnBorrar = document.createElement('button')
        btnBorrar.appendChild(document.createTextNode('🗑️'))

        // Evento de borrado con confirmación
        btnBorrar.addEventListener('click', function(){
            const confirmacion = confirm(`¿Seguro que quieres borrar a ${usuarios[i].nombre} ${usuarios[i].apellidos}?`)
            if(confirmacion){
                registro.deleteUsuario(i)
                renderTabla() // recargar tabla tras borrar
            }
        })

        // Montar la fila
        tdBoton.appendChild(btnBorrar)
        tr.appendChild(tdNombre)
        tr.appendChild(tdApellidos)
        tr.appendChild(tdBoton)
        tbody.appendChild(tr)
    }
}



document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault()

    if(nombre.value.trim() === '' || apellidos.value.trim() === ''){
        if(nombre.value.trim() === '') nombre.style.border = '2px solid red'
        if(apellidos.value.trim() === '') apellidos.style.border = '2px solid red'
        return
    }

    registro.agregarUsuario(nombre.value,apellidos.value)
    renderTabla()

    nombre.value = ''
    apellidos.value = ''
    nombre.style.border = ''
    apellidos.style.border = ''
    nombre.focus()
})








for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", validarCambiar, false);
}