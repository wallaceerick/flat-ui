$(function(){

  //Add Buttons
  $(".input-increment").append('<span class="background"></span><i class="button icon-up-dir"></i><i class="button icon-down-dir"></i>');

  //Add Hover class to Elements
  $('.input-increment').hover(function(){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
  });

  //Check if is Focused 
  //...

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.is('.icon-up-dir')) {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);

  });

});