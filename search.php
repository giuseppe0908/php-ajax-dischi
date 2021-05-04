<?php

    include './_partials/dati.php';
    if ($_GET['autore']) {
      $artist = $_GET['autore'];
      header('Content-Type: application/json');
      foreach ($database as $key => $value) {
          if ($artist == $value['author']) {
            $db_scelta[] = $value ;
          }

      }

      // var_dump($db_scelta);

      echo json_encode($db_scelta);
    }else {
      echo json_encode($database);
    }


 ?>
