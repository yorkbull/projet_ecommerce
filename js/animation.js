// BOUTON AVIS CLIENT //
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");

let d1 = document.getElementById("avis_client_livraison");
let d2 = document.getElementById("avis_client_produit");
let d3 = document.getElementById("avis_client_sav");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})
togg2.addEventListener("click", () => {
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
})
togg3.addEventListener("click", () => {
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
})

// IMPORT DE JSON //

var section = document.getElementById("boutique");

var requestURL = 'article.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
  var boutique = request.response;

}

function showArticle(jsonObj) {
  var article = jsonObj[''];

  for (var i = 0 ; i < article.length; i++){
    var myImage = document.createElement('img')
  }
}
