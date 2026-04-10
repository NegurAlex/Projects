$(document).ready(function() {
	
	var $window = $(window);
	function checkWidth() {

		if ($window.height() < 768) {

			$('article.Main').css('height',$window.height());	
			$('article.WhoWeAre').css('height',$window.height()-103);	
			$('article.Clients').css('height',$window.height()-103);	
			$('article.Portfolio').css('height',$window.height()-103);								
			$('article.WhatWeDo').css('height',$window.height()-103);
			$('article.Contacts').css('height',$window.height()-103);					
			//блок главного слайдера
			$('.slideTextWrap').css('top',$window.height()/4);
			//блок кто мы
			$('.WhoWeAreWrap h2').css('padding-top',$window.height()/12);
			$('.circles').css('margin-top',$window.height()/20);
			$('.WhoWeAreWrap h3').css('margin-top',$window.height()/15);
			$('.WhoWeAreText').css('margin-bottom',$window.height()/12);
			$('.WhoWeAreText li').css('margin-top',$window.height()/30);			
			//клиенты
			$('.ClientsWrap h2').css('padding-top',$window.height()/30);
			//$('.clientsSlider').css('margin-top',$window.height()/30);
			//круги
			$('.circlesBlock .front').css('height',180);
			$('.circlesBlock .back').css('height',180);	
			$('.circlesBlock .front').css('width',180);
			$('.circlesBlock .back').css('width',180);	
			$('.circlesBlock').css('height',220);
			$('.circlesBlock').css('margin-left',10);
			$('.circlesBlock').css('margin-right',10);
			$('.ClientsWrap h2').css('padding-bottom',15);			
			
			//что мы делаем			
			$('.WhatWeDoWrap h2').css('padding-top',20);
			$('.WhatWeDoWrap h2').css('padding-bottom',$window.height()/20);					
			$('.WhatWeDoServices').css('margin-top',20);
			$('.WhatWeDoServices div').css('height',$window.height()/15+42);	

			//ServicesMarketingBg
			$('.WhatWeDoServices div').css('padding-top',130);			
			$('.WhatWeDoServices div').css('height',81);	
			$('.ServicesMarketingWrap').css('height',424);
			$('.ServicesMarketing').css('height',424);
			$('.ServicesMarketingWrap').css('top',-491);
			$('.ServicesCreativeWrap').css('height',424);
			$('.ServicesCreative').css('height',424);
			$('.ServicesCreativeWrap').css('top',-491);
			$('.ServicesConnectWrap').css('height',424);
			$('.ServicesConnect').css('height',424);
			$('.ServicesConnectWrap').css('top',-491);
			$('.ServicesEventsWrap').css('height',424);
			$('.ServicesEvents').css('height',424);
			$('.ServicesEventsWrap').css('top',-491);
			$('.ServicesSupportWrap').css('height',424);
			$('.ServicesSupport').css('height',424);
			$('.ServicesSupportWrap').css('top',-491);
			$('.ServicesDigitalWrap').css('height',424);
			$('.ServicesDigital').css('height',424);
			$('.ServicesDigitalWrap').css('top',-491);					
			$('.ServicesMarketing div:first-child').css('padding-top',127);	
			$('.ServicesCreative div:first-child').css('padding-top',127);
			$('.ServicesConnect div:first-child').css('padding-top',127);
			$('.ServicesEvents div:first-child').css('padding-top',127);
			$('.ServicesSupport div:first-child').css('padding-top',127);
			$('.ServicesDigital div:first-child').css('padding-top',127);																
			//портфолио
			$('.PB span').css('height',($window.height()-103)/4+1);
			$('span.portfolioSliderBgOpacity').css('padding-top',$window.height()/6);
			$('#prevBtn2').css('top',-710+($('.PB span').height()*2));	
			$('#nextBtn2').css('top',-300+($('.PB span').height()*2));					

			$('.slideBtns').css('top',530);
			$('.sli-links').css('padding-top',680);		
		} 
		if ($window.height() < 730) {		
			$('.slideBtns').css('top',490);
			$('.sli-links').css('padding-top',640);					
		}
		if ($window.height() < 664) {

			// контакты			
			//$('.ContactsMap iframe').css('height',$window.height())-103;
			$('.ContactsWrap p').css('margin-bottom',15);			
			$('.ContactsWrap h2').css('margin-top',0);		
			$('.ContactsWrap h2').css('margin-bottom',0);
			$('.ContactsText').css('margin-top',15);
			$('.ContactsText p').css('margin-bottom',4);
			$('.ServicesCreative div:nth-child(1)').css('height',60);
			$('.ServicesContent').css('padding-top',50);
			//$('.contacts247 div').css('display','block');		
			$('.WhatWeDoWrap h2').css('padding-top',30);
			$('.WhatWeDoServices').css('margin-top',10);				
			$('.WhatWeDoServices div').css('height',81);	
			$('.WhoWeAreWrap h2').css('padding-top',$window.height()/25);						
			$('.WhatWeDoWrap h2').css('padding-bottom',10);	
			$('.ServicesContent').css('padding-top',40);	
			$('.slideBtns').css('top',420);
			$('.sli-links').css('padding-top',570);	
			//круги 
			$('.circlesBlock .front').css('height',160);
			$('.circlesBlock .back').css('height',160);	
			$('.circlesBlock .front').css('width',160);
			$('.circlesBlock .back').css('width',160);			
			$('.circlesBlock').css('height',200);
			$('.circlesBlock').css('margin-left',10);
			$('.circlesBlock').css('margin-right',10);
			$('.ClientsWrap h2').css('padding-bottom',5);				
						
		}
	
		if ($window.height() < 450) {	
			$('.ContactsWrap').css('padding-top',20);
			$('.ContactsWrap p').css('line-height',1.15);			
		}	
		if ($window.height() < 600) {
			$('.ServicesCreative .btnBack').css('top',-390);
			$('.slideBtns').css('top',360);
			$('.sli-links').css('padding-top',520);		
			$('.WhatWeDoWrap h2').css('padding-top',10);
			$('.WhatWeDoServices').css('margin-top',10);					
			$('.WhatWeDoServices div').css('height',71);	
			$('.ServicesMarketingWrap').css('height',403);
			$('.ServicesMarketing').css('height',403);
			$('.ServicesMarketingWrap').css('top',-491);
			$('.ServicesCreativeWrap').css('height',403);
			$('.ServicesCreative').css('height',403);
			$('.ServicesCreativeWrap').css('top',-491);
			$('.ServicesConnectWrap').css('height',403);
			$('.ServicesConnect').css('height',403);
			$('.ServicesConnectWrap').css('top',-491);
			$('.ServicesEventsWrap').css('height',403);
			$('.ServicesEvents').css('height',403);
			$('.ServicesEventsWrap').css('top',-491);
			$('.ServicesSupportWrap').css('height',403);
			$('.ServicesSupport').css('height',403);
			$('.ServicesSupportWrap').css('top',-491);
			$('.ServicesDigitalWrap').css('height',403);
			$('.ServicesDigital').css('height',403);
			$('.ServicesDigitalWrap').css('top',-491);												
		}	
		if ($window.height() < 550) {
			$('.slideBtns').css('top',310);
			$('.sli-links').css('padding-top',470);							
		}			
			
		if ($window.height() >= 450) {			
			//$('.contacts247 div').css('display','block');
			//$('.ContactsForm div:nth-child(2)').css('display','block');
			$('.ContactsWrap p').css('line-height',1.3);				
		}
		
		if ($window.height() >= 768)
		 {
			//при размере высоты браузера больше 768 возращаем позиции некоторых элементов в прежние 
			$('article.Main').css('height',768);				
			$('.slideBtns').css('top',530);
			$('.sli-links').css('padding-top',680);		
			//круги
			$('.clientsSlider').css('margin-top',0);	
			$('.circlesBlock .front').css('height',200);
			$('.circlesBlock .back').css('height',200);	
			$('.circlesBlock .front').css('width',200);
			$('.circlesBlock .back').css('width',200);			
			$('.circlesBlock').css('height',236);	
			$('.circlesBlock').css('margin-left',0);
			$('.circlesBlock').css('margin-right',20);	
			$('.ClientsWrap h2').css('padding-top',35);						
			$('.ClientsWrap h2').css('padding-bottom',35);													
			
			$('.CC').css('margin-left',55);	
			$('.PB span').css('height',166);		
			$('span.portfolioSliderBgOpacity').css('padding-top',125);	
			$('article.Contacts').css('height',568);	
			$('.ch-info').css('margin-left','0px');			
			$('.ContactsWrap').css('padding-top',50);
			$('.ContactsWrap h2').css('margin-top',40);			
			$('.ContactsWrap h2').css('margin-bottom',30);	
			$('.ContactsWrap p').css('margin-bottom',20);	
			$('.ContactsText').css('margin-top',35);
			$('.ContactsText p').css('margin-bottom',8);
			$('.WhatWeDoWrap h2').css('padding-top',40);
			$('.WhatWeDoWrap h2').css('padding-bottom',0);					
			$('.WhatWeDoServices').css('margin-top',43);	
			$('.ServicesCreative div').css('height',96);	
			$('.ServicesContent').css('padding-top',60);
			$('.ServicesMarketing div:first-child').css('padding-top',150);	
			$('.ServicesCreative div:first-child').css('padding-top',150);	
			$('.ServicesConnect div:first-child').css('padding-top',150);
			$('.ServicesEvents div:first-child').css('padding-top',150);
			$('.ServicesSupport div:first-child').css('padding-top',150);
			$('.ServicesDigital div:first-child').css('padding-top',150);	
			$('#prevBtn2').css('top',-710+332);	
			$('#nextBtn2').css('top',-300+332);		
			$('.ServicesCreative .btnBack').css('top',-300);
			$('.WhatWeDoServices div').css('height',93);
			$('.WhatWeDoServices div').css('padding-top',152);
			$('.WhatWeDoServices div').css('padding-bottom',0);			
			$('.ServicesMarketingWrap').css('height',491);
			$('.ServicesMarketing').css('height',491);
			$('.ServicesMarketingWrap').css('top',-491);
			$('.ServicesCreativeWrap').css('height',491);
			$('.ServicesCreative').css('height',491);
			$('.ServicesCreativeWrap').css('top',-491);
			$('.ServicesConnectWrap').css('height',491);
			$('.ServicesConnect').css('height',491);
			$('.ServicesConnectWrap').css('top',-491);
			$('.ServicesEventsWrap').css('height',491);
			$('.ServicesEvents').css('height',491);
			$('.ServicesEventsWrap').css('top',-491);
			$('.ServicesSupportWrap').css('height',491);
			$('.ServicesSupport').css('height',491);
			$('.ServicesSupportWrap').css('top',-491);
			$('.ServicesDigitalWrap').css('height',491);
			$('.ServicesDigital').css('height',491);
			$('.ServicesDigitalWrap').css('top',-491);				
		}
				
    }
    // Execute on load
    checkWidth();
	//alert("высота окна браузера равна " + $window.height());
	
    // Bind event listener
    $(window).resize(checkWidth);

	<!-- script for menu -->
	$(window).scroll(function () {
		var inview = '#' + $("section > div:in-viewport:first").attr('id'),
		$link = $('nav a').filter('[hash=' + inview + ']');
		if ($link.length && !$link.is('.selected')) {
			$('nav a').removeClass('selected');
			$link.addClass('selected');
		}
	})
	
   $("header a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });
   $("header li a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });
	<!-- end of script for menu -->
	
	<!-- clients slider -->
	$("#clientsSlider").easySlider({
		auto: true,
		continuous: true 
	});	
	<!-- portfolio slider -->	
	$("#portfolioSlider").easySlider2({
		auto: true,
		continuous: true 
	});		

	<!-- обработчики нажатия объектов и добавление им класса нажатия -->
	$('ul li a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('ul li a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('ul li a').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('a img').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('a img').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('a img').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('li.social').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('li.social').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('li.social').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('#prevBtn a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#prevBtn a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#prevBtn a').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('#prevBtn2 a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#prevBtn2 a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#prevBtn2 a').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('#nextBtn a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#nextBtn a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#nextBtn a').mouseup(function(){
		$(this).removeClass('clicked');
	});	
	$('#nextBtn2 a').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('#nextBtn2 a').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('#nextBtn2 a').mouseup(function(){
		$(this).removeClass('clicked');
	});		
	$('.btnSend').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('.btnSend').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('.btnSend').mouseup(function(){
		$(this).removeClass('clicked');
	});		
	$('.CC div div').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('.CC div div').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('.CC div div').mouseup(function(){
		$(this).removeClass('clicked');
	});
	$('.PB span').mousedown(function(){
		$(this).addClass('clicked');
	});
	$('.PB span').mouseleave(function(){
		$(this).removeClass('clicked');
	});	
	$('.PB span').mouseup(function(){
		$(this).removeClass('clicked');
	});			
	<!--обработчик клика на иконку маркетинговые коммуникации и планирование -->
	$('.ServicesMarketingClick').mousedown(function(){
		$('.ServicesMarketingWrap').addClass('displayYes');
		$('.ServicesMarketingBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesMarketing div').addClass('displayYes');
		$('.ServicesMarketing div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();		
	});		
	$('.ServicesMarketingWrap').mouseleave(function(){
		$('.ServicesMarketing div').stop();
		$('.ServicesMarketing div').css('opacity', 0);	
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesMarketing div.ServicesContent').css('opacity', 0);	
		$('.ServicesMarketingBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesMarketingWrap').removeClass('displayYes')},550);
	});	
	$('.ServicesMarketingBack').mousedown(function(){
		$('.ServicesMarketing div').stop();
		$('.ServicesMarketing div').css('opacity', 0);	
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesMarketing div.ServicesContent').css('opacity', 0);	
		$('.ServicesMarketingBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesMarketingWrap').removeClass('displayYes')},550);		
	});			
	<!--обработчик клика на иконку креатив и дизайн -->
	$('.ServicesCreativeClick').mousedown(function(){
		$('.ServicesCreativeWrap').addClass('displayYes');
		$('.ServicesCreativeBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesCreative div').addClass('displayYes');
		$('.ServicesCreative div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();		
	});		
	$('.ServicesCreativeWrap').mouseleave(function(){
		$('.ServicesCreative div').stop();
		$('.ServicesCreative div').css('opacity', 0);	
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').css('opacity', 0);	
		$('.ServicesCreativeBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesCreativeWrap').removeClass('displayYes')},550);	
	});	
	$('.ServicesCreativeBack').mousedown(function(){
		$('.ServicesCreative div').stop();
		$('div.ServicesContent').stop();		
		$('.ServicesCreative div').animate({opacity: '0'},100);
		$('div.ServicesContent').animate({opacity: '0'},100);	
		$('.ServicesCreativeBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesCreativeWrap').removeClass('displayYes')},550);	
	});	
	<!--обработчик клика на иконку связи с общественностью (PR) -->
	$('.ServicesConnectClick').mousedown(function(){
		$('.ServicesConnectWrap').addClass('displayYes');
		$('.ServicesConnectBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesConnect div').addClass('displayYes');
		$('.ServicesConnect div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();		
	});		
	$('.ServicesConnectWrap').mouseleave(function(){
		$('.ServicesConnect div').stop();
		$('.ServicesConnect div').css('opacity', 0);	
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').css('opacity', 0);	
		$('.ServicesConnectBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesConnectWrap').removeClass('displayYes')},550);
	});	
	$('.ServicesConnectBack').mousedown(function(){
		$('.ServicesConnect div').stop();
		$('.ServicesConnect div').css('opacity', 0);	
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').css('opacity', 0);	
		$('.ServicesConnectBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesConnectWrap').removeClass('displayYes')},550);		
	});		
	<!--обработчик клика на иконку организация мероприятий -->
	$('.ServicesEventsClick').mousedown(function(){
		$('.ServicesEventsWrap').addClass('displayYes');
		$('.ServicesEventsBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesEvents div').addClass('displayYes');
		$('.ServicesEvents div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();		
	});		
	$('.ServicesEventsWrap').mouseleave(function(){
		$('.ServicesEvents div').stop();
		$('.ServicesEvents div').css('opacity', 0);	
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').css('opacity', 0);	
		$('.ServicesEventsBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesEventsWrap').removeClass('displayYes')},550);		
	});	
	$('.ServicesEventsBack').mousedown(function(){
		$('.ServicesEvents div').stop();
		$('.ServicesEvents div').css('opacity', 0);	
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').css('opacity', 0);	
		$('.ServicesEventsBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesEventsWrap').removeClass('displayYes')},550);				
	});			
	<!--обработчик клика на иконку информационное сопровождение -->
	$('.ServicesSupportClick').mousedown(function(){
		$('.ServicesSupportWrap').addClass('displayYes');
		$('.ServicesSupportBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesSupport div').addClass('displayYes');
		$('.ServicesSupport div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();		
	});		
	$('.ServicesSupportWrap').mouseleave(function(){
		$('.ServicesSupport div').stop();
		$('.ServicesSupport div').css('opacity', 0);	
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').css('opacity', 0);	
		$('.ServicesSupportBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesSupportWrap').removeClass('displayYes')},550);				
	});	
	$('.ServicesSupportBack').mousedown(function(){
		$('.ServicesSupport div').stop();
		$('.ServicesSupport div').css('opacity', 0);	
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').css('opacity', 0);	
		$('.ServicesSupportBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesSupportWrap').removeClass('displayYes')},550);		
	});	
	<!--обработчик клика на иконку digital -->
	$('.ServicesDigitalClick').mousedown(function(){
		$('.ServicesDigitalWrap').addClass('displayYes');
		$('.ServicesDigitalBg').animate({width: '770', height: '491'},500);
		$('div.btnBack').animate({opacity: '1'},2500);
		$('.ServicesDigital div').addClass('displayYes');
		$('.ServicesDigital div').animate({opacity: '1'},2500);
		$('div.ServicesContent').animate({opacity: '1'},2500);
		$('.ServicesMarketing div.ServicesContent').stop();
		$('.ServicesCreative div.ServicesContent').stop();
		$('.ServicesConnect div.ServicesContent').stop();
		$('.ServicesEvents div.ServicesContent').stop();
		$('.ServicesSupport div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').stop();
	});		
	$('.ServicesDigitalWrap').mouseleave(function(){
		$('.ServicesDigital div').stop();
		$('.ServicesDigital div').css('opacity', 0);	
		$('.ServicesDigital div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').css('opacity', 0);	
		$('.ServicesDigitalBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesDigitalWrap').removeClass('displayYes')},550);		
	});	
	$('.ServicesDigitalBack').mousedown(function(){
		$('.ServicesDigital div').stop();
		$('.ServicesDigital div').css('opacity', 0);	
		$('.ServicesDigital div.ServicesContent').stop();
		$('.ServicesDigital div.ServicesContent').css('opacity', 0);	
		$('.ServicesDigitalBg').animate({width: '256', height: '245'},500);
		setTimeout(function(){$('.ServicesDigitalWrap').removeClass('displayYes')},550);	
	});		
	
	// обработчик прокрутки кругов
        $('.nav-list-example div div.back').hide().css('left', 0);
        function mySideChange(front) {
            if (front) {
                $(this).parent().find('div.front').show();
                $(this).parent().find('div.back').hide();
                
            } else {
                $(this).parent().find('div.front').hide();
                $(this).parent().find('div.back').show();
            }
        }
        $('.nav-list-example div').hover(
            function () {
                $(this).find('div').stop().rotate3Di('flip', 250, {direction: 'clockwise', sideChange: mySideChange});
            },
            function () {
                $(this).find('div').stop().rotate3Di('unflip', 500, {sideChange: mySideChange});
            }
        );	
	
		
		
});