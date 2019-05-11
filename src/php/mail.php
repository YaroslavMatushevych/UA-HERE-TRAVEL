<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comment = $_POST['text'];
    $price = $_POST['price'];

    $mainCustomerInfo = ["New contact request: Name: ", $name, ', Email: ', $email, ', Comments: ',$comment, ', Price: ',$price];

    $message = implode('',$mainCustomerInfo);

    echo $message;

//    mail("example@mail.com", $subject, $message);

}

?>