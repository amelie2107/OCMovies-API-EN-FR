/*lancer l'API avec cette commande dans le Terminal : pipenv run python manage.py runserver */


async function main(){

/* BEST MOVIES */
APIrequestBest1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
APIrequestBest2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score"

let bestMoviesPromise1 = await getURLs(APIrequestBest1);
let bestMoviesPromise2 = await getURLs(APIrequestBest2);
let bestMoviesURLs = URLlst(bestMoviesPromise1, bestMoviesPromise2);

let bestMoviesData = await getMoviesInfo(bestMoviesURLs, "cat1-img");
htmlLinkTargetInfo(bestMoviesData, 0, 1, "cat1-img1", "img") 
htmlLinkTargetInfo(bestMoviesData, 0, 1, "bestTitle", "title") 
htmlLinkTargetInfo(bestMoviesData, 0, 1, "description", "sumup") 

htmlLink(bestMoviesData, 1, 8) 



/* BEST COMEDIES */
APIrequestComedies1 = "http://localhost:8000/api/v1/titles/?genre_contains=comedy&sort_by=-imdb_score"
APIrequestComedies2 = "http://localhost:8000/api/v1/titles/?genre_contains=comedy&page=2&sort_by=-imdb_score"

let bestComediesPromise1 = await getURLs(APIrequestComedies1);
let bestComediesPromise2 = await getURLs(APIrequestComedies2);
let bestComediesURLs = URLlst(bestComediesPromise1, bestComediesPromise2);

let bestComediesData = await getMoviesInfo(bestComediesURLs, "cat2-img");
htmlLink(bestComediesData, 0, 7) 


/* BEST FRENCH */
APIrequestFrench1 = "http://localhost:8000/api/v1/titles/?country=france&sort_by=-imdb_score"
APIrequestFrench2 = "http://localhost:8000/api/v1/titles/?country=france&page=2&sort_by=-imdb_score"

let bestFrenchPromise1 = await getURLs(APIrequestFrench1);
let bestFrenchPromise2 = await getURLs(APIrequestFrench2);
let bestFrenchURLs = URLlst(bestFrenchPromise1, bestFrenchPromise2);

let bestFrenchData = await getMoviesInfo(bestFrenchURLs, "cat3-img");
htmlLink(bestFrenchData, 0, 7) 


/* BEST OLD */
APIrequestOld1 = "http://localhost:8000/api/v1/titles/?sort_by=year"
APIrequestOld2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=year"

let bestOldPromise1 = await getURLs(APIrequestOld1);
let bestOldPromise2 = await getURLs(APIrequestOld2);
let bestOldURLs = URLlst(bestOldPromise1, bestOldPromise2);

let bestOldData = await getMoviesInfo(bestOldURLs, "cat4-img");
htmlLink(bestOldData, 0, 7)


}

async function getRequest(URL){
  let response = await fetch(URL)
  let data = await response.json()
  return data;
}

async function getURLs(URL){
  let promise = await getRequest(URL);
  return promise.results;
}


function URLlst(promise1, promise2){
  let urlList = [];
  for (const i in promise1){
    urlList.push(promise1[i].url);
  }
  for (const i in promise2) {
    urlList.push(promise2[i].url);
  }
  return urlList;
}

async function getMovieInfo(URL, htmlId){

  let promise = await getRequest(URL)

  const info = {
    "htmlId": htmlId,
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
  }
  return info;
}

async function getMoviesInfo(urlLst, htmleltId){
  let dictlst = [];
  let data;
  for (let i in urlLst){
    data = await getMovieInfo(urlLst[i], htmleltId.concat(Number(i)+1))
    dictlst.push(data);
  }
  return dictlst;
}

function htmlLink(dataLst, from, to){
  let htmlId;
  for (let i = from; i<to; i++){
    htmlId = dataLst[i]['htmlId']
    document.getElementById(htmlId).src = dataLst[i]['img']
  }
}

function htmlLinkTargetInfo(dataLst, from, to, htmlId, keyData){
  for (let i = from; i<to; i++){
    if (keyData === 'img'){
      document.getElementById(htmlId).src = dataLst[i][keyData]
    } else {
      document.getElementById(htmlId).innerHTML = dataLst[i][keyData]     
    }
  }
}

main()
