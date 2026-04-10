$(document).ready(function() {

	/*картинка-превью*/
	$('#Zoom01').click(function(){
		$('#imageZoom01').css("display", "block");
		$('#imageZoom01').animate({opacity: 1},500);
	});
	
	/* большая картинка*/	
	$('#imageZoom01').click(function(){
		$('#imageZoom01').animate({opacity: 0},500, function() {
			$('#imageZoom01').css("display", "none");			
		  }
		);
	});	
	
	/*картинка-превью*/
	$('#Zoom02').click(function(){
		$('#imageZoom02').css("display", "block");
		$('#imageZoom02').animate({opacity: 1},500);
	});
	
	/* большая картинка*/	
	$('#imageZoom02').click(function(){
		$('#imageZoom02').animate({opacity: 0},500, function() {
			$('#imageZoom02').css("display", "none");			
		  }
		);
	});	
	
	/*картинка-превью*/
	$('#Zoom03').click(function(){
		$('#imageZoom03').css("display", "block");
		$('#imageZoom03').animate({opacity: 1},500);
	});
	
	/* большая картинка*/	
	$('#imageZoom03').click(function(){
		$('#imageZoom03').animate({opacity: 0},500, function() {
			$('#imageZoom03').css("display", "none");			
		  }
		);
	});	

	/*картинка-превью*/
	$('#Zoom04').click(function(){
		$('#imageZoom04').css("display", "block");
		$('#imageZoom04').animate({opacity: 1},500);
	});
	
	/* большая картинка*/	
	$('#imageZoom04').click(function(){
		$('#imageZoom04').animate({opacity: 0},500, function() {
			$('#imageZoom04').css("display", "none");			
		  }
		);
	});		
	

	/*картинка-превью*/
	$('#Zoom05').click(function(){
		$('#imageZoom05').css("display", "block");
		$('#imageZoom05').animate({opacity: 1},500);
	});
	
	/* большая картинка*/	
	$('#imageZoom05').click(function(){
		$('#imageZoom05').animate({opacity: 0},500, function() {
			$('#imageZoom05').css("display", "none");			
		  }
		);
	});		
	
	
	

	//alert(window.location.href);
	//location.reload();
	

//	$('body').click(function(){
//		var slideUrl = window.location.href;
		//alert(slideUrl.substr(-3)); 
//		if (slideUrl.substr(-3) == "#/1" ) {
//			$('#textList  li').animate({opacity: 1},2000);
//		}
//	});

/*
	$('body').click(function(){
		var slideUrl = window.location.href;
		if (slideUrl.substr(-3) == "#/1" ) {
			$('#textList li').animate({opacity: 1},2000);
		} else {
		$('#textList li').animate({opacity: 0},2000);		
		alert("это не та страница, с которой идет работа")};
		setTimeout( function() { 
		location.reload(); 
		}, 2000); 		
	});
*/

// проверка по ссылке (не работает без рефреша)
/*
		var slideUrl = window.location.href;
		if (slideUrl.substr(-3) == "#/1" ) {
			$('#textList li').animate({opacity: 1},2000);
		} else {
			$('#textList li').animate({opacity: 0},2000);		
		};
		setTimeout( function() { 
		location.reload(); 
		}, 3000); 		
*/

	//$('#textList  li').animate({opacity: 1},2000);
	
	
// обработчик слайда с анимацией по клику на область где находится список		
	$('#textList').click(function(){
		/*
		$('#textList li:eq(0)').animate({opacity: 1},2000);
		$('#textList li:eq(1)').animate({opacity: 1},2000);		
		$('#textList li:eq(2)').animate({opacity: 1},2000);				
		*/		
		
		$('#textList li:eq(0)').animate({opacity: 1},1000, function() {
			$('#textList li:eq(1)').animate({opacity: 1},1000, function() {
				$('#textList li:eq(2)').animate({opacity: 1},1000);								
			});		
		});
	});
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#textList2').click(function(){
		$('#textList2 li:eq(0)').animate({opacity: 1},1000, function() {
			$('#textList2 li:eq(1)').animate({opacity: 1},1000, function() {
				$('#textList2 li:eq(2)').animate({opacity: 1},1000, function() {
					$('#textList2 li:eq(3)').animate({opacity: 1},1000, function() {
						$('#textList2Text').animate({opacity: 1},1000);								
					});									
				});	
			});		
		});
	});	
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#textList3').click(function(){
		$('#textList3 li:eq(0)').animate({opacity: 1},1000, function() {
			$('#textList3 li:eq(1)').animate({opacity: 1},1000, function() {
				$('#textList3 li:eq(2)').animate({opacity: 1},1000, function() {
					$('#textList3 li:eq(3)').animate({opacity: 1},1000, function() {
						$('#textList3Text').animate({opacity: 1},1000, function() {
							$('#textList3Text2').animate({opacity: 1},1000);								
						});							
					});									
				});	
			});		
		});
	});		
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#textList4').click(function(){
		$('#textList4 li:eq(0)').animate({opacity: 1},1000, function() {
			$('#textList4 li:eq(1)').animate({opacity: 1},1000, function() {
				$('#textList4 li:eq(2)').animate({opacity: 1},1000, function() {
					$('#textList4 li:eq(3)').animate({opacity: 1},1000);	
				});	
			});		
		});
	});			
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#textList5').click(function(){
		$('#textList5 li:eq(0)').animate({opacity: 1},1000, function() {
			$('#textList5 li:eq(1)').animate({opacity: 1},1000, function() {
				$('#textList5 li:eq(2)').animate({opacity: 1},1000, function() {
					$('#textList5 li:eq(3)').animate({opacity: 1},1000, function() {
						$('#textList5 li:eq(4)').animate({opacity: 1},1000);	
					});	
				});	
			});		
		});
	});	
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#tableSkin1').click(function(){
		$('#table01').animate({opacity: 1},1000, function() {
			$('#table02').animate({opacity: 1},1000, function() {
				$('#table03').animate({opacity: 1},1000, function() {
					$('#table04').animate({opacity: 1},1000, function() {
						$('#table05').animate({opacity: 1},1000, function() {
							$('#table06').animate({opacity: 1},1000);	
						});	
					});	
				});	
			});		
		});
	});		
	
	
// обработчик слайда с анимацией по клику на область где находится список
	$('#tableSkin2').click(function(){
		$('#table07').animate({opacity: 1},1000, function() {
			$('#table09').animate({opacity: 1},1000, function() {
				$('#textList6 li:eq(0)').animate({opacity: 1},1000, function() {
					$('#textList6 li:eq(1)').animate({opacity: 1},1000, function() {
						$('#textList6 li:eq(2)').animate({opacity: 1},1000, function() {
							$('#textList6 li:eq(3)').animate({opacity: 1},1000, function() {
								$('#table10').animate({opacity: 1},1000, function() {
									$('#table08').animate({opacity: 1},1000, function() {
										$('#textList7 li:eq(0)').animate({opacity: 1},1000, function() {
											$('#textList7 li:eq(1)').animate({opacity: 1},1000, function() {
												$('#textList7 li:eq(2)').animate({opacity: 1},1000, function() {
													$('#table11').animate({opacity: 1},1000);
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
		});
	});	
	
	
});

