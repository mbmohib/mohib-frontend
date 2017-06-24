$(document).ready(function() {
    
/*----------------------------------------*/
/* Typewriter */
/*----------------------------------------*/
    $(".print").typed({
        strings: [
          "I am Mohib", 
          "I am a Web Developer",
          "I live in Dhaka, Bangladesh"
        ],
        loop: true,
        typeSpeed: 0.6,
        showCursor: false,
        backDelay: 900,
    });
    
/*----------------------------------------*/
/* Skills */
/*----------------------------------------*/
    
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		}, 5000);
	});
    
/*----------------------------------------*/
/* Isotope */
/*----------------------------------------*/
    

    /* activate jquery isotope */
    var $container = $('#posts').isotope({
        itemSelector : '.item',
        isFitWidth: true,
        filter: '*'
    });
    
    $container.imagesLoaded().progress( function() {
        $container.isotope('layout');
    });


    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
    
    //Toggle image overlay
    var itemWrap = $('.item-wrap');
    
    itemWrap.on('mouseover', function() {
        $(this).find('.img-overlay').addClass('animated zoomOutDown');
    });
    
    itemWrap.on('mouseout', function() {
        $(this).find('.img-overlay')
            .removeClass('animated zoomOutDown')
            .addClass('animated zoomInUp');
    });

/*----------------------------------------*/
/* Initialize WOW */
/*----------------------------------------*/
    
new WOW().init();
    
/*----------------------------------------*/
/* Sticky Nav */
/*----------------------------------------*/
    $('#about').waypoint(function(direction) {
        if(direction == 'down') {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
        offset : '80px'
    });
    
    
    
    $('.section-header').waypoint(function(direction) {
        if(direction == 'down') {
            $(this).addClass('js');
        }
        
    }, {
        offset : '80%'
    });
    
    
/*----------------------------------------*/
/* Smooth Scrolling */
/*----------------------------------------*/   
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}); //Document ready function end




