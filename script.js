const sliderBtns = document.querySelectorAll(".sliderBtn");
var wasClicked = false
var WhereScrollIsNow = 0

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener("click", () => {
    for (let j = 0; j < sliderBtns.length; j++) {
      sliderBtns[j].style.backgroundColor = "transparent";
      sliderBtns[j].style.opacity = 1
    }
    sliderBtns[i].style.backgroundColor = "white";
    wasClicked = true
  });
  


}



document.addEventListener('DOMContentLoaded', () => {
  startScrollLoop()
  
})

function startScrollLoop() {
  if (wasClicked == false) {
    console.log('oi')
    ScrollSlides(DistanceToScroll())


  }
  setTimeout(startScrollLoop, 
    5000
    )
}


function ScrollLimiter(SizeofSlide) {
  let MaxScroll = SizeofSlide * 4
  
  if ( WhereScrollIsNow >= MaxScroll ) {
    return true
  } 
}


function ScrollSlides(distance) {
  console.log(distance)
    const container = document.getElementById("BlockContainer")
    container.scroll({
    top:0,
    left:distance,
    behavior:"smooth"
    })
} 

function DistanceToScroll() {
    let SizeofSlide = window.innerHeight * 0.40
    WhereScrollIsNow += SizeofSlide

    if ( ScrollLimiter(SizeofSlide) == true ) {
      WhereScrollIsNow = 0
      
    }
    return WhereScrollIsNow
}
