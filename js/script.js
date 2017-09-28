$(document).ready(function(){
	
	$(".fa-arrow-up").hide();
    
///hamburger menu
		
    $(".hamburger").click(function(){
        $(".menu").slideToggle();
    });
    
///scroll

	 $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	
	$(".fa-arrow-up").click(function(){
		$("html,body").animate({scrollTop: 0},500);
	});
	
	$(document).scroll(function(){
		var position=$(this).scrollTop();
		
		if(position>400){
			$(".fa-arrow-up").fadeIn();
		} else {
			$(".fa-arrow-up").fadeOut();
		}
	});
});