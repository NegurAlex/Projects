$(document).ready(function(){
	
	
	$('#Button0').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('#accordionButton1').removeClass('on1');		
		$('#accordionButton2').removeClass('on2');
		$('#accordionButton3').removeClass('on3');		
		$('#accordionButton1').stop().animate({backgroundColor:"#2451a3"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);					
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton1').addClass('on1');
			$('#accordionButton1').stop().animate({backgroundColor:"#ed1847"},500);
			$(this).next().show("normal");

		 }
	 });
	
	
	
	
	
	
	$('#Button1').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		//$('#accordionButton1').removeClass('on1');		
		//$('#accordionButton2').removeClass('on2');
		//$('#accordionButton3').removeClass('on3');		
		$('#accordionButton1').stop().animate({backgroundColor:"#2451a3"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);					
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton1').addClass('on1');
			$('#accordionButton1').stop().animate({backgroundColor:"#ed1847"},500);
			$(this).next().show("normal");
		$('.circle1').addClass('circleBorder1');		
		 }
	 });
	$('#Button1').mouseover(function(){
		$('#accordionButton1').addClass('over');
	}).mouseout(function(){
		$('#accordionButton1').removeClass('over');
	});
	$('.accordionContent1').hide();
	
	$('#Button2').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");		
		$('.accordionContent3').hide("normal");		
		//$('#accordionButton1').removeClass('on1');		
		//$('#accordionButton2').removeClass('on2');
		//$('#accordionButton3').removeClass('on3');		
		$('#accordionButton1').stop().animate({backgroundColor:"#2451a3"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);	
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton2').addClass('on2');
			$('#accordionButton2').stop().animate({backgroundColor:"#56e1ed", color:"#2451a3"},500);			
			$(this).next().show("normal");
		$('.circle2').addClass('circleBorder2');					
		 }
	 });
	$('#Button2').mouseover(function(){
		$('#accordionButton2').addClass('over');
	}).mouseout(function(){
		$('#accordionButton2').removeClass('over');
	});
	$('.accordionContent2').hide();
	
	$('#Button3').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");		
		//$('#accordionButton1').removeClass('on1');		
		//$('#accordionButton2').removeClass('on2');
		//$('#accordionButton3').removeClass('on3');		
		$('#accordionButton1').stop().animate({backgroundColor:"#2451a3"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#2451a3", color:"#ffffff"},500);			
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton3').addClass('on3');
			$('#accordionButton3').stop().animate({backgroundColor:"#fdc635", color:"#2451a3"},500);					
			$(this).next().show("normal");
		$('.circle3').addClass('circleBorder3');			
		 }
	 });
	$('#Button3').mouseover(function(){
		$('#accordionButton3').addClass('over');
	}).mouseout(function(){
		$('#accordionButton3').removeClass('over');
	});
	$('.accordionContent3').hide();	
	
});


$(function(){
  $(".accordionContent1 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 		
    $(this).children().addClass('on1'); 
	//$(this).children().css('background','blue');
  });
});

$(function(){
  $(".accordionContent2 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3');  
    $(this).children().addClass('on2'); 
  });
});
 
$(function(){
  $(".accordionContent3 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(this).children().addClass('on3'); 
  });
});

$(function(){
  $("#accordionButton1").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 		
    $(".accordionContent1 a:first-child").children().addClass('on1'); 
  });
});

$(function(){
  $("#accordionButton2").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 		
    $(".accordionContent2 a:first-child").children().addClass('on2'); 
  });
});

$(function(){
  $("#accordionButton3").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 		
    $(".accordionContent3 a:first-child").children().addClass('on3'); 
  });
});




$(function(){
 $(".accordionContent1 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#ed1847"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent2 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#56e1ed"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent3 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#fdc635"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});











