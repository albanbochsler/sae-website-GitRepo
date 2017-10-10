	// lightbox
$(document).ready(function () {
	// Globale Variablen
	var activeImage;
	var imageUrl;
	$('.flex-container').append('<div id="lightbox-overlay"><div id="lightbox-content"><div id="lightbox-nav"></i><i class="fa fa-times" aria-hidden="true"></div><img /> </div></div>');
	// open/close
	$('.flex-container img').stop().click(function () {
		imageUrl = $(this).attr('src');
		$('#lightbox-overlay #lightbox-content img').attr('src', imageUrl);
		$('#lightbox-overlay').fadeIn(500);
		activeImage = $(this);
	});
	$('.fa-times').stop().click(function () {
		$('#lightbox-overlay').fadeOut(500);
	});
});
