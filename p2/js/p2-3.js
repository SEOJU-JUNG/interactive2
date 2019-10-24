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

	bg.style.background = "linear-gradient(to right, #0D8FB9 "+ col1 +"%, #fed6e3 "+ col2 +"%)";
}

//Background MOVE//
$("#bg").mousemove(function(e) {


  parallaxIt(e, "img", -30);
  parallaxIt(e, ".deco1", -140);
	parallaxIt(e, ".deco2", -290);
	parallaxIt(e, ".deco3", -16);
	parallaxIt(e, ".deco5", -51);
	parallaxIt(e, ".deco6", -11);
	parallaxIt(e, ".deco7", -111);
	parallaxIt(e, ".deco12", -30);
	parallaxIt(e, ".deco4", -50);

	parallaxIt(e, ".deco8", -50);
	parallaxIt(e, ".deco9", -50);
	parallaxIt(e, ".deco10", -50);
	parallaxIt(e, ".deco11", -70);




	parallaxIt(e, ".organic3", -40);
	parallaxIt(e, ".organic1", -90);
	parallaxIt(e, ".organic2", -10);



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

// let organicKing = document.querySelector('.organic')
// let organicA = document.querySelector('.organic1')
// let organicD = document.querySelector('.organic4')
//
// organicKing.addEventListener('click',function(){
// organicKing.classList.add('organicVisible-4')
// organicKing.classList.add('organicVisible-1')
//
// })
