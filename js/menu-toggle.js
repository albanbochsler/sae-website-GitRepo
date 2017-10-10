// Burgermenu toggle // Overlay // Last Edit 3.08.2017


$('#toggle').click(function() {
   $(this).toggleClass('active-burger');
   $('#overlay').toggleClass('open');
  });

// reset burgermenu to default

$(window).resize(function(){
   var width = $(window).width();
   if(width > 768){
       $('#overlay').removeClass('open');
	   $('#toggle').removeClass('active-burger');
   }
})
.resize();


/* opened = false;
document.querySelectorAll('.burgermenu-wrapper').forEach(function (btnBurger) {
	btnBurger.addEventListener('click', function(){
		btnBurger.classList.toggle('opened');

	});
});
*/

/*


// Menutoggle jquery umgeschrieben in Javascript - 28.06.2017 (deleted)

document.querySelectorAll('.dropdown-toggle').forEach(function (dropdown) {
	dropdown.addEventListener("click", function () {
		dropdown.classList.toggle('toggle-on');
		dropdown.parentNode.parentNode.querySelector('.sub-menu').classList.toggle('toggle-on');
		dropdown.setAttribute('aria-expanded', dropdown.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
	});
});

*/
