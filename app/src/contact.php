<?php include('form-process.php'); ?>

 <link rel="stylesheet" href="../../css/contact.css" type="text/css" >
  <div class="container">
  <form id="contact" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">

    <h3>Quick Contact</h3>
    <br>
    <fieldset>
      <input placeholder="Your name" name="name" type="text" value="<?= $name ?>" tabindex="1" autofocus>
       <span class="error"><?= $name_error ?></span>
    </fieldset>

    <fieldset>
      <input placeholder="Your Email Address" name="email" type="text" value="<?= $email ?>" tabindex="2" >
      <span class="error"><?= $email_error ?></span>
    </fieldset>

    <fieldset>
      <input placeholder="Your Phone Number" name="phone" type="text" value="<?= $phone ?>" tabindex="3" >
      <span class="error"><?= $phone_error ?></span>
    </fieldset>

    <fieldset>
      <input placeholder="Your Web Site" name="url" type="text" value="<?= $url ?>" tabindex="4">
        <span class="error"><?= $url_error ?></span>
    </fieldset>

    <fieldset>
      <textarea placeholder="Type your Message Here...." name="message" value="<?= $message ?>" type="text" tabindex="5" ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  <div class="success"><?= $success ?></div>

 </form>
  </div>
