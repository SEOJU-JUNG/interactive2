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
