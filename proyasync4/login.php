<?php
    // Conexión a la base de datos
    $conexion = mysqli_connect('localhost', 'root', '', 'Practica7_4');

    // Comprobar conexión
    if(!$conexion){
        echo 'fail';
        die();
    }

    // Recoger datos del formulario
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    // Consulta a la tabla usuarios
    $query = "SELECT * FROM usuarios WHERE usuario = '$user' AND clave = '$pass'";
    $resultado = mysqli_query($conexion, $query);

    // Comprobar si existe el usuario
    if(mysqli_num_rows($resultado) > 0){
        echo 'pass';
    } else {
        echo 'fail';
    }

    mysqli_close($conexion);
?>
