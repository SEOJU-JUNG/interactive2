
let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element2 = document.querySelector('#element2')


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
