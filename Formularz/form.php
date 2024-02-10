<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $mail =htmlspecialchars($_POST["mail"]);
        $passwd = htmlspecialchars($_POST["passwd"]);
        $wyslij = $_POST["wyslij"];
        $clear = $_POST["clear"];
        if(empty($mail)){
            echo "To pole jest wymagane do logowania";
        } elseif (!filter_var($mail,FILTER_VALIDATE_EMAIL)){
            echo "Nie wlasciwy formart adresu mail";
            echo "<br>";
        }
        
        if(empty($passwd)){
            echo "<br>";
            echo "Pole jest puste";
        }
         if(empty($mail)|| empty($passwd) || !filter_var($mail,FILTER_VALIDATE_EMAIL)){
            echo "<br>";
            echo "Prosze wypelnic powyzsze pola";
         } else {
            echo "<br>";
            echo "Dane sa poprawne logowanie powiodlo sie";
         }
    }
?>