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
	$('select').selectbox();

	//Progressbar
	$(".progressbar > span").each(function() {
		$(this).data("origWidth", $(this).width()).width(0).animate({width: $(this).data("origWidth")}, 1200);
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
		displayNav: true,
		displayCounter: true,
		counterType: "skip"

	});
	/*
	//onLoad Message
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
		auto: false,
		pager: true,
		speed: 300,
		maxwidth: 960
	});
 
	//Scrollbar
	$(window).load(function(){
		$(".scrolled").mCustomScrollbar({
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

	//Datepicker
	//$('.datepicker').pickadate();

 
	$('.example-twitter-oss .typeahead').typeahead({                              
  name: 'twitter-oss',                                                        
  prefetch: 'http://twitter.github.io/typeahead.js/data/repos.json',                                             
  template: [                                                                 
    '<p class="repo-language">{{language}}</p>',                              
    '<p class="repo-name">{{name}}</p>',                                      
    '<p class="repo-description">{{description}}</p>'                         
  ].join(''),                                                                 
  engine: Hogan                                                               
});

});

 