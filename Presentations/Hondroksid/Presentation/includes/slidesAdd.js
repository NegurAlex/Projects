$(document).ready(function() {
	
	$('#slide01_0').css("display", "block");
	$('#slide01_0').css("opacity", "1").animate({opacity: 1},4500, function() {
		$('#slide01_2').css("display", "block");		
		$('#slide01_2').css("opacity", "0").animate({opacity: 1},2000, function() {
			$('#slide01_3').css("display", "block");
			$('#slide01_3').css("opacity", "0").animate({opacity: 1},2000, function() {
				$('#slide01_1').css("display", "block");
				$('#slide01_1').css("opacity", "1");
				$('#slide01_2').css("display", "block");				
				$('#slide01_2').css("opacity", "0");				
				$('#slide01_3').css("display", "block");
				$('#slide01_3').css("opacity", "1").animate({opacity: 0},2000, function() {
				});
			});
		});
	});

	$('#slide07').css("cursor", "pointer");
	$('#slide07').click(function(){	
		$('#slide07_1').css("display", "block").animate({opacity: 1},1000, function() {	
			$('#slide07_2').css("display", "block").animate({opacity: 1},1000, function() {	
				$('#slide07_3').css("display", "block").animate({opacity: 1},1000, function() {	
					$('#slide07_4').css("display", "block").animate({opacity: 1},1000, function() {	
						$('#slide07_5').css("display", "block").animate({opacity: 1},1000, function() {	
							$('#slide07_arrow1').css("display", "block").animate({opacity: 1},1000, function() {	
								$('#slide07_arrow2').css("display", "block").animate({opacity: 1},1000, function() {	
									$('#slide07_arrow3').css("display", "block").animate({opacity: 1},1000, function() {	
										$('#slide07_arrow4').css("display", "block").animate({opacity: 1},1000, function() {	
										})					
									})									
								})					
							})					
						})				
					})					
				})				
			})					
		})		
	})	
	
	$('#slide08').css("cursor", "pointer");
	$('#slide08').click(function(){
		
		$('#slide08_1').css("display", "block");
			$('#slide08_1').css("opacity", "1").animate({opacity: 0},1500, function() {	
				$('#slide08_2').css("display", "block");
				$('#slide08_2').css("opacity", "0").animate({opacity: 1},1500, function() {	
			})					
		})

	})	
	
	$('#slide09').css("display", "block");	
	$('#slide09').css("cursor", "pointer");
	$('#slide09').click(function(){
		$('#slide09_2').css("display", "block");			
		$('#slide09_2').css("opacity", "1");
		$('#slide09_2').css("opacity", "0").animate({opacity: 1},2000, function() {		
			$('#slide09_3').css("display", "block");					
			$('#slide09_3').css("opacity", "0").animate({opacity: 1},2000, function() {
				$('#slide09_4').css("display", "block");							
				$('#slide09_4').css("opacity", "0").animate({opacity: 1},2000, function() {
					$('#slide09_5').css("display", "block");								
					$('#slide09_5').css("opacity", "0").animate({opacity: 1},2000, function() {
					})
				})
			})				
		})			
	})	
	
	$('#slide11').css("display", "block");				
	$('#slide11').css("cursor", "pointer");
	$('#slide11').click(function(){	
		$('#slide11_1').css("display", "block");
		$('#slide11_1').css("opacity", "0").animate({opacity: 1},2000, function() {	
			$('#slide11_2').css("display", "block");
			$('#slide11_2').css("opacity", "0").animate({opacity: 1},2000, function() {	
				$('#slide11_3').css("display", "block");			
				$('#slide11_3').css("opacity", "0").animate({opacity: 1},2000, function() {	
					$('#slide11_4').css("display", "block");				
					$('#slide11_4').css("opacity", "0").animate({opacity: 1},2000, function() {	
					})				
				})	
			})					
		})		
	})	
	
	$('#slide12').css("display", "block");	
	$('#slide12').css("cursor", "pointer");
	$('#slide12').click(function(){	
		$('#slide12_1').css("display", "block");
		$('#slide12_1').css("opacity", "0").animate({opacity: 1},2000, function() {	
			$('#slide12_1').css("display", "block");		
			$('#slide12_2').css("opacity", "0").animate({opacity: 1},2000, function() {	
				$('#slide12_3').css("display", "block");			
				$('#slide12_3').css("opacity", "0").animate({opacity: 1},2000, function() {	
				})	
			})					
		})		
	})		
})