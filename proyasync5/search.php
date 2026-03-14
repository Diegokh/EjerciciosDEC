<?php

/*
    header("Content-type: text/xml");
$names = array(
    "Antonio García", "María López", "José Martínez",
    "Carmen Sánchez", "Francisco González", "Ana Rodríguez",
    "Manuel Fernández", "Isabel Pérez", "David Gómez",
    "Laura Díaz", "Carlos Ruiz", "Elena Moreno",
    "Pedro Jiménez", "Lucía Álvarez", "Miguel Torres",
    "Sofía Romero", "Javier Alonso", "Marta Navarro",
    "Alejandro Molina", "Paula Domínguez"
);

    $query = isset($_GET['query']) ? $_GET['query'] : '';

    echo "<?xml version=\"1.0\" ?>\n";
    echo "<names>\n";

    foreach ($names as $v) {
        if (stristr($v, $query)) {
            echo "<n>$v</n>\n";
        }
    }

    echo "</names>\n";  */


header("Content-type: application/json");
$names = array(
    "Antonio García",
    "María López",
    "José Martínez",
    "Carmen Sánchez",
    "Francisco González",
    "Ana Rodríguez",
    "Manuel Fernández",
    "Isabel Pérez",
    "David Gómez",
    "Laura Díaz",
    "Carlos Ruiz",
    "Elena Moreno",
    "Pedro Jiménez",
    "Lucía Álvarez",
    "Miguel Torres",
    "Sofía Romero",
    "Javier Alonso",
    "Marta Navarro",
    "Alejandro Molina",
    "Paula Domínguez"
);

$query = isset($_GET['query']) ? $_GET['query'] : '';

$resultado = array();

foreach ($names as $v) {
    if (stristr($v, $query)) {
        $resultado[] = $v;
    }
}

echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
// ✅ Devuelve JSON en lugar de XML
