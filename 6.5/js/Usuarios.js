class Usuarios{
    constructor(){
        this._usuarios = []
    }

    getUsuarios(){
        return this._usuarios
    }

    agregarUsuario(nombre,apellidos){
        const usuario = {nombre,apellidos}
        this._usuarios.push(usuario)
    }

    deleteUsuario(index){
        this._usuarios.splice(index,1)
    }

    getUsuario(index){
        return this._usuarios[index]
    }

}