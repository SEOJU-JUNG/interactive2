

// let element4 = document.querySelector('#element-4')
let element2 = document.querySelector('#element2')
let element11 = document.querySelector('#element-11')


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


// 4

function draw() {
  // console.log('hi')

  let circle4a = document.querySelector('#element-4 .circle4')
  let r = Math.random() * 255
  let g = Math.random() * 255
  let b = Math.random() * 255
  circle4a.style.background = `rgb(${r},${g},${b})`

  let height = Math.random()
// circle.style.transform = `scale(1,${height})`
  circle4a.style.transform = `scale(${height})`
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
      element11.style.height = '100px'
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

//30
let element330 = document.querySelector('#element-30')
let circir = document.querySelector('.circle30')

element330.addEventListener('click',function() {
element330.classList.add('cirVisible')
element330.style.borderRadius = '50%'
  element330.style.width = '200px'
})


// 37
let element37 = document.querySelector('#element-37')
let cir37 = document.querySelector('.circle37')

element37.addEventListener('click',function() {
element37.classList.add('cir37Visible')
})

// 32
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


// 45
let element45 = document.querySelector("#element-45");

element45.addEventListener("pointermove", function (e) {
    var xPos = e.pageX - 50;
    var yPos = e.pageY - 50;

    document.querySelector(".circleA").style.position = "absolute";
    document.querySelector(".circleA").style.top = yPos + "px";
    document.querySelector(".circleA").style.left = xPos + "px";
});


// 46


let element46 = document.querySelector("#element-46");


let squares1 = []

for (let y = 0; y < 5; y++) {

    for (let x = 0; x < 10; x++) {

        let square1 = document.createElement('div')
        square1.classList.add('square1')

        square1.style.top = y * 40 + 'px'
        square1.style.left = x * 40 + 'px'

        element46.appendChild(square1)
        squares1.push(square1)
    }


}

element46.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares1.length; counter++) {

        let x = Math.random() * 400 - 200;
        let y = Math.random() * 200 - 100;
        let s = Math.random() * 2;
        let r = Math.random() * 360;

        squares1[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        // squares[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
element46.addEventListener('mouseleave', function () {
    console.log('27-leave')
})


// 48
let element48 = document.querySelector('#element-48')

let squares2 = []

for (let y = 0; y < 7; y++) {

    for (let x = 0; x < 14; x++) {

        let square2 = document.createElement('div')
        square2.classList.add('square1')

        square2.style.top = y * 30 + 'px'
        square2.style.left = x * 29.5 + 'px'

        element48.appendChild(square2)
        squares2.push(square2)
    }


}

element48.addEventListener('mouseenter', function () {
    for (let counter = 0; counter < squares2.length; counter++) {

        let x = Math.random() * 400 - 200;
        let y = Math.random() * 200 - 150;
        let s = Math.random() * 2;
        let r = Math.random() * 1090;

        // squares2[counter].style.transform = 'translate(' + x + 'px,' + y + 'px)'
        squares2[counter].style.transform = 'rotate(' + r + 'deg)';
        // squares2[counter].style.transform = 'scale(1.3)';

        // squares[counter].style.transform = 'scale(' + s + ')';
        // squares[counter].style.transform = 'scale(' + s + ')' + 'rotate(' + r + 'deg)';
    }
})
element48.addEventListener('mouseleave', function () {
    console.log('30-leave')
})

element48.addEventListener("click", function () {
    this.classList.add("gradient-background");
});
