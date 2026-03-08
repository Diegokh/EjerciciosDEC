
const inputs = document.getElementsByTagName('input')


function pasarMayusculas(){
    this.value = this.value.toUpperCase()
}

for(let i = 0; i < inputs.length ; i++){
    inputs[i].addEventListener('change',pasarMayusculas)
}