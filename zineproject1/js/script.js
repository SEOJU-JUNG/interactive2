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

var{
  font-family: 'Press Start 2P', cursive;
  position: absolute;
  left: 50%;
  margin-left: calc(-1000px/2);
/* top */
  margin-top: 320px;
  width: 1000px;
  height: 100px;
  display: inline;
  text-align: center;
  font-size: 1.9em;
  font-weight: normal;
  float: right;
}
