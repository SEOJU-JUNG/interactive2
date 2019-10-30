let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')
let hourHand = document.querySelector('.hour')
let minuteHand = document.querySelector('.minute')

let minuteHand2 = document.querySelector('.minute2')
let hourHand2 = document.querySelector('.hour2')
let secondHand2 = document.querySelector('#secondHand2')
let timeEl2 = document.querySelector('#time2')

// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){

  // get the date object

  let d = new Date();

  // get hours, minutes, and seconds from the date object

  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  // update the clock's text with our time vars



  let timeText= h + "H" + m + "m" + s + "s"
  timeEl.innerText = timeText

  // let timeText2 = h + "시" + m + "분" + s + "s"
  // timeEl.innerText = timeText2

  // rotate secondHand based on the second value

  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6

  secondHand.style.transform = 'rotate('+ s * 6 +'deg)'

  minuteHand.style.transform = 'rotate('+ m * 6 +'deg)'

  hourHand.style.transform = 'rotate('+ (h % 12) * 30 +'deg)'


  var koreaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
  koreaTime = new Date(koreaTime);
  console.log('koreaTime time: '+koreaTime.toLocaleString())

  // detect if its a minute divisible by 5

  if(m % 5 == 0){
  	clockEl.classList.add('aFiveMinute');
  } else {
  	clockEl.classList.remove('aFiveMinute');
  }



    //KOREA TIME//

      let d2 = koreaTime

      // get hours, minutes, and seconds from the date object

      let h2 = addZeroIfNeeded(d2.getHours());
      let m2 = addZeroIfNeeded(d2.getMinutes());
      let s2 = addZeroIfNeeded(d2.getSeconds());

      // update the clock's text with our time vars

      let timeText2 = h2 + "시" + m2 + "분" + s2 + "s"
      timeEl2.innerText = timeText2



      secondHand2.style.transform = 'rotate('+ s2 * 6 +'deg)'

      minuteHand2.style.transform = 'rotate('+ m2 * 6 +'deg)'

      hourHand2.style.transform = 'rotate('+ (h2 % 12) * 30 +'deg)'


      var koreaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
      koreaTime = new Date(koreaTime);
      console.log('koreaTime time: '+koreaTime.toLocaleString())

      // detect if its a minute divisible by 5

      if(m % 5 == 0){
      	clockEl.classList.add('aFiveMinute');
      } else {
      	clockEl.classList.remove('aFiveMinute');
      }

}


// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
