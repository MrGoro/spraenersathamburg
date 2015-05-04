/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("img.lazy").lazyload({
		threshold : 1000
	});
	// Modals
	$("img.modal1").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal1').on('show.bs.modal', function(e) {
		$("img.modal1").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 1);
	});
	$("img.modal2").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal2').on('show.bs.modal', function(e) {
		$("img.modal2").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 2);
	});
	$("img.modal3").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal3').on('show.bs.modal', function(e) {
		$("img.modal3").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 3);
	});
	$("img.modal4").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal4').on('show.bs.modal', function(e) {
		$("img.modal4").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 4);
	});
	$("img.modal5").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal5').on('show.bs.modal', function(e) {
		$("img.modal5").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 5);
	});
	$("img.modal6").lazyload({
		event : "loadImages"
	});
	$('#portfolioModal6').on('show.bs.modal', function(e) {
		$("img.modal6").trigger("loadImages");
		ga('send', 'event', 'button', 'click', 'modal', 6);
	});
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});