<?php

// PHP Scripts goes Here
    if( 
    isset($_POST["salutation"]) && 
    isset($_POST["firstname"]) &&
    isset($_POST["lastname"]) &&
    isset($_POST["email"]) &&
    isset($_POST["phone"]) &&
    isset($_POST["course"]) &&
    isset($_POST["industry"]) &&
    isset($_POST["message"]) &&
    isset($_POST["areaofinterest"])
    ) { 
        $salutation = trim($_POST['salutation']);
        $name = trim($_POST['firstname']);
        $lastname = trim($_POST['lastname']);
        $email = trim($_POST['email']);
        $phone = trim($_POST['phone']);
        $course = trim($_POST['course']);
        $industry = trim($_POST['industry']);
        $comments = trim($_POST['message']);
        $areaofinterest = trim($_POST['areaofinterest']);

        $to = 'smartdicson@gmail.com';
        $subject = "Application form - $salutation $name";
        
        $message = "<table border='0' cellpadding='0' cellspacing='0' bgcolor='#f2f0f0' width='800' align='center' style='margin:0 auto; padding:0; font-family:arial;width: 600px;'> <tr> <td style='line-height: 1;'> <a href='' rel='noopener' target='_blank' style='display: block;'><img src='https://i.ibb.co/KxdMd5C/banner.jpg' style='display: block;width: 100%;' width='600' alt='ITA'/></a> </td></tr><tr> <td style='padding: 20px;font-family:arial;font-size: 19px;color: #333;'> <p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>First Name: </b>$salutation $name</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Last Name: </b>$lastname</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Email ID: </b>$email</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Phone No: </b>$phone</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Course: </b>$course</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Industry: </b>$industry</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: inline-block;width: 8em;'>Areaof Interest: </b>$areaofinterest</p><p style='margin: 0px 0px 10px 0px;font-size: 1em;'><b style='display: block;margin-bottom: 0.3em;'>Message:- </b>$comments</p></td></tr></table>";
        
        
        //$header = "From:smartdicson@gmail.com \r\n";
        //$header .= "Cc:smartdicson@gmail.com \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";
        
        $retval = mail ($to,$subject,$message,$header);
        
    } 
?>