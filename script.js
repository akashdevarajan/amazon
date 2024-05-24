let slideBtnLeft = document.getElementById("slider-btn-left");
let slideBtnRight = document.getElementById("slider-btn-right");
let imgitem = document.querySelectorAll(".image-item")

let startSlider = 0;
let endSlider = imgitem.length-1;



slideBtnLeft.addEventListener("click",()=>{
    if(startSlider <0){
        startSlider = startSlider + 100;
    }
    imgitem.forEach(Element =>{
        Element.style.transform =`translateX(${startSlider}%)`;
    })
})
slideBtnRight.addEventListener("click",()=>{
    if(startSlider >= -endSlider +100){
        startSlider = startSlider - 100;
    }
    imgitem.forEach(Element =>{
        Element.style.transform = `translateX(${startSlider}%)`;
    })
})