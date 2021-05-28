
let togg1 = document.getElementById("togg1");

let d1 = document.getElementById("avis_client_livraison");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})
