<?php
if($_POST){

    $mailFieldsTitle = ["email-subject" => "Тема письма", "name" => "Имя", "mail" => "Email", "message" => "Сообщение", "price" => 'Цена тура'];


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    $message = '';
    foreach($_POST as $key => $value){
        if($value) {
            $message .= $mailFieldsTitle[$key].": ".$value."<br/>";
        }
    }
    echo $message;

    echo mail("yelymykh@gmail.com", $_POST['email-subject'], $message, $headers);

}

?>
