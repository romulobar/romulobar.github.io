// navegacao do servico 1
$(document).ready(function() {
	$("#nav").navgoco({accordion: true, save: false})
})

$(function(){
	$('nav#navigation ul li a').hover(function(){ /*quando passar o mouse faz:*/
		var newWidth = $(this).width() + 16;      /* acao ao passar o mouse*/
		var newLeft  = $(this).position().left;
		
		$('span.linha').stop().animate({
			width: newWidth,
			left: newLeft
		},300);
	});
});

$(document).ready(function() {
	$("#demo2").navgoco({accordion: true});
})


// navegacao do servico 2


$(document).ready(function() {
	$("#nav2").navgoco({accordion: true, save: false})
})

$(function(){
	$('nav2#navigation ul li a').hover(function(){ /*quando passar o mouse faz:*/
		var newWidth = $(this).width() + 16;      /* acao ao passar o mouse*/
		var newLeft  = $(this).position().left;
		
		$('span.linha').stop().animate({
			width: newWidth,
			left: newLeft
		},300);
	});
});

$(document).ready(function() {
	$("#demo2").navgoco({accordion: true});
})

// navegacao do servico 3

$(document).ready(function() {
	$("#nav3").navgoco({accordion: true, save: false})
})

$(function(){
	$('nav3#navigation ul li a').hover(function(){ /*quando passar o mouse faz:*/
		var newWidth = $(this).width() + 16;      /* acao ao passar o mouse*/
		var newLeft  = $(this).position().left;
		
		$('span.linha').stop().animate({
			width: newWidth,
			left: newLeft
		},300);
	});
});

$(document).ready(function() {
	$("#demo2").navgoco({accordion: true});
})




// navegacao do servico 4

$(document).ready(function() {
	$("#nav4").navgoco({accordion: true, save: false})
})

$(function(){
	$('nav4#navigation ul li a').hover(function(){ /*quando passar o mouse faz:*/
		var newWidth = $(this).width() + 16;      /* acao ao passar o mouse*/
		var newLeft  = $(this).position().left;
		
		$('span.linha').stop().animate({
			width: newWidth,
			left: newLeft
		},300);
	});
});

$(document).ready(function() {
	$("#demo2").navgoco({accordion: true});
})