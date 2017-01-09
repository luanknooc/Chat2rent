$(document).ready(function(){
	
	$(document).ready( function() {
	    /* Check width on page load*/
	    if ( $(window).width() < 540) {
	     $('.two').removeClass('wow');
	    }
	    else {}
	 });

	 $(window).resize(function() {
	    /*If browser resized, check width again */
	    if ($(window).width() < 550) {
	     $('.two').removeClass('wow');
	    }
	    else {$('.two').addClass('mobile');}
	 });
	
});