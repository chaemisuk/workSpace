$(document).ready(function(){
   /**
  * Copy the getSticky function - then you will get it!
  */
  getSticky($('.nav-wrapper'));
  
  /**
  * Github: https://github.com/ChrisWojcik/single-page-nav
  * Bower: no bower package available
  * bower install https://github.com/ChrisWojcik/single-page-nav.git#master -D
  */
  onePageNav($('nav'));
});

function onePageNav(nav) {
  nav.singlePageNav({
		speed: 1500,
		currentClass: 'active',
		offset: 60,
		treshold: 60,
		updateHash: true
	});
}

function getSticky(obj) {
	var menu = obj;
	var stickyClass = 'fixed';
	var body = $('body');

	var menuHeight = menu.outerHeight(true);
	var menuPosition = menu.offset();

	function addStickyClass() {
		if ($(window).scrollTop() > menuPosition.top) {
			menu.addClass(stickyClass);
			body.css('margin-top', menuHeight);
		}
		else {
			menu.removeClass(stickyClass);
			body.css('margin-top', '0');
		}
	}

	addStickyClass();

	$(window).scroll(function () {
		addStickyClass();
	});
}