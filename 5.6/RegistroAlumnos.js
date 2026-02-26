class Alumnos{
    constructor(){
        this._alumnos = []
    }

    getAlumnos(){
        return this._alumnos;
    }

    //agregar alumno comprobando si existe

    agregarAlumno(alumno){
        for(let i = 0; i < this._alumnos.length ; i++){

            //compruebo si existe
            if(this._alumnos[i] === alumno.dni){
                alert("El dni ya esta vinculado a un alumno")
            }

            if(this._alumnos[i] === alumno.email){
                alert("El email ya esta vinculado a un alumno")
            }
    }

    this.alumnos.push(alumno)
        
    }

    getAlumnos1SMR(){
        const alumnos1 = []

        for(let i = 0; i < this._alumnos.length ; i++){
            if(this._alumnos[i].curso === "1SMR"){
                alumnos1.push(this._alumnos[i])
            }
        }
        return alumnos1
    }

    alumnoMayorEdad(){
        if(this._alumnos.length === 0){
            return null;
        }

        let mayor = this._alumnos[0];

        for(let i = 1; i < this._alumnos.length; i++){
            if(this._alumnos[i].edad > mayor.edad){
                mayor = this._this[i]
            }
        }

        return mayor
    }

    //limpiar 

    limpiarRegistro(){
        this._alumnos = []
    }

    

}