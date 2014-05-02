/*
***********************
Flat UI: Accordion JS
Author: Wallace Erick
Author URL: http://www.wallaceerick.com.br/
Usage: $.accordion();
***********************
*/

$.accordion = function(){

    var horizontal = '.horizontal',
        vertical   = '.vertical',
        button     = ' h3',
        content    = ' .accordion-content';

    // Horizontal
    $(horizontal + button).click(function() {
        // Multiple Toggle
        if($(this).parent().hasClass('multiple')){
            $(this).toggleClass('current');
            $(this).next().stop().slideToggle('normal');
        }
        // Single Toggle
        else {
            $(this).parent().find(button).removeClass('current');
            $(this).parent().find(content).stop().slideUp('normal');

            if($(this).next().is(':hidden')) {
                $(this).addClass('current');
                $(this).next().stop().slideDown();
            }

        }
    });

    // Vertical
    $(vertical + button).click(function() {
        // Multiple Toggle
        if($(this).parent().hasClass('multiple')){
            $(this).toggleClass('current');
            $(this).next().stop().toggle();
        }
        // Single Toggle
        else {
            $(this).parent().find(button).removeClass('current');
            $(this).parent().find(content).stop().hide();

            if($(this).next().is(':hidden')) {
                $(this).addClass('current');
                $(this).next().stop().show()
            }
        }
    });

}