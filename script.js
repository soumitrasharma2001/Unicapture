function cursorEffect(){
let page1Content = document.querySelector("#page1-content")
let cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove", (dets) => {
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y 
   })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()
let intro = document.getElementById('intro')
let main = document.getElementById('main')
setTimeout(() => {
    intro.style.display = "none"
    main.style.display = "block"
}, 7000)
document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll(".text");
  
    texts.forEach((text, index) => {
      const delay = text.getAttribute("data-delay");
      text.style.animationDelay = delay;
    });
  });
  
