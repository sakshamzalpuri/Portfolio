function startLodaer(){
    let currentElement  = document.querySelector(".counter")
    let currentVal = 0

    function updateCounter(){
        if(currentVal===100) return;
        currentVal += Math.floor(Math.random()*10)+1
        if(currentVal>100){
            currentVal = 100
        }
        currentElement.textContent = currentVal
        let delay = Math.floor(Math.random()*200)+50

        setTimeout(updateCounter,delay)
    }
    updateCounter()
}
startLodaer()


gsap.to(".counter",1.5,{
    delay:2.2,
    opacity:0,
})
gsap.to(".bar", 1.5,{
    delay:3,
    height:0,
    stagger:{
       amount:0.5, 
    },
    ease:"power4.inout",
    onComplete() {
    const overlay = document.querySelector(".overlay")
    if (overlay) overlay.style.display = "none"
    const counter = document.querySelector(".counter")
    if (counter) counter.style.display = "none"
    document.body.style.overflow = "" 

    // 
  }
});





