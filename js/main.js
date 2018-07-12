// MAP
function initMap() {
  var uluru = {lat: 49.5684915, lng: 34.583184};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
  });
  var image = '../img/marker.png';

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
};


$(document).ready(function(){

// SLIDER
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
	$('.product__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		// speed: 300,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
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
	$.jMaskGlobals = {translation: {
	               'n': {pattern: /\d/},
	           }
	       };
	       $('.modal__phone').mask('+38(0nn)-nnn-nnnn').val('+38(0');
	       $('.cart__input-telephont').mask('+38(0nn)-nnn-nnnn').val('+38(0');

// login&registration
	var registrationForm = '.registration__form';
	var loginForm = '.login__form';

	$('.registration__button').click( function(){
		$(".login__form").css('display', 'none');
		$(".registration__form").css('display', 'block');
	});
	$('.enter__button').click( function(){
		$(".registration__form").css('display', 'none');
		$(".login__form").css('display', 'block');
	});
	$('.user__button').click(function(event) {
		$('.login').fadeToggle();
	});
	$('.submenu__item1').click(function(event) {
		$('.submenu1').fadeToggle();
	});
	$('.account .user__button').click(function(event) {
		$('.exit').fadeToggle();
	});


// CART AMOUNT
	function catalogItemCounter(field){

				var fieldCount = function(el) {

					var
						min = el.data('min') || false,

						max = el.data('max') || false,

						dec = el.prev('.dec'),

						inc = el.next('.inc');

					function init(el) {
						if(!el.attr('disabled')){
							dec.on('click', decrement);
							inc.on('click', increment);
						}

						function decrement() {
							var value = parseInt(el[0].value);
							value--;

							if(!min || value >= min) {
								el[0].value = value;
							}
						};

						function increment() {
							var value = parseInt(el[0].value);

							value++;

							if(!max || value <= max) {
								el[0].value = value++;
							}
						};

					}

					el.each(function() {
						init($(this));
					});
				};

				$(field).each(function(){
					fieldCount($(this));
				});
			}

	catalogItemCounter('.fieldCount');

// TABS

	(function($) {
	$(function() {

	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	});
	})(jQuery);


	$(".categories .tab-content ul li a").click(function(e) {
	  e.preventDefault();
	  $(".categories .tab-content ul li a").removeClass('active');
	  $(this).addClass('active');
	})

	$(".pages div").click(function(e) {
	  e.preventDefault();
	  $(".pages div").removeClass('active');
	  $(this).addClass('active');
	})


	$(function() {
		var pull 	 = $('.sandwich');
		menu 		   = $('.nav');
		menuHeight	= menu.height();

	    $(pull).on('click', function(e) {
		    e.preventDefault();
		    menu.slideToggle();
	    });
	    $(window).resize(function(){
	    		var w = $(window).width();
	    		if(w > 320 && menu.is(':hidden')) {
	    			menu.removeAttr('style');
	    		}
	  	});
	});

	$(function() {
		var filter 	 = $('.filter');
		categories 	= $('.categories__list');
		categoriesHeight	= categories.height();

	    $(filter).on('click', function(e) {
		    e.preventDefault();
		    categories.slideToggle();
	    });
	    $(window).resize(function(){
	    		var w = $(window).width();
	    		if(w > 320 && categories.is(':hidden')) {
	    			categories.removeAttr('style');
	    		}
	  	});
	});


});