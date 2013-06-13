$(document).ready(function(){

	//Menu Dropdown
	$('ul.menu').superfish();

	//Checkboxes & Radio Buttons
	$('input').iCheck({
		//If you need, change the color!
		checkboxClass: 'check orange',
		radioClass: 'radio orange',
		labelHover: true
	});

	//Tabs
	$.tabs();

	//Accordion
	$.accordion();

	//Select
	$('select').selectbox();

	//Masked Inputs
	$(".mask-data").mask("99/99/9999");
	$(".mask-telefone").mask("(99) 9999-9999");
	$(".mask-celular").mask("(99) 9 9999-9999");


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

});