<?php include('form-process.php'); ?>

 <link rel="stylesheet" href="../../css/contact.css" type="text/css" >


  <div class="container">
  <form id="contact" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">

    <h3>Kontaktieren Sie uns</h3>
    <br>
    <fieldset>
      <input placeholder="Ihr Vorname" name="firstname" type="text" value="<?= $firstname ?>" tabindex="1" autofocus>
       <span class="error"><?= $firstname_error ?></span>
    </fieldset>

      <fieldset>
          <input placeholder="Ihr Nachname" name="name" type="text" value="<?= $name ?>" tabindex="2" >
          <span class="error"><?= $name_error ?></span>
      </fieldset>

    <fieldset>
      <input placeholder="Your Email Address" name="email" type="text" value="<?= $email ?>" tabindex="3" >
      <span class="error"><?= $email_error ?></span>
    </fieldset>

    <fieldset>
      <input placeholder="Your Phone Number" name="phone" type="text" value="<?= $phone ?>" tabindex="4" >
      <span class="error"><?= $phone_error ?></span>
    </fieldset>

    <fieldset>
      <input placeholder="Ihre Webseite beginnt mit http://" name="url" type="text" value="<?= $url ?>" tabindex="5">
        <span class="error"><?= $url_error ?></span>
    </fieldset>

    <fieldset>
      <textarea placeholder="Geben Sie Ihre Nachricht hier ein..." name="message"  tabindex="6" ></textarea>
        <span class="error"><?= $message_error ?></span>
    </fieldset>
    <fieldset>
      <button class="more-btn btn-submit" name="submit" type="submit" id="contact-submit" data-submit="...Senden">Senden</button>
    </fieldset>
  <div class="success"><?= $success ?></div>

 </form>
  </div>
