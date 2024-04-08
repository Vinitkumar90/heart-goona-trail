const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (e)=>{
    const Xpos = e.offsetX;
    const Ypos = e.offsetY
    const spanEl = document.createElement("span")
    spanEl.style.left = Xpos + "px"
    spanEl.style.top = Ypos + "px"
    const size = Math.floor(Math.random()*100);
    spanEl.style.width = size +"px";
    spanEl.style.height = size + "px"
    spanEl
    bodyEl.appendChild(spanEl)

    setTimeout(()=>{
        spanEl.remove();
    },3000);
})