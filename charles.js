const section = document.querySelector('article');

const requestURL = 'article.json';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

function showArticle(jsonObj) {
  var article = jsonObj["article"];
  console.log(article)
  article.map((element)=>{
    let text = document.createElement('p')
    text.innerHTML = element.unit_price
    document.querySelector('article').appendChild(text)
 })
}

request.onload = function() {
    var boutique = request.response;
    showArticle(boutique);
}