const resultado = document.querySelector('#resultado')
let activo = true

document.addEventListener('keydown', (e)=>{
    if(!activo) return

    resultado.textContent = `Has pulsado la tecla ${e.key} con el codigo ${e.keyCode}`

    if(e.key === 'Enter'){
        activo = false
        resultado.textContent = `Proceso finalziado - Proceso finalizado - Has pulsado la tecla ${e.key} con el codigo ${e.keyCode}`
    }

})