<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $kyivVisit = $_POST['kyivVisit'];
    $arriveDate = $_POST['arriveDate'];
    $daysNum = $_POST['daysNum'];
    $children = $_POST['children'];
    $budget = $_POST['budget'];
    $tasteArray = $_POST['taste'];
    $taste = implode(';',$tasteArray);
    $preferencesArray = $_POST['preferences'];
    $preferences = implode(';',$preferencesArray);
    $serviceArray = $_POST['service'];
    $service = implode(';',$serviceArray);
    $comment = $_POST['comment'];

    $mainCustomerInfo = ["New customer is created: Name: ", $name, ', Email: ', $email, ", Kyiv visited: ", $kyivVisit, ' Arrive date: ',$arriveDate,', Number of days: ',$daysNum,', Children: ',$children,', Budget: ',$budget,', Taste: ',$taste,', Preferences: ',$preferences,', Additional service: ',$service,', Comments: ',$comment];

    $message = implode('',$mainCustomerInfo);

    echo $message;

    echo mail("yelymykh@gmail.com", $message);
}

?>