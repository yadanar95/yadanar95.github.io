$(document).ready(function(){

$(window).scroll(function(){
	var height = $(window).scrollTop();
	if (height > 1000) {
		$(".navbar-container").addClass("body-container");
	}
	else {
		$(".navbar-container").removeClass("body-container");
	}
});

});