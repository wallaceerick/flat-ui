$.tabs = function(){

    var tabs = '.tabs ul li';
    var content = '.tabs-content';

    $(content + ' li').hide();
    $(content + ' li:first-child').show();

    $(tabs + ' a').click(function(){
        $(tabs + ' a').removeClass('current');
        $(this).addClass('current');
        $(content + ' div').hide();
        $(content +  ' ' + $(this).attr('href')).fadeIn(300);

        return false;
    }); 

}; 
            
