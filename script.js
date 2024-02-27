let page1Content = document.querySelector("#page1-content")
let cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
let intro = document.getElementById('intro')
let main = document.getElementById('main')
setTimeout(() => {
    intro.style.display = "none"
    main.style.display = "block"
}, 7000)
