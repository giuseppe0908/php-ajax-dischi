<?php
    include __DIR__.'/./_partials/dati.php';  
    header('Content-Type: application/json');
    echo json_encode($database);
 ?>
