/*lancer l'API avec cette commande dans le Terminal : pipenv run python manage.py runserver */


/*Best movie idbm*/
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(response => response.json())
    .then(moviesInfo => {

      document.getElementById("bestimg").src = moviesInfo.results[0].image_url;        
      document.getElementById("bestTitle").innerHTML = moviesInfo.results[0].title;        
      document.getElementById("description").innerHTML = moviesInfo.results[0].description;   
      
      document.getElementById("cat1-img1").src = moviesInfo.results[1].image_url;
      document.getElementById("cat1-img2").src = moviesInfo.results[2].image_url;
      document.getElementById("cat1-img3").src = moviesInfo.results[3].image_url;
      document.getElementById("cat1-img4").src = moviesInfo.results[4].image_url;
  
      /*for(let i=1; i<5; i++){
        let imgVar = "cat1.img" + i
        console.log(imgVar);
        console.log(moviesInfo.results[i].image_url);
        document.getElementById(imgVar).src = moviesInfo.results[i].image_url;
      }*/

  });
 

  fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
      .then(response => response.json())
      .then(moviesInfo => {
        /*console.log(moviesInfo);
        console.log(moviesInfo.results[0].image_url);*/
  
        document.getElementById("cat1-img5").src = moviesInfo.results[0].image_url;
        document.getElementById("cat1-img6").src = moviesInfo.results[1].image_url;
        document.getElementById("cat1-img7").src = moviesInfo.results[2].image_url; 
    });
  

/*Best comedy idbm*/
fetch("http://localhost:8000/api/v1/titles/?genre_contains=comedy&sort_by=-imdb_score")
    .then(response => response.json())
    .then(moviesInfo => {
  
      document.getElementById("cat2-img1").src = moviesInfo.results[0].image_url;
      document.getElementById("cat2-img2").src = moviesInfo.results[1].image_url;
      document.getElementById("cat2-img3").src = moviesInfo.results[2].image_url;
      document.getElementById("cat2-img4").src = moviesInfo.results[3].image_url;
      document.getElementById("cat2-img5").src = moviesInfo.results[4].image_url;
  
  });
 

  fetch("http://localhost:8000/api/v1/titles/?genre_contains=comedy&page=2&sort_by=-imdb_score")
      .then(response => response.json())
      .then(moviesInfo => {
        /*console.log(moviesInfo);
        console.log(moviesInfo.results[0].image_url);*/
  
        document.getElementById("cat2-img6").src = moviesInfo.results[1].image_url;
        document.getElementById("cat2-img7").src = moviesInfo.results[2].image_url; 
    });

/*Best french idbm*/
fetch("http://localhost:8000/api/v1/titles/?country=france&sort_by=-imdb_score")
    .then(response => response.json())
    .then(moviesInfo => {
  
      document.getElementById("cat3-img1").src = moviesInfo.results[0].image_url;
      document.getElementById("cat3-img2").src = moviesInfo.results[1].image_url;
      document.getElementById("cat3-img3").src = moviesInfo.results[2].image_url;
      document.getElementById("cat3-img4").src = moviesInfo.results[3].image_url;
      document.getElementById("cat3-img5").src = moviesInfo.results[4].image_url;
  
  });
 

  fetch("http://localhost:8000/api/v1/titles/?country=france&page=2&sort_by=-imdb_score")
      .then(response => response.json())
      .then(moviesInfo => {
        /*console.log(moviesInfo);
        console.log(moviesInfo.results[0].image_url);*/
  
        document.getElementById("cat3-img6").src = moviesInfo.results[1].image_url;
        document.getElementById("cat3-img7").src = moviesInfo.results[2].image_url; 
    });

/*Best old idbm*/
fetch("http://localhost:8000/api/v1/titles/?sort_by=year")
  .then(response => response.json())
  .then(moviesInfo => {

    document.getElementById("cat4-img1").src = moviesInfo.results[0].image_url;
    document.getElementById("cat4-img2").src = moviesInfo.results[1].image_url;
    document.getElementById("cat4-img3").src = moviesInfo.results[2].image_url;
    document.getElementById("cat4-img4").src = moviesInfo.results[3].image_url;
    document.getElementById("cat4-img5").src = moviesInfo.results[4].image_url;

});


fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=year")
    .then(response => response.json())
    .then(moviesInfo => {
      /*
      console.log(moviesInfo);
      console.log(moviesInfo.results[0].image_url);*/

      document.getElementById("cat4-img6").src = moviesInfo.results[1].image_url;
      document.getElementById("cat4-img7").src = moviesInfo.results[2].image_url; 
  });



/*const carouselImage = document.querySelector('.mySlide');
const carouselButtonPrev = document.getElementById("next");
const carouselButtonNext = document.getElementById("prev");
*/
//const nbOfImg = document.querySelectorAll('.slides img').length;
/*let nbOfImg = 7;

console.log('nb img');
console.log(nbOfImg);
console.log('bouton');
console.log(carouselButtonNext);
console.log('img')
console.log(carouselImage);*/

/*const items = document.querySelector(test);
const ttt = items.querySelectorAll('img');
console.log(ttt);
const nbslides = ttt.length;
console.log(nbslides);*/

function nextmovies() {
  
  let imageIndex = 1;
  let translateX = 0;

  translateX -= 300;
  
  document.querySelector(".slides").style.transform = `translateX(${translateX}px)`;
};
function prevmovies() {
  let imageIndex = 1;
  let translateX = 0;

  translateX += 300;
  
  document.querySelector(".slides").style.transform = `translateX(${translateX}px)`;
};

/*
document.getElementById("next").onclick = function() {alert("next");};
document.getElementById("prev").onclick = function() {alert("prev");};
*/
/*
let imageIndex = 1;
let translateX = 0;

carouselButtonPrev.forEach(button => {
  button.addEventListener('click', event => {
    console.log(event.target.id);
    if (event.target.id === 'prev') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== nbOfImg) {
        imageIndex++;
        translateX -= 300;
      }
    }
    carouselImage.style.transform = `translateX(${translateX}px)`;
  });
});
console.log('tst img');
console.log(document.querySelectorAll('.test img').length);*/

/*carouselButtonNext.forEach(button => {
  alert("coucou");*/
  /*button.addEventListener('click', event => {
    console.log(event.target.id);
    if (event.target.id === 'next') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== nbOfImg) {
        imageIndex++;
        translateX -= 300;
      }
    }
    carouselImage.style.transform = `translateX(${translateX}px)`;
  });*/
/*});*/


/*


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/
/*console.log(data);
var resultat = "";
data.then((value) => {
  console.log(value);
  resultat = value;
  return resultat;
  // expected output: 123
});
console.log("out function");
console.log(resultat);*/

    /*
      console.log(moviesInfo.results[0]);
      console.log(moviesInfo.results[0].url)
      console.log(moviesInfo.results[0].title);
      console.log(moviesInfo.results[0].image_url);
      console.log(moviesInfo.results[0].genres);
      console.log(moviesInfo.results[0].year);
      console.log(moviesInfo.results[0].imdb_score);
      console.log(moviesInfo.results[0].directors);
      console.log(moviesInfo.results[0].actors);
      console.log(moviesInfo.results[0].duration);
      console.log(moviesInfo.results[0].countries);
      console.log(moviesInfo.results[0].metascore);
      console.log(moviesInfo.results[0].description);
      let bestMovies = new Movies (
        moviesInfo.results[0].url,
        moviesInfo.results[0].title,
        moviesInfo.results[0].image_url,
        moviesInfo.results[0].genres,
        moviesInfo.results[0].year,
        moviesInfo.results[0].imdb_score,
        moviesInfo.results[0].directors,
        moviesInfo.results[0].directors,
        moviesInfo.results[0].actors,
        "",
        "",
        "",
        ""
      )
      const bestMovieURL = moviesInfo.results[0].url;
      console.log(bestMovies);


      
      bestMoviesInfo = infoFromURL(bestMovieURL);
      console.log(bestMoviesInfo);*/
 /*     console.log(bestMoviesInfo);
      document.getElementById("title").innerHTML = bestMoviesInfo[0];
      document.getElementById("img").src = bestMoviesInfo[1];
      document.getElementById("description").innerHTML = bestMoviesInfo[2];
*/
  /*})
  .catch(err => console.log(err));
  console.log("test");
  console.log(bestMovieURL);      eturn moviesInfo;*/

/*
fetch(url)
  .then(response => response.json())
  .then(moviesInfo => {

    moviesInfoArray.push(moviesInfo.title);
    moviesInfoArray.push(moviesInfo.image_url);
    moviesInfoArray.push(moviesInfo.description);

  })
 .catch(err => console.log(err));*/

 class Movies{
   constructor(
     url,
     title,
     urlImg,
     genre,
     year,
     imdbScore,
     director,
     actors,
     duration,
     country,
     result,
     description
     ){
       this.url = url;
       this.title = title;
       this.urlImg = urlImg;
       this.genre = genre;
       this.year = year;
       this.imdbScore = imdbScore;
       this.director = director;
       this.actors = actors;
       this.duration = duration;
       this.country = country;
       this.result = result;
       this.description = description;
     }
     showmovies(){
       console.log("test done")
     }
 }

/*cat1*/
/*http://localhost:8000/api/v1/titles/?sort_by=-imdb_score*/
/*fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(response => response.json())
  .then(moviesInfo => {
      bestMovieURL = moviesInfo.results[0].url;
*/
/*cat2 comedy*/
/*http://localhost:8000/api/v1/titles/?genre_contains=comedy&sort_by=-imdb_score*/
/*cat3 french film*/
/*http://localhost:8000/api/v1/titles/?country=france&sort_by=-imdb_score*/




/*link between html file and js file*/
/*best movies*/
/*let bestMoviesInfo = [];

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(response => response.json())
  .then(moviesInfo => {
      let bestMovieURL = moviesInfo.results[0].url;
      bestMoviesInfo = infoFromURL(bestMovieURL);
    })
  .catch(err => console.log(err));

console.log(bestMoviesInfo);

document.getElementById("title").innerHTML = bestMoviesInfo[0];
document.getElementById("img").src = bestMoviesInfo[1];
document.getElementById("description").innerHTML = bestMoviesInfo[2];


*/

function infoFromURL(url){

  let moviesInfoArray = [];

  fetch(url)
    .then(response => response.json())
    .then(moviesInfo => {

      moviesInfoArray.push(moviesInfo.title);
      moviesInfoArray.push(moviesInfo.image_url);
      moviesInfoArray.push(moviesInfo.description);

    })
   .catch(err => console.log(err));

  return moviesInfoArray;
}
 
/*fetch("http://localhost:8000/api/v1/titles/?genre=Comedy&page=5873&sort_by=imdb_score")
  .then(response => response.json())
  .then((moviesInfo) => {
      console.log(moviesInfo)*/
      /*document.getElementById("title").innerHTML = moviesInfo.title;
      document.getElementById("img").src = moviesInfo.image_url;*/
  /*})
  .catch((err) => console.log(err));*/


/*const img = document.getElementById('img');
const title = document.getElementById('title');

fetch('http://localhost:8000/api/v1/titles/9')
  .then(res => {console.log(res.json()); return(res.json())})
  .then(data => {console.log(data.image_url)})*/

/*const affichageName = document.getElementById("title");
const affichageimg = document.getElementById("img")
const affichageErr = document.querySelector("#err");*/

/*console.log("affichageimg = ")
console.log(affichageimg);*/

/*  var request = new XMLHttpRequest(); 
/*
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response.current_condition.condition);
    }
  };

  request.open('GET', 'http://localhost:8000/api/v1/titles/9', true);
  request.send(null);
  return request;
}

function moviesName(){
  var request = createRequest();
  alert(request);
}

function test(){
  alert('Hello World');
}


var request = new XMLHttpRequest();
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();
*/
/*request.onload = function() {
  var movies = request.reponse;*/
  /*populateHeader(movies);
  showMovies(movies);*/


/*function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'title: ' + jsonObj['title'] + ' // year: ' + jsonObj['year'];
  header.appendChild(myPara);

}

function showMovies(jsonObj) {
  var movies = jsonObj['title'];

  for(i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    var superPowers = heroes[i].powers;
    for(j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}*/



/*request.onreadystatechange = function() {
  if (request.readyState === 4) {
    alert(request.responseText);
  }
};
request.send();*/

/*function myFunction(){

  let url = 'http://127.0.0.1:8000/api/v1/titles/';
  let myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', url);

  let myInit = { method: 'GET',
              headers: myHeaders,
              mode: 'cors'};
              var
  let req = new Request(url, myInit);
  fetch(req)
      .then(response => {
          if(response.ok) {
              console.log(response);
          } else {
              console.log('error');

          }
      })
}*/

