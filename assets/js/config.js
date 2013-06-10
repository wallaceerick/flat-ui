$(document).ready(function(){

	//Checkboxes & Radio Buttons
	$('input').iCheck({
		//If you need, change the color!
		checkboxClass: 'check red',
		radioClass: 'radio red',
		labelHover: true
	});

	//Tabs
	$.tabs();

	$('input.input-error').prepend('add your smiley here');

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