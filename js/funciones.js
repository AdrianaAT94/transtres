$( document ).ready(function() {
	$('.img_menu_movil img').click(function() {
	    if ($('.contenido_menu_movil').is(':hidden')) {
	      $('.contenido_menu_movil').show();
	      $('.menu_movil').css('background-color', 'rgba(0, 0, 0, 0.9)');
	    }
	    else {
	      $('.contenido_menu_movil').hide();
	      $('.menu_movil').css('background', 'none');
	    }
	  });

	  $('.contenido_menu_movil ul li a').click(function() {
	    $('.contenido_menu_movil').hide();
	    $('.menu_movil').css('background', 'none');
	  });


	//scroll
	$('.contenido_menu_movil ul li a, .menu ul li a').on('click', function(e) {
    	var $link = $(this);
    	var anchor  = $link.attr('href');
    	var element = $link.attr('href').split("#");
    	anchor = '#'+element[1];
    	$('html, body').stop().animate({
        	scrollTop: $(anchor).offset().top
    	}, 1000);
	});

	//slider1	  
	  var i = 0;
	  main();

	  function main(){
	    var control = setInterval(cambiarSlider, 4000);
	  }

	  function cambiarSlider(){
	    i++;
	    if(i == $(".slider .image_slider").size()){
	      i = 0;
	    }
	    $(".slider .image_slider").hide("slide", { direction: "left" }, 2000);
	    $(".slider .image_slider").eq(i).show("slide", { direction: "right" }, 2000);
	  }

$('a.smoothScroll').smoothScroll({
	offset: -80,
	scrollTarget: $(this).val()
});

	$(document).on("click", "div.item_producto", function() {
        cur = $(this).attr("id");   
        
        if (!$('#des_'+cur).hasClass('activo')) {
	        $('.item_producto').removeClass('activo');
        	$('#'+cur).addClass('activo');    
            $('.des_producto').removeClass('activo').hide('slow');
            $('#des_'+cur).addClass('activo').show('slow');
        } 
    });

     $('.img_carrusel1').on('click',function(){
         $('#bigimage1').attr('src',$(this).attr('src'));
        return false;
     });

     $('.img_carrusel2').on('click',function(){
         $('#bigimage2').attr('src',$(this).attr('src'));
        return false;
     });

     $('.img_carrusel3').on('click',function(){
         $('#bigimage3').attr('src',$(this).attr('src'));
        return false;
     });

     $('.img_carrusel4').on('click',function(){
         $('#bigimage4').attr('src',$(this).attr('src'));
        return false;
     });

     $('.img_carrusel5').on('click',function(){
         $('#bigimage5').attr('src',$(this).attr('src'));
        return false;
     });

	// Waypoints
$('.seccion').waypoint(
	function(direction) {
		if (direction ==='down') {
			var wayID = $(this).attr('id');
		} else {
			var previous = $(this).prev();
			var wayID = $(previous).attr('id');
		}
		$('.current').removeClass('current');
		$('.menu_principal a[href$=#'+wayID+']').addClass('current');
	}, 
	{ offset: '20%' }
);

/// StickNav
var stickyNavTop = $('.menu').offset().top;

var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
};
	stickyNav();
$(window).scroll(function() {
	stickyNav();
});

});

