window.addEventListener('resize',pageResized)


function pageResized(){

  let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100

  let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
  document.body.style.color = colorFromScreenHeight

}

pageResized()



let page01Link = document.querySelector('#page01Link')

page01Link.addEventListener('click',function(event){
  event.preventDefault()

  document.body.classList.add('pageChangeAnimation')

  setTimeout(function(){
    window.location.href = page01Link.href
  },800)

  return false
})
