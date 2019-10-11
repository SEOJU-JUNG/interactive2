

let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element2 = document.querySelector('#element2')
let element11 = document.querySelector('#element-11')


element3.addEventListener('click',function() {

  element3.animate([{
			opacity: 0,
			marginLeft: getComputedStyle(this).marginLeft,
			fontSize: '100px',
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });

})

element6.addEventListener('pointermove',function(e){
  var xPos = e.pageX-125;
  var yPos = e.pageY-125;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})

element4.addEventListener('click',function(){
  this.classList.add('gradient-background')
})

element5.addEventListener('click', function(){
  this.nextElementSibling.classList.toggle('circle');
})


// element2
element2.addEventListener('click',function() {

  element2.animate([{

			marginLeft: getComputedStyle(this).marginLeft,
      marginTop: getComputedStyle(this).marginLeft,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {

			marginTop: '0px',
			marginLeft: '200px',
			borderWidth: '10px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });

})

function myFunction() {
  document.getElementById("element2").style.height = "50px";
}

// element3
function myMove() {
  var elem = document.getElementById("element3-kid");
  var pos = 40;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
// element4


function draw() {
  // console.log('hi')

  let circle = document.querySelector('#element4 .circle')
  let r = Math.random() * 255
  let g = Math.random() * 255
  let b = Math.random() * 255
  circle.style.background = `rgb(${r},${g},${b})`

  let height = Math.random()
// circle.style.transform = `scale(1,${height})`
  circle.style.transform = `scale(${height})`
  // frameRate(20);
  // background(200, 40);
  // noStroke();
  // fill(random(255), random(255), random(255));
  // ellipse(random(height),200, random(40, 30));
  window.requestAnimationFrame(draw)
  }

// 11
  element11.addEventListener("click", function () {
    var adder = 10

    var x = 0
    element11.style.position = 'relative'
  element11.style.background = `rgb(${253},${235},${95})`

    function draw() {
        x = x + adder

        let width = window.innerWidth - element11.clientWidth
        let hasLeftScreen = x > width || x < -width
        if (hasLeftScreen) {
            adder *= -1
            // x = -width
        }
        console.log(x)
        element11.style.left = x + "px"
        window.requestAnimationFrame(draw)
    }


    window.requestAnimationFrame(draw)
});




let heart = document.querySelector('.heart1')
let element6a = document.querySelector('#element6')

heart.addEventListener('click',function(){
  element6a.classList.add('heartVisible')
})

// 13
let circle131 = document.querySelector('.circle13-1 ')
let circle132 = document.querySelector('.circle13-2')
let circle133 = document.querySelector('.circle13-3')


circle132.addEventListener('click',function(){
  circle133.classList.add('redcircleVisible')
})

// 30
// let element330 = document.querySelector('#element-30')
// let circir = document.querySelector('.circle')
//
// element330.addEventListener('click',function() {
// element330.classList.add('cirVisible')
// })


// 37
let element37 = document.querySelector('#element-37')
let cir37 = document.querySelector('.circle37')

element37.addEventListener('click',function() {
element37.classList.add('cir37Visible')
})
