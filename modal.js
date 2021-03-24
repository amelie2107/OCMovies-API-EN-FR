/* modal variable allow to know if the modal is open*/
let modal = null;

/* open a new modal, retreive the id of the element selected 
(that correspond to the url of the movie in the API),
retreive information from this URL
push information in the HTML modal window
Listen if the close button is clicked*/
const openModal = async function(e){
    e.preventDefault();
    const refImg = e.target.id;

    let dataMovie = await getFullMovieInfo(refImg);

    document.querySelector('#title-img').innerHTML = dataMovie.title;
    document.querySelector('#image-img').src = dataMovie.img;
    document.querySelector('#genre-img').innerHTML = dataMovie.genre;
    document.querySelector('#date-img').innerHTML = dataMovie.date;
    document.querySelector('#rated-img').innerHTML = dataMovie.rate;
    document.querySelector('#score-img').innerHTML = dataMovie.score;
    document.querySelector('#directors-img').innerHTML = dataMovie.director;
    document.querySelector('#actors-img').innerHTML = dataMovie.actor;
    document.querySelector('#time-img').innerHTML = dataMovie.time;
    document.querySelector('#country-img').innerHTML = dataMovie.countries;
    document.querySelector('#result-img').innerHTML = dataMovie.result;
    document.querySelector('#sumup-img').innerHTML = dataMovie.sumup;

    const target = document.querySelector(".modal");
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    /*Close modal with close button*/
    modal.querySelector('.closebtn').addEventListener('click', closeModal);
};

/* Close the existant modal (if modal not null)*/
const closeModal  = function(e){
    /*if we try to close a non existant modal we return directly*/
    if (modal === null) return;
    e.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden','true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.closebtn').removeEventListener('click', closeModal);
    modal = null;
};

/* Event if the user click on img with the class "mySlide" => all movies in categories*/
document.querySelectorAll(".mySlide").forEach(a => {
    a.addEventListener('click', openModal);
});

/* Event if the user click on img with the class "image" => best movies*/
document.querySelectorAll(".image").forEach(a => {
    a.addEventListener('click', openModal);
});

