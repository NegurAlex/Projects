$(document).ready(function() {
		<!-- portfolio pageSlider -->	
	$("#pageSlider").easySlider3({
		auto: true,
		continuous: true 
	});		
	
	$('#prevBtn3 a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#prevBtn3 a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#prevBtn3 a').mouseup(function(){
		$(this).removeClass('clicked');
	});
	$('#nextBtn3 a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#nextBtn3 a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#nextBtn3 a').mouseup(function(){
		$(this).removeClass('clicked');
	});				
	
	
});