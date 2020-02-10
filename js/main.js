$(document).ready(function() {
	var a = 0;
	var b=6000;
	$(window).scroll(function() {
		if ($(this).scrollTop() > 30) {
			$(".navbar").css('background','black')
			// alert($(this).scrollTop())	
		}
		else{
			$(".navbar").css('background','none')
		}
	})
	$('.portfel li').click(function (x) {
		// alert('')
		$(this).addClass('active')
		// alert($(this).siblings().html())
		$(this).siblings().removeClass('active')
	})
	$('.navbar-toggler').click(function (x) {
		// alert($('body').css('width'))
		$('.navbar').css('background','black')
	})
	$('.portfel li').click(function(x) {
		// alert($(this).html().toLowerCase())
		// $('.Umumi').fadeOut('1000')
		// $('.Web').fadeOut('1000')
		// $('.Network').fadeOut('1000')
		// $('.Kurs').fadeOut('1000')

		// $('.sekiller').html('ascbjaj')
		// $('.sekiller').fadeIn('1000')

		$('.'+$(this).html()).siblings().hide(1000)
		// $('.'+$(this).html()).siblings().css('display','none')

		$('.'+$(this).html()).show(1000)
		$('.'+$(this).html()).css('display','flex')
		
		


		// $('.'+$(this).html()).css('display','flex')
		// $('.'+$(this).siblings().html()).css('display','flex')

	})
	var slideIndex = 0;
	$('.slaydlar div').eq(0).show(200)
	var timeout = setTimeout(name1,2000)
	function name1() {
		if (slideIndex>=$('.slaydlar div').length-1) {
			slideIndex = 0;
		}else{
			slideIndex++;
		}
		name2();
	}
	function name2(){
		$('.slaydlar div').hide(200)
		$('.slaydlar div').eq(slideIndex).show(200);
		timeout = setTimeout(name1,2000);
	}
	$('.sol').click(function(x) {
		clearTimeout(timeout);
		if (slideIndex==0) {
			slideIndex = $('.slaydlar div').length-1;
		}
		else{
			slideIndex--;
		}
		name2();
	})
	$('.sag').click(function(x) {
		clearTimeout(timeout);
		if (slideIndex==$('.slaydlar div').length-1) {
			slideIndex = 0;
		}
		else{
			slideIndex++;
		}
		name2();	
	})

})