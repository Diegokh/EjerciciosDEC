let numeroParrafos = document.querySelectorAll('p').length
let parrafos = document.querySelectorAll('p')

alert('El numero de parrafos tipo p del documento son: ' + numeroParrafos)
alert('El contenido del segundo párrafo es: ' + parrafos[1].innerText + ' Y SE CAMBIARÁ')
alert('El contenido del ultimo parrafo es: '+ parrafos[3].innerText + ' Y SE CAMBIARÁ')


parrafos[1].firstChild.nodeValue = 'El contenido del segundo parrafo SE HA CAMBIADO'
parrafos[3].firstChild.nodeValue = 'El contenido del último parrafo SE HA CAMBIADO'

