(function ($) {
	$('.dropdown-toggle').click(function (e) {
		var _this = $(this);
		e.preventDefault();
		_this.toggleClass('toggle-on');
		_this.parent().next('.sub-menu').toggleClass('toggled-on');
		_this.attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
		_this.html(_this.html() === '<span class="screen-reader-text">Untermenü öffnen</span>' ? '<span class="screen-reader-text">Untermenü schliessen</span>' : '<span class="screen-reader-text">Untermenü öffnen</span>');
	});
})(jQuery);
