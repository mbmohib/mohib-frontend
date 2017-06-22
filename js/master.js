$(document).ready(function() {
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
    
   
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		}, 5000);
	});
});
