var printText = $('.text1').data('text1');

var contentArray = printText.split('/n');
$.each(contentArray, function(index, newLine) {
  $('.text').append('<span style="display:block;" id="'+index+'"></span>');

  var lineID = index;
  var self = $(this);
    setTimeout(function () {
      $.each(self, function(index, chunk){
          setTimeout(function () {
            $('#'+lineID).append("<span>"+chunk+"</span>");
            $('body, html').scrollTop($(document).height());
          }, index*5);
      });

    }, index*100);
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});


$(document).ready(function(){
  //Navigation
  // $('.circle_MON').hover(function(){
  //   $(this).toggleClass('hovered');
  // });
  // $('.circle_MON').click(function(){
  //   $(this).addClass('hovered');
  //   $('.circle_TUES').removeClass('hovered');
  // });
  // $('.circle_TUES').click(function(){
  //   $(this).addClass('hovered');
  //   $('.circle_MON').removeClass('hovered');
  // });

  
