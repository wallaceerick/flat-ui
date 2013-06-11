$.accordion = function(){

    var accordion = '.accordion h3';
    var content = '.accordion-content';

    $(accordion).click(function(){
    	$(accordion).removeClass('current');
    	$(content).slideUp('normal');

    	if($(this).next().is(':hidden') == true){
    		$(this).addClass('current');
    		$(this).next().slideDown('normal');
		}
	});

	$(accordion).mouseover(function() {
		$(this).addClass('hover');
	}).mouseout(function() {
		$(this).removeClass('hover');										
	});

	//$(content).hide();
	
}; 
