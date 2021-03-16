//variable global

let compteur = compteurComedies = compteurFrench = compteurOld = 0;
let elements, elementsComedies, elementsFrench, elementsOld
let slides, slideWidth, diapoWidth

//load the doc first
window.onload = () => { 
 
    elements = document.querySelector("#slides-best")
    elementsComedies = document.querySelector("#slides-comedies")
    elementsFrench = document.querySelector("#slides-french")
    elementsOld = document.querySelector("#slides-old")
 
    // compute the width of the diapo
    slideWidth = 400//elements.getBoundingClientRect().width
    diapoWidthmax = 1200//diapo.getBoundingClientRect().width
    diapoWidth = 1000//diapo.getBoundingClientRect().width
       
    //Next/Prev button
    let next = document.querySelector("#next-best")
    let prev = document.querySelector("#prev-best")
    let nextC = document.querySelector("#next-comedies")
    let prevC = document.querySelector("#prev-comedies")
    let nextF = document.querySelector("#next-french")
    let prevF = document.querySelector("#prev-french")
    let nextO = document.querySelector("#next-old")
    let prevO = document.querySelector("#prev-old")

    
    //if click on the next button load the slideNext/prev function
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    nextC.addEventListener("click", slideNextCom)
    prevC.addEventListener("click", slidePrevCom)

    nextF.addEventListener("click", slideNextFrench)
    prevF.addEventListener("click", slidePrevFrench)

    nextO.addEventListener("click", slideNextOld)
    prevO.addEventListener("click", slidePrevOld)

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
    //elt.style.transform = `translateX(${decal}px)`
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
    //elt.style.transform = `translateX(${decal}px)`
 }

 function slideNextCom(){

    if(compteurComedies < diapoWidthmax){
        compteurComedies+=slideWidth
        if(compteurComedies > diapoWidth){
            compteurComedies = diapoWidth
        }
    }

    let decal = -compteurComedies
    elementsComedies.style.transform = `translateX(${decal}px)`
    //elt.style.transform = `translateX(${decal}px)`
 }

function slidePrevCom(){
 
    if(compteurComedies > 0) {
        compteurComedies-=slideWidth
        if(compteurComedies < 0){
            compteurComedies = 0
        }
    }

    let decal = -compteurComedies 
    elementsComedies.style.transform = `translateX(${decal}px)`
    //elt.style.transform = `translateX(${decal}px)`
 }

 function slideNextFrench(){

    if(compteurFrench < diapoWidthmax){
        compteurFrench+=slideWidth
        if(compteurFrench > diapoWidth){
            compteurFrench = diapoWidth
        }
    }

    let decal = -compteurFrench
    elementsFrench.style.transform = `translateX(${decal}px)`
 }

function slidePrevFrench(){
 
    if(compteurFrench > 0) {
        compteurFrench-=slideWidth
        if(compteurFrench < 0){
            compteurFrench = 0
        }
    }

    let decal = -compteurFrench
    elementsFrench.style.transform = `translateX(${decal}px)`
  }
 function slideNextOld(){

    if(compteurOld < diapoWidthmax){
        compteurOld+=slideWidth
        if(compteurOld > diapoWidth){
            compteurOld = diapoWidth
        }
    }

    let decal = -compteurOld
    elementsOld.style.transform = `translateX(${decal}px)`
 }

function slidePrevOld(){
 
    if(compteurOld > 0) {
        compteurOld-=slideWidth
        if(compteurOld < 0){
            compteurOld = 0
        }
    }

    let decal = -compteurOld 
    elementsOld.style.transform = `translateX(${decal}px)`
 }