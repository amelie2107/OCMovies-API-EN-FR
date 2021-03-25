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
    diapoWidthmax = 1200
    diapoWidth = 1000
    
    /* for responsive website*/
    elt = document.querySelector(".slideshow-container")
    eltW = elt.getBoundingClientRect().width
    if(eltW < slideWidth){
        slideWidth = 205
        diapoWidthmax = 1550
        diapoWidth = slideWidth * 6
    }

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

/*Button to move to the next best movies
if the actual position (compteur) of the diapo is smallest than the maximum width of the diapo, 
then we can move the diapo to the left but if this new position is over
the maximum width of the diapo we move only to the maximum width of the diapo*/
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

/*Button to move to the previous best movie
if the actual position (compteur) of the diapo is over zero, 
then we can move the diapo to the right but if this new position is under zero
we move only to zero (the initial position)*/
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

/*Button to move to the next best comedie
if the actual position (compteur) of the diapo is smallest than the maximum width of the diapo, 
then we can move the diapo to the left but if this new position is over
the maximum width of the diapo we move only to the maximum width of the diapo*/
function slideNextCom(){

    if(compteurComedies < diapoWidthmax){
        compteurComedies+=slideWidth
        if(compteurComedies > diapoWidth){
            compteurComedies = diapoWidth
        }
    }

    let decal = -compteurComedies
    elementsComedies.style.transform = `translateX(${decal}px)`
}

/*Button to move to the previous best comedie
if the actual position (compteur) of the diapo is over zero, 
then we can move the diapo to the right but if this new position is under zero
we move only to zero (the initial position)*/
function slidePrevCom(){
 
    if(compteurComedies > 0) {
        compteurComedies-=slideWidth
        if(compteurComedies < 0){
            compteurComedies = 0
        }
    }

    let decal = -compteurComedies 
    elementsComedies.style.transform = `translateX(${decal}px)`
}

/*Button to move to the next best french movie
if the actual position (compteur) of the diapo is smallest than the maximum width of the diapo, 
then we can move the diapo to the left but if this new position is over
the maximum width of the diapo we move only to the maximum width of the diapo*/
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

/*Button to move to the previous best french movie
if the actual position (compteur) of the diapo is over zero, 
then we can move the diapo to the right but if this new position is under zero
we move only to zero (the initial position)*/
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

/*Button to move to the next best french movie
if the actual position (compteur) of the diapo is smallest than the maximum width of the diapo, 
then we can move the diapo to the left but if this new position is over
the maximum width of the diapo we move only to the maximum width of the diapo*/
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

/*Button to move to the previous best old movie
if the actual position (compteur) of the diapo is over zero, 
then we can move the diapo to the right but if this new position is under zero
we move only to zero (the initial position)*/
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