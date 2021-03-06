$(document).ready(function(){

	//Menu Dropdown
	$('ul.menu').superfish();

	//Checkboxes & Radio Buttons
	$('input').iCheck({
		//If you need, change the color!
		checkboxClass: 'check black',
		radioClass: 'radio black',
		labelHover: true
	});
 
	//Tabs
	$.tabs();

	//Accordion
	$.accordion();

	//Select
	//$('select').selectbox();
	$('select.customized').customSelect();

	//Progressbar Animation
	$(".progressbar > span").each(function() {
		$(this).data("origWidth", $(this).width()).width(0).animate({
			width: $(this).data("origWidth"
		)}, 1200);
	});

	//Tooltip
	$('.north').tipsy({gravity: 'n'});
    $('.south').tipsy({gravity: 's'});
    $('.east').tipsy({gravity: 'e'});
    $('.west').tipsy({gravity: 'w'});
    $('.north-west').tipsy({gravity: 'nw'});
    $('.north-east').tipsy({gravity: 'ne'});
    $('.south-west').tipsy({gravity: 'sw'});
    $('.south-east').tipsy({gravity: 'se'});

	//Masked Inputs
	$(".mask-data").mask("99/99/9999");
	$(".mask-telefone").mask("(99) 9999-9999");
	$(".mask-celular").mask("(99) 9 9999-9999");

	//Shadowbox
	Shadowbox.init({
		overlayOpacity: 0.7,
	    animSequence: 'hw',
		displayCounter: true, 
		displayNav: true, 
		modal: false,
		onOpen:function(){
		},
		onClose:function(){
		}, 
		onFinish:function(){
		}
	});
	/* onLoad Message
	window.onload = function(){
		Shadowbox.open({
	       content:    '<div id="welcome-msg"><p>Welcome to my website!</p></div>',
	       player:     "html",
	       title:      "Welcome",
	       height:     350,
	       width:      350
 		});
	};
	*/
	
	//Slider
	$(".slider").responsiveSlides({
		auto: true,
		pager: true,
		timeout: 4000,
		nav: true,
		speed: 500,
		prevText: "",
		nextText: ""
	});
 
	//Scrollbar
	$(window).load(function(){
		$("#scrollbar-1").mCustomScrollbar();
		$("#scrollbar-2").mCustomScrollbar({
				scrollButtons:{
					enable: true
				}
		});
		$("#scrollbar-3").mCustomScrollbar({
				horizontalScroll:true,
				scrollButtons:{
					enable: true
				}
		});
	}); 

	//Video Callback
	videojs.options.flash.swf = "video.swf";

	//Not Required 
	$('.checkboxes ul li').click(function(){ 
		$('.checkboxes ul li').removeClass('active');
		$(this).addClass('active');
	});
	$('.radios ul li').click(function(){ 
		$('.radios ul li').removeClass('active');
		$(this).addClass('active');
	});
	$('.colors ul li').click(function(){
		alert($(this).attr("class"));
	});



	

	/* Not Required */
	$('a.icon-up-open').hide();
	$('.icons a.icon-down-open').click(function(){
		$('.icons').animate({height: '520px'}, 500);
		$(this).hide();
		$('a.icon-up-open').show();
	});
	$('.icons a.icon-up-open').click(function(){
		$('.icons').animate({height: '193px'}, 300);
		$(this).hide();
		$('a.icon-down-open').show();
	});

});

 