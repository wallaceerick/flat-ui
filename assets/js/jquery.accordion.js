$.accordion = function(){
 

    $('.horizontal h3').click(function(){
    	$('.horizontal h3').removeClass('current');
    	$('.accordion-content').slideUp('normal');

    	if($(this).next().is(':hidden') == true){
    		$(this).addClass('current');
    		$(this).next().slideDown('normal');
		}
	});

	$('.vertical h3').click(function(){
    	$('.vertical h3').removeClass('current');
    	$('.accordion-content').hide();

    	if($(this).next().is(':hidden') == true){
    		$(this).addClass('current');
    		$(this).next().fadeIn(300);
		}
	});



};