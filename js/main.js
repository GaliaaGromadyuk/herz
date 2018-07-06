$(document).ready(function(){

	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		// speed: 300,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('.user__button').click(function(event) {
		$('.login').slideToggle();
	});

// MODAL
	$('.buy-click').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal__form')
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#modal__close, #overlay').click( function(){
		$('#modal__form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});

});