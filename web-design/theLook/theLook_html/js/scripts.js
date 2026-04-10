$(document).ready(function(){
	// скрипт для смены цвета ссылок
	$(".url").hover(function(){
		$(this).animate({"color": "#f68d32"}, 400);
	  }, function(){
		$(this).animate({"color": "#1b1c20"}, 400);
	  }); 
	// конец скрипт для смены цвета ссылок

	// скрипт прокрутки страницы вверх 
	// прячем кнопку #back-top
	$("#back-top").hide();
	// появление/затухание кнопки #back-top
	$(function (){
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$('#back-top').fadeIn();
			} else{
				$('#back-top').fadeOut();
			}
		});
		// при клике на ссылку плавно поднимаемся вверх
		$('#back-top a').click(function (){
			$('body,html').animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
	// конец скрипт прокрутки страницы вверх 
	
	// подсветка картинок при наводе
	$(".categories img").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 	
	$("#adv img").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 		
	$("#icons img").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 	    
	$("#icons4").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 		  
	$("#back-top").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 	   
	$("#submit").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 		
	$(".catalogProductPhoto img").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  }); 	
	$("#advtheLOOK").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });	  
	$(".overview img").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
		$(this).css('border','1px solid #fd9215');
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
		$(this).css('border','1px solid #fff');		
	  });	  	       
	$(".offersProduct table").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });		
	$("input").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });		  	   
	$(".delete-item").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });		  	   
	$(".add-to-dreambox").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });		  
	$(".odd").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });		
	$(".even").hover(function(){
		$(this).animate({opacity: '0.7'}, 200).animate({opacity: '1'}, 400);
	  }, function(){
		$(this).animate({opacity: '1'}, 200);
	  });	    

	  
	  
	  
	  
	  
	// конец подсветка картинок при наводе
	
	//tabs
	$('#tabs div').hide();
	$('#tabs div:first').show();
	$('#tabs ul li:first').addClass('active');
	$('#tabs ul li a').click(function(){ 
	$('#tabs ul li').removeClass('active');
	$(this).parent().addClass('active'); 
	var currentTab = $(this).attr('href'); 
	$('#tabs div').hide();
	$(currentTab).show();
	return false;
	});

	// убираем область регистрации когда курсор вышел за ее область
	$('#loginArea').mouseleave(function(){
	  $('#loginArea').hide();
	});
	
	// перебор областей, при наводе на которые пропадает область регистрации
	$('#header_search_links_2 a').mouseover(function(){
	  $('#loginArea').hide();
	});	
	$('#header_menu').mouseover(function(){
	  $('#loginArea').hide();
	});	
	$('#main').mouseover(function(){
	  $('#loginArea').hide();
	});	
	$('#footer').mouseover(function(){
	  $('#loginArea').hide();
	});	
	$('#icons').mouseover(function(){
	  $('#loginArea').hide();
	});	
	$('#back-top').mouseover(function(){
	  $('#loginArea').hide();
	});	
	
});




// обработчик выпадающего блока в левом меню каталога
function anichange (objName) {
  if ( $(objName).css('display') == 'none' ) {
    $(objName).animate({height: 'show'}, 400);
  } else {
    $(objName).animate({height: 'hide'}, 200);
  }
}
// конец обработчик выпадающего блока в левом меню каталога

// открываем область регистрации при наводе на ссылку вход
function anichangeLogin (objName) {
  if ( $(objName).css('display') == 'none' ) {
    $(objName).animate({height: 'show'}, 1);
  } 
// else {
//    $(objName).animate({height: 'hide'}, 1);
//  }
}  



