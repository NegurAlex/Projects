$(document).ready(function(){
	
	$('#Button0').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");			
		$('.accordionContent5').hide("normal");					
		$('.accordionContent6').hide("normal");	
		$('.accordionContent7').hide("normal");									
		$('#accordionButton1').removeClass('on1');		
		$('#accordionButton2').removeClass('on2');
		$('#accordionButton3').removeClass('on3');	
		$('#accordionButton4').removeClass('on4');	
		$('#accordionButton5').removeClass('on5');	
		$('#accordionButton6').removeClass('on6');								
		$('#accordionButton7').removeClass('on7');										
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);					
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);												
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);														
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);																
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');
		$('.circle6').removeClass('circleBorder6');						
		$('.circle7').removeClass('circleBorder7');								
		if($(this).next().is(':hidden') == true){
			$('#accordionButton1').stop().animate({backgroundColor:"#46c7f4"},500);
			$(this).next().show("normal");
		 }
	 });
	
	$('#Button1').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");
		$('.accordionContent5').hide("normal");	
		$('.accordionContent6').hide("normal");	
		$('.accordionContent7').hide("normal");								
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);					
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);					
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);									
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);											
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);													
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');	
		$('.circle6').removeClass('circleBorder6');	
		$('.circle7').removeClass('circleBorder7');					
		if($(this).next().is(':hidden') == true){
			$('#accordionButton1').stop().animate({backgroundColor:"#46c7f4"},500);
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
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");	
		$('.accordionContent6').hide("normal");	
		$('.accordionContent7').hide("normal");										
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);	
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);	
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);					
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);							
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);									
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');	
		$('.circle6').removeClass('circleBorder6');	
		$('.circle7').removeClass('circleBorder7');						
		if($(this).next().is(':hidden') == true){
			$('#accordionButton2').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);			
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
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");						
		$('.accordionContent6').hide("normal");
		$('.accordionContent7').hide("normal");										
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);							
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);									
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);											
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');
		$('.circle6').removeClass('circleBorder6');	
		$('.circle7').removeClass('circleBorder7');								
		if($(this).next().is(':hidden') == true){
			$('#accordionButton3').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);					
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
	
	$('#Button4').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");						
		$('.accordionContent6').hide("normal");
		$('.accordionContent7').hide("normal");										
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);							
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);									
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);											
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');				
		$('.circle6').removeClass('circleBorder6');	
		$('.circle7').removeClass('circleBorder7');								
		if($(this).next().is(':hidden') == true){
			$('#accordionButton4').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);					
			$(this).next().show("normal");
		$('.circle4').addClass('circleBorder4');			
		 }
	 });
	$('#Button4').mouseover(function(){
		$('#accordionButton4').addClass('over');
	}).mouseout(function(){
		$('#accordionButton4').removeClass('over');
	});
	$('.accordionContent4').hide();		
	
	
	
	$('#Button5').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");						
		$('.accordionContent6').hide("normal");								
		$('.accordionContent7').hide("normal");										
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);				
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);			
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);							
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);									
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);											
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');	
		$('.circle6').removeClass('circleBorder6');
		$('.circle7').removeClass('circleBorder7');							
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton3').addClass('on3');
			$('#accordionButton5').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);					
			$(this).next().show("normal");
		$('.circle5').addClass('circleBorder5');			
		 }
	 });
	$('#Button5').mouseover(function(){
		$('#accordionButton5').addClass('over');
	}).mouseout(function(){
		$('#accordionButton5').removeClass('over');
	});
	$('.accordionContent5').hide();		
	
	$('#Button6').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");						
		$('.accordionContent6').hide("normal");
		$('.accordionContent7').hide("normal");		
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');	
		$('.circle6').removeClass('circleBorder6');
		$('.circle7').removeClass('circleBorder7');		
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton3').addClass('on3');
			$('#accordionButton6').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);					
			$(this).next().show("normal");
		$('.circle6').addClass('circleBorder6');			
		 }
	 });
	$('#Button6').mouseover(function(){
		$('#accordionButton6').addClass('over');
	}).mouseout(function(){
		$('#accordionButton6').removeClass('over');
	});
	$('.accordionContent6').hide();	
	
	
	$('#Button7').click(function(){
		$('.accordionContent1').hide("normal");		
		$('.accordionContent2').hide("normal");	
		$('.accordionContent3').hide("normal");	
		$('.accordionContent4').hide("normal");	
		$('.accordionContent5').hide("normal");						
		$('.accordionContent6').hide("normal");
		$('.accordionContent7').hide("normal");		
		$('#accordionButton1').stop().animate({backgroundColor:"#374142"},500);		
		$('#accordionButton2').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton3').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton4').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton5').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton6').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('#accordionButton7').stop().animate({backgroundColor:"#374142", color:"#ffffff"},500);
		$('.circle1').removeClass('circleBorder1');	
		$('.circle2').removeClass('circleBorder2');	
		$('.circle3').removeClass('circleBorder3');
		$('.circle4').removeClass('circleBorder4');
		$('.circle5').removeClass('circleBorder5');	
		$('.circle6').removeClass('circleBorder6');
		$('.circle7').removeClass('circleBorder7');		
		if($(this).next().is(':hidden') == true){
			//$('#accordionButton3').addClass('on3');
			$('#accordionButton7').stop().animate({backgroundColor:"#46c7f4", color:"#fff"},500);					
			$(this).next().show("normal");
		$('.circle7').addClass('circleBorder7');			
		 }
	 });
	$('#Button7').mouseover(function(){
		$('#accordionButton7').addClass('over');
	}).mouseout(function(){
		$('#accordionButton7').removeClass('over');
	});
	$('.accordionContent7').hide();			

});


$(function(){
  $(".accordionContent1 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4'); 
    $(".accordionContent5 a").children().removeClass('on5');
    $(".accordionContent6 a").children().removeClass('on6');	 				
    $(".accordionContent7 a").children().removeClass('on7');	 					
    $(this).children().addClass('on1'); 
	//$(this).children().css('background','blue');
  });
});

$(function(){
  $(".accordionContent2 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3');  
    $(".accordionContent4 a").children().removeClass('on4');  
    $(".accordionContent5 a").children().removeClass('on5');  
    $(".accordionContent6 a").children().removeClass('on6'); 
    $(".accordionContent7 a").children().removeClass('on7');	 			
    $(this).children().addClass('on2'); 
  });
});
 
$(function(){
  $(".accordionContent3 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4'); 	
    $(".accordionContent5 a").children().removeClass('on5'); 	
    $(".accordionContent6 a").children().removeClass('on6'); 
    $(".accordionContent7 a").children().removeClass('on7');			
    $(this).children().addClass('on3'); 
  });
});

$(function(){
  $(".accordionContent4 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3');  
    $(".accordionContent4 a").children().removeClass('on4');  
    $(".accordionContent5 a").children().removeClass('on5');
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');		  		
    $(this).children().addClass('on4'); 
  });
});
 
$(function(){
  $(".accordionContent5 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4'); 	
    $(".accordionContent5 a").children().removeClass('on5'); 
    $(".accordionContent6 a").children().removeClass('on6'); 
    $(".accordionContent7 a").children().removeClass('on7');			
    $(this).children().addClass('on5'); 
  });
});

$(function(){
  $(".accordionContent6 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4'); 	
    $(".accordionContent5 a").children().removeClass('on5'); 
    $(".accordionContent6 a").children().removeClass('on6'); 
    $(".accordionContent7 a").children().removeClass('on7');			
    $(this).children().addClass('on6'); 
  });
});

$(function(){
  $(".accordionContent7 a").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4'); 	
    $(".accordionContent5 a").children().removeClass('on5'); 
    $(".accordionContent6 a").children().removeClass('on6'); 
    $(".accordionContent7 a").children().removeClass('on7');			
    $(this).children().addClass('on7'); 
  });
});



$(function(){
  $("#accordionButton1").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');
    $(".accordionContent6 a").children().removeClass('on6');		 			
    $(".accordionContent7 a").children().removeClass('on7');
    $(".accordionContent1 a:first-child").children().addClass('on1'); 
  });
});

$(function(){
  $("#accordionButton2").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');	
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');					
    $(".accordionContent2 a:first-child").children().addClass('on2'); 
  });
});

$(function(){
  $("#accordionButton3").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');						
    $(".accordionContent3 a:first-child").children().addClass('on3'); 
  });
});

$(function(){
  $("#accordionButton4").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');
    $(".accordionContent6 a").children().removeClass('on6');	
    $(".accordionContent7 a").children().removeClass('on7');					
    $(".accordionContent4 a:first-child").children().addClass('on4'); 
  });
});

$(function(){
  $("#accordionButton5").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');	
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');					
    $(".accordionContent5 a:first-child").children().addClass('on5'); 
  });
});

$(function(){
  $("#accordionButton6").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');	
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');					
    $(".accordionContent6 a:first-child").children().addClass('on6'); 
  });
});

$(function(){
  $("#accordionButton7").click(function(){
    $(".accordionContent1 a").children().removeClass('on1'); 
    $(".accordionContent2 a").children().removeClass('on2'); 	
    $(".accordionContent3 a").children().removeClass('on3'); 
    $(".accordionContent4 a").children().removeClass('on4');
    $(".accordionContent5 a").children().removeClass('on5');	
    $(".accordionContent6 a").children().removeClass('on6');
    $(".accordionContent7 a").children().removeClass('on7');					
    $(".accordionContent7 a:first-child").children().addClass('on7'); 
  });
});


$(function(){
 $(".accordionContent1 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent2 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent3 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent4 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent5 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent6 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});

$(function(){
 $(".accordionContent7 a div").hover(function(){
   $(this).stop().animate({backgroundColor:"#46c7f4"},500);
 },function(){
 $(this).stop().animate({backgroundColor:"#ffffff"},500);
 });
});










