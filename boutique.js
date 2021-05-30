// IMPORT DE JSON //

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
    let image = document.createElement('img')
    let text = document.createElement('p')
    let name = document.createElement('p')
    image.innerHTML =+ "src="+ element.img_src
    text.innerHTML = element.unit_price
    name.innerHTML = element.name
    document.querySelector('article').appendChild(image)
    document.querySelector('article').appendChild(text)
    document.querySelector('article').appendChild(name)
 })
}

request.onload = function() {
    var boutique = request.response;
    showArticle(boutique);
}
