/*
1.- Realiza un programa de animales utilizando sólo funciones constructoras y prototipos. (5 puntos)

a.	Crea una “superclase” animal que tenga como atributo su nombre y tenga una función llamada hacerRuido() que imprima por consola “Soy (nombre) y soy un animal y hago…”. (1 pto)
b.	Luego crea dos clases de animales a tu elección que “hereden” de la “superclase” anterior y tengan un atributo específico cada una y un metodo hacerRuido() que imprima “Soy (nombre) y soy un animal y hago… y tengo (atributo) y hago guaauuu” (por ejemplo, si has definido un perro). Debe reutilizar el método de Animal en la impresión. (2 pto)
c.	Haz ejemplos de usos de las “clases” anteriores. (1 pto)
d.	¿Dónde ves más adecuado definir los métodos en las funciones constructoras o en los prototipos? Justifica tu respuesta. (1 pto)





*/
function Perro(nombre, atributo) {
    Animal.call(this, nombre); // hereda el atributo nombre
    this.atributo = atributo;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
Perro.prototype.hacerRuido = function () {
    return Animal.prototype.hacerRuido.call(this) +
           " tengo " + this.atributo + " y hago guaauuu";
};


function Gato(nombre, atributo) {
    Animal.call(this, nombre);
    this.atributo = atributo;
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.hacerRuido = function () {
    return Animal.prototype.hacerRuido.call(this) +
           " tengo " + this.atributo + " y hago miau";
};

/*
const animal1 = new Animal("Pepe");
console.log(animal1.hacerRuido());

const perro1 = new Perro("Boby", "orejas grandes");
console.log(perro1.hacerRuido());

const gato1 = new Gato("Bigotitos", "bigotes largos");
console.log(gato1.hacerRuido());

*/

/**
 
2.- Haz el ejercicio anterior, pero usando sólo clases ES6 con las siguientes modificaciones. (5 puntos)
	El nombre de la clase animal debe establecerse con setter y getter. 
	En el setter del nombre del animal se deberá comprobar que si se introduce un número lanza una excepción.
	Haz ejemplos de uso de las clases anteriores.


 */


class Animal{
    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        if(typeof nombre === 'number'){
            throw new Error('No puedes introducir un numero');
            
        }
        this._nombre = nombre;
    }

    hacerRuido(){
     return `Soy ${this._nombre} y soy un animal y hago`
    }
}

class Gato extends Animal{
    constructor(nombre,atributo){
        super(nombre);
        this._atributo = atributo;
    }

    get atributo(){
        return this._atributo;
    }

    set atributo(atributo){
        return this._atributo = atributo;
    }

    hacerRuido(){
        return `${super.hacerRuido()} tengo ${this._atributo} y hago miau`
    }

}

class Perro extends Animal{
    constructor(nombre,atributo){
        super(nombre);
        this._atributo = atributo;
    }

    get atributo(){
        return this._atributo;
    }

    set atributo(atributo){
        return this._atributo = atributo;
    }

    hacerRuido(){
        return `${super.hacerRuido()} y tengo ${this._atributo} y hago guau`
    }

}




let animal1 = new Animal('pepe')
console.log(animal1.hacerRuido())
let animal2 = new Gato(3, 'bigotes')
console.log(animal2.hacerRuido())
let animal3 = new Perro('Boby', 'orejas')
console.log(animal3.hacerRuido())





