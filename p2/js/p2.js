//
//
// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();
//
//   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
//
//   $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
// });



//BK move

var blendAmount = 100;
var delay = -10;
var windowWidth = window.innerWidth;
var bg = document.getElementById("bg");

document.onmousemove = function(e){
	mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
	col1 = mouseX - blendAmount;
	col2 = mouseX + blendAmount;

	bg.style.background = "linear-gradient(to right, #a8edea "+ col1 +"%, #fed6e3 "+ col2 +"%)";
}

//Background MOVE//
$("#bg").mousemove(function(e) {
  // parallaxIt(e, ".organic", -100);
  // parallaxIt(e, "img", -30);
  parallaxIt(e, ".deco1", -100);
});

function parallaxIt(e, target, movement) {
  var $this = $("#bg");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


//small ani

let organicKing = document.querySelector('.organic')
let organicA = document.querySelector('.organic1')
let organicD = document.querySelector('.organic4')

organicKing.addEventListener('click',function(){
organicKing.classList.add('organicVisible-4')
organicKing.classList.add('organicVisible-1')

})
