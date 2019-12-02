let images = document.querySelectorAll('.biggable')

for(let counter = 0; counter < images.length; counter ++){
  images[counter].addEventListener('click',function(){
    document.body.setAttribute('class','active-'+counter)
  })
}

let exIcon = document.querySelector('.x-icon-Wrap2')

exIcon.addEventListener('click',function(e){
  document.body.setAttribute('class','')
  e.preventDefault()
  return false
})


// prevent animation time

let page01Link = document.querySelector('#page01Link')

page01Link.addEventListener('click',function(event){
  event.preventDefault()

  document.body.classList.add('pageChangeAnimation')

  setTimeout(function(){
    window.location.href = page01Link.href
  },1200)

  return false
})



// scrollllll -

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".testbox").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
