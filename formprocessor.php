<?php

    header('Content-Type: text/html');

    $name = trim($_POST['name']);
    $email = trim ($_POST['email']);
    $message = trim($_POST['thoughts']);
    $from = "WEBSITE CONTACT US FORM SUBMISSION: ";

    //check to make sure there are no blank entries in the form
    if(($name!="")||($email!="")||($message!="")){
        mail("albaj@uwindsor.ca",$from.$name,$message,$email);//sends the email to Jose Alba
        echo '<script language="javascript">';
        echo 'alert("Message successfully sent")';
        echo '</script>';
    }
    else{
        echo '<script language="javascript">';
        echo 'alert("Email failed to send")';
        echo '</script>';
    }

    header("Location: index.html");
    die();

?>