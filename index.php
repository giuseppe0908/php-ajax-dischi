<?php
    include './_partials/dati.php';
     foreach ($database as $key => $value) {
       foreach ($value as $key => $valore) { ?>
         <div class="">
           <p><?= $key . ":". $valore ?></p>
         </div>
         <?php

       }

     }
?>
