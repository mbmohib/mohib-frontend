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



    
}); //Document ready function end




