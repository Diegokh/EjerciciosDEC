//Prueba clase 2
let  numeroUsuario;
const numeros = [];
let bucleActivo = true;

while(bucleActivo === true){

    numeroUsuario = prompt("Introduce un numero");

    if( numeroUsuario == null){
        document.writeln("Has cancelado el programa.No se mostrará la media")
        bucleActivo = false;
    }

    numeroUsuario = Number(numeroUsuario);

    if(isNaN(numeroUsuario)){
        alert("Introduce un numero")
    } else if(numeroUsuario !== 0){
        numeros.push(numeroUsuario);
    }else if(numeroUsuario == 0){
        bucleActivo = false;
    }

    function notasIntroducidas(){
        document.writeln("NOTAS INTRODUCIDAS <br>" )
        document.writeln("Las notas introducidas son: " +numeros.join(", ") + "</br>")


    }

    function mediaNotas(){
        let total = 0;
        let suma = 0;
        for(let i = 0; i < numeros.length ; i++){
            suma += numeros[i];
        }


        total = suma / numeros.length;

        document.writeln("LA MEDIA DE LOS NUMEROS <br>")
        document.writeln("La media de los numeros es: " + total)
    }


}

notasIntroducidas()
mediaNotas()



