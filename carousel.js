//variable global

let compteur = 0;
let elements, slides, slideWidth, diapoWidth

//load the doc first
window.onload = () => { 
 
    elements = document.querySelector(".slides")
    //put all the elements in array
    slides = Array.from(elements.children)

    // compute the width of the diapo
    slideWidth = 400//elements.getBoundingClientRect().width
    diapoWidthmax = 1200//diapo.getBoundingClientRect().width
    diapoWidth = 1000//diapo.getBoundingClientRect().width
       
    let next = document.querySelector("#next")
    let prev = document.querySelector("#prev")
    
    //if click on the next button load the slideNext/prev function
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)
}

function slideNext(){

    if(compteur < diapoWidthmax){
        compteur+=slideWidth
        if(compteur > diapoWidth){
            compteur = diapoWidth
        }
    }

    let decal = -compteur
    elements.style.transform = `translateX(${decal}px)`
 }

function slidePrev(){

    if(compteur > 0) {
        compteur-=slideWidth
        if(compteur < 0){
            compteur = 0
        }
    }

    let decal = -compteur   
    elements.style.transform = `translateX(${decal}px)`
 }