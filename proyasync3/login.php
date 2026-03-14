<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    
    if($user === 'admin' && $pass === '1234'){
        echo 'pass';
    } else {
        echo 'fail';
    }
?>