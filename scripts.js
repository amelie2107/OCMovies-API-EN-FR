/*Run the API with this command in the terminal : pipenv run python manage.py runserver */

async function main(){

  /* BEST MOVIES - get info for page display - image, URI, (title and description only for the best movies*/
  let APIrequestBest1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
  let APIrequestBest2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";

  let bestMoviesPromise1 = await getURLs(APIrequestBest1);
  let bestMoviesPromise2 = await getURLs(APIrequestBest2);
  let bestMoviesURLs = URLlst(bestMoviesPromise1, bestMoviesPromise2);

  let bestMoviesData = await getMoviesInfo(bestMoviesURLs, "cat1-img");
  htmlLinkTargetInfo(bestMoviesData, 0, 1, "cat1-img1", "img");
  htmlLinkTargetInfo(bestMoviesData, 0, 1, "bestTitle", "title");
  htmlLinkTargetInfo(bestMoviesData, 0, 1, "description", "sumup");
  htmlLinkTargetInfo(bestMoviesData, 0, 1, "cat1-img1", "url");

  htmlLink(bestMoviesData, 1, 8);
  
 
  /* BEST COMEDIES - get info for page display - image, URI*/
  let APIrequestComedies1 = "http://localhost:8000/api/v1/titles/?genre_contains=comedy&sort_by=-imdb_score";
  let APIrequestComedies2 = "http://localhost:8000/api/v1/titles/?genre_contains=comedy&page=2&sort_by=-imdb_score";

  let bestComediesPromise1 = await getURLs(APIrequestComedies1);
  let bestComediesPromise2 = await getURLs(APIrequestComedies2);
  let bestComediesURLs = URLlst(bestComediesPromise1, bestComediesPromise2);

  let bestComediesData = await getMoviesInfo(bestComediesURLs, "cat2-img");
  htmlLink(bestComediesData, 0, 7);

  
  
  /* BEST FRENCH - get info for page display - image, URI*/
  let APIrequestFrench1 = "http://localhost:8000/api/v1/titles/?country=france&sort_by=-imdb_score";
  let APIrequestFrench2 = "http://localhost:8000/api/v1/titles/?country=france&page=2&sort_by=-imdb_score";

  let bestFrenchPromise1 = await getURLs(APIrequestFrench1);
  let bestFrenchPromise2 = await getURLs(APIrequestFrench2);
  let bestFrenchURLs = URLlst(bestFrenchPromise1, bestFrenchPromise2);

  let bestFrenchData = await getMoviesInfo(bestFrenchURLs, "cat3-img");
  htmlLink(bestFrenchData, 0, 7);

  
  /* BEST OLD - get info for page display - image, URI*/
  let APIrequestOld1 = "http://localhost:8000/api/v1/titles/?sort_by=year";
  let APIrequestOld2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=year";

  let bestOldPromise1 = await getURLs(APIrequestOld1);
  let bestOldPromise2 = await getURLs(APIrequestOld2);
  let bestOldURLs = URLlst(bestOldPromise1, bestOldPromise2);

  let bestOldData = await getMoviesInfo(bestOldURLs, "cat4-img");
  htmlLink(bestOldData, 0, 7);
 
}

/* get response of the API for a movie's URL with details of the movies
URL in paramaters : the URL of a particular movie
Return : promise with short information regarding the movie*/
async function getRequest(URL){
  let response = await fetch(URL).catch(error => console.log(error));
  let data = await response.json();
  return data;
}

/* URL in parameters : a page return by the API, 5 links toward a movie by page
Return : results of the promise with short information regarding the 5 movies */
async function getURLs(URL){
  let promise = await getRequest(URL);
  return promise.results;
}

/* This function allow to retreive and concat all the URLs 
of the movies define in both promises in an unique variable
Parameters : 2 promises with 5 movies in each
Return : a list of movies URL*/
function URLlst(promise1, promise2){
  let urlList = [];
  for (let i in promise1){
    if (promise1.hasOwnProperty(i)) {
      urlList.push(promise1[i].url);
    }
  }
  for (let i in promise2) {
    if (promise2.hasOwnProperty(i)) {
      urlList.push(promise2[i].url);
    }
  }
  return urlList;
}

/* from URL of the moviesresponse retreive full information regarding the movie
parameters : URL of the movie, htmlId to define the position of the object in the HTML page
return : an object with informations needed for the display*/
async function getMovieInfo(URL, htmlId){

  let promise = await getRequest(URL);

  const info = {
    "htmlId": htmlId,
    "url": URL,
    "img": promise.image_url,
    "title": promise.title,
    "sumup": promise.description,
  };
  return info;
}

/* from URL of the moviesresponse retreive full information regarding the movie
parameters : URL of the movie, htmlId to define the position of the object in the HTML page
return : an object with more than full informations needed for the display*/
async function getFullMovieInfo(URL){

  let promise = await getRequest(URL);

  const info = {
    "url": URL,
    "img": promise.image_url,
    "title": promise.title,
    "genre": "genre : ".concat(promise.genre),
    "date": "published date : ".concat(promise.date_published),
    "rate": "rated : ".concat(promise.rated),
    "score": "imdb score : ".concat(promise.imdb_score),
    "director": "directors : ".concat(promise.directors),
    "actor": "actors : ".concat(promise.actors),
    "time": "duration : ".concat(promise.duration, "min"),
    "countries": "countries : ".concat(promise.country),
    "result": "box-office result : ".concat(promise.metascore),
    "sumup": promise.description,
    "description": "description : ".concat(promise.long_description)
  };
  return info;
}

/* Paramaters : a list of URLs, html element to place information in the HTML page
Return : a list of object with all movies information */
async function getMoviesInfo(urlLst, htmleltId){
  let dictlst = [];
  let data;
  for (let i in urlLst){
    if (urlLst.hasOwnProperty(i)) {
      data = await getMovieInfo(urlLst[i], htmleltId.concat(Number(i)+1));
      dictlst.push(data);
    }
  }
  return dictlst;
}

/* Place data in the HTML page
Parameters : A list of movies information, 
FROM which element of the list TO which element of the list we will use
Return : no return but image and URL are push in the HTML page*/
function htmlLink(dataLst, from, to){
  let htmlId;
  for (let i = from; i<to; i++){
    htmlId = dataLst[i].htmlId;
    document.getElementById(htmlId).src = dataLst[i].img;
    document.getElementById(htmlId).id = dataLst[i].url;
  }
}

/* Place a specific data in the HTML page
Parameters : A list of movies information, 
FROM which element of the list TO which element of the list we will use
HTMLID where we want to place the element
KeyData is the name of the element we want to place
Return : no return but specific data is push in the HTML page*/
function htmlLinkTargetInfo(dataLst, from, to, htmlId, keyData){
  for (let i = from; i<to; i++){
    if (keyData === 'img'){
      document.getElementById(htmlId).src = dataLst[i][keyData];
    } else if (keyData === 'url') {
      document.getElementById(htmlId).id = dataLst[i][keyData]; 
    } else {
      document.getElementById(htmlId).innerHTML = dataLst[i][keyData];   
    }
   }
}

main();
