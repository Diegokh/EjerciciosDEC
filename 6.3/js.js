document.addEventListener("DOMContentLoaded", function () {

    // Obtener todos los párrafos
    const parrafos = document.querySelectorAll("p");

    // -------------------------------------------------
    // 1.- Saca el nº de párrafos del documento
    // "El número de párrafos del documento es: "
    // -------------------------------------------------
    console.log('El numero de parrafos del documento es: ' + parrafos.length)


    // -------------------------------------------------
    // 2.- Saca el valor nodo hijo 0 del párrafo 1
    // “Párrafo DOM es dos”
    // -------------------------------------------------
    console.log(parrafos[1].firstChild.nodeValue)


    // -------------------------------------------------
    // 3.- Modifica su valor
    // "Él párrafo segundo se ha modificado"
    // -------------------------------------------------
    console.log(parrafos[1].firstChild.nodeValue = 'El parrafo segundo se ha modificado')


    // -------------------------------------------------
    // 4.- Crear un nuevo nodo tipo p
    // 'Párrafo cuatro creado usando el DOM'
    // -------------------------------------------------

    // Crear variables necesarias
    let nuevoParrafo = document.createElement('p')
    let nuevoTexto;

    // Añadir texto al párrafo
    nuevoTexto = document.createTextNode('Contenido añadido al parrafo')

    // Añadir el nuevo párrafo al body
    nuevoParrafo.appendChild(nuevoTexto)
    document.body.appendChild(nuevoParrafo)



    // Mostrar mensaje
    // "Se ha añadido el párrafo 4"
    console.log('Se ha añadido el parrafo 4')



    // Volver a sacar el número de párrafos
    // "Ahora, el número de párrafos es: "
    const parrafosActualizados = document.querySelectorAll("p");

    
    console.log('Ahora el numero de parrafos es: ' + parrafosActualizados.length)



    // -------------------------------------------------
    // 5.- Aquí iría el pantallazo
    // -------------------------------------------------



    // -------------------------------------------------
    // 6.- Borrar el párrafo creado
    // -------------------------------------------------

    // Borrar párrafo del body

    parrafos[parrafos.length - 1].remove();


    // Mostrar número de párrafos tras borrar
    const parrafosDespuesBorrar = document.querySelectorAll("p");
    // "Ahora, tras borrarlo, el número vuelve a ser 3"
    console.log('Ahora, tras borrarlo, el número vuelve a ser: ' + parrafosDespuesBorrar.length)



});