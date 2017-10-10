// Formular validierung

window.onload = function () {

var form = document
  .querySelector('form[data-validate]');


function onSubmit(event) {
  var errors = [];

 form.querySelectorAll('.error').forEach(function(error) {
    error.innerHTML = '';
  });

	  form.querySelectorAll('[data-validate-required]').forEach(function(input) {

    if (input.value.length === 0) {
      errors.push({
        input: input,
        message: input.getAttribute('data-validate-required-message')
      });
    }
  });


  form.querySelectorAll('[data-validate-min-length]').forEach(function(input) {
    var minLength = input.getAttribute('data-validate-min-length');
    if (input.value.length < minLength) {
      errors.push({
        input: input,
        message: 'Dieses Feld hat eine Mindestlänge von ' + minLength + ' Zeichen.'
      });
    }
  });

  form.querySelectorAll('[data-validate-regexp]').forEach(function(input) {
    var regexp = new RegExp(input.getAttribute('data-validate-regexp'));

    if (!regexp.test(input.value)) {
      errors.push({
        input: input,
        message: input.getAttribute('data-validate-regexp-message')
      });
    }
  });


  if(errors.length > 0) {
    errors.forEach(function(error) {
      var errorOutput = error.input.parentNode.querySelector('.error');
      errorOutput.innerHTML = error.message;
    });
    event.preventDefault();
    event.stopPropagation();
  }
}


if(form) {
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

if(textarea) {
  textarea.addEventListener('input', setRemainingAllowedCharacters);
}


setCounter(maxAllowedCharacters);
}
/* Back to Top */
$(document).ready(function () {
	$("a[href*=#]").click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$("html,body").animate({
					scrollTop: targetOffset
				}, 1000);
				return false;
			}
		}
	});
})


/* Filterfunktion Jquery - Arbeiten */
$(document).ready(function(){
	$('.filter').on('click', '.filter-metallbau', function(){
		// Event handler
		$('.bc-metallbau').slideDown(); // Entfernt Klasse vom vorherigen Filter
		$('.kachel:not(.bc-metallbau)').slideUp(); // Fügt der anderen Klasse die Klasse 'removed' hinzu
	});

	$('.filter').on('click', '.filter-stahlbau', function(){
		// Event handler
		$('.bc-stahlbau').slideDown(); // Entfernt Klasse vom vorherigen Filter
		$('.kachel:not(.bc-stahlbau)').slideUp(); // Fügt der anderen Klasse die Klasse 'removed' hinzu
	});

	$('.filter').on('click', '.filter-all', function(){
		$('.kachel').slideDown();
	});
});



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
				, center: new google.maps.LatLng(lat, long)
				, // Style
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

