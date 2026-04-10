$(document).ready(function() {

	$('#slide09').click(function(){
		$('#slide09').css("cursor", "default");
		$('#GraphGreen').attr('style','opacity: 1 !important');
		$('#GraphGreen').animate({width: 624},1000, function() {
			$('#GraphPr1').attr('style','opacity: 1 !important');
			$('#GraphTitle1').attr('style','opacity: 1 !important; margin-right:20px').animate({opacity: 1},1000, function() {	
				$('#GraphRed').attr('style','opacity: 1 !important');
				$('#GraphRed').animate({width: 624},1000, function() {
					$('#GraphPr2').attr('style','opacity: 1 !important');
					$('#GraphTitle2').attr('style','opacity: 1 !important; margin-right:20px').animate({opacity: 1},1000, function() {												
						$('#GraphBlue').attr('style','opacity: 1 !important');
						$('#GraphBlue').animate({width: 365},1000, function() {
							$('#GraphTitle3').attr('style','opacity: 1 !important');	
							$('#GraphPr3').attr('style','opacity: 1 !important');
						}
					)}
				)}
			)}
		)}
	)}
	);
})
