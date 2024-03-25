(function ($) {

  "use strict";

  function changeLogoSource(isDarkMode) {
    const logo = $('.navbar img');
    if (isDarkMode) {
        logo.attr('src', '/images/lightlogo.png');
    } else {
        logo.attr('src', '/images/darklogo.png');
    }
  }
    // COLOR MODE
    $('.color-mode').click(function(){
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');
      const isDarkMode = $('body').hasClass('dark-mode');
      changeLogoSource(isDarkMode); // Call function to change logo source
  });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
