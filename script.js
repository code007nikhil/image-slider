var slides = document.querySelectorAll(".slide");

slides.forEach((slide , index)=>{
    slide.style.left = `${index * 100}%`;
})

var countr = 0;

function sliderslide(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(${countr * -100}%)`
    })
}

function prev(){
    if(countr !== 0){
        countr--;
    sliderslide()
    }
}
function next(){
    if(countr !== slides.length-1){
        countr++;
    sliderslide()
    } 
}