$(document).ready(function(){

	//Checkboxes & Radio Buttons
	$('input').iCheck({
		checkboxClass: 'check red',
		radioClass: 'radio red',
		labelHover: true
	});
	

	//Not Required 
	$('.checkboxes ul li').click(function(){ 
		$('.checkboxes ul li').removeClass('active');
		$(this).addClass('active');
	});
	$('.radios ul li').click(function(){ 
		$('.radios ul li').removeClass('active');
		$(this).addClass('active');
	});

})