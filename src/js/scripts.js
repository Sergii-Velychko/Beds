//= jquery.js
//= timer.js
//= jquery.fancybox.pack.js
//= jquery.mousewheel.pack.js
//= jquery.fancybox-buttons.js
//= jquery.fancybox-media.js
//= jquery.fancybox-thumbs.js
//= wow.min.js
//= slick.min.js
//= jquery.malihu.PageScroll2id.min.js

//scroll
if (window.innerWidth >= 769) {
	$("nav a").mPageScroll2id({   
	scrollSpeed: 500,
	offset: 200 
});
} else {
	$("nav a").mPageScroll2id({   
	scrollSpeed: 1000
});
};

//фенсибокс
$(".zoomkartinki").fancybox({
	'margin' : 10,
	'padding' : 10,
});
$(".podrobnee").fancybox({
		'hideOnContentClick': true,
		'overlayShow'	: true,
		'margin' : [130, 10, 10, 10],
		'padding' : 0,
	});
$("a.zakaz").fancybox({
		'hideOnContentClick': true,
		'overlayShow'	: true,
		'padding' : 0,
	});
$(".vkladka1iS").fancybox({
	'margin' : 10,
	'padding' : 0,
	'closeBtn' : false,
});





//анимация
new WOW().init();


//акордеон
$(".tab_item").not(":first").hide();
$(".wrapperVkladki .tab").click(function() {
	$(".wrapperVkladki .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item2").not(":first").hide();
$(".wrapperVkladki2 .tab2").click(function() {
	$(".wrapperVkladki2 .tab2").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item3").not(":first").hide();
$(".wrapperVkladki3 .tab3").click(function() {
	$(".wrapperVkladki3 .tab3").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item3").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item7").not(":first").hide();
$(".wrapperVkladki7 .tab7").click(function() {
	$(".wrapperVkladki7 .tab7").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item7").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//слайдер
if (window.innerWidth >= 769 ) {
	$('.sl').slick();
};
// $('.sl').slick();

// скрол меню
$(window).scroll(function(){
	var st = $(this).scrollTop();
	if ( st >= $('nav').height() && window.innerWidth >= 769 ) {
		$('header nav').addClass('prokrutka');
	}
	else {
		$('header nav').removeClass('prokrutka');
	};
});

// menu-icon
$(".navig-icon").click(function() {
	// $(".navig a").css("display", "block");
	if ($(".navig a").css("display") == "none") {
		$(".navig a").css("display", "block");
	} else {
		$(".navig a").css("display", "none");
	}
});