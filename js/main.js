$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 30) {
			$(".navbar").css('background','black')
			// alert($(this).scrollTop())	
		}
		else{
			$(".navbar").css('background','none')
		}
	})
})