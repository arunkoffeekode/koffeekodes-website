/*
Author       : Dreamguys
Template Name: Ventura - Bootstrap Admin Template
Version      : 1.0
*/

(function($) {
    "use strict";

	/*
  Author : Sebastien Koss
  Copyright © 2016 All rights reserved. 
*/

var effects = [

	"flipInX",

  ];
  
  $.each(effects, function (i, v) {
	$("#singleEffect").append("<option>" + v + "</option>");
  });
  
  $("select#singleEffect").on("change", function (e) {
	$("#random").attr("checked", false);
	var optionSelected = $("option:selected", this);
	var valueSelected = optionSelected.html();
  });
  
  function nextSlide() {
	if ($(".random").is(":checked")) {
	  var effect = effects[Math.floor(Math.random() * effects.length)];
	  if (effect == $(".effect").html(effect)) {
		var effect = effects[Math.floor(Math.random() * effects.length)];
	  }
	} else {
	  var effect = $("select#singleEffect option:selected").text();
	}
  
	$.each(effects, function (i, v) {
	  $(".slide").removeClass(v);
	});
  
	var nextSlide = $("ul#slider li.slide.show");
	var classNames = effect + " animated show";
	nextSlide.removeClass(classNames);
  
	if (nextSlide.next().length) {
	  nextSlide.next().addClass(classNames);
	} else {
	  $("ul#slider li.slide:first").addClass(classNames);
	}
  
	$.each($("#singleEffect option"), function () {
	  if (effect == $(this).html()) {
		$(this).attr("selected", "selected");
	  } else {
		$(this).removeAttr("selected");
	  }
	});
	$(".effect").html(effect);
  
	FPSMeter.run();
	if (!window.FPSMeter) {
	  $(".frames").html(
		"Your browser doesn't seem to be compatible with this test."
	  );
	} else {
	  document.addEventListener(
		"fps",
		function (evt) {
		  $(".frames").html(evt.fps + " fps");
		},
		false
	  );
	}
  }
  
  setInterval(nextSlide, "3500");
  
  
  
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	  });
// jquery ready start fixed top nav sticky
$(document).ready(function () {
	// jQuery code
	///////////////// fixed menu on scroll for desctop
	if ($(window).width() > 992) {
		var navbar_height = $('.navbar').outerHeight();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.navbar-wrap').css('height', navbar_height + 'px');
				$('#navbar_top').addClass("fixed-top");

			} else {
				$('#navbar_top').removeClass("fixed-top");
				$('.navbar-wrap').css('height', 'auto');
			}
		});
	} // end if
}); // jquery end sticky

	$(document).ready(function(){ 
		$(window).scroll(function(){ 
			if ($(this).scrollTop() > 100) { 
				$('#scroll').fadeIn(); 
			} else { 
				$('#scroll').fadeOut(); 
			} 
		}); 
		$('#scroll').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});
	jQuery(document).ready(function($) {
		$('.slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  arrows: true,
		  responsive: [{
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			 breakpoint: 400,
			 settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }]
	  });
  });
  
// home ourclients script
$(".home-our-clients .owl-carousel").owlCarousel({
	loop: true,
	margin: 2,
	responsiveClass: true,
	autoplay: true,
	smartSpeed: 1200,
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	dots: false,
	navigation: true,
	responsive: {
		0: {
			items: 2,
			nav: true,
		},
		600: {
			items: 2,
			nav: true,
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
		},
	},
});

  
// ============================================


})(jQuery);

