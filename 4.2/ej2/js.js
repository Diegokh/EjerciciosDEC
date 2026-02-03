/*
Se trata de hacer un programa con una función Jugador(), que muestre la 
fuerza inicial del jugador, y su incremento, usando this. Una vez creada la 
función, crear un objeto que llame a esa función y realice lo que se indica. 
Por er ejemplo, si la fuerza inicial es 2 e incremento en 1 ahora su fuerza será 
3. 
*/
/*

const fuerzaInicial = Number(prompt("Introduce la fuerza inicial"));
const incremento = Number(prompt("Introduce el incremento"));

function Jugador(fuerzaInicial,fuerzaIncrementada){
    this.fuerzaInicial = fuerzaInicial;
    this.fuerzaIncrementada = fuerzaIncrementada;

    this.incrementar = function(){
        this.fuerzaInicial = this.fuerzaInicial + this.fuerzaIncrementada;
        return this.fuerzaInicial;
    }
};

const jugador1 = new Jugador(3,1);
const jugador2 = new Jugador(fuerzaInicial, incremento);

console.log(jugador1.incrementar());
console.log(jugador2.incrementar());


/*ESC6 */

const fuerzaInicial = Number(prompt("Introduce la fuerza inicial"));
const incremento = Number(prompt("Introduce el incremento"));

class Jugador{
    constructor(fuerzaInicial,fuerzaIncrementada){
        this.fuerzaInicial = fuerzaInicial;
        this.fuerzaIncrementada = fuerzaIncrementada;
    }

    incrementar(){
        this.fuerzaInicial = this.fuerzaInicial + this.fuerzaIncrementada;
        return this.fuerzaInicial;
    }

}

let jugador1 = new Jugador(4,5);
console.log(jugador1.incrementar())
let jugador2 = new Jugador(fuerzaInicial,incremento);
console.log(jugador2.incrementar())
