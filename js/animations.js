// fade content // change styles on CSS="base-style.css" Line="11"
$(document).ready(function () {
	whatAnimation('moveleft'); // moveleft
	whatAnimation('moveright'); // moveright
	whatAnimation('moveup'); // moveup
	whatAnimation('movedown'); // movedown
	whatAnimation('fadescroll'); // fade
	$(window).scroll(function () {
		whatAnimation('moveleft');
		whatAnimation('moveright');
		whatAnimation('moveup');
		whatAnimation('movedown');
		whatAnimation('fadescroll');
	});

	function whatAnimation(name) {
		$('.' + name).each(function () {
			switch (name) {
			case 'fadescroll':
				AddClass(this, 'fade');
				break;
			case 'moveleft':
				AddClass(this, 'left');
				break;
			case 'moveright':
				AddClass(this, 'right');
				break;
			case 'moveup':
				AddClass(this, 'up');
				break;
			case 'movedown':
				AddClass(this, 'down');
				break;
			}
		});
	};

	function AddClass(object, name) {
		if (isVisible(object)) {
			$(object).addClass(name);
		}
		else {
			$(object).removeClass(name);
		}
	}

	function isVisible(object) {
		var viewport = $(window).scrollTop() + $(window).height();
		var rand = $(object).offset();
		rand.bottom = rand.top + $(object).outerHeight();
		return (!(viewport < (rand.top + 150) || $(window).scrollTop() > (rand.bottom - 150))) // ausblenden steuern
	}
});
// Flipped Cards - Last Edit: 09.08:2017
jQuery(document).ready(function () {
	var countSquare = $('.square').length;
	for (i = 0; i < countSquare; i++) {
		var firstImage = $('.square').eq([i]);
		var secondImage = $('.square2').eq([i]);
		var getImage = firstImage.attr('data-image');
		var getImage2 = secondImage.attr('data-image');
		firstImage.css('background-image', 'url(' + getImage + ')');
		secondImage.css('background-image', 'url(' + getImage2 + ')');
	}
});
// Javascript - animiertes Logo - Last Edit: 30.07.2017
var _myloop = 2;
var _myColors = ["#362476"
, "#3d2968"
, "#fe552e"
, "#d0016d"
, "#d13038"
, "#03939c"
, "#1eabe1"
, "#fab319"
, "#95d60a"
, "#d41f28"
];
var TweenMax;

function myAnim() {
	CSSPlugin.defaultTransformPerspective = 600;
	CSSPlugin.useSVGTransformAttr = false;
	TweenMax.set('.squares', {
		fill: _myColors[0]
		, rotationX: 0
		, rotationY: 0
		, transformOrigin: "50% 50%"
	});
	TweenMax.staggerTo('.squares', 2, {
		rotationX: 180
		, rotationY: 180
		, transformOrigin: "50% 50%"
		, ease: Expo.easeOut
		, delay: .2
	}, 0.1);
	TweenMax.staggerTo('.squares', 1, {
		fill: _myColors[_myloop]
		, ease: Expo.easeOut
		, delay: .2
	}, 0.1);
	TweenMax.staggerTo('.squares', 2, {
		fill: _myColors[0]
		, ease: Sine.easeOut
		, delay: 1
	}, 0.1);
	TweenMax.delayedCall(4, completeHandler);
}

function completeHandler() {
	_myloop = (_myloop + 1) % 9;
	myAnim();
}
TweenMax.delayedCall(1, myAnim);
// Jquery Scroll Down Arrow - Last Edit 08.08.2017
$(document).ready(function () {
	$(function () {
		$('#scroll-down').click(function () {
			$('html, body').animate({
				scrollTop: $('section#side-1').offset().top
			}, 'slow');
		});
	});
});
// Jquery Scroll back to top - Last Edit 08.08.2017
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			console.log('scroll-top');
			$('.scroll-to-top').fadeIn();
		}
		else {
			$('.scroll-to-top').fadeOut();
		}
	});
	$('.scroll-to-top').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
});
