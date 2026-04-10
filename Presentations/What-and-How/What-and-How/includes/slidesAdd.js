$(window).load(function() {


	// анимация прозрачности первого слайда
	$('.slidemenu').animate({opacity: 1},200, function() {	
		$('#mainmenulink1').animate({opacity: 1},200, function() {
			$('#mainmenulink2').animate({opacity: 1},200, function() {
				$('#mainmenulink3').animate({opacity: 1},200, function() {
					$('#mainmenulink4').animate({opacity: 1},200, function() {
						$('#mainmenulink5').animate({opacity: 1},200, function() {
							$('#mainmenulink6').animate({opacity: 1},200, function() {
							
								$('#slide01logo').animate({opacity: 1},500, function() {
									$('#slide01text1').animate({opacity: 1},500, function() {
										$('#slide01text2').animate({opacity: 1},500);	
										
										// плавная смена цвета активного меню и возвращение
										$("#mainmenu ul li").hover(function() {
											$(this).stop().animate({ backgroundColor: "#edb87c"}, 400);
												},function() {
											$(this).stop().animate({ backgroundColor: "#fcebe5" }, 400);
										});
																		
									});
								});
							
							});
						});
					});
				});
			});
		});
	});
	
	// услуги - обрабочик ползунка, ссылок и смена слайдов
	$('.containerMenulink1 a').css('color','#000 !important');
	$('.containerMenulink2 a').css('color','#000 !important');	
	$('.containerMenulink2 a').css('background','#fef5d3');	
	$('.containerMenulink1 a').css('cursor','default');
	
	$('.containerMenulink2').click(function(){
		if ($("#sliderPointer").css("marginLeft")<'200px') {
			$('.containerMenulink1 a').css('background',"#fef5d3" );		  		
			$('.containerMenulink2 a').css('background',"none" );	
			$('.containerMenulink2 a').css('cursor','default');
			$('.containerMenulink1 a').css('cursor','pointer');			
			$("#sliderPointer").animate({marginLeft:'+=170px'}, 1000);
			$("#mcs4_container").animate({opacity: 0}, 1000);
			$("#mcs4_container").css('display', 'none');	
			$("#mcs5_container").animate({opacity: 1}, 1000);					
			$("#mcs5_container").css('display', 'block');
		}
	})
	$('.containerMenulink1').click(function(){
		if ($("#sliderPointer").css("marginLeft")>'200px') {
			$('.containerMenulink1 a').css('background',"none" );	
			$('.containerMenulink2 a').css('background',"#fef5d3" );	
			$('.containerMenulink1 a').css('cursor','default');
			$('.containerMenulink2 a').css('cursor','pointer');						 	
			$("#sliderPointer").animate({marginLeft:'-=170px'}, 1000);
			$("#mcs5_container").animate({opacity: 0}, 1000);
			$("#mcs5_container").css('display', 'none');	
			$("#mcs4_container").animate({opacity: 1}, 1000);					
			$("#mcs4_container").css('display', 'block');			
		}
	})

	// конец - услуги обрабочик ползунка, ссылок и смена слайдов


	 
	 
	/*	
	$('.containerMenulink2').on('click', 'a', function(){
		$("#sliderPointer").animate({marginLeft:'+=170px'}, 1000);
	})
	*/	 	
	
	//$("#sliderPointer").animate({marginLeft:'+=170px'}, 1000);
	

	

	
			
})
