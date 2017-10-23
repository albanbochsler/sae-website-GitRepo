<?php

// defining empty variables
$name_error = $email_error = $phone_error = $url_error = $firstname_error = $message_error = "";
$name = $email = $phone = $message = $url = $success = $firstname = "";

// POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name_error = "Bitte geben Sie Ihren Nachnamen ein";
  } else {
    $name = test_input($_POST["name"]);
	  // regex for whitspace & letters
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $name_error = "Nur Buchstaben und Leerzeichen sind erlaubt";
    }
  }

    if (empty($_POST["firstname"])) {
        $firstname_error = "Bitte geben Sie Ihren Vornamen ein";
    } else {
        $firstname = test_input($_POST["firstname"]);
        // regex for whitspace & letters
        if (!preg_match("/^[a-zA-Z ]*$/",$firstname)) {
            $firstname_error = "Nur Buchstaben und Leerzeichen sind erlaubt";
        }
    }

  if (empty($_POST["email"])) {
    $email_error = "Bitte Tragen Sie Ihre Email-Adresse in das Feld ein";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid email format";
    }
  }

  if (empty($_POST["phone"])) {
    $phone_error = "Bitte tragen Sie Ihre Handynummer in das Feld ein";
  } else {
    $phone = test_input($_POST["phone"]);
    // check if e-mail correct
    if (!preg_match("/^(\+?)(\d{2,4})(\s?)(\-?)((\(0\))?)(\s?)(\d{2})(\s?)(\-?)(\d{3})(\s?)(\-?)(\d{2})(\s?)(\-?)(\d{2})/",$phone)) {
      $phone_error = "Ungültige Nummer e.g. +41 79 777 77 77";
    }
  }

  if (empty($_POST["url"])) {
    $url_error = "Bitte Tragen Sie Ihre Webseite in das Feld ein";
  } else {
    $url = test_input($_POST["url"]);
    // check if URL address syntax is valid
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$url)) {
      $url_error = "Ungültige URL e.g. http://www.muster.ch";
    }
  }

  if (empty($_POST["message"])) {
    $message_error = "Bitte Tragen Sie Ihre Nachricht in das Feld ein";
  } else {
    $message = test_input($_POST["message"]);
  }

    if ($name_error == '' and $email_error == '' and $phone_error == '' and $url_error == '' and $firstname_error == '' and $message_error == '')
    {
        $message_body = '';
        unset($_POST['submit']);
        foreach ($_POST as $key => $value) {
            $message_body .= "$key: $value\n";
        }
    }

    $to = 'alban.bochsler@gmail.com';
    $subject = 'Anfrage über Kontaktformular';
    if (mail($to, $subject, $message)){
        $success = "Ihre Nachricht wurde übermittelt, Sie werden in kürz benachrichtigt!";
        //reset form values
        $name = $email = $phone = $message = $url = $firstname = '';
    }




}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}