/* modal variable allow to know if the modal is open*/
let modal = null

const openModal = async function(e){
    e.preventDefault()
    refImg = e.target.id

    let dataMovie = await getFullMovieInfo(refImg)

    document.querySelector('#title-img').innerHTML = dataMovie.title
    document.querySelector('#image-img').src = dataMovie.img
    document.querySelector('#genre-img').innerHTML = dataMovie.genre
    document.querySelector('#date-img').innerHTML = dataMovie.date
    document.querySelector('#rated-img').innerHTML = dataMovie.rate
    document.querySelector('#score-img').innerHTML = dataMovie.score
    document.querySelector('#directors-img').innerHTML = dataMovie.director
    document.querySelector('#actors-img').innerHTML = dataMovie.actor
    document.querySelector('#time-img').innerHTML = dataMovie.time
    document.querySelector('#country-img').innerHTML = dataMovie.countries
    document.querySelector('#result-img').innerHTML = dataMovie.result
    document.querySelector('#sumup-img').innerHTML = dataMovie.sumup

    const target = document.querySelector(".modal")
    target.style.display = null;
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    /*Close modal with close button*/
    modal.querySelector('.closebtn').addEventListener('click', closeModal)
}

const closeModal  = function(e){
    /*if we try to close a non existant modal we return directly*/
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none";
    modal.setAttribute('aria-hidden','true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.closebtn').removeEventListener('click', closeModal)
    modal = null
}

let clickableImg = document.querySelectorAll(".mySlide").forEach(a => {
    a.addEventListener('click', openModal)
})
