$(document).ready(function(){
	
	//To Top
	if($('#to-top').length){
		var toTop = function(){
			if($(window).scrollTop() > 1){
				$('#to-top').css({'bottom':'-20px'});
			}else{
				$('#to-top').css({'bottom':'-110px'});
			}
		};
		toTop();
		$(window).on('scroll', function(){
			toTop();
		});
		
		$('#to-top').on('click', function(e){
			event.preventDefault();
			$('html,body').animate({scrollTop : 0}, 600);
		});
	}
	
	//Animate anchor link
	$('.navbar-nav a').on('click', function(e){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top()
		}, 800);
	});

	
	//Popup
	$('#priceList img').on('click', function(e){
		event.preventDefault();
		$('.popup').addClass('visible');
	});
	
	$('.popup').on('click', function(e){
		event.preventDefault();
		if($(event.target).is('.popup') || $(event.target).is('.close')) {
			$('.popup').removeClass('visible');
		}
	});
	
	$(document).keyup(function(){
		if(event.which=='27'){
			$('.popup').removeClass('visible');
		}
	});
	
	//Margin Popup
	var marTop = ($('.popup-container').height() + 24) / 2; 
	var marLeft = ($('.popup-container').width() + 24) / 2;
	$('.popup-container').css({'margin-top':-marTop, 'margin-left':-marLeft});
	
});