/* Foundation v2.1.4 http://foundation.zurb.com */
jQuery( document ).ready(function () {

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

    	//Show Tab Content
		jQuery(contentLocation).closest('.tabs-content').children('li').hide();
		jQuery(contentLocation).show();
	}

	jQuery('dl.tabs').each(function () {
		//Get all tabs
		var tabs = jQuery(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab(jQuery(this));
		});
	});

	if (window.location.hash) {
		activateTab(jQuery('a[href="' + window.location.hash + '"]'));
	}

	/* ALERT BOXES ------------ */
	jQuery(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  jQuery(this).closest(".alert-box").fadeOut(function(event){
	    jQuery(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	jQuery('input, textarea').placeholder();



	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	jQuery('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	jQuery('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	jQuery('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	jQuery('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var currentFoundationDropdown = null;
	jQuery('.nav-bar li a').each(function() {
		jQuery(this).data('clicks', 0);
	});
	jQuery('.nav-bar li a').on('click', function(e) {
		e.preventDefault();
		if (currentFoundationDropdown !== jQuery(this).index() || currentFoundationDropdown === null) {
			jQuery(this).data('clicks', 0);
			currentFoundationDropdown = jQuery(this).index();
		}
		jQuery(this).data('clicks', (jQuery(this).data('clicks') + 1));
		var f = jQuery(this).siblings('.flyout');
		if (!f.is(':visible') && jQuery(this).parent('.has-flyout').length > 1) {
			jQuery('.nav-bar li .flyout').hide();
			f.show();
		} else if ((jQuery(this).data('clicks') > 1) || (jQuery(this).parent('.has-flyout').length < 1)) {
			window.location = jQuery(this).attr('href');
		}
	});
	jQuery('.nav-bar').on('click', function(e) {
		e.stopPropagation();
		if (jQuery(e.target).parents().is('.flyout') || jQuery(e.target).is('.flyout')) {
			e.preventDefault();
		}
	});
	// jQuery('body').bind('touchend', function(e) {
	// 	if (!jQuery(e.target).parents().is('.nav-bar') || !jQuery(e.target).is('.nav-bar')) {
	// 		jQuery('.nav-bar li .flyout').is(':visible').hide();
	// 	}
	// });

	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */

});
