$(function() {
	 $(document).scroll(function(){
		var wScroll = $(this).scrollTop();
		var hScroll = wScroll / 15 + 10;

		$('#header').css({'letter-spacing': hScroll + "px" })
		if(hScroll >= 66){
			$('#header').css('letter-spacing', "66px")
		};

		if(wScroll > $('.creatures-pics').offset().top - ($(window).height() / 0.1)) {

			$('.creatures-pics figure').each(function(i){

				setTimeout(function(){
					$('.creatures-pics figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});

		}
	 });
		
 });