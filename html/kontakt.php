<?php include('../app/src/form-process.php'); ?>
<html lang="de">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bochsler - Buildings CO</title>
	<meta name="description" content="Dies ist die zu bewertende Website von Alban Bochsler">
	<link rel="stylesheet" href="../css/zentrales.css" type="text/css" media="all">
	<link rel="shortcut icon" type="image/x-icon" href="../icons/fav.ico">
	<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDQnrAQzneJc7RsZ2cUs33vMsyqHEMtlA"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
	<script src="../js/application.js"></script>
    <link href="../css/contact.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbXaV8jpjgVZdsbICZ_sZNBjbfIuJ_lwM"></script>

</head>

<body> <a class="skip-link screen-reader-text" href="#content">Zum Inhalt springen</a>
	<main class="main-area" id="content">
		<header class="head-transition">
		<nav class="pagehead">
			<ul class="global-nav">
				<li><a class="login-nav">Login</a></li>
				<li><a class="subscribe-nav">Subscribe</a></li>

			</ul>
			</nav>

		<section class="menu-section">
			<nav id="multi-level-nav" class="multi-level-nav menu" role="navigation">
				<div class="logo-text">
					<h6>Bochsler<br> Buildings</h6></div>
				<div id="preloader-container">
					<svg id="nine" width="124" height="118" viewBox="0 0 124 118" overflow="visible">
						<rect x="10" y="10" width="30" height="30" class="squares" />
						<rect x="50" y="10" width="30" height="30" class="squares" />
						<rect x="90" y="10" width="30" height="30" class="squares" />
						<rect x="10" y="50" width="30" height="30" class="squares" />
						<rect x="50" y="50" width="30" height="30" class="squares" />
						<rect x="90" y="50" width="30" height="30" class="squares" />
						<rect x="10" y="90" width="30" height="30" class="squares" />
						<rect x="50" y="90" width="30" height="30" class="squares" />
						<rect x="90" y="90" width="30" height="30" class="squares" /> </svg>
				</div>
				<ul class="navi-menu">
					<li><a href="../index.html">Startseite</a></li>
					<li> <a href="arbeiten.html">Arbeiten</a> </li>
					<li><a href="kontakt.html">Kontakt</a></li>
				</ul>

			</nav>
		</section>

		</header>
		<div class="button_container" id="toggle"> <span class="top"></span> <span class="middle"></span> <span class="bottom"></span> </div>
				<div class="overlay" id="overlay">
					<nav class="overlay-menu">
						<ul>
							<li><a href="../index.html">Startseite</a></li>
							<li><a href="arbeiten.html">Arbeiten</a> </li>
							<li><a href="kontakt.html">Kontakt</a></li>
						</ul>
					</nav>
				</div>






        <div class="container">
            <form id="contact" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">

                <h3>Kontaktieren Sie uns</h3>
                <br>



                <select name="gender">
                    <option value="" disabled selected default>---</option>
                    <option value="Mr.">Herr</option>
                    <option value="Mrs.">Frau</option>
                </select>
                <span class="error"><?= $gender_error ?></span>

                <fieldset>
                    <input placeholder="Ihr Vorname" name="firstname" type="text" value="<?= $firstname ?>" tabindex="1" autofocus>
                    <span class="error"><?= $firstname_error ?></span>
                </fieldset>

                <fieldset>
                    <input placeholder="Ihr Nachname" name="name" type="text" value="<?= $name ?>" tabindex="2" >
                    <span class="error"><?= $name_error ?></span>
                </fieldset>

                <fieldset>
                    <input placeholder="Ihre E-Mail Adresse" name="email" type="text" value="<?= $email ?>" tabindex="3" >
                    <span class="error"><?= $email_error ?></span>
                </fieldset>

                <fieldset>
                    <input placeholder="Ihre Handy-Nummer" name="phone" type="text" value="<?= $phone ?>" tabindex="4" >
                    <span class="error"><?= $phone_error ?></span>
                </fieldset>

                <fieldset>
                    <input placeholder="Ihre Webseite beginnt mit http://" type="text" name="url"  value="<?= $url ?>" tabindex="5">
                    <span class="error"><?= $url_error ?></span>
                </fieldset>

                <fieldset>
                    <textarea placeholder="Geben Sie Ihre Nachricht hier ein..." name="message"  tabindex="6" ></textarea>
                    <span class="error"><?= $message_error ?></span>
                </fieldset>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="newsletter" id="check1" checked>Newsletter abonieren</label>
                    <label>
                        <input type="checkbox" name="agb" id="check1"><a class="input-a" href="#">AGB akzeptiert</a></label>
                    <span class="error"><?= $agb_error ?></span>
                </div>
                <fieldset>
                    <button class="more-btn btn-submit" name="submit" type="submit" id="contact-submit" data-submit="...Senden" >Senden</button>
                </fieldset>

                <div class="success"><?= $success ?></div>

            </form>
        </div>


		<footer class="footer-area">
			<div class="footer-section address">
				<h3>Kontakt</h3>
				<p>Bochsler building co.
					<br> Furkastrasse 2 | 8048 Zürich
					<br> Telefon 076 680 62 60
					<br> <a href="alban.bochsler@gmail.com">mail@bochsler-building.co</a></p>
				<p>2017, copyright by Alban Bochsler
					<br> <a href="#">Datenschutz</a> | <a href="#">Impressum</a></p>
			</div>
			<div class="footer-section">
				<h3>Social</h3>
				<nav id="social-menu" class="social-menu" role="navigation">
					<ul>
						<li><a href="https://twitter.com/"><span class="screen-reader-text">Twitter</span></a></li>
						<li><a href="https://facebook.com/"><span class="screen-reader-text">Facebook</span></a></li>
						<li><a href="https://linkedin.com/"><span class="screen-reader-text">LinkedIn</span></a></li>
						<li><a href="https://youtube.com/"><span class="screen-reader-text">YouTube</span></a></li>
						<li><a href="https://instagram.com/"><span class="screen-reader-text">Instagram</span></a></li>
					</ul>
				</nav>
			</div>
			<div class="footer-section">
				<div class="newsletter">
					<h3>Newsletter</h3>
					<p>Wir setzen Massstäbe!
						<br> Erfahren Sie mehr von unseren laufenden Projekten.</p>
					<form id="nl2go--form" action="#" method="post" accept-charset="utf-8">
						<input type="text" name="nl2go--mail" id="nl2go--mail" value="E-Mail Adresse"><a class="skip-link screen-reader-text" href="#content">Abonieren Sie unseren Newsletter, geben Sie hier Ihre Email-adresse ein.</a>
						<input type="submit" value="OK" name="nl2go--submit" id="nl2go--submit">
						<input type="hidden" name="nl2go--key" id="nl2go--key" value="c733d7970f33e812dc784163671541b88448df6e9cb97570e0a5dba2201afaf4$13156"> </form>
				</div> <a href='#' class='scroll-to-top'><a class="skip-link screen-reader-text" href="#content">Zum Start springen</a></a>
				<p></p>
			</div>
		</footer>

			<script src="../js/menu-toggle.js"></script>
			<script type="text/javascript" src="../js/lightbox.js"></script>
</body>

</html>
