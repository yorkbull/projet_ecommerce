// IMPORT DE JSON //

var section = document.getElementById("boutique");

var requestURL = 'article.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
  var boutique = request.response;
  showArticle(boutique);
}

function showArticle(jsonObj) {
  var article = jsonObj['article'];

  for (var i = 0 ; i < article.length; i++){
    var myPrix = document.createElement('p')

    myPrix.textContent = article[i].unit_price;
  }
}
