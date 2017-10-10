




// Jquery fixed Header - Last Edit 04.08.2017
$(document).ready(function ($) {
	var scrolling = false;
	$(window).on('scroll', function () {
		if (!scrolling) {
			console.log('scroll');
			scrolling = true;
			hidePagehead();
		}
	});

	function hidePagehead() {
		var actualPos = $('header').offset().top;
		if (actualPos > 200) {
			console.log('true');
			$('header').addClass('header-zu')
			$('.button_container').addClass('burger-zu')
		}
		else {
			console.log('false');
			$('header').removeClass('header-zu');
			$('.button_container').removeClass('burger-zu')
		}
		scrolling = false;
	}
});
// JavaScript (custom-library) - landing-page-slider - Last Edit: 03.08.2017
(function () {
	var $$ = function (selector, context) {
		var context = context || document;
		var elements = context.querySelectorAll(selector);
		return [].slice.call(elements);
	};
	// set variables
	function _lpSliderInit($slider, options) {
		var prefix = ".lp-";
		var $slider = $slider;
		var $slidesCont = $slider.querySelector(prefix + "slider-slides");
		var $slides = $$(prefix + "slide", $slider);
		var $controls = $$(prefix + "nav-control", $slider);
		var $controlsBgs = $$(prefix + "nav-bg", $slider);
		var $progressAS = $$(prefix + "nav-control-progress", $slider);
		var numOfSlides = $slides.length;
		var curSlide = 1;
		var sliding = false;
		var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
		var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;
		var autoSlidingActive = false;
		var autoSlidingTO;
		var autoSlidingDelay = 5000;
		var autoSlidingBlocked = false;
		var $activeSlide;
		var $activeControlsBg;
		var $prevControl;

		function setIDs() {
			$slides.forEach(function ($slide, index) {
				$slide.classList.add("lp-slide-" + (index + 1));
			});
			$controls.forEach(function ($control, index) {
				$control.setAttribute("data-slide", index + 1);
				$control.classList.add("lp-nav-control-" + (index + 1));
			});
			$controlsBgs.forEach(function ($bg, index) {
				$bg.classList.add("lp-nav-bg-" + (index + 1));
			});
		};
		setIDs();

		function afterSlidingHandler() {
			$slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
			$slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");
			$activeSlide.classList.remove("m--before-sliding");
			$activeControlsBg.classList.remove("m--nav-bg-before");
			$prevControl.classList.remove("m--prev-control");
			$prevControl.classList.add("m--reset-progress");
			var triggerLayout = $prevControl.offsetTop;
			$prevControl.classList.remove("m--reset-progress");
			sliding = false;
			var layoutTrigger = $slider.offsetTop;
			if (autoSlidingActive && !autoSlidingBlocked) {
				setAutoslidingTO();
			}
		};

		function performSliding(slideID) {
			if (sliding) return;
			sliding = true;
			window.clearTimeout(autoSlidingTO);
			curSlide = slideID;
			$prevControl = $slider.querySelector(".m--active-control");
			$prevControl.classList.remove("m--active-control");
			$prevControl.classList.add("m--prev-control");
			$slider.querySelector(prefix + "nav-control-" + slideID).classList.add("m--active-control");
			$activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
			$activeControlsBg = $slider.querySelector(prefix + "nav-bg-" + slideID);
			$slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
			$slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");
			$activeSlide.classList.add("m--before-sliding");
			$activeControlsBg.classList.add("m--nav-bg-before");
			var layoutTrigger = $activeSlide.offsetTop;
			$activeSlide.classList.add("m--active-slide");
			$activeControlsBg.classList.add("m--active-nav-bg");
			setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
		};

		function controlClickHandler() {
			if (sliding) return;
			if (this.classList.contains("m--active-control")) return;
			if (options.blockASafterClick) {
				autoSlidingBlocked = true;
				$slider.classList.add("m--autosliding-blocked");
			}
			var slideID = +this.getAttribute("data-slide");
			performSliding(slideID);
		};
		$controls.forEach(function ($control) {
			$control.addEventListener("click", controlClickHandler);
		});

		function setAutoslidingTO() {
			window.clearTimeout(autoSlidingTO);
			var delay = +options.autoSlidingDelay || autoSlidingDelay;
			curSlide++;
			if (curSlide > numOfSlides) curSlide = 1;
			autoSlidingTO = setTimeout(function () {
				performSliding(curSlide);
			}, delay);
		};
		if (options.autoSliding || +options.autoSlidingDelay > 0) {
			console.log('true');
			if (options.autoSliding === false) return;
			autoSlidingActive = true;
			setAutoslidingTO();
			$slider.classList.add("m--with-autosliding");
			var triggerLayout = $slider.offsetTop;
			var delay = +options.autoSlidingDelay || autoSlidingDelay;
			delay += slidingDelay + slidingAT;
			$progressAS.forEach(function ($progress) {
				$progress.style.transition = "transform " + (delay / 1000) + "s";
			});
		}
		$slider.querySelector(".lp-nav-control:first-child").classList.add("m--active-control");
	};
	var lpSlider = function (sliderSelector, options) {
		var $sliders = $$(sliderSelector);
		$sliders.forEach(function ($slider) {
			_lpSliderInit($slider, options);
		});
	};
	window.lpSlider = lpSlider;
}());
// speed
lpSlider(".example-slider", {
		autoSlidingDelay: 4000
	})
	// jquery collapsible - deleted
	/*
	$(document).ready(function () {
		$('.accordion-balken').stop().click(function () {
			$(this).find('i').toggleClass('fa-angle-up fa-angle-down').closest('.accordion-balken').siblings('.accordion-balken').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
			if ($(this).hasClass('accordion-active')) {
				$(this).removeClass('accordion-active');
				$(this).next().slideUp(300);
			}
			else {
				$(this).parent().children().removeClass('accordion-active');
				$(this).addClass('accordion-active');
				if ($(this).next().is('.accordion-text')) {
					$(this).parent().children('.accordion-text').slideUp(300);
					$(this).next().slideDown(300)
				}
			}
		});
	});

	*/
	// Formular validierung
window.onload = function () {
		var form = document.querySelector('form[data-validate]');

		function onSubmit(event) {
			var errors = [];
			form.querySelectorAll('.error').forEach(function (error) {
				error.innerHTML = '';
			});
			form.querySelectorAll('[data-validate-required]').forEach(function (input) {
				if (input.value.length === 0) {
					errors.push({
						input: input
						, message: input.getAttribute('data-validate-required-message')
					});
				}
			});
			form.querySelectorAll('[data-validate-min-length]').forEach(function (input) {
				var minLength = input.getAttribute('data-validate-min-length');
				if (input.value.length < minLength) {
					errors.push({
						input: input
						, message: 'Dieses Feld hat eine Mindestlänge von ' + minLength + ' Zeichen.'
					});
				}
			});
			form.querySelectorAll('[data-validate-regexp]').forEach(function (input) {
				var regexp = new RegExp(input.getAttribute('data-validate-regexp'));
				if (!regexp.test(input.value)) {
					errors.push({
						input: input
						, message: input.getAttribute('data-validate-regexp-message')
					});
				}
			});
			if (errors.length > 0) {
				errors.forEach(function (error) {
					var errorOutput = error.input.parentNode.querySelector('.error');
					errorOutput.innerHTML = error.message;
				});
				event.preventDefault();
				event.stopPropagation();
			}
		}
		if (form) {
			form.addEventListener('submit', onSubmit);
		}
		// Textfeld validierung
		var maxAllowedCharacters = 150;
		var counterElement = document.getElementById('counter');

		function setCounter(numberOfRemainingChars) {
			counterElement.innerHTML = numberOfRemainingChars;
		}

		function getNumberOfChars(textareaElement) {
			return textareaElement.value.length;
		}

		function setRemainingAllowedCharacters(event) {
			var numberOfCharacters = getNumberOfChars(event.target);
			setCounter(maxAllowedCharacters - numberOfCharacters);
		}
		var textarea = document.getElementById('mytext')
		if (textarea) {
			textarea.addEventListener('input', setRemainingAllowedCharacters);
		}
		setCounter(maxAllowedCharacters);
	}
	/* Filterfunktion Jquery - Arbeiten */
$(document).ready(function () {
	$('.filter').on('click', '.filter-metallbau', function () {
		// Event handler
		$('.bc-metallbau').slideDown(); // Entfernt Klasse vom vorherigen Filter
		$('.kachel:not(.bc-metallbau)').slideUp(); // Fügt der anderen Klasse die Klasse 'removed' hinzu
	});
	$('.filter').on('click', '.filter-stahlbau', function () {
		// Event handler
		$('.bc-stahlbau').slideDown(); // Entfernt Klasse vom vorherigen Filter
		$('.kachel:not(.bc-stahlbau)').slideUp(); // Fügt der anderen Klasse die Klasse 'removed' hinzu
	});
	$('.filter').on('click', '.filter-all', function () {
		$('.kachel').slideDown();
	});
});
// MAP mit JavaScript
document.documentElement.scrollIntoView()
	//var address = "Furkastrasse 2, 8048 Zürich";
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var address = "Furkastrasse 2, 8048 Zürich"
		, lat, long;
	var lat, long;
	$.ajax({
		url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&sensor=false"
		, type: "POST"
		, success: function (res) {
			lat = res.results[0].geometry.location.lat;
			long = res.results[0].geometry.location.lng;
			var mapOptions = {
				zoom: 12
				, scrollwheel: false
				, center: new google.maps.LatLng(lat, long), // Style
				styles: [{
					"stylers": [{
						"hue": "#16a085"
					}]
				}, {
					"elementType": "geometry"
					, "stylers": [{
						"color": "#212121"
					}]
				}, {
					"elementType": "labels.icon"
					, "stylers": [{
						"visibility": "off"
					}]
				}, {
					"elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#757575"
					}]
				}, {
					"elementType": "labels.text.stroke"
					, "stylers": [{
						"color": "#212121"
					}]
				}, {
					"featureType": "administrative"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "administrative.country"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#9e9e9e"
					}]
				}, {
					"featureType": "administrative.land_parcel"
					, "stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "administrative.locality"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#bdbdbd"
					}]
				}, {
					"featureType": "poi"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "poi.park"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#181818"
					}]
				}, {
					"featureType": "poi.park"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#616161"
					}]
				}, {
					"featureType": "poi.park"
					, "elementType": "labels.text.stroke"
					, "stylers": [{
						"color": "#1b1b1b"
					}]
				}, {
					"featureType": "road"
					, "elementType": "geometry"
					, "stylers": [{
						"lightness": 100
					}, {
						"visibility": "simplified"
					}]
				}, {
					"featureType": "road"
					, "elementType": "geometry.fill"
					, "stylers": [{
						"color": "#2c2c2c"
					}]
				}, {
					"featureType": "road"
					, "elementType": "labels"
					, "stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "road"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#8a8a8a"
					}]
				}, {
					"featureType": "road.arterial"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#373737"
					}]
				}, {
					"featureType": "road.highway"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#3c3c3c"
					}]
				}, {
					"featureType": "road.highway.controlled_access"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#4e4e4e"
					}]
				}, {
					"featureType": "road.local"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#616161"
					}]
				}, {
					"featureType": "transit"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "water"
					, "elementType": "geometry"
					, "stylers": [{
						"color": "#000000"
					}]
				}, {
					"featureType": "water"
					, "elementType": "labels.text.fill"
					, "stylers": [{
						"color": "#3d3d3d"
					}]
				}]
			};
			var mapElement = document.getElementById('map');
			var map = new google.maps.Map(mapElement, mapOptions);
			var image = window.logo;
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, long)
				, map: map
				, animation: google.maps.Animation.DROP
				, title: 'Wir sind hier'
				, icon: {
					path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
					, scale: 6
					, strokeColor: '#e7e5e7'
				}
			});
		}
	});
}
