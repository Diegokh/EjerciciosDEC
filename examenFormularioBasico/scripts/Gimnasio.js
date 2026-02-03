const socios = []

const insertarSocios = (socio) =>{

let existe = false;

    for( let i = 0; i < socios.length && !existe; i++){
        if(socios[i][0] === socio[0]){
            existe = true
        }
    }
}